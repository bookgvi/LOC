<template>
  <div class="slot">
    <h2 class="text-primary">
      WTF
    </h2>
    <div>
      <slot :user="user">Default slot </slot>
      <slot name="wtf" :someHuman="user">{{ user.firstName }}</slot>
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
