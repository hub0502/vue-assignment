<template>
  <div>
    <custom-compo />
    <p>안녕하세요? 이 문구는 바뀌지 않습니다.</p>
    {{this.$postIndex[postIdx].name}}
  </div>
</template>

<script>   
import CustomCompo from '../components/HeaderComponent.vue'
export default {
    components:{
        CustomCompo,
    },
    data(){
      return{
        postIdx: this.$route.params.postIdx
      }
    }
}
</script>

<style>
    p{
        text-align: center;
    }
</style>