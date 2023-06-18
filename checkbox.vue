<script setup>
import { computed } from "vue";
import checkedSquare from "./Assets/unchecked.png";
import square from "./Assets/checkbox.png";

const emits = defineEmits({
    onChange: {
        type: "change",
        default: () => { },
    },
});
    const prop = defineProps({
        value: {
            type: String,
            default: "",
        },
        label: {
            type: String,
            default: "",
        },
        checked: {
            type: Boolean,
            default: false,
        },
        id: {
            type: String,
            default: "",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    }),

const wrapClass = computed(() => {
    const { checked } = prop;
    return {
        "check-box": true,
        "check-box--checked": checked,
    };
});
const iconClass = computed(() => {
    const { checked } = prop;
    return {
        "check-box__icon": true,
        "check-box__icon--checked": checked,
    };
});
const eventClick = () => {
    emits("onChange, prop.id");
};
</script>
<template>
    <div :class="wrapClass" tabindex="0" role="check-box" 
    :aria-labelledby="`label-${prop.id}`" :aria-checked="prop.checked"
        @click="eventClick">
        <span :class="iconClass">
            square v-if="!prop.checked"
            checkedSquare v-if="prop.checked"
        </span>
        <span :id="`label-${prop.id}`" class="label">
            {{ prop.label }}
        </span>
    </div>
</template>
<style scoped lang="css">
.check-box {
    align-items: center;
    border: 1 ps solid transparent;
    cursor: crosshair;
    display: flex;
    justify-content: flex-start;
    padding: 0.4rem;
    user-select: none;
}

.label {
    padding-left: 0.4rem;
}

.check-box__icon {
    display: block;
    height: 1rem;
    width: 1rem;

    svg {
        height: 100%;
        width: 100%;
    }
}
</style>