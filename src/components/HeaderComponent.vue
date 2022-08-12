<template>
  <div>
    <div class="menu_box">
      <router-link to="/" class="header_menu">첫화면</router-link>
      <router-link to="/about" class="header_menu">소개</router-link>
      <router-link to="/board/" class="header_menu">게시판</router-link>
      <router-link to="/contact" class="header_menu">문의</router-link>
    </div>
  </div>
</template>

<script>
export default {
    components:{
    },
}
</script>

<style>

  .menu_box{
    width: 100%;
    
    margin: 0px auto;
  }

  .header_menu{
    width: 20%;
    display:inline-block;

    text-align: center;

    border: 1px solid black;
    
    border-radius: 10px;
    box-sizing:border-box;

    margin: 2.5%;

    background-color:antiquewhite;
  }
</style>