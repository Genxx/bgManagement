<template>
  <div id="survey">
    <el-row :gutter="20" class="el_top">
      <el-col :lg="6" :md="12" :xs="12" :sm="24">
        <div class="grid-content bg-blue clearfix">
          <i class="icon_device"></i>
          <div>
            <p>在线台数：</p>
            <p>离线台数：</p>
            <p>低电量台数：</p>
          </div>
        </div>
      </el-col>
      <el-col :lg="6" :md="12" :xs="12" :sm="24">
        <div class="grid-content bg-yellow">
          <i class="icon_code"></i>
          <div>
            <p>扫码次数：</p>
            <!--<p>关注人数：</p>-->
          </div>
        </div>
      </el-col>
      <el-col :lg="6" :md="12" :xs="12" :sm="24">
        <div class="grid-content bg-red">
          <i class="icon_profit"></i>
          <div>
            <p>线上收益：</p>
            <p>广告收支：</p>
          </div>
        </div>
      </el-col>
      <el-col :lg="6" :md="12" :xs="12" :sm="24">
        <div class="grid-content bg-green">
          <i class="icon_withdrawals"></i>
          <div>
            <p>提现请求：</p>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="table_my">
      <h2>总体概述</h2>
      <div id="code_data" style="width: 100%;height: 500px;">

      </div>
    </el-row>
  </div>
</template>
<style lang="less">
  @import '../../../less/generalSurvey.less';
</style>
<script>
  export default {

    components: {},
    data() {
      return {
        form: {
          shopName: '',
          deviceId: '',
          deviceAddr: '',
          selectedOptions: [],
          date: '',
          price_start: 0,
          price_end: 0,
        },
        tableData: [
          {
            date: "2019-06-08",
            adver_id: '215646546',
            adver_type: '公众号',
            adver_name: '爱奇艺公众号',
            price: '1.00',
            code_num: 1654684,
            people: 4156,
            cost: 49874968,
            user_id: 'A6543214',
          },
          {
            date: "2019-06-08",
            adver_id: '215646546',
            adver_type: '公众号',
            adver_name: '爱奇艺公众号',
            price: '1.00',
            code_num: 1654684,
            people: 4156,
            cost: 49874968,
            user_id: 'A6543214',
          }
        ],
        currentPage4: 1
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      makeCharts() {
        let oChart = document.getElementById("code_data");
        let myChart = this.$echarts.init(oChart);
        myChart.setOption({
          title: {
            text: '折线图堆叠'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name:'邮件营销',
              type:'line',
              stack: '总量',
              data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
              name:'联盟广告',
              type:'line',
              stack: '总量',
              data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
              name:'视频广告',
              type:'line',
              stack: '总量',
              data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
              name:'直接访问',
              type:'line',
              stack: '总量',
              data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
              name:'搜索引擎',
              type:'line',
              stack: '总量',
              data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        })
      }
    },
    mounted() {
      this.makeCharts();
    }
  }
</script>
