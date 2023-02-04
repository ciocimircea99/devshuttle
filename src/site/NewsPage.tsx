import * as React from 'react';
import DSPageContent from '../components/DSPageContent';
import DSPageSectionTitled from '../components/DSPageSectionTitled';
import DSActiveEvent from '../components/DSActiveEvent';
import DSEventsInfiniteScrollList from '../components/DSEventsInfiniteScrollList';
import DSPageSection from '../components/DSPageSection';
import { events } from '../model/DSEvent';

export interface NewsPageProps {
}

export default function NewsPage({ ...props }: NewsPageProps) {
    const dsevents = events

    const activeEvent = dsevents[0]

    return (
        <DSPageContent topMargin='-50px'>
            <DSPageSection>
                <DSActiveEvent activeEvent={activeEvent} />
            </DSPageSection>
            <DSPageSectionTitled title="EVENIMENTE" showPaper={false}>
                <DSEventsInfiniteScrollList events={dsevents} />
            </DSPageSectionTitled>
        </DSPageContent>
    )
}