import DeleteIcon from '../../assets/icons/DeleteIcon.svg';
import * as S from './InputField.styles';

interface InputFieldProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onDelete?: () => void;
  multiline?: boolean;
}

const InputField = ({
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  onDelete,
  multiline = false,
}: InputFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    onChange?.(newValue);
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
    } else {
      onChange?.('');
    }
  };

  return (
    <S.Wrapper multiline={multiline}>
      {multiline ? (
        <S.TextAreaField placeholder={placeholder} value={value} onChange={handleChange} />
      ) : (
        <S.InputField type={type} placeholder={placeholder} value={value} onChange={handleChange} />
      )}

      <S.DeleteButton onClick={handleDelete}>
        <DeleteIcon />
      </S.DeleteButton>
    </S.Wrapper>
  );
};

export default InputField;
