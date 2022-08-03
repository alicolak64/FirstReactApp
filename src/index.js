import React from 'react';
import ReactDOM from 'react-dom/client';



import Card from './components/card';
import Collapse from './components/collapse';



// React is framework for creating user interfaces.
// React is a JavaScript library and use components.



// Props is a property of a component. And props is a object. And props provides data exchange between components.
// Props provides attributes from parent component to child component.


// State is a JS object that displays information (features)  about the current state of the component.
// State is a JS object 


// The main difference between props and state is that props is immutable and state is mutable.
// A state can be changed, but a prope not can be changed while the application is running.
// Props is like a final value and a single assign to prope can be made and cannot be changed later  JS = const
// State is like a variable that can be changed and can be changed later.   JS = let
// State is a give information that component but prop provide data transfer from parent component to child component




// const names = ['John', 'Jane', 'Mary'];


/*
function App() {   // Create App Component    // Create Component with function 
  return <h1>Hello World</h1>;
}
*/

/*
className App extends React.Component {   // Create Compopnent with className
  render() {
    return <h1>Hello World</h1>;
  }
}
*/

/*
function getFullName(name, surname) {
  return `${name} ${surname}`;
}
*/


// JSX 

/*
function App() {

  const temp  = "We can write JavaScript code within JSX code with JSX.";


  return (  // JSX - JavaScript XML (JSX is a subset of HTML and XML. Also we write JavaScript Code in curly bracket '{}' with JSX ) )) 
    <div>
      <h1>Names</h1>
      <ul>
        {names.map(name => <li key={name}>{name}</li>)}   
      </ul>
      <button classNameName='jsxclassName' type='button' style= { { padding:'10px' , color : 'white' , backgroundColor : 'blue' , border  : ' 2px solid green ' } } > JSX Button</button>
      <br/>
      <br/>
      <button classNameName='jsxclassName' type='button' style= { { padding:'10px' , color : 'white' , backgroundColor : 'blue' , border  : ' 2px solid green ' } } > {temp}</button>
      <br/>
      <br/>
      <h1> Full Name : {getFullName('Ali' , 'Colak')}</h1>    
    </div>
  );
}
*/

// Props

/*
const App = () => {

  return (
    <div>

      <div className="card-group">

        <Card />

        <Card />

        <Card />

        <Card />

      </div>

    </div>

  );

}
*/

const App = () => {

  return (

    <div className='container'>

      <div className='row'>
        <div className="card-group w-100">
          <div className='col'>
            <Collapse href="Collapse1" >
              <Card
                cardName="Maieden's Tower"
                cardImage="https://a-static.besthdwallpaper.com/kiz-kulesi-ve-istanbul-duvar-kagidi-1280x960-21436_20.jpg"
                cardInformation="The Maiden's Tower (Turkish: Kiz Kulesi), also known as Leander's Tower (Tower of Leandros) since the medieval Byzantine period, is a tower lying on a small islet located at the southern entrance of the Bosphorus strait 200 m (220 yd) from the coast of Üsküdar in Istanbul, Turkey."
                cardLocation="Uskudar / Istanbul"
              />
            </Collapse>
          </div>
          <div className='col'>
            <Collapse href="Collapse2" >
              <Card
                cardName="Galata Tower"
                cardImage="https://b-static.besthdwallpaper.com/galata-tower-and-bosphorus-at-sunset-wallpaper-1280x960-92613_20.jpg"
                cardInformation="Considered among the oldest towers in the world and one of the symbols of Istanbul, Galata Tower (Galata Kulesi) was included in the UNESCO World Heritage Temporary List in 2013. Galata Tower, one of the most important structures that make up the silhouette of Istanbul, was used as a long-term fire watchtower and was named Galata Fire Tower."
                cardLocation="Beyoglu / Istanbul"
              />
            </Collapse>
          </div>
          <div className='col'>
            <Collapse href="Collapse3">
              <Card
                cardName="Bosphorus"
                cardImage="https://b-static.besthdwallpaper.com/istanbul-bosphorus-bridge-and-city-lights-wallpaper-1280x960-92611_20.jpg"
                cardInformation="The Bosphorus is the 32 km (20-mile)-long north-south strait that joins the Sea of Marmara with the Black Sea in Istanbul, and separates the continents of Europe and Asia."
                cardLocation="Istanbul"
              />
            </Collapse>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className="card-group w-100">
          <div className='col'>
            <Collapse href="Collapse4">
              <Card
                cardName="Hagia Sophia"
                cardImage="https://b-static.besthdwallpaper.com/muhtesem-mimarisi-ile-ayasofya-camii-ve-muhtesem-manzarasi-ile-istanbul-duvar-kagidi-1280x960-94276_20.jpg"
                cardInformation="The mystical city Istanbul hosted many civilizations since centuries, of which Byzantium and Ottoman Empires were both the most famous ones. The city today carries the characteristics of these two different cultures and surely Hagia Sophia is a perfect synthesis where one can observe both Ottoman and Byzantium effects under one great dome."
                cardLocation="Fatih / Istanbul"
              />
            </Collapse>
          </div>
          <div className='col'>

            <Collapse href="Collapse5">
              <Card
                cardName="Salda Lake"
                cardImage="https://www.fulyapension.com/uploads/ad1912.jpg"
                cardInformation="Lake Salda is one of Turkey's deepest, clearest and cleanest tectonic lakes. A place where everyone with a turquoise passion must fall down. The waters of Salda, a crater lake, start at the glass goblet and play in the indigo blue at the deepest places. A shattered crater lake. And there's something mysterious about it. The blueprints are also deep because the vegetation is formed by a volcanic eruption, which itself is the deepest lakes of Turkey with a depth of 184 meters."
                cardLocation="Burdur"
              />
            </Collapse>

          </div>
          <div className='col'>

            <Collapse href="Collapse6">
              <Card
                cardName="Travertines of Pamukkale"
                cardImage="https://cdn.pixabay.com/photo/2012/02/19/16/10/calcium-pools-14979_1280.jpg"
                cardInformation="Pamukkale is mainly known for its mineral-rich, thermal waters flowing down white travertine terraces. The area is famous for a bright, white carbonate mineral left by the flowing water. It almost looks like a blanket of snow!"
                cardLocation="Denizli"
              />
            </Collapse>

          </div>
        </div>
      </div>

      <div className='row'>
        <div className="card-group w-100">
          <div className='col'>
            <Collapse href="Collapse7">
              <Card
                cardName="Nemrut Mountain"
                cardImage="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mount_Nemrut_%283%29.JPG/1600px-Mount_Nemrut_%283%29.JPG?20140809044057"
                cardInformation="With a diameter of 145 m, the 50 m high funerary mound of stone chips is surrounded on three sides by terraces to the east, west and north directions. Two separate antique processional routes radiate from the east and west terraces."
                cardLocation="Adiyaman"
              />
            </Collapse>

          </div>
          <div className='col'>
            <Collapse href="Collapse8">
              <Card
                cardName="HasanKeyf"
                cardImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Hasankeyf.JPG/1280px-Hasankeyf.JPG"
                cardInformation="Hasankeyf is one of Mesopotamia's earliest human settlements. There are over 300 unexcavated archaeological sites in Hasankeyf, thousands of man-made caves, castles, baths, historic mosques, Roman temples, and so much more."
                cardLocation="Batman"
              />
            </Collapse>
          </div>
          <div className='col'>
            <Collapse href="Collapse9">
              <Card
                cardName="Ulubey Canyon Nature Park"
                cardImage="https://img.tv100.com/rcman/Cw1280h960q95gm/storage/files/images/2019/05/27/aw714359-07-hdrl.jpg"
                cardInformation="Ulubey Canyon Nature Park (Turkish: Ulubey Kanyonu Tabiat Parki) is a nature park in the Ulubey and Karahalli districts of Uşak Province, Turkey. The canyon is the second longest in the world after the Grand Canyon in the United States. The park provides suitable habitat for many species of animals and plants and is being developed as a centre for ecotourism."
                cardLocation="Ulubey / Uşak"
              />
            </Collapse>

          </div>
        </div>
      </div>

      <div className='row'>
        <div className="card-group w-100">
          <div className='col'>
            <Collapse href="Collapse10">
              <Card
                cardName="Düden Waterfall"
                cardImage="https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/f3/15/47/duden-selalesi.jpg"
                cardInformation="The Düden Waterfall is a waterfall in the Düdenköy region of Istanbul, Turkey. It is located in the central part of the city, near the Düdenköy district, and is one of the most popular waterfalls in the city."
                cardLocation="Istanbul"
              />
            </Collapse>


          </div>
          <div className='col'>

            <Collapse href="Collapse11">
              <Card
                cardName="Saklikent National Park"
                cardImage="https://www.saklikentrestaurant.com/img-page/311-about-saklikent.jpg"
                cardInformation="Saklikent National Park is a national park in Turkey, located in the central part of the city of Istanbul. It is one of the most popular parks in the city and is one of the most visited tourist attractions in the country."
                cardLocation="Fethiye / Mugla"
              />
            </Collapse>

          </div>
          <div className='col'>

            <Collapse href="Collapse12">
              <Card
                cardName="Ayder Plateau"
                cardImage="https://media-cdn.tripadvisor.com/media/photo-m/1280/1d/95/48/b0/ayder-doruk-otel.jpg"
                cardInformation="Ayder Plateau, a region famous for its clean air and healing hot springs, stands out with its rich accommodation options. With its soothing, calming and soul-relaxing features, Ayder Plateau is one of the must-see spots for nature lovers."
                cardLocation="Rize"
              />
            </Collapse>

          </div>
        </div>
      </div>


      <div className='row'>
        <div className="card-group w-100">
          <div className='col'>
            <Collapse href="Collapse13">
              <Card
                cardName="Cappadocia"
                cardImage="https://images.wallpaperscraft.com/image/single/balloons_rocks_flight_123551_1280x960.jpg"
                cardInformation="Cappadocia's landscape includes dramatic expanses of soft volcanic rock, shaped by erosion into towers, cones, valleys, and caves. Rock-cut churches and underground tunnel complexes from the Byzantine and Islamic eras are scattered throughout the countryside."
                cardLocation="Nevsehir"
              />
            </Collapse>
          </div>
          <div className='col'>

            <Collapse href="Collapse14">
              <Card
                cardName="Göbeklitepe Ancient City"
                cardImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/G%C3%B6bekli_Tepe_site_%281%29.JPG/1280px-G%C3%B6bekli_Tepe_site_%281%29.JPG"
                cardInformation="Göbeklitepe is a historical city in Turkey. It is located in the central part of the city, near the Göbekli district, and is one of the most popular tourist attractions in the city."
                cardLocation="Sanliurfa"
              />
            </Collapse>

          </div>
          <div className='col'>

            <Collapse href="Collapse15">
              <Card
                cardName="Butterfly Valley "
                cardImage="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Butterfly_Valley%2C_Fethiye.jpg/1280px-Butterfly_Valley%2C_Fethiye.jpg"
                cardInformation="Butterfly Valley, or Kelebekler Vadisi as it is known in Turkish, is a 4KM long, narrow valley located at the foot of Turkey's Babadağ Mountain opening onto the Mediterranean Sea. It is located about 30KM south of Fethiye and 15KM south of the bustling seaside resort town of Ölüdeniz."
                cardLocation="Fethiye / Mugla"
              />
            </Collapse>

          </div>
        </div>
      </div>


      <div className='row'>
        <div className="card-group w-100">
          <div className='col'>

            <Collapse href="Collapse16">
              <Card
                cardName="Basilica Cistern"
                cardImage="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Basilica_Cistern_-_Istanbul%2C_Turkey_-_panoramio.jpg/1280px-Basilica_Cistern_-_Istanbul%2C_Turkey_-_panoramio.jpg"
                cardInformation="The cistern is a giant structure covering a rectangular area of ​​140 meters in length and 70 meters in width. Covering a total area of ​​9.800 m2, this cistern has a storage capacity of approximately 100.000 tons of water. The Basilica Cistern Museum is open to visitors every day of the week between 09.00 and 19.00."
                cardLocation=" Fatih / Istanbul"
              />
            </Collapse>

          </div>
          <div className='col'>

            <Collapse href="Collapse17">
              <Card
                cardName="Clandras Bridge"
                cardImage="https://64.media.tumblr.com/2cc6f18cae25f4e7399602a04028a518/tumblr_oqnvfomj9j1t3u0blo2_1280.jpg"
                cardInformation="According to Uşak municipality, the one arch bridge was constructed during the Phrygian era of Anatolia. Its length is 24 metres (79 ft) and width is 1.75 metres (5 ft 9 in). Its height over the river is 17 metres (56 ft). Both sides of the bridge superimpose on rock. During a maintenance, a cement portion had been added to the original structure. Currently there is a small hydroelectric plant next to the bridge. The area around the bridge and the small waterfall of the plant is a popular picnic site."
                cardLocation="Karahalli / Usak"
              />
            </Collapse>

          </div>
          <div className='col'>

            <Collapse href="Collapse18">
              <Card
                cardName="Pierre Loti Hill"
                cardImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Pierre_Loti%2Cden_bak%C4%B1%C5%9F_-_panoramio.jpg/1280px-Pierre_Loti%2Cden_bak%C4%B1%C5%9F_-_panoramio.jpg"
                cardInformation="The famous cafe entitled with the name of Pierre Loti, a famous French writer, is reached on getting to this ridge on which the perfect view of Golden Horn can be watched. The real name of Pierre Loti, who lived in Istanbul for long years and was a real Istanbul lover, was Julien Viaud.The historical cafe is the most ideal place to watch this mentioned view."
                cardLocation="Eyup / Istanbul"
              />
            </Collapse>

          </div>
        </div>
      </div>

    </div>

  );

}



// const temp = "We can write JavaScript code within JSX code with JSX.";




const root = ReactDOM.createRoot(document.getElementById('root')); //document.getElementById('root') // Where to render  (Where to show) 
// const root2 = ReactDOM.createRoot(document.querySelector('#root')); //document.querySelector('#root2') // Where to render  (Where to show)


root.render( // Which render component (which show component)
  <React.StrictMode>
    <App />
  </React.StrictMode>
  

);



