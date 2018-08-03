<template>
  <div class="layout fadeIn animated">
      <!-- <div class="slide">
        <div class="db-box">
          <div class="in-border">
            <div class="content-box">
              <div>
                <div class="hello">Hello</div>
                <div class="text">{{text}}</div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="content">
        <div class="in">
          <div class="hello">Hey Guys!</div>
          <div class="text">{{text}}</div>
          <div class="bf">正在设计中,宁缺勿滥</div>
          <div class="in-line">采用 Vue 组件化开发方式重构</div>
          <div class="in-line">兼容手机微信移动端和电脑端</div>
          <div class="in-line">如体验不便，别生气 <i class="fa fa-smile-o fa-fw"></i></div>
          <div class="ewm">
            <img src="../../assets/imgs/ewm.png" alt="">
          </div>
          <div class="in-line">扫码手机浏览</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      textArr: [
        'My Name is Mr.JooZh ',
        'I\'m a Web Developer ',
        'The develop language I can use ',
        'JavaScript HTML5 CSS3 Node.js ',
        'Love Simplicity design style '
      ],
      text: '',
      timerAdd: null,
      timerMun: null
    }
  },
  mounted () {
    this.add()
  },
  methods: {
    add () {
      if (this.index === this.textArr.length - 1) {
        this.index = 0
      } else {
        this.index += 1
      }
      let i = 0
      let s = this.index
      // console.log(s)
      let text = this.textArr[s]
      let textArr = text.split('')
      this.timerAdd = setInterval(() => {
        if (i < textArr.length) {
          this.text += textArr[i]
          i++
        } else {
          clearInterval(this.timerAdd)
          let t = setTimeout(() => {
            this.mun()
            clearTimeout(t)
          }, 500)
        }
      }, 80)
    },
    mun () {
      let text = this.text
      let textArr = text.split('')
      let i = textArr.length
      this.timerMun = setInterval(() => {
        if (i > 0) {
          textArr.pop(i)
          this.text = textArr.join('')
          i--
        } else {
          clearInterval(this.timerMun)
          let t = setTimeout(() => {
            this.add()
            clearTimeout(t)
          }, 200)
        }
      }, 30)
    }
  },
  beforeDestroy () {
    clearInterval(this.timerAdd)
    clearInterval(this.timerMun)
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/css/colors.styl'
  .content
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    display flex
    justify-content center
    align-items center
    .in
      text-align center
      .hello
        font-size 34px
        line-height 50px
        font-weight 700
        font-family montserrat,sans-serif
      .text
        font-size 18px
        height 50px
        line-height 50px
      .bf
        font-size 30px
        line-height 50px
        font-weight 700
      .in-line
        text-align center
        font-size 14px
      .ewm
        margin-top 10px
        border:2px solid #333
        padding 5px
        background #000000
        display inline-block
        img
          width 98px
          height 98px
          display block
//   .slide
//     width 100%
//     // background-color fontHome(0.1)
//     // background-image url('../../assets/imgs/home-bg.jpg')
//     background-size 100% 100%
//     display flex
//     justify-content center
//     align-items center
//     margin-bottom 10px
//     .db-box
//       border 1px solid fontHome(0.4)
//       padding 3px
//       width 300px
//       height 200px
//       margin 80px 0
//       .in-border
//         border 1px solid fontHome(0.4)
//         height 100%
//         box-sizing border-box
//         padding 10px
//         .content-box
//           height 100%
//           box-sizing border-box
//           background fontHome(0.1)
//           text-align center
//           display flex
//           justify-content center
//           align-items center
//           font-family roboto slab,serif
//           .hello
//             color fontHome(1)
//             font-size 40px
//             margin-bottom 10px
//           .text
//             font-size 15px
//             height 20px
//             line-height 20px
//             color fontHome(0.7)
// @media screen and (max-width:996px)
//   .slide .db-box
//     height 200px
//     margin 80px 0
// @media screen and (max-width:768px)
//   .slide .db-box
//     height 200px
//     margin 80px 0
// @media screen and (max-width:480px)
//   .slide .db-box
//     width 80%
//     height 160px
//     margin 30px 0
// @media screen and (max-width:380px)
//   .slide .db-box
//     width 80%
//     height 150px
//     margin 30px 0
// @media screen and (max-width:320px)
//   .slide .db-box
//     width 80%
//     height 140px
//     margin 30px 0
</style>
