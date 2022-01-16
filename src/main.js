import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faListUl, faStar as fasStar,faDog } from '@fortawesome/free-solid-svg-icons';
import {
  faStar,
  faSquare,
  faCheckSquare,
  faTrashAlt,

} from '@fortawesome/free-regular-svg-icons';

library.add(faListUl, fasStar,faDog);
library.add(faStar, faSquare, faTrashAlt, faCheckSquare);

createApp(App).component('fa', FontAwesomeIcon).mount('#app');
