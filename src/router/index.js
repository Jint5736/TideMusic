import Vue from 'vue'
import Router from 'vue-router'
import discoverMusic from '@/components/discoverMusic/discoverMusic.vue'
import myMusic from '@/components/myMusic/myMusic.vue'
import musician from '@/components/musician/musician.vue'
import vip from '@/components/vip/vip.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/discoverMusic',
      name: 'discoverMusic',
      component: discoverMusic
    },
    {
      path: '/myMusic',
      name: 'myMusic',
      component: myMusic
    },
    {
      path: '/musician',
      name: 'musician',
      component: musician
    },
    {
      path: '/vip',
      name: 'vip',
      component: vip
    }
  ]
})
