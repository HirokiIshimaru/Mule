<template>
  <div>
    <div id="app">
      <router-view/>
    </div>
    <div id="nav" class="nav">
      <div class="home">
        <router-link to="./" exact>
            <!-- home_icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0h24v24H0z" stroke="none"/><path d="M5 12H3l9-9 9 9h-2M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/><path d="M10 12h4v4h-4z"/></svg>
            <p>ホーム</p>
        </router-link>
      </div>
      <div class="search">
        <router-link to="search" exact>
            <!-- search_icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0h24v24H0z" stroke="none"/><circle cx="10" cy="10" r="7"/><path d="M21 21l-6-6"/></svg>
            <p>探す</p>
        </router-link>
      </div>
      <div class="message">
        <router-link to="message" exact>
            <!-- message_icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-messages" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0h24v24H0z" stroke="none"/><path d="M21 14l-3-3h-7a1 1 0 01-1-1V4a1 1 0 011-1h9a1 1 0 011 1v10M14 15v2a1 1 0 01-1 1H6l-3 3V11a1 1 0 011-1h2"/></svg>
            <p>メッセージ</p>
        </router-link>
      </div>
      <div class="myPage">
        <router-link to="myPage" exact>
            <!-- myPage_icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0h24v24H0z" stroke="none"/><circle cx="12" cy="7" r="4"/><path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/></svg>
            <p>マイページ</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
@import "./css/ress.css";
@import "./css/Nav.css";
</style>
