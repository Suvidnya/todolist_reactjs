import React from 'react';


//child component
export default function Footer() {

  let footerstyle ={
    position: "relative",
    top: "20vh",
    width: "100%"
  }
  return (
       <div className='bg-dark text-light py-3' style={footerstyle}>
         <p className='text-center'>
           Copyright &copy; Suvidnya Tipre
         </p>
       </div>
  );
}
