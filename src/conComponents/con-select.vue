<template>
    <div class="place show-border">
      <span class="icon fa fa-chevron-down"></span>
      <select class="place-select" @change="change" v-model="selectData">
        <option v-for="(item,index) in lists" :key="index" :disabled="index == 0" :selected="index == 0" :value="item.id" >{{item.name}}</option>
      </select>
      <i v-if="showTrue" class="icon fa fa-check"></i>
      <i v-if="showFalse" class="icon fa fa-close"></i>
      <slot></slot>
    </div>
</template>

<script>
export default {
  props: {
    lists: {
      type: Array
    }
  },
  data () {
    return {
      showTrue: false,
      showFalse: false,
      selectData: 0
    }
  },
  methods: {
    change () {
      if (this.selectData !== 0) {
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
  .place
    display: flex;
    flex: 1;
    padding: 5px;
    position: relative;
    .place-select
      flex: 1;
      width: 100%;
      height: 25px;
      line-height: 25px;
      margin: 0px;
      color: #666;
      text-indent: 5px;
      font-size: 14px;
      overflow: hidden;
      background none
      border none
</style>
