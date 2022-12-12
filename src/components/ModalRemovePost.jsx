import React, from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal } from 'antd';
import {closeAddPopup, addItem} from "../slices/postsSlice"

const ModalRemovePost = () => {
    const isShowRemovePopup = useSelector(state => state.posts.isShowRemovePopup) 
    const dispatch = useDispatch()

    const handleOk = () => {
        dispatch(closeRemovePopup());
      };
    
      const handleCancel = () => {
        dispatch(closeRemovePopup());
      };

    return (isShowRemovePopup)
            <Modal title="Basic Modal" open={isShowInfoPopup} onOk={handleOk} onCancel={handleCancel}>
                <Button type="primary" htmlType="submit">
                    Удалить
                </Button>
            </Modal>
        
}