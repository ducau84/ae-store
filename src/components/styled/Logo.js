import styled from "styled-components"

export const LogoContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  a {
    text-decoration: none;
    color: white;
  }
  @media (max-width: 768px) {
    padding-left: 40px;
  }
`

export const Logo = styled.img`
  max-width: 80px;
  height: auto;
  @media (max-width: 768px) {
    max-width: 65px;
  }
`