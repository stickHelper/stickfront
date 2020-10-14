<template>
  <ul class="sidebar-menu inline">
    <li
      v-for="(menu, index) in listMenu"
      :key="index"
      class="item"
      :class="menu.path.name === currentRouteName ? 'active' : ''"
    >
      <router-link
        :to="menu.path.url"
      >
        {{ menu.label }}
      </router-link>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'Menu',
    data: () => {
      return {
        listMenu: [
          {
            label: 'Introduction',
            path: {
              name: 'Home',
              url: '/'
            }
          },
          {
            label: 'Button',
            path: {
              name: 'Button',
              url: '/button'
            }
          },
          {
            label: 'Skeleton',
            path: {
              name: 'Skeleton',
              url: '/skeleton'
            }
          }
        ]
      }
    },
    computed: {
      currentRouteName() {
        return this.$route.name
      }
    }
  }
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
