import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeInfoPopup } from "../slices/postsSlice"
import { Button, Modal } from 'antd';

const ModalViewPost = () => {
  const {isShowInfoPopup, currentPost} = useSelector(state => state.posts)
  const dispatch = useDispatch()

  const handleOk = () => {
    dispatch(closeInfoPopup());
  };

  const handleCancel = () => {
    dispatch(closeInfoPopup());
  }; //закрытие отправляется в состояние в стор, поэтому нужно обернуть в диспатч 

  return (
    <>
      <Modal title="Basic Modal" open={isShowInfoPopup} onOk={handleOk} onCancel={handleCancel}>
        <p>{currentPost.id}</p>
        <p>{currentPost.title}</p>
        <p>{currentPost.body}</p>
      </Modal>
    </>
  );
} 

export default ModalViewPost