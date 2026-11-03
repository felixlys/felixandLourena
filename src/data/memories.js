
const memories = [
    {
        id: 1,
        question: 'Manakah foto selfie yang seyeng kirim pertama kali banget?',
        type: 'photo',
        options: [
            {
                label: 'A',
                image: '/memories/option-01-a.jpeg',
            },
            {
                label: 'B',
                image: '/memories/option-01-b.jpeg',
            },
        ],
        correctAnswer: 0,
        correctMessage: 'Ihiy, inget seyeng!',
        wrongMessage:
            'Gapapa, yang bener itu foto selfie yang seyeng screenshot. Seyeng bilang ke aku hasilnya better.',
    },
    {
        id: 2,
        type: 'multiple-choice',
        question: 'Lourena seyeng, inget Two-Step Verification kita?',
        options: [
            { label: 'A', text: 'Gocap, Liquid, Naga' },
            { label: 'B', text: 'Gocap, Liquid, Sapu-sapu' },
        ],
        correctAnswer: 1,
        correctMessage: 'OK, bener ini seyeng!',
        wrongMessage: 'Huuh, ini bukan, seyeng.',
    },
    {
        id: 3,
        type: 'multiple-choice',
        question: 'Nama Chinese kita berdua?',
        options: [
            { label: 'A', text: '陈新华, 刘恩星' },
            { label: 'B', text: '陈哲华, 刘恩星' },
        ],
        correctAnswer: 0,
        correctMessage: 'HEBAT!',
        wrongMessage: 'Okey, gapapa seng. Yang bener yang A.',
    },
    {
        id: 4,
        question: 'Lourena Gocap yang mana?',
        type: 'photo',
        options: [
            {
                label: 'A',
                image: '/memories/option-04-a.jpeg',
            },
            {
                label: 'B',
                image: '/memories/option-04-b.png',
            },
        ],
        correctAnswer: 0,
        correctMessage: 'Ihiy, inget seyeng!',
        wrongMessage: 'Gocap, seng. Gocap.',
    },
    {
        id: 5,
        question: 'Yang paling cakep?',
        type: 'photo',
        options: [
            {
                label: 'A',
                image: '/memories/option-05-a.jpeg',
            },
            {
                label: 'B',
                image: '/memories/option-05-b.jpeg',
            },
            {
                label: 'C',
                image: '/memories/option-05-c.jpeg',
            },
        ],
        correctAnswer: 0,
        correctMessage: 'Tos, aku juga berpikir begitu!',
        wrongMessage: 'Yang A cakep banget, seng.',
    },
    {
        id: 6,
        question: 'Stiker andalan seyeng?',
        type: 'photo',
        options: [
            {
                label: 'A',
                image: '/memories/option-06-a.png',
            },
            {
                label: 'B',
                image: '/memories/option-06-b.png',
            },
            {
                label: 'C',
                image: '/memories/option-06-c.png',
            },
        ],
        correctAnswer: 1,
        correctMessage: 'Goodd, benerrr!',
        wrongMessage: 'Yang C, seng.',
    },
    {
        id: 7,
        type: 'multiple-choice',
        question: 'Felix dan Lourena lahir tanggal berapa?',
        options: [
            {
                label: 'A',
                text: '11 Desember 2001, 29 Desember 2004',
            },
            {
                label: 'B',
                text: '21 Desember 2001, 19 Desember 2004',
            },
        ],
        correctAnswer: 0,
        correctMessage: 'BENERRRR!',
        wrongMessage: 'Okey, gapapa seng. Yang bener yang A.',
    },
    {
        id: 8,
        type: 'multiple-choice',
        question: 'Aku inget tanggal kita match di Matchu. Seyeng inget ga?',
        options: [
            {
                label: 'A',
                text: '22 Agustus 2026',
            },
            {
                label: 'B',
                text: '30 Agustus 2026',
            }
        ],
        correctAnswer: 0,
        correctMessage: 'WOWWWW',
        wrongMessage: '22 Agustus xing, :)',
    },
    {
        id: 9,
        question: 'Manakah foto berdua yg ak pertama kali generate di AI, xing?',
        type: 'photo',
        options: [
            {
                label: 'A',
                image: '/memories/option9-a.jpeg',
            },
            {
                label: 'B',
                image: '/memories/option9-b.jpeg',
            },
        ],
        correctAnswer: 0,
        correctMessage: 'Goodd, benerrr!',
        wrongMessage: 'Yang B, seng.',
    },
    {
        id: 10,
        type: 'multiple-choice',
        question: 'Makanan yang merupakan kesukaan xing2 dan felix gasuka?',
        options: [
            {
                label: 'A',
                text: 'Xing2: Pete dan Jengkol, Felix : Selada Air dan Jengkol dan Sawi Kailan',
            },
            {
                label: 'B',
                text: 'Xing2: Telor, Felix : Kangkung dan Sawi Kailan',
            },
            {
                label: 'C',
                text: 'Xing2: (Gaada yang Gasuka), Felix : Selada Air dan Jengkol dan Sawi Kailan',
            },
            {
                label: 'D',
                text: 'Xing2: Pete dan Jengkol, Felix : Kopi',
            },
        ],
        correctAnswer: 0,
        correctMessage: 'BENER',
        wrongMessage: 'YG A XING',
    },
    {
        id: 11,
        question: 'Manakah yg imut',
        type: 'photo',
        options: [
            {
                label: 'A',
                image: '/memories/option10-a.jpeg',
            },
            {
                label: 'B',
                image: '/memories/option10-b.jpeg',
            },
        ],
        correctAnswer: 1,
        correctMessage: 'Harus kuakui xing2 imut ges ',
        wrongMessage: 'Jinja, akoe imut?',
    },
    {
        id: 12,
        type: 'multiple-choice',
        question: 'Siapa yang pagi suka ngopi?',
        options: [
            {
                label: 'A',
                text: 'Aku',
            },
            {
                label: 'B',
                text: 'Xing2',
            },
            {
                label: 'C',
                text: 'Aku dan Xing2',
            },
        ],
        correctAnswer: 1,
        correctMessage: 'Pagi Ak musti nanya menu kopinya avvah',
        wrongMessage: 'Xing2 ku tak bisa ngopi lagee',
    },

    {
        id: 13,
        type: 'multiple-choice',
        question: 'Makanan ngambek nya xing2 sama aku?',
        options: [
            {
                label: 'A',
                text: 'Nasi Soto Ayam atau Rawon',
            },
            {
                label: 'B',
                text: 'Batagor Sapu2',
            },
            {
                label: 'C',
                text: 'Siomay Ceban',
            },
        ],
        correctAnswer: 2,
        correctMessage: 'Good',
        wrongMessage: 'Ceban...ceban',
    },
    {
        id: 14,
        type: 'multiple-choice',
        question: 'The Last banget ni seng. Angka berapa yang seyeng suruh ak tebak saat move WA pertama kali?',
        options: [
            {
                label: 'A',
                text: '6420',
            },
            {
                label: 'B',
                text: '1147',
            },
        ],
        correctAnswer: 0,
        correctMessage: 'Wii inget seng',
        wrongMessage: '6420 pas itu seyeng minta ak tebak 4 digit terakhir sebelom move WA.',
    },
];

export default memories;
