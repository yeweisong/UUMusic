<template>
  <div class="ballWrap">
    <div class="inner">
      <div class="ballItem" v-for="item in data.ball" :key="item.id">
        <div
            class="imgWrap">
          <img :src="item.iconUrl" alt="">
        </div>
        <span class="name">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {getHomepageBall} from "@/http/api";
import {reactive} from "vue";
const data = reactive({
  ball:[]
})
getHomepageBall().then(res=>{
  data.ball=res.data.data;
})
</script>

<style scoped lang="less">
::-webkit-scrollbar{
  display: none;
}
.ballWrap{
  width: 100%;
  padding: 32px 0;
  overflow: hidden;
  border-bottom: 1px solid #e6e6e6;

  .inner{
    width: auto;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
  }

  .ballItem{

    display: inline-block;
    width: 148px;
    text-align: center;
  }
  .imgWrap{
    display: inline-block;
    width: 92px;
    height: 92px;
    border-radius: 50%;
    background-color: #fff5f5;
    img{
      display: block;
      width: 100%;
      height: 100%;
      filter: invert(50%) sepia(60%) saturate(7086%) hue-rotate(338deg) brightness(99%) contrast(103%);
    }
  }

  .name{
    display: block;
    font-size: 24px;
    color: #999;
  }
}
</style>