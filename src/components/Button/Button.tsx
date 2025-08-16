import { BaseButton } from './Button.styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'login';
  label?: string;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function Button({ label, children, variant = 'primary', fullWidth, ...rest }: ButtonProps) {
  return (
    <BaseButton variant={variant} $fullWidth={fullWidth} {...rest}>
      {children ?? label}
    </BaseButton>
  );
}
