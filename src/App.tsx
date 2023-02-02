import * as React from 'react';
import './App.css';

import { Stack, Box, Fab, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import DSPictureSliderCarousel from './components/DSPictureSliderCarousel';
import DSScaffold from './components/DSScaffold';
import DSPageContent from './components/DSPageContent';
import DSFooter from './components/DSFooter';

import { genPhotoArray } from './model/DSPhoto';
import HomePage from './site/HomePage';
import TeamPage from './site/TeamPage'

//Navigation will be here
function DSApp() {

  const theme = useTheme()
  const backgroundPictures = genPhotoArray(2)

  return (
    <Box>
      <Stack>
        <DSScaffold />
        <DSPictureSliderCarousel
          overlayedText="Echipa noastra!"
          useColorOverlay={true}
          pictures={backgroundPictures}
        />
        <TeamPage />
        <DSFooter />
      </Stack>
    </Box>
  );
}

export default DSApp;
