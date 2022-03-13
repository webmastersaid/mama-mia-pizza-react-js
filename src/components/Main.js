import React from "react";

class Main extends React.Component {

  render() {
    return (
      <div className="text-center">
        <h1>Добро пожаловать, гость!</h1>
        <div className="pt-5">
          <img src="/favicon.png" height="196px" alt="Логотип" />
        </div>
        <div className="py-4">
          <p>Веб-приложение для заказа еды.</p>
        </div>
      </div>
    )
  }

}

export default Main