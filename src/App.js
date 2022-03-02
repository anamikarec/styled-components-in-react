import "./styles.css";
import styled from "styled-components";

export default function App() {
  const Wrapper = styled.div`
    border: 1px solid red;
    h2 {
      color: red;
    }
  `;

  const H1 = styled.h1`
    color: blue;
  `;

  return (
    <Wrapper className="App">
      <H1>Hello CodeSandbox</H1>
      <h2>Start editing to see some magic happen!</h2>
    </Wrapper>
  );
}
