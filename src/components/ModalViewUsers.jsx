import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeInfoPopup } from "../slices/usersSlice"
import { Button, Modal } from 'antd';

const ModalViewUsers = () => {
    const {isShowInfoPopup, currentUser} = useSelector(state => state.users)
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
        <p>{currentUser.name}</p>
        <p>{currentUser.email}</p>
        <p>{currentUser.phone}</p>
      </Modal>
    </>
  );
} 

export default ModalViewUsers