<template>
    <div class="container" ref="container">
        <div class="title">{{ title }}</div>
        <div class="content">
            <div class="item" v-for="line in content" :key="line">{{ line }}</div>
        </div>
        <div class="btns">
            <div class="btn" @click="slidePage(-1)">←</div>
            <div class="btn" @click="slidePage(+1)">→</div>
        </div>

    </div>
</template>

<script setup lang='ts'>

import { SerializedBookData, Chapter } from '@/types';
import { computed, ref } from 'vue';
const props = defineProps<{ book: SerializedBookData }>();
console.log(props.book);
const { title, content } = (props.book.data[1] as Chapter);
const container = ref<HTMLDivElement>();
const height = window.innerHeight;

function slidePage(num: number) {
    container.value!.scrollTo(0, height * 3);
}

</script>

<style lang="scss" scoped>
.container {
    overflow: hidden;
    padding: 30px;
    position: relative;

    .title {
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 45px;
    }

    .content {

        .item {
            line-height: 20px;
            margin-bottom: 10px;

            &::before {
                content: "";
                margin-left: 32px;
                display: inline;
            }
        }


    }

    .btns {
        position: absolute;
        z-index: 2;
        right: 10px;
        bottom: 10px;
        display: flex;
        gap: 10px;

        .btn {
            width: 50px;
            height: 50px;
            border-radius: 25px;
            background: #4266be;
            line-height: 50px;
            text-align: center;
            color: #e0e0e0;
            font-size: 30px;
            cursor: pointer;
        }

    }
}
</style>