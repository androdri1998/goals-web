import React, {
  ComponentType,
  InputHTMLAttributes,
  useCallback,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';

import {
  Container,
  Label,
  ContainerInput,
  ContainerIcon,
  InputText,
} from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ComponentType<IconBaseProps>;
  name: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  styles?: object;
}

const Input: React.FC<IInputProps> = ({
  icon: Icon,
  name,
  type,
  styles,
  placeholder,
  value,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);

  const handleOnFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    if (value) {
      setIsFilled(true);
    }

    setIsFocused(false);
  }, [value]);

  return (
    <Container>
      <Label>{name}</Label>
      <ContainerInput
        isFocused={isFocused}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        style={styles}
      >
        {Icon && (
          <ContainerIcon>
            <Icon
              size={20}
              color={isFocused || isFilled ? '#c9ada7' : '#4A4E69'}
            />
          </ContainerIcon>
        )}
        <InputText
          value={value}
          placeholder={placeholder}
          name={name}
          type={type}
          onChange={onChange}
        />
      </ContainerInput>
    </Container>
  );
};

export default Input;
