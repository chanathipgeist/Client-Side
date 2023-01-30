<script setup>
const Data = [{
  name: 'salary',
  amount: 10000
},
{
  name: 'rent',
  amount: -2500
},
{
  name: 'parking fee',
  amount: 0
},
{
  name: 'car fuel',
  amount: -600
},
{
  name: 'commission',
  amount: 5500
}]
const Totalnet = () => { 
  return Data.reduce((amount, current) => {
    return amount += current.amount
  }, 0)
} // ใช้array method reduce เพื่อรวมค่าก่อนหน้า
</script>

<template>
  <div class="mt-5">
    <div class="font-black text-center w-full  ">MY ACCOUNT</div> <!-- ใช้text-center มันจะกลางตลอด ไม่ต้องปรับResponsive -->

   

    <!-- Full Screen -->
    <div class="mt-10 hidden md:contents"> <!-- ตั้งmargin -->
      <div class="flex flex-col text-xl">

        <div class="flex flex-row  font-bold justify-between mx-40">   <!-- หัวตาราง -->
          <div>Name</div>
          <div>Amount</div>
        </div>
        <hr>
        
        <div class="flex flex-row justify-between mx-40" v-for="(data, index) in Data " :key="index" v-show="data.amount != 0"> <!-- loopข้อมูลในData -->
          <div>{{ data.name }}</div>
          <div :class="data.amount < 0 ? 'bg-red-300' : data.amount > 0 ? 'bg-green-300' : ''" class="ml-1 px-1">
            {{ data.amount.toLocaleString() }}</div> <!-- เช็คจำนวนเต็มบวก/ลบเพื่อเปลี่ยนสี -->
        </div>
      </div>
      <hr>
      
      <div class="flex flex-row font-bold justify-between mx-40"> <!-- เพื่อให้แบ่งเป็น2ฝั่งได้ -->

        <div>Net Total:</div>
        <div>{{ Totalnet().toLocaleString() }}</div> <!-- toLocaleString()เพิ่มลูกน้ำที่หลัก3 -->
      </div>
      <hr>
    </div>
  </div>
  <!-- ---------------------------------------------------------------------------------------------------- -->

   <!-- Small Screen -->
   <div class="mt-10 md:hidden"> <!-- hiddenเพื่อให้มันยังไม่โผล่มา -->

      <div class="m-1 mt-5" v-for="(data, index) in Data " :key="index">
        <div class="pl-10 p-2 border rounded-lg shadow-md"> <!-- สร้างกรอบกลมมน(เพิ่มเงาชิบช้าบ) -->
          <div v-show="data.amount != 0"> <!-- amountไม่เท่ากับศูนย์ จะโชว์ -->
            <span class="font-bold "> Name: </span> {{ data.name }} <br>
            <span class="font-bold"> Amount: </span> <span :class="data.amount < 0 ? 'bg-red-300' : data.amount > 0 ? 'bg-green-300' : ''"
              class="rounded ml-1 px-1"> {{data.amount.toLocaleString()}} </span> <!-- เช็คจำนวนเต็มบวก/ลบเพื่อเปลี่ยนสี -->
          </div>
        </div>
      </div>

      <div class="mt-10 font-bold ">

        <hr>
        <span class=" mx-20 py-10"></span>Net Total: 
        <span class="ml-10">{{Totalnet().toLocaleString()}}</span>
        <hr>

      </div>
    </div>
      <!-- ---------------------------------------------------------------------------------------------------- -->

</template>
<style scoped>
</style>