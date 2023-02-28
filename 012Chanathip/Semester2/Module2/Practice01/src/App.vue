<script setup>
import {getMail} from './composable/getMail.js'
import {ref} from 'vue'
import SingleMail from './components/SingleMail.vue'

const mails=ref(getMail())
</script>

<template>
  <div class="w-full p-3">
        <div>
            <h1 class="flex text-2x1 tracking-wider font-semibold justify-center">
                ~Mailing List~
            </h1>
        </div>
        <!-- <div class="grid grid-cols-8 gap-2">
            <div class="justify-self-center font-semibold">Title</div>
            <div class="col-span-6 justify-self-center font-semibold">Body</div>
            <div class="justify-self-center font-semibold">Keywords</div>
        </div>
        <div class="grid grid-cols-8 gap-2" 
         v-for="(mail,index) in mails  " 
         :key="mail.id" 
         :class="index % 2===0?'bg-rose-300':'bg-yellow-200'"> 
         
         <SingleMail 
         :mail="mail" 
         :layout="{type:'grid',colSpanNo:2,colSpanValue:6}"/>
        </div> -->
        <div class="w-full flex">
            <div class="flex w-2/12 justify-center font-semibold">Title</div>
            <div class="flex w-8/12 justifycenter font-semibold">Body</div>
            <div class="flex w-2/12 justify-center font-semibold">Keywords</div>
        </div>
        <div class="w-full flex" 
         v-for="(mail,index) in mails " 
         :key="mail.id" 
         :class="index % 2===0?'bg-rose-300':'bg-yellow-200'"> 
         
         <SingleMail :mail="mail" />
        </div>
  </div>
</template>
<style scoped>
</style>