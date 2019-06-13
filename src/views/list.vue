<template>
    <div class="list">
        <Header>列表</Header>
        <!--列表页-->
        <ul class="list-book">
            <li class="book-item" v-for="item in list.book" @click="gotoDetail(item.bookId)">
                <img :src="item.bookCover" alt="">
                <div class="book-info">
                    <p>{{item.bookName}}</p>
                    <p>{{item.bookInfo}}</p>
                    <p style="color: red">价格：{{item.bookPrice}}</p>
                    <div class="book-handle">
                        <span @click.stop="collect(item)">收藏</span>
                        <span @click.stop="remove(item.bookId)">删除</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import Header from '@/components/header'
    import {mapActions, mapState,mapMutations} from 'vuex'
    import {collectBook,deleteBook} from '../api/listApi'
    export default {
        components:{
            Header
        },
        computed:{
            ...mapState(['list'])
        },
        created(){
            this.getBook();
        },
        methods:{
            ...mapActions(['getBook']),
            ...mapMutations(['deletebook']),
           async collect(item){
               await collectBook(item)
            },
            async remove(id){
                await deleteBook(id);
                this.deletebook(id);
            },
            gotoDetail(id){
                this.$router.push('/detail/'+ id)
            }
        }
    }
</script>

<style scoped lang="less">
    .list{
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