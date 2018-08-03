<template>
  <div class="area show-border">
    <textarea @input="checkInput" @blur="checkInput" maxlength="200" placeholder="填写内容" v-model="inputData"></textarea>
    <div class="text-number">
      <i v-if="showTrue" class="icon fa fa-check"></i>
      <i v-if="showFalse" class="icon fa fa-close"></i>
      <span v-if="showTrue" class="check">{{inputDataLen}}/200</span>
      <span v-if="showFalse" class="close">还差 {{20-inputDataLen}} 个字</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
      inputDataLen: 0
    }
  },
  methods: {
    checkInput () {
      this.inputData = this.inputData.replace(/[<|>]/g, '').replace(/[&lt;|&gt;]/g, '')
      this.inputDataLen = this.inputData.length
      if (this.inputDataLen < 20) {
        this.showTrue = false
        this.showFalse = true
      } else {
        this.showTrue = true
        this.showFalse = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .area
    position: relative;
    padding:5px;
    textarea
      display block
      min-height: 100px;
      width: 100%;
      font-size: 14px;
      padding:0;
      border: none;
      border-radius: 0;
      box-sizing: border-box;
      background: transparent;
    .text-number
      position: absolute;
      right: 5px;
      bottom: 0px;
      font-size: 12px;
      height: 20px;
      line-height: 20px;
      color: #999999
      i
        font-size: 14px;
        line-height: 20px;
      .check
        color:#5597F5
      .close
        color #d9534f

</style>
