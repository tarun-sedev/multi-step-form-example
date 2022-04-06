export const InputText = ({ name, label, value, errors, registerProps }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        {...registerProps}
        defaultValue={value}
        className="form-control"
        aria-label={name}
      />
      {errors && errors[name] && (
        <span id={`${name}-error`} className="invalid-feedback d-block">
          {errors[name].message}
        </span>
      )}
    </div>
  );
};

export const InputCheckbox = ({ name, label, checked, registerProps }) => {
  return (
    <div className="form-check mb-3">
      <input
        className="form-check-input"
        type="checkbox"
        id={name}
        defaultChecked={checked}
        {...registerProps}
      />
      <label className="form-check-label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export const InputFile = ({ name, value, label, errors, registerProps }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type="file"
        {...registerProps}
        files={value}
        className="form-control"
        data-testid={name}
      />
      {value && <span className="text-primary">{value}</span>}
      {errors && errors[name] && (
        <span id={`${name}-error`} className="invalid-feedback d-block">
          {errors[name].message}
        </span>
      )}
    </div>
  );
};

export const InputArea = ({ name, value, label, errors, registerProps }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <textarea
        {...registerProps}
        defaultValue={value}
        className="form-control"
        rows="3"
        aria-label={name}
      ></textarea>
      {errors && errors[name] && (
        <span id={`${name}-error`} className="invalid-feedback d-block">
          {errors[name].message}
        </span>
      )}
    </div>
  );
};
