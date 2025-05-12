# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. hejsan :) hejj igen, h. elvira testar:)

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





Figma: https://www.figma.com/design/w3DVtkY8Ivewy33Pt0UR6l/VJP-VDM?node-id=0-1&t=dX0BmlmdfSkZw99h-1

Nettisivu: https://scamvjp26.vercel.app/



Levon arbete:


Skapade repository samt projekt - 3h
Lade grunden för Ilmoitus, Navbar, Etusivu, Peli och Routes: 4h
Ilmoitus sivu och dropzone(problem med drag and drop) - 5h
Numerotvalehtelee början - 2h
Horrostories struktur startad + första storyn - 2h
Debugging Horrostory merge problem - 1h
Horrostory display-flex, responsivisuus + mobile 2h
Statistik med hjälp av rechart bibliotek och tailwindd - 0.5h
TOT ≈ 19h


Emelie:

pieniä kielimuutoksia, navbar globaaliski komponentiski.
Peli.jsx, peli.css, peliScript.js - 8h
Etusivu.css (tausta), pelinappi, divs huijaustarnoille- 2h 
Puhelinkäsikuva etusivulle, responsiivisuutta - 3h
Numerot.css responsiivisuutta - 2h
Responsiivisuutta pelissä ja etusivulla (font-size yms) - 5h
responsiivisuutta suurille nnäytöille tarinat ja footer - 1h
tot ≈ 21h


Elvira arbete:

Navbar länkar. Gjorde både så att de scrollar ner från "etusivu" till rätt sektion men också så att de scrollar ner till rätt sektion om man är på en annan sida än "etusivu". Till exempel kan man klicka på "tarina" från spelets sida och ändå komma rätt. 3h
Navbar CSS. 1h
Små grejer i CSS, som till exempel font och fontstorlek på alla sidor. 1h
Artikel CSS + responsivitet, pratbubblorna och positioneringen tog länge. 8h
Responsivitet på andra ställen. 1h.
Figma 3h.
(Skrev artiklarna som är viktigare för VDM som också tog mera arbete - 4h)
Totalt: 17h

Wilma:

Figman aloitus ja alustava design - 4,5h
Navbarin toteutus ja sille mobiilinavigaatio sekä navbarin css - 4h
Pääsivun "näin tunnistat huijausviestin"-osio, eli dropdown - 5h
Muutoksia sekä Etusivu.jsx että Peli.sx tiedostoihin ja näiden css, jotta "Pelaa peliä"-nappi vie etusivulta oikeasti peli sivulle kuten huijausviestin tunnistuspeli tekee mobiilinavigaation kautta (+lopeta nappi) - 3h
Kirjoitusvirheiden korjaamista ja pieniä design korjauksia - 1h
Alustava footer ja sen linkit - 1h
Navbarin responsiivisuus - 2h




Millaista työnjaon tekeminen oli? Oliko helppoa jakaa työ tehtäviin palasiin ryhmäläisten kesken?

Det var lätt att fördela arbetet då man sa exakt vad man gjorde på hela tiden, och vi hade en bra struktur med vad allt vi måste ha gjort tills deadline. Alla var medvetna om alla delar som skulle göras och hur slutprodukten skulle se ut tack vare miro och figman.
Vissa gjorde mera på själva webbsidan och vissa gjorde mera på VDMs andra delar som att skriva artiklarna och checklistan. Ibland skedde missförstånd på grund av att vi inte alltid satt och kodade fysiskt på plats brevid varandra - då kunde ett par personer ha arbetat på samma sida. Alla tog sig an projektet motiverat, men vissa hann börja tidigare än andra. Vissa arbetade därmed mera på många mindre komponenter och till exempel CSS, medan vissa arbetade på en hel stor komponent. Till slut hade alla ändå satt ungefär lika mycket tid på projektet. 


Mitä uutta opitte UI-suunnittelusta viestinnän keinona?

Vi lärde oss att färger, fonter och sidan stil beskriver formalitet och hur seriöst ämnet i fråga är. Med våra färger och fonter ville vi skapa en nätsida som speglar bedrägeriernas allvar med att ha mörkblå som en färg, och ganska strukturell layout, men samtidigt hålla stilen ganska informell och positiv med ljusa färger och informell font i och med att vår ena huvudkomponent är ett spel som människor ska tycka att är visuellt trevligt att öppna upp. 

Vi vill även få människor att fortsätta scrolla ända ner till sidan med att ha länkar som scrollar ner till nästa sektion i navigations bar:en. De viktigaste länkarna "ilmoita huijaus" är synligt hela tiden i den globala navbaren och navbarens konstanta synlighet är även viktigt för användaren för att den ska kunna navigera vidare till vilken sektion som helst på framsidan trots att användaren t.ex spelar spelet som ligger på en anna sida än framsidan.

Interaktivitetens vikt är även anmärkningsvärd. Från en användares synvinkel ville vi på framsidan förutom det interaktiva spelet - ha några interaktiva komponenter som till exempel checklistan för att få användaren att stanna upp. Den rörliga statistik rutan är även trevligt iögonfallande som får läsaren att stanna upp. 


Jos hyödynsitte tehtävän teossa tekoälyä, millä tavalla?

Vi fråga ofta AI om hjälp när något inte fungerade som det skulle, och bad den ge alternativa lösningar. Vi kopierade inte kod direkt från AI. 
