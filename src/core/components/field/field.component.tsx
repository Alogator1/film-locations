import { withField } from '@core/form';
import { MyAutocomplete } from '../autocomplete';
import { Input } from '../input';
import { TextField } from '../text-field';

/**
 * <Field.X />
 */
const Field = {
  Input: withField(Input),
  Autocomplete: withField(MyAutocomplete),
  TextField: withField(TextField)
};

export { Field };
