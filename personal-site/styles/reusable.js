import styled from "styled-components";

export const MainHeadingStyles = styled.div`
  display: flex;
  justify-content: center;
  max-width: var(--siteWidth);
  margin: 0 auto;
  font-weight: bold;
  font-size: 2rem;
  padding-bottom: 2rem;
  padding-top: 2rem;
  color: var(--white);
`;

export const ButtonStyles = styled.button`
  background-color: var(--black);
  color: var(--white);
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  border-color: var(--main);
  font-size: 17px;
  line-height: 27px;
  font-weight: 500;
  &:hover {
    background-color: var(--mainActive);
    opacity: 1;
    transition: background-color 200ms ease-out, color 200ms ease-out;
  }
  a {
    color: var(--white);
    text-decoration: none;
  }
`;
