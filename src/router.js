

import Home from './views/Home.vue'
import About from './views/About.vue'



const  routes= [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]

  export default routes
