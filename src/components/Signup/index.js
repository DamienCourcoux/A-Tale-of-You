import { useSelector, useDispatch } from 'react-redux';

import './styles.scss';

const Signup = () => {
  const dispatch = useDispatch();

  const {
    pseudo,
    email,
    password,
    confirmPassword,
  } = useSelector((state) => ({
    pseudo: state.user.pseudo,
    email: state.user.email,
    password: state.user.password,
    confirmPassword: state.user.confirmPassword,
  }));

  return (
    <div className="Signup">
      Signup
    </div>
  );
};

export default Signup;
