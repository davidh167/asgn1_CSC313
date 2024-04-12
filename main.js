import './style.css';
// import Map from 'ol/Map';
// import View from 'ol/View';
// import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature.js';
import Map from 'ol/Map.js';
import Point from 'ol/geom/Point.js';
import View from 'ol/View.js';
import {Icon, Style} from 'ol/style.js';
import {OGCMapTile, Vector as VectorSource} from 'ol/source.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {fromLonLat} from 'ol/proj.js';


const los_angeles = new Feature({
  geometry: new Point([-13190998.643709859, 4030082.937783881]),
});
const oxnard = new Feature({
  geometry: new Point([-13266744.537882347, 4055901.6679389076]),
});
const san_jose = new Feature({
  geometry: new Point([-13567972.853579128, 4486008.5094353715]),
});


// ================

los_angeles.setStyle(
  new Style({
    image: new Icon({
      color: '#63FFE3',
      crossOrigin: 'anonymous',
      src: 'data/dot.png',
      scale: 0.12,
    }),
  }),
);



oxnard.setStyle(
  new Style({
    image: new Icon({
      color: '#FF6363',
      crossOrigin: 'anonymous',
      src: 'data/dot.png',
      scale: 0.08,
    }),
  }),
);



san_jose.setStyle(
  new Style({
    image: new Icon({
      color: '#FFC426',
      crossOrigin: 'anonymous',
      src: 'data/dot.png',
      scale: 0.08,
    }),
  }),
);

// ================

const vectorSource = new VectorSource({
  features: [los_angeles, oxnard, san_jose],
});



const vectorLayer = new VectorLayer({
  source: vectorSource,
});

// 

const rasterLayer = new TileLayer({
  source: new OGCMapTile({
    url: 'https://maps.gnosis.earth/ogcapi/collections/NaturalEarth:raster:HYP_HR_SR_OB_DR/map/tiles/WebMercatorQuad',
    crossOrigin: '',
  }),
});


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
    zoom: 10
  }),

});
