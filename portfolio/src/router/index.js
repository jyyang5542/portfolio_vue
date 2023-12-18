import { createRouter, createWebHistory } from 'vue-router';

import MyHome from '../views/Home';
import MyAbout from '../views/About';
import MyPortfolio from '../views/Portfolio';
import MyContact from '../views/Contact';
import MyStudy from '../views/Study';
import NotFound from '../views/404';

// 라우터 설계
const routes = [
  { path: '/', name: 'Home', component: MyHome },
  { path: '/about', name: 'About', component: MyAbout },
  { path: '/Portfolio', name: 'Portfolio', component: MyPortfolio },
  { path: '/Contact', name: 'Contact', component: MyContact },
  { path: '/Study', name: 'Study', component: MyStudy },
  { path: '/404', name: 'NotFound', component: NotFound },
  { path: '/:pathMatch(.*)*', redirect: '/404' },
];

// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 라우터 추출 (main.js에서 import)
export { router };
