import React from 'react'
import { Card, Avatar } from 'antd';
import { GithubOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons'

export default function Cards(props) {
	const { Meta } = Card;
	console.log("props.im", props.im)
	return (
		<div>
			<Card
				hoverable
				style={{ width: 300 }}
				cover={
					<img
						alt="example"
						src={props.img}
					/>
				}
				actions={[
					<GithubOutlined />,
					<FacebookOutlined />,
					<TwitterOutlined />
				]}
			>
				<Meta
					avatar={<Avatar src={props.img} />}
					title={props.name}
					description={props.des}
				/>
			</Card>
		</div>
	)
}