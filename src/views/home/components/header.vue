<template>
  <div class="headerWrap">
    <div class="menu">
      <i class="iconfont icon-caidan"></i>
    </div>
    <div class="search">
      <i class="iconfont icon-sousuo"></i>
      <span>{{data.showKeyword}}</span>
    </div>
    <div class="listen">
      <i class="iconfont icon-tianchongxing-"></i>
    </div>
  </div>
</template>

<script setup>
import {searchKeyword} from '@/http/api.js'
import {reactive} from "vue";

const data=reactive({
  showKeyword:''
})
searchKeyword().then(res=>{
  data.showKeyword=res.data.data.showKeyword
})

</script>

<style scoped lang="less">
.headerWrap{
  display: flex;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 48px 32px 0;
  font-size: 32px;

  .iconfont{
    font-size: 40px;
    color: #000;
  }

  .search{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 530px;
    height: 72px;
    color: #d1d1d1;
    font-size: 25px;
    border-radius: 36px;
    background-color: #fff;

    .iconfont{
      color: #d1d1d1;
      font-size: 28px;
      margin-right: 12px;
    }
  }


}
</style>