<template>
    <div class="wrap">
      <div class="topContent">
        <Header></Header>
        <Banner></Banner>
      </div>
        <Ball></Ball>
      <template v-for="item in data.blocks" :key="item.showType">
        <BaseBlock v-if="item.blockCode!=='HOMEPAGE_BANNER'" :blockData="item"></BaseBlock>
      </template>
      <BottomTabBar></BottomTabBar>
    </div>
</template>

<script setup>
    import {useStore} from 'vuex'
    import BottomTabBar from './components/bottomTabBar.vue'
    import Header from './components/header.vue'
    import Banner from './components/banner.vue'
    import Ball from './components/ball.vue'
    import BaseBlock from './components/baseBlock.vue'
    import {getHomepage} from "@/http/api";
    import {reactive} from "vue";
    let store=useStore();

    const data = reactive({
      blocks:[]
    })
    getHomepage().then(res=>{
      data.blocks=res.data.data.blocks;
      const banner=res.data.data.blocks.find(item=>{
        return item.blockCode==='HOMEPAGE_BANNER'
      })
      store.commit('setBanners',banner)
    })
</script>

<style scoped lang="less">
.wrap{
  position: relative;
  background: #f8f8f8;
  text-align: left;
  width: 100vw;
  //height: 100vh;
  box-sizing: border-box;
  padding-bottom: 100px;

  .topContent{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 428px;
    background: linear-gradient(180deg,#e1dede,#fff);
  }
}
</style>
