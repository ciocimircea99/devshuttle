import * as React from 'react';
import DSPageContent from '../components/DSPageContent';
import DSPageSectionTitled from '../components/DSPageSectionTitled';
import DSActiveEvent from '../components/DSActiveEvent';
import DSNews from '../components/DSNews';
import DSEvents from '../components/DSEvents';

export interface NewsPageProps {
}

export default function NewsPage({ ...props }: NewsPageProps) {
    return (
        <DSPageContent topMargin='-50px'>
            <DSActiveEvent></DSActiveEvent>
            <DSPageSectionTitled title={'EVENIMENTE'}>
                <DSEvents/>
            </DSPageSectionTitled>
            <DSPageSectionTitled title={'NOUTATI'}>
                <DSNews/>
            </DSPageSectionTitled>
        </DSPageContent>
    )
}