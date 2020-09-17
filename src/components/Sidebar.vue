<template>
  <div class="sidebar">
    <div class="search">
      <v-form>
        <input type="text" placeholder="Search" />
        <button class="search-btn">
          <v-icon left small color="#ffffff" class="search-icon" tag="button">mdi-magnify</v-icon>
        </button>
      </v-form>
    </div>
    <div class="menu-items">
      <router-link to="/dashboard" active-class="active" tag="div">
        <div class="menu-item">
          <div>
            <v-img class="btn-img" :src="require('@/assets/images/dashboard.png')"></v-img>
          </div>
          <div>Dashboard</div>
        </div>
      </router-link>
      <router-link to="/" active-class="active" tag="div">
        <div class="menu-item">
          <div>
            <v-img class="btn-img" :src="require('@/assets/images/browse.png')"></v-img>
          </div>
          <div>Browse</div>
        </div>
      </router-link>
      <router-link to="/" active-class="active" tag="div">
        <div class="menu-item">
          <div>
            <v-img class="btn-img" :src="require('@/assets/images/list.png')"></v-img>
          </div>
          <div>Application Status</div>
        </div>
      </router-link>
      <router-link to="/" active-class="active" tag="div">
        <div class="menu-item">
          <div>
            <v-img class="btn-img" :src="require('@/assets/images/settings.png')"></v-img>
          </div>
          <div>Settings</div>
        </div>
      </router-link>
      <router-link to="/" active-class="active" tag="div">
        <div class="menu-item">
          <div>
            <v-img class="btn-img" :src="require('@/assets/images/help.png')"></v-img>
          </div>
          <div>Help</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
};
</script>

<style scoped>
.sidebar {
  background: #7030a0;
  height: 100%;
  color: #ffffff;
  position: fixed;
  width: 16%;
}

.v-form {
  display: flex;
}
.search .v-form input {
  font-family: 'Rubik';
  background: #9d73bf;
  padding: 6px 8px;
  margin: 6px;
  width: 75%;
  border-radius: 3px;
  height: 20px;
}
::placeholder {
  color: #ffffff;
  font-size: 12px;
  font-style: italic;
}
.search-btn {
  padding-left: 3px;
  background-color: #8d3cc9;
  border-radius: 3px;
  height: 20px;
  width: 25px;
  margin: 6px 0 0 0;
}

.search-btn .search-icon:focus {
  outline: none;
}

.search .v-form input:focus {
  outline: 1px solid #fff;
}

.search .v-form .search-icon {
  padding-left: 2px;
}

.sidebar .menu-items {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  font-size: 13px;
  width: 100%;
}
.sidebar .menu-items .menu-item {
  display: flex;
  margin-top: 2px;
  background-color: #8e3dca;
  width: 15.7vw;
  height: 40px;
  padding-top: 12px;
  color: #fff;
}
.menu-items .menu-item:hover {
  background-color: #9d73bf;
}

.menu-items .menu-item .v-icon {
  margin-left: 5px;
}

.btn-img {
  margin-left: 7px;
  margin-right: 10px;
  width: 14px;
  height: 14px;
}
</style>
