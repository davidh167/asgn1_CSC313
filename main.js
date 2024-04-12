import './style.css';
// import {Map, View} from 'ol';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';


// import Map from 'https://cdn.jsdelivr.net/npm/ol/Map.js';
// import View from 'https://cdn.jsdelivr.net/npm/ol/View.js';
// import TileLayer from 'https://cdn.jsdelivr.net/npm/ol/layer/Tile.js';
// import OSM from 'https://cdn.jsdelivr.net/npm/ol/source/OSM.js';


const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [-13432061.001022695, 4204734.068359812],
    zoom: 2
  })
});
