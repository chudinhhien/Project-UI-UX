import { BellOutlined } from '@ant-design/icons';
import { Avatar, Badge } from "antd";

function NotificationButton(props) {
  return (
    <>

      <Badge count={5} className={props.className}>
        <Avatar size={32} style={{backgroundColor: "#F5F7FA"}}>
          <BellOutlined style={{color: "red"}}/>
        </Avatar>
      </Badge>

    </>
  )
}

export default NotificationButton;