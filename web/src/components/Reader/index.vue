<template>
    <div class="container" ref="container">
        <div class="txt" ref="txt">
            <Page :x="String(lx)" :scroll="String(-ly)" class="page">
                <div class="title">{{ title }}</div>
                <div class="content">
                    <div class="item" v-for="line in content" :key="line">{{ line }}</div>
                    <div class="end" ref="end1"></div>
                </div>
            </Page>
            <Page :x="String(rx)" :scroll="String(-ry)" class="page">
                <div class="title">{{ title }}</div>
                <div class="content">
                    <div class="item" v-for="line in content" :key="line">{{ line }}</div>
                    <div class="end" ref="end2"></div>

                </div>
            </Page>
        </div>


        <div class="btns">
            <div class="btn" @click="slidePage(-1)">←</div>
            <div class="btn" @click="slidePage(+1)">→</div>
        </div>

    </div>
</template>

<script setup lang='ts'>
import Page from './Page.vue'
import { SerializedBookData, Chapter } from '@/types';
import { computed, onMounted, ref } from 'vue';
import animation from './animation'
const props = defineProps<{ book: SerializedBookData }>();
console.log(props.book);
const { title, content } = (props.book.data[1] as Chapter);
const container = ref<HTMLDivElement>();
const end1 = ref<HTMLDivElement>();
const end2 = ref<HTMLDivElement>();
let txt = ref<HTMLDivElement>().value;

let slidePage = (num: 1 | -1) => {

}

const [lx, ly, rx, ry] = [ref(0), ref(0), ref(0), ref(0)];



onMounted(() => {
    const width = container.value?.offsetWidth!;
    const height = container.value?.offsetHeight!;

    rx.value = width;
    let page = 1;
    let isEnd = false;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            isEnd = entry.isIntersecting ? true : false;
            console.log(isEnd);
        })
    }, {
        root: container.value,
        threshold: 1.0
    })
    observer.observe(end1.value!);
    observer.observe(end2.value!);
    slidePage = (num: 1 | -1) => {
        if (isEnd && num === 1) return;
        if (page === 1 && num === -1) return;
        page += num;
        if (num === 1) {
            ry.value = height * (page - 1);
            const rstart = rx.value;
            const lstart = lx.value;
            animation((process) => {
                rx.value = rstart - process * width;
                lx.value = lstart - process * width;
            }, () => {
                console.log(2432);
                ly.value += height;
                rx.value = 0;
                ry.value = width;
                ry.value += height;

            }, 200);

        }

    }
})

</script>

<style lang="scss" scoped>
.container {
    position: relative;

    .txt {
        display: flex;

        .page {
            width: 100%;
            height: 100%;
            padding: 30px;
            position: absolute;

            .title {
                font-size: 36px;
                font-weight: bold;
                margin-bottom: 35px;
            }

            .content {
                position: relative;

                .item {
                    line-height: 35px;
                    margin-bottom: 10px;

                    &::before {
                        content: "";
                        margin-left: 32px;
                        display: inline;
                    }
                }

                .end {
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    bottom: 0px;
                    left: 0;
                    background-color: red;
                }


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