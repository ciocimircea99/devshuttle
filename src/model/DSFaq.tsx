export class DSFaq {
    title: string;
    description: string[];

    constructor(
        title: string,
        description: string[],
    ) {
        this.title = title
        this.description = description
    }
}

export const faqs = [
    new DSFaq('Ce este Explore Gaming Pub?',
        [
            'Este un loc dedicat tinerilor, perfect atât pentru grupuri cât și pentru „lupii singuratici”. Punem la dispoziție un spațiu generos format din 2 etaje de 400 metri pătrați și o terasă de peste 100 mp. Dorința noastră este să formăm o comunitate frumoasă și să creem cele mai bune condiții pentru ea. La ora actuală avem peste 10.000 de clienți care ne-au călcat pragul. Vino și tu!',
        ]),
    new DSFaq('Ce vei descoperi aici?',
        [
            '30 de computere de Gaming',
            'Playstation 4 si Playstation 5',
            'O terasa rustica pentru distractie',
            'Full bar cu racoritoare, cocktail-uri si snack-uri'
        ]),
    new DSFaq('Doresti sa organizezi un eveniment privat?',
        [
            'Urmează o zi specială și dorești să închiriezi un spațiu? De ce în Explore? Pentru că invitații tăi vor avea și alte activități pe lângă dans sau discuții la masă. Și anume… joaca pe computer, playstation. Poți opta ca noi să-ți organizăm o parte din eveniment cu niște jocuri interactive și distractive!',
        ]),
    new DSFaq('Doresti sa organizezi un eveniment pentru compania ta?',
        [
            'Un Team building în locația noastră la 1 km de centrul orașului, scutește firma de cheltuieli cu transportul și cazarea. Spațiul susține până la 150 de persoane iar activitățile sunt multiple cu jocuri interactive si de comunicare.',
        ]),
]

