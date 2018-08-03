<template>
  <nav class="nav-app fadeInRight animated" v-show="show">
    <div class="in">
      <ul class="nav-list">
        <li class="nav-li">
          <a class="nav-li-link"><i class="fa fa-navicon fa-fw"></i></a>
        </li>
        <li class="nav-li" @click="changeActive($event,1)">
          <router-link class="nav-li-link" :class="{'active':active==1}" to="/home"><i class="fa fa-home fa-fw"></i> 主页内容</router-link>
        </li>
        <!-- <li class="nav-li" @click="changeActive($event,2)">
          <router-link class="nav-li-link" :class="{'active':active==2}" to="/subscribe"><i class="fa fa-pencil-square fa-fw"></i> 前端技能</router-link>
        </li> -->
        <!-- <li class="nav-li" @click="changeActive($event,3)">
          <router-link class="nav-li-link" :class="{'active':active==3}" to="/about"><i class="fa fa-plus-square fa-fw"></i> 充电旅程</router-link>
        </li> -->
        <li class="nav-li" @click="changeActive($event,4)">
          <router-link class="nav-li-link" :class="{'active':active==4}" to="/services"><i class="fa fa-file-text fa-fw"></i> 个人简历</router-link>
        </li>
        <li class="nav-li" @click="changeActive($event,5)">
          <router-link class="nav-li-link" :class="{'active':active==5}" to="/contact"><i class="fa fa-check-square fa-fw"></i> 表单验证</router-link>
        </li>
        <li class="nav-li">
          <a class="nav-li-link" href="https://joozh.github.io/" target="_blank"><i class="fa fa-pencil-square fa-fw"></i> 我的博客</a>
        </li>
        <li class="nav-li" @click="ctrlCanvas">
          <a class="nav-li-link"><i class="fa fa-fw" :class="cShow?'fa-toggle-on':'fa-toggle-off'"></i> 背景动画</a>
        </li>
      </ul>
      <div class="close-nav"><i class="fa fa-close fa-fw" @click="closeNav"></i></div>
    </div>
  </nav>
</template>

<script>
import Bus from 'src/assets/js/bus.js'
export default {
  data () {
    return {
      active: 1,
      show: false,
      cShow: false
    }
  },
  mounted () {
    Bus.$on('showMeun', () => {
      this.show = !this.show
    })
    Bus.$on('canvasStatus', (status) => {
      this.cShow = status
    })
  },
  methods: {
    changeActive (e, index) {
      this.active = index
      this.show = false
      Bus.$emit('changeRouter', {
        index: index,
        x: e.clientX,
        y: e.clientY
      })
      Bus.$emit('closeMeun')
    },
    ctrlCanvas () {
      if (!this.cShow) {
        this.$confirm('确定要开启 canvas 背景效果吗？')
          .then(() => {
            Bus.$emit('ctrlCanvas')
            Bus.$emit('closeMeun')
            this.show = false
            this.cShow = !this.cShow
          }).catch(() => {})
      } else {
        this.$confirm('确定要关闭 canvas 背景效果吗?')
          .then(() => {
            Bus.$emit('ctrlCanvas')
            Bus.$emit('closeMeun')
            this.show = false
            this.cShow = !this.cShow
          }).catch(() => {})
      }
    },
    closeNav () {
      Bus.$emit('closeMeun')
      this.show = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.nav-app
  position fixed
  top 0
  left 0
  right 0
  bottom -100px
  padding 40px
  text-align center
  z-index 999
  display flex
  justify-content center
  align-items center
  .in
    margin-top -100px
    .nav-list
      .nav-li
        line-height 3rem
        .fa
          font-size 1.5rem
          position relative
          top 0.1rem
    .close-nav
      margin-top 2rem
      line-height 3rem
      .fa
        font-size 2rem
</style>
