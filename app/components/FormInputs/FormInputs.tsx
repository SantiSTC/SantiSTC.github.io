interface Props {
  id: string;
  name: string;
  placeholder: string;
  type: string,
}

function FormInputs({
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
        className={`mt-1 h-12 w-72 rounded-md text-sm border-none bg-gray-800 p-2 text-white shadow-md focus:placeholder-transparent focus:outline-none`}
      />
    </div>
  );
}

export default FormInputs;
