import React from "react";
import Item from './Item';
import Tab from './Tab';
import Filter from "./modules/Filter";
import Search from "./modules/Search.js";

class Catalog extends React.Component {
  constructor() {
    super()
    this.state = {
      foods: [],
      selected: "pizza",
      navigation: "home",
      filter: "select"
    }
  }
  getPizza = () => {
    fetch('http://localhost:3080/api/pizza/')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          foods: data
        })
      })
  }

  getDrink = () => {
    fetch('http://localhost:3080/api/drink/')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          foods: data
        })
      })
  }

  componentDidMount() {
    if (this.state.selected === "pizza") {
      this.getPizza();
    } else {
      this.getDrink();
    }
  }

  componentDidUpdate(props, state) {
    if (state.selected !== this.state.selected) {
      if (this.state.selected === "pizza") {
        this.getPizza();
      } else {
        this.getDrink();
      }
    }
  }

  updateSelected = value => {
    this.setState({
      selected: value
    })
  }

  updateFilter = value => {
    this.setState({
      filter: value,
    })
  }

  updateCatalog = value => {
    this.setState({
      foods: value
    })
  }

  render() {
    const nameMeasure = this.state.selected === "pizza" ? "Вес: "
      : this.state.selected === "drink" ? "Объём: "
        : "Вес (объём): ";
    const typeMeasure = this.state.selected === "pizza" ? " г."
      : this.state.selected === "drink" ? " л."
        : " г. (л.)";
    return (
      <div>
        <h1 className="text-center">Меню</h1>
        <Tab
          selected={this.state.selected}
          updateSelected={this.updateSelected}
        />
        <Search />
        <Filter
          foods={this.state.foods}
          filter={this.state.filter}
          updateFilter={this.updateFilter}
          updateCatalog={this.updateCatalog}
        />
        <hr />
        <div className="row">
          {this.state.foods.map((food, index) => {
            return (
              <div key={index} className="my-2 col-md-6">
                <Item
                  food={food}
                  nameMeasure={nameMeasure}
                  typeMeasure={typeMeasure}
                />
              </div>
            )
          })}
        </div>
        <hr />
      </div>
    )
  }
}

export default Catalog