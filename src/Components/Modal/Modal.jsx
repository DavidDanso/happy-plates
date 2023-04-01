import React from "react";
import { useGlobalContext } from "../../context";
import "./Modal.css";
import info from "../../images/info.png";

const Modal = () => {
  const { meals } = useGlobalContext();

  return (
    <div className="modal-conatiner" id="modal">
      {meals.map((meal) => {
        const {
          idMeal: id,
          strMeal: title,
          strInstructions: instructions,
          strMealThumb: image,
          strSource: source,
        } = meal;
        return (
          <div
            className="modal fade"
            id={`staticBackdrop${id}`}
            key={id}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                {/* end modal-header */}
                <div className="modal-body">
                  <div className="modal-banner">
                    <img src={image} className="banner" alt="" />
                  </div>
                  {/* end modal-banner */}
                  <h1>
                    {title}
                    <span>
                      <a href={source} target="_blank">
                        Orignal Source
                      </a>
                    </span>
                  </h1>
                  <img src={info} className="info" alt="" />
                  <p>{instructions}</p>
                </div>
                {/* end modal-body */}
              </div>
              {/* end modal-content */}
            </div>
            {/* end modal-dialog */}
          </div>
        );
      })}
      {/* end modal */}
    </div>
  );
};

export default Modal;
