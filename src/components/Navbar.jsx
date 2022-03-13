import React from "react";
import logo from '../logo.svg';
import { connect } from "react-redux";
import mapStateToProps from "../store/mapStateToProps";
import ADD_TO_CART from '../store/actions/addToCart';

class Navbar extends React.Component {
    render() {
        const { cart, navigation, updateNav } = this.props
        const getActiveClass = value => {
            return `nav-link ${navigation === value ? "active" : ""}`
        }
        const handleClick = value => () => {
            updateNav(value)
        }
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
                    <div className="container-fluid">
                        <div className="navbar-brand" onClick={handleClick("home")}>
                            <img src={logo} height="24" className="d-inline-block align-text-top" alt="Логотип" />
                            <span className="px-2">Mama Mia Pizza</span>
                        </div>
                        <button className="navbar-toggler"
                            type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                                <span className="translate-middle badge rounded-pill bg-danger">
                                    {cart.length}
                                </span>
                            </span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="fs-5 ps-md-2">
                                    <div className={getActiveClass("home")} onClick={handleClick("home")}
                                        data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                                        <i className="bi bi-house-door d-lg-block mx-auto text-center px-2"></i>
                                        Главная
                                    </div>
                                </li>
                                <li className="fs-5 ps-md-2">
                                    <div className={getActiveClass("shop")} onClick={handleClick("shop")}
                                        data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                                        <i className="bi bi-shop d-lg-block mx-auto text-center px-2"></i>
                                        Меню
                                    </div>
                                </li>
                                <li className="fs-5 ps-md-2">
                                    <div className={getActiveClass("app")} onClick={handleClick("app")}
                                        data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                                        <i className="bi bi-app d-lg-block mx-auto text-center px-2"></i>
                                        Приложение
                                    </div>
                                </li>
                                <li className="fs-5 ps-md-2">
                                    <div className={getActiveClass("contacts")} onClick={handleClick("contacts")}
                                        data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                                        <i className="bi bi-chat d-lg-block mx-auto text-center px-2"></i>
                                        Контакты
                                    </div>
                                </li>
                            </ul>
                            <button className={"btn btn-light ms-2 " + getActiveClass("cart")} onClick={handleClick("cart")}
                                data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                                <i className="bi bi-basket fs-4"></i>
                                <span className="top-0 start-50 translate-middle badge rounded-pill bg-danger">
                                    {cart.length}
                                </span>
                            </button>
                            <button className="btn btn-light ms-2">
                                <i className="bi bi-box-arrow-in-right fs-4"></i>
                            </button>
                        </div>

                    </div>
                </nav>
            </header>
        )
    }
}

export default connect(mapStateToProps(ADD_TO_CART), null) (Navbar)