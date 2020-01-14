<template>
  <div class="article">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table :data="list" border style="width: 100%">
            <el-table-column
      type="index"
      width="50">
    </el-table-column>
      <el-table-column prop="title" label="日期" width="180"></el-table-column>
      <el-table-column prop="user.nickname" label="姓名" width="180"></el-table-column>
      <el-table-column prop="type" label="地址"></el-table-column>
              <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {category} from '@/apis/article'
export default {
    data () {
        return {
            list:[]
        }
    },
    async mounted(){
        let res=await category({
            pageIndex:1,
            pageSige:20
        })
        // console.log(res);
        this.list=res.data.data
    }
};
</script>

<style>
</style>