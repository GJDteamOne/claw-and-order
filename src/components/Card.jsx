import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'

const Card = ({
  petType,
  handlePetTypeSelection,
  isClicked
}) => {
  const asset = petType === 'cat' ? 'cat.svg' : 'dog.svg';
  const heading = petType === 'cat' ? 'Cats' : 'Dogs';
  const formattedPetType = petType.charAt(0).toUpperCase() + petType.slice(1).toLowerCase();

  return (
    <CardItem>
      <img src={asset} width={50} height={50} alt='Icon of selected pet type' />
      <h2>{heading}</h2>
      <CardButton
        onClick={() => handlePetTypeSelection(petType)}
        isClicked={isClicked}
      >
        {`${formattedPetType} Insurance`}
      </CardButton>
    </CardItem>
  );
};

export default Card;

export const CardItem = styled(Paper)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  text-align: left;
  color: black;
  background-color: #11b67a;
  border-radius: 0.5rem;
  width: 240px;

  .clicked {
    background-color: black;
  }
`;

export const CardButton = styled(Button)`
  color: ${({ isClicked }) => (isClicked ? 'white' : 'black')};
  border: 2px solid black;
  border-radius: 1.5rem;
  font-weight: bold;
  text-transform: none;
  background-color: ${({ isClicked }) => (isClicked ? 'black' : '#11b67a')};

  &:hover {
    text-decoration: underline;
  }
`;
