import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { GameContext } from './App';

const Item = styled(Paper)(({ theme }) => ({
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

function StartingPot() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const animal = params.get('animal');
  const asset = animal === 'cat' ? 'cat.svg' : 'dog.svg';

  const { gameState, updateGameState } = useContext(GameContext);

  const handleClick = (selectedCover) => {
    updateGameState({
      ...gameState,
      cover: selectedCover,
    });
  };

  return (
    <Box sx={{ flexGrow: 1, px: { xs: 2, sm: 4, md: 6 } }}>
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        <Grid item xs={12}>
          <Item>
            <img src={asset} width={100} height={100} alt="Icon of selected pet type" />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <h1>Starting Pot</h1>
            <img src="Pawcoin64.png" alt="Paw coin" />
            <h2>8000 Points</h2>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <h2>You can select one of the following covers</h2>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <BronzeGrid onClick={() => handleClick(1000)}>
            <Item>
              <h3>Bronze</h3>
            </Item>
            <Item>
              <img src='bronzeshield64px.png' alt='Bronze shield'/>
            </Item>
            <Item>
              <h3>1000</h3>
            </Item>
          </BronzeGrid>
        </Grid>

        <Grid item xs={12} sm={4}>
          <SilverGrid onClick={() => handleClick(2000)}>
            <Item>
              <h3>Silver</h3>
            </Item>
            <Item>
              <img src='silvershield64px.png' alt='Silver shield'/>
            </Item>
            <Item>
              <h3>2000</h3>
            </Item>
          </SilverGrid>
        </Grid>

        <Grid item xs={12} sm={4}>
          <GoldGrid onClick={() => handleClick(3000)}>
            <Item>
              <h3>Gold</h3>
            </Item>
            <Item>
              <img src='goldshield64px.png' alt='Gold shield'/>
            </Item>
            <Item>
              <h3>3000</h3>
            </Item>
          </GoldGrid>
        </Grid>

        <Grid item xs={12}>
          <Item>
            <WarningText>
              <h3>Or risk going without any pet insurance</h3>
            </WarningText>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default StartingPot;

const MedalGrid = styled(Grid)`
  cursor: pointer;
  border-radius: 0;
  padding: 0.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const BronzeGrid = styled(MedalGrid)`
  background-color: #cd7f32;
  color: white;
  border-color: #a15d2a;
  &:hover {
    background-color: #b87333;
  }
`;

const SilverGrid = styled(MedalGrid)`
  background-color: #c0c0c0;
  color: black;
  border-color: #8f8f8f;
  &:hover {
    background-color: #a9a9a9;
  }
`;

const GoldGrid = styled(MedalGrid)`
  background-color: #ffd700;
  color: #654321;
  border-color: #c5a200;
  &:hover {
    background-color: #e6c200;
  }
`;


const WarningText = styled(Item)`
  color: red;
`;
