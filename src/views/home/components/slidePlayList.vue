<template>
  <div class="slideWrap">
    <div class="inner">
      <div class="slideItem" v-for="item in data.list">
        <div v-if="item.creativeType==='scroll_playlist'">
          <div class="swiperWrap">
            <Swiper
                loop
                EffectCube
                :autoplay="{delay:4000}"
                class="swiper-container">
              <SwiperSlide
                  v-for="banner in item.resources"
                  :key="banner.resourceId"
                  class="swiper-slide">
                <img class="img" :src="banner.uiElement.image.imageUrl" alt="">
              </SwiperSlide>
            </Swiper>
          </div>
          <span class="text">{{item.uiElement.mainTitle.title}}</span>
        </div>
        <div v-else-if="item.creativeType==='list'">
          <img class="img" :src="item.uiElement.image.imageUrl" alt="">
          <span class="text">{{item.uiElement.mainTitle.title}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {getCurrentInstance,reactive} from "vue";
import 'swiper/css';
import 'swiper/less/pagination';
import 'swiper/css/effect-cube'
import SwiperCore,{ Navigation, Pagination, EffectCube, Autoplay } from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/vue'

const ctx=getCurrentInstance();

const data = reactive({
  list:ctx.attrs.blockData.creatives
})
</script>

<style scoped lang="less">
::-webkit-scrollbar{
  display: none;
}
.slideWrap{
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
    display: inline-block;
    width: 210px;
    vertical-align: top;

    &:not(:last-child){
      margin-right: 20px;
    }
  }

  .img{
    display: block;
    width: 210px;
    height: 210px;
    border-radius: 18px;
  }

  .text{
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    white-space: pre-wrap;
    text-align: left;
  }
}
</style>