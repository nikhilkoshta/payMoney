export const InputBox = ({ onChange, placeholder, label }) => {
  return (
      <div className="space-y-2 my-2">
          <label className="text-sm font-medium leading-none text-[#000000]" htmlFor={label}>
              {label}
          </label>
          <input
              onChange={onChange}
              type="text"
              className="flex h-10 w-full rounded-md border border-input bg-[#cff4ff] px-3 py-2 text-sm"
              id={label}
              placeholder={placeholder}
          />
      </div>
  );
}
