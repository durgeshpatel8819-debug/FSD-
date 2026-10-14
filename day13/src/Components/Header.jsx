
import {useNavigate} from 'react-router-dom';

const Header = () => {
  const navigate=useNavigate();
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
          <div onClick={()=>navigate("/")}>Home</div>
          <div onClick={()=>navigate("/product")}>Products</div>
          <div onClick={()=>navigate("/about")}>About</div>
          <div onClick={()=>navigate("/cart")}>Cart</div>
        </div>

      </nav>
    </div>
  );
};

export default Header;
