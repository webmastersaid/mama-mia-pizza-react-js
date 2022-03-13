import React from "react";
import View from "./modules/ItemView";

class Item extends React.Component {

  render() {
    const { food, nameMeasure, typeMeasure, sumPrice } = this.props
    return (
      <div className="card">
        <div className="row pointer" data-bs-toggle="modal" data-bs-target={`#_${food.id}`}>
          <div className="img-fluid col-lg-4">
            <img
              className="card-img-top p-2"
              src={`${food.img}`} alt={food.title}
            />
          </div>
          <div className="card-body col-lg-8">
            <h5 className="card-title p-2">{food.title}</h5>
            <p className="card-text p-2 text-truncate" max-height="10px">{food.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <p className="m-2">{nameMeasure + food.weight + typeMeasure}</p>
              <span className="m-2 fs-5">{`${food.price} ₽`}</span>
            </div>
          </div>
        </div>
        <View 
          food={food}
          nameMeasure={nameMeasure}
          typeMeasure={typeMeasure}
          sumPrice={sumPrice} />
      </div>
    )
  }
}

export default Item;