import * as React from 'react';
import './App.css';

import { Stack, Box, Fab, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import DSPictureSliderCarousel from './components/DSPictureSliderCarousel';
import DSScaffold from './components/DSScaffold';
import DSFooter from './components/DSFooter';

import { genPhotoArray } from './model/DSPhoto';
import HomePage from './site/HomePage';
import TeamPage from './site/TeamPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Navigation will be here
function DSApp() {

  const theme = useTheme()
  const backgroundPictures = genPhotoArray(2)

  return (
    <div>
      <Box>
        <Stack>
          <DSScaffold />
          <DSPictureSliderCarousel
            overlayedText="Echipa noastra!"
            useColorOverlay={true}
            pictures={backgroundPictures}
          />
          <BrowserRouter>
            <Routes>
              <Route>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/team' element={<TeamPage />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
          <DSFooter />
        </Stack>
      </Box>

    </div>
  );
}

export default DSApp;
