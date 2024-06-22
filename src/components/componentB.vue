<template>
    <h1>我是組件B</h1>
    <p>字數：{{ msgcount }}</p>
    <br>
    {{ props.componentBmsg }}
    <br>

    <!-- slot預設的語法，可以讓父組件定位到子組件的位置 -->
    <slot>
        <button>XD</button>
    </slot>

    <!-- 具名插槽，方便我們在父組件使用template+#去指定參數要放到哪個位置，但如果不在父組件內客製化改寫其他內容的話，會保持子組件預設的內容 -->
    <slot name="B">
        <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat aspernatur assumenda est at similique excepturi facilis, quibusdam voluptate cupiditate culpa voluptatibus numquam optio ea et repellendus a officia dolorum harum?</P>
    </slot>
    <slot name="C">
        <h1>煉獄大哥</h1>
    </slot>

    <!-- 作用域插槽，可以實現從子組件傳遞參數到父組件，但因為要維持單向數據流的寫法，所以盡量不去用 -->
    <slot name="D" :A="data"/>

</template>

<script setup>
    import { computed ,watch } from 'vue';

    //在子組件裡面接收的值不用跟父組件的變數名稱一樣
    //通常會使用一個數值去接收這個defineProps的funtion才可以做使用
    // const props = defineProps({
    //     componentBmsg:{
    //         type:String,
    //     },
    // })
    const props = defineProps(["componentBmsg"])
    const msgcount = computed(()=>{
        return props.componentBmsg.length
    })

    const emit = defineEmits(["log"])
    watch(msgcount,(stringLenth)=>{
        emit("log",stringLenth)
    })
    const data ={
        firstName:"林",
        lastName:"霸天"
    }
</script>

<style scoped>
</style>
