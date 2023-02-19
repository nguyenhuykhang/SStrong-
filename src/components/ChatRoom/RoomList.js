import React from 'react'
import { Collapse, Typography } from 'antd'
import { Link } from 'react-router-dom'
import ReactiveButton from 'reactive-button';

const {Panel} = Collapse;


export default function RoomList() {
  return (
    <div>
      <Collapse ghost defaultActiveKey={['1']}>
      <Panel header = "Friends Online" key = "1">
        
        <Typography.Link>Minh Pham</Typography.Link>
      </Panel>
      </Collapse>
    </div>
  )
}
