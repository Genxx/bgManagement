<template>
  <div>
    <h2>余额变化统计</h2>
    <hr>
    <h2>扫码数据统计</h2>
    <el-radio-group v-model="radio" @change="changeData(radio)">
      <el-radio class="radio" label="0">日</el-radio>
      <el-radio class="radio" label="7">周</el-radio>
      <el-radio class="radio" label="30">月</el-radio>
    </el-radio-group>
    <el-date-picker
      v-model="date"
      type="daterange"
      placeholder="选择日期范围">
    </el-date-picker>
    <el-button type="primary">查询</el-button>
    <el-button type="primary">重置</el-button>
    <el-button type="primary">导出</el-button>
    <div id="balance_data" style="width: 100%;height: 500px;">

    </div>
  </div>
</template>
<style lang="less">
  @import '../../../less/balanceChange.less';
</style>
<script>
  export default {

    components: {},
    data() {
      return {
        data: {
          deviceNum: 2251,
          codeYesterday: 562251,
          codeCumulative: 12562251,
          incomeYesterday: 356254,
          incomeCumulative: 16546165465
        },
        date: '',
        selectedOptions2: [],
        radio: ''
      }
    },
    methods: {
      changeData(num) {
        this.radio = num
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * num);
//            picker.$emit('pick', [start, end]);
        this.date = [start, end];
        console.log(this.date)
      },
      makeCharts() {
        let data = [["2000-06-05",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],["2000-07-11",92],["2000-07-12",113],["2000-07-13",107],["2000-07-14",131],["2000-07-15",111],["2000-07-16",64],["2000-07-17",69],["2000-07-18",88],["2000-07-19",77],["2000-07-20",83],["2000-07-21",111],["2000-07-22",57],["2000-07-23",55],["2000-07-24",60]];
        let oChart = document.getElementById("balance_data");
        let myChart = this.$echarts.init(oChart);
        myChart.setOption({
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            data: data.map(function (item) {
              return item[0];
            })
          },
          yAxis: {
            splitLine: {
              show: false
            }
          },
          toolbox: {
            left: 'center',
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              restore: {},
              saveAsImage: {}
            }
          },
          dataZoom: [{
            startValue: '2014-06-01'
          }, {
            type: 'inside'
          }],
          visualMap: {
            top: 10,
            right: 10,
            pieces: [{
              gt: 0,
              lte: 50,
              color: '#096'
            }, {
              gt: 50,
              lte: 100,
              color: '#ffde33'
            }, {
              gt: 100,
              lte: 150,
              color: '#ff9933'
            }, {
              gt: 150,
              lte: 200,
              color: '#cc0033'
            }, {
              gt: 200,
              lte: 300,
              color: '#660099'
            }, {
              gt: 300,
              color: '#7e0023'
            }],
            outOfRange: {
              color: '#999'
            }
          },
          series: {
            name: 'Beijing AQI',
            type: 'line',
            data: data.map(function (item) {
              return item[1];
            }),
            markLine: {
              silent: true,
              data: [{
                yAxis: 50
              }, {
                yAxis: 100
              }, {
                yAxis: 150
              }, {
                yAxis: 200
              }, {
                yAxis: 300
              }]
            }
          }
        })
      }
    },
    mounted() {
      this.makeCharts();
    }
  }
</script>
