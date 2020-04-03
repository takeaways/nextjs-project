import React from 'react';
import AppHeader from './Header';
import { Container, MainBlock } from './styles';
import AppFooter from './Footer';
import Content from './Content';
import SideMenu from './Side';

const AppLayout = ({ children }) => {
  return (
    <Container>
      <AppHeader />
      <MainBlock>
        <SideMenu />
        <Content>{children}</Content>
      </MainBlock>
      <AppFooter />
    </Container>
  );
};

export default AppLayout;
