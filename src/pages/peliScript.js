export const script = [
    {
      sender: "DHLx",
      message: "Tilauksesi vaatii tunnistautuminen pankkitunuksilla, klikkaa linkkia vahvistaksesi tilauksen: www.vahtistaatilausx.fi",
      options: [
        { answer: "Huijaus", correct: true }, 
        { answer: "Aito", correct: false }
        ],
    },
    {
      sender: "PostNord", 
      message: "Lähetyksesi on matkalla! Seuraa lähetystäsi: https://postnord/seuraalahetysta.com ",
      options: [
        { answer: "Huijaus", correct: false }, 
        { answer: "Aito", correct: true }
        ],
    },
    {
      sender: "DHL",
      message: "Hei! Sinulle on tullut lähetys EU:n ulkopuolelta, joka odottaa tullausta. Tullaa lähetys viimeistään 27.6.2025. Lähettäjä: Peak Performance. Tunnus: LR97462648926NL. Tullauksen voi hoitaa Tullin verkkosivuilla (Postin käsittelymaksu 3,10€). Katso ohje Tullin sivuilla tullaamiseen: https://jakelu.posti.fi/#/cd/LR97462648926NL=DjFI=fi",
      options: [
        { answer: "Huijaus", correct: false }, 
        { answer: "Aito", correct: true }
        ],
    },
    {
      sender: "Aktia", 
      message: "Tervehdys. Sinulla on paljon maksamattomia maksuja. Maksa heti tässä: maksanyt123!.com",
      options: [
        { answer: "Huijaus", correct: true }, 
        { answer: "Aito", correct: false }
        ],
    },
    {
      sender: "PoSTI", 
      message: "Hei! Sinulla on lähetys joka odottaa sinua. Maksa postitus tässä: www.postii/maksu.fi",
      options: [
        { answer: "Huijaus", correct: true }, 
        { answer: "Aito", correct: false }
        ],
    },
    {
      sender: "Klarna", 
      message: "Maksusi yhtiölle Zalando.fi erääntyy tänään. Maksa lasku nyt: www.klarna/maksU.com",
      options: [
        { answer: "Huijaus", correct: true }, 
        { answer: "Aito", correct: false }
        ],
    },
];