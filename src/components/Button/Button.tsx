import { BaseButton } from './Button.styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'submit'
    | 'exhibition'
    | 'confirm'
    | 'cancel';
  headerType?: 'main' | 'sub';
  label?: string;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function Button({
  label,
  children,
  variant = 'primary',
  headerType,
  fullWidth,
  ...props
}: ButtonProps) {
  return (
    <BaseButton headerType={headerType} variant={variant} $fullWidth={fullWidth} {...props}>
      {children ?? label}
    </BaseButton>
  );
}
