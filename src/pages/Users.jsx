import React  from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { fetchUsers, showFirstPosts, addThreeShowItems, openAddPopup } from "../slices/usersSlice";
import CardUsers from "../components/cards/CardUsers"
import { Button } from 'antd'
import ModalAddUser from "../components/ModalAddUser"
import ModalViewUsers from "../components/ModalViewUsers"


const Users = () => {
    const users = useSelector(state => state.users.showItems) 
    const dispatch = useDispatch()
    

    useEffect(() => {
        const getUsers = async () => {
          try {
            await dispatch(fetchUsers())
            // строка выше - запрашиваю все посты. Это вызов экшна, который получит все посты. причем ждет, пока выполнится (await) 
            await dispatch(showFirstPosts())
            //строка выше - обрезка постов (показ не весь массив постов,а первые 3)
            } catch (error) {
            console.error(error);
          }
        }
        getUsers()
      }, [])

      return (
        <div className="container">
         <p className="page_title">Users List</p>
         <div className="button-area">
           <Button className="button-make-big-cards">Make big cards</Button>
           <Button className="button-add-article" onClick={() => {
        dispatch (openAddPopup()) 
      }}>Add user</Button>
           <ModalAddUser />
           <ModalViewUsers />
         </div>
   
         <div className="cards-wrapper">
           <div className="cards">
             {
                users.map(user => <CardUsers {...user} key={user.name} />)
             }
           </div>
         </div>
   
          <Button type="primary" className="button_ShowMore" onClick={() => {
           dispatch (addThreeShowItems()) 
         }}>Show More</Button>

    
         </div> 
         )
         }






/*       const showUserNames = () => {
        if(users) {return users.map(user => user.name)} else{return "no data"} 
      }
return (
    <div className="container">
        <span>{showUserNames()}</span>
    </div>
) */




export default Users
  