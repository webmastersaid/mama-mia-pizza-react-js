import React from "react";

class Pay extends React.Component {
    render() {
        const { sum } = this.props;
        return (
            <div className="modal fade" id="orderModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Оплата</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Выберите способ оплаты</p>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="cardPay" defaultChecked />
                                <label className="form-check-label" htmlFor="cardPay">
                                    Картой
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="onlinePay" />
                                <label className="form-check-label" htmlFor="onlinePay">
                                    Онлайн оплата
                                </label>
                            </div>
                            <span className="fs-5 mt-5">К оплате: {sum} ₽</span>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
                            <button type="button" className="btn btn-warning" data-bs-dismiss="modal"
                                onClick={() => { }}>Оплатить</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pay;