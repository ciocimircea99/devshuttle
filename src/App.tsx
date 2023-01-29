import * as React from 'react';
import './App.css';

import DSDrawer from './components/DSDrawer';
import DSAppBar from './components/DSAppBar';
import DSPictureSlideCarousel from './components/DSPictureSliderCarousel';
import DSScaffold from './components/DSScaffold';

function DSApp() {

  return (
    <div>
      <DSScaffold/>
      <DSPictureSlideCarousel overlayedText='Welcome' />
      <DSPictureSlideCarousel overlayedText='Welcome' />
      <DSPictureSlideCarousel overlayedText='Welcome' />
      <DSPictureSlideCarousel overlayedText='Welcome' />
      <DSPictureSlideCarousel overlayedText='Welcome' />
    </div>
  );
}

export default DSApp;
