import styled from "styled-components";

export const Foot = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
  margin: 0px;
  background-color: #0d2538;
  color: white;
  font-family: "Trebuchet MS","Lucida Sans Unicode","Lucida Grande", "Lucida Sans",Arial,sans-serif;
  font-weight: 800;
  font-size: 0.8rem;
  text-transform: uppercase;
  box-shadow: -1px -8px 32px -4px rgba(0,0,0,0.56);
  a {
    color: #fff;
    display: flex;
    align-content: center;
    &:hover {
      color: #ec0f7d;
    }
  }
`