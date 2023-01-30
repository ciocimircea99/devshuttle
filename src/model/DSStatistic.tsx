import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import WineBarOutlinedIcon from '@mui/icons-material/WineBarOutlined';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';

export class DSStatistic {
    title: string;
    iconComponent: React.ReactNode | null;
    maxValue: number;

    constructor(
        title: string,
        iconComponent: React.ReactNode | null,
        maxValue: number,
    ) {
        this.title = title
        this.iconComponent = iconComponent
        this.maxValue = maxValue
    }
}

export const statistics = [
    new DSStatistic('Evenimente reusite!', <LocalActivityOutlinedIcon sx={{ width: '36px', height: '36px', color: 'primary.main' }} />, 50),
    new DSStatistic('Clienti bucurosi!', <Groups2OutlinedIcon sx={{ width: '36px', height: '36px', color: 'primary.main' }} />, 2500),
    new DSStatistic('Bauturi servite!', <WineBarOutlinedIcon sx={{ width: '36px', height: '36px', color: 'primary.main' }} />, 10000),
    new DSStatistic('Ore de gaming!', <SportsEsportsOutlinedIcon sx={{ width: '36px', height: '36px', color: 'primary.main' }} />, 20000),
]

