<template>
    <div class="place show-border">
      <span class="icon fa fa-chevron-down"></span>
      <select class="place-select" @change="change" v-model="selectData" placeholder="请选择">
        <option v-for="(item,index) in lists" :key="index" :disabled="index == 0" :selected="index == 0" :value="item.id" >{{item.name}}</option>
      </select>
      <i v-if="showTrue" class="icon fa fa-check"></i>
      <i v-if="showFalse" class="icon fa fa-close"></i>
      <slot></slot>
    </div>
</template>

<script>
import Bus from '../assets/js/bus.js'
import {citys} from '../assets/js/citys.js'
export default {
  data () {
    return {
      showTrue: false,
      showFalse: false,
      lists: [{id: 0, name: '请选择'}],
      selectData: 0
    }
  },
  mounted () {
    Bus.$on('changeAddress', (id) => {
      this.getTowns(id)
      this.selectData = 0
      this.showTrue = false
      this.showFalse = false
    })
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
    },
    getTowns (id) {
      let towns = []
      citys[id].sub.forEach((item, index) => {
        towns.push({
          id: index,
          name: item.name
        })
      })
      this.lists = towns
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
