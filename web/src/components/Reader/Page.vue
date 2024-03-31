<template>
    <div class="container" :style="{
        transform: `translate(${x}px,${scroll}px)`
    }">
        <slot></slot>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';


const props = defineProps<{
    scroll: string,
    x: string,
}>();


</script>

<style lang="scss" scoped></style>