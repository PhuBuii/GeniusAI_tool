'use client'

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, VideoIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

const tools = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    href: '/conversation',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: 'text-pink-700',
    bgColor: 'bg-pink-700/10',
    href: '/image',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: 'text-orange-700',
    bgColor: 'bg-orange-700/10',
    href: '/video',
  },
  {
    label: 'Music Generation',
    icon: Music,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    href: '/music',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    href: '/code',
  },
]
const LandingContent = () => {
  const router = useRouter()

  return (
    <div className='mt-20 px-10 pb-20'>
      <div className='mb-8 space-y-4'>
        <h2 className='text-center text-2xl font-bold md:text-4xl'>Explore the power of AI !!!</h2>
        <p className='text-mute-foreground text-center text-sm font-light md:text-lg'>
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className='space-y-4 px-4 md:px-20 lg:px-32'>
        {tools.map((tool) => (
          <Card
            onClick={() => {
              router.push(tool.href)
            }}
            key={tool.href}
            className='flex cursor-pointer items-center justify-between border-secondary p-4 hover:shadow-md hover:shadow-secondary'
            style={{
              backgroundColor: 'var(--card)',
              color: 'var(--card-foreground)',
            }}
          >
            <div className='flex items-center gap-x-4'>
              <div className={cn('w-fit rounded-md p-2', tool.bgColor)}>
                <tool.icon className={cn('h-8 w-8', tool.color)} />
              </div>
              <p className='font-semibold'>{tool.label}</p>
            </div>
            <ArrowRight className='h-5 w-5' />
          </Card>
        ))}
      </div>
    </div>
  )
}

export default LandingContent
