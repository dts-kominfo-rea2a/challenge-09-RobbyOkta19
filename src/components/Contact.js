// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = (props) => {
  console.log(props);
  return (
    <div className="card" myContact="card">
        <img className="foto" myContact="photo" src={props.data.photo} alt="foto"></img>
      <div className="data">
        <h3>{props.data.name}</h3>
        <p>{props.data.phone}</p>
        <p>{props.data.email}</p>
      </div>
    </div>
  );
};

export default Contact;
