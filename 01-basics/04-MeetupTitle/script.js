import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}


const MeetupTitle = {
  data(){
    return{
      radioCheck: '',
      title: ''
    }
  },

  watch: {
    radioCheck: {
      immediate: true,
      handler() {
        this.resultTitle();
      }
    }
  },

  methods: {
    resultTitle: function() {
      fetchMeetupById(this.radioCheck).then(response => this.title = response.title);
      // console.log(this.title)
      return this.title;
    }
  }
}

const app =createApp(MeetupTitle);
const vm = app.mount('#app');

