<template>
  <div>
    <Swiper
        class="swiper-container">
      <SwiperSlide
          v-for="(item,index) in data.list"
          :key="index"
          class="swiper-slide">

          <div class="resourceWrap" v-for="resource in item.resources" :key="resource.resourceId">
            <img class="img" :src="resource.uiElement.image.imageUrl" alt="">
            <div class="titleWrap">
              <p class="mainTitle">{{resource.uiElement.mainTitle.title}}</p>
              <p :class="resource.uiElement?.subTitle?.titleType">{{resource.uiElement?.subTitle?.title}}</p>
            </div>
          </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import {useAttrs,reactive} from "vue";
import 'swiper/css';
import {Swiper,SwiperSlide} from 'swiper/vue'

const attrs=useAttrs();
const data = reactive({
  list:attrs.blockData.creatives
})
</script>

<style scoped lang="less">
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