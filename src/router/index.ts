import { createRouter, createWebHistory} from 'vue-router'
//What even is RouteRecordRaw?
import Home from '../Pages/Home.vue'
import Anime from '../Pages/Anime.vue'
import AnimeThread from '../Pages/AnimeThread.vue'
import Auto from '../Pages/Auto.vue'
import Paranormal from '../Pages/Paranormal.vue'
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
    path: "/o",
    name: "Auto",
    component: Auto
  },
  {
    path: "/x",
    name: "Paranormal",
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
