import React from 'react';
import { 
	HomeOutlined, 
	UsergroupDeleteOutlined, 
	MedicineBoxOutlined, 
	SubnodeOutlined,
	WalletOutlined } from '@ant-design/icons'

import "./SidebarComponent.scss";

export default function SidebarComponent() {
	return (
		<div className="sidebar-component">
			<div className="sidebar-menu">
					<ul>
						<li>
							<a href="">
								<HomeOutlined />
								<span>Inicio</span>
							</a>
						</li>

						<li>
							<a href="" className="active">
								<UsergroupDeleteOutlined />
								<span>Pacientes</span>
							</a>
						</li>

						<li>
							<a href="">
								<MedicineBoxOutlined /> 
								<span>Médicos</span>
							</a>
						</li>

						<li>
							<a href="">
								<SubnodeOutlined />
								<span>Consultorios</span>
							</a>
						</li>

						<li>
							<a href="">
								<WalletOutlined />
								<span>Agenda</span>
							</a>
						</li>
				</ul>
			</div>
		</div>
	)
}
