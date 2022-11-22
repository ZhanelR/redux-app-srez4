import React  from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
//import {changeText} from "../slices/postsSlice";
//useSelector достает из стора, вместо mapStateToProps
import { fetchPosts, showFirstPosts } from "../slices/postsSlice";  
import CardPost from "../components/cards/CardPost";
import addThreeShowItems from "../slices/postsSlice"
//import { Button } from "bootstrap"
import { Button, Modal } from "antd"



const Articles = () => {
    //const {text} = useSelector(state => state.posts) 
    const text = useSelector(state => state.posts.text) 
    //достаю из объекта текст на 9 стр. Из объекта достаю текст через диструктуриз
    const posts = useSelector(state => state.posts.showItems) 
    const dispatch = useDispatch()
    //dispatch для того, чтобы что-то отпр в стор (любое взаимод со стором, кроме получения)
    const { items, showItems, status } = useSelector(state => state.posts)
    const { end } = useSelector(state => state.posts)

    //ниже скопированная модалка из ANT 
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleOk = () => {
      setIsModalOpen(false);
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };
  // конец скопированного из АНТ дизайн 


    useEffect(() => {
        const getPosts = async () => {
          try {
            await dispatch(fetchPosts())
            // строка выше - запрашиваю все посты. Это вызов экшна, который получит все посты. причем ждет, пока выполнится (await) 
            await dispatch(showFirstPosts())
            //строка выше - обрезка постов (показ не весь массив постов,а первые 3)
            } catch (error) {
            console.error(error);
          }
        }
        getPosts()
      }, [])
    
return (
     <div className="container">
      <div className="cards">
        {
          status === "loading" ? <div>Spinner</div> : posts.map(post => <CardPost {...post} key={post.id} />)
        }
      </div>

      <div className="button_ShowMore" onClick={() => {
        dispatch (addThreeShowItems()) 
      }}>Show More</div>

      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

    </div> 
)
}


{/* //<div>{posts.map((post) => <div>{post.body}</div>)}</div> - старый мапинг  */}
export default Articles
//на 18 стр через онклик я вызываю ф-ю changeText, которую я написала в слайсе и импортировала сюда 
//18 строка - это просто запись в стор через диспатч, а выведение на сайт - это 19 строка