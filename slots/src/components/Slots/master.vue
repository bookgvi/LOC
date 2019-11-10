<template>
  <div class="row mt-5">
    <div class="col">
      <Child>
        <template #wtf="props">
          New Value - {{ props.someHuman.firstName}} {{ props.someHuman.lastName }}
        </template>
      </Child>
    </div>
  </div>
</template>

<script>
import child from './child'
export default {
  name: 'master',
  components: {
    Child: child
  }
}
</script>

<style scoped>

</style>
