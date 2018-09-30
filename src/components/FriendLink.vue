<template>
  <section>
    <Card style="border-radius: 10px">
      <h2 class="ab_title">友情链接</h2>
      <div class="ab_con">
        <div class="link" v-for="(item,index) in friendLinks" :key="index"><a :href="item.url" target="_blank">{{item.name}}</a></div>
      </div>
    </Card>
  </section>
</template>

<script>
export default {
  name: 'FriendLink',
  props: {
    friendLinks: Array
  }
}
</script>

<style scoped>

.ab_title {
  text-align: center;
  position: relative;
  margin: 10px;
}
.ab_title:before {
  content: "";
  width: 25%;
  height: 2px;
  background: #808695;
  position: absolute;
  left: 0;
  bottom: 8px;
}
.ab_title:after {
  content: "";
  width: 25%;
  height: 2px;
  background: #808695;
  position: absolute;
  right: 0;
  bottom: 8px;
}

.ab_con {
  line-height: 30px;
  padding: 10px;
}

.ab_con .link {
  background: #f6f6f6;
  margin: 10px 10px;
  padding: 10px 10px;
  border-radius: 5px;
  display: inline;
  text-shadow: rgba(255, 255, 255, 0.3) 0px 1px 0px;
}

a {
  text-decoration: none;
  color: #555;
}
</style>
