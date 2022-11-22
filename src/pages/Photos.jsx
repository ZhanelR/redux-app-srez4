import { useSelector, useDispatch } from "react-redux";
import {changeText} from "../slices/postsSlice";
import { increment } from "../features/counter/counterSlice";

const Photos = () => {
    //const value = useSelector(state => state.counter.value) 
    //const status = useSelector(state => state.counter.status) 
    const {value, status} = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return (
        <div className="container">
            <button onClick={() => dispatch(increment())}>Send Text</button>
            <span>{value}</span>
        </div>
    )
    }
    
    export default Photos

    