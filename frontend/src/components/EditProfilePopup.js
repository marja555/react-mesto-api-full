import React, {useState, useEffect, useContext} from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser?.name);
  const [description, setDescription] = useState(currentUser?.about);
  
  const handleNameChange = (evt) => {
    setName(evt.target.value);
  }
  
  const handleDescriptionChange = (evt) => {
    setDescription(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    props.onUpdateUser({
      name,
      about: description
    });
    props.isClose();
  }

  useEffect(() => {
    if (currentUser) {
    setName(currentUser.name);
    setDescription(currentUser.about);
    }
  }, [currentUser, props.isOpen]);

  return (
    <PopupWithForm
          title="Редактировать профиль"
          name="profile"
          isOpen={props.isOpen}
          onClose={props.isClose}
          onSubmit={handleSubmit}
        >
          <input
            id="name-input"
            type="text"
            name="name"
            value={name || ''}
            placeholder="Имя"
            size="40"
            className="popup__input popup__input_type_name"
            minLength="2"
            maxLength="40"
            onChange={handleNameChange}
            required
          />
          <span id="name-input-error" className="popup__input-error"></span>
          <input
            id="job-input"
            type="text"
            name="job"
            value={description || ''}
            placeholder="Профессиональная деятельность"
            size="40"
            className="popup__input popup__input_type_profession"
            minLength="2"
            maxLength="200"
            onChange={handleDescriptionChange}
            required
          />
          <span id="job-input-error" className="popup__input-error"></span>
          <button type="submit" className="popup__submit-button">
            Сохранить
          </button>
        </PopupWithForm>
  )
}
export default EditProfilePopup;