import styled from 'styled-components';

export const EditButton = props => {
  const { isAdmin } = props;

  return (
    <SEditButton disabled={!isAdmin}>編集</SEditButton>
  )
}

const SEditButton = styled.button`
  width: 100px;
  padding: 6px;
  border-radius: 8px;
`;