<template>
    <div class="tabBarWrap">
        <div
            class="item"
            @click="changeItem(index)"
            v-for="(item,index) in data.list"
            :key="item.iconClass">
            <i :class="['iconfont',{'iconBg':item.isActive},item.iconClass]"></i>
            <span>{{item.text}}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";
const data = reactive({
  list:[
    {
      iconClass:'icon-yinle1',
      text:'发现',
      isActive:true
    },
    {
      iconClass:'icon-radio',
      text:'播客',
      isActive:false
    },
    {
      iconClass:'icon-yinle',
      text:'我的',
      isActive:false
    },
    {
      iconClass:'icon-qunliao',
      text:'关注',
      isActive:false
    },
    {
      iconClass:'icon-cunqingjianjie',
      text:'云村',
      isActive:false
    },
  ]
})

    const changeItem = function(index=0){
      data.list.map((item,i)=>{
        item.isActive=i===index
        return item
      })
    }

</script>

<style scoped lang="less">
.tabBarWrap{
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  height: 100px;
  font-size: 20px;
  color: #b3b3b3;
  background-color: #fff;
  border-top: 1px solid #ddd;

  .item{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 20%;
  }

  .iconfont{
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
  }

  .iconBg{

    color: #fff;
    border-radius: 50%;
    background: linear-gradient(-135deg, #ff9fa0, #ff3a3a);
  }
}
</style>
