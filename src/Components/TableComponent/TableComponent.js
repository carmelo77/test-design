import React, { useState } from 'react';
import { Table, Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import "./TableComponent.scss";

export default function TableComponent(props) {
	const { columns, data } = props;

	const [selectedRowKeys, setSelectedRowKeys] = useState([]);

	const onSelectChange = (selectedRows) => {
    console.log('selectedRowKeys changed: ', selectedRows);
    setSelectedRowKeys({ selectedRows });
  };

	const rowSelection = {
		setSelectedRowKeys,
    onChange: onSelectChange,
		selections: [
			Table.SELECTION_ALL
		],
	};

	return (
		<>
			<div className="delete-frame">
				<Checkbox className="delete-all" />
				<DeleteOutlined /> {'\u00A0'} Eliminar
			</div>
			<Table 
				rowSelection={rowSelection} 
				columns={columns} 
				dataSource={data} 
				pagination={{ 
					pageSize: 10,
					showTotal: (total) => `Mostrando 10 pacientes de ${total}`
				}} 
			/>
		</>
	)
}
