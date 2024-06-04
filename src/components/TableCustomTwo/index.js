import { RightOutlined, DownOutlined, SearchOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Progress, Table, Input, Button, Space } from 'antd';
import React, { useState } from 'react';

function TableCustomTwo() {
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
            dataIndex: 'progress',
            sorter: true,
            sortOrder: sortedInfo.columnKey === 'progress' ? sortedInfo.order : null,
            render: (progress) => <Progress percent={progress} size="small" />,
        },
        {
            title: 'Deadline',
            dataIndex: 'deadline',
            sorter: true,
            sortOrder: sortedInfo.columnKey === 'deadline' ? sortedInfo.order : null,
            className: 'ant-table-cell-deadline',
        },
        {
            title: 'Priority',
            dataIndex: 'priority',
            sorter: true,
            sortOrder: sortedInfo.columnKey === 'priority' ? sortedInfo.order : null,
            className: 'ant-table-cell-priority',
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
            key: '2',
            name: 'Tham gia hội thảo quốc tế',
            progress: 0,
            deadline: '15/08/2024',
            priority: 'Medium',
            description: 'This is the detailed description of the task Tham gia hội thảo quốc tế.',
            target: '1',
            achieved: '0',
            type: 'Nghiên Cứu'
        },
        {
            key: '7',
            name: 'Tổ chức buổi tư vấn sinh viên',
            progress: 0,
            deadline: '01/09/2024',
            priority: 'Medium',
            description: 'This is the detailed description of the task Tổ chức buổi tư vấn sinh viên.',
            target: '1',
            achieved: '0',
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
        <>
            <Space style={{ marginBottom: 16 }}>
                <Input
                    placeholder="Search by name"
                    value={searchText}
                    onChange={handleSearch}
                    style={{ width: 200 }}
                    suffix={<SearchOutlined />}
                />
                <Button onClick={() => handleSort('progress')}>
                    Sort by Progress {sortedInfo.columnKey === 'progress' && sortedInfo.order === 'ascend' ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                </Button>
                <Button onClick={() => handleSort('deadline')}>
                    Sort by Deadline {sortedInfo.columnKey === 'deadline' && sortedInfo.order === 'ascend' ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                </Button>
                <Button onClick={() => handleSort('priority')}>
                    Sort by Priority {sortedInfo.columnKey === 'priority' && sortedInfo.order === 'ascend' ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                </Button>
            </Space>
            <Table
                columns={columns}
                dataSource={data}
                onChange={onChange}
                expandable={{
                    expandedRowRender,
                    expandedRowKeys,
                    onExpand: (expanded, record) => toggleExpand(record.key),
                    expandIconColumnIndex: -1,
                }}
            />
        </>
    );
}

export default TableCustomTwo;
