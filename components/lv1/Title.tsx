import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
  font-size: 3.5rem;
  color: #e5e5e5;
`;

const Title: React.VFC = () => {
  return <Style>現在時刻</Style>;
};

export default Title;