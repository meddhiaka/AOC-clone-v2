import Video from './../assets/aocVideo.mp4';

export default function MainVideo() {
  return (
    <div className='block lg:hidden'>
      <video
        src={Video}
        autoPlay
        loop
        muted
        className='w-full h-full object-cover'
      />
    </div>
  );
}
