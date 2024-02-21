interface FormInputProps {
  name: string;
  placeholder: string;
}

export default function FormTextInput({ name, placeholder }: FormInputProps) {
  return (
    <input
      type="text"
      id={name}
      name={name}
      required
      placeholder={placeholder}
      className="w-[250px] rounded border-2 border-solid border-black px-3 py-2 text-[1.2rem]"
    />
  );
}
