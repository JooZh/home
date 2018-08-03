<template>
  <main id="main" class="fadeIn animated">
    <slot></slot>
  </main>
</template>

<script>
import Bus from 'src/assets/js/bus.js'
export default {
  data () {
    return {
    }
  },
  mounted () {
    Bus.$on('changeRouter', () => {
      this.menu()
    })
  },
  methods: {
    menu () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="stylus">
#main
  font-size 0.8rem
  position: relative
  z-index: 10
  min-height 100%
  &:before
    content ""
    display block
    height 110px
    width 100%
  &:after
    content ""
    display block
    width 100%
    height 2.5rem
@media screen and (max-width:996px)
  #main
    &:before
      height 110px
@media screen and (max-width:768px)
  #main
    &:before
      height 110px
@media screen and (max-width:480px)
  #main
    padding: 0 10px
    &:before
      height 49px
@media screen and (max-width:320px)
  #main
    padding: 0 10px
    &:before
      height 49px
</style>
