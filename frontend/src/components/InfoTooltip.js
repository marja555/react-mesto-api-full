import React from "react";

function InfoToolTip(props) {
  const { messageTooltip } = props;
  return (
    <div
      className={
        props.isOpen
          ? `popup popup_type_${props.name} popup_type_opened`
          : `popup popup_type_${props.name}`
      }
    >
      <div className="popup__overlay" onClick={props.onClose}></div>
      <div className="popup__container" 
        style={{ display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <img
          className="tooltipPic"
          style={{ 
            width: 120, 
            paddingTop: 60
          }}
          alt={messageTooltip.message}
          src={messageTooltip.img}
        ></img>
        <button
          className="popup__close"
          onClick={props.onClose}
          type="button"
        ></button>
        <h2
          className="popup__title"
          style={{ 
            textAlign: "center", 
            margin: 36
             }}
          
        >
          {messageTooltip.message}
        </h2>
      </div>
    </div>
  );
}

export default InfoToolTip;