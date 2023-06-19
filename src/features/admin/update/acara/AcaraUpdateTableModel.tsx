

import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function useAcaraUpdateTableModel() {
  const navigate = useNavigate()
  let {idAcara} = useParams()
  const [modalDelete, setModalDelete] = useState(false)

  const handleDetail = (id) => {
    navigate(`${id}/detail`)
  }
  const modalHandleClose = () => {
    navigate(-1)
  }
  return {
    idAcara,
    handleDetail,
    modalHandleClose,
    modalDelete,
    setModalDelete
  }
}
