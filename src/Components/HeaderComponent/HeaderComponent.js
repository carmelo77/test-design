import React from 'react';
import { Avatar, Button } from 'antd';
import { DownOutlined, } from '@ant-design/icons'

import "./HeaderComponent.scss";

export default function HeaderComponent() {
	return (
		<header className="header-component">
				<h3>
					<div className="header-title">
						Clínica San Felipe - LOGO
					</div>
				</h3>

				<div className="user-wrapper">
					<Avatar size={35}>KR</Avatar>
					<div>
						<h5>Katerine Ríos</h5>
					</div>
					<Button type="text" icon={<DownOutlined />} />
				</div>
		</header>
	)
}
