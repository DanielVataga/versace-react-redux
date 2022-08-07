import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"

import { selectLikedItems } from "../../store/liked/liked.selector";

import LikedItem from "../liked-item/liked-item.component";

import "./liked.styles.scss";


const Liked = () => {
  const likedItems = useSelector(selectLikedItems)
  const navigate = useNavigate()

  return (
    <div className="LikedWrapper">
      <div className="LikedItemsWrapper">
        {likedItems.length === 0 ? (
          <div className="emtyLikedWrapper">
            <span className="emptyLiked">
              Find clothes that <span className="italicFont">suits</span> you
            </span>

            <button onClick={() => navigate('/')}>To the home page</button>
          </div>
        ) : (
          likedItems.map((el, index) => <LikedItem LikedElement={el} key={index} />)
        )}
      </div>

      
    </div>
  );
}

export default Liked