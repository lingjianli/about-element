import { Table, Pagination, TableColumn } from 'element-ui'
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
          >
            {this.$_renderAllColumns(h)}
          </Table>
        </div>
      )
      return table
    },
    // 渲染所有表格列，包括序列号和复选框列
    $_renderAllColumns(h) {
      const { columns } = this
      const colNodes = [
        // ...this.$_getSelectionColumn(h),
        // ...this.$_getSequenceColumn(h)
      ]
      colNodes.push(...this.$_renderColumns(h, columns))
      console.log(columns, colNodes)
      return colNodes
    },
    // 复选框列
    $_getSelectionColumn(h) {},
    // 序列号列
    $_getSequenceColumn(h) {},
    // 渲染表格列
    $_renderColumns(h, columns) {
      console.log('render', columns)
      return columns
        .filter(column => {
          const { hidden } = column
          if (hidden !== undefined) {
            if (typeof hidden === 'function') {
              return hidden({
                columns,
                column
              })
            }
            return hidden
          }
          return true
        })
        .map(column => {
          const { useSlot, actions, editable, nests, link } = column
          if (nests && nests.length) {
            return this.$_renderNestColumn(h, column)
          } else if (editable) {
            return this.$_renderEditColumn(h, column)
          } else if (useSlot) {
            return this.$_renderSlotColumn(h, column)
          } else if (actions && actions.length > 0) {
            return this.$_renderActionColumn(h, column)
          } else if (link) {
            return this.$_renderLinkColumn(h, column)
          } else {
            return this.$_renderDefaultColumn(h, column)
          }
        })
    },
    $_renderNestColumn(h, column) {
      console.log(column)
    },
    $_renderEditColumn(h, column) {
      console.log(column)
    },
    $_renderSlotColumn(h, column) {
      console.log(column)
    },
    // 渲染操作列
    $_renderActionColumn(h, column) {
      console.log('actions', column)
      const {
        label,
        actions = [],
        events = {},
        align = 'center',
        width = 120
      } = column
      return (
        <TableColumn
          resizable={false}
          label={label}
          align={align}
          width={width}
          {...{
            scopedSlots: {
              default: ({ row, column, $index }) => {
                return this.$_renderBottons(
                  h,
                  actions,
                  {
                    type: 'text'
                  },
                  null,
                  [row, column, $index]
                )
              }
            },
            on: {
              ...events
            }
          }}
        />
      )
    },
    $_renderLinkColumn(h, column) {
      console.log(column)
    },
    // 渲染默认列
    $_renderDefaultColumn(h, column) {
      const { events = {}, minWidth = '100', ...rest } = column
      return (
        <TableColumn
          minWidth={minWidth}
          {...{
            props: rest,
            on: {
              ...events
            }
          }}
        />
      )
    },
    // 预处理操作按钮
    _preActionButtons(actions, ...args) {
      console.log(actions, args)
      const analyseFunProp = prop => {
        return typeof prop === 'function'
      }
      analyseFunProp
    },
    // 渲染按钮
    // eslint-disable-next-line max-params
    $_renderBottons(h, buttons, props, slot, args) {
      console.log(h, buttons, props, slot, args)
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
