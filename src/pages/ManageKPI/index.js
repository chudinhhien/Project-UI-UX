// ManageKPI.js
import React, { useState, useEffect } from 'react';
import { Breadcrumb, Button, Col, Form, Row, message } from 'antd';
import { getKpiTypes } from '../../services/kpiTypesService';
import ModalComponent from '../../components/ModalComponent';
import { DndContext, PointerSensor, useSensor } from '@dnd-kit/core';
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Tabs } from 'antd';
import TableCustom from '../../components/TableCustom';

const DraggableTabNode = ({ className, ...props }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: props['data-node-key'],
  });
  const style = {
    ...props.style,
    transform: CSS.Translate.toString(transform),
    transition,
    cursor: 'move',
  };
  return React.cloneElement(props.children, {
    ref: setNodeRef,
    style,
    ...attributes,
    ...listeners,
  });
};

const ManageKPI = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [kpiTypes, setKpiTypes] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [targets, setTargets] = useState([]);

  const [items, setItems] = useState([
    {
      key: '1',
      label: 'Tất cả',
      children: <TableCustom />,
    },
    {
      key: '2',
      label: 'Hoàn thành',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Chưa hoàn thành',
      children: 'Content of Tab Pane 3',
    },
  ]);
  const sensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setItems((prev) => {
        const activeIndex = prev.findIndex((i) => i.key === active.id);
        const overIndex = prev.findIndex((i) => i.key === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };

  const showMessage = (type, content) => {
    messageApi.open({
      type,
      content,
    });
  };

  const handleAddTarget = () => {
    const nameTarget = form.getFieldValue('nameTarget');
    const unit = form.getFieldValue('unit');
    const newTarget = { name: nameTarget, unit: unit };
    setTargets([...targets, newTarget]);
    form.setFieldsValue({ nameTarget: '', unit: '' });
  };

  const handleOk = async () => {
    try {
      const formData = form.getFieldsValue();
      const tableData = targets.map((target, index) => ({ ...target, key: index }));

      const newKpiTypeData = {
        name: formData.name,
        thumbnail: formData.thumbnail,
        description: formData.description,
        target: tableData,
      };

      //await addKpiType(newKpiTypeData);
      setIsOpenModal(false);
      showMessage('success', 'KPI added successfully!');
      //const updatedKpiTypes = await getKpiTypes();
      //setKpiTypes(updatedKpiTypes);
      form.resetFields();
      setTargets([]);
    } catch (error) {
      console.log(error.message);
      showMessage('error', 'Failed to add KPI. Please try again.');
    }
  };

  const handleCancel = () => {
    setIsOpenModal(false);
    form.resetFields();
    setTargets([]);
  };

  useEffect(() => {
    async function fetchKpiTypes() {
      const data = await getKpiTypes();
      setKpiTypes(data);
    }
    fetchKpiTypes();
  }, []);

  return (
    <>
      {contextHolder}
      <div className="custom-container" style={{ backgroundColor: '#E6E5FE' }}>
        <Row justify="space-between" align="middle" style={{ marginTop: '20px', marginBottom: '20px' }}>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item>Manage KPI</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col>
            <Button type="primary" onClick={() => setIsOpenModal(true)}>
              Add KPI
            </Button>
          </Col>
        </Row>

        <Tabs
          items={items}
          renderTabBar={(tabBarProps, DefaultTabBar) => (
            <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
              <SortableContext items={items.map((i) => i.key)} strategy={horizontalListSortingStrategy}>
                <DefaultTabBar {...tabBarProps}>
                  {(node) => (
                    <DraggableTabNode {...node.props} key={node.key}>
                      {node}
                    </DraggableTabNode>
                  )}
                </DefaultTabBar>
              </SortableContext>
            </DndContext>
          )}
        />


        <ModalComponent
          isOpenModal={isOpenModal}
          handleOk={handleOk}
          handleCancel={handleCancel}
          form={form}
          handleAddTarget={handleAddTarget}
          targets={targets}
        />
      </div>
    </>
  );
};

export default ManageKPI;
