<template>
  <button @click="changeRouter">點我才可以切換到about</button>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/example">Exmaple</router-link>
  </nav>
  <router-view></router-view>
  <h1>我是標題</h1>
  <componentA/>
</template>

<script setup>
  import { ref } from 'vue';
  import componentA from './components/componentA.vue'

  const changeAguermant = ref(true)
  localStorage.setItem("touchBtn","No")

  const changeRouter =()=>{
    if(changeAguermant.value){
      changeAguermant.value = false
      localStorage.setItem("touchBtn","Yes")
    } else if(!changeAguermant.value){
      changeAguermant.value = true
      localStorage.setItem("touchBtn","No")
    }
  }
</script>

<style scoped>
nav{
  display: flex;
  gap: 20px;
}
</style>
