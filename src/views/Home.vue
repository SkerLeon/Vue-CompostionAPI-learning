<template>
    <button @click="increment">Increment</button>
    <p>{{ counter.count }}</p>

    <!-- 這個是使用toRefs解構的寫法 -->
    <!-- <p>{{ count }}</p> -->
    
    <button @click="setCount">setCount</button>
    
    <button @click="decrement">Decrement</button>
    <p>Double Count: {{ counter.doubleCount }}</p>
    
    <!-- 這個是使用toRefs解構的寫法 -->
    <!-- <p>Double Count: {{ doubleCount }}</p> -->
</template>

<script setup>
    import { useCounterStore } from '../stores/counter';
    // import { toRefs } from 'vue';

    // 使用 Pinia store
    const counter = useCounterStore();

    // 使用 toRefs 來將 reactive 狀態轉換為 refs
    // 這步只是方便我們在template裡面做使用
    // const { count, doubleCount } = toRefs(counter);

    // 定義組件方法來調用 store 的 actions
    const increment = () => {
        counter.increment();
    };

    const decrement = () => {
        counter.decrement();
    };

    const setCount =()=>{
        counter.setCount(5)
    }
</script>

<style>
  /* 你的樣式可以放在這裡 */
</style>