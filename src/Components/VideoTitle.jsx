import { memo } from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-36 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='text-black bg-white px-12 p-4 text-xl hover:opacity-80 rounded-lg'>▶️ Play</button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">More Info</button>
      </div>
    </div>
  );
};

export default memo(VideoTitle);
