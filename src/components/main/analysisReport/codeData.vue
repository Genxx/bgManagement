<template>
  <div>
    <h2>每日汇总</h2>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple"><p>设备总数</p>
          <p>{{data.deviceNum}}</p></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <p>昨日扫码次数</p>
          <p>{{data.codeYesterday}}</p>
          <p>累计扫码次数</p>
          <p>{{data.codeCumulative}}</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <p>昨日收益金额</p>
          <p>{{data.incomeYesterday}}元</p>
          <p>累计收益金额</p>
          <p>{{data.incomeCumulative}}元</p>
        </div>
      </el-col>
    </el-row>
    <hr>
    <h2>扫码数据统计</h2>
    <el-radio-group v-model="radio" @change="changeData(radio)">
      <el-radio class="radio" label="0">今天</el-radio>
      <el-radio class="radio" label="-1">昨天</el-radio>
      <el-radio class="radio" label="7">本周</el-radio>
      <el-radio class="radio" label="30">本月</el-radio>
    </el-radio-group>
    <el-date-picker
      v-model="date"
      type="daterange"
      placeholder="选择日期范围">
    </el-date-picker>
    <el-cascader
      expand-trigger="hover"
      :options="options"
      v-model="selectedOptions2"
      @change="handleChange"
      placeholder="请选择地区">
    </el-cascader>
    <el-button type="primary">查询</el-button>
    <el-button type="primary">重置</el-button>
    <el-button type="primary">导出</el-button>
    <div id="code_data" style="width: 100%;height: 500px;">

    </div>
  </div>
</template>
<style lang="less" scoped>
  @import '../../../less/codeDate.less';
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
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
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
      handleChange(value) {
        console.log(value);
      },
      makeCharts() {
        let oChart = document.getElementById("code_data");
        let myChart = this.$echarts.init(oChart);
        myChart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          toolbox: {
            feature: {
              dataView: {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
          },
          legend: {
            data:['蒸发量','降水量','平均温度']
          },
          xAxis: [
            {
              type: 'category',
              data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '水量',
              min: 0,
              max: 250,
              interval: 50,
              axisLabel: {
                formatter: '{value} ml'
              }
            },
            {
              type: 'value',
              name: '温度',
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                formatter: '{value} °C'
              }
            }
          ],
          series: [
            {
              name:'蒸发量',
              type:'bar',
              data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
              name:'降水量',
              type:'bar',
              data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
              name:'平均温度',
              type:'line',
              yAxisIndex: 1,
              data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
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
