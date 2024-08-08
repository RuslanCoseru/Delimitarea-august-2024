var wms_layers = [];

var lyr_2016OrtofotoRM_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://moldova-map.md/geoserver/orthophoto/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "orthophoto:Ortofoto_2016_RM",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2016 Ortofoto RM",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2016OrtofotoRM_0, 0]);
var lyr_62UATIIraionmunicipiuUTA_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.cadastru.md/geoserver/ows?version%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "w_rsuat:mv_uat1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "6.2. UAT II (raion, municipiu, UTA)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_62UATIIraionmunicipiuUTA_1, 0]);
var lyr_63UATImunicipiucomunorasat_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.cadastru.md/geoserver/ows?version%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "w_rsuat:mv_uat3",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "6.3. UAT I (municipiu, comună, oraș, sat)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_63UATImunicipiucomunorasat_2, 0]);
var lyr_23Sectoarecadastrale_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.cadastru.md/geoserver/ows?version%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "w_cbi:cad_hcsectoare",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2.3. Sectoare cadastrale",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_23Sectoarecadastrale_3, 0]);
var lyr_22Terenuricadastrale_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.cadastru.md/geoserver/ows?version%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "w_cbi:cad_terenuri",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2.2. Terenuri cadastrale",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_22Terenuricadastrale_4, 0]);
var format_Zastinca_5 = new ol.format.GeoJSON();
var features_Zastinca_5 = format_Zastinca_5.readFeatures(json_Zastinca_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zastinca_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zastinca_5.addFeatures(features_Zastinca_5);
var lyr_Zastinca_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zastinca_5, 
                style: style_Zastinca_5,
                popuplayertitle: "Zastinca",
                interactive: true,
    title: 'Zastinca<br />\
    <img src="styles/legend/Zastinca_5_0.png" /> 20<br />\
    <img src="styles/legend/Zastinca_5_1.png" /> 25<br />'
        });
var format_Vadeni_6 = new ol.format.GeoJSON();
var features_Vadeni_6 = format_Vadeni_6.readFeatures(json_Vadeni_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vadeni_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vadeni_6.addFeatures(features_Vadeni_6);
var lyr_Vadeni_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vadeni_6, 
                style: style_Vadeni_6,
                popuplayertitle: "Vadeni",
                interactive: true,
    title: 'Vadeni<br />\
    <img src="styles/legend/Vadeni_6_0.png" /> 20<br />\
    <img src="styles/legend/Vadeni_6_1.png" /> 25<br />'
        });
var format_Solcani_7 = new ol.format.GeoJSON();
var features_Solcani_7 = format_Solcani_7.readFeatures(json_Solcani_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solcani_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solcani_7.addFeatures(features_Solcani_7);
var lyr_Solcani_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Solcani_7, 
                style: style_Solcani_7,
                popuplayertitle: "Solcani",
                interactive: true,
    title: 'Solcani<br />\
    <img src="styles/legend/Solcani_7_0.png" /> 20<br />\
    <img src="styles/legend/Solcani_7_1.png" /> 25<br />'
        });
var format_Schineni_8 = new ol.format.GeoJSON();
var features_Schineni_8 = format_Schineni_8.readFeatures(json_Schineni_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schineni_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schineni_8.addFeatures(features_Schineni_8);
var lyr_Schineni_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schineni_8, 
                style: style_Schineni_8,
                popuplayertitle: "Schineni",
                interactive: true,
    title: 'Schineni<br />\
    <img src="styles/legend/Schineni_8_0.png" /> 11<br />\
    <img src="styles/legend/Schineni_8_1.png" /> 25<br />'
        });
var format_ReginaMaria_9 = new ol.format.GeoJSON();
var features_ReginaMaria_9 = format_ReginaMaria_9.readFeatures(json_ReginaMaria_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginaMaria_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginaMaria_9.addFeatures(features_ReginaMaria_9);
var lyr_ReginaMaria_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginaMaria_9, 
                style: style_ReginaMaria_9,
                popuplayertitle: "Regina Maria",
                interactive: true,
    title: 'Regina Maria<br />\
    <img src="styles/legend/ReginaMaria_9_0.png" /> 20<br />\
    <img src="styles/legend/ReginaMaria_9_1.png" /> 25<br />'
        });
var format_RediCeresnovat_10 = new ol.format.GeoJSON();
var features_RediCeresnovat_10 = format_RediCeresnovat_10.readFeatures(json_RediCeresnovat_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RediCeresnovat_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RediCeresnovat_10.addFeatures(features_RediCeresnovat_10);
var lyr_RediCeresnovat_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RediCeresnovat_10, 
                style: style_RediCeresnovat_10,
                popuplayertitle: "Redi Ceresnovat",
                interactive: true,
    title: 'Redi Ceresnovat<br />\
    <img src="styles/legend/RediCeresnovat_10_0.png" /> 20<br />\
    <img src="styles/legend/RediCeresnovat_10_1.png" /> 25<br />'
        });
var format_Pilita_11 = new ol.format.GeoJSON();
var features_Pilita_11 = format_Pilita_11.readFeatures(json_Pilita_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pilita_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pilita_11.addFeatures(features_Pilita_11);
var lyr_Pilita_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pilita_11, 
                style: style_Pilita_11,
                popuplayertitle: "Pilita",
                interactive: true,
    title: 'Pilita<br />\
    <img src="styles/legend/Pilita_11_0.png" /> 20<br />\
    <img src="styles/legend/Pilita_11_1.png" /> 25<br />'
        });
var format_Parcani_12 = new ol.format.GeoJSON();
var features_Parcani_12 = format_Parcani_12.readFeatures(json_Parcani_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcani_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcani_12.addFeatures(features_Parcani_12);
var lyr_Parcani_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcani_12, 
                style: style_Parcani_12,
                popuplayertitle: "Parcani",
                interactive: true,
    title: 'Parcani<br />\
    <img src="styles/legend/Parcani_12_0.png" /> 20<br />\
    <img src="styles/legend/Parcani_12_1.png" /> 25<br />'
        });
var format_munSoroca_13 = new ol.format.GeoJSON();
var features_munSoroca_13 = format_munSoroca_13.readFeatures(json_munSoroca_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_munSoroca_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_munSoroca_13.addFeatures(features_munSoroca_13);
var lyr_munSoroca_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_munSoroca_13, 
                style: style_munSoroca_13,
                popuplayertitle: "mun. Soroca",
                interactive: true,
    title: 'mun. Soroca<br />\
    <img src="styles/legend/munSoroca_13_0.png" /> 20<br />\
    <img src="styles/legend/munSoroca_13_1.png" /> 25<br />'
        });
var format_munSoroca_14 = new ol.format.GeoJSON();
var features_munSoroca_14 = format_munSoroca_14.readFeatures(json_munSoroca_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_munSoroca_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_munSoroca_14.addFeatures(features_munSoroca_14);
var lyr_munSoroca_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_munSoroca_14, 
                style: style_munSoroca_14,
                popuplayertitle: "mun. Soroca",
                interactive: true,
    title: 'mun. Soroca<br />\
    <img src="styles/legend/munSoroca_14_0.png" /> 20<br />\
    <img src="styles/legend/munSoroca_14_1.png" /> 25<br />'
        });
var format_Hristici_15 = new ol.format.GeoJSON();
var features_Hristici_15 = format_Hristici_15.readFeatures(json_Hristici_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hristici_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hristici_15.addFeatures(features_Hristici_15);
var lyr_Hristici_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hristici_15, 
                style: style_Hristici_15,
                popuplayertitle: "Hristici",
                interactive: true,
    title: 'Hristici<br />\
    <img src="styles/legend/Hristici_15_0.png" /> 20<br />\
    <img src="styles/legend/Hristici_15_1.png" /> 25<br />'
        });
var format_Egoreni_16 = new ol.format.GeoJSON();
var features_Egoreni_16 = format_Egoreni_16.readFeatures(json_Egoreni_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Egoreni_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Egoreni_16.addFeatures(features_Egoreni_16);
var lyr_Egoreni_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Egoreni_16, 
                style: style_Egoreni_16,
                popuplayertitle: "Egoreni",
                interactive: true,
    title: 'Egoreni<br />\
    <img src="styles/legend/Egoreni_16_0.png" /> 20<br />\
    <img src="styles/legend/Egoreni_16_1.png" /> 25<br />'
        });
var format_Dubna_17 = new ol.format.GeoJSON();
var features_Dubna_17 = format_Dubna_17.readFeatures(json_Dubna_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dubna_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dubna_17.addFeatures(features_Dubna_17);
var lyr_Dubna_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dubna_17, 
                style: style_Dubna_17,
                popuplayertitle: "Dubna",
                interactive: true,
    title: 'Dubna<br />\
    <img src="styles/legend/Dubna_17_0.png" /> 20<br />\
    <img src="styles/legend/Dubna_17_1.png" /> 25<br />'
        });
var format_CainariiVechi_18 = new ol.format.GeoJSON();
var features_CainariiVechi_18 = format_CainariiVechi_18.readFeatures(json_CainariiVechi_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CainariiVechi_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CainariiVechi_18.addFeatures(features_CainariiVechi_18);
var lyr_CainariiVechi_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CainariiVechi_18, 
                style: style_CainariiVechi_18,
                popuplayertitle: "Cainarii Vechi",
                interactive: true,
    title: 'Cainarii Vechi<br />\
    <img src="styles/legend/CainariiVechi_18_0.png" /> 20<br />\
    <img src="styles/legend/CainariiVechi_18_1.png" /> 25<br />'
        });
var format_Bulboci_19 = new ol.format.GeoJSON();
var features_Bulboci_19 = format_Bulboci_19.readFeatures(json_Bulboci_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bulboci_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bulboci_19.addFeatures(features_Bulboci_19);
var lyr_Bulboci_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bulboci_19, 
                style: style_Bulboci_19,
                popuplayertitle: "Bulboci",
                interactive: true,
    title: 'Bulboci<br />\
    <img src="styles/legend/Bulboci_19_0.png" /> 20<br />\
    <img src="styles/legend/Bulboci_19_1.png" /> 25<br />'
        });

lyr_2016OrtofotoRM_0.setVisible(true);lyr_62UATIIraionmunicipiuUTA_1.setVisible(true);lyr_63UATImunicipiucomunorasat_2.setVisible(true);lyr_23Sectoarecadastrale_3.setVisible(true);lyr_22Terenuricadastrale_4.setVisible(true);lyr_Zastinca_5.setVisible(true);lyr_Vadeni_6.setVisible(true);lyr_Solcani_7.setVisible(true);lyr_Schineni_8.setVisible(true);lyr_ReginaMaria_9.setVisible(true);lyr_RediCeresnovat_10.setVisible(true);lyr_Pilita_11.setVisible(true);lyr_Parcani_12.setVisible(true);lyr_munSoroca_13.setVisible(true);lyr_munSoroca_14.setVisible(true);lyr_Hristici_15.setVisible(true);lyr_Egoreni_16.setVisible(true);lyr_Dubna_17.setVisible(true);lyr_CainariiVechi_18.setVisible(true);lyr_Bulboci_19.setVisible(true);
var layersList = [lyr_2016OrtofotoRM_0,lyr_62UATIIraionmunicipiuUTA_1,lyr_63UATImunicipiucomunorasat_2,lyr_23Sectoarecadastrale_3,lyr_22Terenuricadastrale_4,lyr_Zastinca_5,lyr_Vadeni_6,lyr_Solcani_7,lyr_Schineni_8,lyr_ReginaMaria_9,lyr_RediCeresnovat_10,lyr_Pilita_11,lyr_Parcani_12,lyr_munSoroca_13,lyr_munSoroca_14,lyr_Hristici_15,lyr_Egoreni_16,lyr_Dubna_17,lyr_CainariiVechi_18,lyr_Bulboci_19];
lyr_Zastinca_5.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Vadeni_6.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Solcani_7.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Schineni_8.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_ReginaMaria_9.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_RediCeresnovat_10.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Pilita_11.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Parcani_12.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_munSoroca_13.set('fieldAliases', {'codcadastr': 'codcadastr', 'codtip': 'codtip', 'codstr': 'codstr', 'nrcasa': 'nrcasa', 'codnrremar': 'codnrremar', 'codtipregi': 'codtipregi', 'codcolect': 'codcolect', 'suprafata': 'suprafata', 'codadm': 'codadm', 'datamodif': 'datamodif', });
lyr_munSoroca_14.set('fieldAliases', {'codcadastr': 'codcadastr', 'codtip': 'codtip', 'codstr': 'codstr', 'nrcasa': 'nrcasa', 'codnrremar': 'codnrremar', 'codtipregi': 'codtipregi', 'codcolect': 'codcolect', 'suprafata': 'suprafata', 'codadm': 'codadm', 'datamodif': 'datamodif', });
lyr_Hristici_15.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Egoreni_16.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Dubna_17.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_CainariiVechi_18.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Bulboci_19.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Zastinca_5.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Vadeni_6.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Solcani_7.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Schineni_8.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_ReginaMaria_9.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_RediCeresnovat_10.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Pilita_11.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Parcani_12.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_munSoroca_13.set('fieldImages', {'codcadastr': 'TextEdit', 'codtip': 'TextEdit', 'codstr': 'TextEdit', 'nrcasa': 'TextEdit', 'codnrremar': 'TextEdit', 'codtipregi': 'TextEdit', 'codcolect': 'TextEdit', 'suprafata': 'TextEdit', 'codadm': 'TextEdit', 'datamodif': 'DateTime', });
lyr_munSoroca_14.set('fieldImages', {'codcadastr': 'TextEdit', 'codtip': 'TextEdit', 'codstr': 'TextEdit', 'nrcasa': 'TextEdit', 'codnrremar': 'TextEdit', 'codtipregi': 'TextEdit', 'codcolect': 'TextEdit', 'suprafata': 'TextEdit', 'codadm': 'TextEdit', 'datamodif': 'DateTime', });
lyr_Hristici_15.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Egoreni_16.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Dubna_17.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_CainariiVechi_18.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Bulboci_19.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Zastinca_5.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Vadeni_6.set('fieldLabels', {'CodCadastr': 'no label', 'CodTip': 'inline label - always visible', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Solcani_7.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Schineni_8.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_ReginaMaria_9.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_RediCeresnovat_10.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Pilita_11.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Parcani_12.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_munSoroca_13.set('fieldLabels', {'codcadastr': 'inline label - always visible', 'codtip': 'no label', 'codstr': 'no label', 'nrcasa': 'no label', 'codnrremar': 'no label', 'codtipregi': 'no label', 'codcolect': 'no label', 'suprafata': 'inline label - always visible', 'codadm': 'no label', 'datamodif': 'no label', });
lyr_munSoroca_14.set('fieldLabels', {'codcadastr': 'inline label - always visible', 'codtip': 'no label', 'codstr': 'no label', 'nrcasa': 'no label', 'codnrremar': 'no label', 'codtipregi': 'no label', 'codcolect': 'no label', 'suprafata': 'inline label - always visible', 'codadm': 'no label', 'datamodif': 'no label', });
lyr_Hristici_15.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Egoreni_16.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Dubna_17.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_CainariiVechi_18.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Bulboci_19.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Bulboci_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});