import React  from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
//import {changeText} from "../slices/postsSlice";
//useSelector достает из стора, вместо mapStateToProps
//import { fetchPosts, showFirstPosts } from "../slices/postsSlice";  
import CardPost from "../components/cards/CardPost";
//import addThreeShowItems from "../slices/postsSlice"
//import { Button } from "bootstrap"
import { fetchPosts, showFirstPosts, addThreeShowItems, changeSizeCard } from "../slices/postsSlice"
import "./Template.scss"
import { Button, Space } from 'antd'
import { openAddPopup } from "../slices/postsSlice";
import ModalAddPost from "../components/ModalAddPost";
import ModavViewPost from "../components/ModavViewPosts"
import ModalRemovePost from "../components/ModalRemovePost"
import ModalEditPost from "../components/ModalEditPost"

const Articles = () => {
    //const {text} = useSelector(state => state.posts) 
    const text = useSelector(state => state.posts.text) 
    //достаю из объекта текст на 9 стр. Из объекта достаю текст через диструктуриз
    const posts = useSelector(state => state.posts.showItems) 
    const dispatch = useDispatch()
    //dispatch для того, чтобы что-то отпр в стор (любое взаимод со стором, кроме получения)
    const { status, end, items } = useSelector(state => state.posts)
    //см строку выше  в redux дэв тулс 

    //ниже скопированная модалка из ANT 
    /* const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleOk = () => {
      setIsModalOpen(false);
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    }; */
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

      const buttonShow = () => {
        const atribute = {}
        if(items.length <= end) atribute.disabled = true
        return <Button
            type="primary" 
            {...atribute}
            className="button_ShowMore"
            onClick={() => { dispatch (addThreeShowItems()) }}
          >Show More
          </Button>
      } 
    
return (
     <div className="content-wrapper">
      <p className="page_title">Article List</p>
      <div className="button-area">
        <Button className="button-make-big-cards"onClick={() => {
        dispatch (changeSizeCard()) 
      }}>Make big cards</Button>
        <Button className="button-add-article" onClick={() => {
        dispatch (openAddPopup()) 
      }}>Add article</Button>
        <ModalAddPost />
        <ModavViewPost />
        <ModalRemovePost />  
        <ModalEditPost />
      </div>
        <div className="cards">
          {
            status === "loading" ? <div>Spinner</div> : posts.map(post => <CardPost {...post} key={post.id} />)
          }
        </div>
        {buttonShow()}
    </div> 
)
}


/* //<div>{posts.map((post) => <div>{post.body}</div>)}</div> - старый мапинг  */
export default Articles
//на 18 стр через онклик я вызываю ф-ю changeText, которую я написала в слайсе и импортировала сюда 
//18 строка - это просто запись в стор через диспатч, а выведение на сайт - это 19 строка