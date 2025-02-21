
export default function MyLoadingAnimation() {
  return (
    // <div className="flex flex-col items-center justify-center w-full">
    //  Loading...
    // </div>
    <div className='flex space-x-2 justify-center items-center h-screen dark:invert'>
 	<span className='sr-only'>Loading...</span>
  <div className='h-8 w-8 bg-[#9b9dd9] rounded-full animate-bounce [animation-delay:-0.3s]'></div>
	<div className='h-8 w-8 bg-[#635ca1] rounded-full animate-bounce [animation-delay:-0.15s]'></div>
	<div className='h-8 w-8 bg-[#5f58a2] rounded-full animate-bounce'></div>
	<div className='h-8 w-8 bg-[#5f58a2] rounded-full animate-bounce'></div>
</div>
  );
}
