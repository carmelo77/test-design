import React from 'react';
import { Button } from 'antd';
import { SearchOutlined, InfoCircleOutlined, AccountBookOutlined } from '@ant-design/icons';

import "./MainComponent.scss";

/** Components */
import TableComponent from '../TableComponent';

export default function MainComponent() {

	const columns = [
		{
			title: 'Nro. de historia',
			dataIndex: 'history_number',
		},
		{
			title: 'DNI/CE',
			dataIndex: 'dni',
		},
		{
			title: 'Nombres',
			dataIndex: 'names',
		},
		{
			title: 'Apellidos',
			dataIndex: 'lastnames',
		},
		{
			title: 'Telefono',
			dataIndex: 'phone',
		},
		{
			title: 'Correo',
			dataIndex: 'mail',
		},
		{
			title: 'Citas program.',
			dataIndex: 'quotes',
		},
		{
			title: 'Usuario que registró',
			dataIndex: 'user_registered',
		},
		{
			title: 'Fecha registro',
			dataIndex: 'date_registered',
		},
	];

	const data = [
		{
			key: 1,
			history_number: '087999',
			dni: '46567890',
			names: 'Luzio Luis',
			lastnames: 'Cabrera Herrera',
			phone: '987789654',
			mail: 'santive@gmail.com',
			quotes: <AccountBookOutlined />,
			user_registered: 'Jesus Alvarado Rios',
			date_registered: '10 Jul 2020'
		},
		{
			key: 2,
			history_number: '328004',
			dni: '46567890',
			names: 'Santiago Sebastian',
			lastnames: 'Santibañez Saavedra',
			phone: '987789654',
			mail: 'santive@gmail.com',
			quotes: <AccountBookOutlined />,
			user_registered: 'Katerine Rios Muñoz',
			date_registered: '20 May 1990'
		},
		{
			key: 3,
			history_number: '087999',
			dni: '46567890',
			names: 'Guido Cesar',
			lastnames: 'Sosa Reyes',
			phone: '987789654',
			mail: 'santive@gmail.com',
			quotes: <AccountBookOutlined />,
			user_registered: 'Manuel Saavedra',
			date_registered: '10 Jul 2020'
		},
		{
			key: 4,
			history_number: '087999',
			dni: '46567890',
			names: 'Ly Cynthia',
			lastnames: 'Alvarez de León',
			phone: '987789654',
			mail: 'santive@gmail.com',
			quotes: <AccountBookOutlined />,
			user_registered: 'Bruno Conislla Lopez',
			date_registered: '10 Jul 2020'
		},
		{
			key: 5,
			history_number: '087999',
			dni: '46567890',
			names: 'Carmen Liz',
			lastnames: 'Castillo Contreras',
			phone: '987789654',
			mail: 'santive@gmail.com',
			quotes: <AccountBookOutlined />,
			user_registered: 'Jesus Alvarado Rios',
			date_registered: '10 Jul 2020'
		},
		{
			key: 6,
			history_number: '087999',
			dni: '46567890',
			names: 'Jorge Luis',
			lastnames: 'Díaz Duarte',
			phone: '987789654',
			mail: 'santive@gmail.com',
			quotes: <AccountBookOutlined />,
			user_registered: 'Manuel Saavedra',
			date_registered: '10 Jul 2020'
		},
		{
			key: 7,
			history_number: '087999',
			dni: '46567890',
			names: 'Luisa Lucy',
			lastnames: 'Flores Espinoza',
			phone: '987789654',
			mail: 'santive@gmail.com',
			quotes: <AccountBookOutlined />,
			user_registered: 'Bruno Conislla Lopez',
			date_registered: '10 Jul 2020'
		},
		{
			key: 8,
			history_number: '087999',
			dni: '46567890',
			names: 'Danna Paola',
			lastnames: 'Portillo Pineda',
			phone: '987789654',
			mail: 'santive@gmail.com',
			quotes: <AccountBookOutlined />,
			user_registered: 'Beatriz Lopez Quesada',
			date_registered: '10 Jul 2020'
		},
		{
			key: 9,
			history_number: '087999',
			dni: '46567890',
			names: 'Cesar Joaquin',
			lastnames: 'Rojas Salazar',
			phone: '987789654',
			mail: 'santive@gmail.com',
			quotes: <AccountBookOutlined />,
			user_registered: 'Jesus Alvarado Rios',
			date_registered: '10 Jul 2020'
		},
		{
			key: 10,
			history_number: '087999',
			dni: '46567890',
			names: 'Yeimi Daniela',
			lastnames: 'Torres Vargas',
			phone: '987789654',
			mail: 'santive@gmail.com',
			quotes: <AccountBookOutlined />,
			user_registered: 'Manuel Saavedra',
			date_registered: '10 Jul 2020'
		},
		
	];

	return (
		<div className="main-component">
			<div className="head-info">
				<div className="info--text">
					<div>
						<InfoCircleOutlined /> {'\u00A0'}
						Toda es informativo para editar, agregar mas información realizar por el SIC
					</div>
				</div>
				<div className="breadcrumb">
					Inicio <span style={{ fontWeight: 'bold' }}> {'>'} Pacientes</span>
				</div>
				
				<div className="main-title">
					Pacientes
				</div>
				<div className="main-subtitle">
					A continuación podrás ver la lista de pacientes agendados.
				</div>
	
				<div className="search-wrapper">
					<div className="search-left">
						<SearchOutlined />
					</div>
					<input type="text" className="search-input" placeholder="Buscar por DNI, Nombre, Apellido" />
					<Button className="circle-search" shape="circle" icon={<SearchOutlined />} size="middle" />
				</div>
			</div>

			<div className="table">
				<TableComponent columns={columns} data={data} />
			</div>
		</div>
	)
}
