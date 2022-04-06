export const PrimaryButton = ({ type = 'button', onClick, children }) => {
  return (
    <button type={type} onClick={onClick} className="btn btn-primary">
      {children}
    </button>
  );
};

export const SecondaryButton = ({ type = 'button', onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="btn btn-outline-secondary btn-sm mb-3"
    >
      {children}
    </button>
  );
};

export const LoaderButton = ({
  type = 'button',
  onClick,
  children,
  isLoading,
}) => {
  return (
    <button
      className="btn btn-primary"
      type={type}
      disabled={isLoading}
      onClick={onClick}
    >
      {isLoading && (
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
      )}
      {children}
    </button>
  );
};
