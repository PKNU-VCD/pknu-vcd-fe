import { BaseButton } from './Button.styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'login' | 'addFile' | 'upload';
  label?: string;
  width?: string | number;
  height?: string | number;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function Button({ label, children, variant = 'primary', ...props }: ButtonProps) {
  return (
    <BaseButton variant={variant} {...props}>
      {children ?? label}
    </BaseButton>
  );
}
