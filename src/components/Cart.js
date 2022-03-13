import React from "react";
import Pay from "./modules/Pay";
import { connect } from "react-redux";
import mapStateToProps from "../store/mapStateToProps";
import mapDispatchToProps from "../store/mapDispatchToProps";
import ADD_TO_CART from '../store/actions/addToCart';

class Cart extends React.Component {

  render() {

    const { cart, sum, addToCart, removeFromCart, subPrice, supPrice } = this.props

    return (
      <div className="row">
        <h1 className="text-center">Корзина</h1>
        <span className="">Общее кол-во: {cart.length}</span>
        <hr />
        <span className={"text-center " + (cart.length > 0 ? "invisible" : "fs-4 p-5")}>Пусто!</span>
        <div className="pt-4">
          <ul className="list-group">
            {cart.map((food, index) => (
              <li key={index} className="list-group-item">
                <div className="d-flex justify-content-between">
                  <span className="fs-4">{food.title}</span>
                  <span className="fs-5">{`${food.price} ₽`}</span>
                </div>
                <div className="row">
                  <div className="d-flex justify-content-start col-5">
                    <span className="fs-6">{food.weight}</span>
                  </div>
                  <div className="d-flex justify-content-end col-7">
                    <button type="button" className="btn btn-light m-2"
                      onClick={() => { removeFromCart(index); subPrice(parseInt(food.price)); }}>
                      <i className="bi bi-dash-lg"></i>
                    </button>
                    <button type="button" className="btn btn-light m-2"
                      onClick={() => { addToCart(food); supPrice(parseInt(food.price)); }}>
                      <i className="bi bi-plus-lg"></i>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="d-grid gap-2 p-2 bottom-0">
          <button className={`btn btn-warning fs-5 ${cart.length <= 0 ? "invisible" : ""}`} data-bs-toggle="modal" data-bs-target="#orderModal">Оформить за {sum} ₽</button>
        </div>
        <Pay sum={sum} />
      </div>
    )
  }
}

export default connect(mapStateToProps(ADD_TO_CART), mapDispatchToProps(ADD_TO_CART))(Cart)