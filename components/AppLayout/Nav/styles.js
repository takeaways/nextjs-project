import styled from "styled-components";
import Link from 'next/link';

export const NavBlock = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  background-color:chartreuse;
  display: flex;
  justify-content: space-around;
  align-items:flex-start;
`;

export const NavListItem = styled.ul`
  background-color: #00B7FF;
  padding: 0;  
`;

export const NavListItemMenu = styled.li`
  list-style: none;
  position: relative;
  display: inline-block;
  width: 100%;
  & > ul {
    display: none;
  }
  &:hover {
    & > ul {
      display: block;
    }
  }
`;

export const NavListItemMenuItem = styled.ul`
    padding: 10px;    
    position: absolute;
    background-color:yellow;
    width: 120px;
    z-index: 100000;
  
`;
export const NavListItemMenuItemMenu = styled.li`
    list-style: none;
    margin-bottom:2px;
    &:hover{
      text-decoration: underline;
    }
`;
