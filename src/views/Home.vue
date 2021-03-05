<script>
// @ is an alias to /src
export default {
  // name: 'Home',
  components: {

  }
}
</script>
<template>
<div class="wrap home" data-aos="fade-up">
  <div class="open">
    <h1 class="open__title">Bonjour ! je suis TsuiFei</h1>
    <h1 class="open__title">Développeur front-end à Paris.</h1>
  <p class="open__sub__title">Bienvenue sur mon profile !</p>
  </div>
  <img class="tsuifei" src="~@/assets/images/tsuifei42.png" alt="c'est moi, Tsuifei">
</div>

</template>

<style scoped lang="scss">
@import "~@/assets/css/reset";
@import "~@/assets/css/variables";
@import "~@/assets/css/base";
.home {
  padding-top: 150px;
  padding-bottom: 150px;
  // vertical-align: middle;
  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) { 
    padding-top: 80px;
    text-align: center;
  // padding-bottom: 150px;
  // vertical-align: middle;
  }
}

.tsuifei {
  display: inline-block;
  margin-left: 80px;
  width: 350px;
  height: 350px;
  opacity: 1;
  border-radius: 70% 30% 70% 30%/20% 80% 30% 70%;
  vertical-align: middle;
  @media (max-width: 575.98px) { 
    margin-left: 0px;
    margin-top: 20px;
    width: 80%;
    height: auto;
  }
}

.open {
  display: inline-block;
  vertical-align: middle;
  .open__title {
    margin: 0;
    font-weight: 500;
    font-size: 3rem;
    color:$color-second;
    @media (max-width: 575.98px) { 
      font-size: 2rem;
      line-height: 40px;
    }
  }
  .open__sub__title{
    font-size: 2rem;
    color:$color-primary;
    line-height: 70px;
    @media (max-width: 575.98px) { 
      font-size: 1.5rem;
      line-height: 30px;
    }
  }
}

h1{
  margin: 0;
  font-weight: 500;
  font-size: 3rem;
  color:$color-second;
  line-height: 70px;

  &::before{
    content: '[';
    color:lighten($color-primary,10%);
    padding-right: 5px;
  }
  &::after{
    content: ']';
    color:lighten($color-primary,10%);
    padding-left: 5px;
  }
}
</style>


