import Image from 'next/image'

const Loader = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-y-4'>
      <div className='relative h-10 w-10 animate-spin'>
        <Image alt='logo' fill src='/loadinggg.svg' />
      </div>
      <p className='text-md text-muted-foreground'>Genius is start thinking...</p>
    </div>
  )
}

export default Loader
