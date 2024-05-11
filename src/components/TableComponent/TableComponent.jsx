import { Table } from 'antd';
import React, { useState } from 'react'
import Loading from '../../components/LoadingComponent/Loading'
import { Excel } from "antd-table-saveas-excel";
import { useMemo } from 'react';
import { render } from '@testing-library/react';

const TableComponent = (props) => {
  const { selectionType = 'checkbox', data = [], isPending = false, columns =[]} = props
  const [rowSelectedKeys, setRowSelectedKeys] = useState([])
  // const newColumnExport = useMemo(() => {
  //   const arr = columns?.filter((col) => col.dataIndex !== 'action')
  //   return arr
  // }, [columns])

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setRowSelectedKeys(selectedRowKeys)
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  // const handleDeleteAll = () => {
  //   handleDelteMany(rowSelectedKeys)
  // }
  // const exportExcel = () => {
  //   const excel = new Excel();
  //   excel
  //     .addSheet("test")
  //     .addColumns(newColumnExport)
  //     .addDataSource(dataSource, {
  //       str2Percent: true
  //     })
  //     .saveAs("Excel.xlsx");
  // };
  
  return (
    <Loading isPending={isPending}>
      {/* {!!rowSelectedKeys.length && (
        <div style={{
          background: '#1d1ddd',
          color: '#fff',
          fontWeight: 'bold',
          padding: '10px',
          cursor: 'pointer'
        }}
          onClick={handleDeleteAll}
        >
          Xóa tất cả
        </div>
      )} */}
      {/* <button onClick={exportExcel}>Export Excel</button> */}
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        {...props}
      />
    </Loading>
  )
}

export default TableComponent