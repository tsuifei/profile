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
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,500,600,700,800);
@import url(https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css);
@import url(https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css);


* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}
img {
  display: block;
  height: auto;
  max-width: 100%;
}
html,
body {
  width: 100%;
  height: 100%;
  font-family: 'Open Sans';
  font-size: 1.3em;
  padding-top: 45px;
  @media screen and (max-width: 640px) {
      padding-top: 30px;
    }
}
// a {
//   text-decoration: none;
//   color: rgb(93, 100, 97);
// }

// a:hover {
//   color: #76b852;
//   font-weight: 500;
// }
#app {
  font-family: "Open Sans", "sans-serif";
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
h1{
    margin: 0;
    padding-top: 20px;
    font-weight: 500;

  }
h1::before{
    content: '[';
    color:#8b8b8b;
    padding-right: 5px;
    
    
  }
h1::after{
    content: ']';
    color:#8b8b8b;
    padding-left: 5px;
    
    
  }
.wrap{
  margin: auto;
  width: 100%;
  max-width: 1240px;
  }

</style>
