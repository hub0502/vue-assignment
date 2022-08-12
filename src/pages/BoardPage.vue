<template>
  <div>
    <custom-compo />

      <router-link v-for="key in 10" :key="key" :to="{name:'detail', params:{
      postIdx : key,
      }}">{{key}}<br />
      </router-link>
      
  </div>
</template>

<script>
import CustomCompo from '../components/HeaderComponent.vue'
export default {
    components:{
        CustomCompo,
    },
}
</script>

<style>

</style>