<script>
import Header from "@/components/Header.vue"
// import Footer from "@/components/Footer.vue"
import AOS from "aos";

import {ref, onMounted} from "vue"
export default {
  components:{
    Header,
    // Footer,
  },
  setup() {
    const data = ref("Hello Tracy!")
    const wrapAnim = ref(true);
    onMounted(() => {
      AOS.init();
    });
    return {
      data,
      wrapAnim,
      onMounted
    }
  },
};
</script>
<template>
  <Header />
  <router-view></router-view>
  <!-- <Footer /> -->
</template>

<style lang="scss">
/* Import */

@import "~@/assets/css/reset";
@import "~@/assets/css/variables";
@import "~@/assets/css/base";


</style>
