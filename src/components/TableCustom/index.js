import { RightOutlined, DownOutlined } from '@ant-design/icons';
import { Progress, Table } from 'antd';
import React from 'react';
import './TableCustom.scss'; // Ensure to create and import the CSS file

function TableCustom() {
  const [expandedRowKeys, setExpandedRowKeys] = React.useState([]);

  const toggleExpand = (key) => {
    setExpandedRowKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Progress',
      dataIndex: 'progress',
    },
    {
      title: 'Deadline',
      dataIndex: 'deadline',
      className: 'ant-table-cell-deadline', // Add className for targeting in CSS
    },
    {
      title: 'Ưu tiên',
      dataIndex: 'prioritize',
      className: 'ant-table-cell-prioritize', // Add className for targeting in CSS
    },
    {
      title: '',
      dataIndex: 'expand',
      render: (_, record) => (
        <span className="expand-icon" onClick={() => toggleExpand(record.key)}>
          {expandedRowKeys.includes(record.key) ? <DownOutlined /> : <RightOutlined />}
        </span>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Học từ vựng N2',
      progress: <Progress percent={100} size="small" />,
      deadline: '01/06/2024',
      prioritize: 'Trung bình',
      description: 'This is the detailed description of the task Học từ vựng N2.',
    },
    {
      key: '2',
      name: 'Task 2',
      progress: <Progress percent={50} size="small" />,
      deadline: '10/07/2024',
      prioritize: 'Cao',
      description: 'This is the detailed description of Task 2.',
    },
  ];

  const expandedRowRender = (record) => {
    return <p>{record.description}</p>;
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      expandable={{
        expandedRowRender,
        expandedRowKeys,
        onExpand: (expanded, record) => toggleExpand(record.key),
        expandIconColumnIndex: -1, // Disable default expand icon
      }}
    />
  );
}

export default TableCustom;
