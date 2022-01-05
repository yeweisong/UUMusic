
<script >
import SlidePlayList from "./slidePlayList.vue";
import SlideSongList from "./slideSongList.vue";
import SlidePlayABLE from "./slidePlayABLE.vue";
import MusicCalendar from "./musicCalendar.vue";
import {h,} from 'vue'

const blocksMap={
  HOMEPAGE_SLIDE_PLAYLIST:SlidePlayList,
  HOMEPAGE_SLIDE_SONGLIST_ALIGN:SlideSongList,
  HOMEPAGE_SLIDE_PLAYABLE_MLOG:SlidePlayABLE,
  SHUFFLE_MUSIC_CALENDAR:MusicCalendar
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
    return h(conponent,ctx.$props)
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