<template>


    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,i) in swipe" :key="item.id">
            <img :src="item.img" alt="">
        </mt-swipe-item>
    </mt-swipe>

</template>

<script>
    export default {
        name: "banner",
        props:['swipe']
    }
</script>

<style scoped lang="less">
    .mint-swipe {
        width: 100%;
        height: 210px;

        .mint-swipe-item {
            img {
                width: 100%;
                height: 100%;
            }
        }
    }

</style>