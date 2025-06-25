function Input({ lable, inputType, error, ...rest }) {
  return (
    <div className="mb-3 rtl w-100">
      <label className="form-label fw-bold" htmlFor={rest.name}>
        {lable}
        {rest.requried && <span className="text-danger ms-1">*</span>}
      </label>
      <input
        type={inputType}
        className={[
          "form-control",
          "border-2",
          "border-primary",
          error && "is-invalid",
        ]
          .filter(Boolean)
          .join(" ")} // שילוב מחלקות CSS לפי תנאי, אם יש שגיאה
        id={rest.name}
        {...rest}
      />
      {error && <div className="invalid-feedback d-block">{error}</div>}
    </div>
  );
}

export default Input;
