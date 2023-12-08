import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  registerNumber: number
  registerDate: string
  performer: string
  corespodent: string
  _id: string;
}

const DocumentItem = (props: Props) => {
  console.log(props)
  const registerDate = new Date(props.registerDate)
  return (
    <Link to={`/documents/${props._id}`} className="document-item">
      <img src="/document.png" alt="/document.png" />
      <div className="document-item__content">
        <h4>Рег. номер: {props.registerNumber}</h4>
        
        <p>{props.registerDate}</p>
        <p>{props.performer}</p>
        <p>{props.corespodent}</p>
      </div>
    </Link>
  )
}

export default DocumentItem