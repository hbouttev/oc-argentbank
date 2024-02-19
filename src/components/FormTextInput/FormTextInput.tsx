interface FormInputProps {
  label: string;
  name: string;
  type: 'text' | 'password' | 'email';
}

export default function FormTextInput({ label, name, type }: FormInputProps) {
  return (
    <div className="mb-4 flex flex-col text-left">
      <label htmlFor={name} className="font-bold">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="rounded border-2 border-solid border-gray-400 p-[5px] text-[1.2rem]"
      />
    </div>
  );
}
