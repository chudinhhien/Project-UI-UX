import { RightOutlined, DownOutlined, SearchOutlined } from '@ant-design/icons';
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

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-GB', options).replace(/\//g, '/');
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            filteredValue: [searchText],
            onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
            render: (text) => (
                <span className="name-column" title={text}>
                    {text}
                </span>
            ),
            width: '50%',
        },
        {
            title: 'Progress',
            dataIndex: 'progress',
            sorter: (a, b) => a.progressValue - b.progressValue,
            sortOrder: sortedInfo.columnKey === 'progress' && sortedInfo.order,
            render: (_, record) => (
                <Progress
                    percent={record.progressValue}
                    size="small"
                    status={record.status === 'uncompleted' ? 'normal' : 'normal'}
                    strokeColor={
                        record.status === 'completed'
                            ? 'green'
                            : record.status === 'doing'
                            ? 'blue'
                            : 'red'
                    }
                    format={() => `${record.progressValue}%`}
                />
            ),
            width: '20%',
        },
        {
            title: 'Deadline',
            dataIndex: 'deadline',
            sorter: (a, b) => new Date(a.deadline) - new Date(b.deadline),
            sortOrder: sortedInfo.columnKey === 'deadline' && sortedInfo.order,
            render: (text) => formatDate(text),
            className: 'ant-table-cell-deadline',
            width: '15%',
        },
        {
            title: 'Priority',
            dataIndex: 'prioritize',
            sorter: (a, b) => a.prioritize.localeCompare(b.prioritize),
            sortOrder: sortedInfo.columnKey === 'prioritize' && sortedInfo.order,
            className: 'ant-table-cell-prioritize',
            width: '15%',
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
            key: '7',
            name: 'Tổ chức họp lớp định kỳ lớp sinh viên quản lý',
            progressValue: 0,
            deadline: '2024-06-30',
            prioritize: 'Medium',
            description: 'VIỆT NHẬT K66 (01-03), ICT K67 (01-03)',
            target: '6',
            unit: 'lớp',
            achieved: '0',
            type: 'Phục Vụ',
            status: 'upcomming'
        },
        {
            key: '9',
            name: 'Đánh giá và chấm điểm cho môn học Giao diện và trải nghiệm người dùng',
            progressValue: 0,
            deadline: '2024-08-01',
            prioritize: 'High',
            description: 'Đánh giá kết quả học tập của sinh viên qua các bài kiểm tra, bài tập lớn, chuyên cần của 3 lớp 147731, 147732, 147733',
            target: '3',
            unit: 'lớp',
            achieved: '0',
            type: 'Đánh giá học tập cho sinh viên',
            status: 'upcomming'
        },
        {
            key: '10',
            name: 'Đánh giá và chấm điểm cho môn học Kỹ thuật phần mềm',
            progressValue: 0,
            deadline: '2024-08-01',
            prioritize: 'High',
            description: 'Đánh giá kết quả học tập của sinh viên qua các bài kiểm tra, bài tập lớn, chuyên cần của 3 lớp 147749, 147750, 147751',
            target: '3',
            unit: 'lớp',
            achieved: '0',
            type: 'Đánh giá học tập cho sinh viên',
            status: 'upcomming'
        },
        {
            key: '11',
            name: 'Đánh giá và chấm điểm cho môn học Nhập môn công nghệ phần mềm',
            progressValue: 0,
            deadline: '2024-08-01',
            prioritize: 'High',
            description: 'Đánh giá kết quả học tập của sinh viên qua các bài kiểm tra, bài tập lớn, chuyên cần của 3 lớp 147648, 147649, 147550',
            target: '3',
            unit: 'lớp',
            achieved: '0',
            type: 'Đánh giá học tập cho sinh viên',
            status: 'upcomming'
        },
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
                pagination={{ pageSize: 5 }} // Pagination settings
            />
            <style>
                {`
                    .name-column {
                        display: block;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        width: 450px; // Make the name column occupy 100% width
                    }
                `}
            </style>
        </div>
    );
}

export default TableCustomTwo;
