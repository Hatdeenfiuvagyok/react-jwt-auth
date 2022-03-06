import React, { Component } from 'react';
import {View, Image, FlatList, TouchableOpacity, Text  } from 'react-native-web';
import Gyakorlatok from './Gyakorlatok';


export default class GYIK extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      isCollapsed:true,
      megnyomva:[]
    };
  }






  render() {
    return (
      <View>
          <div className='gyik'>
        
        <Text style={{fontSize:30}}>Edzéssel kapcsolatos gyakori kérdések</Text><br/><br/>

        <Text style={{fontSize:20}}>1. Mi a legjobb rutin edzéshez?</Text><br/>
        <Text>
            A legjobb rutin az edzőteremben az, amely rugalmas az ütemtervvel, és valóban élvezi. Ez a két tényező nagyban hozzájárul ahhoz, hogy képes legyen összhangban lenni az edzésekkel.
            Az edzésekkel való összhang és a teljesítményük előrehaladása az, ami eredményekhez vezet.
            Rengeteg nagyszerű edzésprogram-stílus van, amit meg lehet tenni az izomépítés, a zsír elvesztése vagy az erőépítés érdekében. A testösszetételi célok (izomépítés és zsírvesztés) hasonló stílusú edzésekkel, különböző táplálkozási elvekkel kombinálva valósulnak meg, míg az erőnövekedést keresőknek olyan programokra kell összpontosítania, amelyek a specificitás ötletére ( A sport sajátossága olyan elv, amely megmagyarázza, hogy az edzésből származó adaptációk közvetlenül függenek az elvégzett gyakorlat adott tevékenység típusától, mennyiségétől és intenzitásától.) összpontosítanak.
        </Text><br/><br/>

        <Text style={{fontSize:20}}>2. Milyen testrészeket kell dolgozni milyen napokon?</Text><br/>
        <Text>
            A napok felosztásának módja nem számít túl sokat, mindaddig, amíg a hét folyamán minden testrészt dolgozik.
            Lehet, hogy van némi előnye annak biztosítására, hogy ne nyomja meg a mellkast és a vállakat vagy a lábakat, egymást követő napokon.Ha azonban szeretné optimalizálni az edzést egy magasabb edzési gyakoriság beépítésével (minden izomcsoportot gyakrabban a hét folyamán), érdemes megvizsgálni bizonyos izomcsoportok párosítását bizonyos edzésnapokon.
            Tehát nincs nagy különbség az előre összeállítot napok és egy random szervezés között mindaddig, amíg összhangban vannak az edzések és a progresszív túlterhelés (növelni a felhasznált súlyt) az idő múlásával.
        </Text><br/><br/>

        <Text style={{fontSize:20}}>3. Mit kell tennie egy kezdőnek az edzőteremben?</Text><br/>
        <Text>
            A legjobb dolog, amit egy kezdő tehet az edzőteremben, hogy kérjen segítséget egy képzett szakembertől, hogy segítse őket az egyes gyakorlatok megfelelő formájának megtanulásában. Az alapok gyakorlása és a forma szilárd alapjainak megteremtése segít a kezdő emelőnek, hogy egész életében sérülésmentes maradjon.
            Ha nincs abban a helyzetben, hogy személyi edzőt fogadjon, érdemes lehet bizonyos szintű óvatossággal dolgozni. Ugyanez az ajánlás az alapok gyakorlására továbbra is érvényes. A megszerzett jártasság után, a megfelelő súly mértéket hozzáadva lehet haladni.
        </Text><br/><br/>

        <Text style={{fontSize:20}}>4. Mi a legjobb edzésprogram kezdőknek?</Text><br/>
        <Text>
            A legjobb edzés rutin az igazi kezdők számára meglehetősen szubjektív, amit a kezdő kényelmesen csinál, és amíg megérti, hogy hogyan kell elvégezni a gyakorlatokat.
            Általánosságban elmondható azonban, hogy a kezdők hetente 2-4 edzés között bárhol elkezdhetik a teljesítményt. Ezek az edzések lehetnek teljes test edzések vagy felső / alsó edzések.
            Vízszintes prések, függőleges prések, vízszintes húzások, függőleges húzások, guggolások ideális mozgási mintáinak megtanulására kell összpontosítaniuk.
        </Text><br/><br/>



        <Text style={{fontSize:20}}>5. Mi a legjobb edzésprogram az izomépítéshez?</Text><br/>
        <Text>
            A következetesség mellett előnyös lenne, ha magasabb edzési gyakoriság, ha a cél a sovány izomtömeg kiépítése. Meg akarja ütni az egyes izomcsoportokat közvetlenül vagy közvetve hetente 2-3 alkalommal, hogy maximalizálja az izomnövekedést.
        </Text><br/><br/>


        <Text style={{fontSize:20}}>6. Mit ihatok, hogy gyorsan építsek izomot?</Text><br/>
        <Text>
            Az izomépítés időt és következetességet igényel. Semmi sem fog gyorsabban odajuttatni, mint ahogy a tested természetesen képes az optimalizált edzés, táplálkozás és életmód szokásai révén. Vannak minden bizonnyal táplálék kiegészítők, amelyek segítenek bevinni a megfelelő fehérje, kalória igényt. A kreatin segíthet a teljesítmény javításában, és segíthet az izom hatékonyabb felépítésében.
        </Text><br/><br/>


        <Text style={{fontSize:20}}>7. Hány napot kell edzenem egy héten, hogy hatékonyabban építsek izmot?</Text><br/>
        <Text>
            Az izomépítéshez legalább 2 napos teljes testképzésre van szükség progresszív túlterheléssel.
            3 teljes testnap jobb.Nincs tökéletes megosztás mindenki számára. De a legtöbben részesülnek a felső / alsó edzésben, 4 nap hetente. Ez az általános aranystandard az izomépítéshez a legtöbb ember számára.
        </Text><br/><br/>


        <Text style={{fontSize:20}}>8. Rossz minden nap edzőterembe menni?</Text><br/>
        <Text>
            Attól függ, mit csinálsz, miközben az edzőteremben vagy. Időt kell adnia a testének, hogy helyreálljon, ha növekedni akar (szuperkompenzáció - a test a terheléshez optimalizálja a működését), tehát ha minden nap intenzíven edz, akkor ez nem ideális.
            Hacsak nem vagy versenyképes sportoló, felesleges minden nap edzőterembe menni. Ha minden nap rekreációs emelőként edzőterembe jár, olyan rögeszmés szokásokhoz vezethet, amelyek nem egészségesek. Összpontosítson 3-5 napra, és értékes idejét az élet más prioritásainak folytatásával töltse.
        </Text><br/><br/>



        <Text style={{fontSize:20}}>9. Mit tegyek a pihenőnapokon?</Text><br/>
        <Text>
            Pihenj a pihenőnapodon. Egyél olyan módon, amely összhangban van a céljaiddal, és összpontosíts az edzésekből való felépülésre. Azt is megteheti, amit aktív helyreállításnak neveznek. Az aktív helyreállítás számos módon elvégezhető, de könnyű tevékenység, amely a vér áramlását kapja, nem stresszes, és segít a helyreállításban.
            Az aktív helyreállítás néhány példája a séták, a jóga és a mobilitási munka.
        </Text>

    </div>
      <Gyakorlatok/>
    </View>
    );
  }
}