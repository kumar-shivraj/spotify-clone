import { assets, songsData } from '../assets/assets'

const Player = () => {
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <div className='hidden lg:flex items-center gap-4'>
        <img
          src={songsData[0].image}
          alt=''
          className='w-12'
        />
        <div>
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc.slice(0, 12)}</p>
        </div>
      </div>

      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4'>
          <img
            src={assets.shuffleIcon}
            alt=''
            className='w-4 cursor-pointer'
          />

          <img
            src={assets.prevIcon}
            alt=''
            className='w-4 cursor-pointer'
          />
          <img
            src={assets.playIcon}
            alt=''
            className='w-4 cursor-pointer'
          />
          <img
            src={assets.nextIcon}
            alt=''
            className='w-4 cursor-pointer'
          />
          <img
            src={assets.loopIcon}
            alt=''
            className='w-4 cursor-pointer'
          />
        </div>

        <div className='flex items-center gap-5'>
          <p>1:06</p>
          <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
            <hr className='h-1 border-none w-20 bg-green-800 rounded-full' />
          </div>
          <p>3:20</p>
        </div>
      </div>

      <div className='hidden lg:flex items-center gap-2 opacity-75'>
        <img
          src={assets.playsIcon}
          alt=''
          className='w-4'
        />
        <img
          src={assets.micIcon}
          alt=''
          className='w-4'
        />
        <img
          src={assets.queueIcon}
          alt=''
          className='w-4'
        />
        <img
          src={assets.speakerIcon}
          alt=''
          className='w-4'
        />
        <img
          src={assets.volumeIcon}
          alt=''
          className='w-4'
        />
        <div className='w-20 bg-slate-50 h-1 rounded' />
        <img
          src={assets.miniPlayerIcon}
          alt=''
          className='w-4'
        />
        <img
          src={assets.zoomIcon}
          alt=''
          className='w-4'
        />
      </div>
    </div>
  )
}

export default Player
