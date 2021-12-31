<template>
  <div class="blockHeadWrap">
    <div class="title" v-if="subTitle">{{subTitle.title}}</div>
    <div class="btn" v-if="button">{{button.text}}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  subTitle: Object,
  button: Object,
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
</style>