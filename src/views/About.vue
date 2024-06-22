<template>
    <h1>about</h1>
    <button @click="link">點我跳轉並附上id</button>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute()

const link = () => {
    //因為是異步函式，所以會直接執行下面的funtion，所以最佳解法是也把funtion設定成異步函式
    router.push({ path: "/", query: { id: "555" } });
    setTimeout(() => {
        console.log(route.query.id);
    }, 0);
};
</script>

<style>

</style>
