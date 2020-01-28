import { useComponent } from '@flow-ui/whale'
import React, { forwardRef, RefForwardingComponent,useRef, useImperativeHandle, useState } from 'react'
import styles from './styles'
import Types from './types'
import TableRow from './TableRow'
import TableHeadCell from './TableHeadCell'
import TableFoot from './TableFoot'

type Ref = Types.TableRef

const Table: RefForwardingComponent<Ref, Types.Props> = (props, ref) => {

    const tableRef = useRef<HTMLTableElement>(null)
    const { cs, attributes, events } = useComponent('Table', { props, styles })
    const { columns, pagination } = props
    const [currentPage, setCurrentPage] = useState(1)
    const [reloadData, reload] = useState(false)
    const [sort, setSort] = useState<Types.TableSortObject>({
        key: '',
        sort: 'ASC'
    })

    let dc: Types.DataCollection[] = props.data.map(row => {
        const isCellModify: Types.DataCollection['isCellModify'] = {}
        columns.forEach(column => {
            isCellModify[column.key] = false
        })
        return {
            row,
            isExpand: false,
            isVisible: true,
            isCellModify,
            setModifyState: {}
        }
    })

    const columnSort = (column: Types.TableColumn) => {
        if (column.sort) {
            dc = dc.sort((a, b) => {
                if (column.sort === 'ASC') {
                    if (typeof a.row[column.key] === 'string') {
                        return a.row[column.key].localeCompare(b.row[column.key])
                    } else {
                        return a.row[column.key] - b.row[column.key]
                    }
                } else {
                    if (typeof b.row[column.key] === 'string') {
                        return b.row[column.key].localeCompare(a.row[column.key])
                    } else {
                        return b.row[column.key] - a.row[column.key]
                    }
                }
            })
        }
    }

    const getCellContext: Ref['getCellContext'] = (index, key) => {

        if (!dc[index]?.row) {
            return null
        }
        
        return {
            key,
            index: index,
            row: dc[index].row,
            column: columns.find(column => column.key === key) || null,
            value: dc[index].row[key],
            isExpand: dc[index].isExpand,
            isModify: dc[index].isCellModify[key],
            isVisible: dc[index].isVisible,
            setExpand: (content) => setExpand(index, content),
            setModify: (modify, kkey = key) => setModify(modify, index, kkey),
            reloadData: () => reload(!reloadData)
        }
    }

    const setExpand: Ref['setExpand'] = (index, content) => {
        if (dc[index]) {
            dc[index].setExpandComponent?.(content)
            return true
        }
        return false
    } 

    const setModify: Ref['setModify'] = (modify, index, key) => {
        if (dc[index]) {
            if (key !== undefined) {
                if (dc[index].row.hasOwnProperty(key)) {
                    dc[index].setModifyState[key]?.(modify)
                    return true
                }
            } else {
                Object.keys(dc[index].isCellModify).forEach(key => {
                    dc[index].setModifyState[key]?.(modify)
                })
                return true
            }
        }
        return false
    }

    /**
     * Handle refs
     */
    useImperativeHandle(ref, () => ({
        getCellContext,
        setExpand,
        setModify,
        ...tableRef.current
    }))

    /**
     * Sorting data
     */
    if (sort.key) {
        const sortColumn = columns.find(column => column.key === sort.key)
        if (sortColumn) {
            columnSort({
                ...sortColumn,
                ...sort
            })
        }
    } else {
        for (const column of columns) {
            columnSort(column)
        }
    }

    /**
     * Render Data
     */
    return (
        <table {...attributes} {...events.all} ref={tableRef} css={cs.container}>
            <thead>
                <tr
                    children={
                        columns.map((column, colIndex) => (
                            <TableHeadCell
                                key={colIndex}
                                styles={cs}
                                column={column}
                                setSort={setSort}
                            />
                        ))
                    }
                />
            </thead>
            <tbody
                children={
                    dc.map((dcItem, rowIndex) => {
                        if (pagination) {
                            const { pageSize } = pagination
                            const startIndex = pageSize * (currentPage - 1)
                            if (startIndex > rowIndex || rowIndex >= currentPage * pageSize) {
                                return null
                            }
                            
                        }
                        return (
                            <TableRow
                                dcItem={dcItem}
                                getCellContext={getCellContext}
                                styles={cs}
                                key={rowIndex}
                                columns={columns}
                                rowIndex={rowIndex}
                            />
                        )
                    })
                }
            />
            <TableFoot
                dc={dc}
                styles={cs}
                columns={columns}
                pagination={pagination}
                onPageChange={setCurrentPage}
            />
        </table>
    )
}

export default forwardRef(Table)