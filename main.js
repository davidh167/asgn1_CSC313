import './style.css';
// import Map from 'ol/Map';
// import View from 'ol/View';
// import TileLayer from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';


import Feature from 'ol/Feature.js';
import Map from 'ol/Map.js';
import Point from 'ol/geom/Point.js';
import View from 'ol/View.js';
import {Icon, Style} from 'ol/style.js';
import {OGCMapTile, Vector as VectorSource} from 'ol/source.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {fromLonLat} from 'ol/proj.js';

const rome = new Feature({
  geometry: new Point(fromLonLat([12.5, 41.9])),
});

const london = new Feature({
  geometry: new Point(fromLonLat([-0.12755, 51.507222])),
});

const madrid = new Feature({
  geometry: new Point(fromLonLat([-3.683333, 40.4])),
});
const paris = new Feature({
  geometry: new Point(fromLonLat([2.353, 48.8566])),
});
const berlin = new Feature({
  geometry: new Point(fromLonLat([13.3884, 52.5169])),
});



rome.setStyle(
  new Style({
    image: new Icon({
      color: '#BADA55',
      crossOrigin: 'anonymous',
      src: 'data/square.svg',
    }),
  }),
);



london.setStyle(
  new Style({
    image: new Icon({
      color: 'rgba(255, 0, 0, .5)',
      crossOrigin: 'anonymous',
      src: 'data/bigdot.png',
      scale: 0.2,
    }),
  }),
);



madrid.setStyle(
  new Style({
    image: new Icon({
      crossOrigin: 'anonymous',
      src: 'data/bigdot.png',
      scale: 0.2,
    }),
  }),
);



paris.setStyle(
  new Style({
    image: new Icon({
      color: '#8959A8',
      crossOrigin: 'anonymous',
      src: 'data/dot.svg',
    }),
  }),
);



berlin.setStyle(
  new Style({
    image: new Icon({
      crossOrigin: 'anonymous',
      src: 'data/dot.svg',
    }),
  }),
);



const vectorSource = new VectorSource({
  features: [rome, london, madrid, paris, berlin],
});



const vectorLayer = new VectorLayer({
  source: vectorSource,
});



const rasterLayer = new TileLayer({
  source: new OGCMapTile({
    url: 'https://maps.gnosis.earth/ogcapi/collections/NaturalEarth:raster:HYP_HR_SR_OB_DR/map/tiles/WebMercatorQuad',
    crossOrigin: '',
  }),
});



// const map = new Map({
//   layers: [rasterLayer, vectorLayer],
//   target: document.getElementById('map'),
//   view: new View({
//     center: fromLonLat([2.896372, 44.6024]),
//     zoom: 3,
//   }),
// });

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    }),
    vectorLayer
  ],
  view: new View({
    center: [-13432061.001022695, 4204734.068359812],
    zoom: 12
  }),

});
