

import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function useAcaraTableModel() {
  const navigate = useNavigate()

  const handleDetail = (id) => {
    navigate(`${id}/detail-acara`)
  }
  return {
    handleDetail
  }
}
