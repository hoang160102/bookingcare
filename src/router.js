import { createRouter, createWebHistory } from 'vue-router' 
import HomePage from './components/pages/HomePage.vue'
import HomeService from './components/pages/HomeService.vue'
import HospitalService from './components/pages/HospitalService.vue'
import SearchPage from './components/pages/SearchPage.vue'
import StayHealthy from './components/pages/StayHealthy.vue'
import TimeSchedule from './components/pages/TimeSchedule.vue'
import SupportPage from './components/pages/SupportPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/dich-vu/tai-nha', component: HomeService },
    { path: '/dich-vu/tai-vien', component: HospitalService },
    { path: '/tim-kiem', component: SearchPage },
    { path: '/dich-vu/song-khoe', component: StayHealthy },
    { path: '/lich-hen', component: TimeSchedule },
    { path: '/ho-tro', component: SupportPage }
  ]
})

export default router