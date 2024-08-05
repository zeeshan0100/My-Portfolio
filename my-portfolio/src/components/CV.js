import React, { useState } from 'react';

const CV = () => {

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
        <section style={{ fontSize: "2vw", margin: "0px", padding: "5vw" }} className="about">
          <h2 style={{ color: "blue", fontSize: "3em",margin:"2vw 0vw" }}>---------------About Me---------------</h2>
          <hr />
          <p style={{ margin: "3vw 0px 3vw 2vw", fontSize: "2.5vw" }}><strong style={{ color: "blue", fontSize: "1.5em", }}>Full-Name:</strong> Zeeshan Ahmad Kamran</p>
          <hr />
          <p style={{ margin: "3vw 0px 3vw 2vw", fontSize: "2.5vw" }}><strong style={{ color: "blue", fontSize: "1.5em", }}>City:</strong> Chenab Nagar</p>
          <hr />
          <p style={{ margin: "3vw 0px 3vw 2vw", fontSize: "2.5vw" }}><strong style={{ color: "blue", fontSize: "1.5em", }}>Location:</strong> Pakistan</p>
          <hr />
          <p style={{ margin: "3vw 0px 3vw 2vw", fontSize: "2.5vw" }}><strong style={{ color: "blue", fontSize: "1.5em", }}>Address:</strong> Darul Fatooh Sharki Street No 6 House No 253-C</p>
          <hr />
          <p style={{ margin: "3vw 0px 3vw 2vw", fontSize: "2.5vw" }}><strong style={{ color: "blue", fontSize: "1.5em", }}>Experience:</strong> Not yet, waiting for I.C.S degree</p>
          <hr />
          <p style={{ margin: "3vw 0px 3vw 2vw", fontSize: "2.5vw" }}><strong style={{ color: "blue", fontSize: "1.5em", }}>Skills:</strong> HTML, CSS, JavaScript, React.js, Node.js, Bootstrap, GitHub</p>
          <hr />
          <p style={{ margin: "3vw 0px 3vw 2vw", fontSize: "2.5vw" }}><strong style={{ color: "blue", fontSize: "1.5em", }}>Summary:</strong> I am a skilled full-stack developer who can easily create fully responsive React front-end + backend websites. My expertise lies in front-end development, but I am also knowledgeable in backend development. I am eager to help grow your company by delivering my best work and engaging with your team. Hire me, I am ready and waiting. Thank you!</p>
          <hr style={{ boxShadow: '0px 4px 20px 10px blue'}} />
        </section>
      ) : (
        <div style={{fontSize: "1vw", display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', }}>
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
            Click Me To Access CV
          </button>
        </div>
      )}
    </>
  );
};

export default CV;
