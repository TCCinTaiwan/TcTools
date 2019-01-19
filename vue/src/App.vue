<template>
  <div id="app">
    <div id="nav">
      <router-link to="/md5">MD5 雜湊</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

/* 【文本區域】樣式 */
textarea {
  width: 50%;
  height: 50%;
  max-width: 100%;
  min-width: 20px;
  min-height: 20px;
}
textarea[readonly] {
  background: rgb(220, 220, 220);
}
</style>
