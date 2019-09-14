export default {
  data: () => ({
    pagination: {
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 10
    }
  }),
  methods: {
    async onRequest (relURL) {
      this.isLoading = true
      this.data = await this.$http.get(relURL).then(resp => resp.data.results)
      // console.log(await this.$http.get('people').then(resp => resp.data.next))
      this.isLoading = false
    },
    setPage (props, value) {
      if (this.pagination[props] === value) { return }
      this.pagination[props] = value
      this.onRequest(`people/?page=${value}`)
    }
  },
  async mounted () {
    this.onRequest('people')
    this.maxPages = await this.$http.get('people').then(resp => resp.data.count)
  }
}
