import Wrapper from "../assets/wrappers/Sidebar";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar-container">
        <header>
          <Logo />
        </header>
      </div>
    </Wrapper>
  );
};
export default Sidebar;
