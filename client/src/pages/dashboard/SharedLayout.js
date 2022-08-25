import { authActions } from "../../context/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar";
import Wrapper from "../../assets/wrappers/SharedLayout";

const SharedLayout = () => {
  const dispatch = useDispatch();
  const logoutUser = () => {
    return dispatch(authActions.logout());
  };
  return (
    <Wrapper>
      <main className="dashboard">
        <Sidebar />
        <div>
          sharedLayout
          <button onClick={logoutUser}>Logout</button>
        </div>
      </main>
    </Wrapper>
  );
};
export default SharedLayout;
