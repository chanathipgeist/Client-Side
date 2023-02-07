<script setup>
import { ref } from 'vue'
let darkMode = ref(false)
let inputColor =ref('#42cda2')
let studentId =ref('')
let entryYear=ref('')

const findEntryYear=(e,digits)=>{
  entryYear.value=studentId.value.substring(0,2)
  alert(e.target.id)
  alert(e.target.name)
  alert(e.target.tagname)
}
const dynamicImage='images/eimiJung.jpg'
</script>
 
<template>
     

  <div class="h-screen w-screen " :class="darkMode ? 'bg-[#2C3333] text-[#A5C9CA]' : 'bg-[#0d31cf] text-[#ccf0f0]'">
    <div class="w-full h-full flex space-x-2 p-2  favoriteColor">
      <span>Your c o l o r : </span>
      <input type="color" v-model="inputColor" />
      {{ inputColor }}

    </div>
    <div>
    <div class="container mx-auto p-5 flex flex-col">
      <div class="flex w-full justify-end"><span
          class="px-5 uppercase">dark mode</span>
          <input type="checkbox"  class="toggle" checked v-model="darkMode" />
         
      </div>  
    
  </div>
  </div >

  <div class="w-full flex flex-col">
<div class="flex"> 
  <span class="text-cyan-900">Your Student ID:</span>
  <input type="text" v-model="studentId">
<button @click="findEntryYear" class="bg-black text-white">OK</button>
</div>
<div class="flex text-base text-cyan-900">
  <p>Your Entry year: <span>{{ entryYear }}</span></p>
</div>
  </div>
<div class="w-full flex-col">
<div class="flex">
  <p>static Image :</p>
  <img src="./assets/logo.svg" alt="" class="w-20 h-20"/>
</div>
</div>

<div class="flex"> 
<div class="flex">
  <p>Dynamic Image :</p>
  <img :src="dynamicImage" alt="" class="w-20 h-20"/>
</div>
</div>

</div>
</template>
  
<style scoped>
.favoriteColor{
  background-color: v-bind(inputColor);
}
</style>
