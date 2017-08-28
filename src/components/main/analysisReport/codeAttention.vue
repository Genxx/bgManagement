<template>
  <div>
    <h2>每日汇总</h2>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <p>昨日扫码次数</p>
          <p>{{data.codeSum}}</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <p>昨日关注人数</p>
          <p>{{data.followYesterday}}</p>
          <p>累计关注人数</p>
          <p>{{data.followCumulative}}</p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <p>昨日消耗金额</p>
          <p>{{data.spendYesterday}}元</p>
          <p>累计消耗金额</p>
          <p>{{data.spendCumulative}}元</p>
        </div>
      </el-col>
    </el-row>
    <hr>
    <h2>扫码数据统计</h2>
    <el-radio-group v-model="radio" @change="changeData(radio)">
      <el-radio class="radio" label="0" >今天</el-radio>
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
    <el-button type="primary">查询</el-button><el-button type="primary">重置</el-button><el-button type="primary">导出</el-button>
    <div id="code_attention" style="width: 100%;height: 500px;">

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
          codeSum: 2251,
          followYesterday: 562251,
          followCumulative: 12562251,
          spendYesterday: 356254,
          spendCumulative: 16546165465
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
      makeCharts(){
        let oChart = document.getElementById("code_attention");
        let myChart = this.$echarts.init(oChart);
//        数据来源
        var base = +new Date(1968, 9, 3);
        var oneDay = 24 * 3600 * 1000;
        var date = [];
        var data = [Math.random() * 300];
        for (var i = 1; i < 20000; i++) {
          var now = new Date(base += oneDay);
          date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
          data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
        }
        let my = this.$echarts;
        myChart.setOption({
          tooltip: {
            trigger: 'axis',
            position: function (pt) {
              return [pt[0], '10%'];
            }
          },
          toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
          },
          dataZoom: [{
            type: 'inside',
            start: 0,
            end: 10
          }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
              color: '#fff',
              shadowBlur: 3,
              shadowColor: 'rgba(0, 0, 0, 0.6)',
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
          }],
          series: [
            {
              name: '模拟数据',
              type: 'line',
              smooth: true,
              symbol: 'none',
              sampling: 'average',
              itemStyle: {
                normal: {
                  color: 'rgb(255, 70, 131)'
                }
              },
              areaStyle: {
                normal: {
                  color: my.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                  }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                  }])
                }
              },
              data: data
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
