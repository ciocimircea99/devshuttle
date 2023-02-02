import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import WineBarOutlinedIcon from '@mui/icons-material/WineBarOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';

export class DSOffer {
    title: string;
    iconComponent: React.ReactNode | null;
    description: string;
    actionTitle: string;

    constructor(
        title: string,
        iconComponent: any | null,
        description: string,
        actionTitle: string,
    ) {
        this.title = title
        this.iconComponent = iconComponent
        this.description = description
        this.actionTitle = actionTitle
    }
}

export const offer = [
    new DSOffer("Terasa",
        <WineBarOutlinedIcon sx={{ width: '64px', height: '64px', color: 'primary.main' }} />,
        'Terasa • Full Bar • Narghilea',
        'Vezi meniul'),
    new DSOffer("Gaming",
        <SportsEsportsOutlinedIcon sx={{ width: '64px', height: '64px', color: 'primary.main' }} />,
        'PC • PS5 • PS4',
        'Vezi preturile'),
    new DSOffer("Evenimente",
        <LocalActivityOutlinedIcon sx={{ width: '64px', height: '64px', color: 'primary.main' }} />,
        'eSports • Evenimente personale • Team Building Companii',
        'Vezi oferta'
    ),
]


