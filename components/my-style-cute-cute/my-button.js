import React from 'react'

const MyButton = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
    <a className="relative" href="#">
        <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
        <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">elevated button</span>
    </a>
    <a href="#" className="relative">
        <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
        <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500">elevated button filled</span>
    </a>
</div>
  )
}

export default MyButton
