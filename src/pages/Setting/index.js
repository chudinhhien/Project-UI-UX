import { Tabs } from "antd";
import './Setting.scss'

const items = [
  {
    key: '1',
    label: 'Edit Profile',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Security',
    children: 'Content of Tab Pane 2',
  }
]


function Setting() {

  return (
    <>
      <div className="custom-container">
        <Tabs defaultActiveKey="1" items={items} style={{ backgroundColor: '#ffffff', marginTop: '30px', borderRadius: '25px', padding: '30px' }}/>
      </div>

    </>
  )
}

export default Setting;