import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import WineBarOutlinedIcon from '@mui/icons-material/WineBarOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';

import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';


export class DSPage {
    title: string;
    iconComponent: any | null;
    iconUrl: string;
    subpages: DSPage[];

    constructor(
        title: string,
        iconUrl: string,
        iconComponent: any | null,
        subpages: DSPage[],
    ) {
        this.title = title
        this.iconUrl = iconUrl
        this.iconComponent = iconComponent
        this.subpages = subpages
    }
}

export const topSitePages: DSPage[] = [
    new DSPage("Acasa",
        "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
        <HomeOutlinedIcon />,
        []),
    new DSPage("Echipa",
        "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
        <Groups2OutlinedIcon />,
        []),
    new DSPage("Preturi si Servicii",
        "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
        <LocalOfferOutlinedIcon />,
        [new DSPage("Gaming",
            "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
            <SportsEsportsOutlinedIcon />,
            []),
        new DSPage("Terasa",
            "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
            <WineBarOutlinedIcon />,
            []),
        new DSPage("Evenimente",
            "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
            <LocalActivityOutlinedIcon />,
            [])]),
    new DSPage("Noutati",
        "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
        <FeedOutlinedIcon />,
        [])
]

export const bottomSitePages: DSPage[] = [
    new DSPage("Contact",
        "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
        <AlternateEmailOutlinedIcon  />,
        [new DSPage("Email",
            "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
            <EmailOutlinedIcon />,
            []),
        new DSPage("Social",
            "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
            <FacebookOutlinedIcon />,
            []),
        new DSPage("Phone",
            "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
            <LocalPhoneOutlinedIcon />,
            []),
        new DSPage("Location",
            "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
            <FmdGoodOutlinedIcon />,
            [])
        ]),
    new DSPage("Rate us",
        "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
        <StarOutlinedIcon />,
        [])
];