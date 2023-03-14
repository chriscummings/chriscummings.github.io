import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import {transform} from 'ol/proj.js';
import GeoJSON from 'ol/format/GeoJSON'
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import {Fill, Stroke, Style} from 'ol/style.js';


const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    }),

    new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: './data/legal-weed-2023.geojson',
      }),
      style: new Style({
        stroke: new Stroke({
          color: '#03ac13',
          width: 0,
        }),
        fill: new Fill({
          color:'#99edc3'
        })
      }),
      opacity: .4
    })

    // new VectorLayer({
    //   source: new VectorSource({
    //     format: new GeoJSON(),
    //     url: './data/us-states.json',
    //   }),
    // }),

    // new VectorLayer({
    //   source: new VectorSource({
    //     format: new GeoJSON(),
    //     url: './data/us-counties.json',
    //   }),
    // }),
  ],
  view: new View({
    center: transform([-98, 34.049039], 'EPSG:4326', 'EPSG:3857'),
    zoom:4
  })
});
