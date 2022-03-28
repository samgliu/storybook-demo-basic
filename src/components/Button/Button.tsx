import './Button.css'

export interface ButtonProps{
  variant: string;
  children: string;
}

export const Button = (props: ButtonProps) => {
  const { variant = 'primary', children, ...rest } = props;

  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};
