import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { GameContext } from './App';
import Card from './components/Card';

function StartingPot() {
  const { gameState, updateGameState } = useContext(GameContext);
  const [ selectedPetType, setSelectedPetType] = useState('');
  const [ selectedCoverType, setSelectedCoverType] = useState('');

  const handleClick = (selectedCover) => {
    updateGameState({
      ...gameState,
      coverLevel: selectedCover,
    });
    setSelectedCoverType(selectedCover);
  };

  const handlePetTypeSelection = (petType) => {
    updateGameState({
      ...gameState,
      iconType: petType,
    });
    setSelectedPetType(petType);
  };

  return (
    <Box sx={{ flexGrow: 1, px: { xs: 2, sm: 4, md: 6 } }}>
      <Stack spacing={3} alignItems='center' sx={{ marginBlock: '2rem' }}>
        <h1>Select The Insurance Type</h1>
      </Stack>
      <Stack 
        direction={{ xs: 'column', sm: 'row' }} 
        spacing={3} 
        justifyContent='center'
        alignItems='center'
        sx={{ marginBlock: '2rem' }}
      >
        <Card
          petType='cat'
          handlePetTypeSelection={handlePetTypeSelection}
          isClicked={selectedPetType === 'cat' ? true : false}
        />
        <Card
          petType='dog'
          handlePetTypeSelection={handlePetTypeSelection}
          isClicked={selectedPetType === 'dog' ? true : false}
        />
      </Stack>
      <Stack spacing={3} alignItems='center'>
        <Item>
          <h1>Starting Pot</h1>
          <img src='Pawcoin64.png' alt='Paw coin' />
          <h2>8000 Points</h2>
        </Item>
        <Item>
          <h2>You can select one of the following covers</h2>
        </Item>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent='center'>
          <BronzeBox
            onClick={() => handleClick('bronze')}
            isSelectedType={selectedCoverType === 'bronze'}
          >
            <Item><h3>Bronze</h3></Item>
            <Item><img src='bronzeshield64px.png' alt='Bronze shield'/></Item>
            <Item><h3>1000</h3></Item>
          </BronzeBox>

          <SilverBox
            onClick={() => handleClick('silver')}
            isSelectedType={selectedCoverType === 'silver'}
          >
            <Item><h3>Silver</h3></Item>
            <Item><img src='silvershield64px.png' alt='Silver shield'/></Item>
            <Item><h3>2000</h3></Item>
          </SilverBox>

          <GoldBox
            onClick={() => handleClick('gold')}
            isSelectedType={selectedCoverType === 'gold'}
          >
            <Item><h3>Gold</h3></Item>
            <Item><img src='goldshield64px.png' alt='Gold shield'/></Item>
            <Item><h3>3000</h3></Item>
          </GoldBox>
        </Stack>
        <WarningText>
          <h3>Or risk going without any pet insurance</h3>
        </WarningText>
      </Stack>
    </Box>
  );
}

export default StartingPot;

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
  boxShadow: 'none',
  border: 'none',
  borderRadius: '0',
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const MedalBox = styled(Box)`
  cursor: pointer;
  border-radius: 0;
  padding: 0.5rem;
  text-align: center;
  margin-bottom: 1rem;
  width: 240px;
  border-radius: 1.5rem;
  background-color: ${({ isSelected }) => (isSelected ? 'inherit' : 'white')};
`;

const BronzeBox = styled(MedalBox)`
  background-color: #cd7f32;
  color: white;
  border-color: #a15d2a;
  &:hover {
    background-color: #b87333;
  }
  & > div {
    background-color: ${({ isSelectedType }) => (isSelectedType ? '#cd7f32' : 'white')};
  }
`;

const SilverBox = styled(MedalBox)`
  background-color: #c0c0c0;
  color: black;
  border-color: #8f8f8f;
  &:hover {
    background-color: #a9a9a9;
  }
  & > div {
    background-color: ${({ isSelectedType }) => (isSelectedType ? '#c0c0c0' : 'white')};
  }
`;

const GoldBox = styled(MedalBox)`
  background-color: #ffd700;
  color: #654321;
  border-color: #c5a200;
  &:hover {
    background-color: #e6c200;
  }
  & > div {
    background-color: ${({ isSelectedType }) => (isSelectedType ? '#ffd700' : 'white')};
  }
`;

const WarningText = styled(Item)`
  color: red;
`;
