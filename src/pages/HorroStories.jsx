import "../styles/stories.css";

import story1img from "../pictures/tvåkvinnor_liten.png";
import story2img from "../pictures/gubbe_liten.png";
import story3img from "../pictures/ensamkvinna_liten.png";

const HorrorStories = () => {
  return (
    <div className="stories-container">
      <h1 className="storyheadline">
        Marjatta ja Anni jäivät arvontahuijauksen uhreiksi
      </h1>
        <div className="story-wrapper artikel1">
          <div className="story1-image-container">
            <img className="storykuva1" src={story1img} />
            <div className="quote-bubble1">
                ”Se en ollut minä!” huudahdin, kun Anni soitti.<br />– Marjatta, 71 v.
            </div>
          </div>
          <div className="story-description">
            <p>
              Marjatta ja Anni ovat kotoisin Porvoosta ja ovat olleet ystäviä jo
              pitkään. <br></br>
              <br></br>
              Anni kertoo, kuinka hän eräänä päivänä sai tavallisen
              Facebook-viestin Marjatalta. Yleensä he juttelevat
              tekstiviestitse, mutta koska molemmat käyttävät Facebookia
              aktiivisesti, ei Anni pitänyt sitä mitenkään outona. <br></br>{" "}
              <br></br>
              Viestissä Marjatta kysyi Annin puhelinnumeroa ja kertoi,
              että he olivat osallistuneet yhdessä arvontaan ja voittaneet.
              <br></br> <br></br>– Minusta oli outoa, että hän kysyi
              puhelinnumeroani, koska sen pitäisi olla hänellä tallessa
              puhelimessaan. En kuitenkaan ajatellut asiaa sen enempää, ja
              lottovoitto kuulosti tietenkin upealta, Anni kertoo.
              <br></br> <br></br>– Seuraavaksi Marjatta pyysi joitakin
              kuusinumeroisia koodeja, joita olin saanut puhelimeeni, ja annoin
              ne hänelle.
              <br></br> <br></br>
              Seuraavana päivänä Anni soitti Marjatalle selvittääkseen, mistä
              arvonnasta oli oikein kyse.
              <br></br> <br></br>– “Se en ollut minä!” huudahdin, kun Anni
              soitti, Marjatta kertoo.
              <br></br> <br></br>
              Lopulta he yhdessä ymmärsivät ikävän totuuden: Marjatan
              Facebook-tili oli kaapattu. Kuusinumeroisten koodien avulla myös
              useita Annin tiliä oli saatu haltuun.
              <br></br> <br></br>
              Anni ja Marjatta ilmoittivat asiasta poliisille ja pankille. Annia neuvottiin
              vaihtamaan salasanansa ja tekemään niistä
              turvallisemmat. Pankki huolehti siitä, ettei Annin tililtä
              katoaisi rahaa siltä varalta, että huijarit olisivat saaneet
              haltuunsa hänen pankkitietonsa.
            </p>
          </div>
      </div>
      <div className="story2">
        <h1 className="storyheadline">
          Onni menetti kymmeniä tuhansia euroja puhelinhuijauksessa
        </h1>

        <div className="story-wrapper artikel2">
          <div className="story2-image-container">
            <img className="storykuva1" src={story2img} />
            <div className="quote-bubble2">
              Minun olisi pitänyt pitää kiireellistä tilannetta varoitusmerkkinä<br />– Onni, 84-v.
            </div>
          </div>
          <div className="story-description">
            <p>
              Helmikuussa Onni Kivivuorelle soitti henkilö, joka kertoi olevansa
              Norwegian Bankin edustaja. Hän kertoi, että Onnin tilillä oli havaittu
              huolestuttavaa toimintaa. Onni vastasi, ettei käytä Norwegian
              Bankia, vaan hänen pankkinsa on Nordea. Tähän soittaja vastasi:
              "Selvä, saat pian soiton Nordeasta." <br></br> <br></br>
              Ja niinhän siinä kävi, hetken kuluttua puhelin soi uudelleen, ja soittaja
              esittäytyi Nordean edustajaksi. Hän kertoi, että Onnin täytyi
              toimia nopeasti, jotta hänen rahansa eivät katoaisi. Seuraavaksi soittaja
              neuvoi, että rahat tulisi siirtää toiselle tilille turvaan.
              <br></br> <br></br>– Minun olisi pitänyt pitää kiireellistä
              tilannetta varoitusmerkkinä, mutta mies puhelimessa oli hyvin
              vakuuttava ja puhui sujuvaa suomea. Menin paniikkiin, koska luulin
              säästöjeni olevan vaarassa, Onni kertoo.
              <br></br> <br></br>Onni toimi “Nordea-henkilön”
              ohjeiden mukaan ja luovutti pankkitunnuksensa. Kun puhelu päättyi
              Onni huomasi, että todellinen Nordea oli yrittänyt soittaa hänelle.
              Silloin Onni ymmärsi, mitä oli tapahtunut. Soitettuaan takaisin pankkiin,
              hänen epäilyksensä vahvistuivat - rahat olivat kadonneet tililtä.
              <br></br> <br></br>
              Kun Onni pyysi pankkia keskeyttämään siirron, hän sai järkyttävän vastauksen:
              se ei ollut enää mahdollista. Rahat oli jo nostettu ja siirretty puolalaiselle
              pankkitilille. Kyse oli kymmenistä tuhansista euroista.
              <br></br> <br></br>Onni teki asiasta rikosilmoituksen, ja poliisi
              alkoi tutkia tapausta välittömästi.
              <br></br> <br></br>
              Puoli vuotta myöhemmin Onni yllättyi tarkistaessaan verkkopankkinsa - tilille
              oli ilmestynyt lähes sama summa, jonka hän aikaisemmin oli menettänyt. Rahat oli
              palauttanut Puolan syyttäjänvirasto. Onni oli jo luullut menettäneensä rahansa
              lopullisesti, mutta Puolan ja Suomen poliisin sekä syyttäjänviraston yhteistyön
              ansiosta hän sai lähes koko summan takaisin.
            </p>
          </div>
        </div>
      </div>
      <div className="story3">
        <h1 className="storyheadline">
          Tiina menetti säästönsä huijausviestin takia
        </h1>
        <div className="story-wrapper artikel3">
          <div className="story2-image-container">
            <img className="storykuva3" src={story3img} />
            <div className="quote-bubble3">
                Menetin 3000 euroa ja ensimmäiset eläkematkasuunnitelmani.<br />– Tiina, 65-v.
            </div>
          </div>
          <div className="story-description">
            <p>
              Tiina Mäkelä oli juuri jäänyt eläkkeelle vuoden alussa ja
              säästänyt rahaa ensimmäistä eläkeläismatkaansa varten, kun hän
              lankesi kalasteluviestiin. Kyseessä oli huijausviesti, jonka tarkoituksena
              oli houkutella klikkaamaan linkkiä ja siten saada pääsy hänen
              henkilökohtaisiin tietoihin ja pankkitunnuksiin.
              <br></br> <br></br>
              Tiina sai tekstiviestin, joka näytti tulevan Verohallinnolta.
              Viestissä kerrottiin, että hänen tulisi käyttää viestissä mukana olevaa
              linkkiä päästäkseen tärkeään veroasioita koskevaan viestiin.
              Viestin mukaan asia oli kiireellinen. Tiina klikkasi linkkiä ja
              päätyi sivulle, joka pyysi hänen pankkitunnuksiaan.
              <br></br> <br></br>– Ajattelin, että viesti oli luotettava, koska
              se näytti tulevan osoitteesta vero.fi ja asia vaikutti
              kiireelliseltä, joten annoin pankkitunnukseni, Tiina kertoo.
              <br></br> <br></br>Tiina ei koskaan päässyt linkin kautta
              mihinkään varsinaiseen viestiin, vaan unohti koko asian, kunnes
              sai puhelun pankiltaan. Pankki oli huomannut, että hänen säästötilinsä
              oli tyhjennetty.
              <br></br> <br></br>
              Koska Tiina oli itse syöttänyt pankkitunnuksensa vastoin pankin
              ohjeita, joiden mukaan tunnuksia ei saa koskaan antaa linkkien kautta,
              hän ei saanut rahojaan takaisin.
              <br></br> <br></br>Jos viesti olisi ollut aito, siinä ei olisi
              väitetty asian olevan kiireellinen. Lisäksi viesti ei olisi sisältänyt
              suoraa linkkiä, vaan Tiinaa olisi kehotettu siirtymään Verohallinnon
              verkkosivuille itse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorrorStories;