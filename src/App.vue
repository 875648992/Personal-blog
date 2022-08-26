<template>
  <div class="layout">
    <navBar class="layout_nav" v-if="true" />
    <banner />
  </div>
  <router-view />
</template>

<script>
import navBar from "./views/nav/nav.vue";
import banner from "./views/banner/banner.vue";

export default {
  components: { navBar, banner },
};
</script>

<style lang="scss">
.layout {
  position: relative;
  width: 100%;
  &_nav{
    width: 100%;
    position: absolute;
    z-index: 999;
  }
}
</style>
