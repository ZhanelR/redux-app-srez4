import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal } from 'antd';
import { removeItem, closeRemovePopup } from "../slices/usersSlice"

const ModalRemoveUser = () => {
    const isShowRemovePopup = useSelector(state => state.users.isShowRemovePopup) 
    const dispatch = useDispatch()

    const handleOk = () => {
        dispatch(removeItem());
        dispatch(closeRemovePopup());
      };
    
      const handleCancel = () => {
        dispatch(closeRemovePopup());
      };

    return (isShowRemovePopup ? 
            <Modal title="Basic Modal" open={isShowRemovePopup} onOk={handleOk} onCancel={handleCancel}>
                <div>Are you sure you want to delete the card?</div>
            </Modal> : ""
    )     
}

export default ModalRemoveUser