import { FadeLoader } from 'react-spinners'

export const Preload = ({ loading }) => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-4'>
      <FadeLoader color={"#08FFD4"} loading={loading} size={50} />
      <div className='text-[#08FFD4]'>Loading...</div>
    </div>
  )
}
