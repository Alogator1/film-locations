import { Form as FormikForm, FormikContext, FormikProps } from 'formik';
import * as React from 'react';

/**
 * Form
 */
const Form: React.FC<React.HTMLAttributes<HTMLFormElement> & {
  html?: boolean;
  use: FormikProps<any>;
  formRef?: any;
}> = ({ html, use, formRef, children, ...props }) => (
  <FormikContext.Provider value={use}>
    {html ? (
      <FormikForm ref={formRef} {...props}>
        {children}
      </FormikForm>
    ) : (
      children
    )}
  </FormikContext.Provider>
);

Form.defaultProps = {
  html: true
};

export { Form };
