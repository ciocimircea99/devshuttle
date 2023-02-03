import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import CollectionsIcon from '@mui/icons-material/Collections';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import WineBarOutlinedIcon from '@mui/icons-material/WineBarOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';

import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

export class DSPage {
    title: string;
    iconURL: string;
    iconComponent: React.ReactNode | null;
    route: string;
    subpages: DSPage[];

    constructor(
        title: string,
        iconURL: string,
        iconComponent: React.ReactNode | null,
        route: string,
        subpages: DSPage[],
    ) {
        this.title = title
        this.iconURL = iconURL
        this.iconComponent = iconComponent
        this.route = route
        this.subpages = subpages
    }
}

export const topSitePages: DSPage[] = [
    new DSPage("Acasa",
        "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
        <HomeOutlinedIcon />,
        "/",
        []),
    new DSPage("Noutati",
        "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
        <FeedOutlinedIcon />,
        "/news",
        []),
    new DSPage("Echipa",
        "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
        <Groups2OutlinedIcon />,
        "/team",
        []),
    new DSPage("Galerie",
        "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
        <CollectionsIcon />,
        "/gallery",
        []),
    new DSPage("Servicii",
        "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
        <LocalOfferOutlinedIcon />,
        "/",
        [
            new DSPage("Terasa",
                "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
                <WineBarOutlinedIcon />,
                "/",
                []),
            new DSPage("Gaming",
                "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
                <SportsEsportsOutlinedIcon />,
                "/",
                []),
            new DSPage("Evenimente",
                "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
                <LocalActivityOutlinedIcon />,
                "/",
                [])
        ]),
]

export const bottomSitePages: DSPage[] = [
    new DSPage("Contact",
        "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
        <AlternateEmailOutlinedIcon />,
        "/",
        [
            new DSPage("Informatii",
                "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
                <FacebookOutlinedIcon />,
                "/",
                []),
            new DSPage("Email",
                "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
                <EmailOutlinedIcon />,
                "/",
                []),
        ]),
];

export const fastActions: DSPage[] = [
    new DSPage("Suna acum!",
        "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
        <LocalPhoneOutlinedIcon />,
        "/",
        []),
    new DSPage("Descarca locatia!",
        "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
        <FmdGoodOutlinedIcon />,
        "/",
        []),
]
