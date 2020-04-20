<template>
  <div>
    <el-button type="info" @click="logout">退出</el-button>
    Home组件
  </div>
</template>

<script>
  export default {
    methods: {
      logout() {
        this.$router.push('/login')
        window.sessionStorage.clear()
      }
    }
  }
</script>

<style scoped>

</style>
