
<script >
import SlidePlayList from "./slidePlayList.vue";
import {h,} from 'vue'
const blocksMap={
  HOMEPAGE_SLIDE_PLAYLIST:SlidePlayList
}

export default {
  props:{
    blockData:{
      type:Object,
      default:{}
    }
  },
  render( ctx){
    const {$props:{blockData}}=ctx;
    const {showType} =blockData;
    const conponent =blocksMap[showType];
    return h(SlidePlayList,ctx.$props)
  }


}

// export default {
//   functional:true,
//   render(h,context){
//     const {props:{blockData}} = context;
//     const {showType} = blockData;
//     const component =blocksMap[showType]||null;
//     return h(component,context.data)
//   }
// }


// import { h } from 'vue';
//
// const DynamicHeading = (props, context) => {
//   debugger
//   return h(`h${props.level}`, context.attrs, context.slots);
// }
//
// DynamicHeading.props = ['level'];


</script>

<style scoped>

</style>