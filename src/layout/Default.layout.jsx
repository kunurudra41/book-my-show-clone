// rafce
import React from "react";
// filepath: src/layout/Default.layout.jsx
import Navbar from '../components/Navbar/Navbar.Component';


const DefaultLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
        <div>Footer</div>
      </div>
    );
  };

export default DefaultLayoutHoc;
