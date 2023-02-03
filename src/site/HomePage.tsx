import * as React from 'react';
import { useTheme } from '@mui/material/styles';

import DSPageContent from '../components/DSPageContent';
import DSOfferGrid from '../components/DSOfferGrid';
import DSFaqsAccordion from '../components/DSFaqsAccordion';
import DSReviews from '../components/DSReviews';
import DSPageSectionTitled from '../components/DSPageSectionTitled';
import DSPageSection from '../components/DSPageSection';
import DSPartnersCarousel from '../components/DSPartnersCarousel';
import DSStatistics from '../components/DSStatistics';
import DSScrollableGallery from '../components/DSImageListGallery';

import { genPartnersPhotoArray, genGalleryPictures } from '../model/DSPhoto';
import { faqs } from '../model/DSFaq';
import { offer } from '../model/DSOffer';
import { reviews } from '../model/DSReview';
import { statistics } from '../model/DSStatistic';


export default function HomePage({ }) {

    const theme = useTheme()

    const dsstatistics = statistics
    const dsfaqs = faqs
    const dsoffer = offer
    const dsgallery = genGalleryPictures()
    const dsreviews = reviews
    const partnerPictures = genPartnersPhotoArray()

    return (
        <DSPageContent topMargin='-50px'>
            <DSPageSection>
                <DSStatistics statistics={dsstatistics} />
            </DSPageSection>

            <DSPageSectionTitled title="CE TREBUIE SA STII?" showPaper={false}>
                <DSFaqsAccordion faqs={dsfaqs} />
            </DSPageSectionTitled>

            <DSPageSectionTitled title="OFERTA NOASTRA" showPaper={false}>
                <DSOfferGrid offer={dsoffer} />
            </DSPageSectionTitled>

            <DSPageSectionTitled title="GALERIE" showPaper={true} paperSx={{ padding: '0' }}>
                <DSScrollableGallery pictures={dsgallery} />
            </DSPageSectionTitled>

            <DSPageSectionTitled title="CE SPUN CLIENTII NOSTRI?" showPaper={false}>
                <DSReviews reviews={dsreviews} />
            </DSPageSectionTitled>

            <DSPageSectionTitled title="PARTENERI">
                <DSPartnersCarousel pictures={partnerPictures} />
            </DSPageSectionTitled>
        </DSPageContent>
    )
}