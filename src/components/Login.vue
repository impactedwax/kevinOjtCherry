<template>
  <v-card class="container">
    <div class="form-container">
      <div class="aicquire-logo">
        <v-img
          class="mr-3"
          :src="require('@/assets/images/aicquire.png')"
          height="40px"
          width="150px"
        ></v-img>
      </div>
      <p class="tag-line">Job seeking made easier</p>
     <v-form @submit.prevent="login">
        <label>Email</label>
        <br />
        <input v-model= "email" type="email" required />
        <br />
        <label>Password</label>
        <br />
        <input v-model= "password" type="password" required />
        <div class="check">
          <div class="checkbox">
            <input
              v-model= "checked"
              id="rememberCheck"
              type="checkbox"
              name="rememberCheck"
              value="rememberCheck"
            />
            <label id="remember" for="rememberMe">Remember me</label>
          </div>
          <a href="#">Forgot your password?</a>
        </div>
        <button type="submit">Sign In</button>
      </v-form>

      <div class="social-container">
        <span>Sign in with</span>
        <a href="#" class="social">
          <v-img :src="require('@/assets/images/facebook.png')"></v-img>
        </a>
        <a href="#" class="social">
          <v-img :src="require('@/assets/images/twitter.png')"></v-img>
        </a>
        <a href="#" class="social">
          <v-img :src="require('@/assets/images/instagram.png')"></v-img>
        </a>
        <a href="#" class="social">
          <v-img :src="require('@/assets/images/linkedin.png')"></v-img>
        </a>
      </div>
      <v-footer absolute class="footer">
        <v-col class="text-center" cols="12">
          <span class="new-to-aicquire">New to aicquire?</span>
          <span class="join-now">
            <router-link to="/register">
              <a>Join now!</a>
            </router-link>
          </span>
        </v-col>
      </v-footer>
    </div>
  </v-card>
</template>

<script>
var bcrypt = require('bcryptjs');
export default {
  name: 'Login',
  data(){
      return{
        email: '',
        password: '',
        checked: '',
      };
  },methods:{
   async login(){
    const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
      this.$http.post('user/login',{
        email: this.email,
        password: hashedPassword,
      })
      .then(response =>{
       console.log(response);
      })
      .catch(error =>{
        console.log(error);
      });
    }
  }
};
</script>

<style scoped>
.container {
  font-family: 'Rubik';
  font-size: 12px;
  display: flex;
  margin-top: 2%;
  padding: 30px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  width: 60%;
  max-width: 100%;
  height: 450px;
  background-image: url('../assets/images/bldg.png');
  background-size: cover;
}

.tag-line {
  font-size: 18px;
  padding-bottom: 2em;
  color: #52575d;
}

.form-container {
  flex-direction: column;
  background: none;
  width: 40%;
  max-height: 450px;
}

.form-container input[type='email'],
.form-container input[type='password'] {
  background: #f1f2f6;
  box-shadow: 0 2px 4px rgba(100, 100, 100, 0.15),
    0 5px 5px rgba(117, 117, 117, 0.15);
  padding: 6px 8px;
  margin: 8px 0;
  width: 100%;
  border-radius: 3px;
  height: 35px;
}

label {
  color: #797a7e;
}

.aicquire-logo {
  padding: 0;
}

.check {
  display: flex;
  margin-top: 1em;
  margin-bottom: 1em;
  justify-content: space-between;
}

#remember {
  padding-left: 0.5em;
}

.form-container a {
  color: #797a7e;
  text-decoration: none;
}

button {
  border-radius: 5px 5px 5px 50px;
  border: 1px solid #7030a0;
  background: #7030a0;
  color: white;
  font-weight: bold;
  padding: 8px 40px;
  margin-top: 10px;
  letter-spacing: 1px;
  float: right;
}

.social-container {
  display: flex;
  width: 300px;
  max-width: 100%;
  max-height: 100px;
  padding: 2.5em 0 1.5em 0;
  color: #797a7e;
}

.social-container > .social {
  height: 25px;
  width: 25px;
  margin: 5px;
}

.footer {
  height: 40px;
  padding: 0.5em;
  text-align: center;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.new-to-aicquire {
  color: #797a7e;
  font-size: 12px;
}

.join-now a {
  font-size: 18px;
  color: green;
  font-weight: bolder;
  padding: 5px;
  margin-left: 5px;
  background-color: #f1f2f6;
  cursor: pointer;
}
</style>
