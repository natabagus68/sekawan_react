

import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function useDetailAcaraModel() {
  const navigate = useNavigate()

  const handleBack =() =>{
    navigate(-1)
  }
  return {
    handleBack
  }
}
