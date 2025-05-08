import { useState } from 'react';
import '../styles/Checklist.css';

const Checklist = () => {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (index) => {
    if (openItem === index) {
        setOpenItem(null);
    } else {
        setOpenItem(index);
    }
  };

  const items = [
    {
      title: "1. Tarkista lähettäjän nimi, linkki ja tekstin kieli",
      description: ["Onko lähettäjän nimi oudosti kirjoitettu tai jopa tuntematon?",
                   "Näkyykö linkissä väärin kirjoitettu tai epäilyttävä osoite?",
                   "Huijausviestit paljastuvat usein kirjoitusvirheistä ja epäjohdonmukaisuuksista." 
                ]

    },
    {
      title: "2. Älä klikkaa epäilyttäviä linkkejä",
      description: ["Vältä linkkejä, jos et ole varma viestin luotettavuudesta."],
    },
    {
      title: "3. Pyydetäänkö kirjautumaan sisään tai antamaan arkaluonteisia tietoja?",
      description: ["Luotettavat tahot eivät koskaan pyydä pankkitunnuksia, salasanoja tai henkilötietoja tekstiviestillä.",
                    "Älä kirjaudu sisään linkin kautta - käytä aina virallista verkkosivua."

      ]
    },
    {
        title: "4. Kiireen tunne on hälytysmerkki",
        description: ["Huijarit yrittävät usein saada sinut toimimaan nopeasti ja ajattelematta.",
                      "Ilmaisuja kuten “Toimi heti!” tai “Maksua vaaditaan nyt!” käyetään painostamiseen.",
                      "Älä reagoi kiirehtiviin viesteihin."
        ]
    },
    {
        title: "5. Liian hyvä ollakseen totta?",
        description: ["Kyse on todennäköisesti huijauksesta, jos viestissä luvataan suuria palkintoja, rahaa tai ainutlaatuisia tilaisuuksia."
        ]
    },
    {
        title: "6. Jos olet epävarma - varmista viralliselta taholta",
        description: ["Jos olet epävarma, ota yhteyttä organisaatioon heidän verkkosivujensa kautta - älä käytä viestissä olevia yhteystietoja.",
                      "Voit ilmoittaa huijauksista Liikenne- ja viestintävirasto Traficomin Kyberturvallisuuskeskukselle."
                     
        ]
    }
  ];

  return (
    <div className="checklist-wrapper">
      {items.map((item, index) => (
        <div key={index} className="checklist-item" onClick={() => handleToggle(index)}>
          <div className="checkmark-title">
            <span className="title-text">{item.title}</span>
          </div>
          {openItem === index && (
            <div className="item-description">
              {item.description.map((desc, i) => (
                <p key={i}>{desc}</p>))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Checklist;