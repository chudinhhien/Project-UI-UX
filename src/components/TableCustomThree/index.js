import { RightOutlined, DownOutlined, SearchOutlined } from '@ant-design/icons';
import { Progress, Table, Input, Button, Space } from 'antd';
import React, { useState } from 'react';

function TableCustomThree() {
    const [expandedRowKeys, setExpandedRowKeys] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [sortedInfo, setSortedInfo] = useState({});

    const toggleExpand = (key) => {
        setExpandedRowKeys((prev) =>
            prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
        );
    };

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    const handleSort = (sortKey) => {
        const order = sortedInfo.order === 'ascend' ? 'descend' : 'ascend';
        setSortedInfo({ columnKey: sortKey, order });
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            filteredValue: [searchText],
            onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
        },
        {
            title: 'Progress',
            dataIndex: 'progressValue',
            sorter: (a, b) => a.progressValue - b.progressValue,
            sortOrder: sortedInfo.columnKey === 'progress' && sortedInfo.order,
            render: (progressValue) => (
                <Progress 
                    percent={progressValue} 
                    size="small" 
                    status={progressValue < 100 ? 'exception' : 'normal'} 
                    strokeColor={progressValue === 100 ? 'green' : undefined}
                />
            ),
        },
        {
            title: 'Deadline',
            dataIndex: 'deadline',
            sorter: (a, b) => new Date(a.deadline) - new Date(b.deadline),
            sortOrder: sortedInfo.columnKey === 'deadline' && sortedInfo.order,
            className: 'ant-table-cell-deadline',
        },
        {
            title: 'Priority',
            dataIndex: 'prioritize',
            sorter: (a, b) => a.prioritize.localeCompare(b.prioritize),
            sortOrder: sortedInfo.columnKey === 'prioritize' && sortedInfo.order,
            className: 'ant-table-cell-prioritize',
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
            name: 'Chuẩn bị bài giảng',
            progressValue: 100,
            deadline: '01/06/2024',
            prioritize: 'High',
            description: 'This is the detailed description of the task Chuẩn bị bài giảng.',
            target: '50',
            achieved: '50',
            type: 'Giảng dạy'
        },
        {
            key: '4',
            name: 'Dọn dẹp phòng thí nghiệm',
            progressValue: 100,
            deadline: '05/06/2024',
            prioritize: 'Medium',
            description: 'This is the detailed description of the task Dọn dẹp phòng thí nghiệm.',
            target: '5',
            achieved: '5',
            type: 'Phục Vụ'
        }
    ];

    const expandedRowRender = (record) => {
        return <p>{record.description}</p>;
    };

    const onChange = (pagination, filters, sorter, extra) => {
        setSortedInfo(sorter);
    };

    return (
        <div>
            <Space style={{ marginBottom: 16 }}>
                <Input
                    placeholder="Search by name"
                    prefix={<SearchOutlined />}
                    value={searchText}
                    onChange={handleSearch}
                    style={{ width: 200 }}
                />
                <Button onClick={() => handleSort('progress')}>Sort by Progress</Button>
                <Button onClick={() => handleSort('deadline')}>Sort by Deadline</Button>
                <Button onClick={() => handleSort('prioritize')}>Sort by Priority</Button>
            </Space>
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
        </div>
    );
}

export default TableCustomThree;
