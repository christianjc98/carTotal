import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  align-items: center;

  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
    width: 7rem;
  }

  h3 {
    text-align: center;
  }

  .form {
    width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  .btn {
    width: 80%;
    margin: 2rem auto 0;
    display: block;
  }
`;

export default Wrapper;
