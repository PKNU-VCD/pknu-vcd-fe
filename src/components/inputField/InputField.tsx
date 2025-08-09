import DeleteIcon from '../../assets/icons/DeleteIcon.svg';
import * as S from './InputField.styles';

interface InputFieldProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onDelete?: () => void;
}

const InputField = ({
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  onDelete,
}: InputFieldProps) => {
  return (
    <S.InputWrapper>
      <S.InputField
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange?.(e.target.value)}
      />
      <S.DeleteButton onClick={onDelete}>
        <DeleteIcon />
      </S.DeleteButton>
    </S.InputWrapper>
  );
};

export default InputField;
