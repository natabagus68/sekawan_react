
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function useBeritaTableModel() {
  const navigate = useNavigate()

  const handleDetail = (id) => {
    navigate(`${id}/detail-berita`)
  }
  return {
    handleDetail
  }
}
