<template>
  <div id="App">
    <div class="topBarBackground">
      <div class="topBar">
        <div class="topBar-logo"></div>
        <div class="topBar-tab">
          <div class="tab-item">
            <router-link  class="tab-initem" to="/discoverMusic"  active-class="active">发现音乐</router-link>
          </div>
          <div class="tab-item">
            <router-link  class="tab-initem" to="/myMusic" active-class="active">我的音乐</router-link>
          </div>
          <div class="tab-item">
            <router-link  class="tab-initem" to="/musician" active-class="active">音乐人</router-link>
          </div>
          <div class="tab-item">
            <router-link  class="tab-initem" to="/vip" active-class="active">vip</router-link>
          </div>
        </div>
        <div class="topBar-input-user">

        </div>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .topBarBackground
    width 100%
    height 70px
    background #242424
    .topBar
      max-width 1100px
      min-width 750px
      height 69px
      margin 0 auto
      border-bottom 1px solid #242424
      background #242424
      display flex
      .topBar-logo
        width 176px
        height 69px
        background url('./common/logo.png') no-repeat
        background-size cover
      .topBar-tab
        display flex
        flex 1
        background white
        .tab-item
          font-size 14px
          flex 1
          text-align center
          .tab-initem
            display block
            width 100%
            height 100%
            background #242424
            color #cccccc
            text-align center
            line-height 69px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            &.active
              background #000000
              color #ffffff
          .tab-initem:hover
            background #000000
            color #ffffff
      .topBar-input-user
        width 470px
        height 100%
</style>
