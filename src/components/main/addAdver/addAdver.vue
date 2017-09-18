<template>
  <div id="adverOrder">
    <h2>广告订单统计</h2>
    <el-form ref="form" :model="form" label-width="120px">
      <el-row>
        <el-col :span="4">
          <el-form-item label="广告名称：">
            <el-input v-model="form.shopName" placeholder="请填写广告名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="广告ID：">
            <el-input v-model="form.deviceId" placeholder="请填写广告ID"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="用户ID：">
            <el-input v-model="form.deviceId" placeholder="请填写用户ID"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="投放价格范围：">
            <el-input-number v-model="form.price_start" :min="0"></el-input-number>
            -
            <el-input-number v-model="form.price_end" :min="form.price_start"></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item label="时间范围：">
            <el-date-picker v-model="form.date" type="daterange" placeholder="选择日期范围"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row></el-row>
      <el-row>
        <el-col :span="6" :offset="9">
          <el-button type="primary">查询</el-button>
          <el-button type="primary">重置</el-button>
          <el-button type="primary">导出</el-button>
        </el-col>
      </el-row>
    </el-form>
    <hr>
    <el-table :data="tableData" border stripe style="width: 1441px;margin: 0 auto;">
      <el-table-column type="index" label="序号" width="80"></el-table-column>
      <el-table-column prop="date" label="日期" width="140"></el-table-column>
      <el-table-column prop="adver_id" label="广告ID" width="130"></el-table-column>
      <el-table-column prop="adver_type" label="广告类型" width="120"></el-table-column>
      <el-table-column prop="adver_name" label="广告名称" width="200"></el-table-column>
      <el-table-column prop="price" label="投放价格(元)" width="120"></el-table-column>
      <el-table-column prop="code_num" label="扫码次数" width="170"></el-table-column>
      <el-table-column prop="people" label="关注人数" width="160"></el-table-column>
      <el-table-column prop="cost" label="消耗金额" width="180"></el-table-column>
      <el-table-column prop="user_id" label="用户ID" width="140"></el-table-column>
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
  @import '../../../less/adverOrder.less';
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
            adver_name:'爱奇艺公众号',
            price:'1.00',
            code_num:1654684,
            people:4156,
            cost:49874968,
            user_id:'A6543214',
          },
          {
            date: "2019-06-08",
            adver_id: '215646546',
            adver_type: '公众号',
            adver_name:'爱奇艺公众号',
            price:'1.00',
            code_num:1654684,
            people:4156,
            cost:49874968,
            user_id:'A6543214',
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
      }
    },
    mounted() {

    }
  }
</script>
