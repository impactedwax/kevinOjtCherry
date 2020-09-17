<template>
  <div class="main-container">
    <Sidebar />
    <div class="dashboard">
      <div class="content">
        <div class="title">Dashboard</div>
        <div class="welcome-banner-container">
          <div class="welcome-banner">
            <div class="line1">Welcome to Aicquire, Username</div>
            <div class="line2">Happy job hunting!</div>
          </div>
        </div>
        <div class="search-container">
          <div class="search-header">Search for your next possible job</div>
          <div class="search-inputs">
            <div class="search-here-container">
              <v-icon right small color="#bbbbbb" class="search-icon">mdi-magnify</v-icon>
              <input type="text" placeholder="Search here" />
            </div>
            <div class="location">
              <input type="text" value="All locations" />
            </div>
            <div class="search-button">
              <button class="search-btn">Search</button>
            </div>
          </div>
        </div>
        <div class="recommended-jobs-banner">
          <p>Recommended jobs based on your profile</p>
          <a href="#">View more</a>
        </div>
        <div class="recommended-jobs-container">
          <div class="recommended-jobs-wrapper">
            <div class="job-container">
              <span class="job-title">Job Title</span>
              <span class="name">Company name</span>
              <div class="job-details">
                <ul id="benefits">
                  <li>Excellent Benefits</li>
                  <li>Rewards for top performers</li>
                  <li>Enhance Learning Opportunity</li>
                </ul>
              </div>
              <span id="job-type">Job type :</span>
              <span id="job-salary">Salary :</span>
              <a href="#">3 persons have applied</a>
              <div class="lower-section">
                <div class="pin-icon">
                  <v-img :src="require('@/assets/images/push-pin.png')" height="14px" width="14px"></v-img>
                </div>
                <div class="location-posted">
                  <span id="job-location">Cebu city, ph</span>
                  <span id="date-posted">4 days ago</span>
                </div>
              </div>
            </div>
            <div class="job-container">
              <span class="job-title">Job Title</span>
              <span class="name">Company name</span>
              <div class="job-details">
                <ul>
                  <ul id="benefits">
                    <li>Excellent Benefits</li>
                    <li>Rewards for top performers</li>
                    <li>Enhance Learning Opportunity</li>
                  </ul>
                </ul>
              </div>
              <span id="job-type">Job type :</span>
              <span id="job-salary">Salary :</span>
              <a href="#">3 persons have applied</a>
              <div class="lower-section">
                <div class="pin-icon">
                  <v-img :src="require('@/assets/images/push-pin.png')" height="14px" width="14px"></v-img>
                </div>
                <div class="location-posted">
                  <span id="job-location">Cebu city, ph</span>
                  <span id="date-posted">4 days ago</span>
                </div>
              </div>
            </div>
            <div class="job-container">
              <span class="job-title">Job Title</span>
              <span class="name">Company name</span>
              <div class="job-details">
                <ul id="benefits">
                  <li>Excellent Benefits</li>
                  <li>Rewards for top performers</li>
                  <li>Enhance Learning Opportunity</li>
                </ul>
              </div>
              <span id="job-type">Job type :</span>
              <span id="job-salary">Salary :</span>
              <a href="#">3 persons have applied</a>
              <div class="lower-section">
                <div class="pin-icon">
                  <v-img :src="require('@/assets/images/push-pin.png')" height="14px" width="14px"></v-img>
                </div>
                <div class="location-posted">
                  <span id="job-location">Cebu city, ph</span>
                  <span id="date-posted">4 days ago</span>
                </div>
              </div>
            </div>
            <div class="job-container">
              <span class="job-title">Job Title</span>
              <span class="name">Company name</span>
              <div class="job-details">
                <ul id="benefits">
                  <li>Excellent Benefits</li>
                  <li>Rewards for top performers</li>
                  <li>Enhance Learning Opportunity</li>
                </ul>
              </div>
              <span id="job-type">Job type :</span>
              <span id="job-salary">Salary :</span>
              <a href="#">3 persons have applied</a>
              <div class="lower-section">
                <div class="pin-icon">
                  <v-img :src="require('@/assets/images/push-pin.png')" height="14px" width="14px"></v-img>
                </div>
                <div class="location-posted">
                  <span id="job-location">Cebu city, ph</span>
                  <span id="date-posted">4 days ago</span>
                </div>
              </div>
            </div>
            <div class="job-container">
              <span class="job-title">Job Title</span>
              <span class="name">Company name</span>
              <div class="job-details">
                <ul id="benefits">
                  <li>Excellent Benefits</li>
                  <li>Rewards for top performers</li>
                  <li>Enhance Learning Opportunity</li>
                </ul>
              </div>
              <span id="job-type">Job type :</span>
              <span id="job-salary">Salary :</span>
              <a href="#">3 persons have applied</a>
              <div class="lower-section">
                <div class="pin-icon">
                  <v-img :src="require('@/assets/images/push-pin.png')" height="14px" width="14px"></v-img>
                </div>
                <div class="location-posted">
                  <span id="job-location">Cebu city, ph</span>
                  <span id="date-posted">4 days ago</span>
                </div>
              </div>
            </div>
            <div class="job-container">
              <span class="job-title">Job Title</span>
              <span class="name">Company name</span>
              <div class="job-details">
                <ul id="benefits">
                  <li>Excellent Benefits</li>
                  <li>Rewards for top performers</li>
                  <li>Enhance Learning Opportunity</li>
                </ul>
              </div>
              <span id="job-type">Job type :</span>
              <span id="job-salary">Salary :</span>
              <a href="#">3 persons have applied</a>
              <div class="lower-section">
                <div class="pin-icon">
                  <v-img :src="require('@/assets/images/push-pin.png')" height="14px" width="14px"></v-img>
                </div>
                <div class="location-posted">
                  <span id="job-location">Cebu city, ph</span>
                  <span id="date-posted">4 days ago</span>
                </div>
              </div>
            </div>
            <div class="job-container">
              <span class="job-title">Job Title</span>
              <span class="name">Company name</span>
              <div class="job-details">
                <ul id="benefits">
                  <li>Excellent Benefits</li>
                  <li>Rewards for top performers</li>
                  <li>Enhance Learning Opportunity</li>
                </ul>
              </div>
              <span id="job-type">Job type :</span>
              <span id="job-salary">Salary :</span>
              <a href="#">3 persons have applied</a>
              <div class="lower-section">
                <div class="pin-icon">
                  <v-img :src="require('@/assets/images/push-pin.png')" height="14px" width="14px"></v-img>
                </div>
                <div class="location-posted">
                  <span id="job-location">Cebu city, ph</span>
                  <span id="date-posted">4 days ago</span>
                </div>
              </div>
            </div>
            <div class="job-container">
              <span class="job-title">Job Title</span>
              <span class="name">Company name</span>
              <div class="job-details">
                <ul id="benefits">
                  <li>Excellent Benefits</li>
                  <li>Rewards for top performers</li>
                  <li>Enhance Learning Opportunity</li>
                </ul>
              </div>
              <span id="job-type">Job type :</span>
              <span id="job-salary">Salary :</span>
              <a href="#">3 persons have applied</a>
              <div class="lower-section">
                <div class="pin-icon">
                  <v-img :src="require('@/assets/images/push-pin.png')" height="14px" width="14px"></v-img>
                </div>
                <div class="location-posted">
                  <span id="job-location">Cebu city, ph</span>
                  <span id="date-posted">4 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-panel">
        <div class="recent-activities">
          <div class="headline">Recent activities</div>
          <div class="btn">
            <div>
              <v-img
                class="btn-img"
                :src="require('@/assets/images/push-pin.png')"
                height="12px"
                width="12px"
              ></v-img>
            </div>
            <div>Pinned Jobs</div>
          </div>
          <div class="btn">
            <div>
              <v-img
                class="btn-img"
                :src="require('@/assets/images/job-search.png')"
                height="12px"
                width="12px"
              ></v-img>
            </div>
            <div>Job Applications</div>
          </div>
          <div class="btn">
            <div>
              <v-img
                class="btn-img"
                :src="require('@/assets/images/exam.png')"
                height="12px"
                width="12px"
              ></v-img>
            </div>
            <div>Job Exams</div>
          </div>
          <div class="btn">
            <div>
              <v-img
                class="btn-img"
                :src="require('@/assets/images/connect.png')"
                height="10px"
                width="10px"
              ></v-img>
            </div>
            <div>Followed Companies</div>
          </div>
        </div>
        <div class="popular-companies-container">
          <div class="headline">Popular Companies</div>
          <div class="popular-company-wrapper">
            <div class="popular-company-box">
              <v-img class="company-logo" :src="require('@/assets/images/payruler-small.png')"></v-img>
              <div class="company-name">Payruler</div>
              <div class="job-opennings">
                <label>Job Opennings</label>
                <a href="#">12</a>
              </div>
            </div>

            <div class="popular-company-box">
              <v-img class="company-logo" :src="require('@/assets/images/adidas-small.png')"></v-img>
              <div class="company-name">Adidas</div>
              <div class="job-opennings">
                <label>Job Opennings</label>
                <a href="#">12</a>
              </div>
            </div>

            <div class="popular-company-box">
              <v-img class="company-logo" :src="require('@/assets/images/payruler-small.png')"></v-img>
              <div class="company-name">Payruler</div>
              <div class="job-opennings">
                <label>Job Opennings</label>
                <a href="#">12</a>
              </div>
            </div>

            <div class="popular-company-box">
              <v-img class="company-logo" :src="require('@/assets/images/hp-small.png')"></v-img>
              <div class="company-name">HP</div>
              <div class="job-opennings">
                <label>Job Opennings</label>
                <a href="#">12</a>
              </div>
            </div>
          </div>
          <div class="view-more">
            <router-link to="/">
              <a>View more</a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar';

export default {
  name: 'Dashboard',
  components: {
    Sidebar
  }
};
</script>

<style scoped>
.main-container {
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: #e0e0e0;
}
.main-container .dashboard {
  display: flex;
  grid-template-columns: 1fr 5fr;
  width: 100%;
  height: 100%;
  margin-top: 5px;
  padding-right: 10px;
}

.main-container .dashboard .content {
  display: flex;
  flex-direction: column;
  margin-left: 17%;
  width: 68%;
}

.main-container .dashboard .content .title,
.recommended-jobs-banner {
  width: 100%;
  background: #ffffff;
  color: #7030a0;
  font-size: 14px;
  font-weight: 500;
  padding: 5px;
  border-radius: 3px;
  margin-bottom: 10px;
}

.welcome-banner-container {
  background-color: #eef0ef;
  border: 0.5px solid #bbbbbb;
  width: 100%;
  height: 18%;
  background-image: url('../assets/images/banner.png');
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 10px;
}

.welcome-banner {
  display: flex;
  flex-direction: column;
  width: 50%;
  align-content: center;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: #538530;
  height: 100%;
}

.line1 {
  font-size: 18px;
}

.line2 {
  font-size: 14px;
  font-style: italic;
}

.search-container {
  font-size: 14px;
  background: #ffffff;
  padding: 5px;
  box-shadow: 0 2px 2px rgba(100, 100, 100, 0.15),
    0 3px 3px rgba(117, 117, 117, 0.15);
  color: #538530;
  width: 100%;
  height: 10%;
  border-radius: 5px;
  margin-bottom: 10px;
}

.search-container .search-header {
  font-weight: 500;
  font-size: small;
}

.search-inputs {
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
}

.search-here-container {
  display: flex;
  border: 0.5px solid #bbbbbb;
  background: #f1f2f6;
  border-radius: 3px;
  height: 20px;
  width: 45%;
  border-radius: 3px;
  margin-bottom: 10px;
}

.location {
  margin-left: 1%;
  height: 20px;
  border: 0.5px solid #bbbbbb;
  background: #f1f2f6;
  border-radius: 3px;
  color: #bbbbbb;
  font-weight: 300;
  font-style: italic;
  width: 30%;
  border-radius: 3px;
}

.location input {
  background: transparent;
  padding-left: 10px;
  padding-top: 2px;
  width: 180px;
}

input:focus,
.location input:focus,
.search-btn:focus {
  outline: none;
}

::placeholder {
  color: #bbbbbb;
  font-style: italic;
  font-weight: normal;
  text-align: justify;
}

.search-btn {
  color: #ffffff;
  background: #538530;
  border-radius: 3px;
  margin-left: 20px;
  width: 120px;
  text-align: center;
  height: 20px;
}

.search-btn:hover {
  opacity: 0.8;
}

.recommended-jobs-banner {
  display: flex;
  justify-content: space-between;
  background: #538530;
  color: #ffffff;
  margin-bottom: 10px;
}

.recommended-jobs-banner a {
  color: #ffffff;
}

.recommended-jobs-banner a:hover {
  color: #7030a0;
  cursor: pointer;
}

.recommended-jobs-container {
  width: 100%;
  height: 300px;
}

.recommended-jobs-container .recommended-jobs-wrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
  height: 100%;
}
.recommended-jobs-container .recommended-jobs-wrapper .job-container {
  display: flex;
  flex-direction: column;
  background: #f1f2f6;
  width: 180px;
  height: 145px;
  border: 1px solid #9c9c9c;
  border-radius: 5px;
  padding: 8px;
  color: #555557;
}

.job-container .job-title {
  color: #3b6d18;
  font-size: small;
  font-weight: 500;
}

.job-container .name {
  font-size: x-small;
  font-style: italic;
  margin-bottom: 5px;
}

.job-details {
  display: flex;
  flex-direction: column;
  padding: 0 0 0 8px;
  font-size: xx-small;
}

.job-container .job-details ul li {
  list-style-position: inside;
}

.job-container a {
  font-size: x-small;
  color: #7030a0;
}

.job-container #job-type,
.job-container #job-salary {
  font-size: xx-small;
}

.job-container .lower-section {
  display: flex;
  width: 100%;
  font-size: x-small;
  color: #555557;
  margin-top: 10px;
}

.job-container .lower-section .pin-icon {
  width: 50%;
  padding-top: 8px;
}

.job-container .lower-section .location-posted {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-basis: 50%;
}

.recommended-jobs-container .recommended-jobs-wrapper .job-container:hover {
  background-color: #91db8e;
  box-shadow: 3px 3px 3px rgba(19, 19, 19, 0.15),
    3px 3px 3px rgba(24, 23, 23, 0.15);
  cursor: pointer;
}

.right-panel {
  margin-left: 1%;
  width: 15%;
  height: 100%;
}

.recent-activities {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 25%;
  background: #ffffff;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 3px;
}

.recent-activities .btn {
  display: flex;
  align-content: center;
  align-items: center;
  height: 30px;
  border: 1px solid #bbbbbb;
  background: #f1f2f6;
  font-size: x-small;
  margin-top: 5px;
  border-radius: 5px;
}

.recent-activities .btn:hover {
  background: #7030a0;
  opacity: 0.8;
  color: #fff;
  cursor: pointer;
}

.headline {
  margin: 0;
  color: #538530;
  font-size: 12px;
  font-weight: 500;
}

.btn-img {
  margin: 0 5px 0px 5px;
}

.popular-companies-container {
  width: 100%;
  height: 75%;
  background: #ffffff;
  border-radius: 5px;
  padding: 5px;
}

.popular-companies-container .popular-company-wrapper {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  width: 100%;
  color: #555557;
}

.popular-companies-container .popular-company-box {
  width: 80%;
  height: 70px;
  border: 1px solid #bbbbbb;
  border-radius: 3px;
  margin-top: 10px;
  background: linear-gradient(to bottom, #ffffff 50%, #9c9e9f 100%);
}

.popular-companies-container .popular-company-box .company-logo {
  height: 40%;
  width: 200%;
}

.popular-companies-container .popular-company-box .company-name {
  font-size: x-small;
  text-align: center;
  font-weight: 500;
  margin-top: 10px;
}

.popular-companies-container .popular-company-box .job-opennings {
  font-size: xx-small;
  display: flex;
  justify-content: space-between;
  padding: 0 10px 3px 10px;
}

.popular-companies-container .popular-company-box .job-opennings a {
  color: #7030a0;
  font-weight: 500;
}

.popular-companies-container .view-more {
  margin-top: 8px;
  text-align: center;
  font-size: small;
  height: 15px;
  font-weight: 500;
}

@media (max-width: 700px) {
  .search-inputs {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
</style>
