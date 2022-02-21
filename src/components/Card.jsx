import styled from 'styled-components';
import { EditButton } from './EditButton';

export const Card = props => {
  const { isAdmin } = props;

  return (
    <SDiv>
      <p>山田太郎</p>
      <EditButton isAdmin={isAdmin} />
    </SDiv>
  )
};

const SDiv = styled.div`
  width: 300px;
  height: 200px;
  margin: 8px;
  border-radius: 8px;
  background-color: #e9dbd0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;