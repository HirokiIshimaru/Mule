<template>
    <div>
        <header>
            <h1 class="title">相手を探す</h1>
        </header>
        <main>
            <h2>レッスン相手をさがす</h2>
            <div class="searchBox" @click="openModal()">
                <img src="../assets/small_search.png" alt="">
                <p>条件を絞って検索する</p>
            </div>
            <modal v-show="showModal" @close="closeModal" @search="searchCloseModal"/>
            <h2>検索条件から見つけた相手</h2>
            <div class="userList">
                <router-link to="userInfo" class="userBox">
                    <div class="userIcon">
                        <img src="../assets/human01.png" alt="">
                    </div>
                    <div class="userInfo">
                        <div class="infoTop">
                            <p class="music">ギター</p>
                            <p>6年・経験有</p>
                        </div>
                        <p class="userName">小倉弘暉</p>
                        <p class="word">はじめまして！私は小倉弘暉です。<br>
                                        約6年間ギタリストとして音楽活動...
                        </p>
                    </div>
                </router-link>
                <router-link to="userInfo" class="userBox">
                    <div class="userIcon">
                        <img src="../assets/human02.png" alt="">
                    </div>
                    <div class="userInfo">
                        <div class="infoTop">
                            <p class="music">ドラム</p>
                            <p>10年・経験有</p>
                        </div>
                        <p class="userName">岡崎流依</p>
                        <p class="word">はじめまして！私は岡崎流依です。<br>
                                        約10年間ドラマーとして音楽活動...
                        </p>
                    </div>
                </router-link>
                <router-link to="userInfo" class="userBox">
                    <div class="userIcon">
                        <img src="../assets/human03.png" alt="">
                    </div>
                    <div class="userInfo">
                        <div class="infoTop">
                            <p class="music">ベース</p>
                            <p>4年・経験有</p>
                        </div>
                        <p class="userName">東江楓音</p>
                        <p class="word">はじめまして！私は東江楓音です。<br>
                                        約4年間ベーシストとして音楽活動...
                        </p>
                    </div>
                </router-link>
                <router-link to="userInfo" class="userBox">
                    <div class="userIcon">
                        <img src="../assets/human01.png" alt="">
                    </div>
                    <div class="userInfo">
                        <div class="infoTop">
                            <p class="music">ギター</p>
                            <p>6年・経験有</p>
                        </div>
                        <p class="userName">小倉弘暉</p>
                        <p class="word">はじめまして！私は小倉弘暉です。<br>
                                        約6年間ギタリストとして音楽活動...
                        </p>
                    </div>
                </router-link>
                <router-link to="userInfo" class="userBox">
                    <div class="userIcon">
                        <img src="../assets/human02.png" alt="">
                    </div>
                    <div class="userInfo">
                        <div class="infoTop">
                            <p class="music">ドラム</p>
                            <p>10年・経験有</p>
                        </div>
                        <p class="userName">岡崎流依</p>
                        <p class="word">はじめまして！私は岡崎流依です。<br>
                                        約10年間ドラマーとして音楽活動...
                        </p>
                    </div>
                </router-link>
                <router-link to="userInfo" class="userBox">
                    <div class="userIcon">
                        <img src="../assets/human03.png" alt="">
                    </div>
                    <div class="userInfo">
                        <div class="infoTop">
                            <p class="music">ベース</p>
                            <p>4年・経験有</p>
                        </div>
                        <p class="userName">東江楓音</p>
                        <p class="word">はじめまして！私は東江楓音です。<br>
                                        約4年間ベースとして音楽活動...
                        </p>
                    </div>
                </router-link>
            </div>
        </main>
    </div>
</template>

<script>
import Modal from '../pages/search_modal.vue'
export default {
    components: {
        Modal
    },
    data(){
        return{
            showModal: false,
        }
    },
    methods: {
        openModal(){
            this.showModal = true
        },
        closeModal(){
            this.showModal = false
        },
        searchCloseModal(){
            this.showModal = false
        }
    }
}
</script>

<style>
@import "../css/ress.css";
@import "../css/common.css";
@import "../css/header.css";
@import "../css/search.css";
</style>