'use client'

import { cn } from '@/lib/utils'
import { UserButton, useUser } from '@clerk/nextjs'
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from 'lucide-react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import FreeCounter from './free-counter'

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] })
const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: 'text-violet-500',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    href: '/image',
    color: 'text-pink-700',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    href: '/video',
    color: 'text-orange-700',
  },
  {
    label: 'Music Generation',
    icon: Music,
    href: '/music',
    color: 'text-emerald-500',
  },
  {
    label: 'Code Generation',
    icon: Code,
    href: '/code',
    color: 'text-green-700',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
]
interface SidebarProps {
  apiLimitCount: number
  isPro: boolean
}
const Sidebar = ({ apiLimitCount = 0, isPro = false }: SidebarProps) => {
  const pathname = usePathname()
  const { user } = useUser()
  return (
    <div className='flex h-full flex-col space-y-4 bg-[#111827] py-4 text-white'>
      <div className='flex-1 px-3 py-2'>
        <Link href='/dashboard' className='mb-14 flex items-center pl-3'>
          <div className='relative mr-4 h-8 w-8'>
            <Image fill alt='logo' src='/logo.svg'></Image>
          </div>
          <h1 className={cn('text-2xl font-bold', montserrat.className)}>Genius</h1>
        </Link>
        <div className='space-y-1'>
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                'group flex w-full cursor-pointer justify-start rounded-lg p-3 text-sm font-medium transition hover:bg-white/10 hover:text-white',
                pathname === route.href ? 'bg-white/10 text-white' : 'text-zinc-400'
              )}
            >
              <div className='flex flex-1 items-center'>
                <route.icon className={cn('mr-3 h-5 w-5', route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className='flex w-full items-center justify-start p-4'>
        <UserButton afterSwitchSessionUrl='/' />
        <span className='ml-4 text-sm'>{user?.emailAddresses?.[0]?.emailAddress}</span>
      </div>
      <FreeCounter isPro={isPro} apiLimitCount={apiLimitCount} />
    </div>
  )
}

export default Sidebar
