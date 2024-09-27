import React from "react";

const Empl = ({ firstname, surname, work, experience , image }) => {
    return (
      <div style={styles.container}>
        <img src={image} alt={`employee`} style={styles.image} />
        <h2 style={styles.title}>{firstname} {surname}</h2>
        <p style={styles.text}>  {work} </p>
        <p style={styles.text}>  {experience} year of experience</p>
      </div>
    );
  };
  
  const styles = {
    container: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '26px',
      margin: '26px',
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
    },
    title: {
      margin: '0 0 8px',
    },
    text: {
      margin: '4px 0',
    },
    image: {
      width: '150px',
      height: '150px',
      objectFit: 'cover',
      marginBottom: '8px',
    },
  };
  
  export default Empl;