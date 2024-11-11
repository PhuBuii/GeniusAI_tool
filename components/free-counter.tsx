'use client'

import { MAX_FREE_COUNTS } from '@/constants'
import { useProModal } from '@/hooks/use-pro-modal'
import { Zap } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Progress } from './ui/progress'

interface FreeCounterProps {
  apiLimitCount: number
  isPro: boolean
}
const FreeCounter = ({ apiLimitCount = 0, isPro = false }: FreeCounterProps) => {
  const [mounted, setMounted] = useState(false)
  const proModal = useProModal()
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return null
  }
  if (isPro) {
    return null
  }
  return (
    <div className='px-3'>
      <Card className='border-0 bg-white/10'>
        <CardContent className='py-6'>
          <div className='mb-4 space-y-2 text-center text-sm text-white'>
            <p>
              {apiLimitCount}/{MAX_FREE_COUNTS} Free Generations
            </p>
            <Progress className='h-3' value={(apiLimitCount / MAX_FREE_COUNTS) * 100} />
          </div>
          <Button className='w-full' variant='premium' onClick={proModal.onOpen}>
            Upgrade to Pro
            <Zap className='ml-2 h-4 w-4 fill-white' />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default FreeCounter
