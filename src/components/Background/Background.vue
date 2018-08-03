<template>
  <div id="bg">
    <div :class="{'active':active==1}" ref="bg1" class="bg bg-home"></div>
    <div :class="{'active':active==2}" ref="bg2" class="bg bg-subscribe"></div>
    <div :class="{'active':active==3}" ref="bg3" class="bg bg-about"></div>
    <div :class="{'active':active==4}" ref="bg4" class="bg bg-services"></div>
    <div :class="{'active':active==5}" ref="bg5" class="bg bg-contact"></div>
  </div>
</template>
<script>
import Bus from 'src/assets/js/bus.js'
export default {
  data () {
    return {
      active: 1
    }
  },
  mounted () {
    Bus.$on('changeRouter', (data) => {
      let dom = 'bg' + data.index
      this.$refs[dom].style.left = `${data.x - 40}px`
      this.$refs[dom].style.top = `${data.y - 40}px`
      this.active = data.index
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/colors.styl'
#bg
  position: fixed
  top 0
  left 0
  bottom -100px
  right 0
  overflow hidden
  transition: background 0.5s;
  .bg
    border-radius 100%
    position: absolute
    top 0
    left 0
    bottom 0
    right 0
    opacity: 0
    &.active
      width: 100px
      height: 100px
      transform: translate3d(0, 0, 0) scale3d(40, 40, 1)
      transition-property: width, height, border-radius, transform
      transition-duration: 0.5s
      transition-timing-function: ease-in-out
      border-radius: 0
      z-index: 2
      display: block
      opacity: 1
    &.bg-home
      background-color: bgHome(1)
    &.bg-subscribe
      background-color: bgSubscribe(1)
    &.bg-about
      background-color: bgAbout(1)
    &.bg-contact
      background-color: bgContact(1)
    &.bg-services
      background-color: bgServices(1)
</style>
