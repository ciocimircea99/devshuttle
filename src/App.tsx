import * as React from 'react';
import './App.css';
import { Stack } from '@mui/material';

import DSPictureSliderCarousel from './components/DSPictureSliderCarousel';
import DSScaffold from './components/DSScaffold';
import DSPageContent from './components/DSPageContent';
import DSOfferGrid from './components/DSOfferGrid';
import DSFaqsAccordion from './components/DSFaqsAccordion';
import { useTheme } from '@mui/material/styles';
import DSStatistics from './components/DSStatistics';


//Navigation will be here
function DSApp() {

  const theme = useTheme()

  return (
    <Stack>
      <DSScaffold />
      <DSPictureSliderCarousel overlayedText="Let's have some fun!" />
      <DSPageContent>
        <DSOfferGrid />
        <DSFaqsAccordion />
        <DSStatistics />
      </DSPageContent>
      {/*
      <Reviews/>
      <PartnersSlider/>
      <Footer/> */}
    </Stack>
  );
}

export default DSApp;
