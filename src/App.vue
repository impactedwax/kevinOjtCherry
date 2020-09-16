<template>
  <div id="app">
    <div id="nav">
      <v-card color="grey lighten-4" flat height="100%" tile>
        <v-toolbar class="toolbar" color="#FFFFFF" dense>
          <v-toolbar-title>
            <v-img
              :src="require('@/assets/images/aicquire.png')"
              height="30px"
              width="110px"
            ></v-img>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <router-link to="/login">
            <a>Home</a>
          </router-link>
          <v-btn icon>
            <v-app-bar-nav-icon color="#7030A0"></v-app-bar-nav-icon>
          </v-btn>
        </v-toolbar>
      </v-card>
    </div>
    <v-main class="main">
      <router-view />
    </v-main>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
@font-face {
  font-family: 'Rubik';
  src: local('Rubik'),
    url(./fonts/rubik//Rubik-VariableFont_wght.ttf) format('truetype');
}

#app {
  font-family: 'Rubik';
  background-color: #f1f2f6;
  height: 100vh;
}

#nav {
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  position: sticky;
  z-index: 300;
}

.main {
  padding: 16px;
}

a {
  color: #52575d;
  /* text-transform: none !important; */
  text-decoration: none;
  font-size: 12px;
  margin-right: 5px;
  font-weight: 600;
  cursor: pointer;
}
</style>
