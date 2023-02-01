import * as React from 'react';
import './App.css';

import { Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import DSPictureSliderCarousel from './components/DSPictureSliderCarousel';
import DSScaffold from './components/DSScaffold';
import DSPageContent from './components/DSPageContent';
import DSOfferGrid from './components/DSOfferGrid';
import DSFaqsAccordion from './components/DSFaqsAccordion';
import DSReviews from './components/DSReviews';
import DSPageSectionTitled from './components/DSPageSectionTitled';
import DSPageSection from './components/DSPageSection';
import DSPartnersCarousel from './components/DSPartnersCarousel';
import DSStatistics from './components/DSStatistics';
import DSGallery from './components/DSGallery';

import { genPhotoArray, genPartnersPhotoArray, genGalleryPictures } from './model/DSPhoto';
import { faqs } from './model/DSFaq';
import { offer } from './model/DSOffer';
import { reviews } from './model/DSReview';
import { statistics } from './model/DSStatistic';




//Navigation will be here
function DSApp() {

  const theme = useTheme()

  const backgroundPictures = genPhotoArray(2)
  const dsstatistics = statistics
  const dsfaqs = faqs
  const dsoffer = offer
  const dsgallery = genGalleryPictures()
  const dsreviews = reviews
  const partnerPictures = genPartnersPhotoArray()


  return (
    <Stack>
      <DSScaffold />
      <DSPictureSliderCarousel
        overlayedText="Let's have some fun!"
        useColorOverlay={true}
        pictures={backgroundPictures}
      />
      <DSPageContent>
        <DSPageSection>
          <DSStatistics statistics={dsstatistics} />
        </DSPageSection>

        <DSPageSectionTitled title="Ce trebuie sa stii?" showPaper={false}>
          <DSFaqsAccordion faqs={dsfaqs} />
        </DSPageSectionTitled>

        <DSPageSectionTitled title="Oferta noastra" showPaper={false}>
          <DSOfferGrid offer={dsoffer} />
        </DSPageSectionTitled>

        <DSPageSectionTitled title="Galerie" showPaper={true} paperSx={{ padding: '0' }}>
          <DSGallery pictures={dsgallery} />
        </DSPageSectionTitled>

        <DSPageSectionTitled title="Ce spun clientii nostri?" showPaper={false}>
          <DSReviews reviews={dsreviews} />
        </DSPageSectionTitled>

        <DSPageSectionTitled title="Partenerii nostri">
          <DSPartnersCarousel pictures={partnerPictures} />
        </DSPageSectionTitled>
      </DSPageContent>
      {/*
      <Reviews/>
      <PartnersSlider/>
      <Footer/> */}
    </Stack>
  );
}

export default DSApp;
