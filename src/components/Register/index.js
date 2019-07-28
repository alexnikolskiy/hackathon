import { withFormik } from 'formik';
import * as yup from 'yup';
import Register from './Register';
import { register } from '../../AC';
import { connect } from 'react-redux';

const RegisterWrapper = Register;

const RegisterValidation = yup.object().shape({
  name: yup
    .string()
    .min(3)
    .required(),
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(8)
    .max(16)
    .required(),
});

export default connect(null, { register })(withFormik({
  handleSubmit: (values, { props, setSubmitting }) => {
    const { name, email, password } = values;
    props.register({ name, email, password });
    props.history.push('/');
    setSubmitting(false);
  },
  validationSchema: RegisterValidation,
})(RegisterWrapper));
