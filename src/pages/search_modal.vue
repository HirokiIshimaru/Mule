<template>
    <div>
        <div id="modal-template" class="modal-template">
            <div class="modal-serch">
                <div class="modal-header">
                    <button @click="$emit('close')"><img src="../assets/cross.png" alt=""></button>
                    <p class="header-ttl">検索条件</p>
                </div>
                <div class="modal-main">
                    <form action="#" method="post">
                        <section class="gakki-serch">
                            <p class="serch-ttl">楽器から検索</p>
                            <section class="select-box">
                                <label for="gakki">楽器を選択</label>
                                <select name="gakki">
                                    <option value="選択">選択してください</option>
                                    <option value="ギター">ギター</option>
                                    <option value="ベース">ベース</option>
                                    <option value="ドラム">ドラム</option>
                                    <option value="ピアノ">ピアノ</option>
                                    <option value="バイオリン">バイオリン</option>
                                </select>
                            </section>
                        </section>
                        <section class="profile-serch">
                            <p class="serch-ttl">プロフィールから検索</p>
                            <section class="select-box">
                                <label for="area">都道府県</label>
                                <select name="area">
                                    <option value="選択">選択してください</option>
                                    <option value="北海道">北海道</option>
                                    <option value="青森">青森</option>
                                    <option value="岩手">岩手</option>
                                    <option value="宮城">宮城</option>
                                    <option value="秋田">秋田</option>
                                    <option value="山形">山形</option>
                                    <option value="福島">福島</option>
                                    <option value="茨城">茨城</option>
                                    <option value="栃木">栃木</option>
                                    <option value="群馬">群馬</option>
                                    <option value="埼玉">埼玉</option>
                                    <option value="千葉">千葉</option>
                                    <option value="東京">東京</option>
                                    <option value="神奈川">神奈川</option>
                                    <option value="新潟">新潟</option>
                                    <option value="富山">富山</option>
                                    <option value="石川">石川</option>
                                    <option value="福井">福井</option>
                                    <option value="山梨">山梨</option>
                                    <option value="長野">長野</option>
                                    <option value="岐阜">岐阜</option>
                                    <option value="静岡">静岡</option>
                                    <option value="愛知">愛知</option>
                                    <option value="三重">三重</option>
                                    <option value="滋賀">滋賀</option>
                                    <option value="京都">京都</option>
                                    <option value="兵庫">兵庫</option>
                                    <option value="奈良">奈良</option>
                                    <option value="大阪">大阪</option>
                                    <option value="和歌山">和歌山</option>
                                    <option value="鳥取">鳥取</option>
                                    <option value="島根">島根</option>
                                    <option value="岡山">岡山</option>
                                    <option value="広島">広島</option>
                                    <option value="山口">山口</option>
                                    <option value="徳島">徳島</option>
                                    <option value="香川">香川</option>
                                    <option value="愛媛">愛媛</option>
                                    <option value="高知">高知</option>
                                    <option value="福岡">福岡</option>
                                    <option value="佐賀">佐賀</option>
                                    <option value="長崎">長崎</option>
                                    <option value="熊本">熊本</option>
                                    <option value="大分">大分</option>
                                    <option value="宮崎">宮崎</option>
                                    <option value="鹿児島">鹿児島</option>
                                    <option value="沖縄">沖縄</option>
                                </select>
                            </section>
                            <section class="select-box">
                                <label for="year">経験年数</label>
                                <select name="year">
                                    <option value="選択">選択してください</option>
                                    <option value="1年">1年</option>
                                    <option value="2年">2年</option>
                                    <option value="3年">3年</option>
                                    <option value="4年">4年</option>
                                    <option value="5年">5年</option>
                                    <option value="6年">6年</option>
                                    <option value="7年">7年</option>
                                    <option value="8年">8年</option>
                                    <option value="9年">9年</option>
                                    <option value="10年以上">10年以上</option>
                                </select>
                            </section>
                            <section class="select-box">
                                <label for="teach">教えた経験</label>
                                <select name="teach">
                                    <option value="選択">選択してください</option>
                                    <option value="あり">経験あり</option>
                                    <option value="なし">経験なし</option>
                                </select>
                            </section>
                            <section class="select-box">
                                <label for="sex">性別</label>
                                <select name="sex">
                                    <option value="選択">選択してください</option>
                                    <option value="男">男性</option>
                                    <option value="女">女性</option>
                                </select>
                            </section>
                            <section class="select-box">
                                <label for="day">レッスン日時</label>
                                <select name="day">
                                    <option value="選択">選択してください</option>
                                    <option value="今日">今日</option>
                                    <option value="明日">明日</option>
                                    <option value="明後日">明後日</option>
                                    <option value="明々後日">明々後日以降</option>
                                </select>
                            </section>
                            <section class="select-box">
                                <label for="price">相場</label>
                                <select name="price">
                                    <option value="選択">選択してください</option>
                                    <option value="1000円未満">1000円未満</option>
                                    <option value="1000円〜2000円">1000円〜2000円</option>
                                    <option value="2000円〜3000円">2000円〜3000円</option>
                                    <option value="3000円〜4000円">3000円〜4000円</option>
                                    <option value="4000円〜5000円">4000円〜5000円</option>
                                    <option value="5000円〜6000円">5000円〜6000円</option>
                                    <option value="6000円〜7000円">6000円〜7000円</option>
                                    <option value="7000円〜8000円">7000円〜8000円</option>
                                    <option value="8000円〜9000円">8000円〜9000円</option>
                                    <option value="9000円〜10000円">9000円〜10000円</option>
                                    <option value="10000円以上">10000円以上</option>
                                </select>
                            </section>
                        </section>
                        <section class="btn-box">
                            <button @click="$emit('search')" class="search-btn">条件を絞って検索</button>
                            <button class="reset-btn">条件をリセット</button>
                        </section>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
}
</script>

<style>
.modal-template{
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
}
.modal-serch{
    z-index: 10;
    width: 330px;
    height: 80%;
    overflow-y: scroll;
    background-color: #fff;
    border-radius: 20px;
}
.modal-header{
    height: 60px;
    display: flex;
    align-items: center;
    border-bottom: solid 1px rgba(112, 112, 112, 0.1);
}
.modal-header button{
    margin: 0 20px;
}
.header-ttl{
    font-size: 17px;
    font-weight: 350;
    margin-left: 55px;
}
.gakki-serch{
    margin: 30px 0;
}
.serch-ttl{
    font-size: 15px;
    margin: 0 0 10px 20px;
}
.select-box{
    width: 100%;
    height: 50px;
    background-color: #EEEEEE;
    margin: 30px 0;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
}
label{
    color: #00000050;
    font-size: 12px;
    margin-left: 20px;
}
select{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    text-align: right;
    padding-right: 20px;
}
.btn-box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;
}
.btn-box button{
    width: 300px;
    height: 50px;
    font-size: 13px;
    border-radius: 100px;
}
.search-btn{
    background-color: #00BFFF;
    color: #fff;
    margin: 0 auto;
}
.reset-btn{
    background-color: #CCCCCC;
    margin: 15px auto;
}
</style>