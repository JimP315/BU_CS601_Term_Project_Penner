<script setup>
import checkBoxGroup from "./checkbox-group.vue";
const onChange = (val) => {
    console.log(val);
};
</script>

<template>
    <checkBoxGroup
    :items="[
        {
            label: 'Option 1',
            value: '1',
        },
        {
            label: 'Option 2',
            value: '2',
        },
        {
            label: 'Option 3',
            value: '3',
        },
    ]"
    @on-change="onChange"
    />
</template>

<style>
#app {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    -webkit-foont-smoothing: antialiased;
    -moz-osx-font-smothing: grayscale;
    text-align: center;
    color: green;
    margin-top: 70px;
}</style>