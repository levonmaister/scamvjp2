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
      message: "Lähetyksesi on matkalla! Seuraa lähetystäsi: postnord/seuraa.com ",
      options: [
        { answer: "Huijaus", correct: false }, 
        { answer: "Aito", correct: true }
        ],
    },
    {
      sender: "DHL",
      message: "Sinulle on tullut lähetys, joka odottaa tullausta. Tullaa lähetys viimeistään 27.6.2025. Lähettäjä: Zalando. Tunnus: LR974626NL. Ohje tullaamiseen: jakelu.posti.fi",
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
    {
      sender: "omaolo",
      message: "Hei! Sinulle on uusi viesti Omaolossa. Voit lukea viestin, kun kirjaudut verkossa Omaolo-palveluun.",
      options: [
        { answer: "Huijaus", correct: false },
        { answer: "Aito", correct: true }
      ],
    },
    {
      sender: "vip",
      message: "20 FREE SPINS! Join Cobra Casino’s Christmas Fest now and celebrate BIG! www.cobracasino christmasfestNow.com",
      options: [
        { answer: "Huijaus", correct: true },
        { answer: "Aito", correct: false }
      ],
    },
    {
      sender: "+358 40 125 0664",
      message: "Tämä on viimeinen ilmoitus, veroviranomaiset ovat lähettäneet sinulle verojasi koskevan viestin. Siirry osoitteeseen vero-viesti.com ja toimi. Terveisin Vero-fi",
      options: [
        { answer: "Huijaus", correct: true },
        { answer: "Aito", correct: false }
      ],
    }
];