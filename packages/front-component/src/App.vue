<template>
  <div id="app">
    <div class="uw-container">
      <nav class="uw-sidebar">
        <Menu />
      </nav>
      <main class="uw-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style lang="scss" src="./styles/font/font-family.scss"></style>
<style lang="scss" src="./styles/icon/se-font.min.scss"></style>
<style lang="scss">
@import './styles/index.scss';

.uw-container{
  padding-left: 240px;

}
.uw-sidebar{
  width: 240px;
  height: 100%;
  position: fixed;
  left:0;
  top:0;
  z-index: 22;
  background-color: white;
  box-shadow: 0px 4px 16px rgba(black, .24);
}
</style>
