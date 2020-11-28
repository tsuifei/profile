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
#footer {
  border-top: 1px solid #76b852;
  width: 100%;
  position: fixed;
  bottom: 0;
}
.wrap {
    margin: auto;
    text-align: center;
    padding: 20px 0 15px;
    @media screen and (max-width: 640px) {
          padding: 10px 0 0;
    }
  > a {
    transition: all .3s 0s ease-in;
    // color: rgb(223, 226, 223);
    color: #76b852;
    display: inline-block;
    
  }
  > a:hover{
        cursor: pointer;
        transform: translateY(-5px)
  }
}
.devicon-linkedin-plain, .devicon-github-plain{
font-size: 1.5em;
    padding: 10px;
    /* color: #76b852; */
    
    
}
</style>