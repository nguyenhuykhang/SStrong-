import { Avatar, Typography } from 'antd'
import React from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const WrapperStyled = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '12px 16px',
  borderBottom: '1px solid #002244',
}
const username = {
    color: 'black',
    marginLeft: '5px',
}
export default function UserInfo(props) {
  const user = React.useContext(AuthContext)
  return (
    <div style={WrapperStyled}>
      <div>
        <Avatar src="https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/328525247_479655560844818_6941184682962083192_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tNM2IbHb9yMAX8l93cI&_nc_ht=scontent-ord5-1.xx&oh=00_AfAgfycGfQ6qYQZB_N-6o7JdMGHJN0cnUUY9Mlo5ZuEApg&oe=63F70A84"></Avatar>
        <Typography.Text style={username}>{props.value}</Typography.Text>
      </div>
    </div>
  )
}
