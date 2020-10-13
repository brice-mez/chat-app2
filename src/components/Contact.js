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
          <div className={props.online ? 'status-online' : 'status-offline'} />
          <p className="status-text">{props.online ? 'online' : 'offline'}</p>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
    name: Proptypes.string,
    avatar: Proptypes.string,
    online: Proptypes.bool,
}




export default Contact;