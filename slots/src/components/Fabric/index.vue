<template>
  <div class="row mt-3">
    <div id="point" class="col">
      This is point!
    </div>
  </div>
</template>

<script>
export default {
  name: 'fabric',
  mounted () {
    const pointOfAppend = document.getElementById('point')
    return Array.apply(null, { length: 10 }).map((item, index) => {
      const newNode = this.appendElem(pointOfAppend)(this.createElem('h5'))
      newNode.textContent = `This is new DOM element #${index}`
      newNode.classList.add('text-primary')
    })
  },
  methods: {
    createElem (elem) {
      return document.createElement(elem)
    },
    appendElem (parentNode) {
      return childNode => {
        return parentNode.appendChild(childNode)
      }
    }
  }
}
</script>

<style scoped>

</style>
