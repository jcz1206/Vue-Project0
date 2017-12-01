<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div>
      <p>用户名：<input type="text"></p>
      <p>密码：<input type="text"></p>
      <p><button>登录</button></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: '登陆'
    }
  }
}

</script>
