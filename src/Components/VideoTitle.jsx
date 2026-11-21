import { memo } from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-36 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-md w-1/4'>{overview}</p>
      <div>
        <button className='text-black bg-white px-6 p-2 text-lg hover:opacity-80 rounded-xl cursor-pointer'>▶️ Play</button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-2 px-6 text-lg rounded-xl hover:opacity-80 cursor-pointer">More Info</button>
      </div>
    </div>
  );
};

export default memo(VideoTitle);
