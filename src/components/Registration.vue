<template>
  <div id="register">
    <v-card class="container">
      <div class="form-container">
        <div class="social-container">
          <span class="use-social">Sign in with</span>
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
        <span class="use-email-to-register"
          >Or use your email for registration</span
        >

        <v-form v-on:submit.prevent="submitForm">
          <v-row dense>
            <v-col cols="12" sm="6" md="6">
              <input
                v-model.trim= "$v.firstName.$model" :class= "{'is-invalid': validationStatus($v.firstName)}"
                type="text"
                placeholder="First Name" />
            <div v-if= "!$v.firstName.required" class="invalid-feedback">First Name is required</div>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <input
                 v-model.trim= "$v.lastName.$model" :class= "{'is-invalid': validationStatus($v.lastName)}"
                type="text"
                placeholder="Last Name"
                required
              />
              <div v-if= "!$v.lastName.required" class="invalid-feedback">Last Name is required</div>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <input
                 v-model.trim= "$v.email.$model" :class= "{'is-invalid': validationStatus($v.email)}"
                type="email"
                placeholder="Email Address"
                required
              />
              <div v-if= "!$v.email.required" class="invalid-feedback">Email is required</div>
              <div v-if= "!$v.email.email" class="invalid-feedback">Email is not valid</div>
            </v-col>
              <v-col cols="12" sm="6" md="6">
              <input
                 v-model.trim= "$v.verifyEmail.$model" :class= "{'is-invalid': validationStatus($v.verifyEmail)}"
                type="email"
                placeholder="Verfiy Email Address"
                required
              />
              <div v-if= "!$v.verifyEmail.required" class="invalid-feedback">Verfiy Email is required</div>
              <div v-if= "!$v.verifyEmail.email" class="invalid-feedback">Verfiy Email is not valid</div>
            </v-col>
            <v-col cols="12" sm="4" md="4" class="code">
              <select id="country"  v-model.trim= "$v.selected.$model" :class= "{'is-invalid': validationStatus($v.selected)}" name="country">
                <option data-country-code="AU" value="61"
                  >Australia (+61)</option
                >
                <option data-country-code="PH" value="63" selected
                  >Philippine (+63)</option
                >
                <option data-country-code="SG" value="65"
                  >Singapore (+65)</option
                >
                <option data-country-code="US" value="1">USA (+1)</option>
              </select>
              <div v-if= "!$v.selected.required" class="invalid-feedback">Country code is required</div>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <input
                 v-model.trim= "$v.mobile.$model" :class= "{'is-invalid': validationStatus($v.mobile)}"
                type="text"
                placeholder="Mobile Number"
                required
              />
                <div v-if= "!$v.mobile.required" class="invalid-feedback">Mobile number is required</div>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <input
                 v-model.trim= "$v.password.$model" :class= "{'is-invalid': validationStatus($v.password)}"
                type="password"
                placeholder="Password"
                required
              />
                 <div v-if= "!$v.password.required" class="invalid-feedback">Password is required</div>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <input
                   v-model.trim= "$v.verifyPassword.$model" :class= "{'is-invalid': validationStatus($v.verifyPassword)}"
               type="password" placeholder="Verify Password" required />
                <div v-if= "!$v.verifyPassword.required" class="invalid-feedback">Password Confiramtion is required</div>
            </v-col>
            <div class="check">
              <div class="checkbox">
                <input
                  id="privacypolicy"
                     v-model.trim= "$v.checked.$model" :class= "{'is-invalid': validationStatus($v.checked)}"
                  type="checkbox"
                  name="privacypolicyCheck"
                  value="privacypolicyCheck"
                />
                <label id="privacypolicy" for="privacypolicy">
                  By creating an account you agree to
                  <a href="#">Aicquire's terms of service.</a>
                  <a href="#">Cookie Policy</a> and
                  <a href="#">Privacy Policy</a>
                </label>
              </div>
                 <div v-if= "!$v.checked.required" class="invalid-feedback">Please Checked the box</div>
            </div>
          </v-row>

          <button type="submit" class="btn btn-primary">Sign up</button>
        </v-form>

        <v-footer absolute class="footer">
          <v-col class="text-center" cols="12">
            <span class="new-to-aicquire">Already have an account?</span>
            <span class="join-now">
              <router-link to="/login">
                <a class="signinhere">Sign in here</a>
              </router-link>
            </span>
          </v-col>
        </v-footer>
      </div>
    </v-card>
  </div>
</template>

<script>
var bcrypt = require('bcryptjs');
import { required, email } from 'vuelidate/lib/validators'
export default {
  
  data() {

    return {
      firstName: '',
      lastName: '',
      email: '',
      verifyEmail: '',
      selected: '',
      mobile: '',
      password: '',
      verifyPassword: '',
      checked: ''
    };
  },
  validations:{
      firstName: {required},
      lastName: {required},
      email: {required, email},
      verifyEmail: {required, email},
      selected: {required},
      mobile: {required},
      password: {required},
      verifyPassword: {required},
      checked: {required}
  },
  methods: {


    validationStatus(validation){
      return typeof validation != "undefined" ? validation.$error : false;
    },

     async submitForm() {
            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  const hashedVerifyPassword = await bcrypt.hash(this.verifyPassword, salt);
     let userData = {

          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          verifyEmail: this.verifyEmail,
          mobile: this.selected+this.mobile,
          password: hashedPassword,
          verifyPassword: hashedVerifyPassword,
   
     };
     console.log(userData);
      //  const salt = await bcrypt.genSalt(10);
      // const hashedPassword = await bcrypt.hash(this.password, salt);
      if(hashedPassword === hashedVerifyPassword ){
      this.$http
        .post('http://localhost:3000/data', {
          userData
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
      }
      else
      {
        console.log("password did not match")
      return;
      }
    }
  }
    
    
  
};
</script>

<style scoped>
#register {
  height: 100mv;
}
.container {
  display: flex;
  padding: 0;
  font-family: 'Rubik';
  font-size: 12px;
  margin-top: 1%;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 55%;
  max-width: 100%;
  height: 550px;
  background-image: url('../assets/images/bldg2.png');
  background-size: cover;
}

.use-email-to-register {
  font-size: 15px;
  padding: 0;
  color: #52575d;
}

.form-container {
  margin-left: 44%;
  flex-direction: column;
  background: none;
  width: 50%;
  max-height: 600px;
}

form {
  padding: 1.5em 0 1em 0;
}

.form-container code {
  margin-left: 20px;
}

.form-container input[type='text'],
.form-container input[type='email'],
.form-container input[type='password'],
.form-container select {
  background: #f1f2f6;
  color: #797a7e;
  box-shadow: 0 2px 4px rgba(100, 100, 100, 0.15),
    0 5px 5px rgba(117, 117, 117, 0.15);
  padding: 6px 8px;
  margin: 3px 0;
  width: 100%;
  border-radius: 3px;
  height: 30px;
}

.code {
  margin-left: 16%;
}

.check {
  display: flex;
  margin: 1em 0 1em 0;
  justify-content: space-between;
}

#privacypolicy {
  padding-left: 0.5em;
  color: #797a7e;
}

.form-container a {
  color: #075a15;
  font-weight: bold;
  white-space: normal;
}

label a {
  text-decoration: underline;
}

button {
  border-radius: 5px 5px 50px 5px;
  border: 1px solid #7030a0;
  background: #7030a0;
  color: white;
  font-weight: bold;
  padding: 8px 40px;
  margin-top: 20px;
  letter-spacing: 1px;
}

button:focus {
  outline: none;
}

.use-social {
  padding: 0;
  margin-right: 10px;
  color: #797a7e;
}
.social-container {
  display: flex;
  width: 350px;
  max-width: 100%;
  max-height: 100px;
  padding: 2em 0 2em 0;
  margin-bottom: 1em;
  border-bottom: 1px solid rgb(212, 212, 212);
}

.social-container > .social {
  height: 30px;
  width: 30px;
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
