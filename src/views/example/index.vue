<template>
  <div>
    <cm-table
      :total="pageInfo.total"
      :current-page.sync="pageInfo.currentPage"
      :page-size.sync="pageInfo.pageSize"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      pageInfo: {
        layout: 'total,prev,pager,next,jumper',
        total: 100,
        currentPage: 1,
        pageSize: 20
      }
    }
  },
  watch: {
    pageInfo: {
      handler(newValue) {
        console.log(newValue)
      },
      deep: true
    }
  },
  methods: {
    handleCurrentChange(currentPage) {
      console.log(currentPage)
    },
    handleSizeChange(pageSize) {
      console.log(pageSize)
    }
  }
}
</script>
