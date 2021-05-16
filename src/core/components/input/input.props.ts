import { ControlProps } from '@core/form';
import { ReactNode } from 'react';

type InputProps<V = string | number> = ControlProps<V> & {
  /**
   * Html input type
   */
  type?: 'text' | 'number' | 'password';

  /**
   * units of measure
   */
  units?: string;

  /**
   * Input mask
   */
  mask?: string;

  /**
   * Editable
   */
  editable?: boolean;

  /**
   * Focus handler
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => any;

  /**
   * Blur handler
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => any;

  /**
   * Key down handler
   */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => any;

  /**
   * After content
   */
  after?: JSX.Element | ReactNode;

  before?: JSX.Element | ReactNode;

  reference?: React.MutableRefObject<InputRef>;

  iconName?: string;

  _iconOnClick?: () => void;

  theme?: 'primary' | 'group';

  canEdit?: boolean;

  visibleValue?: boolean;

  group?: boolean;

  datepicker?: boolean;

  select?: boolean;

  showPlaceholder?: boolean;

  autocomplete?: boolean;

  socialIconName?: 'facebook' | 'linkedin' | 'google';

  customErrorsName?: 'country' | 'region' | 'city';

  formatValue?: (value: V) => V;
};

type InputRef = Pick<HTMLInputElement, 'blur' | 'focus'>;

/**
 * <Input /> props
 */
const useInputProps = (_: InputProps) => {};

export { InputProps, useInputProps };
