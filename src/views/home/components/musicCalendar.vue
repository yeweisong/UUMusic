<template>
<div class="musicCalendar">
  <div class="itemWrap" v-for="(item,index) in data.list" :key="item.creativeId">
    <div>
      <p class="title">
        <span>{{date[index]}}</span>
        <span class="label" v-for="label in item.resources[0].uiElement.labelTexts">{{label}}</span>
      </p>
      <p class="mainTitle">{{item.resources[0].uiElement.mainTitle.title}}</p>
    </div>
    <p class="notice" v-if="item.resources[0].resourceExtInfo.subCount">
      <i class="iconfont icon-tixing"></i>
      <span class="subCount">{{item.resources[0].resourceExtInfo.subCount}}</span>
    </p>
    <img class="img" :src="item.resources[0].uiElement.image.imageUrl" alt="">
  </div>
</div>
</template>

<script setup>
import {useAttrs,reactive} from "vue";
const attrs=useAttrs();
const data = reactive({
  list:attrs.blockData.creatives
})
const date=['今天','明天','后天']
</script>

<style scoped lang="less">
.musicCalendar{
  border-top:1px solid #e6e6e6;

  .itemWrap{
    padding:28px 0;
    margin: 0 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:not(:last-child){
      border-bottom:1px solid #e6e6e6;
    }
  }

  .img{
    width: 108px;
    height: 108px;
    border-radius: 12px;
  }

  .title{
    font-size: 28px;
    color: #999;
    margin-bottom: 8px;
  }

  .label{
    margin-left: 15px;
    font-size: 20px;
    color: #ff7834;
    background-color: #fff9f6;
    height: 36px;
    line-height: 36px;
    padding: 0 10px;
    border-radius: 8px;
    width: max-content;
  }

  .mainTitle{
    width: 488px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 32px;
  }

  .notice{
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon-tixing{
      font-size: 36px;
    }

    .subCount{
      font-size: 16px;
      color: #999;
    }
  }
}

</style>