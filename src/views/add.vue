<template>
    <div class="add">
        <Header>添加</Header>
        <!--添加图书-->
        <div class="form-item">
            <p class="item-label">书的名称</p>
            <input type="text" v-model="book.bookName">
        </div>
        <div class="form-item">
            <p class="item-label">书的信息</p>
            <input type="text" v-model="book.bookInfo">
        </div>
        <div class="form-item">
            <p class="item-label">书的价格</p>
            <input type="text" v-model="book.bookPrice">
        </div>
        <div class="form-item">
            <p class="item-label">书的封面</p>
            <input type="text" v-model="book.bookCover">
        </div>
        <div class="form-item submit-btn">
            <input type="button" value="添加" :class="{ok: isOK}" @click="isOK? add():null">
        </div>
    </div>
</template>

<script>
    import Header from '@/components/header'
    import {addBook} from '../api/addApi'

    export default {
        components: {
            Header
        },
        data() {
            return {
                book: {}
            }
        },
        computed: {
            isOK() {
                const {bookName, bookInfo, bookPrice, bookCover} = this.book;
                return bookName && bookInfo && bookPrice && bookCover
            }
        },
        methods: {
          async  add() {
                if (!/^https?:\/\/.+(png|jpg|jpeg|gif)$/.test(this.book.bookCover)){
                    this.book.bookCover='http://bpic.588ku.com/element_origin_min_pic/00/72/83/9556def62d71125.jpg'
                }
               await addBook(this.book);
                this.$router.push('/home')
            }
        }
    }
</script>

<style scoped lang="less">
    .add {
        padding: 1.2rem 0 1rem 0;
        .form-item {
            padding: .1rem .3rem;
            .item-label {
                font-size: .28rem;
                line-height: .44rem;
                color: #555;
            }
            input {
                display: block;
                width: 100%;
                height: .6rem;
                outline: none;
                border: 1px solid #333;
            }
        }
        .submit-btn {
            padding: .3rem;
            input {
                color: #555;
                border-radius: .1rem;
            }
            input.ok {
                background: #f10215;
                color: #fff;
            }
        }
    }

</style>