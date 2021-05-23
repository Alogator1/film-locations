import { withField } from '@core/form';
import { MyAutocomplete } from '../autocomplete';
import { Input } from '../input';

/**
 * <Field.X />
 */
const Field = {
  Input: withField(Input),
  Autocomplete: withField(MyAutocomplete)
};

export { Field };
