import React from "react";

class Search extends React.Component {
    render() {
        return (
            <div className="pt-4 d-flex justify-content-between">
              <div className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search" />
                <button className="btn btn-light me-2" type="button">
                  <i className="bi bi-search fs-5"></i>
                </button>
              </div>
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#setFilterModal">
                <i className="bi bi-filter fs-5"></i>
              </button>
            </div>
        )
    }
}

export default Search;