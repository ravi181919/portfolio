import React from 'react'

const Heading = ({title, Icon}) => {
  return (
    <div className="w-full h-fit flex items-center justify-center lg:py-10 py-2 lg:mb-0 mb-5">
    <div className="w-fit lg:px-10 px-7 skill-bg flex justify-center items-center gap-4 bg-white/30 backdrop-blur-lg shadow-lg border border-white/20 rounded-lg py-2">
      <h1 className="text-center w-full font-semibold leading-none tracking-tighter lg:text-[2vw] text-[7vw]">
        {title}
      </h1>
      <Icon
        size={35}
        className="dark:text-white/65 text-black/75"
      />
    </div>
  </div>
  )
}

export default Heading
