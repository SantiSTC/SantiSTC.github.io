import Image from 'next/image';

function Flecha() {
  return (
    <Image
      id="animatedImage"
      src={'/icons/flecha-verdeClaro.png'}
      alt={''}
      width={50}
      height={50} 
    />
  );
}
export default Flecha;
