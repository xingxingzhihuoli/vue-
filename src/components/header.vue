<template>
    <div class="header">
        <span class="iconfont icon-fanhui" v-if="!!hash" @click="$router.go(-1)"></span>
        <h1><slot></slot></h1>
    </div>
</template>

<script>
    export default {
        props:['hash']
    }
</script>

<style scoped lang="less">
    .header{
        width: 7.5rem;
        position: fixed;
        top: 0;
        height: .88rem;
        text-align: center;
        background: #f10215;
        line-height: .88rem;
        color: #fff;
        z-index: 99;
        h1{
            font-weight: normal;
            font-size: .36rem;
        }
        .iconfont{
            position: absolute;
            left: .3rem;
            font-size: .4rem;
        }
    }

</style>