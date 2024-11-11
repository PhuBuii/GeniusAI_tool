'use client'

import { Button } from '@/components/ui/button'
import axios from 'axios'
import { Zap } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

interface SubscriptionButtonProps {
  isPro: boolean
}
export const SubscriptionButton = ({ isPro = false }: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false)
  const onClick = async () => {
    try {
      setLoading(true)
      const response = await axios.get('/api/stripe')
      window.location.href = response.data.url
    } catch (error) {
      setLoading(false)
      toast.error('BILLING_ERROR')
    } finally {
      setLoading(false)
    }
  }
  return (
    <Button variant={isPro ? 'default' : 'premium'} onClick={onClick}>
      {isPro ? 'Manage subscription' : 'Upgrade'}
      {!isPro && <Zap className='ml-2 h-4 w-4 fill-white' />}
    </Button>
  )
}
