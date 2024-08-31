export function FormInput({
  labelText,
  inputType,
  inputId,
  required,
  handleInputChange,
  inputName,
  inputValue,
  labelClassName,
  placeholder,
}) {
  return (
    <div className="flex flex-col gap-y-2 mb-3">
      <label
        htmlFor={inputId}
        className={`font-light text-lg ${labelClassName}`}
      >
        {labelText} {required && "*"}
      </label>
      <input
        id={inputId}
        type={inputType}
        onChange={handleInputChange}
        name={inputName}
        value={inputValue}
        placeholder={placeholder}
        className="bg-transparent px-2 py-3 border-[1px] hover:border-[2px] border-gray-300 lg:min-w-[300px]"
      />
    </div>
  )
}
