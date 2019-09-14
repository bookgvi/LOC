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
      await this.getPersons(relURL)
      this.isLoading = false
    },
    setPage (props, value) {
      if (this.pagination[props] === value) { return }
      this.pagination[props] = value
      this.onRequest(`people/?page=${value}`)
    }
  },
  async mounted () {
    await this.onRequest('people')
    this.maxPages = this.persons.length - 1
  }
}
