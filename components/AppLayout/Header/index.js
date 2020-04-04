import React from 'react';
import {
  HeaderBlock,
  HeaderSection,
  HeaderSectionText,
  HeaderHalfSection
} from './styles';
import Nav from '../Nav';

const AppHeader = () => {
  return (
    <HeaderBlock>
      <HeaderSection flex>
        <HeaderHalfSection>1</HeaderHalfSection>
        <HeaderHalfSection>2</HeaderHalfSection>
      </HeaderSection>
      <HeaderSection>
        <Nav />
      </HeaderSection>
    </HeaderBlock>
  );
};

export default AppHeader;
