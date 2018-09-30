<template>
  <section>
    <Carousel autoplay v-model="value2" loop :autoplay-speed="speed" style="border-radius: 10px">
      <CarouselItem  v-for="item in picData" :key="item.index">
        <div class="demo-carousel"><img :src="item.url"></div>
      </CarouselItem>
    </Carousel>
  </section>
</template>

<script>
export default {
  name: 'LunBo',
  props: {
    data: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      value2: 0,
      picData: this.$store.state.lunBo,
      speed: 3000
    }
  },
  created () {
    if (this.data) {
      this.picData = this.data
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped>
.demo-carousel {
  padding: 10px 10px;
  background-color: white;
}
.demo-carousel img {
  width: 100%;
  height: 100%;
}
</style>
