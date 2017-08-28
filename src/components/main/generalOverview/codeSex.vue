<template>
    <div>
      <h2>扫码性别比例</h2>
      <el-radio-group v-model="radio" @change="changeData(radio)">
        <el-radio class="radio" label="0">今天</el-radio>
        <el-radio class="radio" label="-1">昨天</el-radio>
        <el-radio class="radio" label="7">本周</el-radio>
        <el-radio class="radio" label="30">本月</el-radio>
        <el-radio class="radio" label="90">近三个月</el-radio>
        <el-radio class="radio" label="180">最近半年</el-radio>
        <el-radio class="radio" label="365">最近一年</el-radio>
      </el-radio-group>
      <el-date-picker
        v-model="data"
        type="daterange"
        placeholder="选择日期范围"
      >
      </el-date-picker>
      <div id="main_sex" style="width: 80%;height: 680px;">

      </div>
    </div>
</template>
<style lang="less">
  @import '../../../less/codeSex.less';
</style>
<script>
    export default {

        components: {},
        data() {
            return {
              data: [],
              radio: '',
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
          }
        },
        mounted() {
          let oChart = document.getElementById("main_sex");
          let myChart = this.$echarts.init(oChart);
          myChart.setOption({
            title : {
              x:'center'
            },
            tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              left: 'left',
              data: ['男','女']
            },
            series : [
              {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                  {value:300, name:'男'},
                  {value:600, name:'女'},
                ],
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          });
        }
    }
</script>
