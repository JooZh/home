import Vue from 'vue'
import Router from 'vue-router'
import Home from 'src/components/Center/Home'
import About from 'src/components/Center/About'
import Services from 'src/components/Center/Services'
import Subscribe from 'src/components/Center/Subscribe'
import Contact from 'src/components/Center/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/services',
      component: Services
    },
    {
      path: '/subscribe',
      component: Subscribe
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
})
