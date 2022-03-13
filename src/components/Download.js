import React from "react";
import { slides } from '../data.js'
import ImageView from "./modules/ImageView.js";

class Download extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            slides: [],
        }
    }
    getSlides = value => {
        this.setState({
            slides: value,
        })
    }
    componentDidMount() {
        this.getSlides(slides)
    }
    render() {
        return (
            <div className="text-center">
                <h1>Приложение</h1>
                <hr />
                <div id="carousel" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        {this.state.slides.map( (slide, index) => (
                            <div key={index} data-bs-toggle="modal" data-bs-target={`#_${slide.id}`}
                                className={`carousel-item d-flex justify-content-center ${slide.id === 1 ? "active" : ""}`}>
                                <img src={slide.img} height="480px" alt={slide.title} />
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Предыдущий</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Следующий</span>
                    </button>
                </div>
                <hr />
                <p className="px-2">Android-приложение «Mama Mia Pizza» для заказа еды.</p>
                <p className="pt-4">Android 7.0 и выше</p>
                <div className="pb-5">
                    <a href="../apk/mama-mia-pizza.apk" className="btn btn-outline-primary fs-5 me-2" download>Скачать</a>
                    <i>~7 МБ .APK</i>
                </div>
                {this.state.slides.map( (slide, index) => (
                    <ImageView
                        key={index}
                        slide={slide}
                    />
                ))}
            </div>
        )
    }
}

export default Download