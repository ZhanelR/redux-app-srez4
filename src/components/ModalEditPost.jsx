import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, Checkbox, Form, Input } from 'antd';
import {closeEditPopup, updateItem} from "../slices/postsSlice"
import uniqid from 'uniqid';


const ModalEditPost = () => {
  const { isShowEditPopup, currentPost } = useSelector(state => state.posts) 
  const dispatch = useDispatch()
  const handleOk = () => {
    dispatch(closeEditPopup());
  };

  const handleCancel = () => {
    dispatch(closeEditPopup());
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
    post.id = currentPost.id
    dispatch(updateItem(post));
    
  };


//в коде ниже layout в <Form> (на 54 строке) - это дизайн, спрэд так как это объект с 2 полями, можно даже удалить layout 
//name="nest-messages" это имя (идентификатор формы), важно для навешивания на кнопку, особенно если в модалке больше чем й форма
//ф-я onFinish (логика прописана на 40 стр) выпол, когда форма заполнена и отпр, пишем ее в форме, а не в onClick на кнопке, это по правилам форм 
//ф-я onFinish приним объект values (в моем случае это пост), а именно <Form.Item name={['title', 'body']}

  return (
    <>
      <Modal title="Basic Modal" open={isShowEditPopup} onOk={handleOk} onCancel={handleCancel}> 
      <Form 
      //init value
      {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}> 
      <Form.Item
        name={['post', 'title']} //тут записываю объект 
        label="Title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input defaultValue={currentPost.title} />
      </Form.Item>
      
      <Form.Item
        name={['post', 'body']}
        label="Article"
      >
        <Input defaultValue={currentPost.body}/>
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


export default ModalEditPost
