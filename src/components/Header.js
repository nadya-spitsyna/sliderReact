import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Link from './Link';
import styled from 'styled-components';

const List=styled.ul`
	display: flex; 
	justify-content: space-between;
	align-items: center;
	height: 49px;

`

class Header extends React.Component{
	render(){
		return(

			<Row>
				<Col lg={12}>
				<nav>
					<List>
						<Link link="#" text="Вызов мастера"></Link>
						<Link link="#" text="праайс на ремонт"></Link>
						<Link link="#" text="Наши преимущества"></Link>
						<Link link="#" text="Схема работы"></Link>
						<Link link="#" text="Отзывы клиентов"></Link>
						<Link link="#" text="Примеры работ"></Link>
						<Link link="#" text="Контакты"></Link>
					</List>
				</nav>
				</Col>

			</Row>
		)
	}
}

export default Header 