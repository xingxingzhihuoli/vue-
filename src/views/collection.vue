<template>
    <div class="collection">
        <Header>收藏</Header>
        <!--收藏页-->
        <ul class="list-book">
            <li class="book-item" v-for="item in collection.book">
                <img :src="item.bookCover" alt="">
                <div class="book-info">
                    <p>{{item.bookName}}</p>
                    <p>{{item.bookInfo}}</p>
                    <p style="color: red">价格：{{item.bookPrice}}</p>
                    <div class="book-handle">
                        <span>删除</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import Header from '@/components/header'
    import {mapActions,mapState} from 'vuex'
    export default {
        components:{
            Header
        },
        computed:{
            ...mapState(['collection'])
        },
        methods:{
            ...mapActions(['getCollections'])
        },
        created(){
            this.getCollections();
        }

    }
</script>

<style scoped lang="less">
    .collection{
        padding: .88rem 0 1rem 0;
        .book-item{
            width: 7.5rem;
            border-bottom: 1px solid #eee;
            display: flex;
            padding: .2rem;
            img{
                width: 3rem;
                height: 3rem;
                margin-right: .2rem;
            }
            .book-info{
                p{
                    padding: .2rem;
                }
                .book-handle{
                    padding: .2rem;
                    display: flex;
                    span{
                        display: block;
                        width: 1rem;
                        background: red;
                        color: #fff;
                        margin-right: .4rem;
                        border-radius: .09rem;
                        font-size: .28rem;
                        line-height: .44rem;
                        height: .44rem;
                        text-align: center;
                    }
                }
            }
        }
    }

</style>