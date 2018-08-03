<template>
  <div id="app" ref="app" :class="className">
    <Background/>
    <Canvas/>
    <Header/>
    <Navigation/>
    <Main>
      <router-view/>
    </Main>
    <Footer/>
  </div>
</template>

<script>
import Background from 'src/components/Background/Background'
import Canvas from 'src/components/Center/Canvas'
import Header from 'src/components/Header/Header'
import Main from 'src/components/Center/Main'
import Footer from 'src/components/Footer/Footer'
import Navigation from 'src/components/Navigation/Navigation'
import Bus from 'src/assets/js/bus.js'
export default {
  name: 'App',
  data () {
    return {
      className: 'home'
    }
  },
  components: {
    Background,
    Canvas,
    Header,
    Main,
    Footer,
    Navigation
  },
  mounted () {
    Bus.$on('changeRouter', (data) => {
      switch (data.index) {
        case 1:
          this.className = 'home'
          break
        case 2:
          this.className = 'subscribe'
          break
        case 3:
          this.className = 'about'
          break
        case 4:
          this.className = 'services'
          break
        case 5:
          this.className = 'contact'
          break
      }
    })
  }
}
</script>

<style lang="stylus">
@import './assets/css/colors.styl'
#app
  height 100%
  transition background .5s;
// home
.home
  background-color bgHome(1)
  color fontHome(1)
  .nav-app
    background-color bgHome(1)
    color fontHome(1)
  .nav-pc
    .nav-li-link:after
      background-color fontHome(1)
  .menu > .line::after
      background-color fontHome(1)
// subscribe
.subscribe
  background-color bgSubscribe(1)
  color fontSubscribe(1)
  .nav-app
    background-color bgSubscribe(1)
    color fontSubscribe(1)
  .nav-pc
    .nav-li-link:after
      background-color fontSubscribe(1)
  .menu > .line::after
      background-color fontSubscribe(1)
// about
.about
  background-color bgAbout(1)
  color fontAbout(1)
  .nav-app
    background-color bgAbout(1)
    color fontAbout(1)
  .nav-pc
    .nav-li-link:after
      background-color fontAbout(1)
  .menu > .line::after
      background-color fontAbout(1)
// contact
.contact
  background-color bgContact(1)
  color fontContact(1)
  .nav-app
    background-color bgContact(1)
    color fontContact(1)
  .nav-pc
    .nav-li-link:after
      background-color fontContact(1)
  .menu > .line::after
      background-color fontContact(1)
// services
.services
  background-color bgServices(1)
  color fontServices(1)
  .nav-app
    background-color bgServices(1)
    color fontServices(1)
  .nav-pc
    .nav-li-link:after
      background-color fontServices(1)
  .menu > .line::after
      background-color fontServices(1)
</style>
