<template>
  <div class="card" :style="`width:${width}px`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    width:{
      type:Number||String,
      default:300
    },
  }
}
</script>

<style lang="scss" >
.card{
  box-shadow: 0px 0px 10px #888888;
  border-radius: 4px;
}

</style>