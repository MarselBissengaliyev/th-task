import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DocumentItem from './DocumentItem'
import axios from 'axios'

type Props = {};

type Document = {
  registerNumber: number;
  registerDate: string;
  performer: string;
  correspondent: string; // Corrected typo here
  _id: string
};

const Sidebar = (props: Props) => {
  const [documents, setDocuments] = useState<Document[]>([]);
  useEffect(() => {
    try {
      axios.get("http://localhost:4444/documents").then(data => {
        setDocuments(data.data)
      })
    } catch (error) {
      alert("Не удалось получить документы: " + error)
    }
  }, [])
  
  return (
    <aside className="sidebar">
      <h1>Входящие по номеру регистрации.</h1>
      <div className="search">
        <input placeholder='Поиск' type="search" />
      </div>
      <div className="filter">
        <div>
          <input checked type="radio" />
          <label htmlFor="">Все</label>
        </div>
        <div>
          <input type="radio" />
          <label htmlFor="">Некотрольные</label>
        </div>
        <div>
          <input type="radio" />
          <label htmlFor="">Снятые с контроля</label>
        </div>
        <div>
          <input type="radio" />
          <label htmlFor="">На контроле</label>
        </div>
      </div>
      <div className="documents">
        {
          documents.map(doc => <DocumentItem
            key={doc.registerNumber}
            corespodent={doc.correspondent}
            performer={doc.performer}
            registerDate={doc.registerDate}
            registerNumber={doc.registerNumber}
            _id={doc._id}
          />)
        }
      </div>
    </aside>
  )
}

export default Sidebar