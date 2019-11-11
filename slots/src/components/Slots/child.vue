<template>
  <div class="slot mt-5">
    <div class="row">
      <h2 class="col text-primary">
        WTF
      </h2>
    </div>
    <div class="row">
      <div class="col">
        <slot :user="user">Default slot </slot>
        <slot name="wtf" :someHuman="user">{{ user.firstName }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'child',
  data () {
    return {
      user: {
        firstName: 'Paul',
        lastName: 'Cassedey'
      }
    }
  }
}
</script>

<style scoped>

</style>
