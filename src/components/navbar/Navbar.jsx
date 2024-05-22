import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCart3, BsHeart } from "react-icons/bs";
import useStore from "../../context/store";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [shrink, setShrink] = useState(false);
  const wishes = useStore((s) => s.heart);
  const cart = useStore((s) => s.cart);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  });
  return (
    <section className={`header ${shrink ? "shrink" : ""}`}>
      <div className="container">
        <nav className="navbar">
          <Link className="nav__logo" to={"/"}>
            AliExpress
          </Link>
          <div className="nav__serach">
            <input
              onFocus={() => setShow(true)}
              onBlur={() => setShow(false)}
              type="search"
              placeholder="Search..."
              required
            />
            <button>Qidirib topilsin</button>
          </div>
          <ul>
            <li className="nav__link">
              <Link to={"/wishlist"}>
                <BsHeart />
                Sevimlilar
              </Link>
              <sup className="wishes__count">{wishes.length}</sup>
            </li>
            <li className="nav__link">
              <Link to={"/cart"}>
                <BsCart3 />
                Savat
              </Link>
              <sup>{cart.length}</sup>
            </li>
          </ul>
        </nav>
      </div>
      {show ? <div className="serach__overley"></div> : <></>}
    </section>
  );
};

export default Navbar;
