

import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function useBeritaUpdateTableModal() {
  const navigate = useNavigate()
  let {idBerita} = useParams()
  const [modalDelete, setModalDelete] = useState(false)

  const handleDetail = (id) => {
    navigate(`${id}/berita`)
  }
  const modalHandleClose = () => {
    navigate(-1)
  }
  return {
    idBerita,
    handleDetail,
    modalHandleClose,
    modalDelete,
    setModalDelete
  }
}
