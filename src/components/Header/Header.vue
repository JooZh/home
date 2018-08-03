<template>
    <header id="header" ref="header" class="header fadeInDown animated" :class="miniHeader">
      <div class="layout">
        <h1 class="logo">
          <i class="fa fa-github-alt"></i>
          <span class="s">Mr.JooZh</span>
        </h1>
        <button class="menu" @click="changeMenu" :class="{'opened':isPhone}">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </button>
        <nav class="nav-pc">
          <ul class="nav-list">
            <li class="nav-li" @click="changeActive($event,1)">
              <router-link class="nav-li-link" :class="{'active':active==1}" to="/home"><i class="fa fa-home fa-fw"></i> 介绍</router-link>
            </li>
            <!-- <li class="nav-li" @click="changeActive($event,2)">
              <router-link class="nav-li-link" :class="{'active':active==2}" to="/subscribe"><i class="fa fa-pencil-square fa-fw"></i> 技能</router-link>
            </li> -->
            <!-- <li class="nav-li" @click="changeActive($event,3)">
              <router-link class="nav-li-link" :class="{'active':active==3}" to="/about"><i class="fa fa-plus-square fa-fw"></i> 充电</router-link>
            </li> -->
            <li class="nav-li" @click="changeActive($event,4)">
              <router-link class="nav-li-link" :class="{'active':active==4}" to="/services"><i class="fa fa-folder fa-fw"></i> 简历</router-link>
            </li>
            <li class="nav-li" @click="changeActive($event,5)">
              <router-link class="nav-li-link" :class="{'active':active==5}" to="/contact"><i class="fa fa-check-square fa-fw"></i> 表单</router-link>
            </li>
            <li class="nav-li">
              <a class="nav-li-link" href="https://joozh.github.io/" target="_blank"><i class="fa fa-pencil-square fa-fw"></i> 博客</a>
            </li>
            <li class="nav-li" @click="ctrlCanvas">
              <a class="nav-li-link"><i class="fa fa-fw" :class="cShow?'fa-toggle-on':'fa-toggle-off'"></i> 动画</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header-bg" ref="headerBg" :class="className"></div>
    </header>
</template>

<script>
import Bus from 'src/assets/js/bus.js'
export default {
  data () {
    return {
      active: 1,
      isPhone: false,
      headerH: 0,
      className: 'bg-home',
      miniHeader: '',
      cShow: false,
      e: {}
    }
  },
  mounted () {
    this.headerH = this.$refs.header.offsetHeight
    window.addEventListener('scroll', this.handleScroll)
    Bus.$on('canvasStatus', (status) => {
      this.cShow = status
    })
    Bus.$on('closeMeun', () => {
      this.isPhone = !this.isPhone
    })
    Bus.$on('changeRouter', (data) => {
      let index = data.index
      this.switchBg(index)
    })
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop < this.headerH * 2) {
        var opacity = (scrollTop / (this.headerH * 2)).toFixed(1)
        if (opacity > 0.9) {
          opacity = 0.9
        }
        this.$refs.headerBg.style.opacity = opacity
        this.miniHeader = ''
      } else {
        this.$refs.headerBg.style.opacity = 0.9
        this.miniHeader = 'mini-header'
      }
    },
    switchBg (index) {
      switch (index) {
        case 1:
          this.className = 'bg-home'
          break
        case 2:
          this.className = 'bg-subscribe'
          break
        case 3:
          this.className = 'bg-about'
          break
        case 4:
          this.className = 'bg-services'
          break
        case 5:
          this.className = 'bg-contact'
          break
      }
    },
    changeActive (e, index) {
      this.active = index
      this.e = e
      Bus.$emit('changeRouter', {
        index: index,
        x: this.e.clientX,
        y: this.e.clientY
      })
      this.isPhone = !this.isPhone
    },
    changeMenu () {
      this.isPhone = !this.isPhone
      Bus.$emit('showMeun')
    },
    ctrlCanvas () {
      Bus.$emit('ctrlCanvas')
      this.cShow = !this.cShow
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/colors.styl'
.header
  position fixed
  top 0
  left 0
  right 0
  z-index 20
  padding 30px 0
  transition all 0.5s
  .header-bg
    position absolute
    top 0
    left 0
    bottom 0
    right 0
    z-index -1
    opacity 0
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
  .logo
    transition font 0.5s
    display inline-block
    margin 0
    i
      margin-right 0.25rem
    span.s
      transition font 0.5s
      font-size 2rem
      span
        font-size 1.5rem
  .nav-pc
    display inline
    float right
  .nav-pc
    .nav-li
      display inline-block
      padding-left 40px
      .nav-li-link
        position relative
        display block
        padding 11px 0
        font-size 16px
        font-weight 700
        letter-spacing 2px
        cursor pointer
        &:after
          position absolute
          bottom 0
          content ""
          display block
          width 100%
          height 1px
          left 0
          opacity 0
          transition all .3s
          transform scale(1)
        &:hover:after,
        &.active:after
          opacity 1
          height 2px
          transform scaleY(0.5)
  .menu
    display none
    position absolute
    top 1rem
    right 1.2rem
    width 1.4rem
    height 1.4rem
    background 0 0
    border 0
    cursor pointer
    outline 0
    padding 0
    z-index 999
    transition transform 0.5s,top 0.5s, right 0.5s
    .line
      &:after
        content ""
        position absolute
        left 0
        display block
        width 24px
        height 0.2rem
        margin 4px 2px
        border-radius 2px
        transition transform .35s, opacity .35s
      &:nth-child(1):after
        top 0
        transform-origin: 0 50%
      &:nth-child(2):after
        top 8px
        opacity 1
      &:nth-child(3):after
        top 16px
        transform-origin: 0 50%
    &.opened
      .line
        &:after
          width 30px
        &:nth-child(1):after
          transform translateX(1px) translateY(-2px) rotate(43deg)
        &:nth-child(2):after
          opacity 0
          transform translateX(-35px) rotate(0)
        &:nth-child(3):after
          transform translateX(1px) translateY(2px) rotate(-43deg)
@media screen and (max-width:996px)
  .nav-pc
    display block
@media screen and (max-width:768px)
  .header
    .nav-pc
      display none
    .menu
      display block
      top 3rem
      right 3rem
@media screen and (max-width:480px)
  .header
    padding 10px
    &.mini-header
      transition all 0.5s
      padding 10px
      line-height 15px
      .logo
        transition font 0.5s
        font-size 1rem
        span.s
          transition font 0.5s
          font-size 0.8rem
          span
            font-size 0.7rem
      .menu
        transition transform 0.5s,top 0.5s,right 0.5s
        top 7px
        right 10px
        transform scale(0.6)
    .logo
      font-size 1.5rem
      transition font 0.5s
      span.s
        transition font 0.5s
        font-size 1.3rem
        span
          font-size 1.2rem
    .nav-pc
      display none
    .menu
      display block
      top 9px
      right 14px
@media screen and (max-width:320px)
  .header
    padding 0.8rem
</style>
