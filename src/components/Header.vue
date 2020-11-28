<script>
import { ref } from 'vue'
export default {
  setup(){
    const isOpenMenu = ref(false)
    const handOpenMenu = ()=>{
      // console.log('click')
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
    <router-link to="/" class="my-name">TsuiFei</router-link>
    <a  @click="handOpenMenu" href="javascript:;" class="menu_btn"></a>
    <div>
      <router-link to="/profile">Profile</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
    </div>
  </nav>

</div>
</template>
<style scoped lang="scss">
#header{
  background-color: #76b852;
  width: 100%;
  position: fixed;
  top:0;
  // max-width: 1240px;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // height: 97px;
  
  @media screen and (max-width: 640px) {
    transition: height 0.2s;
    height: auto;
    overflow: hidden;
    
    
    &.openMenu {
      height: 230px;
    }
  }
  
  > a {
  color: #fff;
  }

  > a:hover {
  color: #76b852;
  font-weight: 500;
  }
  > nav {
    width: 100%;
    max-width: 1240px;
    height: 100%;
    margin: 0 auto;

    @media screen and (max-width: 1044px) {
      width: 100%;
    }
    @media screen and (max-width: 640px) {
      width: 100%;
      
      // height: 232px;
    }
    > .my-name {
      // display: block;
      font-size: 1.5em;
      font-weight: 600;
      text-decoration: none;
      line-height: 97px;
      align-items: center;
      color: #fff;
      @media screen and (max-width: 640px) {
      width: 100%;
      line-height: 60px;
      align-items: center;
      padding-left: 10px;
      // line-height: 47px;
      }
    }
    > div {
      text-align: right;
      // width: 100%;
      // height: 100%;
      // border: 1px solid red;
      float: right;
      @media screen and (max-width: 640px) {
        // clear: both;
        width: 100%;
        // background-color: aqua;
        height: 0;
        
        
      }
      > a {
        display: inline-block;
        line-height: 97px;
        font-size: 1rem;
        // float: left;
        color: #fff;
        padding: 0 0 0 20px;
        text-decoration: none;
        transition: all 0.3s ease-in;
        @media screen and (max-width: 640px) {
          width: 100%;
          height: auto;
          overflow: hidden;
          line-height: 51px;
          text-align: center;
          border-top: 1px solid rgb(245, 239, 239);
        }
      }
      > a:hover{
        font-weight:800;
        cursor: pointer;
        transform: translateY(-5px)
      }
    }
  }
}


a.menu_btn{
  display: none;
  @media screen and (max-width: 640px) {
  width: 40px;
  height: 40px;
  background-color: #8b8b8b;
  display: block;
  color: #fff;
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 5px;
  }
}
// .menu_btn span{
//   opacity: 0;
// }
/* 偽元素漢堡三橫線 */
.menu_btn::before{
  content: '';
  position: absolute;
  height: 2px;
  width: 30px;
  left: 5px;
  background-color: #fff;
  top: 0;
  bottom: 0;
  margin: auto;
  box-shadow: 0px 9px 0 #fff,
              0px -9px 0 #fff;
}

</style>