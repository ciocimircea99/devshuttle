import * as React from 'react';
import { useTheme } from '@mui/material/styles';

import DSOfferGrid from '../components/DSOfferGrid';
import DSFaqsAccordion from '../components/DSFaqsAccordion';
import DSReviews from '../components/DSReviews';
import DSPageSectionTitled from '../components/DSPageSectionTitled';
import DSPageSection from '../components/DSPageSection';
import DSPartnersCarousel from '../components/DSPartnersCarousel';
import DSStatistics from '../components/DSStatistics';
import DSGallery from '../components/DSGallery';

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
        <div>
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
        </div>
    )
}