import React from "react";
import { useGlobalContext } from "../../context";
import "./Meals.css";
import addToFavorite from "../../images/add.png";
import icon from "../../images/default.svg";

const Meals = () => {
  const { loading, meals, addToFavorites, favorites } = useGlobalContext();

  if (loading) {
    return <h6 className="loading">Loading...</h6>;
  }

  if (meals.length < 1) {
    return (
      <h6 className="search_txt">
        No Meals Matched Your Search Term. Please Try Again
      </h6>
    );
  }

  return (
    <div
      className="meals-container"
      id={favorites.length >= 1 ? "increase_margin" : "decrease_margin"}
    >
      <div className="row">
        {meals.map((meal) => {
          const {
            idMeal: id,
            strMeal: title,
            strArea: location,
            strMealThumb: image,
          } = meal;
          return (
            <div className="col-md-3" key={id}>
              <div className="card">
                <img
                  src={image}
                  id="card_image"
                  className="card-img-top"
                  alt="card_image"
                  data-bs-toggle="modal"
                  data-bs-target={`#staticBackdrop${id}`}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {title}
                    <img
                      src={addToFavorite}
                      className="addToFavorite"
                      onClick={() => addToFavorites(id, title)}
                      alt="addToFavorite"
                    />
                  </h5>
                  <p className="card-text">
                    <img src={icon} className="icon" alt="bookmark" />
                    {location}
                  </p>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
          );
        })}
      </div>
      {/* end row */}
    </div>
  );
};

export default Meals;
