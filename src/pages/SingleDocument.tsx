import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, redirect, useNavigate, useParams  } from 'react-router-dom'
import Sidebar from '../components/Sidebar';

type Document = {
  _id: string;
  outNumber: number;
  deliveryType: string;
  dateOut: string;
  registerNumber: number;
  corespodent: string;
  registerDate: string;
  registrator: string;
  division: string;
  performer: string;
  theme: string;
  inNumber: number;
  inDate: string;
}

const SingleDocument = () => {
  const [document, setDocument] = useState<Document>()
  const { id } = useParams()
  const naviagate = useNavigate();
  useEffect(() => {
    try {
      axios.get(`http://localhost:4444/documents/${id}`).then(data => {
        setDocument(data.data)
      })
    } catch (error) {
      alert(error)
    }
  }, [])
  console.log(document)

  const handleRemove = async () => {
    try {
      await axios.delete(`http://localhost:4444/documents/${id}`).then(data => {
        
        alert('Документ успешно удален')
        naviagate('/')
      })
    } catch (error) {
      alert(error)
    }
  }

  if (document) {
    return (
      <div className="container">
        <div className="home">
        <Sidebar/>
          <div className="content">
            <div className="content__header">
              <div className="nav-btns">
                <div>
                  <Link to="/" className="btn">Ознакомиться</Link>
                  <Link to="/" className="btn">Отправить получателю</Link>
                </div>
                <div>
                  <Link to="/" className="btn">Исходящий</Link>
                  <Link to="/" className="btn">Комментарий</Link>
                  <Link to={"/update-document/" + id} className="btn">Редактировать</Link>
                  <button onClick={handleRemove} className="btn">Удалить</button>
                </div>
              </div>
            </div>
            <div className="content__main">
              <div className="content__main-top">
                <h1>Входящий документ № {document.inNumber}</h1>
                <h2>{document.performer}</h2>
              </div>
              <div className="content__main-bottom">
                <div className='checkbox'>
                  <input type="checkbox" />
                  <label htmlFor="">Очень срочное письмо</label>
                </div>
                <div className='checkbox'>
                  <input type="checkbox" />
                  <label htmlFor="">Снято с контроля</label>
                </div>
                <hr />
                <div className="expires_at">
                  Срок исполнения:
                  <br />
                  <span>{document.dateOut}</span>
                </div>
                <div className="content-info">
                  <div>
                    Исходящий №: <span>{document.dateOut}</span>
                  </div>
                  <div>
                    Вид доставки: <span>{document.deliveryType}</span>
                  </div>
                  <div>
                    Дата исходящего: <span>{document.dateOut}</span>
                  </div>
                  <div>
                    Регистрационный №: <span>{document.registerNumber}</span>
                  </div>
                  <div>
                    Коррепсподент: <span>{document.corespodent}</span>
                  </div>
                  <div>
                    Дата регистрации: <span>{document.registerDate}</span>
                  </div>
                  <div>
                    Регистратор: <span>{document.registrator}</span>
                  </div>
                  <div>
                    Подразделение: <span>{document.division}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <div className="lds-dual-ring"></div>
}

export default SingleDocument