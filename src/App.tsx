import * as React from 'react';
import './App.css';
import { Stack } from '@mui/material';

import DSPictureSliderCarousel from './components/DSPictureSliderCarousel';
import DSScaffold from './components/DSScaffold';


//Navigation will be here
function DSApp() {

  return (
    <Stack>
      <DSScaffold />
      <DSPictureSliderCarousel overlayedText="Let's have some fun!" />
    </Stack>
  );
}

export default DSApp;
