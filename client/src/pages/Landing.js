import { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/Landing";
import FormRow from "../components/FormRow";
import Logo from "../components/Logo";
import { authActions } from "../context/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";

const initialState = {
  email: "",
  password: "",
};

const Landing = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(initialState);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const showAlert = useSelector((state) => state.auth.showAlert);
  const alertText = useSelector((state) => state.auth.alertText);
  const alertType = useSelector((state) => state.auth.alertType);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = value;
    if (!email || !password) {
      dispatch(authActions.emptyErrorAlert());
      setTimeout(() => {
        dispatch(authActions.hideAlert());
      }, 2000);
      return;
    }
    const currentUser = { email, password };
    loginUser(currentUser);
  };

  const loginUser = (currentUser) => {
    dispatch(authActions.login(currentUser));
    setTimeout(() => {
      dispatch(authActions.hideAlert());
    }, 2000);
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>Log in</h3>
        {showAlert && <Alert alertText={alertText} alertType={alertType} />}
        <FormRow
          name="email"
          type="email"
          value={value.email}
          handleChange={handleChange}
        />
        <FormRow
          name="password"
          type="password"
          value={value.password}
          handleChange={handleChange}
        />
        <button className="btn" type="submit" disabled={isLoading}>
          Log In
        </button>
      </form>
    </Wrapper>
  );
};
export default Landing;
