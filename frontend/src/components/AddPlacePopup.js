import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
const [place, setPlace] = useState('');
const [image, setImage] = useState('');

const [placeError, setPlaceError] = useState('');//для валидации формы
const [imageError, setImageError] = useState('');

function handlePlaceChange(evt) {
  setPlaceError(evt.target.validationMessage);
  setPlace(evt.target.value);
}

function handleImageChange(evt) {
  setImageError(evt.target.validationMessage);
  setImage(evt.target.value);
}

function handleAddPlaceSubmit(evt) {
  evt.preventDefault();

  props.onCreateCard({
    place,
    image
  });
  setPlace('');
  setImage('');
  props.isClose();
}

function isDisabled() {
  if (place === '' || image === '' || placeError !== '' || imageError !== '')  {
    return true
  } else {
    return false
  }
}

React.useEffect(() => {
  setPlace('');
  setImage('');
  setPlaceError('');
  setImageError('');
}, [props.isOpen]);

  return (
    <PopupWithForm
          title="Новое место"
          name="place"
          isOpen={props.isOpen}
          onClose={props.isClose}
          onSubmit={handleAddPlaceSubmit}
        >
          <input
            id="place-input"
            type="text"
            name="place"
            placeholder="Название"
            size="40"
            className="popup__input popup__input_type_place"
            minLength="2"
            maxLength="30"
            value={place}
            onChange={handlePlaceChange}
            required
          />
          {
          <span id="place-input-error" className="popup__input-error popup__input-error_visible">{placeError}</span>
          }
          <input
            id="link-input"
            type="url"
            name="image"
            placeholder="Ссылка на картинку"
            size="40"
            className="popup__input popup__input_type_photo-link"
            value={image}
            onChange={handleImageChange}
            required
          />
          {
          <span id="link-input-error" className="popup__input-error popup__input-error_visible">{imageError}</span>
          }
          <button type="submit" className={isDisabled() 
          ? "popup__submit-button popup__submit-button_disabled"
          : "popup__submit-button"}>
            Создать
          </button>
        </PopupWithForm>
  )
}
export default AddPlacePopup;