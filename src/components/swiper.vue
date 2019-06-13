<template>
    <div class="Swiper">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in slides">
                <img :src="item" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        props:['slides'],
    }
</script>

<style scoped lang="less">
    .Swiper{
        height: 3.8rem;
    }
</style>