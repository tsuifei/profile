
<script>
import Experience from "@/components/Experience.vue"
import Formation from "@/components/Formation.vue"

export default {
  components:{
    Experience, Formation
  },
  props:{
    // 宣告這個props的型別
    titlePage:{
      type:String,
      default: "Profile"
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
<div class="profile wrap">
    <h1>{{props.titlePage}}</h1>

<Experience />
<Formation />
</div>

</template>
<style lang="scss">
@import "~@/assets/css/reset";
@import "~@/assets/css/variables";
@import "~@/assets/css/base";



</style>