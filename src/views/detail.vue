<template>
    <div class="detail">
        <Header :hash="true">详情</Header>
        <!--修改图书-->
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
            <input type="button" value="修改" :class="{ok: isOK}" @click="isOK? update():null">
        </div>
    </div>
</template>
<script>
    import Header from "@/components/header"
    import {updateBook, getBookDetail} from "../api/detailApi"

    export default {
        data() {
            return {
                book: {}
            }
        },
        components: {
            Header
        },
        methods: {
            async update() {
                await updateBook(this.book)
            }
        },
        created() {
            getBookDetail(this.$route.params.id).then(item=>{
                this.book = item.data
            })
        },
        computed: {
            isOK() {
                const {bookName, bookInfo, bookPrice, bookCover} = this.book;
                return bookName && bookInfo && bookPrice && bookCover
            }
        }
    }
</script>
<style scoped lang="less">
    .detail {
        padding: 1.2rem 0 0 0;
        height: 100%;
        position: relative;
        z-index: 200;
        background: #fff;
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