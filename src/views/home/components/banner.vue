<template>
<div class="swiperWrap">
  <Swiper
      pagination
      loop
      :autoplay="{delay:4000}"
      class="swiper-container">
    <SwiperSlide
        v-for="item in data.banner"
        :key="item.encodeId"
        class="swiper-slide">
      <img class="img" :src="item.pic" alt="">
      <span :class="['typeTitle',
        {'titleRed':item.titleColor==='red',
        'titleBlue':item.titleColor==='blue'}]">
        {{item.typeTitle}}
      </span>
    </SwiperSlide>
  </Swiper>
</div>
</template>

<script setup>
import {computed,reactive} from "vue";
import store from '@/store/index'
import 'swiper/css';
import 'swiper/less/pagination';
import SwiperCore,{ Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/vue'

SwiperCore.use([Autoplay, Pagination, EffectCoverflow,Navigation]);
const data = reactive({
  banner:computed(()=>{return store.state?.banners?.extInfo?.banners})
})

</script>

<style scoped lang="less">
.swiperWrap{
  width: 686px;
  height: 268px;

  .swiper-container{
    height: 100%;
    border-radius: 20px;
  }

  .img{
    border-radius: 20px;
    width: 100%;
    height: 100%;
  }

  .typeTitle{
    position: absolute;
    right: 0;
    bottom: 0;
    color: #ffffff;
    line-height: 1;
    font-size: 20px;
    padding:6px 14px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .titleRed{
    background-color: #ff3a3a;
  }

  .titleBlue{
    background-color: #43a5f0;
  }
}
</style>
<style lang="less">
.swiperWrap{

  .swiper-pagination-bullet{
    width: 16px;
    height: 4px;
    background:#fff;
    border-radius: 2px;
    margin: 0 4px !important;
    opacity: 0.2;

    &-active{
      opacity:0.8;
    }
  }
}
</style>