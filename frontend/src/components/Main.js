import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Footer from './Footer';

function Main({cards, onEditProfile, onEditAvatar, onAddPlace, onConfirmDeleteClick, onCardClick, onCardLike, onCardDelete}) {
  
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile__info">
          <div onClick={onEditAvatar} 
          className="profile__image"
          style={{ backgroundImage: `url(${currentUser?.avatar})` }}></div>
          <div className="profile__info-container">
            <h1 className="profile__name">{currentUser?.name}</h1>
            <button type="button" onClick={onEditProfile} className="profile__edit-button"></button>
            <p className="profile__profession">{currentUser?.about}</p>
          </div>
        </div>  
        <button type="button" onClick={onAddPlace} className="profile__add-button"></button>
      </section>
      <section className="cards">
        {cards.map((cardData) => (
          <Card 
            card={cardData}
            key={cardData._id}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
            onConfirmDeleteClick={onConfirmDeleteClick}
          />
        ))}
      </section>
      <Footer />
    </main>
  );
}

export default Main;