import * as React from 'react';
import { useTheme } from '@mui/material/styles';

import DSPageContent from '../components/DSPageContent';
import DSPageSectionTitled from '../components/DSPageSectionTitled';

import { members, honorable } from '../model/DSMember';
import DSTeamMembers from './../components/DSTeamMembers';

export default function HomePage({ }) {

    const theme = useTheme()

    const dsmembers = members
    const dshonorable = honorable

    return (
        <DSPageContent topMargin='0px'>
            <DSPageSectionTitled title="VINO SA-I CUNOSTI!" showPaper={false}>
                <DSTeamMembers teamMembers={dsmembers} />
            </DSPageSectionTitled>
            <DSPageSectionTitled title="MEMBRI CU CARE NE MANDRIM" showPaper={false}>
                <DSTeamMembers teamMembers={dshonorable} />
            </DSPageSectionTitled>
        </DSPageContent>
    )
}