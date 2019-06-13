<template>
    <div id="app">
        <Nav></Nav>
        <router-view></router-view>
    </div>
</template>
<script>
    import Nav from '@/components/nav.vue'
    export default {
        components: {
            Nav
        }
    }
</script>
<style lang="less">
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        user-select: none;
    }
    ul li{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    img{
        display: block;
        width: 100%;
    }
    html,body{
        height: 100%;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        width: 7.5rem;
        margin: 0 auto;
        font-size: .3rem;
        height: 100%;
    }
</style>
