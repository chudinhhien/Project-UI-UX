import { RightOutlined, DownOutlined, SearchOutlined } from '@ant-design/icons';
import { Progress, Table, Input, Button, Space } from 'antd';
import React, { useState } from 'react';

function TableCustomOne() {
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
            key: '1',
            name: 'Chuẩn bị bài giảng cho môn Giao diện và trải nghiệm người dùng',
            progressValue: 100,
            deadline: '2024-02-01',
            prioritize: 'High',
            description: 'Soạn tài liệu học liệu, soạn bài giảng, soạn các bài tập hướng dẫn thực hành',
            target: '20',
            unit: 'bài',
            achieved: '20',
            type: 'Giảng dạy',
            status: 'completed'
        },
        {
            key: '2',
            name: 'Tham gia hoạt động nghiên cứu trực tuyến ',
            progressValue: 100,
            deadline: '2024-05-25',
            prioritize: 'Medium',
            description: 'Tham gia qua Microsort Teams. Thời gian: 14h00-17h30. Link tham gia: LINK',
            target: '1',
            unit: 'ngày',
            achieved: '1',
            type: 'Nghiên Cứu',
            status: 'completed'
        },
        {
            key: '4',
            name: 'Tham gia tư vấn tuyển sinh cho Đại học Bách Khoa',
            progressValue: 100,
            deadline: '2023-05-10',
            prioritize: 'Medium',
            description: 'Địa điểm: Sân ngã ba, Thời gian:9h30-12h00 ngày 2023-05-10',
            target: '1',
            unit: 'ngày',
            achieved: '1',
            type: 'Phục Vụ',
            status: 'completed'
        },
        {
            key: '6',
            name: 'Chuẩn bị tài liệu giảng dạy cho môn học Kỹ thuật phần mềm',
            progressValue: 100,
            deadline: '2024-02-02',
            prioritize: 'High',
            description: 'Soạn đề bài bài tập lớn, Slide',
            target: '25',
            unit: 'bài',
            achieved: '25',
            type: 'Giảng dạy',
            status: 'completed'
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

export default TableCustomOne;
