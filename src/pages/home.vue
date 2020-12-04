<template>
    <div>
        <header>
            <h1 class="title">ホーム</h1>
        </header>
        <main>
            <div class="rec_wrap">
                <h2>あなたにおすすめの相手</h2>
                <div class="rec_box">
                    <router-link to="/userInfo" class="user" exact-active-class="">
                        <img src="@/assets/human01.png" alt="">
                        <p>ギター</p>
                        <p>6年・経験有</p>
                        <p>大阪府大阪市</p>
                    </router-link>
                    <router-link to="/userInfo" class="user" exact-active-class="">
                        <img src="@/assets/human02.png" alt="">
                        <p>ドラム</p>
                        <p>10年・経験有</p>
                        <p>大阪府和泉市</p>
                    </router-link>
                    <router-link to="/userInfo" class="user" exact-active-class="">
                        <img src="@/assets/human03.png" alt="">
                        <p>ベース</p>
                        <p>4年・経験有</p>
                        <p>兵庫県西宮市</p>
                    </router-link>
                    <router-link to="/userInfo" class="user" exact-active-class="">
                        <img src="@/assets/human01.png" alt="">
                        <p>ギター</p>
                        <p>6年・経験有</p>
                        <p>大阪府大阪市</p>
                    </router-link>
                    <router-link to="/userInfo" class="user" exact-active-class="">
                        <img src="@/assets/human02.png" alt="">
                        <p>ギター</p>
                        <p>6年・経験有</p>
                        <p>大阪府大阪市</p>
                    </router-link>
                    <router-link to="/userInfo" class="user" exact-active-class="">
                        <img src="@/assets/human03.png" alt="">
                        <p>ギター</p>
                        <p>6年・経験有</p>
                        <p>大阪府大阪市</p>
                    </router-link>
                </div>
                <router-link to="#" class="more">
                    もっと見る＞
                </router-link>
            </div>
            <div class="lesson_wrap">
                <h2>すぐにレッスンを受けれる相手</h2>
                <div class="lesson_box">
                    <router-link to="/userInfo" class="user">
                        <img src="@/assets/human01.png" alt="">
                        <p>ギター</p>
                        <p>6年・経験有</p>
                        <p>大阪府大阪市</p>
                    </router-link>
                    <router-link to="/userInfo" class="user">
                        <img src="@/assets/human02.png" alt="">
                        <p>ドラム</p>
                        <p>10年・経験有</p>
                        <p>大阪府和泉市</p>
                    </router-link>
                    <router-link to="/userInfo" class="user">
                        <img src="@/assets/human03.png" alt="">
                        <p>ベース</p>
                        <p>4年・経験有</p>
                        <p>兵庫県西宮市</p>
                    </router-link>
                    <router-link to="/userInfo" class="user">
                        <img src="@/assets/human01.png" alt="">
                        <p>ギター</p>
                        <p>6年・経験有</p>
                        <p>大阪府大阪市</p>
                    </router-link>
                    <router-link to="/userInfo" class="user">
                        <img src="@/assets/human02.png" alt="">
                        <p>ドラム</p>
                        <p>10年・経験有</p>
                        <p>大阪府和泉市</p>
                    </router-link>
                    <router-link to="/userInfo" class="user">
                        <img src="@/assets/human03.png" alt="">
                        <p>ベース</p>
                        <p>4年・経験有</p>
                        <p>兵庫県西宮市</p>
                    </router-link>
                </div>
                <router-link to="#" class="more">
                    もっと見る＞
                </router-link>
            </div>
            <div class="studio_wrap">
                <h2>ご利用可能な近くのスタジオ</h2>
                <div class="studio_box">
                    <router-link to="#" class="studio">
                        <img src="@/assets/studio.png" alt="">
                        <h3>〇〇スタジオ</h3>
                        <ul>
                            <li>
                                <p>営業時間</p>
                                <p>10:00〜24:00</p>
                            </li>
                            <li>
                                <p>定休日</p>
                                <p>第３水曜日</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>電話番号</p>
                                <p>080-2946-4723</p>
                            </li>
                            <li>
                                <p>住所</p>
                                <p>大阪府大阪市都島区内代町</p>
                            </li>
                        </ul>
                    </router-link>
                    <router-link to="#" class="studio">
                        <img src="@/assets/studio.png" alt="">
                        <h3>〇〇スタジオ</h3>
                        <ul>
                            <li>
                                <p>営業時間</p>
                                <p>10:00〜24:00</p>
                            </li>
                            <li>
                                <p>定休日</p>
                                <p>第３水曜日</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>電話番号</p>
                                <p>080-2946-4723</p>
                            </li>
                            <li>
                                <p>住所</p>
                                <p>大阪府大阪市都島区内代町</p>
                            </li>
                        </ul>
                    </router-link>
                </div>
                <router-link to="#" class="more">
                    もっと見る
                </router-link>
            </div>
        </main>
    </div>
</template>

<style>
@import "../css/ress.css";
@import "../css/common.css";
@import "../css/header.css";
@import "../css/home.css";
</style>