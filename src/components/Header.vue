<script>
import { ref } from 'vue'
export default {
  setup(){
    const isOpenMenu = ref(false)
    const handOpenMenu = ()=>{
      isOpenMenu.value = !isOpenMenu.value 
    }
    return {
      isOpenMenu,
      handOpenMenu
    }
  }
  }
</script>

<template>
<div id="header" :class="{openMenu:isOpenMenu}" >
  <nav >
    <router-link to="/" class="my-name">TsuiFei Pommier</router-link>
    <a @click="handOpenMenu" href="javascript:;" class="menu_btn"></a>
    <div>
      <router-link to="/experiences" @click="handOpenMenu">Experiences</router-link>
      <router-link to="/skills" @click="handOpenMenu">Skills</router-link>
      <router-link to="/portfolio" @click="handOpenMenu">Portfolio</router-link>
      <a class="nav__icon" href="https://www.linkedin.com/in/pommier-tsuifei/" target="_blank"><i class="devicon-linkedin-plain"></i></a>
      <a class="nav__icon" href="https://github.com/tsuifei/" target="_blank"><i class="devicon-github-plain"></i></a>
    </div>
  </nav>

</div>
</template>

<style scoped lang="scss">
@import "~@/assets/css/reset";
@import "~@/assets/css/variables";
@import "~@/assets/css/base";

#header{
  background-color: $color-primary;
  width: 100%;
  position: fixed;
  top:0;
  z-index: 10;
  @media screen and (max-width: 1024px) {
      padding: 0px 20px;  
    }
  
  @media screen and (max-width: 575.98px) {
    transition: height 0.2s;
    height: auto;
    overflow: hidden;
    // padding: 0 20px;
    
    &.openMenu {
      height: 340px;
    }
  }

  > nav {
    width: 100%;
    max-width: 1240px;
    height: 100%;
    margin: 0 auto;
    
    @media screen and (max-width: 1044px) {
      width: 100%;
    }
    @media screen and (max-width: 575.98px) {
      width: 100%;
    }
    > .my-name {
      font-size: 2.5rem;
      font-weight: 600;
      text-decoration: none;
      line-height: 97px;
      align-items: center;
      color: #fff;
      @media screen and (max-width: 575.98px) {
        font-size: 2rem;
        width: 100%;
        line-height: 70px;
        align-items: center;
      }
    }
    > div {
      text-align: right;
      float: right;
      @media screen and (max-width: 575.98px) {
        width: 100%;
        height: 0;
      }
      > a {
        display: inline-block;
        line-height: 97px;
        font-size: 1.3rem;
        color: $color-second;
        padding: 0 0 0 20px;
        text-decoration: none;
        transition: all 0.3s ease-in;
      > .nav__icon{
        padding: 0 0 0 0px;
      }  
        @media screen and (max-width: 575.98px) {
          width: 100%;
          height: auto;
          overflow: hidden;
          line-height: 51px;
          text-align: center;
          border-top: 1px solid rgb(245, 239, 239);
        }
      }
      > a:hover{
        cursor: pointer;
        transform: translateY(-5px)
      }
    }
  }
  .devicon-linkedin-plain, .devicon-github-plain{
  font-size: 1em;
  //  padding: 10px;
   color: $color-second;
  }
}

a.menu_btn{
  display: none;
  @media screen and (max-width: 575.98px) {
  width: 40px;
  height: 40px;
  display: block;
  color: rgb(245, 239, 239);
  position: absolute;
  top: 15px;
  right: 20px;
  border-radius: 5px;
  border: 2px solid rgb(245, 239, 239);
  }
}

/* 偽元素漢堡三橫線 */
.menu_btn::before{
  content: '';
  position: absolute;
  height: 2px;
  width: 25px;
  left: 5px;
  background-color: #fff;
  top: 0;
  bottom: 0;
  margin: auto;
  box-shadow: 0px 9px 0 #fff,
              0px -9px 0 #fff;
}

</style>