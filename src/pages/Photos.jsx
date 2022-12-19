import React  from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import CardPhotos from "../components/cards/CardPhotos";
import { fetchPhotos, showFirstPosts, addThreeShowItems, changeSizeCard, openAddPopup } from "../slices/photosSlice"
import "./Template.scss"
import { Button, Space } from 'antd'
import  ModalAddPhoto from "../components/ModalAddPhoto"
import ModalViewPhotos from "../components/ModalViewPhotos";
import ModalRemovePhoto from "../components/ModalRemovePhoto"
 

const Photos = () => {
    const photos = useSelector(state => state.photos.showItems) 
    const dispatch = useDispatch()
    //const { items, showItems, status, end } = useSelector(state => state.photos)


    useEffect(() => {
        const getPhotos = async () => {
          try {
            await dispatch(fetchPhotos())
            // строка выше - запрашиваю все посты. Это вызов экшна, который получит все посты. причем ждет, пока выполнится (await) 
            await dispatch(showFirstPosts())
            //строка выше - обрезка постов (показ не весь массив постов,а первые 3)
            } catch (error) {
            console.error(error);
          }
        }
        getPhotos()
      }, [])

      return (
        <div className="content-wrapper">
         <p className="page_title">Photos List</p>
         <div className="button-area">
           <Button className="button-make-big-cards" onClick={() => {
            dispatch(changeSizeCard())
           }}>Make big cards</Button>
           <Button className="button-add-article" onClick={() => {
            dispatch(openAddPopup())
           }}>Add article</Button>
           <ModalAddPhoto />
           <ModalViewPhotos />
           <ModalRemovePhoto />
         </div>
           <div className="cards">
             {
               photos.map(photo => <CardPhotos {...photo} key={photo.id} />)
             }
           </div>
         
   
          <Button type="primary" className="button_ShowMore" onClick={() => {
           dispatch (addThreeShowItems()) 
         }}>Show More</Button>
   
       </div> 
   )
}

export default Photos





/* 
//самый первый пример с инкрементом и кнопкой считающей клики 
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
    } */
    
    


 
    