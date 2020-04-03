import styled from 'styled-components';
export const ContentBlock = styled.div`
  width: 100%;
  height: 100%;
  background-color: purple;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ContentItemHeader = styled.div`
  background-color: darkblue;
  padding: 0;
  margin: 0;
  height: 20%;
  width: 100%;
`;

export const ContentItemBody = styled.div`
  background-color: red;
  height: 80%;
  width: 100%;
`;
