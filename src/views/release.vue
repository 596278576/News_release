<template>
  <div class="release">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
      <el-breadcrumb-item>文章发布</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <!-- 用户 -->
        <el-form-item label="活动名称" prop="name">
          <el-input></el-input>
        </el-form-item>
        <!-- 类型 -->
        <el-form-item label="类型" prop="name">
          <el-radio-group>
            <el-radio :label="1">文章</el-radio>
            <el-radio :label="2">视频</el-radio>
          </el-radio-group>
          <VueEditor :config="config"></VueEditor>
        </el-form-item>
        <!-- 栏目 -->
        <el-form-item label="栏目" prop="name">
          <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
          >全选</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- 封面 -->
        <el-form-item label="活动名称" prop="name">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
        <el-button type="primary">主要按钮</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import VueEditor from "vue-word-editor";
import "quill/dist/quill.snow.css";
export default {
  components: {
    VueEditor
  },
  data() {
    return {
      config: {
        // 上传图片的配置
        uploadImage: {
          url: "http://localhost:3000/upload",
          name: "file",
          // res是结果，insert方法会把内容注入到编辑器中，res.data.url是资源地址
          uploadSuccess(res, insert) {
            insert("http://localhost:3000" + res.data.url);
          }
        },

        // 上传视频的配置
        uploadVideo: {
          url: "http://localhost:3000/upload",
          name: "file",
          uploadSuccess(res, insert) {
            insert("http://localhost:3000" + res.data.url);
          }
        }
      }
    };
  }
};
</script>

<style lang='less' scoped>
/deep/ .el-card {
  margin-top: 20px;
}
</style>