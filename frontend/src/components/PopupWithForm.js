import React from 'react';

function PopupWithForm(props) {

  return (
    <div className={props.isOpen 
      ? `popup popup_type_${props.name} popup_type_opened` 
      : `popup popup_type_${props.name}`}>
    <div className="popup__overlay" onClick={props.onClose}></div>
    <div className="popup__container">
      <button type="button" onClick={props.onClose} className="popup__close"></button>
      <h3 className="popup__title">{props.title}</h3>
      <form name={`${props.name}-form`} onSubmit={props.onSubmit} className={`popup__form popup__form_type_${props.name}`} noValidate>
        {props.children}
      </form>
    </div>
  </div>
  )
}

export default PopupWithForm;