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
            key: '3',
            name: 'Hỗ trợ sinh viên tại Lab nghiên cứu',
            progressValue: 60,
            deadline: '2024-07-20',
            prioritize: 'Low',
            description: 'Hỗ trợ thực hành thí nghiệm, giải đáp thắc mắc',
            target: '10',
            unit: 'ngày',
            achieved: '6',
            type: 'Sinh hoạt',
            status: 'uncompleted'
        },
        {
            key: '5',
            name: 'Giảng dạy môn Giao diện và trải nghiệm người dùng',
            progressValue: 84,
            deadline: '2024-06-24',
            prioritize: 'High',
            description: 'Thời gian,địa điểm trên trang Quản Lý Đào tạo',
            target: '50',
            unit: 'giờ',
            achieved: '42',
            type: 'Giảng dạy',
            status: 'uncompleted'
        },
        {
            key: '8',
            name: 'Tham gia hội nghị chuyên môn tại Trường công nghệ thông tin và truyền thông Đại học Bách Khoa Hà Nội',
            progressValue: 67,
            deadline: '2024-07-10',
            prioritize: 'High',
            description: 'Lịch theo Trường thông báo',
            target: '3',
            unit: 'ngày',
            achieved: '2',
            type: 'Nghiên Cứu',
            status: 'uncompleted'
        },
        {
            key: '12',
            name: 'Viết bài báo nộp về tạp chí khoa học dành cho lĩnh vực phát triển phần mềm ',
            progressValue: 50,
            deadline: '2024-07-21',
            prioritize: 'Medium',
            description: 'Trí tuệ nhân tạo và học máy; Xử lý ngôn ngữ tự nhiên, phát triển phần mềm nguồn mở',
            target: '2',
            unit: 'bài',
            achieved: '1',
            type: 'Nghiên Cứu',
            status: 'uncompleted'
        },
        {
            key: '13',
            name: 'Tham gia tổ chức hội thảo khoa học định kì tại Lab',
            progressValue: 50,
            deadline: '2024-06-30',
            prioritize: 'Medium',
            description: 'Cho sinh viên báo cáo tiến độ, góp ý đánh giá. Địa điểm B1-201; Thời gian 18h00-21h00 vào 2 ngày 2024-04-15, 2024-06-30',
            target: '2',
            unit: 'ngày',
            achieved: '1',
            type: 'Sinh hoạt',
            status: 'uncompleted'
        },
        {
            key: '14',
            name: 'Giảng dạy môn Kỹ Thuật Phần Mềm',
            progressValue: 83,
            deadline: '2024-06-21',
            prioritize: 'High',
            description: 'Thời gian,địa điểm trên trang Quản Lý Đào tạo',
            target: '48',
            unit: 'giờ',
            achieved: '40',
            type: 'Giảng dạy',
            status: 'uncompleted'
        },
        {
            key: '15',
            name: 'Giảng dạy môn Nhập môn công nghệ phần mềm',
            progressValue: 88,
            deadline: '2024-06-20',
            prioritize: 'High',
            description: 'Thời gian,địa điểm trên trang Quản Lý Đào tạo',
            target: '45',
            unit: 'giờ',
            achieved: '40',
            type: 'Giảng dạy',
            status: 'uncompleted'
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
