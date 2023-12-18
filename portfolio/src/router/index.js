import { createRouter, createWebHistory } from 'vue-router';

import DefaultLayout from '../views/DefaultLayout';
import FirstView from '../views/FirstView';
import SecondView from '../views/SecondView';
import ThirdView from '../views/ThirdView';

// 라우터 설계
const routes = [
  { path: '/home', name: '홈', component: DefaultLayout },
  { path: '/1', name: '1', component: FirstView },
  { path: '/2', name: '2', component: SecondView },
  { path: '/3', name: '3', component: ThirdView },
];

// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 라우터 추출 (main.js에서 import)
export { router };
