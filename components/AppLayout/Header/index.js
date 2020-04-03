import React from 'react';
import { HeaderBlock, HeaderSection, HeaderSectionText } from './styles';
import Nav from '../Nav';

const AppHeader = () => {
  return (
    <HeaderBlock>
      <HeaderSection>
        <Nav />
      </HeaderSection>
      <HeaderSection>
        <Nav />
      </HeaderSection>
    </HeaderBlock>
  );
};

export default AppHeader;
