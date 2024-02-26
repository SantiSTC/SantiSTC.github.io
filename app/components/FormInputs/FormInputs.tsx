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
      <label htmlFor={id} className="text-white ">{title}</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={`mt-1 h-8 w-72 rounded-md border border-green-700 text-sm bg-transparent p-2 text-white focus:placeholder-transparent focus:outline-none`}
      />
    </div>
  );
}

export default FormInputs;
