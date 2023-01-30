import * as React from 'react';
import './App.css';
import { Stack } from '@mui/material';

import DSPictureSliderCarousel from './components/DSPictureSliderCarousel';
import DSScaffold from './components/DSScaffold';
import DSPageContent from './components/DSPageContent';
import DSOfferGrid from './components/DSOfferGrid';
import { useTheme } from '@mui/material/styles';


//Navigation will be here
function DSApp() {

  const theme = useTheme()

  return (
    <Stack>
      <DSScaffold />
      <DSPictureSliderCarousel overlayedText="Let's have some fun!" />
      <DSPageContent containerSx={{ marginTop: '-50px', zIndex: 5, paddingX: theme.spacing(4) }}>
        <DSOfferGrid />
      </DSPageContent>
      {/* <OfferGrid/>
      <FaqsAccordion/>
      <Statistics/>
      <Reviews/>
      <PartnersSlider/>
      <Footer/> */}
    </Stack>
  );
}

export default DSApp;
