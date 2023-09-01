var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_ANOMALIADEPRECIPITACION1RADECADA_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://idesep.senamhi.gob.pe:443/geoserver/g_04_02/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "04_02_005_03_002_512_0000_00_00",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "ANOMALIA DE PRECIPITACION - 1RA DECADA",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ANOMALIADEPRECIPITACION1RADECADA_1, 0]);
var format_CAPAX_2 = new ol.format.GeoJSON();
var features_CAPAX_2 = format_CAPAX_2.readFeatures(json_CAPAX_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAPAX_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAPAX_2.addFeatures(features_CAPAX_2);
var lyr_CAPAX_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CAPAX_2, 
                style: style_CAPAX_2,
                interactive: true,
                title: '<img src="styles/legend/CAPAX_2.png" /> CAPAX'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ANOMALIADEPRECIPITACION1RADECADA_1.setVisible(true);lyr_CAPAX_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ANOMALIADEPRECIPITACION1RADECADA_1,lyr_CAPAX_2];
lyr_CAPAX_2.set('fieldAliases', {'id': 'id', });
lyr_CAPAX_2.set('fieldImages', {'id': '', });
lyr_CAPAX_2.set('fieldLabels', {'id': 'no label', });
lyr_CAPAX_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});