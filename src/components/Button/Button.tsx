import { BaseButton } from './Button.styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'login';
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
  width,
  height,
  fullWidth,
  ...props
}: ButtonProps) {
  return (
    <BaseButton variant={variant} $width={width} $height={height} $fullWidth={fullWidth} {...props}>
      {children ?? label}
    </BaseButton>
  );
}
