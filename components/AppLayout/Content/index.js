import React from 'react';

import { ContentBlock, ContentItemHeader, ContentItemBody } from './styles';

const Content = ({ children }) => {
  return (
    <ContentBlock>
      <ContentItemHeader>13</ContentItemHeader>
      <ContentItemBody>{children}</ContentItemBody>
    </ContentBlock>
  );
};

export default Content;
