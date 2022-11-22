import { useSelector, useDispatch } from "react-redux";
import {changeText} from "../slices/postsSlice";

const Users = () => {
    const text = useSelector(state => state.posts.text) 
    

return (
    <div className="container">
        <span>{text}</span>
    </div>
)
}

export default Users
  