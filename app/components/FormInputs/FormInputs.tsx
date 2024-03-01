interface Props {
  title: string;
  id: string;
  name: string;
  placeholder: string;
  type: string,
}

function FormInputs({
  title,
  id,
  name,
  placeholder,
  type,
}: Props) {
  return (
    <div className="mb-8 flex flex-col text-sm">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={'mt-1 h-12 w-72 rounded-lg text-sm border-none bg-gray-800 p-2 text-white shadow-md focus:placeholder-transparent focus:outline-none focus:scale-110 transition-transform'}
      />
    </div>
  );
}

export default FormInputs;
