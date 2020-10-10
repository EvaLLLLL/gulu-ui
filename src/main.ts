import {createApp} from 'vue';
import './lib/gulu.scss';
import './index.scss';
// @ts-ignore
import App from './App.vue';
import {router} from './router';
import 'github-markdown-css';
// @ts-ignore
import Markdown from './components/Markdown.vue';

const app = createApp(App);
app.use(router);
app.mount('#app');
app.component('Markdown', Markdown);
