<template>
  <div class="line">
    <div class="task task-all">
      <p class="title">{{title}}
        <span class="cue">[{{cue}}]</span>
      </p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    cue: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus">
.line
  display flex
  .task
    flex: 1
    padding 10px
    .icon
      flex 25px 0 0
      text-align center
      line-height 25px
      font-size 16px
      &.fa-check:before
        color #5597F5
      &.fa-close:before
        color #d9534f
    .title
      line-height 20px
      margin-top 0px
      margin-bottom 10px
      span.cue
        font-size 12px
        float right
        opacity 0
        transition all 0.3s ease-in
  &:hover
    .title
      span.cue
        opacity: 1
</style>
