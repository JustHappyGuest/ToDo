import React from 'react';
import './app.css';

function App() {
  return (
    <div className="app">
      <h1 className="logo">ToDo</h1>
      <header className="header">
        <input className="search" placeholder="Поиск..."></input>
      </header>
      <aside className="aside">
      <ul className="menu">
        <li className="menu__item">Задачи</li>
        <li className="menu__item">Группы</li>
        <li className="menu__item">Настройки</li>
      </ul> 
      </aside> 
      <main className="main">
        <section className="tasks">
          <h2 className="tasks-title">Активные задачи</h2>
          <table className="tasks-table">
            <thead className="tasks-table__header">
              <tr>
                <td><div className="circle"></div></td>
                <td>№ Задачи</td>
                <td>Описание</td>
                <td>Дата</td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody className="tasks-table__body">
              <tr>
                  <td><div className="circle"></div></td>
                  <td>Гэг</td>
                  <td>ГЫе</td>
                  <td>Дата</td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <td><div className="circle"></div></td>
                  <td>Гэг</td>
                  <td>ГЫе</td>
                  <td>Дата</td>
                  <td></td>
                  <td></td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default App;
