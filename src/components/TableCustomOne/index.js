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
            sorter: (a, b) => a.progressValue - b.progressValue,
            sortOrder: sortedInfo.columnKey === 'progress' && sortedInfo.order,
            render: (_, record) => (
                <Progress
                    percent={record.progressValue}
                    size="small"
                    status={record.status === 'uncompleted' ? 'exception' : 'normal'}
                    strokeColor={
                        record.status === 'completed'
                            ? 'green'
                            : record.status === 'doing'
                            ? 'blue'
                            : 'red'
                    }
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
            deadline: '2024-06-01',
            prioritize: 'High',
            description: 'This is the detailed description of the task Chuẩn bị bài giảng.',
            target: '50',
            achieved: '50',
            type: 'Giảng dạy',
            status: 'completed'
        },
        {
            key: '2',
            name: 'Tham gia hội thảo quốc tế',
            progressValue: 0,
            deadline: '2024-08-15',
            prioritize: 'Medium',
            description: 'This is the detailed description of the task Tham gia hội thảo quốc tế.',
            target: '1',
            achieved: '0',
            type: 'Nghiên Cứu',
            status: 'uncompleted'
        },
        {
            key: '3',
            name: 'Tổ chức câu lạc bộ tiếng Anh',
            progressValue: 60,
            deadline: '2024-07-20',
            prioritize: 'Low',
            description: 'This is the detailed description of the task Tổ chức câu lạc bộ tiếng Anh.',
            target: '10',
            achieved: '6',
            type: 'Sinh hoạt',
            status: 'doing'
        },
        {
            key: '4',
            name: 'Dọn dẹp phòng thí nghiệm',
            progressValue: 100,
            deadline: '2024-06-05',
            prioritize: 'Medium',
            description: 'This is the detailed description of the task Dọn dẹp phòng thí nghiệm.',
            target: '5',
            achieved: '5',
            type: 'Phục Vụ',
            status: 'completed'
        },
        {
            key: '5',
            name: 'Viết báo cáo nghiên cứu',
            progressValue: 30,
            deadline: '2024-06-25',
            prioritize: 'High',
            description: 'This is the detailed description of the task Viết báo cáo nghiên cứu.',
            target: '100',
            achieved: '30',
            type: 'Nghiên Cứu',
            status: 'doing'
        },
        {
            key: '6',
            name: 'Chuẩn bị tài liệu cho khóa học mới',
            progressValue: 50,
            deadline: '2024-07-30',
            prioritize: 'High',
            description: 'This is the detailed description of the task Chuẩn bị tài liệu cho khóa học mới.',
            target: '200',
            achieved: '100',
            type: 'Giảng dạy',
            status: 'doing'
        },
        {
            key: '7',
            name: 'Tổ chức buổi tư vấn sinh viên',
            progressValue: 33,
            deadline: '2024-09-01',
            prioritize: 'Medium',
            description: 'This is the detailed description of the task Tổ chức buổi tư vấn sinh viên.',
            target: '30',
            achieved: '10',
            type: 'Phục Vụ',
            status: 'uncompleted'
        },
        {
            key: '8',
            name: 'Tham gia hội nghị chuyên đề',
            progressValue: 80,
            deadline: '2024-07-10',
            prioritize: 'High',
            description: 'This is the detailed description of the task Tham gia hội nghị chuyên đề.',
            target: '1',
            achieved: '0.8',
            type: 'Nghiên Cứu',
            status: 'doing'
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
            />
        </div>
    );
}

export default TableCustomOne;
