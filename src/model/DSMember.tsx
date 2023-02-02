export class DSMember {
    name: string;
    title: string;
    pictureUrl: string;
    description: string;

    constructor(
        pictureUrl: string,
        name: string,
        title: string,
        description: string,
    ) {
        this.name = name;
        this.title = title;
        this.pictureUrl = pictureUrl;
        this.description = description;
    }
}

export const members = [
    new DSMember(
        'https://exploregamingpub.ro/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-01-27-at-15.50.54-q1a4tue1obvkds57hz60wyhp5bjfoby8ahpb16eiew.jpeg',
        'Simea Raul',
        'Founder',
        'Absolvent al Facultății de Jurnalism, e pasionat de mișcare în aer liber, CS:GO, citit și clipuri motivaționale. Își stresează toți prietenii cu sfaturi despre viață.'),
    new DSMember(
        'https://exploregamingpub.ro/wp-content/uploads/elementor/thumbs/simea-paul-q0t28epeqztn3ukoi4vpc8g7d8zuxri6br3khs0988.jpg',
        'Simea Paul',
        'CO - Founder',
        'Absolvent al IETI Oradea, o persoană harnică, dar fără direcție, pasionată de joacă până la 7 dimineața și găsitul scuzelor la eșec.'),
    new DSMember(
        'https://exploregamingpub.ro/wp-content/uploads/elementor/thumbs/ianina-baciu-q0t28hixbhxi2ogl1o3l1pql5elykutdc520xlw2pk.jpg',
        'Ianina Baciu',
        'Project Manager',
        'Masterand al Facultății de Arte din Oradea, e o persoană veselă și comunicativă, pasionată de pictură și băutură.'),
    new DSMember(
        'https://exploregamingpub.ro/wp-content/uploads/elementor/thumbs/giancarlo-vai-q0t28kcfw01d1ichl7bgr70yxk827y4kcj0hdfrw6w.jpg',
        'Giancarlo Vai',
        'Functional Manager',
        'Masterand în Drept Penal și Procedură Penală, un om foarte bine organizat, pasiunile lui fiind glumele lui Raul și gamingul.'),
    new DSMember(
        'https://exploregamingpub.ro/wp-content/uploads/elementor/thumbs/vlad-iuhas-q0t28bvw6hps50orylntmr5tl3drao6zbd541y4fqw.jpg',
        'Iuhas Vlad',
        'Team Leader',
        'Absolvent al Alcolicilor Anonimi, îi scapă atenția la detalii, astfel persoanele coordonate de el învață greșit sau incomplet.'),
    new DSMember(
        'https://exploregamingpub.ro/wp-content/uploads/elementor/thumbs/Antochi-Alex-q0t28n5ygi580c8e4qjcgobcppu5v1frcwyxt9npo8.jpg',
        'Antochi Alex',
        'Technical Support',
        'O persoană cu bune abilități de comunicare, puțin sensibilă, Alex e pasionat de gagici și computere.'),
    new DSMember(
        'https://exploregamingpub.ro/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-12-30-at-15.48.16-q0t2868v1hi27cwyvj827sl20s5k0hklal876acss8.jpeg',
        'Mark Herpan',
        'Operator sala',
        'O persoană cu foarte mult bun simț, un bun jucător de CS:GO, căruia ii este frică sau lene să dezvolte o echipă profesională.'),
    new DSMember(
        'https://exploregamingpub.ro/wp-content/uploads/elementor/thumbs/laurentiu_chis-q1a4stqc9shdszmgg1bkppqpzak4c4wp5g9dbdwv5k.jpg',
        'Laurențiu Chiș',
        'Operator sala',
        'Castigator al ultimelor trei campionate de FIFA din local, e pasionat si de fotbal in viata reala dar nu-l mai ajuta corpul.'),
]

export const honorable = [
    new DSMember(
        'https://exploregamingpub.ro/wp-content/uploads/elementor/thumbs/image-4-q1agaup4lp95po85ti2phqixm7vfslkdqozs8214fs.png',
        'Peter',
        '',
        'El e Peter! Sotia si copilul sau locuiesc in Rusia! El se antreneaza in Oradea si reprezinta Romania la campionatele Europene si Mondiale de Judo la categoria lui. Este pasionat si de CS:GO, level 10 Faceit. Un om cu foarte mult bun simt. De cate ori are ocazia, vine sa se relaxeze la un CS:GO. E un membru al comunitatii cu care ne mândrim!'),
    new DSMember(
        'https://exploregamingpub.ro/wp-content/uploads/elementor/thumbs/image-5-q1agbl0lx296qr5xjtg9fjvu909ps4gv6b9dnsy3lk.png',
        'Emil',
        '',
        'Felicitări colegului nostru Emil care a luat locul 1 la "cupa Heredeu Gold Gym", categoria Men’s Physique juniori, organizată în 9 octombrie la Casa de Cultură. Acest băiat e un exemplu când vine vorba de determinare și disciplină.'),
    new DSMember(
        'https://exploregamingpub.ro/wp-content/uploads/elementor/thumbs/image-1-q1ag2hwrupteigd2lw23buffix1zdge9xc8enif3qw.png',
        'Dorian',
        '',
        'Student la medicină anul 6, e o fire amuzantă, iar pasiunile lui sunt Ciuc-ul la 0.5, Ciuc la 0.33, pianul si LOL unde e challanger pe eune si euw.'),
    new DSMember(
        'https://exploregamingpub.ro/wp-content/uploads/elementor/thumbs/image-2-q1ag6dyq5154kcpmw2li5d341bvo8cua4lfr5qnfzs.png',
        'Adrian Șulcă',
        '',
        'Sportivul Adrian Șulcă a fost desemnat cel mai bun judoka-junior din Europa în 2021. Acest lucru s-a întâmplat în cadrul Galei Uniunii Europene de Judo. Campion European și Campion Mondial, sportivul nostru a primit trofeul la Sofia, acolo unde a participat la europenele de seniori.'),
    new DSMember(
        'https://exploregamingpub.ro/wp-content/uploads/elementor/thumbs/image-3-q1ag8kx63457nliy30q5yt5txp2i6xjqfg8jgzedh4.png',
        'Toni',
        '',
        'Un membru al comunitatii cu care ne mândrim! A castigat numeroase concursuri la karate kyokushin, avand centura neagra! Pe langa asta, preda copiilor arte martiale in timp ce il ajuta pe tatal sau la firma familiei.Il cunoastem de aproape 3 ani. Acum este politist in cadrul MAI.'),
]



