import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ExploreIcon from '@mui/icons-material/Explore';

export class DSReview {
    author: string
    authorAvatar: React.ReactNode | null;
    rating: number;
    description: string;
    source: React.ReactNode | null;

    constructor(
        author: string,
        authorAvatar: React.ReactNode | null,
        rating: number,
        description: string,
        source: React.ReactNode | null,

    ) {
        this.author = author
        this.authorAvatar = authorAvatar
        this.rating = rating
        this.description = description
        this.source = source
    }
}

export const reviews: DSReview[] = [
    new DSReview(
        'Simea Raul',
        <AccountCircleIcon />,
        4.5,
        'Un local curat, bine intretinut si personal nal amabil.Una iesi din rutina zilnica si sa te relaxezi.Recomand da te relaxezi.Recomand din plin!',
        <FacebookIcon />
    ),
    new DSReview(
        'Simea Paul',
        <AccountCircleIcon />,
        3,
        'Un local curat, bine intretinut si personal amabil.Un loc unde poti sa iesi din rutina zilnica si sa te relaxezi.Recomand din plin!',
        <ExploreIcon />
    ),
    new DSReview(
        'Simea Raul',
        <AccountCircleIcon />,
        1,
        'Un local curat, bine intretinut si personal amabil.Un loc unde poti sa iesi din rutina zilnica si sa te relaxezi.Recomand din plin!',
        <InstagramIcon />
    ),
    new DSReview(
        'Simea Raul',
        <AccountCircleIcon />,
        5,
        'Un local curat, bine intretinut si personal amabil.Un loc unde poti sa iesi din rutina zilnica si sa te relaxezi.Recomand din plin!',
        <FacebookIcon />
    ),
    new DSReview(
        'Simea Raul',
        <AccountCircleIcon />,
        7,
        'Un local curat, bine intretinut si personal amabil.Un loc unde poti sa iesi din rutina zilnica si sa te relaxezi.Recomand din plin!',
        <ExploreIcon />
    ),
]