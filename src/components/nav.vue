<template>
    <div class="nav">
        <router-link to="./home"><i class="iconfont icon-shouye"></i><br/>首页</router-link>
        <router-link to="./list"><i class="iconfont icon-liebiao1"></i><br/>列表</router-link>
        <router-link to="./collection"><i class="iconfont icon-shoucang"></i><br/>收藏</router-link>
        <router-link to="./add"><i class="iconfont icon-add"></i><br/>添加</router-link>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="less">
    .nav{
        width: 7.5rem;
        position: fixed;
        bottom: 0;
        height: 1rem;
        box-shadow: 0 0 1rem rgba(100, 100, 100, .1);
        display: flex;
        padding: .1rem 0 .1rem 0;
        background: #fff;
        a{
            flex: 1;
            color: #2c3e50;;
            text-align: center;
            font-weight: bold;
            .iconfont{
                font-size: .4rem;
            }
            &.router-link-exact-active {
                /*color: #42b983;*/
                color: red;
            }
        }
    }

</style>