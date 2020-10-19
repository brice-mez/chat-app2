import React from "react";
import "./Contact.css";
import Proptypes from 'prop-types';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    }
  }
  render() {  
  return (
    <div className="Contact">
      <img className="avatar"
        src={this.props.avatar} alt={this.props.name}
      />
      <div>
        <p className="name">{this.props.name}</p>
        <div className="status">
          <div 
          onClick = {event => {
            const offline = !this.state.online;
            this.setState({online: offline});
          }}
          className={this.state.online ? 'status-online' : 'status-offline'} />
          <p 
          onClick = {event => {
            const offline = !this.state.online;
            this.setState({online: offline});
          }}
          className="status-text">{this.state.online ? 'online' : 'offline'}</p>
        </div>
      </div>
    </div>
  );
}
}
Contact.propTypes = {
    name: Proptypes.string,
    avatar: Proptypes.string,
    online: Proptypes.bool,
}




export default Contact;