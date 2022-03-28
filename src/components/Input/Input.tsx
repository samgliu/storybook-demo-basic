import './Input.css';

export interface InputProps {
  size: string;
  placeholder: string;
}

export const Input = (props: InputProps) => {
  const { size = 'small', ...rest } = props;

  return (
    <input className={`input ${size}`} {...rest} />
  );
};
