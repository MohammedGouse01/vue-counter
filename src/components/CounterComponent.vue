<template>
<div>
    <h3>
        Current Count : {{ currentCount }}
    </h3>
    <button @click="incrementFunction" id="IncrementButton">Increment</button>
    <button @click="decrementFunction" id="decrementButton">Decrement</button>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const currentCount=ref<number>(0)

const incrementFunction=()=>{
    currentCount.value++
}
const decrementFunction=()=>{
    if(currentCount.value>0)currentCount.value--
}
</script>