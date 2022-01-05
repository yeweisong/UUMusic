<template>
  <div class="blockWrap">
    <template v-if="blockData.showType==='HOMEPAGE_NEW_SONG_NEW_ALBUM'||
              blockData.showType==='SLIDE_PODCAST_VOICE_MORE_TAB'||
              blockData.showType==='SLIDE_PLAYABLE_DRAGON_BALL_MORE_TAB'">
      <BaseBlockTab :blockData="blockData"></BaseBlockTab>
    </template>
    <template v-else>
      <BaseBlockHead
          :subTitle="blockData?.uiElement?.subTitle"
          :button="blockData?.uiElement?.button"></BaseBlockHead>
      <BaseBlockContent :blockData="blockData"></BaseBlockContent>
    </template>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import BaseBlockHead from './baseBlockHead.vue'
import BaseBlockContent from './baseBlockContent.vue'
import BaseBlockTab from './baseBlockTab.vue'
const props = defineProps({
  blockData: Object,
})
</script>

<style scoped lang="less">
.blockWrap{
  padding-bottom: 30px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 20px;
}
</style>