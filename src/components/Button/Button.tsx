import { BaseButton } from './Button.styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'login';
  headerType?: 'main' | 'sub';
  label?: string;
  width?: string | number;
  height?: string | number;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function Button({
  label,
  children,
  variant = 'primary',
  headerType,
  ...props
}: ButtonProps) {
  return (
    <BaseButton variant={variant} headerType={headerType} {...props}>
      {children ?? label}
    </BaseButton>
  );
}
