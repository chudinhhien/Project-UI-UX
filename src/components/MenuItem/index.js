import {
  UploadOutlined,
  HomeFilled,
  VideoCameraOutlined,
  SettingFilled,
  CalendarOutlined
} from '@ant-design/icons';
const url = '';
export const item = [
  {
    key: '1',
    icon: <HomeFilled />,
    label: 'Dashboard',
    url: url + '/dashboard'
  },
  {
    key: '2',
    icon: <VideoCameraOutlined />,
    label: 'Manage KPI',
    url: url + '/manage-kpi'
  },
  {
    key: '3',
    icon: <UploadOutlined />,
    label: 'Tracking',
    url: url + '/tracking'
  },
  {
    key: '4',
    icon: <SettingFilled />,
    label: 'Setting',
    url: url + '/setting'
  },
  {
    key: '5',
    icon: <CalendarOutlined />,
    label: 'Canlendar',
    url: url + '/canlendar'
  }
]