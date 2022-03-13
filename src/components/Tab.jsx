import React from "react";

class Tab extends React.Component {

    render() {
        const { selected, updateSelected } = this.props
        const getActiveClass = value => {
            return `nav-link ${selected === value ? "active" : ""}`
        }
        const handleClick = value => () => {
            updateSelected(value)
        }
        return (
            <ul className="nav nav-tabs">
                <li className="nav-item fs-6 fw-bold">
                    <div
                        className={getActiveClass("pizza")}
                        onClick={handleClick("pizza")}
                    >
                        Пицца
                    </div>
                </li>
                <li className="nav-item fs-6 fw-bold">
                    <div
                        className={getActiveClass("drink")}
                        onClick={handleClick("drink")}
                    >
                        Напитки
                    </div>
                </li>
            </ul>
        )
    }

}

export default Tab