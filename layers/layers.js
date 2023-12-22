var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_NDBI_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDBI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDBI_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13896330.000000, 163787.998477, 13898639.999998, 166939.057264]
                            })
                        });
var lyr_NDVI_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13896330.000000, 163787.998477, 13898639.999998, 166939.057264]
                            })
                        });
var format_Peta_Curah_Hujan_3 = new ol.format.GeoJSON();
var features_Peta_Curah_Hujan_3 = format_Peta_Curah_Hujan_3.readFeatures(json_Peta_Curah_Hujan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peta_Curah_Hujan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peta_Curah_Hujan_3.addFeatures(features_Peta_Curah_Hujan_3);
var lyr_Peta_Curah_Hujan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Peta_Curah_Hujan_3, 
                style: style_Peta_Curah_Hujan_3,
                interactive: true,
                title: '<img src="styles/legend/Peta_Curah_Hujan_3.png" /> Peta_Curah_Hujan'
            });
var format_Peta_Penggunaan_Lahan_4 = new ol.format.GeoJSON();
var features_Peta_Penggunaan_Lahan_4 = format_Peta_Penggunaan_Lahan_4.readFeatures(json_Peta_Penggunaan_Lahan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peta_Penggunaan_Lahan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peta_Penggunaan_Lahan_4.addFeatures(features_Peta_Penggunaan_Lahan_4);
var lyr_Peta_Penggunaan_Lahan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Peta_Penggunaan_Lahan_4, 
                style: style_Peta_Penggunaan_Lahan_4,
                interactive: true,
    title: 'Peta_Penggunaan_Lahan<br />\
    <img src="styles/legend/Peta_Penggunaan_Lahan_4_0.png" /> Area Parkir dan Lapangan<br />\
    <img src="styles/legend/Peta_Penggunaan_Lahan_4_1.png" /> Bank<br />\
    <img src="styles/legend/Peta_Penggunaan_Lahan_4_2.png" /> Hotel<br />\
    <img src="styles/legend/Peta_Penggunaan_Lahan_4_3.png" /> Jalan<br />\
    <img src="styles/legend/Peta_Penggunaan_Lahan_4_4.png" /> Jalur Hijau/Median Jalan<br />\
    <img src="styles/legend/Peta_Penggunaan_Lahan_4_5.png" /> Kebun Campuran<br />\
    <img src="styles/legend/Peta_Penggunaan_Lahan_4_6.png" /> Mall<br />\
    <img src="styles/legend/Peta_Penggunaan_Lahan_4_7.png" /> Pasar<br />\
    <img src="styles/legend/Peta_Penggunaan_Lahan_4_8.png" /> Pemakaman Umum<br />\
    <img src="styles/legend/Peta_Penggunaan_Lahan_4_9.png" /> Perkantoran<br />\
    <img src="styles/legend/Peta_Penggunaan_Lahan_4_10.png" /> Permukiman<br />\
    <img src="styles/legend/Peta_Penggunaan_Lahan_4_11.png" /> Pertokoan<br />\
    <img src="styles/legend/Peta_Penggunaan_Lahan_4_12.png" /> Perumahan Teratur<br />\
    <img src="styles/legend/Peta_Penggunaan_Lahan_4_13.png" /> Puskesmas<br />\
    <img src="styles/legend/Peta_Penggunaan_Lahan_4_14.png" /> Rumah Sakit<br />\
    <img src="styles/legend/Peta_Penggunaan_Lahan_4_15.png" /> Sarana Ibadah<br />\
    <img src="styles/legend/Peta_Penggunaan_Lahan_4_16.png" /> Sarana Pendidikan<br />\
    <img src="styles/legend/Peta_Penggunaan_Lahan_4_17.png" /> SPBU<br />\
    <img src="styles/legend/Peta_Penggunaan_Lahan_4_18.png" /> Sungai<br />\
    <img src="styles/legend/Peta_Penggunaan_Lahan_4_19.png" /> Taman<br />\
    <img src="styles/legend/Peta_Penggunaan_Lahan_4_20.png" /> Tanah Kosong<br />\
    <img src="styles/legend/Peta_Penggunaan_Lahan_4_21.png" /> Tubuh Air Buatan<br />\
    <img src="styles/legend/Peta_Penggunaan_Lahan_4_22.png" /> <br />'
        });
var format_Peta_Ketinggian_5 = new ol.format.GeoJSON();
var features_Peta_Ketinggian_5 = format_Peta_Ketinggian_5.readFeatures(json_Peta_Ketinggian_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peta_Ketinggian_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peta_Ketinggian_5.addFeatures(features_Peta_Ketinggian_5);
var lyr_Peta_Ketinggian_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Peta_Ketinggian_5, 
                style: style_Peta_Ketinggian_5,
                interactive: true,
    title: 'Peta_Ketinggian<br />\
    <img src="styles/legend/Peta_Ketinggian_5_0.png" /> 51 - 56 m<br />\
    <img src="styles/legend/Peta_Ketinggian_5_1.png" /> 11 - 50 m<br />\
    <img src="styles/legend/Peta_Ketinggian_5_2.png" /> 0 - 10 m<br />\
    <img src="styles/legend/Peta_Ketinggian_5_3.png" /> <br />'
        });
var format_Peta_Kelerengan_6 = new ol.format.GeoJSON();
var features_Peta_Kelerengan_6 = format_Peta_Kelerengan_6.readFeatures(json_Peta_Kelerengan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peta_Kelerengan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peta_Kelerengan_6.addFeatures(features_Peta_Kelerengan_6);
var lyr_Peta_Kelerengan_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Peta_Kelerengan_6, 
                style: style_Peta_Kelerengan_6,
                interactive: true,
    title: 'Peta_Kelerengan<br />\
    <img src="styles/legend/Peta_Kelerengan_6_0.png" /> >45<br />\
    <img src="styles/legend/Peta_Kelerengan_6_1.png" /> >25-45%<br />\
    <img src="styles/legend/Peta_Kelerengan_6_2.png" /> >15-25%<br />\
    <img src="styles/legend/Peta_Kelerengan_6_3.png" /> >2-15%<br />\
    <img src="styles/legend/Peta_Kelerengan_6_4.png" /> 0-2%<br />\
    <img src="styles/legend/Peta_Kelerengan_6_5.png" /> <br />'
        });
var format_Peta_Jenis_Tanah_7 = new ol.format.GeoJSON();
var features_Peta_Jenis_Tanah_7 = format_Peta_Jenis_Tanah_7.readFeatures(json_Peta_Jenis_Tanah_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peta_Jenis_Tanah_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peta_Jenis_Tanah_7.addFeatures(features_Peta_Jenis_Tanah_7);
var lyr_Peta_Jenis_Tanah_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Peta_Jenis_Tanah_7, 
                style: style_Peta_Jenis_Tanah_7,
                interactive: true,
    title: 'Peta_Jenis_Tanah<br />\
    <img src="styles/legend/Peta_Jenis_Tanah_7_0.png" /> <br />\
    <img src="styles/legend/Peta_Jenis_Tanah_7_1.png" /> Alluvium, fan deposits; Alluvium, recent volcanic<br />\
    <img src="styles/legend/Peta_Jenis_Tanah_7_2.png" /> Fine-grained tephra, alluvium, recent volcanic<br />'
        });
var format_Admin_Kelurahan_Wenang_8 = new ol.format.GeoJSON();
var features_Admin_Kelurahan_Wenang_8 = format_Admin_Kelurahan_Wenang_8.readFeatures(json_Admin_Kelurahan_Wenang_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Admin_Kelurahan_Wenang_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Admin_Kelurahan_Wenang_8.addFeatures(features_Admin_Kelurahan_Wenang_8);
var lyr_Admin_Kelurahan_Wenang_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Admin_Kelurahan_Wenang_8, 
                style: style_Admin_Kelurahan_Wenang_8,
                interactive: false,
                title: '<img src="styles/legend/Admin_Kelurahan_Wenang_8.png" /> Admin_Kelurahan_Wenang'
            });
var format_Peta_Risiko_Banjir_9 = new ol.format.GeoJSON();
var features_Peta_Risiko_Banjir_9 = format_Peta_Risiko_Banjir_9.readFeatures(json_Peta_Risiko_Banjir_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peta_Risiko_Banjir_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peta_Risiko_Banjir_9.addFeatures(features_Peta_Risiko_Banjir_9);
var lyr_Peta_Risiko_Banjir_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Peta_Risiko_Banjir_9, 
                style: style_Peta_Risiko_Banjir_9,
                interactive: true,
    title: 'Peta_Risiko_Banjir<br />\
    <img src="styles/legend/Peta_Risiko_Banjir_9_0.png" /> Rendah<br />\
    <img src="styles/legend/Peta_Risiko_Banjir_9_1.png" /> Sedang<br />\
    <img src="styles/legend/Peta_Risiko_Banjir_9_2.png" /> Tinggi<br />\
    <img src="styles/legend/Peta_Risiko_Banjir_9_3.png" /> <br />'
        });
var format_Jalan_10 = new ol.format.GeoJSON();
var features_Jalan_10 = format_Jalan_10.readFeatures(json_Jalan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_10.addFeatures(features_Jalan_10);
var lyr_Jalan_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_10, 
                style: style_Jalan_10,
                interactive: false,
                title: '<img src="styles/legend/Jalan_10.png" /> Jalan'
            });
var format_rute10_11 = new ol.format.GeoJSON();
var features_rute10_11 = format_rute10_11.readFeatures(json_rute10_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rute10_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rute10_11.addFeatures(features_rute10_11);
var lyr_rute10_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rute10_11, 
                style: style_rute10_11,
                interactive: true,
                title: '<img src="styles/legend/rute10_11.png" /> rute 10'
            });
var format_rute9_12 = new ol.format.GeoJSON();
var features_rute9_12 = format_rute9_12.readFeatures(json_rute9_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rute9_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rute9_12.addFeatures(features_rute9_12);
var lyr_rute9_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rute9_12, 
                style: style_rute9_12,
                interactive: true,
                title: '<img src="styles/legend/rute9_12.png" /> rute 9'
            });
var format_rute7_13 = new ol.format.GeoJSON();
var features_rute7_13 = format_rute7_13.readFeatures(json_rute7_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rute7_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rute7_13.addFeatures(features_rute7_13);
var lyr_rute7_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rute7_13, 
                style: style_rute7_13,
                interactive: true,
                title: '<img src="styles/legend/rute7_13.png" /> rute 7'
            });
var format_rute8_14 = new ol.format.GeoJSON();
var features_rute8_14 = format_rute8_14.readFeatures(json_rute8_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rute8_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rute8_14.addFeatures(features_rute8_14);
var lyr_rute8_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rute8_14, 
                style: style_rute8_14,
                interactive: true,
                title: '<img src="styles/legend/rute8_14.png" /> rute 8'
            });
var format_rute6_15 = new ol.format.GeoJSON();
var features_rute6_15 = format_rute6_15.readFeatures(json_rute6_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rute6_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rute6_15.addFeatures(features_rute6_15);
var lyr_rute6_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rute6_15, 
                style: style_rute6_15,
                interactive: true,
                title: '<img src="styles/legend/rute6_15.png" /> rute 6'
            });
var format_rute5_16 = new ol.format.GeoJSON();
var features_rute5_16 = format_rute5_16.readFeatures(json_rute5_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rute5_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rute5_16.addFeatures(features_rute5_16);
var lyr_rute5_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rute5_16, 
                style: style_rute5_16,
                interactive: true,
                title: '<img src="styles/legend/rute5_16.png" /> rute 5'
            });
var format_rute4_17 = new ol.format.GeoJSON();
var features_rute4_17 = format_rute4_17.readFeatures(json_rute4_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rute4_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rute4_17.addFeatures(features_rute4_17);
var lyr_rute4_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rute4_17, 
                style: style_rute4_17,
                interactive: true,
                title: '<img src="styles/legend/rute4_17.png" /> rute 4'
            });
var format_rute3_18 = new ol.format.GeoJSON();
var features_rute3_18 = format_rute3_18.readFeatures(json_rute3_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rute3_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rute3_18.addFeatures(features_rute3_18);
var lyr_rute3_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rute3_18, 
                style: style_rute3_18,
                interactive: true,
                title: '<img src="styles/legend/rute3_18.png" /> rute 3'
            });
var format_rute2_19 = new ol.format.GeoJSON();
var features_rute2_19 = format_rute2_19.readFeatures(json_rute2_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rute2_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rute2_19.addFeatures(features_rute2_19);
var lyr_rute2_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rute2_19, 
                style: style_rute2_19,
                interactive: true,
                title: '<img src="styles/legend/rute2_19.png" /> rute 2'
            });
var format_rute1_20 = new ol.format.GeoJSON();
var features_rute1_20 = format_rute1_20.readFeatures(json_rute1_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rute1_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rute1_20.addFeatures(features_rute1_20);
var lyr_rute1_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rute1_20, 
                style: style_rute1_20,
                interactive: true,
                title: '<img src="styles/legend/rute1_20.png" /> rute 1'
            });
var format_ruteevakuasi_21 = new ol.format.GeoJSON();
var features_ruteevakuasi_21 = format_ruteevakuasi_21.readFeatures(json_ruteevakuasi_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ruteevakuasi_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ruteevakuasi_21.addFeatures(features_ruteevakuasi_21);
var lyr_ruteevakuasi_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ruteevakuasi_21, 
                style: style_ruteevakuasi_21,
                interactive: false,
                title: '<img src="styles/legend/ruteevakuasi_21.png" /> rute evakuasi'
            });
var format_titikevakuasi_22 = new ol.format.GeoJSON();
var features_titikevakuasi_22 = format_titikevakuasi_22.readFeatures(json_titikevakuasi_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titikevakuasi_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titikevakuasi_22.addFeatures(features_titikevakuasi_22);
var lyr_titikevakuasi_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_titikevakuasi_22, 
                style: style_titikevakuasi_22,
                interactive: true,
                title: '<img src="styles/legend/titikevakuasi_22.png" /> titik evakuasi'
            });
var format_Titik_Kumpul_23 = new ol.format.GeoJSON();
var features_Titik_Kumpul_23 = format_Titik_Kumpul_23.readFeatures(json_Titik_Kumpul_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_Kumpul_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_Kumpul_23.addFeatures(features_Titik_Kumpul_23);
var lyr_Titik_Kumpul_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Titik_Kumpul_23, 
                style: style_Titik_Kumpul_23,
                interactive: true,
                title: '<img src="styles/legend/Titik_Kumpul_23.png" /> Titik_Kumpul'
            });
var format_Servicearealines_24 = new ol.format.GeoJSON();
var features_Servicearealines_24 = format_Servicearealines_24.readFeatures(json_Servicearealines_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearealines_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearealines_24.addFeatures(features_Servicearealines_24);
var lyr_Servicearealines_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Servicearealines_24, 
                style: style_Servicearealines_24,
                interactive: false,
                title: '<img src="styles/legend/Servicearealines_24.png" /> Service area (lines)'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_NDBI_1.setVisible(true);lyr_NDVI_2.setVisible(true);lyr_Peta_Curah_Hujan_3.setVisible(true);lyr_Peta_Penggunaan_Lahan_4.setVisible(true);lyr_Peta_Ketinggian_5.setVisible(true);lyr_Peta_Kelerengan_6.setVisible(true);lyr_Peta_Jenis_Tanah_7.setVisible(true);lyr_Admin_Kelurahan_Wenang_8.setVisible(true);lyr_Peta_Risiko_Banjir_9.setVisible(true);lyr_Jalan_10.setVisible(true);lyr_rute10_11.setVisible(true);lyr_rute9_12.setVisible(true);lyr_rute7_13.setVisible(true);lyr_rute8_14.setVisible(true);lyr_rute6_15.setVisible(true);lyr_rute5_16.setVisible(true);lyr_rute4_17.setVisible(true);lyr_rute3_18.setVisible(true);lyr_rute2_19.setVisible(true);lyr_rute1_20.setVisible(true);lyr_ruteevakuasi_21.setVisible(true);lyr_titikevakuasi_22.setVisible(true);lyr_Titik_Kumpul_23.setVisible(true);lyr_Servicearealines_24.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_NDBI_1,lyr_NDVI_2,lyr_Peta_Curah_Hujan_3,lyr_Peta_Penggunaan_Lahan_4,lyr_Peta_Ketinggian_5,lyr_Peta_Kelerengan_6,lyr_Peta_Jenis_Tanah_7,lyr_Admin_Kelurahan_Wenang_8,lyr_Peta_Risiko_Banjir_9,lyr_Jalan_10,lyr_rute10_11,lyr_rute9_12,lyr_rute7_13,lyr_rute8_14,lyr_rute6_15,lyr_rute5_16,lyr_rute4_17,lyr_rute3_18,lyr_rute2_19,lyr_rute1_20,lyr_ruteevakuasi_21,lyr_titikevakuasi_22,lyr_Titik_Kumpul_23,lyr_Servicearealines_24];
lyr_Peta_Curah_Hujan_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Crh_Hjn': 'Crh_Hjn', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'skor_hujan': 'skor_hujan', });
lyr_Peta_Penggunaan_Lahan_4.set('fieldAliases', {'Landuse': 'Landuse', 'skor_lahan': 'skor_lahan', });
lyr_Peta_Ketinggian_5.set('fieldAliases', {'gridcode': 'gridcode', 'ket': 'ket', 'skor_tingg': 'skor_tingg', 'luas': 'luas', });
lyr_Peta_Kelerengan_6.set('fieldAliases', {'gridcode': 'gridcode', 'Klasifikas': 'Klasifikas', 'skor_leren': 'skor_leren', });
lyr_Peta_Jenis_Tanah_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LITHOLOGY': 'LITHOLOGY', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'skor_tanah': 'skor_tanah', });
lyr_Admin_Kelurahan_Wenang_8.set('fieldAliases', {'WADMKD': 'WADMKD', });
lyr_Peta_Risiko_Banjir_9.set('fieldAliases', {'kelas': 'kelas', });
lyr_Jalan_10.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_rute10_11.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_rute9_12.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_rute7_13.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_rute8_14.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_rute6_15.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_rute5_16.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_rute4_17.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_rute3_18.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_rute2_19.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_rute1_20.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_ruteevakuasi_21.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', 'layer': 'layer', 'path': 'path', 'lenght': 'lenght', });
lyr_titikevakuasi_22.set('fieldAliases', {'Id': 'Id', 'ket': 'ket', });
lyr_Titik_Kumpul_23.set('fieldAliases', {'Id': 'Id', 'Sarana': 'Sarana', 'Jangkauan': 'Jangkauan', });
lyr_Servicearealines_24.set('fieldAliases', {'Id': 'Id', 'Sarana': 'Sarana', 'Jangkauan': 'Jangkauan', 'type': 'type', 'start': 'start', });
lyr_Peta_Curah_Hujan_3.set('fieldImages', {'OBJECTID': '', 'Crh_Hjn': '', 'Shape_Leng': '', 'Shape_Area': '', 'skor_hujan': '', });
lyr_Peta_Penggunaan_Lahan_4.set('fieldImages', {'Landuse': 'TextEdit', 'skor_lahan': 'TextEdit', });
lyr_Peta_Ketinggian_5.set('fieldImages', {'gridcode': 'TextEdit', 'ket': 'TextEdit', 'skor_tingg': 'TextEdit', 'luas': 'Range', });
lyr_Peta_Kelerengan_6.set('fieldImages', {'gridcode': 'TextEdit', 'Klasifikas': 'TextEdit', 'skor_leren': 'TextEdit', });
lyr_Peta_Jenis_Tanah_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'LITHOLOGY': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'skor_tanah': 'TextEdit', });
lyr_Admin_Kelurahan_Wenang_8.set('fieldImages', {'WADMKD': 'TextEdit', });
lyr_Peta_Risiko_Banjir_9.set('fieldImages', {'kelas': 'TextEdit', });
lyr_Jalan_10.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_rute10_11.set('fieldImages', {'start': '', 'end': '', 'cost': '', });
lyr_rute9_12.set('fieldImages', {'start': '', 'end': '', 'cost': '', });
lyr_rute7_13.set('fieldImages', {'start': '', 'end': '', 'cost': '', });
lyr_rute8_14.set('fieldImages', {'start': '', 'end': '', 'cost': '', });
lyr_rute6_15.set('fieldImages', {'start': '', 'end': '', 'cost': '', });
lyr_rute5_16.set('fieldImages', {'start': '', 'end': '', 'cost': '', });
lyr_rute4_17.set('fieldImages', {'start': '', 'end': '', 'cost': '', });
lyr_rute3_18.set('fieldImages', {'start': '', 'end': '', 'cost': '', });
lyr_rute2_19.set('fieldImages', {'start': '', 'end': '', 'cost': '', });
lyr_rute1_20.set('fieldImages', {'start': '', 'end': '', 'cost': '', });
lyr_ruteevakuasi_21.set('fieldImages', {'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'lenght': 'TextEdit', });
lyr_titikevakuasi_22.set('fieldImages', {'Id': '', 'ket': '', });
lyr_Titik_Kumpul_23.set('fieldImages', {'Id': 'Range', 'Sarana': 'TextEdit', 'Jangkauan': 'Range', });
lyr_Servicearealines_24.set('fieldImages', {'Id': 'Range', 'Sarana': 'TextEdit', 'Jangkauan': 'Range', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_Peta_Curah_Hujan_3.set('fieldLabels', {'OBJECTID': 'no label', 'Crh_Hjn': 'header label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'skor_hujan': 'no label', });
lyr_Peta_Penggunaan_Lahan_4.set('fieldLabels', {'Landuse': 'header label', 'skor_lahan': 'inline label', });
lyr_Peta_Ketinggian_5.set('fieldLabels', {'gridcode': 'no label', 'ket': 'header label', 'skor_tingg': 'no label', 'luas': 'no label', });
lyr_Peta_Kelerengan_6.set('fieldLabels', {'gridcode': 'no label', 'Klasifikas': 'header label', 'skor_leren': 'no label', });
lyr_Peta_Jenis_Tanah_7.set('fieldLabels', {'OBJECTID': 'no label', 'LITHOLOGY': 'header label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'skor_tanah': 'no label', });
lyr_Admin_Kelurahan_Wenang_8.set('fieldLabels', {'WADMKD': 'inline label', });
lyr_Peta_Risiko_Banjir_9.set('fieldLabels', {'kelas': 'inline label', });
lyr_Jalan_10.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_rute10_11.set('fieldLabels', {'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_rute9_12.set('fieldLabels', {'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_rute7_13.set('fieldLabels', {'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_rute8_14.set('fieldLabels', {'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_rute6_15.set('fieldLabels', {'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_rute5_16.set('fieldLabels', {'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_rute4_17.set('fieldLabels', {'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_rute3_18.set('fieldLabels', {'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_rute2_19.set('fieldLabels', {'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_rute1_20.set('fieldLabels', {'start': 'no label', 'end': 'no label', 'cost': 'no label', });
lyr_ruteevakuasi_21.set('fieldLabels', {'start': 'no label', 'end': 'no label', 'cost': 'no label', 'layer': 'inline label', 'path': 'no label', 'lenght': 'no label', });
lyr_titikevakuasi_22.set('fieldLabels', {'Id': 'no label', 'ket': 'inline label', });
lyr_Titik_Kumpul_23.set('fieldLabels', {'Id': 'no label', 'Sarana': 'inline label', 'Jangkauan': 'no label', });
lyr_Servicearealines_24.set('fieldLabels', {'Id': 'no label', 'Sarana': 'no label', 'Jangkauan': 'header label', 'type': 'no label', 'start': 'no label', });
lyr_Servicearealines_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});