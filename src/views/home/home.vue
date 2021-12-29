<template>
    <div class="wrap">
      <div class="topContent">
        <Header></Header>
        <Banner></Banner>
      </div>
        <Ball></Ball>
        <bottomTabBar></bottomTabBar>
    </div>
</template>

<script setup>
    import bottomTabBar from './components/bottomTabBar.vue'
    import Header from './components/header.vue'
    import Banner from './components/banner.vue'
    import Ball from './components/ball.vue'
    import {getHomepage, getHomepageBall} from "@/http/api";
    getHomepage().then(res=>{
      console.log(res);
    })

</script>

<style scoped lang="less">
.wrap{
  position: relative;
  background: #fefefe;
  width: 100vw;
  height: 100vh;

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
