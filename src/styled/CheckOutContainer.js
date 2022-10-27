import styled from "styled-components";

export const CheckOutContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 1rem auto;
  padding: 2rem;
  border-radius: 15px;
  min-height: 55vh;
  max-width: 1200px;
  font-family: Fredoka One;
  background-color: #ffffff87;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (max-width: 768px) {
    margin: 1rem;
  }
  article {
    line-height: 3rem;
  }
  h1 {
    font-size: 2.5rem;
    color: #0d2538;
    text-transform: uppercase;
    text-align: center;
    text-shadow: 0px 3px 3px #0e25373d;
  }
  h4 {
    margin-top: 1rem;
    max-width: 30%;
    text-align: center;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    background-color: #ffffff8c;
    box-shadow: #0000003d 0px 3px 8px;
    border-radius: 15px;
    text-shadow: 0px 3px 3px #0e25373d;
  }
  p {
    margin-top: 1.5rem;
    font-size: 1.2rem;
    text-align: center;
    text-shadow: 0px 3px 3px #0e25373d;
    text-transform: uppercase;
  }
  span {
    margin-left: 1rem;
    color: #ec0f7d;
    padding: 0.8rem;
    background-color: #0e253736;
    box-shadow: #0000003d 0px 3px 8px;
    border-radius: 15px;
    text-shadow: 1px 1px 1px #ffff;
    text-transform: none;
  }
  
  form {
    margin-top: 2rem;
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    max-width: 20rem;

    label {
      text-align: center;
      text-transform: uppercase;
    }

    input,
    select {
      margin: 1rem 0;
      padding: 0.5rem;
      border: black 0.2rem solid;
      border-radius: 15px;
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
      font-size: 1rem;
      font-weight: 400;
      background-color: #fffff7;
    }
    button {
      align-self: center;
      max-width: 70%;
    }
    h4 {
      max-width: 100%;
      margin-bottom: 1rem;
    }
    div {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      button {
        max-width: 100%;
        font-size: 0.8rem;
      }
    }
  }
`;
