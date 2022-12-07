import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeInfoPopup } from "../slices/photosSlice"
import { Button, Modal } from 'antd';

const ModalViewPhotos = ({id, title, url}) => {
  const isShowInfoPopup = useSelector(state => state.photos.isShowInfoPopup) 
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
        <p>{id}</p>
        <p>{title}</p>
        <p>{url}</p>
      </Modal>
    </>
  );
} 

export default ModalViewPhotos