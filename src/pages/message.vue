<template>
    <div>
        <header>
            <h1 class="title">メッセージ</h1>
        </header>
        <main>
            <div class="match_box">
                <h2>マッチングした相手</h2>
                <div class="match_list">
                    <router-link to="userInfo" class="user" exact-active-class="">
                        <img src="../assets/human01.png" alt="">
                        <p>ギター</p>
                        <p>6年・経験有</p>
                        <p>大阪府大阪市</p>
                    </router-link>
                    <router-link to="userInfo" class="user" exact-active-class="">
                        <img src="../assets/human02.png" alt="">
                        <p>ドラム</p>
                        <p>10年・経験有</p>
                        <p>大阪府和泉市</p>
                    </router-link>
                    <router-link to="userInfo" class="user" exact-active-class="">
                        <img src="../assets/human03.png" alt="">
                        <p>ベース</p>
                        <p>4年・経験有</p>
                        <p>兵庫県西宮市</p>
                    </router-link>
                    <router-link to="userInfo" class="user" exact-active-class="">
                        <img src="../assets/human01.png" alt="">
                        <p>ギター</p>
                        <p>6年・経験有</p>
                        <p>大阪府大阪市</p>
                    </router-link>
                    <router-link to="userInfo" class="user" exact-active-class="">
                        <img src="../assets/human02.png" alt="">
                        <p>ドラム</p>
                        <p>10年・経験有</p>
                        <p>大阪府和泉市</p>
                    </router-link>
                    <router-link to="userInfo" class="user" exact-active-class="">
                        <img src="../assets/human03.png" alt="">
                        <p>ベース</p>
                        <p>4年・経験有</p>
                        <p>兵庫県西宮市</p>
                    </router-link>
                </div>
            </div>
            <div class="message_box">
                <h2>メッセージ</h2>
                <ul class="message_list">
                    <li>
                        <router-link to="#" class="message_link">
                            <div class="user_icon">
                                <img src="../assets/human01.png" alt="">
                            </div>
                            <div class="user_message">
                                <div class="message_top">
                                    <p class="user_name">小倉弘暉</p>
                                    <p class="time">13:35</p>
                                </div>
                                <div class="message_content">
                                    〇〇さんはじめまして！<br>
                                    マッチングありがとうございます！
                                </div>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="#" class="message_link">
                            <div class="user_icon">
                                <img src="../assets/human02.png" alt="">
                            </div>
                            <div class="user_message">
                                <div class="message_top">
                                    <p class="user_name">岡崎流依</p>
                                    <p class="time">13:35</p>
                                </div>
                                <div class="message_content">
                                    〇〇さんはじめまして！<br>
                                    マッチングありがとうございます！
                                </div>
                            </div>
                        </router-link>  
                    </li>
                    <li>
                        <router-link to="#" class="message_link">
                            <div class="user_icon">
                                <img src="../assets/human03.png" alt="">
                            </div>
                            <div class="user_message">
                                <div class="message_top">
                                    <p class="user_name">東江楓音</p>
                                    <p class="time">13:35</p>
                                </div>
                                <div class="message_content">
                                    〇〇さんはじめまして！<br>
                                    マッチングありがとうございます！
                                </div>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="#" class="message_link">
                            <div class="user_icon">
                                <img src="../assets/human01.png" alt="">
                            </div>
                            <div class="user_message">
                                <div class="message_top">
                                    <p class="user_name">小倉弘暉</p>
                                    <p class="time">13:35</p>
                                </div>
                                <div class="message_content">
                                    〇〇さんはじめまして！<br>
                                    マッチングありがとうございます！
                                </div>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="#" class="message_link">
                            <div class="user_icon">
                                <img src="../assets/human02.png" alt="">
                            </div>
                            <div class="user_message">
                                <div class="message_top">
                                    <p class="user_name">岡崎流依</p>
                                    <p class="time">13:35</p>
                                </div>
                                <div class="message_content">
                                    〇〇さんはじめまして！<br>
                                    マッチングありがとうございます！
                                </div>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="#" class="message_link">
                            <div class="user_icon">
                                <img src="../assets/human03.png" alt="">
                            </div>
                            <div class="user_message">
                                <div class="message_top">
                                    <p class="user_name">東江楓音</p>
                                    <p class="time">13:35</p>
                                </div>
                                <div class="message_content">
                                    〇〇さんはじめまして！<br>
                                    マッチングありがとうございます！
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </main>
    </div>
</template>

<style>
@import "../css/ress.css";
@import "../css/common.css";
@import "../css/header.css";
@import "../css/message.css";
</style>