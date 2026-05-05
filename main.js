// Importa OpenLayers como módulo
import * as ol from 'https://cdn.jsdelivr.net/npm/ol@latest/dist/ol.js';

// Cria o mapa
const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-47.06, -22.90]), // exemplo: Campinas
    zoom: 10
  })
});
