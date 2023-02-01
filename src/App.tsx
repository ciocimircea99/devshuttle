import * as React from 'react';
import './App.css';
import { Stack } from '@mui/material';

import DSPictureSliderCarousel from './components/DSPictureSliderCarousel';
import DSScaffold from './components/DSScaffold';
import DSPageContent from './components/DSPageContent';
import DSOfferGrid from './components/DSOfferGrid';
import DSFaqsAccordion from './components/DSFaqsSection';
import DSStatisticsSection from './components/DSStatisticsSection';
import { useTheme } from '@mui/material/styles';
import { genPhotoArray } from './model/DSPhoto';
import DSParnersCarouselSection from './components/DSParnersCarouselSection';


//Navigation will be here
function DSApp() {

  const theme = useTheme()

  return (
    <Stack>
      <DSScaffold />
      <DSPictureSliderCarousel
        overlayedText="Let's have some fun!"
        useColorOverlay={true}
        pictures={genPhotoArray(2)}
      />
      <DSPageContent>
        <DSOfferGrid />
        <DSFaqsAccordion />
        <DSStatisticsSection />
        <DSParnersCarouselSection />
      </DSPageContent>
      {/*
      <Reviews/>
      <PartnersSlider/>
      <Footer/> */}
    </Stack>
  );
}

export default DSApp;
