<template>
  <div>
    <cm-table
      :columns="columns"
      :data="tableData"
      :total="pageInfo.total"
      :current-page.sync="pageInfo.currentPage"
      :page-size.sync="pageInfo.pageSize"
      @current-change="handleCurrentChange"
    >
      <template v-slot:column>
        <div>hhhh</div>
        <div>hhhh</div>
        <div>hhhh</div>
      </template>
    </cm-table>
  </div>
</template>

<script>
import { data } from '@/data'

export default {
  name: 'Index',
  data() {
    return {
      pageInfo: {
        layout: 'total,prev,pager,next,jumper',
        total: 100,
        currentPage: 1,
        pageSize: 20
      },
      columns: [
        { prop: 'name', label: '广告组名称', width: 'auto', fixed: true },
        {
          // 配置按钮
          actions: [
            {
              id: 'edit',
              text: '编辑'
            },
            {
              id: 'follow',
              text: '删除',
              click: (...args) => {
                console.log(args)
              }
            }
          ],
          label: '操作',
          width: 120
        },
        {
          prop: 'landing_type',
          label: '推广目的',
          formatter: row => {
            return row.landing_type
          }
        },
        { prop: 'status', label: '广告组状态', useSlot: true },
        { prop: 'budget', label: '组预算' }
      ],
      tableData: data
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
  created() {
    console.log(22222, this)
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
