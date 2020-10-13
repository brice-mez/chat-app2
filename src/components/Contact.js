import React from "react";
import "./Contact.css";
import Proptypes from 'prop-types';


function Contact(props) {
    
  return (
    <div className="Contact">
      <img className="avatar"
        src={props.avatar} alt={props.name}
      />
      <div>
        <p className="name">{props.name}</p>
        <div className="status">
          <div className={props.isOnline ? 'status-online' : 'status-offline'} />
          <p className="status-text">{props.isOnline ? 'online' : 'offline'}</p>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
    name: Proptypes.string,
    avatar: Proptypes.string,
    isOnline: Proptypes.bool,
}




export default Contact;