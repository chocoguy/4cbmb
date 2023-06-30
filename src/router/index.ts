import { createRouter, createWebHistory} from 'vue-router'
//What even is RouteRecordRaw?
import Home from '../Pages/Home.vue'
import Anime from '../Pages/Anime.vue'
import AnimeThread from '../Pages/AnimeThread.vue'
import Auto from '../Pages/Auto.vue'
import AutoThread from '../Pages/AutoThread.vue'
import Paranormal from '../Pages/Paranormal.vue'
import ParanormalThread from '../Pages/ParanormalThread.vue'
import Notfound from '../Pages/Notfound.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/a/thread/:id",
    name: "AnimeThread",
    props: true,
    component: AnimeThread
  },
  {
    path: "/a/:page",
    name: "Anime",
    props: true,
    component: Anime
  },
  {
    path: "/o/thread/:id",
    name: "AutoThread",
    props: true,
    component: AutoThread
  },
  {
    path: "/o/:page",
    name: "Auto",
    props: true,
    component: Auto
  },
  {
    path: "/x/thread/:id",
    name: "ParanormalThread",
    props: true,
    component: ParanormalThread
  },
  {
    path: "/x/:page",
    name: "Paranormal",
    props: true,
    component: Paranormal
  },
  {
    //implement later
    path: "/bleh",
    name: "Notfound",
    component: Notfound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
