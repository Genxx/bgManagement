<template>
  <div>
    <h2>广告产品管理</h2>
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
            <el-input v-model="form.userId" placeholder="请填写用户ID"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="投放价格范围：">
            <el-input-number v-model="form.price_start" :min="0"></el-input-number>
            -
            <el-input-number v-model="form.price_end" :min="form.price_start"></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="投放时间范围：">
            <el-date-picker v-model="form.date" type="daterange" placeholder="选择日期范围"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5">
          <el-form-item label="投放地区范围：">
            <el-select v-model="form.areaArray" multiple placeholder="请选择投放地区范围">
              <el-option
                v-for="item in area"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="广告类型：">
            <el-select v-model="form.adverTypeOptions" placeholder="请选择">
              <el-option
                v-for="item in adverTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="10">
          <el-form-item label="上线状态：">
            <el-col :span="4">
              <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" label="全部" name="type"
                           @change="handleCheckAllChange"></el-checkbox>
            </el-col>
            <el-col :span="6">
              <el-checkbox-group v-model="form.checkedStatus" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="item in onlineStatus" :label="item" :key="item">{{item}}</el-checkbox>
              </el-checkbox-group>
            </el-col>
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
    <el-table :data="tableData" border stripe style="width: 1471px;margin: 0 auto;">
      <el-table-column type="index" label="序号" width="80"></el-table-column>
      <el-table-column prop="adverId" label="广告ID" width="130"></el-table-column>
      <el-table-column prop="adverType" label="广告类型" width="120"></el-table-column>
      <el-table-column prop="adverName" label="广告名称" width="200"></el-table-column>
      <el-table-column prop="propaganda" label="宣传语" width="120"></el-table-column>
      <el-table-column prop="price" label="投放价格" width="130"></el-table-column>
      <el-table-column prop="timeStart" label="开始时间" width="150"></el-table-column>
      <el-table-column prop="timeEnd" label="结束时间" width="150"></el-table-column>
      <el-table-column prop="onlieStatus" label="上线状态" width="110"></el-table-column>
      <el-table-column prop="area" label="投放范围" width="140" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column label="操作" width="140">
        <template scope="scope">
          <el-button @click="handleClick" type="text" size="small">修改</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
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
  @import '../../../less/adverList.less';
</style>
<script>
  const statusOption = ['上线', '下线'];
  export default {
    data() {
      return {
        form: {
          shopName: '',
          deviceId: '',
          userId: '',
          price_start: 0,
          price_end: 0,
          deviceAddr: '',
          selectedOptions: [],
          date: '',
          adverTypeOptions: '',
          checkedStatus: ['上线'],
          areaArray: [],
        },
        area: [
          {
            value: '选项1',
            label: '北京',
          },
          {
            value: '选项2',
            label: '上海',
          },
          {
            value: '选项3',
            label: '广州',
          },
          {
            value: '选项4',
            label: '天津',
          }
        ],
        onlineStatus: statusOption,
        adverTypeOptions: [
          {
            value: '选项1',
            label: '公众号',
          },
          {
            value: '选项2',
            label: 'H5分享链接',
          },
        ],
        checkAll: true,
        isIndeterminate: true,

        tableData: [
          {
            adverId: 165446,
            adverType: '公众号',
            adverName: '测试用户广告',
            propaganda: 'qshnfkljsadf',
            price: '1.00',
            timeStart: '2017-07-01',
            timeEnd: '2017-08-05',
            onlieStatus: '上线',
            area: '广东，北京，云南，中山',
          },
          {
            adverId: 165446,
            adverType: '公众号',
            adverName: '测试用户广告',
            propaganda: 'qshnfkljsadf',
            price: '1.00',
            timeStart: '2017-07-01',
            timeEnd: '2017-08-05',
            onlieStatus: '上线',
            area: '广东，北京，云南，中山',
          }
        ],
        currentPage4: 4,
      }
    },
    methods: {
      handleCheckAllChange(event) {
        console.log(event);
        this.form.checkedStatus = event.target.checked ? statusOption : [];
        console.log(this.form.checkedStatus);
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        console.log(value)
        this.checkAll = checkedCount === this.onlineStatus.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.onlineStatus.length;
      },
      handleClick() {
        console.log(1);
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
