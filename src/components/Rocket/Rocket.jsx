import React from 'react'

const Rocket = () => {
  return (
    <div className='bg-black rounded-full p-2 absolute -right-4 -top-4'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="violet" viewBox="0 0 22 22" class="fill-pictonBlue-500 w-[30px] sm:w-[60px]"><path d="m16.885 2.564.354.051c.55.087 1.166.233 1.544.612.38.38.526.995.613 1.545l.051.353c.116.834.146 1.928-.051 3.142-.389 2.395-1.664 5.252-4.866 7.466q-.022.246-.015.492l.015.498c.01.332.004.663-.088.98-.174.606-.795 1.005-1.375 1.29l-.284.135-.367.162-.25.1c-.648.248-1.43.421-1.941-.091-.232-.232-.34-.547-.426-.863l-.042-.157a16 16 0 0 0-.52-1.645 3 3 0 0 1-.181.2c-.5.498-1.177.75-1.855.944l-.45.124-.449.119-.438.11-.396.092-.474.1-.296.058a.925.925 0 0 1-1.079-1.079l.102-.505.118-.53.114-.467.206-.775c.204-.751.453-1.526 1.008-2.08l.091-.088-.7-.25-.702-.243c-.412-.136-.845-.279-1.144-.577-.546-.547-.314-1.4-.042-2.07l.152-.354.126-.276c.29-.618.703-1.33 1.36-1.518.317-.092.648-.097.98-.089l.498.017c.165.002.33 0 .492-.016 2.213-3.202 5.071-4.477 7.467-4.866a10.7 10.7 0 0 1 3.14-.05m-2.847 1.86c-2.015.328-4.463 1.407-6.374 4.28-.232.35-.623.515-1.022.578a4 4 0 0 1-.68.046l-.686-.01q-.17-.002-.342.006c-.278.37-.473.81-.618 1.247l1.375.5.565.213c1.034.406 2.035.896 2.805 1.666 1.297 1.297 1.956 2.994 2.433 4.727.418-.146.838-.334 1.194-.6l.005-.342-.01-.684c0-.227.01-.455.046-.682.062-.399.229-.79.577-1.022 2.874-1.91 3.953-4.359 4.28-6.374a8.9 8.9 0 0 0 .045-2.597 5 5 0 0 0-.177-.82 5 5 0 0 0-.82-.176 8.9 8.9 0 0 0-2.596.045m-7.575 9.817c-.321.387-.47.896-.59 1.4l-.1.43-.05.206.636-.149c.504-.12 1.014-.27 1.4-.591a.917.917 0 1 0-1.296-1.296m5.185-6.481a1.833 1.833 0 1 1 2.593 2.594 1.833 1.833 0 0 1-2.593-2.595"></path></svg>
      <div className='absolute bg-gradient-to-br from-accent-default to-violet-700 -inset-0.5 blur opacity-80 rounded-full z-[-1]'></div>
  </div>
  )
}

export default Rocket