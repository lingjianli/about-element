import { Table, Pagination } from 'element-ui'
import './index.scss'
console.log(Table)

export default {
  name: 'CmTable',
  props: {
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
    }
  },
  methods: {
    // 渲染分页
    $_renderPage(h) {
      const { pagination, pageSize, total, currentPage } = this
      return pagination ? (
        <div>
          <Pagination
            total={total}
            currentPage={currentPage}
            pageSize={pageSize}
            layout="total,sizes,prev,pager,next,jumper"
          />
        </div>
      ) : null
    }
  },
  render(h) {
    console.log(33, h)
    const table = this
    const page = this.$_renderPage(h)
    return (
      <div class="cm-table">
        {table}
        {page}
      </div>
    )
  }
}
