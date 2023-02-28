<script setup>
import { defineProps } from "vue";
const props = defineProps({
    mail:{
        type: Object,
        required: true
    },
    layout:{
        type: Object,
        default: {type:'flex'}
    }

// layout = {type:'grid', colSpanNo:2, colSpanValue=6}
});
</script>

<template>

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




  <div :class=" layout.type==='flex'?'w-2/12':layout.colSpanNo===1?`col-span-${layout.colSpanValue}`:''">
    <input type="checkbox" value="mail.id" />
    <span>{{ mail.title }}</span>
  </div>

  <div :class=" layout.type==='flex'?'w-8/12':layout.colSpanNo===2?`col-span-${layout.colSpanValue}`:''">
    {{ mail.body }}</div>

  <div :class=" layout.type==='flex'?'w-2/12':layout.colSpanNo===3?`col-span-${layout.colSpanValue}`:''">
    {{ mail.keywords.join('/') }}</div>
</template>

<style scoped></style>
