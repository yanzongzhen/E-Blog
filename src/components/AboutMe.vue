<template>
    <section>
       <Card style="border-radius: 10px">
         <h2 class="ab_title">关于博主</h2>
         <div class="avatar">
           <a href="#" target="_blank"><img src="../../static/img/logo1.png"></a>
         </div>
         <div class="ab_con">
           <p>姓名：{{$store.state.BlogInfo.username}}</p>
           <p>职业：{{$store.state.BlogInfo.job}}</p>
           <p>籍贯：{{$store.state.BlogInfo.place}}</p>
           <p>邮箱：{{$store.state.BlogInfo.email}}</p>
         </div>
       </Card>
    </section>
</template>

<script>
export default {
  name: 'AboutMe'
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

  .ab_con {
    line-height: 30px;
    padding: 10px;
  }

  .ab_con p {
    background: #f6f6f6;
    margin: 5px 0;
    padding-left: 10px;
    border-radius: 5px;
    text-shadow: rgba(255, 255, 255, 0.3) 0px 1px 0px;
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

  .avatar {
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 50px;
    margin: auto;
  }
  a {
    text-decoration: none;
    color: #555;
  }

  .avatar img {
    width: 100px;
    height: 100px;
  }
</style>
