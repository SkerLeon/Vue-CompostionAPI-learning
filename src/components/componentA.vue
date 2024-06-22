<template>
  <!-- 單向資料綁定 -->
  <p>{{ data }}</p>
  
  <!-- 雙向資料綁定 -->
  <input v-model="text" type="text">
  <p>{{text}}</p>

  <!-- v-if v-else條件渲染 -->
  <p v-if="vifvalue">我又出來了~打我阿笨蛋！！！</p>
  <p v-else>笨蛋！！！</p>

  <!-- Tag綁定funtion -->
  <button @click="trueAndfalse">打我阿笨蛋</button>

  <!-- v-for 陣列用法 -->
  <p v-for="i in arrayA" class="arrayA">{{ i }}</p>

  <!-- 陣列動態改變屬性 -->
  <p v-for="i in arrayB" class="arrayB">{{ i }}</p>
  <button @click="changeArrayB">點我改變arrayB</button>

  <!-- v-for 物件用法 -->
  <p v-for="(value,key,index) in objectA" :key="index" class="objectA">{{ index }}:{{ key }} : {{ value }}</p>

  <!-- 物件動態改變屬性值寫法 -->
  <p v-for="(item,key,index) in objectB" :key="index" class="objectB">{{ index }}:{{ key }} : {{ item }}</p>
  <button @click="boolenTrue">點我改變bool</button>

  <!-- v-bind 動態改變屬性 -->
  <p :class="{eventDef:true,eventTrue: eventYes}">又是我啦!!!!!</p>
  <button @click="eventchage">按我改變class</button>
  <br>
  <a :href="url">點我跳轉</a>
  
  <!-- computed使用 -->
  <h1>計算屬性示例</h1>
  <p>原始數據：{{ count }}</p>
  <p>雙倍計算數據：{{ doubleCount }}</p>
  <button @click="increment">增加計數</button>

  <!--1/4虛線圓形在在旋轉--> -->
  <div class="quarter-circle"></div>

  <!-- watch用法 -->
  <input type="text" v-model="textA">
  <p>{{ textA }}</p>
  <p>{{ textB }}</p>

  <!-- porps & emits -->
  <!-- 先建立一個新的component B -->
  <!-- 建立一個參數作為傳送的媒介 -->
  <!-- 在子組件的屬性裡面建立好的變數名稱這裡要設定v-bind去接收父組件裡面設定的變數 -->
  <input type="text" v-model="msg">
  <componentB :componentBmsg="msg" @log="log">
    哈哈是我啦
    <template #B>
      <p>
        XDD
      </p>
    </template>

    <template #C>
      <p>
        阿妮基
      </p>
    </template>

    <template #D="{A}">
      名字:{{ A.firstName }}{{ A.lastName }}
    </template>

  </componentB>
</template>

<script setup>
  import { ref,reactive,computed,watch,watchEffect, onBeforeMount } from 'vue';
  import componentB from './componentB.vue';

  const data ="我是字串"

  //想要動態改變變數時，要加上ref()去增加響應式的特性
  const vifvalue = ref(true)

  const text =ref("哈哈是我啦")

  const arrayA = ["25",2,3,4,5]

  const arrayB = ref(["25",2,3,4,5])
  const changeArrayB =()=>{
    if(arrayB.value[0] == "25"){
      arrayB.value[0] = "哈哈是我啦"
    } else{
      arrayB.value[0] = "25"
    }
  }

  // 下面兩種方法都可以在template指定funtion
  const trueAndfalse = ()=>{
    vifvalue.value = !vifvalue.value
  }
  // function trueAndfalse(){
  //   vifvalue.value = !vifvalue.value
  // }

  const objectA = {
    array:[1,2,3,4,5],
    int:30,
    boolen:true,
    string:"煉獄大哥"
  }


  //當想要動態改變物件裡面的值時，就必須加上reactive()這個函數轉成具有響應式的特性
  //但在物件裡面不需要指定value
  const objectB = reactive({
    array:[1,2,3,4,5],
    int:30,
    boolen:true,
    string:"煉獄大哥"
  })
  const boolenTrue =()=>{
    objectB.boolen = !objectB.boolen
  }

  //利用v-bind去達成用funtion去控制標籤內的屬性作用
  const eventYes = ref(false)
  const eventchage = ()=>{
    eventYes.value = !eventYes.value
  }
  const url ="https://www.google.com.tw/"

  //使用computed去計算數值，使原始數據緩存下來，如果該數據已經運算過了，就不會跟著其他函式一直重新計算
  const count = ref(0)
  const doubleCount = computed(()=>{
    console.log("我計算了")
    return count.value*2
  })
  const increment = ()=>{
    count.value++
  }

  //使用watch去監聽資料變動，做出相應的步驟
  const textA = ref("")
  const textB = ref("沒有")
  // watch(textA, (newDtaa,oldData) => {
  //     if (textA.value === "") {
  //       textB.value = "沒有";
  //     } else {
  //       textB.value = "有";
  //       console.log(`從${oldData}變成${newDtaa}`);
  //     }
  // });

  //使用watch effect監聽，這個函式會自動去尋找所使用到響應式數據
  //使用呼叫本身的函數結束監聽，但要注意這時就不能通過在呼叫stop()來重新啟用監聽
  //只能透過重新建立一個watch去重新建立watch函數，可以利用if去實現隨情況調用監聽的效果
  const stop = watchEffect(()=>{
    if (textA.value === "") {
      textB.value = "沒有";
    } else {
      textB.value = "有";
    }
    if (textA.value === "停止") {
      textB.value = "停止監聽";
      stop()
    } 
  })

  //建立一個變數用作porps & emits傳遞的數值
  const msg = ref("")
  const log = (stringLenth)=>{
    console.log(stringLenth);
  }

</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  h1{
    font-size: 32px;
  }
  p{
    font-size: 20px;
  }
  button{
    background-color: pink;
    height: 40px;
    width: 300px;
    font-size: 20px;
    color: white;
  }
  a{
    display: block;
    width: 100%;
    background-color: palevioletred;
    color: white;
  }
  a:hover{
    color: black;
  }
  .arrayA{
    background-color:red;
    color: white;
  }
  .arrayB{
    background-color:orange;
    color: white;
  }
  .objectA{
    background-color: blue;
    color: white;
  }
  .objectB{
    background-color: brown;
    color: white;
  }
  .eventDef{
    background-color: red;
    border-radius: 50%;
    transition: 0.3s;
    color: black;
  }
  .eventTrue{
    background-color: black;
    color: white;
    border-radius: 0px;
  }
  .quarter-circle {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 20px dashed;
      border-color: transparent brown transparent transparent;
      transform: rotate(0deg);
      position: relative;
      animation: rotate 5s infinite linear;
    }
    .quarter-circle::before {
      content: "";
      height: 20px;
      width: 20px;
      background-color: brown;
      position: absolute;
      border-radius: 50% 50% 0 0;
      transform: rotate(-39deg);
      right: 10px;
      top: 14px;
    }
    .quarter-circle::after {
      content: "";
      height: 20px;
      width: 20px;
      background-color: brown;
      position: absolute;
      border-radius: 50%;
      bottom: 14px;
      right: 11px;
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
</style>

