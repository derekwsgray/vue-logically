import { createApp } from 'vue';
import Dev from './serve.vue';
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "Vue.use" call
import VueLogically from '@/entry.esm';


Vue.config.productionTip = false;

const app = createApp(Dev);
app.use(VueLogically);
app.mount('#app');
