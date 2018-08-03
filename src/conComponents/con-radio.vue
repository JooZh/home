<template>
  <div class="radio show-border">
    <div class="lines">
      <div class="line"
        :class="select==index?'active':''"
        v-for="(item,index) in dataArr"
        :key="item"
        @click="change(index)" >
        <i class="icon fa" :class="select==index?'fa-dot-circle-o':'fa-circle-o'"></i>
        <span>{{item}}</span>
      </div>
    </div>
    <slot name="radio" :select="select"></slot>
  </div>
</template>

<script>
export default {
  props: {
    dataArr: {
      type: Array
    }
  },
  data () {
    return {
      select: 0
    }
  },
  methods: {
    change (index) {
      this.select = index
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/colors.styl'
  .radio
    padding: 2px;
    position: relative;
    .lines
      display flex
      .line
        display flex
        flex: 1;
        width: 100%;
        height: 25px;
        line-height: 25px;
        margin: 3px;
        color: fontContact(1)
        text-indent: 3px;
        font-size: 14px;
        overflow: hidden;
        background bgContact(1)
        // border-radius 2px
        transition all 0.5s
        &:hover,
        &.active
          background fontContact(0.2)
          color fontContact(1)
</style>
