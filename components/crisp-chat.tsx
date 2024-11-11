'use client'

import { Crisp } from 'crisp-sdk-web'
import { useEffect } from 'react'

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('6b75b6ba-5ccd-4a55-8ac4-4d98ebf55882')
  }, [])
  return null
}
