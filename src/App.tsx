import * as React from 'react';
import './App.css';
import { Stack } from '@mui/material';

import DSPictureSliderCarousel from './components/DSPictureSliderCarousel';
import DSScaffold from './components/DSScaffold';
import DSPageContent from './components/DSPageContent';
import DSOfferGrid from './components/DSOfferGrid';
import DSFaqsAccordion from './components/DSFaqsAccordion';
import DSStatistics from './components/DSStatistics';
import DSPartnersCarousel from './components/DSPartnersCarousel';
import { useTheme } from '@mui/material/styles';
import { genPartnersPhotoArray, genPhotoArray } from './model/DSPhoto';


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
        <DSStatistics />
        {/* <DSPhotoGallery />
        <DSPartners/>  */}
        <DSPartnersCarousel
          pictures={genPartnersPhotoArray()} />
      </DSPageContent>
      {/*
      <Reviews/>
      <PartnersSlider/>
      <Footer/> */}
    </Stack>
  );
}

export default DSApp;
