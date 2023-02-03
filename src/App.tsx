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
import GalleryPage from './site/GalleryPage';
import NewsPage, { NewsPageProps } from './site/NewsPage';

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
            overlayedText="LET'S HAVE SOME FUN!"
            useColorOverlay={true}
            pictures={backgroundPictures}
          />

          <Routes>
            <Route>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/team' element={<TeamPage />}></Route>
              <Route path='/gallery' element={<GalleryPage />}></Route>
              <Route path='/news' element={<NewsPage />}></Route>
            </Route>
          </Routes>

          <DSFooter />
        </Stack>
      </Box>
    </div>
  );
}

export default DSApp;
