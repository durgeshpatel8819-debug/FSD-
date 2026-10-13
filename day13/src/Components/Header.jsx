
import React from 'react';


const Header = () => {
  return (
    <div>
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "navy",
        color: "white",
        padding: "15px 25px",
        fontSize: "18px"
      }}>
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>
          Myapp
        </div>

        <div style={{
          display: "flex",
          gap: "25px"
        }}>
          <div>Home</div>
          <div>Products</div>
          <div>About</div>
          <div>Cart</div>
        </div>

      </nav>
    </div>
  );
};

export default Header;
