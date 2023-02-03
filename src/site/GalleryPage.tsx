import * as React from 'react';
import DSPageSectionTitled from '../components/DSPageSectionTitled';
import GalleryItem from '../components/DSGalleryItem';
import DSPageContent from '../components/DSPageContent';
import { genGalleryTerrace } from '../model/DSPhoto';
import { genGalleryBauturi, genGalleryPC, genGalleryPS } from './../model/DSPhoto';


export interface GalleryPageProps {
}

export default function GalleryPage({ ...props }: GalleryPageProps) {

    return (
        <DSPageContent topMargin='0px'>
            <DSPageSectionTitled title="TERASA RUSTICĂ - PERFECTĂ PENTRU O SEARĂ CU PRIETENII!">
                <GalleryItem pictures={genGalleryTerrace()} />
            </DSPageSectionTitled>
            <DSPageSectionTitled title="TE SERVIM CU BĂUTURI DELICIOASE LA PREȚURI ACCESIBILE!">
                <GalleryItem pictures={genGalleryBauturi()} />
            </DSPageSectionTitled>
            <DSPageSectionTitled title="TE AȘTEPTĂM SINGUR SAU ÎN GAȘCĂ ÎN ZONELE DEDICATE NERVILOR ȘI RÂSETELOR!">
                <GalleryItem pictures={genGalleryPC()} />
            </DSPageSectionTitled>
            <DSPageSectionTitled title="ZONELE EXCLUSIVE PENTRU JOACĂ!">
                <GalleryItem pictures={genGalleryPS()} />
            </DSPageSectionTitled>
        </DSPageContent>
    )
}