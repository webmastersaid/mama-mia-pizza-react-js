import React from "react";

class Filter extends React.Component {

  render() {
    const { foods, filter, updateFilter, updateCatalog } = this.props;
    const handleChange = e => {
      updateFilter(e.target.value);
    }
    const handleClick = () => {
      const getSort = filter === "ascending" ?  foods.sort( (a,b) => a.price - b.price)
      : filter === "descending" ? foods.sort( (a,b) => b.price - a.price) 
      : foods;
      updateCatalog(getSort);
    }
    return (
      <div className="modal fade" id="setFilterModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Фильтр</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <label htmlFor="filter">Цена:</label>
              <select name="filter" value={filter} onChange={handleChange} className="form-select" aria-label="Default select example">
                <option value="select">Выберите</option>
                <option value="ascending">По возрастанию</option>
                <option value="descending">По убыванию</option>
              </select>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
              <button type="button" onClick={handleClick} className="btn btn-primary" data-bs-dismiss="modal">Применить</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Filter