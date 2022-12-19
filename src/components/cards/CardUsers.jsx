import { useState } from "react";
import classNames from "classnames";
// библ classNames позв использ переменные при переключении классов 
import {openInfoPopup, openEditPopup, openRemovePopup} from "../../slices/usersSlice"
//строка выше {openInfoPopup, openEditPopup, openRemovePopup} это методы, позволяющ влиять на модалки 
import {useSelector, useDispatch} from "react-redux";
import "./CardPost.scss"
import { Button } from 'antd'


const CardUsers = ({name, id, username, email, phone}) => {
// строка выше - открываю объект пропсов и достаю из него d, title, body
//...id, title, body - это пропсы того, что придет с запроса на сервер  
//...(получаю эти пропсы когда мапю в Articles я через спред {...post}, те то что есть в фото, через спрэд выкидываю в пропсы )
  const isSmall = useSelector(state => state.users.isSmallCards)
  const dispatch = useDispatch()

  const [bgColor, setBgColor] = useState(false)

  const changeColor = () => {
    setBgColor(!bgColor)
  }

  return (
    <div className={classNames({
      'cardSmall': isSmall === true,
      'cardBig': isSmall === false,
      'main-wrapper': true,
      'card-color': bgColor === true
    })}>
        <div className="card__text">
          <p className="card__name">{username}</p>
          <p className="card__email">{email}</p>
          <p className="card__phone">{phone}</p>
        </div>
        <div className="card__buttons">
          <Button
            className="card__buttons-view card__button"
            onClick={() => dispatch(openInfoPopup(name))}
          >
            View
          </Button>
          <Button
            className="card__buttons-color card__button"
            onClick={() => changeColor()}
          >
            Change color
          </Button>
          <Button
            className="card__buttons-edit card__button"
            onClick={() => dispatch(openEditPopup(id))}
          >
            Edit
          </Button>
          <Button
            className="card__buttons-delete card__button"
            onClick={() => dispatch(openRemovePopup(name))}
          >
            Delete
          </Button>
          
        </div>
      </div>
  )
}

export default CardUsers 

