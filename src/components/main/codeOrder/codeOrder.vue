<template>
  <div>
    <h2>扫码订单统计</h2>
    <el-form ref="form" :model="form" label-width="120px">
      <el-row>
        <el-col :span="4">
          <el-form-item label="店铺名称：">
            <el-input v-model="form.shopName" placeholder="请填写店铺名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="设备ID：">
            <el-input v-model="form.deviceId" placeholder="请填写设备ID"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="用户ID：">
            <el-input v-model="form.deviceId" placeholder="请填写用户ID"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="设备地址：">
            <el-cascader expand-trigger="hover" :options="options" v-model="form.selectedOptions" @change="handleChange"
                         placeholder="请选择地区"></el-cascader>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="时间范围：">
            <el-date-picker v-model="form.date" type="daterange" placeholder="选择日期范围"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6" :offset="9">
          <el-button type="primary">查询</el-button>
          <el-button type="primary">重置</el-button>
          <el-button type="primary">导出</el-button>
        </el-col>
      </el-row>
    </el-form>
    <hr>
    <el-table :data="tableData" border stripe style="width: 1511px;margin: 0 auto;">
      <el-table-column type="index" label="序号" width="80" ></el-table-column>
      <el-table-column prop="date" label="日期" width="140" ></el-table-column>
      <el-table-column prop="deviceId" label="设备ID" width="120"></el-table-column>
      <el-table-column label="设备地址" width="360">
        <el-table-column prop="province" label="省/直辖市" width="120"></el-table-column>
        <el-table-column prop="city" label="市" width="120"></el-table-column>
        <el-table-column prop="area" label="区/县" width="120"></el-table-column>
      </el-table-column>
      <el-table-column prop="shopName" label="店铺名称" width="170"></el-table-column>
      <el-table-column prop="deviceName" label="设备名称" width="160"></el-table-column>
      <el-table-column prop="codeNum" label="扫码次数" width="180"></el-table-column>
      <el-table-column prop="profit" label="收益金额(元)" width="160"></el-table-column>
      <el-table-column prop="userId" label="用户ID" width="140"></el-table-column>
    </el-table>
    <div class="mypage">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="20">
      </el-pagination>
    </div>
  </div>
</template>
<style lang="less">
  @import '../../../less/codeOrder.less';
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
            value: 'form', label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox', label: 'Checkbox 多选框'
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
            }, {value: 'datetime-picker', label: 'DateTimePicker 日期时间选择器'}, {
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
          value: 'ziyuan', label: '资源',
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
        }
        ],
        tableData: [{
          date: '2017-06-08',
          deviceId: "5646216",
          province: "广东省",
          city: "广州市",
          area: "天河区",
          shopName: "考拉",
          deviceName: "纸巾机",
          codeNum: '41967498',
          profit: "64466498.00",
          userId: "13794181213",
        },
          {
            date: '2017-06-08',
            deviceId: "5646216",
            province: "广东省",
            city: "广州市",
            area: "天河区",
            shopName: "考拉",
            deviceName: "纸巾机",
            codeNum: '41967498',
            profit: "64466498.00",
            userId: "13794181213",
          },
          {
            date: '2017-06-08',
            deviceId: "5646216",
            province: "广东省",
            city: "广州市",
            area: "天河区",
            shopName: "考拉",
            deviceName: "纸巾机",
            codeNum: '41967498',
            profit: "64466498.00",
            userId: "13794181213",
          },
        ],
        currentPage4:1,
      }
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    mounted() {

    }
  }
</script>
