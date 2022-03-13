import React from "react";

class Contacts extends React.Component {
    render() {
        return (
            <div className="text-center">
                <h1>Контакты</h1>
                <hr/>
                <p className="pt-5">Свяжитесть с нами</p>
                <div className="d-flex justify-content-center pb-5">
                    <a href="/" className="nav-link">
                        <i className="bi bi-telephone fs-2"></i>
                    </a>
                    <a href="/" className="nav-link">
                        <i className="bi bi-envelope fs-2"></i>
                    </a>
                    <a href="/" className="nav-link">
                        <i className="bi bi-whatsapp fs-2"></i>
                    </a>
                    <a href="/" className="nav-link">
                        <i className="bi bi-instagram fs-2"></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default Contacts