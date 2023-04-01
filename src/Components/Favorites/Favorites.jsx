import React from "react";
import { useGlobalContext } from "../../context";
import "./Favorites.css";
import smile from "../../images/smile.png";

const Favorites = () => {
  const { favorites, removeFromFavorites } = useGlobalContext();

  return (
    <div
      className="favorites fixed-top"
      id={favorites.length >= 1 ? "show_favorites" : "hide_favorites"}
    >
      <div className="card">
        <div className="card-body">
          <h1>
            <img src={smile} className="smile_face" alt="smile_face" />
            Favorites
          </h1>
        </div>
        {/* end card-body  */}
        {/*  */}
        <div className="container-fluid">
          <div className="row" id="meals-fav-row">
            {favorites.map((favorite) => {
              const { idMeal: id, strMealThumb: image } = favorite;
              return (
                <div className="col-1" key={id}>
                  <h6>
                    <img
                      src={image}
                      className="meal_img"
                      alt="meal_img"
                      data-bs-toggle="modal"
                      data-bs-target={`#staticBackdrop${id}`}
                    />
                    <span onClick={() => removeFromFavorites(id)}>remove</span>
                  </h6>
                </div>
              );
            })}

            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </div>
      {/* end card */}
    </div>
  );
};

export default Favorites;
