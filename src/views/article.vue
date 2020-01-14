<template>
  <div class="article">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
      <el-breadcrumb-item>文章列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table :data="articleList" style="width: 100%;margin-top:20px" border>
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="title" label="标题" width="420"></el-table-column>
      <el-table-column prop="create_date" label="日期" width="180"></el-table-column>
      <el-table-column prop="type" label="类型" width="100"></el-table-column>
      <el-table-column prop="user.nickname" label="作者" width="280"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="编辑" placement="top">
            <el-button type="primary" icon="el-icon-edit" @click="edit(scope.row)"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="分享" placement="top">
            <el-button type="success" icon="el-icon-share"></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="删除" placement="top">
            <el-button type="warning" icon="el-icon-delete"></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageIndex"
      :page-sizes="[2, 4, 6, 8]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import { category } from "@/apis/article.js";
export default {
  data() {
    return {
      articleList: {},
      pageIndex: 1,
      pageSize: 2,
      total: ""
    };
  },
  mounted() {
    this.init()
  },
  methods: {
    handleEdit() {},
    handleDelete() {},
    handleCurrentChange(val) {
      this.pageIndex=val
      this.init()
      // 切换页码
    },
    handleSizeChange(val) {
      this.pageSize=val
      this.init()
      //切换每页显示条数
    },
    async init() {
      let res = await category({
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      });
      this.articleList = res.data.data;
      this.total = res.data.total;
    }
  }
};
</script>

<style  lang='less' scoped>
.el-table {
  margin-top: 20px;
}
</style>