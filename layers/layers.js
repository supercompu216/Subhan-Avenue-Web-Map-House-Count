var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Nalah_2 = new ol.format.GeoJSON();
var features_Nalah_2 = format_Nalah_2.readFeatures(json_Nalah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nalah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nalah_2.addFeatures(features_Nalah_2);
var lyr_Nalah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nalah_2, 
                style: style_Nalah_2,
                popuplayertitle: 'Nalah',
                interactive: true,
                title: '<img src="styles/legend/Nalah_2.png" /> Nalah'
            });
var format_BackGateRoad_3 = new ol.format.GeoJSON();
var features_BackGateRoad_3 = format_BackGateRoad_3.readFeatures(json_BackGateRoad_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BackGateRoad_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BackGateRoad_3.addFeatures(features_BackGateRoad_3);
var lyr_BackGateRoad_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BackGateRoad_3, 
                style: style_BackGateRoad_3,
                popuplayertitle: 'Back Gate Road',
                interactive: true,
                title: '<img src="styles/legend/BackGateRoad_3.png" /> Back Gate Road'
            });
var format_SabzalRoad_4 = new ol.format.GeoJSON();
var features_SabzalRoad_4 = format_SabzalRoad_4.readFeatures(json_SabzalRoad_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SabzalRoad_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SabzalRoad_4.addFeatures(features_SabzalRoad_4);
var lyr_SabzalRoad_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SabzalRoad_4, 
                style: style_SabzalRoad_4,
                popuplayertitle: 'Sabzal Road',
                interactive: true,
                title: '<img src="styles/legend/SabzalRoad_4.png" /> Sabzal Road'
            });
var format_NewSabzalRoad_5 = new ol.format.GeoJSON();
var features_NewSabzalRoad_5 = format_NewSabzalRoad_5.readFeatures(json_NewSabzalRoad_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewSabzalRoad_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewSabzalRoad_5.addFeatures(features_NewSabzalRoad_5);
var lyr_NewSabzalRoad_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NewSabzalRoad_5, 
                style: style_NewSabzalRoad_5,
                popuplayertitle: 'New Sabzal Road',
                interactive: true,
                title: '<img src="styles/legend/NewSabzalRoad_5.png" /> New Sabzal Road'
            });
var format_SamungliRoad_6 = new ol.format.GeoJSON();
var features_SamungliRoad_6 = format_SamungliRoad_6.readFeatures(json_SamungliRoad_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SamungliRoad_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SamungliRoad_6.addFeatures(features_SamungliRoad_6);
var lyr_SamungliRoad_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SamungliRoad_6, 
                style: style_SamungliRoad_6,
                popuplayertitle: 'Samungli Road',
                interactive: true,
                title: '<img src="styles/legend/SamungliRoad_6.png" /> Samungli Road'
            });
var format_Subhan_Boundries_7 = new ol.format.GeoJSON();
var features_Subhan_Boundries_7 = format_Subhan_Boundries_7.readFeatures(json_Subhan_Boundries_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Subhan_Boundries_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Subhan_Boundries_7.addFeatures(features_Subhan_Boundries_7);
var lyr_Subhan_Boundries_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Subhan_Boundries_7, 
                style: style_Subhan_Boundries_7,
                popuplayertitle: 'Subhan_Boundries',
                interactive: true,
                title: '<img src="styles/legend/Subhan_Boundries_7.png" /> Subhan_Boundries'
            });
var format_Mosque_8 = new ol.format.GeoJSON();
var features_Mosque_8 = format_Mosque_8.readFeatures(json_Mosque_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mosque_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mosque_8.addFeatures(features_Mosque_8);
var lyr_Mosque_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mosque_8, 
                style: style_Mosque_8,
                popuplayertitle: 'Mosque',
                interactive: true,
                title: '<img src="styles/legend/Mosque_8.png" /> Mosque'
            });
var format_SubhanAvenueRoads_9 = new ol.format.GeoJSON();
var features_SubhanAvenueRoads_9 = format_SubhanAvenueRoads_9.readFeatures(json_SubhanAvenueRoads_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SubhanAvenueRoads_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubhanAvenueRoads_9.addFeatures(features_SubhanAvenueRoads_9);
var lyr_SubhanAvenueRoads_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SubhanAvenueRoads_9, 
                style: style_SubhanAvenueRoads_9,
                popuplayertitle: 'Subhan Avenue Roads',
                interactive: true,
                title: '<img src="styles/legend/SubhanAvenueRoads_9.png" /> Subhan Avenue Roads'
            });
var format_EndPointHouse_10 = new ol.format.GeoJSON();
var features_EndPointHouse_10 = format_EndPointHouse_10.readFeatures(json_EndPointHouse_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EndPointHouse_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EndPointHouse_10.addFeatures(features_EndPointHouse_10);
var lyr_EndPointHouse_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EndPointHouse_10, 
                style: style_EndPointHouse_10,
                popuplayertitle: 'End Point (House)',
                interactive: true,
                title: '<img src="styles/legend/EndPointHouse_10.png" /> End Point (House)'
            });
var format_StartPointHouse_11 = new ol.format.GeoJSON();
var features_StartPointHouse_11 = format_StartPointHouse_11.readFeatures(json_StartPointHouse_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StartPointHouse_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StartPointHouse_11.addFeatures(features_StartPointHouse_11);
var lyr_StartPointHouse_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StartPointHouse_11, 
                style: style_StartPointHouse_11,
                popuplayertitle: 'Start Point (House)',
                interactive: true,
                title: '<img src="styles/legend/StartPointHouse_11.png" /> Start Point (House)'
            });
var format_House1227_12 = new ol.format.GeoJSON();
var features_House1227_12 = format_House1227_12.readFeatures(json_House1227_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_House1227_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_House1227_12.addFeatures(features_House1227_12);
var lyr_House1227_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_House1227_12, 
                style: style_House1227_12,
                popuplayertitle: 'House (1 - 227)',
                interactive: true,
                title: '<img src="styles/legend/House1227_12.png" /> House (1 - 227)'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Nalah_2.setVisible(true);lyr_BackGateRoad_3.setVisible(true);lyr_SabzalRoad_4.setVisible(true);lyr_NewSabzalRoad_5.setVisible(true);lyr_SamungliRoad_6.setVisible(true);lyr_Subhan_Boundries_7.setVisible(true);lyr_Mosque_8.setVisible(true);lyr_SubhanAvenueRoads_9.setVisible(true);lyr_EndPointHouse_10.setVisible(true);lyr_StartPointHouse_11.setVisible(true);lyr_House1227_12.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_GoogleHybrid_1,lyr_Nalah_2,lyr_BackGateRoad_3,lyr_SabzalRoad_4,lyr_NewSabzalRoad_5,lyr_SamungliRoad_6,lyr_Subhan_Boundries_7,lyr_Mosque_8,lyr_SubhanAvenueRoads_9,lyr_EndPointHouse_10,lyr_StartPointHouse_11,lyr_House1227_12];
lyr_Nalah_2.set('fieldAliases', {'name': 'name', });
lyr_BackGateRoad_3.set('fieldAliases', {'name': 'name', });
lyr_SabzalRoad_4.set('fieldAliases', {'name': 'name', });
lyr_NewSabzalRoad_5.set('fieldAliases', {'name': 'name', 'highway': 'highway', });
lyr_SamungliRoad_6.set('fieldAliases', {'name': 'name', });
lyr_Subhan_Boundries_7.set('fieldAliases', {'Name': 'Name', });
lyr_Mosque_8.set('fieldAliases', {'Name': 'Name', });
lyr_SubhanAvenueRoads_9.set('fieldAliases', {'name': 'name', });
lyr_EndPointHouse_10.set('fieldAliases', {'id': 'id', });
lyr_StartPointHouse_11.set('fieldAliases', {'id': 'id', });
lyr_House1227_12.set('fieldAliases', {'S.No': 'S.No', });
lyr_Nalah_2.set('fieldImages', {'name': 'TextEdit', });
lyr_BackGateRoad_3.set('fieldImages', {'name': 'TextEdit', });
lyr_SabzalRoad_4.set('fieldImages', {'name': 'TextEdit', });
lyr_NewSabzalRoad_5.set('fieldImages', {'name': 'TextEdit', 'highway': 'TextEdit', });
lyr_SamungliRoad_6.set('fieldImages', {'name': 'TextEdit', });
lyr_Subhan_Boundries_7.set('fieldImages', {'Name': '', });
lyr_Mosque_8.set('fieldImages', {'Name': '', });
lyr_SubhanAvenueRoads_9.set('fieldImages', {'name': '', });
lyr_EndPointHouse_10.set('fieldImages', {'id': 'TextEdit', });
lyr_StartPointHouse_11.set('fieldImages', {'id': 'TextEdit', });
lyr_House1227_12.set('fieldImages', {'S.No': 'TextEdit', });
lyr_Nalah_2.set('fieldLabels', {'name': 'inline label - always visible', });
lyr_BackGateRoad_3.set('fieldLabels', {'name': 'inline label - always visible', });
lyr_SabzalRoad_4.set('fieldLabels', {'name': 'inline label - always visible', });
lyr_NewSabzalRoad_5.set('fieldLabels', {'name': 'inline label - always visible', 'highway': 'inline label - always visible', });
lyr_SamungliRoad_6.set('fieldLabels', {'name': 'inline label - always visible', });
lyr_Subhan_Boundries_7.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Mosque_8.set('fieldLabels', {'Name': 'header label - always visible', });
lyr_SubhanAvenueRoads_9.set('fieldLabels', {'name': 'inline label - always visible', });
lyr_EndPointHouse_10.set('fieldLabels', {'id': 'no label', });
lyr_StartPointHouse_11.set('fieldLabels', {'id': 'no label', });
lyr_House1227_12.set('fieldLabels', {'S.No': 'inline label - always visible', });
lyr_House1227_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});