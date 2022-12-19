import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, Checkbox, Form, Input } from 'antd';
import {closeAddPopup, addItem} from "../slices/photosSlice"
import uniqid from 'uniqid';


const ModalAddPhoto = () => {
  const isShowAddPopup = useSelector(state => state.photos.isShowAddPopup) 
  const dispatch = useDispatch()
  const handleOk = () => {
   
  };

  const handleCancel = () => {
    dispatch(closeAddPopup());
  };
  
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */
  const onFinish = ({post}) => {
    post.id = uniqid();
    dispatch(addItem(post));
  };


//в коде ниже layout в <Form> (на 54 строке) - это дизайн, спрэд так как это объект с 2 полями, можно даже удалить layout 
//name="nest-messages" это имя (идентификатор формы), важно для навешивания на кнопку, особенно если в модалке больше чем й форма
//ф-я onFinish (логика прописана на 40 стр) выпол, когда форма заполнена и отпр, пишем ее в форме, а не в onClick на кнопке, это по правилам форм 
//ф-я onFinish приним объект values (в моем случае это пост), а именно <Form.Item name={['title', 'body']}

  return (
    <>
      <Modal title="Basic Modal" open={isShowAddPopup} onOk={handleOk} onCancel={handleCancel}> 
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}> 
      <Form.Item
        name={['post', 'title']}
        label="Title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        name={['post', 'body']}
        label="Article"
      >
        <Input />
      </Form.Item>
     
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit" >
          Отправить
        </Button>
      </Form.Item>
    </Form>
      </Modal>
     
    </>
  );
  }


export default ModalAddPhoto
