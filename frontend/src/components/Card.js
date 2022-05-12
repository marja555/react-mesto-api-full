import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `card__del-button ${isOwn ? "" : "card__del-button_inactive"}`
  );
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `card__like ${isLiked ? "card__like_active" : "card__like"}`
  )
  function handleClick() {
    props.onCardClick(props.card);
  }
  function handleLikeClick() {
    props.onCardLike(props.card);
  }
  function handleCardClick() {
    // props.onCardDelete(props.card);
    props.onConfirmDeleteClick(props.card)
  }

  return (
    <div className="card">
      <img src={props.card.link} onClick={handleClick} className="card__image" alt={props.card.name} />
      <button type="button" onClick={handleCardClick} className={cardDeleteButtonClassName}></button>
      <div className="card__rectangle">
        <h2 className="card__title">{props.card.name}</h2>
        <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
        <div className="card__likes-counter">{props.card.likes.length}</div>
      </div>
    </div>
  )
}

export default Card;