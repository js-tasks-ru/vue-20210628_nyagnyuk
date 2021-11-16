import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

// function fetchMeetupById(meetupId) {
//   return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       return response.json().then((error) => {
//         throw error;
//       });
//     }
//   });
// }

const MeetupTitle = {
  data(){
    return{
      radioCheck: '',
      meetups:'',
      meetup:{},
    }
  },

  mounted() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response));
  }
  methods: {
    fetchMeetupById(meetupId) {
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
  },
  watch: {
    radioCheck: {
      immediate: true,
      handler() {
        this.fetchMeetupById();
      }
    },
  }
}

const app =createApp(MeetupTitle);
const vm = app.mount('#app');
// const MeetupTitle = {
//   data(){
//     return{
//       radioCheck: '',
//       meetups:'',
//       meetup:{},
//     }
//   },
//   methods: {
//     async fetchMeetupById(meetupId){
//
//       this.meetup = await fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           return response.json().then((error) => {
//             throw error;
//           });
//         }
//       });
//
//       console.log(this.meetup)
//     },
//   },
//   watch: {
//     radioCheck: {
//       immediate: true,
//       handler() {
//         this.fetchMeetupById();
//       }
//     },
//   }
// }
