import React,{useState} from 'react';

const Contact = () => {

  const [mydata, setMydata] = useState("");

  // Handler function to update state
  const name = () => {
    setMydata("animation");
  };

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.5);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
      {mydata === "animation" ? (
    <section className="contact" style={{ padding:"5vw", fontSize: '2vw' }}>
      <h2 style={{ fontSize: '3em', color: "blue",margin:"2vw 0vw" }}>----------------Contact----------------</h2>
      <p style={{ fontSize: '1em', color: "blue",margin:"3vw 0px 3vw 2vw" }}>If you'd like to get in touch, please reach out at my email or phone number.</p>
      <hr/>
      <h1 style={{ display: "inline-block", fontSize: '2em', color: "blue",margin:"3vw 0px 3vw 2vw" }}>Email:</h1>
      <p style={{ display: "inline-block", fontSize: '1.5em', color: "red" ,margin:"3vw 0px 3vw 2vw" }}>zeeshanahmad00733@gmail.com</p>
      <hr/>
      <h1 style={{ display: "inline-block", fontSize: '2em', color: "blue",margin:"3vw 0px 3vw 2vw" }}>Phone-No:</h1>
      <h1 style={{ display: "inline-block", fontSize: '1.2em', color: "red" ,margin:"3vw 0px 3vw 2vw" }}><span style={{ fontSize: '1.3em', color: 'green' }}>+92</span> 0316-222-9073
      </h1>
      <hr/>
    </section>
  ) : (
  <div style={{ fontSize: "1vw", display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', }}>
    <button
      onClick={name}
      style={{
        fontSize: '3em',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textTransform: 'uppercase',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        transition: 'background-color 0.3s, transform 0.2s',
        display: 'inline-block',
        margin: '5em auto 5em auto',
        outline: 'none',
        width: '50vw',
        height: '5vw',
        textAlign: 'center',
        animation: 'pulse 3s ease-in-out infinite',
      }}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
      onFocus={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onBlur={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      Click Me To Access Email
    </button>
  </div>
)}
</>
);
};

export default Contact;
