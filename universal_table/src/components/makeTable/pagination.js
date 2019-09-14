export default {
  data: () => ({
    pagination: {
      rowsNumber: 1,
      rowsPerPage: 3
    }
  }),
  mounted () {
    this.setPagination()
  },
  methods: {
    async onRequest (start, count) {
      const datas = [
        {
          id: 1,
          name: 'Item1',
          comment: 'dummy1'
        },
        {
          id: 2,
          name: 'Item2',
          comment: 'dummy2'
        },
        {
          id: 3,
          name: 'Item2',
          comment: 'dummy2'
        },
        {
          id: 4,
          name: 'Item2',
          comment: 'dummy2'
        },
        {
          id: 5,
          name: 'Item2',
          comment: 'dummy2'
        },
        {
          id: 6,
          name: 'Item2',
          comment: 'dummy2'
        }
      ]
      this.pagination.rowsNumber = datas.length
      this.isLoading = true
      // this.data = []
      await setTimeout(() => {
        this.data = datas.slice(start, count)
        this.isLoading = false
      }, 1500)
    },
    setPage (prop, value) {
      if (this.pagination[prop] === value) { return }
      this.pagination.page = 1
      this.pagination[prop] = value
      this.setPagination()
    },
    setPagination () {
      const start = (this.pagination.page - 1) * this.pagination.rowsPerPage
      const count = (this.pagination.rowsPerPage * this.pagination.page)
      this.onRequest(start, count)
    }
  }
}
