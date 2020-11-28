
<script>
export default {
  props:{
    // 宣告這個props的型別
    msg:{
      type:String,
      default: "Profile"
    },
    // 也可以用物件和預設值設定此props
    msg2:{
      type:String,
      default: "My name is Tracy"
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
<div id="profile" class="wrap">
  <h1>{{props.msg}}</h1>
  <h1>{{props.msg2}}</h1>
</div>
</template>
<style scoped lang="scss">

#profile{
width: 100%;
  height: 2000px;
  background-color: rgb(189, 223, 166);
}

</style>