import './App.css';
import { Box, Typography } from '@mui/material';

import { styled } from '@mui/system';

const Hero = styled('div')({
  backgroundColor: '#2b2b2b',
  height: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero>
          <Box sx={{ 
            fontSize: '12rem',
            fontFamily: 'Dongle',
            color: 'white'
                      }}>
        역시
          </Box>
        </Hero>
      </header>
    </div>
  );
}

export default App;
