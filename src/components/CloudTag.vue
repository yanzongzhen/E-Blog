<template>
  <Card style="width:auto;border-radius: 10px">
    <h2 class="ab_title">标签云</h2>
    <Divider />
    <div>
      <Tag v-for="item in data" type="dot" style="line-height: 32px" :color="getColor()" @click.native="clickTag(item)" class="tags-click" :key="item.index">{{item.name}}</Tag>
    </div>
  </Card>
</template>

<script>
export default {
  name: 'CloudTag',
  props: {
    data: Array
  },
  data () {
    return {
      ColorList: ['default', 'primary', 'success', 'warning', 'error', 'blue', 'green', 'red', 'yellow', 'pink', 'magenta', 'volcano', 'orange', 'gold', 'lime', 'cyan', 'geekblue', 'purple']
    }
  },
  methods: {
    getColor () {
      let countColor = this.ColorList.length
      let index = Math.floor(Math.random() * countColor)
      return this.ColorList[index]
    },
    clickTag (item) {
      this.$emit('clickTag', item)
    }
  },
  computed: {
  }
}
</script>

<style scoped>
.tags-click:hover {
  transform: scale(1.2);
}

.ab_title {
  text-align: center;
  position: relative;
  margin: 10px;
}
.ab_title:before {
  content: "";
  width: 25%;
  height: 2px;
  background:#808695;
  position: absolute;
  left: 0;
  bottom: 8px;
}
.ab_title:after {
  content: "";
  width: 25%;
  height: 2px;
  background:#808695;
  position: absolute;
  right: 0;
  bottom: 8px;
}
</style>
