// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 10
    }),
    getters: {
        doubleCount: (state) => state.count * 2
    },
    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        },
        setCount(value) {
            this.count = value;
        }
    }
})
