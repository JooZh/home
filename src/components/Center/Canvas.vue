<template>
  <div class="canvas" v-if="show">
    <canvas ref="canvas"></canvas>
  </div>
</template>
<script>
import Bus from 'src/assets/js/bus.js'
class Curve {
  constructor (curve) {
    this.cp1x = curve.cp1x
    this.cp1y = curve.cp1y
    this.cp2x = curve.cp2x
    this.cp2y = curve.cp2y
    this.x = curve.x
    this.y = curve.y
    this.cp1xvx = curve.cp1xvx
    this.cp1xvy = curve.cp1xvy
    this.cp1yvx = curve.cp1yvx
    this.cp1yvy = curve.cp1yvy
    this.cp2xvx = curve.cp2xvx
    this.cp2xvy = curve.cp2xvy
    this.cp2yvx = curve.cp2yvx
    this.cp2yvy = curve.cp2yvy
  }
}
export default {
  data () {
    return {
      show: true,
      canvas: {},
      ctx: {},
      curves_array: []
    }
  },
  mounted () {
    console.log('new')
    this.init()
    setTimeout(() => {
      Bus.$emit('canvasStatus', this.show)
    }, 100)
    Bus.$on('changeRouter', (data) => {
      if (this.show) {
        this.resetCanvas()
        switch (data.index) {
          case 1:
            this.showCanvas('rgb(37,37,37)')
            break
          case 2:
            this.showCanvas('rgb(255, 255, 255)')
            break
          case 3:
            this.showCanvas('rgb(255, 255, 255)')
            break
          case 4:
            this.showCanvas('rgb(255, 255, 255)')
            break
          case 5:
            this.showCanvas('rgb(37,37,37)')
            break
        }
      }
    })
    Bus.$on('ctrlCanvas', () => {
      this.show = !this.show
      if (this.show) {
        this.resetCanvas()
        this.$nextTick(() => {
          this.init()
        })
      }
    })
  },
  methods: {
    init () {
      this.canvas = this.$refs.canvas
      this.ctx = this.canvas.getContext('2d')
      window.requestAnimFrame = this.getRequestAnimFrame()
      this.showCanvas('rgb(37,37,37)')
    },
    getRequestAnimFrame () {
      let x = window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              function (fn) {
                window.setTimeout(fn, 1000 / 60)
              }
      return x
    },
    showCanvas (color) {
      this.canvasResize()
      this.canvasInit()
      this.canvasDraw(color)
    },
    resetCanvas () {
      this.curves_array = []
    },
    canvasResize () {
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
    },
    canvasInit () {
      for (let i = 0; i < 64; i++) {
        let cp1x = Math.random() * this.canvas.width
        let cp1y = Math.random() * this.canvas.height
        let cp2x = Math.random() * this.canvas.width
        let cp2y = Math.random() * this.canvas.height
        let x = 0
        let y = 0
        let cp1xvx = Math.random() * 2 - 1
        let cp1xvy = Math.random() * 2 - 1
        let cp1yvx = Math.random() * 2 - 1
        let cp1yvy = Math.random() * 2 - 1
        let cp2xvx = Math.random() * 2 - 1
        let cp2xvy = Math.random() * 2 - 1
        let cp2yvx = Math.random() * 2 - 1
        let cp2yvy = Math.random() * 2 - 1
        let curve = {
          cp1x: cp1x,
          cp1y: cp1y,
          cp2x: cp2x,
          cp2y: cp2y,
          x: x,
          y: y,
          cp1xvx: cp1xvx,
          cp1xvy: cp1xvy,
          cp1yvx: cp1yvx,
          cp1yvy: cp1yvy,
          cp2xvx: cp2xvx,
          cp2xvy: cp2xvy,
          cp2yvx: cp2yvx,
          cp2yvy: cp2yvy
        }
        this.curves_array.push(new Curve(curve))
      }
    },
    canvasDraw (color) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx.lineWidth = 1
      this.ctx.strokeStyle = color
      for (let i = 0; i < this.curves_array.length; i++) {
        this.ctx.beginPath()
        this.ctx.moveTo(-100, this.canvas.height + 100)
        this.ctx.bezierCurveTo(
          this.curves_array[i].cp1x,
          this.curves_array[i].cp1y,
          this.curves_array[i].cp2x,
          this.curves_array[i].cp2y,
          this.canvas.width + 100,
          this.curves_array[i].y - 100
        )
        this.ctx.stroke()
        if (this.curves_array[i].cp1x < 0 || this.curves_array[i].cp1x > this.canvas.width) {
          this.curves_array[i].cp1x -= this.curves_array[i].cp1xvx
          this.curves_array[i].cp1xvx *= -1
        }
        if (this.curves_array[i].cp1y < 0 || this.curves_array[i].cp1y > this.canvas.height) {
          this.curves_array[i].cp1y -= this.curves_array[i].cp1yvy
          this.curves_array[i].cp1yvy *= -1
        }
        if (this.curves_array[i].cp2x < 0 || this.curves_array[i].cp2x > this.canvas.width) {
          this.curves_array[i].cp2x -= this.curves_array[i].cp2xvx
          this.curves_array[i].cp2xvx *= -1
        }
        if (this.curves_array[i].cp2y < 0 || this.curves_array[i].cp2y > this.canvas.height) {
          this.curves_array[i].cp2y -= this.curves_array[i].cp2yvy
          this.curves_array[i].cp2yvy *= -1
        }
        this.curves_array[i].cp1y += this.curves_array[i].cp1yvy
        this.curves_array[i].cp1x += this.curves_array[i].cp1xvx
        this.curves_array[i].cp2x += this.curves_array[i].cp2xvx
      }
      window.requestAnimFrame(this.canvasDraw)
    }
  }
}
</script>

<style lang="stylus" scoped>
.canvas
  position: fixed
  top: 0
  left: 0
  bottom: 0
  right: 0
  canvas
    width:100%
    height 100%
    opacity: 0.1
</style>
