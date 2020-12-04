<template>
    <div>
        <div class="user_header">
            <img src="../assets/userInfo.png" alt="" class="bg_img">
            <router-link to="/" class="cross">
                <img src="../assets/cross_white.png" alt="">
            </router-link>
        </div>
        <div class="user_main">
            <p class="music_spe">ギター専門</p>
            <p class="name">小倉弘暉</p>
            <div class="experience">
                <ul class="experience_list">
                    <li>経験年数</li>
                    <li class="list_content">6年</li>
                </ul>
                <ul class="experience_list">
                    <li>教えた経験</li>
                    <li class="list_content">経験有り</li>
                </ul>
            </div>
            <div class="text">
                <h3>自己紹介</h3>
                <p class="self-text">
                    はじめまして！私は小倉弘暉です。<br>
                    約6年間ギタリストとして音楽活動をしています。<br>
                    テキストテキストテキストテキストテキスト<br>
                    テキストテキストテキストテキストテキスト
                </p>
            </div>
            <div class="profile">
                <h3>プロフィール</h3>
                <div class="profile_list">
                    <p class="profile_ttl">居住地</p>
                    <p class="profile_content">大阪府大阪市</p>
                </div>
                <div class="profile_list">
                    <p class="profile_ttl">経験楽器</p>
                    <p class="profile_content">ギター</p>
                </div>
                <div class="profile_list">
                    <p class="profile_ttl">経験歴</p>
                    <p class="profile_content">6年</p>
                </div>
                <div class="profile_list">
                    <p class="profile_ttl">教えた経験</p>
                    <p class="profile_content">経験有り</p>
                </div>
                <div class="profile_list">
                    <p class="profile_ttl">男性</p>
                    <p class="profile_content">男性</p>
                </div>
            </div>
        </div>
        <div class="follow">
            <button>フォローを送る</button>
        </div>
    </div>
</template>

<style>
@import "../css/ress.css";
@import "../css/common.css";
@import "../css/header.css";
@import "../css/userInfo.css";
</style>