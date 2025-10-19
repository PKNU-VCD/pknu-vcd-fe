import { BaseButton } from './Button.styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'submit'
    | 'submit_sub'
    | 'exhibition'
    | 'confirm'
    | 'cancel'
    | 'modal';
  headerType?: 'main' | 'sub';
  label?: string;
  fullWidth?: boolean;
  isActive?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function Button({
  label,
  children,
  variant = 'primary',
  headerType,
  fullWidth,
  isActive,
  ...props
}: ButtonProps) {
  return (
    <BaseButton
      headerType={headerType}
      variant={variant}
      $fullWidth={fullWidth}
      $isActive={isActive}
      {...props}
    >
      {children ?? label}
    </BaseButton>
  );
}
