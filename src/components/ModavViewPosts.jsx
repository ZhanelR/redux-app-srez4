import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeInfoPopup } from "../slices/postsSlice"
import { Button, Modal } from 'antd';

const ModalViewPosts = ({id, title, body}) => {
  const isShowInfoPopup = useSelector(state => state.posts.isShowInfoPopup) 
  const dispatch = useDispatch()

  const handleOk = () => {
    dispatch(closeInfoPopup());
  };

  const handleCancel = () => {
    dispatch(closeInfoPopup());
  }; //закрытие отправляется в состояние в стор, поэтому нужно обернуть в диспатч 

  console.log(id, title, body);
  return (
    <>
      <Modal title="Basic Modal" open={isShowInfoPopup} onOk={handleOk} onCancel={handleCancel}>
        <p>{id}</p>
        <p>{title}</p>
        <p>{body}</p>
      </Modal>
    </>
  );
} 

export default ModalViewPosts