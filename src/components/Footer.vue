<script>
export default {
  
  }

</script>

<template>
<div id="footer" >
  <div class="wrap">
    <a href="https://www.linkedin.com/in/pommier-tsuifei/" target="_blank"><i class="devicon-linkedin-plain"></i></a>
    <a href="https://github.com/tsuifei/" target="_blank"><i class="devicon-github-plain"></i></a>
  </div>
</div>
</template>
<style scoped lang="scss">
@import "~@/assets/css/reset";
@import "~@/assets/css/variables";
@import "~@/assets/css/base";

#footer {
  border-top: 1px solid $color-primary;
  width: 100%;
  bottom: 0;
  background-color: #fff;
  
  .wrap {
    margin: auto;
    text-align: center;
    padding: 20px 0 15px;
    > a  {
      transition: all .3s 0s ease-in;
      display: inline-block;
      > i {
        color: $color-primary;
      }  
    }
    > a:hover{
      cursor: pointer;
      transform: translateY(-5px)
    }
  }
}
.devicon-linkedin-plain, .devicon-github-plain{
  font-size: 1.5em;
   padding: 10px;
}
</style>