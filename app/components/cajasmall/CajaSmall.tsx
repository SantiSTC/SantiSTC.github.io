import React from 'react';

interface Props {
  title: string;
}

function CajaSmall({ title }: Props) {
  return (
    <div className={`h-16 w-56 rounded-md bg-gray-900 text-white items-center shadow-2xl hover:scale-110 transition-transform`}>
      <div className="flex justify-center items-center h-full">
        <p className="mb-2 mt-2 text-sm font-bold">{title}</p>
      </div>
    </div>
  );
}

export default CajaSmall;
