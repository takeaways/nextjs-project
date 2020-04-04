import styled from 'styled-components';

export const HeaderBlock = styled.div`
  width: 100%;
  height: 100px;
  background-color: skyblue;
`;

export const HeaderSection = styled.div`
  width: 100%;
  height: 50px;
  background-color: goldenrod;
  display: ${props => props.flex && 'flex'};
`;

export const HeaderHalfSection = styled.div`
  width: 50%;
  height: 50px;
  background-color: cadetblue;
  display: flex;
`;

export const HeaderLogo = styled.div``;
export const HeaderMenu = styled.div``;
