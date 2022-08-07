import React, {Fragment} from "react";

import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { ReactComponent as LogoSvg } from "../../assets/svg/logo.svg";
import { ReactComponent as SearchSvg } from "../../assets/svg/search.svg";
import { ReactComponent as LikedSvg } from "../../assets/svg/liked.svg";
import { ReactComponent as CartSvg } from "../../assets/svg/cart.svg";

import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selectors";


import './header.styles.scss'

const Header = () => {
  const cart = useSelector(selectCartItems)
  
  return (
    <Fragment>
      <div className="HeaderWrapper">
        <Link to='/' className="Logo">
          <LogoSvg />
        </Link>

        <div className="NavBar">
          <Link to="/" className="NavLink LinkHover">home</Link>
          <Link to="/women" className="NavLink LinkHover">women</Link>
          <Link to="/men" className="NavLink LinkHover">men</Link>
          <Link to="/children" className="NavLink LinkHover">children</Link>
        </div>

        <div className="NavIcons">
          
          <Link to="/search" className="SvgLinkWrapper LinkHover">
            <SearchSvg  />
          </Link>
          <Link to="/liked" className="SvgLinkWrapper LinkHover">
            <LikedSvg  />
          </Link>
          <Link to="/cart" className="SvgLinkWrapper LinkHover">
            <CartSvg  />
          </Link>

          <span className="CartQuantity">{cart.length}</span>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Header;
