
<script>
import JobTimeline from "@/components/JobTimeline.vue"
import Formation from "@/components/Formation.vue"

export default {
  components:{
    JobTimeline, 
    Formation
  },
  props:{
    // 宣告這個props的型別
    titlePage:{
      type:String,
      default: "Experiences"
    }
  },
  setup(props){
    console.log(props);
    return{
      props
    }
  }
}
</script>
<template>
<div class="wrap" data-aos="fade-up">
    <h1>{{props.titlePage}}</h1>

<JobTimeline />
<Formation />
</div>

</template>
<style lang="scss">
@import "~@/assets/css/reset";
@import "~@/assets/css/variables";
@import "~@/assets/css/base";
</style>