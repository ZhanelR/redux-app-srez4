import React  from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import CardPhotos from "../components/cards/CardPhotos";
import { fetchPhotos, showFirstPosts, addThreeShowItems } from "../slices/photosSlice"
import "./Template.scss"
import { Button, Space } from 'antd'

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
        <div className="container">
         <p className="page_title">Photos List</p>
         <div className="button-area">
           <Button className="button-make-big-cards">Make big cards</Button>
           <Button className="button-add-article">Add article</Button>
         </div>
   
         <div className="cards-wrapper">
           <div className="cards">
             {
               photos.map(photo => <CardPhotos {...photo} key={photo.id} />)
             }
           </div>
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
    
    


 
    