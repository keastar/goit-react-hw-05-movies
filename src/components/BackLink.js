import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HiArrowLeft } from 'react-icons/hi';
import css from './BackLink.module.css';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  margin-left: 20px;
  color: black;
  text-decoration: none;
  font-weight: 200;
  text-transform: uppercase;

  :hover {
    background-color: violet;
    cursor: pointer;
    border-color: #191970;
  }
`;

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <button className={css.button}>
        <HiArrowLeft size="14" />
        {children}
      </button>
    </StyledLink>
  );
};
