import Image from 'next/image'

interface EmptyProps {
  label: string
  type: string
}

const Empty = ({ label, type }: EmptyProps) => {
  return (
    <div className='flex h-full flex-col items-center justify-center p-20'>
      <div className='relative h-72 w-72'>
        {type === 'code' && <Image alt='Empty' fill src='/empty_code.png' />}
        {type === 'image' && <Image alt='Empty' fill src='/empty_image.png' />}
        {type === 'conversation' && <Image alt='Empty' fill src='/empty.png' />}
        {type === 'music' && <Image alt='Empty' fill src='/empty_music.png' />}
        {type === 'video' && <Image alt='Empty' fill src='/empty_video.png' />}
      </div>
      <p className='text-md text-center text-muted-foreground'>{label}</p>
    </div>
  )
}

export default Empty
