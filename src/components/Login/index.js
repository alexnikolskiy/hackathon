import { withFormik } from 'formik';
import * as yup from 'yup';
import Login from './Login';
import { connect } from 'react-redux';
import { login } from '../../AC';
import axios from 'axios';

const LoginWrapper = Login;

const LoginValidation = yup.object().shape({
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

export default connect(null, { login })(withFormik({
  handleSubmit: (values, { setSubmitting, props }) => {
    const { email, password } = values;
    props.login({ email, password });
    // props.history.push('/');
    setSubmitting(false);
  },
  validationSchema: LoginValidation,
})(LoginWrapper));
