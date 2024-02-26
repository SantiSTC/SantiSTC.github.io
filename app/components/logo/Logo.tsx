import Image from 'next/image';

interface Props {
    path: string;
}

function Logo({path}:Props) {
  return (
    <Image src={path} alt={''} width={75} height={75} className='hover:rotate-6'/>
  )
}

export default Logo