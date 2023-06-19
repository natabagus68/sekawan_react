import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function useDetailBeritaModel() {
  const navigate = useNavigate()

  const handleBack =() =>{
    navigate(-1)
  }
  return {
    handleBack
  }
}
