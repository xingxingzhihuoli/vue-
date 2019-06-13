<template>
    <div id="home">
        <Header>首页</Header>
        <!--获取图书-->
        <Swiper :slides="home.slides"></Swiper>
        <!--热门图书-->
        <div class="section">
            <h3 class="section-title">热门图书</h3>
            <ul class="hot-book-list">
                <li class="book-item" v-for="(item, index) in home.books" :key="index">
                    <img :src="item.bookCover" alt="">
                    <p>{{item.bookInfo}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/header'
    import {mapActions, mapState} from 'vuex'
    import Swiper from '@/components/swiper'
    export default {
        components: {
            Header,
            Swiper
        },
        computed: {
            ...mapState(['home']),
        },
        methods: {
            ...mapActions(['getSlide']),
            ...mapActions(['getBook'])
        },
        created() {
            this.getSlide();
            this.getBook()
        }
    }
</script>
<style scoped lang="less">
    #home {
        padding: .88rem 0 1rem 0;
        .section {
            padding: .2rem;
            .section-title {
                font-size: .32rem;
                line-height: .52rem;
                color: #555;
            }
            .hot-book-list {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                .book-item {
                    width: 48%;
                    img{
                        height: 3rem;
                    }
                    p{
                        padding: .1rem;
                        line-height: .2rem;
                        box-shadow: 0 0 1rem rgba(100,100,100,.2);
                    }
                }
            }
        }

    }
</style>
