function SelectComponent({
  label,
  value,
  option = [],
  onChange,
  error,
  ...rest
}) {
  return (
    <div className="mb-3 rtl w-100">
      <label htmlFor={rest.name} className="form-label fw-bold">
        {label}
        {rest.requried && <span className="text-danger ms-1">*</span>}
      </label>

      <select
        className={[
          "form-select",
          "border-2",
          "border-primary",
          error && "is-invalid",
        ]
          .filter(Boolean)
          .join(" ")}
        name={rest.name}
        id={rest.name}
        onChange={onChange}
        value={value}
        {...rest}
      >
        <option value="">בחר</option>

        {option.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      {error && <div className="invalid-feedback d-block">{error}</div>}
    </div>
  );
}

export default SelectComponent;
