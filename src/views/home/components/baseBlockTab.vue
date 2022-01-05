<template>
<div>
  <div class="blockHeadWrap">
    <div class="title">
      <span v-for="(tab,index) in tabs">
        <span @click="changeTab(index)" :class="{'active':data.activeTab===index}">{{tab}}</span>
        <span  v-if="index!==tabs.length-1" class="divider">|</span>
      </span>
    </div>
<!--    <div class="btn"></div>-->
  </div>
  <div class="blockContent">
    <div v-for="(item,index) in data.list" :key="index">
      <Swiper
          v-show="index===data.activeTab"
          class="swiper-container">
        <SwiperSlide
            v-for="(swiper,index) in item"
            :key="index"
            class="swiper-slide">
          <div class="resourceWrap" v-for="(resource,index) in swiper.resources" :key="index">
            <img class="img" :src="resource.uiElement.image.imageUrl" alt="">
            <div class="titleWrap">
              <p class="mainTitle">{{resource.uiElement.mainTitle.title}}</p>
              <p :class="resource.uiElement?.subTitle?.titleType">{{resource.uiElement?.subTitle?.title}}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

  </div>
</div>
</template>

<script setup>
import { defineProps,reactive } from 'vue'
import 'swiper/css';
import {Swiper,SwiperSlide} from 'swiper/vue'

const props = defineProps({
  blockData: Object,
})
let list = [],obj={},tabs=[];
props.blockData.creatives.map(item=>{
  if(obj.hasOwnProperty(item.creativeType)){
    obj[item.creativeType]++
  }else{
    obj[item.creativeType]=1;
    tabs.push(item.uiElement.mainTitle.title)
  }
  let index=Object.keys(obj).indexOf(item.creativeType);
  if(!list[index]){
    list[index]=[];
  }
  list[index].push(item)
})
const changeTab=function (index){
  data.activeTab=index
}
const data=reactive({
  list,
  activeTab:0,
  changeTab
})
</script>

<style scoped lang="less">
.blockHeadWrap{
  display: flex;
  justify-content: space-between;
  padding: 20px 32px 10px;

  .title{
    font-size: 34px;
    font-weight: bold;
    color: #999;

  }

  .active{
    color: #000;
  }

  .divider{
    vertical-align: top;
    margin: 0 8px;
  }

  .btn{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    font-size: 22px;
    padding:0 26px ;
    border: 1px solid #e6e6e6;
    border-radius: 25px;
  }
}

.swiper-container{
  padding: 0 32px;
}

.resourceWrap{
  display: flex;
  padding: 10px 0;
}

.img{
  display: block;
  margin-right: 22px;
  width: 106px;
  height: 106px;
  border-radius: 12px;
}

.titleWrap{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.mainTitle{
  max-width: 568px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 32px;
}

.songRcmdTag{
  font-size: 20px;
  color: #ff7834;
  background-color: #fff9f6;
  height: 36px;
  line-height: 36px;
  padding: 0 10px;
  border-radius: 8px;
  width: max-content;
}
</style>