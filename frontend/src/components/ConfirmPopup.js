import React from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmPopup(props) {

  function handleSubmit(evt) {
    evt.preventDefault();
    props.isClose();
    props.onCardDelete();    
  }

  return(
    <PopupWithForm 
      title="Вы уверены?" 
      name="submit"
      isOpen={props.isOpen}
      onClose={props.isClose}
      onSubmit={handleSubmit}
    >    
      <button type="submit" className="popup__submit-button">
        Да
      </button>
    </PopupWithForm>
  )
}

export default ConfirmPopup;