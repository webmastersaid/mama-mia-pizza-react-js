import React from "react";

class ImageView extends React.Component {
    render() {
        const { slide } = this.props;
        return (
            <div class="modal fade" id={`_${slide.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="position-absolute top-0 end-0">
                    <button type="button" class="btn-close mt-5 me-5" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-dialog">
                    <div class="modal-body">
                        <img src={slide.img} className="img-fluid" alt={slide.title} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageView;