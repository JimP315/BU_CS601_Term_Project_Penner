<script setup>
import {nanoid } from "nanoid";
import { ref } from "vue";
import checkbox from "./checkbox.vue"

const prop = defineProps({
    items: {
        type: Array,
        default: () => [],
    },

});
const emits = defineEmits({
    onChange: {
        type: "change",
        default: () => {},
    },

});

const itemsRef = ref(
    prop.items.map((item) => {
        return {
            ...item,
            id: nanoid(),
        };
    })
);

const handleOnChange = (id) => {
    const newValue = itemsRef.value.map((item) => ({
        ...item,
        checked: item.id === id ? !item.checked : item.checked,

    }));
    itemsRef.value = newValue;
    emits("onChange", newValue);
};
</script>

<template>
    <div class="checkbox-group-wrapper">
        <checkbox
        v-for="item in itemsRef"
        :id="item.id"
        :key="item.id"
        :label="item.label"
        :value="item.value"
        :checked="item.checked"
        @on-change="handleOnChange"
        />
    </div>
</template>

<style lang="css">
.checkbox-group-wrapper {
    padding: 0.4rem;

}</style>