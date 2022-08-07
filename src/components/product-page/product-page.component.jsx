import React, {useContext} from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux/es/exports";

import { LikedContext } from "../../contexts/liked.context";
import { SHOP_DATA } from "../../shop-data";
import { ReactComponent as LikedIcon } from "../../assets/svg/addLiked.svg";

import { selectCartItems } from '../../store/cart/cart.selectors'
import { addProductToCart, getSize } from "../../store/cart/cart.action";

import "./product-page.styles.scss";

const ProductPage = () => {
  const SizesGuide = [37, 38, 39, 40, 41, 42, 43];

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const product = SHOP_DATA.find((el) => +id === el.id);
  const cart = useSelector(selectCartItems)

  const { addItemToLiked, getSizeToLiked } = useContext(LikedContext);

  return (
    <div className="ProductPageWrapper">
      <div className="ProductPageContainer">
        <div className="ProductImageWrapper">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="ProductContentWrapper">
          <div className="ProdcutContent">
            <div className="ProductTitle">
              <h3>{product.name}</h3>
            </div>

            <div className="ProductPrice">
              <span>—{product.price} $</span>
            </div>

            <div className="ProductDescription">
              <p>{product.description}</p>
            </div>

            <ul className="SizesGuide">
              {SizesGuide.map((size, i) => (
                <li
                  key={i}
                  onClick={() => {
                    dispatch(getSize(size));
                    getSizeToLiked(size);
                  }}
                >
                  {size}
                </li>
              ))}
            </ul>
            <div className="ButtonsContainer">

              {!cart.find((el) => el.id === +id) ? (
                <button
                  className="AddToBag"
                  onClick={() => dispatch(addProductToCart(product))}
                >
                  Add To Bag
                </button>
              ) : (
                <button className="CheckBag" onClick={() => navigate("/cart")}>
                  To Cart
                </button>
              )}

              <div className="likedContainer">
                <LikedIcon
                  className="LikedSvg"
                  onClick={() => addItemToLiked(product)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
