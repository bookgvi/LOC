export default {
  data: () => ({
    pagination: {
      rowsPerPage: 2
    }
  }),
  created () {
    this.onRequest()
  },
  methods: {
    onRequest () {
      console.log(this.pagination)
    },
    setPage (prop, value) {
      this.pagination[prop] = value
    }
  }
}
