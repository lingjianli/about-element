import { Table, Pagination } from 'element-ui'
import './index.scss'
console.log(Table)
const tableProps = {
  defaultExpandAll: Table.props.defaultExpandAll,
  treeProps: Table.props.treeProps,
  expandRowKeys: Table.props.expandRowKeys
}
export default {
  name: 'CmTable',
  props: {
    ...Table.props,
    // 表格数据
    data: {
      type: Array,
      default: () => []
    },
    // columns列的配置信息
    columns: {
      type: Array,
      default: () => []
    },
    // 是否分页
    pagination: {
      type: Boolean,
      default: true
    },
    // 每页条数
    pageSize: {
      type: Number,
      default: 10
    },
    // 总条数
    total: {
      type: Number,
      default: 0
    },
    // 当前页码
    currentPage: {
      type: Number,
      default: 1
    },
    // 分页布局
    pageLayout: {
      type: String,
      default: 'total,sizes,prev,pager,next,jumper'
    }
  },
  methods: {
    // 渲染分页
    $_renderPage(h) {
      const { pagination, pageSize, total, currentPage, pageLayout } = this
      return pagination ? (
        <div>
          <Pagination
            total={total}
            currentPage={currentPage}
            pageSize={pageSize}
            layout={pageLayout}
            {...{
              on: {
                'size-change': this.$_handlePageSizeChange,
                'current-change': this.$_handlePageCurrentChange
              }
            }}
          />
        </div>
      ) : null
    },
    // 改变表格每页条数发生改变
    $_handlePageSizeChange(pageSize) {
      this.$emit('update:pageSize', pageSize)
    },
    // 表格页码发生改变
    $_handlePageCurrentChange(currentPage) {
      this.$emit('update:currentPage', currentPage)
      this.$emit('page-change', {
        currentPage
      })
    },
    $_renderTable(h) {
      const { data } = this
      const originTableProps = Object.keys(tableProps).reduce(
        (result, item) => {
          result[item] = this[item]
          return result
        },
        {}
      )
      const props = {
        ...originTableProps,
        ...this.$attrs
      }
      console.log(originTableProps, props)
      const table = (
        <div class="cm-table__container">
          <Table
            data={data}
            border
            {...{
              props: {
                ...props
              }
            }}
          />
        </div>
      )
      return table
    }
  },
  render(h) {
    const table = this.$_renderTable(h)
    const page = this.$_renderPage(h)
    return (
      <div class="cm-table">
        {table}
        {page}
      </div>
    )
  }
}
