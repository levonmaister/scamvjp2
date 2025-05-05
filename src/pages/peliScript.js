export const script = [
    {
      sender: "DHLx",
      message: "Tilauksesi vaatii tunnistautuminen pankkitunuksilla, klikkaa linkkia vahvistaksesi tilauksen: www.fakelink.fi",
      options: [
        { answer: "Hujaus", correct: true }, 
        { answer: "Aito", correct: false }
        ],
    },
    {
      sender: "PostNord", 
      message: "Lähetyksesi on matkalla! Seuraa lähetystäsi: https//realLink.com ",
      options: [
        { answer: "Hujaus", correct: false }, 
        { answer: "Aito", correct: true }
        ],
    },
    {
      sender: "Aktia", 
      message: "Tervehdys. Sinulla on paljon maksamattomia maksuja. Maksa heti tässä: maksanyt123!.com",
      options: [
        { answer: "Hujaus", correct: true }, 
        { answer: "Aito", correct: false }
        ],
    },
];