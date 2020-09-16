<template>
  <div class="register">
  
    <div class="register-container">
      <v-card>
        <div class="img"></div>
        <div class="register-form">
          <div class="form-header">
            <div class="social-container">
              <span>Sign up with</span>
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
          </div>

          <div class="use-email-to-register">Or use your email for registration</div>

           <v-form  @submit.prevent= "submitForm">
            <v-row dense>
              <v-col cols="12" sm="6" md="6">
                  <v-text-field solo
                    v-model= "firstName"
                    :error-messages= "firstNameErrors"
                    label="First Name"
                    required
                    @input= "$v.firstName.$touch()"
                    @blur= "$v.firstName.$touch()"
                   ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                  <v-text-field solo
                    v-model= "lastName"
                    :error-messages= "lastNameErrors"
                    label="Last Name"
                    required
                    @input= "$v.lastName.$touch()"
                    @blur= "$v.lastName.$touch()"
                   ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                  <v-text-field solo
                    v-model= "email"
                    :error-messages= "emailErrors"
                    label="Email"
                    required
                    @input= "$v.email.$touch()"
                    @blur= "$v.email.$touch()"
                   ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                  <v-text-field solo
                    v-model= "verifyEmail"
                    :error-messages= "verfiyEmailErrors"
                    label="Verify Email"
                    required
                    @input= "$v.verifyEmail.$touch()"
                    @blur= "$v.verifyEmail.$touch()"
                   ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4" class="code">
                <select solo id="country" name="country"
                                        v-model= "selected"
                    :error-messages= "selectErrors"
                    label="Code"
                    required
                    @change= "$v.selected.$touch()"
                    @blur= "$v.selected.$touch()"
                >
                  <option data-country-code="AU" value="61">Australia (+61)</option>
                  <option data-country-code="PH" value="63" selected>Philippines (+63)</option>
                  <option data-country-code="SG" value="65">Singapore (+65)</option>
                  <option data-country-code="US" value="1">USA (+1)</option>
                </select>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                  <v-text-field solo
                    v-model= "mobile"
                    :error-messages= "mobileErrors"
                    label="Mobile Number"
                    required
                    @input= "$v.mobile.$touch()"
                    @blur= "$v.mobile.$touch()"
                   ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                 <v-text-field solo
                    v-model= "password"
                    :error-messages= "passwordErrors"
                    label="Password"
                    type="password"
                    required
                    @input= "$v.password.$touch()"
                    @blur= "$v.password.$touch()"
                  ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                 <v-text-field solo
                    v-model= "verifyPassword"
                    :error-messages= "verifyPasswordErrors"
                    label="Verify Password"
                    type="password"
                    required
                    @input= "$v.verifyPassword.$touch()"
                    @blur= "$v.verifyPassword.$touch()"
                  ></v-text-field>
              </v-col>

              <div class="checkbox">
                <div class="captcha">
                  <v-img :src="require('@/assets/images/captcha.png')"></v-img>
                </div>
                <div class="policy">
                  <input
                    id="privacypolicy"
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
              </div>

              <v-col>
                <button type="submit" class="btn btn-primary">Sign up</button>
              </v-col>
            </v-row>
          </v-form>
        </div>

        <v-footer absolute class="footer">
          <v-col class="text-center" cols="12">
            <span class="new-to-aicquire">Already have an account?</span>
            <span class="go-to-signin">
              <router-link to="/login">
                <a class="signinhere">Sign in here</a>
              </router-link>
            </span>
          </v-col>
        </v-footer>
      </v-card>
    </div>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, email } from 'vuelidate/lib/validators'
var bcrypt = require('bcryptjs');

export default {
    mixins: [validationMixin],
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
  name: 'Registration',
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


    computed: {
            emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')

        return errors
      },
                  verfiyEmailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
          this.email !== this.verifyEmail && errors.push('Email do not match')
        return errors
      },
         firstNameErrors () {
        const errors = []
        if (!this.$v.firstName.$dirty) return errors
        !this.$v.firstName.required && errors.push('First Name is required')
        return errors
      },
         lastNameErrors () {
        const errors = []
        if (!this.$v.lastName.$dirty) return errors
        !this.$v.lastName.required && errors.push('Last Name is required')
        return errors
      },
        mobileErrors () {
        const errors = []
        if (!this.$v.mobile.$dirty) return errors
        !this.$v.mobile.required && errors.push('Mobile Number is required')
        return errors
      },
            passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.required && errors.push('Password is required')
   
        return errors
      },
            verifyPasswordErrors () {
        const errors = []
        if (!this.$v.verifyPassword.$dirty) return errors
        this.password !== this.verifyPassword && errors.push('Password do not match');
        !this.$v.verifyPassword.required && errors.push('Password is required')
      
        return errors
      },
     
          selectErrors () {
        const errors = []
        if (!this.$v.selected.$dirty) return errors
        !this.$v.selected.required && errors.push('Code is required')
        return errors
      },

  },



  methods: {

     async submitForm() {
        this.$v.$touch();
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
       //this.$router.push('/login')
        })
        .catch(error => {
          console.log(error);
          // this.$router.push('/login')
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
.register-container {
  background-color: #eeeeee;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.register-container .v-card {
  font-family: 'Rubik';
  background-color: #ffffff;
  flex-basis: 600px;
  max-width: 620px;
  height: 550px;
  display: flex;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  padding: 0;
  margin-top: 10px;
}

.register-container .v-card .img {
  flex-basis: 35%;
  max-width: 50%;
  padding: 0;
  border-radius: 10px 0 0 10px;
  background-image: url('../assets/images/bldg3.png');
  background-size: cover;
}

.register-container .v-card .register-form {
  font-family: 'Rubik';
  flex-basis: 65%;
  max-width: 65%;
  padding: 0 20px 0 20px;
}

.register-container .v-card .register-form .v-form {
  margin-top: 15px;
}

.register-container .v-card .register-form .form-header {
  font-size: 12px;
  color: #5d5b6a;
  border-bottom: 1px solid #5d5b6a;
}

.register-container .v-card .register-form .form-header .social-container {
  padding-bottom: 5px;
}

.use-email-to-register {
  margin: 10px 10px 0 0;
  color: #52575d;
}

.register-form .v-form input[type='text'],
.register-form .v-form input[type='email'],
.register-form .v-form input[type='password'],
.register-form .v-form select {
  font-family: 'Rubik';
  background: #f1f2f6;
  color: #5d5b6a;
  box-shadow: 0 2px 4px rgba(100, 100, 100, 0.15),
    0 5px 5px rgba(117, 117, 117, 0.15);
  padding: 6px 8px;
  margin: 3px 0;
  width: 100%;
  border-radius: 3px;
  height: 30px;
}

.register-form .v-form input[type='text']:focus,
.register-form .v-form input[type='email']:focus,
.register-form .v-form input[type='password']:focus,
.register-form .v-form select:focus {
  outline: 1px solid #7030a0;
}

.v-form .code {
  margin-left: 61px;
  color: #5d5b6a;
}

.register-form .v-form label {
  font-size: 14px;
  color: #444444;
}

.captcha {
  height: 80px;
  width: 50%;
  padding-top: 10px;
  margin: 0;
}

.checkbox {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.v-form .policy {
  padding-left: 0.5em;
  color: #5d5b6a;
  font-weight: 500;
  padding-top: 20px;
  margin: 0;
  font-size: 14px;
}

.v-form a {
  font-size: 14px;
  color: #075a15;
  font-weight: 500;
  white-space: normal;
}

.v-form label a {
  text-decoration: underline;
}

button {
  border-radius: 5px 5px 50px 5px;
  border: 1px solid #7030a0;
  background: #7030a0;
  color: white;
  font-weight: bold;
  padding: 5px 40px;
  margin-top: 15px;
  letter-spacing: 1px;
}

button:focus {
  outline: none;
}

button:hover {
  opacity: 0.8;
}

.social-container {
  display: flex;
  width: 300px;
  max-width: 100%;
  max-height: 100px;
  padding: 1em 0 1em 0;
  color: #5d5b6a;
}

.social-container .social {
  height: 25px;
  width: 25px;
  margin: 7px;
}

.footer {
  height: 35px;
  padding: 0.5em;
  text-align: center;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.new-to-aicquire {
  color: #5d5b6a;
  font-size: 12px;
}

.go-to-signin a {
  font-size: 18px;
  color: #538530;
  font-weight: bold;
  padding: 5px;
  margin-left: 5px;
  background-color: #f1f2f6;
  cursor: pointer;
}

.go-to-signin a:hover,
.policy a:hover {
  color: #7030a0;
  cursor: pointer;
}

@media (max-width: 700px) {
  .register-container .v-card {
    max-height: 600px;
  }
  .register-container .v-card .img {
    display: none;
  }
  .register-container .v-card .register-form .v-form {
    flex-basis: 100%;
    max-width: 100%;
    padding: 20px;
  }
  .v-form .code {
    margin-left: 0;
  }

  .captcha {
    height: 80px;
    width: 50%;
    padding-top: 10px;
    margin: 0;
  }
}
</style>
