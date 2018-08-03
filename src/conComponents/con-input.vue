<template>
  <div class="text show-border">
    <span class="icon fa" :class="icon"></span>
    <input @input="checkInput" @blur="checkInput" :type="type" :placeholder="placeholder" v-model="inputData">
    <i v-if="showTrue" class="icon fa fa-check"></i>
    <i v-if="showFalse" class="icon fa fa-close"></i>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'fa-pencil'
    },
    checkType: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      showTrue: false,
      showFalse: false,
      inputData: '',
      isEmpty: ['weibo', 'github', 'amway'],
      regs: {
        name: /^[\u4E00-\u9FA5]{2,8}$/,
        studentID: /^20[1-9]\d{9}$/,
        mobile: /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/,
        qq: /^\d{5,11}$/,
        weixin: /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/,
        weibo: /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?/,
        github: /^https:\/\/github\.com\/([-_a-zA-Z0-9]{2,19})+$/,
        email: /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/,
        major: /^[\u4E00-\u9FA5]{2,8}$/,
        grade: /^([1-9])$|^([1-9]\d)$|^(1[0-4]\d)$|^(150)$/,
        amway: /^[\u4E00-\u9FA5]{2,8}$/
      }
    }
  },
  mounted () {
    // console.log(this.checkType)
  },
  methods: {
    checkInput () {
      let checkType = this.checkType
      let find = this.isEmpty.findIndex((item) => {
        return item === checkType
      })
      if (find !== -1) {
        if (this.inputData && this.inputData !== '无') {
          this.checkReg(checkType)
        } else if (this.inputData === '无') {
          this.showTrue = true
          this.showFalse = false
        } else {
          this.showTrue = false
          this.showFalse = true
        }
      } else {
        this.checkReg(checkType)
      }
    },
    checkReg (checkType) {
      let res = this.regs[checkType].test(this.inputData)
      if (res) {
        this.showTrue = true
        this.showFalse = false
      } else {
        this.showTrue = false
        this.showFalse = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.text
  padding 5px
  display flex
  input
    border none
    flex 1
    height 25px
    line-height 25px
    text-indent 5px
    font-size 14px
    padding 0
    background transparent
</style>
