import DateUtils from "../utilities/DateUtils";
export class DSEvent {
    title: string;
    date: number;
    location: string;
    coverPhotoUrl: string;
    description: string;
    fullDescription: string;

    constructor(
        title: string,
        date: number,
        location: string,
        coverPhotoUrl: string,
        description: string,
        fullDescription: string,
    ) {
        this.title = title;
        this.date = date
        this.location = location;
        this.coverPhotoUrl = coverPhotoUrl;
        this.description = description;
        this.fullDescription = fullDescription;
    }
}

export const events = [
    new DSEvent(
        'FIFA 23 Championship 2v2',
        DateUtils.getCurrentTimestamp(),
        'STR TUDOR VLADIMIRESCU 75A, ORADEA',
        'https://exploregamingpub.ro/wp-content/uploads/2023/01/324194751_501796578709016_8868880927001040579_n-1.jpg',
        'Salutare! Dăm startul primului Campionat de FIFA 23 pe echipe, 2 vs 2!<br>Premii:<br>Locul I – 3000 Lei<br>Locul II – 1000 Lei<br>Locul III – 500 Lei<br>Locul IV – 300 Lei<br>Locul V – 200 Lei',
        'This is the full blahThis is the full blahThis is the full blahThis is the full blahThis is the full blahThis is the full blahThis is the full blahThis is the full blahThis is the full blahThis',
    ),
    new DSEvent(
        'FIFA 23 Championship 2v2',
        DateUtils.getCurrentTimestamp(),
        'STR TUDOR VLADIMIRESCU 75A, ORADEA',
        'https://exploregamingpub.ro/wp-content/uploads/2023/01/324194751_501796578709016_8868880927001040579_n-1.jpg',
        'Salutare! Dăm startul primului Campionat de FIFA 23 pe echipe, 2 vs 2!<br>Premii:<br>Locul I – 3000 Lei<br>Locul II – 1000 Lei<br>Locul III – 500 Lei<br>Locul IV – 300 Lei<br>Locul V – 200 Lei',
        'This is the full blahThis is the full blahThis is the full blahThis is the full blahThis is the full blahThis is the full blahThis is the full blahThis is the full blahThis is the full blahThis',
    ),
    new DSEvent(
        'FIFA 23 Championship 2v2',
        DateUtils.getCurrentTimestamp(),
        'STR TUDOR VLADIMIRESCU 75A, ORADEA',
        'https://exploregamingpub.ro/wp-content/uploads/2023/01/324194751_501796578709016_8868880927001040579_n-1.jpg',
        'Salutare! Dăm startul primului Campionat de FIFA 23 pe echipe, 2 vs 2!<br>Premii:<br>Locul I – 3000 Lei<br>Locul II – 1000 Lei<br>Locul III – 500 Lei<br>Locul IV – 300 Lei<br>Locul V – 200 Lei',
        'This is the full blahThis is the full blahThis is the full blahThis is the full blahThis is the full blahThis is the full blahThis is the full blahThis is the full blahThis is the full blahThis',
    ),
    new DSEvent(
        'FIFA 23 Championship 2v2',
        DateUtils.getCurrentTimestamp(),
        'STR TUDOR VLADIMIRESCU 75A, ORADEA',
        'https://exploregamingpub.ro/wp-content/uploads/2023/01/324194751_501796578709016_8868880927001040579_n-1.jpg',
        'Salutare! Dăm startul primului Campionat de FIFA 23 pe echipe, 2 vs 2!<br>Premii:<br>Locul I – 3000 Lei<br>Locul II – 1000 Lei<br>Locul III – 500 Lei<br>Locul IV – 300 Lei<br>Locul V – 200 Lei',
        'This is the full blahThis is the full blahThis is the full blahThis is the full blahThis is the full blahThis is the full blahThis is the full blahThis is the full blahThis is the full blahThis',
    ),
    new DSEvent(
        'FIFA 23 Championship 2v2',
        DateUtils.getCurrentTimestamp(),
        'STR TUDOR VLADIMIRESCU 75A, ORADEA',
        'https://exploregamingpub.ro/wp-content/uploads/2023/01/324194751_501796578709016_8868880927001040579_n-1.jpg',
        'Salutare! Dăm startul primului Campionat de FIFA 23 pe echipe, 2 vs 2!<br>Premii:<br>Locul I – 3000 Lei<br>Locul II – 1000 Lei<br>Locul III – 500 Lei<br>Locul IV – 300 Lei<br>Locul V – 200 Lei',
        'This is the full blahThis is the full blahThis is the full blahThis is the full blahThis is the full blahThis is the full blahThis is the full blahThis is the full blahThis is the full blahThis',
    )
]

