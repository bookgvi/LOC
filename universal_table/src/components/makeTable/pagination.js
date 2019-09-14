export default {
  data: () => ({
    pagination: {
      rowsNumber: 1,
      rowsPerPage: 1
    }
  }),
  mounted () {
    const start = (this.pagination.page - 1) * this.pagination.rowsPerPage
    const count = (this.pagination.rowsPerPage * this.pagination.page)
    this.onRequest(start, count)
  },
  methods: {
    onRequest (start, count) {
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
      this.data = datas.slice(start, count)
    },
    setPage (prop, value) {
      if (this.pagination[prop] === value) { return }
      this.pagination.page = 1
      this.pagination[prop] = value
      const start = (this.pagination.page - 1) * this.pagination.rowsPerPage
      const count = (this.pagination.rowsPerPage * this.pagination.page)
      this.onRequest(start, count)
    }
  }
}
