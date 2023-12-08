import axios from 'axios'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

type Props = {

}

const UpdateDocument = (props: Props) => {
  const [outNumber, setOutNumber] = useState('')
  const [deliveryType, setDeliveryType] = useState('')
  const [dateOut, setDateOut] = useState('')
  const [registerNumber, setRegisterNumber] = useState('')
  const [corespodent, setCorespodent] = useState('')
  const [registerDate, setRegisterDate] = useState('')
  const [registrator, setRegistrator] = useState('')
  const [division, setDivision] = useState('')
  const [performer, setPerformer] = useState('')
  const [theme, setTheme] = useState('')
  const [inNumber, setInNumber] = useState('')
  const [inDate, setInDate] = useState('')

  const { id } = useParams()

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:4444/documents/${id}`, {
        "outNumber": outNumber,
        "deliveryType": deliveryType,
        "dateOut": dateOut,
        "registerNumber": registerNumber,
        "corespodent": corespodent,
        "registerDate": registerDate,
        "registrator": registrator,
        "division": division,
        "performer": performer,
        "theme": theme,
        "inNumber": inNumber,
        "inDate": inDate
      }).then(data => {
        alert('Пост с id: ' + data.data.id  + ' успешно обновлен')
      })
    } catch (error) {
      alert('Не удалось обновить документ: ' + error)
    }
  }

  return (
    <div className="container">
      <nav className='nav-btns'>
        <div className="nav-btns__left">
          <Link className='btn' to="/">Отмена</Link>
        </div>
        <div className="nav-btns__right">
          <button className='btn' onClick={handleUpdate}>Обновить</button>
        </div>
      </nav>

      <div className='document-form'>
        <h1>Входящий документ</h1>
        <form action="#" method="post">
          <div className="document-form__header">
            <div className="document-form__header-top">
              <div className='checkbox'>
                <input type="checkbox" name="important" id="important" />
                <label htmlFor="important">Очень срочное письмо</label>
              </div>
              <div className='checkbox'>
                <input type="checkbox" name="no-control" id="no-control" />
                <label htmlFor="no-control">Снято с контроля</label>
              </div>
            </div>
            <hr />
            <div className="document-form__header-bottom">
              <div className='document-form__header-bottom-left'>
                <div className='checkbox'>
                  <input type="checkbox" name='non-control' id="non-control" />
                  <label>Неконтрльный документ</label>
                </div>
                <div className='checkbox'>
                  <input type="checkbox" name='in-paper-form' id="in-paper-form" />
                  <label>Передан в бумажном виде</label>
                </div>
              </div>
              <div className='document-form__header-bottom-right'>
                <div className='checkbox'>
                  <input type="checkbox" />
                  <label>Для служебного использования</label>
                </div>
                <div className='checkbox'>
                  <input type="checkbox" />
                  <label>ДирОРД</label>
                </div>
                <div className='checkbox'>
                  <input type="checkbox" />
                  <label>Внутреняя корисподенция</label>
                </div>
                <div className='checkbox'>
                  <input type="checkbox" />
                  <label>Ответ на исходящий</label>
                </div>
              </div>
            </div>
          </div>
          <div className="document-form__main">
            <div className='input-text'>
              <label htmlFor="">Тема документа:</label>
              <input onChange={(e) => setTheme(e.target.value)} type="text" />
            </div>
            <div className="with-date">
              <div className='input-text'>
                <label htmlFor="">Входящий №:</label>
                <input onChange={(e) => setOutNumber(e.target.value)} type="text" />
              </div>
              <div className='input-date'>
                <label htmlFor="">Дата входящего:</label>
                <input onChange={(e) => setDateOut(e.target.value)} type="date" />
              </div>
            </div>
            <div className="with-date">
              <div className='input-text'>
                <label htmlFor="">Исходящий:</label>
                <input onChange={(e) => setInNumber(e.target.value)} type="text" />
              </div>
              <div className='input-text'>
                <label htmlFor="">Дата исходящего:</label>
                <input onChange={(e) => setInDate(e.target.value)} type="date" />
              </div>
            </div>
            <div className='input-text'>
              <label htmlFor="">Вид доставки:</label>
              <input onChange={(e) => setDeliveryType(e.target.value)} type="text" />
            </div>
            <div className='input-text'>
              <label htmlFor="">Коррисподент:</label>
              <input onChange={(e) => setCorespodent(e.target.value)} type="text" />
            </div>
            <div className='input-text'>
              <label htmlFor="">Исполнитель:</label>
              <input onChange={(e) => setPerformer(e.target.value)} type="text" />
            </div>
            <div className="with-date">
              <div className='input-text'>
                <label htmlFor="">Регистрационный №:</label>
                <input onChange={(e) => setRegisterNumber(e.target.value)} type="text" />
              </div>
              <div className='input-text'>
                <label htmlFor="">Дата регистрации:</label>
                <input onChange={(e) => setRegisterDate(e.target.value)} type="date" />
              </div>
            </div>
            <div className='input-text'>
              <label htmlFor="">Регистратор №:</label>
              <input onChange={(e) => setRegistrator(e.target.value)} type="text" />
            </div>
            <div className='input-text'>
              <label htmlFor="">Подразделение:</label>
              <input onChange={(e) => setDivision(e.target.value)} type="text" />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateDocument