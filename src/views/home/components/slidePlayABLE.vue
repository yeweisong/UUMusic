<template>
<div class="slidePlayABLE">
  <div class="inner">
    <div class="slideItem" v-for="item in data.list" :key="item.id">
      <img class="img" :src="item.resource.mlogBaseData.coverUrl" alt="">
      <div>
        <p :class="['mainText',{'hasSub':item.reason}]">{{item.resource.mlogBaseData.text}}</p>
        <p class="subText" v-if="item.reason">{{item.reason}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import {useAttrs,reactive} from "vue";
const attrs=useAttrs();

const data = reactive({
  list:attrs.blockData.extInfo
})
</script>

<style scoped lang="less">
::-webkit-scrollbar{
  display: none;
}
.slidePlayABLE{
  width: 100%;
  overflow: hidden;

  .inner{
    width: auto;
    padding: 0 32px;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
  }

  .slideItem{
    width: 224px;
    vertical-align: top;
    display: inline-block;

    &:not(:last-child){
      margin-right: 20px;
    }
  }

  .img{
    display: block;
    width: 224px;
    height: 276px;
    border-radius: 18px;
  }

  .mainText{
    font-size: 27px;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    white-space: pre-wrap;
  }

  .hasSub{
    -webkit-line-clamp:1;
  }

  .subText{
    font-size: 20px;
    background-color: #fff9f6;
    height: 36px;
    line-height: 36px;
    padding: 0 10px;
    border-radius: 8px;
    color: #ff7834;
    width: max-content;
  }
}
</style>