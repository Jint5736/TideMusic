<template>
  <div class="toSearch">
  <input type="text" class="search" placeholder="搜索" v-model.trim="title" >
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'toSearch',
  data () {
    return {
      title: '',
      search: []
    }
  },
  created () {
    console.log(axios)
    axios.defaults.withCredentials = true
    axios.get('/search?keywords=海阔天空')
      .then(function (response) {
        console.log(response.result)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .toSearch
    width 200px
    height 50px
    position relative
    input
        width 200px
        height 20px
        font-size 12px
</style>
