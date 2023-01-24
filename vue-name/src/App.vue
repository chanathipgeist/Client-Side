<script setup>
import IcSharpSearch from "./assets/component/IcSharpSearch.vue";
import groupworks from  "./data/groupworks.json";
console.log(groupworks)
const courstTitle='<span class="text-orange">INT203-Client Side Prigramming II</span>';
const searchDisabled= false;
const getFooter=(type)=>{
let footer='School of Information Technology,KMUTT'
if(type.toLowerCase()==='long')
footer='INT203-Client Side Prigramming II'
return footer
}
const courseId='INT203'
</script>
<template>
  <div class="w-full">
    <div class="w-full flex-col">
      <!-- column#1 (header) -->
      <div class="w-full flex flex-row">
        <img src="./assets/component/vuelogo.ico" class="w-14 h-12 m-3" />
        <div class="w-full flex flex-col p-2">
          <h1 class="tracking-widest text-emerald-500 text-xl">
            Vue3 Group Projects
          </h1>
          <h3 class="italic" >
          </h3>
        </div>
        <div class="w-full flex p-2 m-2 justify-end">
          <div class="w-3/5 space-x-2 flex items-center">
            <IcSharpSearch />
            <input
              class="w-full p-1 outline-none rounded-lg border border-gray-200"
              type="text"
              placeholder="Type your keyword here..."
            />
            <button class="border border-gray-200 p-1 rounded-lg" v-bind:class="searchDisabled ?'border-red-500':'border-green-500'">Search</button>
          </div>
        </div>
      </div>
      <!-- column#2 (table) -->
      <div class="w-full mt-5 p-5">
        <table class="w-full">
          <thead class="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th class="text-left font-semibold tracking-widest p-3">
                Section
              </th>
              <th class="text-left font-semibold tracking-widest p-3">
                Project Name
              </th>
              <th class="text-left font-semibold tracking-widest p-3">
                GitHub Repository
              </th>
              <th class="text-left font-semibold tracking-widest p-3">
                Group Members
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="" v-for="groupwork in groupworks">
              <td>{{ groupwork.section }}</td>
              <td>{{ groupwork.projectName }}</td>
              <td><a class="text-purple-800" href="groupwork.githubRepo" target="_blank">{{groupwork.githubRepo}}</a></td>
              <td>
                <div v-for="student in groupwork.students" :key="student.id">
                  <p>{{ student.id }} {{ student.name }}</p>
                </div>
              </td>

            </tr>
          </tbody>
        </table>
     
      </div>
        <!-- column#3 (footer) -->
        <div class="w-full flex justify-center">
          {{ getFooter('long') }}
        </div>
    </div>
  </div>
</template>
<style scoped></style>
