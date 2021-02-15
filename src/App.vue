<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

import {ref} from "vue"
export default {
  components:{
    Header,
    Footer,
  },
  setup() {
    const data = ref("Hello Tracy!")
    return {
      data,
    }
  }
};
</script>
<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<style lang="scss">
/* Import */

@import "~@/assets/css/reset";
@import "~@/assets/css/variables";
@import "~@/assets/css/base";


</style>
