import React from "react";
import { connect } from "react-redux";
import mapDispatchToProps from "../../store/mapDispatchToProps";
import ADD_TO_CART from '../../store/actions/addToCart';

class View extends React.Component {
    render() {
        const { addToCart, food, nameMeasure, typeMeasure, supPrice } = this.props;
        return (
            <div className="modal fade" id={`_${food.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Добавить в корзину</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="img-fluid col-lg-4">
                                <img
                                    className="card-img-top p-2"
                                    src={`${food.img}`} alt={food.title}
                                />
                            </div>
                            <h5 className="card-title p-2">{food.title}</h5>
                            <p className="card-text p-2">{food.description}</p>
                            <p className="m-2">{nameMeasure + food.weight + typeMeasure}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
                            <button type="button" className="btn btn-warning" data-bs-dismiss="modal"
                                onClick={() => { addToCart(food); supPrice(parseInt(food.price)); }}>В корзину за {food.price} ₽</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps(ADD_TO_CART)) (View);