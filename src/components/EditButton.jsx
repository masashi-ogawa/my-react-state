import styled from 'styled-components';
import { useContext } from 'react';
import { AdminFlagContext } from './providers/AdminFlagProvider';

export const EditButton = () => {
  const { isAdmin } = useContext(AdminFlagContext);

  return (
    <SEditButton disabled={!isAdmin}>編集</SEditButton>
  )
}

const SEditButton = styled.button`
  width: 100px;
  padding: 6px;
  border-radius: 8px;
`;