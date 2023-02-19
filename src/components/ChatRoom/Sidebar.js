import React, { useState } from 'react';
import { Row, Col } from 'antd';
import UserInfo from './UserInfo';
import RoomList from './RoomList';
import { random } from 'lodash';
// import styled from 'styled-components';

const SidebarStyled = {
  background: "rgb(240,248,255)",
  border: "1px solid",
  color: "white",
  height: "100vh",
}

export default function Sidebar() {
  const [ten, setTen] = useState(['Nguyen Huy Khang', "Minh Pham"])
  
  let tenthat = ten[Math.floor(Math.random()*ten.length)];
  return (
    <div style={SidebarStyled}>
      <Row>
        <Col span={24}>
          <UserInfo value={tenthat}/>
        </Col>
        <Col span={24}>
          <RoomList />
        </Col>
      </Row>
    </div>
  );
}