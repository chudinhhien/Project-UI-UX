import {
  UploadOutlined,
  HomeFilled,
  VideoCameraOutlined,
  SettingFilled
} from '@ant-design/icons';
export const item = [
  {
    key: '1',
    icon: <HomeFilled />,
    label: 'Dashboard',
    url: '/dashboard'
  },
  {
    key: '2',
    icon: <VideoCameraOutlined />,
    label: 'Manage KPI',
    url: '/manage-kpi'
  },
  {
    key: '3',
    icon: <UploadOutlined />,
    label: 'Tracking',
    url: 'tracking'
  },
  {
    key: '4',
    icon: <SettingFilled />,
    label: 'Setting',
    url: 'setting'
  }
]