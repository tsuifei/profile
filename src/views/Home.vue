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
.wrap {
  height: 100vh;
}
.home {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  // Medium devices (tablets, less than 992px)
  @media (max-width: 991.98px) { 
  }
  // X-Small devices (portrait phones, less than 576px)
  @media (max-width: 575.98px) { 
    padding-top: 10px;
    text-align: center;
    flex-wrap: wrap;
    align-content:space-around;
  }
}

.tsuifei {
  width: 350px;
  height: 350px;
  border-radius: 70% 30% 70% 30%/20% 80% 30% 70%;
  vertical-align: middle;
  @media (max-width: 575.98px) { 
    margin-top: 20px;
    width: 80%;
    height: auto;
  }
}

.open {
  .open__title {
    margin: 0;
    font-weight: 500;
    font-size: 3rem;
    color:$color-second;
    // Medium devices (tablets, less than 992px)
    @media (max-width: 991.98px) { 
      font-size: 2.5rem;
      line-height: 50px;
    }
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


