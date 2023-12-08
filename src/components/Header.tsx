import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__top">
            <a href="#">Почта</a>
            <a href="#">Главное меню</a>
            <a href="#">Вытий (Ибрагимов Д.А)</a>
            <a href="#">На соглосование ура!</a>
          </div>
          <div className="header__bottom">
            <Link style={{ fontWeight: 900 }} to="/">Главное меню</Link>
            <a href="#">Портал</a>
            <a href="#">БРД</a>
            <a href="#">Контроль</a>
            <a href="#">Корресподенция</a>
            <Link style={{ fontWeight: 900 }} to="/create-document">Создать документ</Link>
            <a href="#">Обращения</a>
            <a href="#">Обращения</a>
            <a href="#">Обращения</a>
            <a href="#">Обращения</a>
            <a href="#">Отчеты</a>
            <a href="#">Поиск</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header