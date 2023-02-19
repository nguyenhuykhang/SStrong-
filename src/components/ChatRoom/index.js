import React, { useContext } from 'react';
import { Row, Col } from 'antd';
import Sidebar from './Sidebar';
import { AuthContext , AuthProvider} from '../../Context/AuthProvider';
import Demo from './demo';



export default function ChatRoom() {
  const {user} = useContext(AuthContext)
  return (
    <>
    <div style={{height: "50px", backgroundColor: "#FEBE10"}}></div>
    <div>
      <Row>
        <Col span={6}>
          
        <AuthContext.Provider value={user}><Sidebar /></AuthContext.Provider  >
        </Col>
        
        <Col className='onlydiv' span={18}>
          <Demo/>
        </Col>
      </Row>
    </div>
    </>
  );
}