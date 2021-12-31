<template>
  <div>
    <BaseBlockHead
        :subTitle="blockData?.uiElement?.subTitle"
        :button="blockData?.uiElement?.button"></BaseBlockHead>
    <BaseBlockContent :blockData="blockData"></BaseBlockContent>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import BaseBlockHead from './baseBlockHead.vue'
import BaseBlockContent from './baseBlockContent.vue'
const props = defineProps({
  blockData: Object,
})
</script>

<style scoped>

</style>