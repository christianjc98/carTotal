import styled from "styled-components";

const Wrapper = styled.section`
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--white);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      transition: var(--transition);
    }
    header {
      height: 6rem;
      display: flex;
      justify-content: center;
    }
    img {
      width: auto;
      margin-top: 1rem;
    }
  }
`;

export default Wrapper;
