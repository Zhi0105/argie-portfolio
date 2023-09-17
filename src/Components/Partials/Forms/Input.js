export const TextField = ({
  value,
  type,
  autoComplete,
  onChange,
  id,
  name,
  label,
  required,
  disabled,
}) => {
  return (
    <div className="relative h-11 w-full">
      <input
        className="disabled:bg-slate-50 disabled:border-b-2 peer pl-2 h-full w-full border-b-2 border-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#f59e0b] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        type={type}
        onChange={onChange}
        value={value}
        autoComplete={autoComplete}
        id={id}
        name={name}
        placeholder=" "
        required={required}
        disabled={disabled}
      />
      <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] text-[#08FFD4] font-normal leading-tight transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#f59e0b] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-[#08FFD4] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#f59e0b] peer-focus:after:scale-x-100 peer-focus:after:border-[#f59e0b]">
        <span className="font-bold">{label}</span>
      </label>
    </div>
  );
};
