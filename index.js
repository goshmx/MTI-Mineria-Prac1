var fs = require("fs");
var Converter = require("csvtojson").Converter;
var json2csv = require('json2csv');

var fileStream = fs.createReadStream("farm_gdl.csv");

var campos = ['POBLACION DEL COMERCIO', 'NOMBRE DEL COMERCIO', 'Zona', 'Tipo'];

var converter = new Converter({constructResult:true});

var resultCsv;

converter.on("end_parsed", function (jsonResult) {
    for(var objeto in jsonResult) {
       var objVal = jsonResult[objeto];
       objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('GENERAL ESCO','GENERAL ESCOB');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('GUADALAJAFA J','GUADALAJARA');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('GUADALAJARA J','GUADALAJARA');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('GUADALAJARAR','GUADALAJARA');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('GUADALAJRA JA','GUADALAJARA');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('JAL','');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('GUADALUPE NL','GUADALUPE');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('GUAJALAJARA J','GUADALAJARA');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('IRAPUATO GTO','IRAPUATO');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('LEON DE LOS A','LEON');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('LEON DE LOS','LEON');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('LEON GTO','LEON');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('MANZANILLO CO','MANZANILLO');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('MAZATLAN SIN','MAZATLAN');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('MONTERREY NL','MONTERREY');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('MORELIA MICH','MORELIA');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('CIUDAD DE ME','MEXICO DF');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('PUERTO VALLA','PTO VALLARTA');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('PUERTO VALLAR','PTO VALLARTA');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('SAN FCO DEL R','SAN FCO DEL');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('SAN NICOLAS D','SAN NICOLAS');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('SAN PEDRO GAR','SAN P GARZA');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('SILAO GTO','SILAO');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('SN NCLAS D LO','SN NICOLAS D');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('SN NICOLAS DE','SN NICOLAS D');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('TEPIC NAY','TEPIC');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('SAN P GARZA GA','SAN P GARZA');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('TLAJOMULCO DE','TLAJOMULCO D');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('TLAJOMULCO JA','TLAJOMULCO D');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('TOJAJOMULCO D','TLACOMULDO D');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('TLAQUEPAQUE J','TLAQUEPAQUE');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('TONALA JAL','TONALA');
        objVal['POBLACION DEL COMERCIO'] = objVal['POBLACION DEL COMERCIO'].replace('ZAPOPAN JAL','ZAPOPAN');

        if(objVal['NOMBRE DEL COMERCIO'].indexOf("7 ELEVEN")>=0){
            objVal['NOMBRE DEL COMERCIO'] = '7 ELEVEN';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("ANDREA ")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'ANDREA';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("APPLE BEES")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'APPLE BEES';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("APPLEBEE")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'APPLE BEES';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("7 ELEVEN")>=0){
            objVal['NOMBRE DEL COMERCIO'] = '7 ELEVEN';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("ATLETICA")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'ATLETICA';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("7 ELEVEN")>=0){
            objVal['NOMBRE DEL COMERCIO'] = '7 ELEVEN';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("BENAVIDES")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'BENAVIDES';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("BLOCKBUSTER")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'BLOCKBUSTER';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("BODEGA")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'BODEGA AURRERA';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("7 ELEVEN")>=0){
            objVal['NOMBRE DEL COMERCIO'] = '7 ELEVEN';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("BURGUER KING")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'BURGUER KING';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("CABLEVISION")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'CABLEVISION';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("CAFET")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'CAFET';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("CARLS")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'CARL S JR';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("7 ELEVEN")>=0){
            objVal['NOMBRE DEL COMERCIO'] = '7 ELEVEN';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("CHAVITA")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'CHAVITA';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("CHEDRAUI")>=0){
            objVal['NOMBRE DEL COMERCIO'] = '7 CHEDRAUI';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("CHRISTUS")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'CHRISTUS';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("CINEPOLIS")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'CINEPOLIS';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("CINETICKET")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'CINEPOLIS';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("COM MEX")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'COMERCIAL MEXICANA';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("COPPEL")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'COPPEL';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("DEP MARTI")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'MARTI';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("ETN")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'ETN';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("FAB D")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'FABRICAS DE FRANCIA';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("FANTASIAS MIGUEL")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'FANTASIAS MIGUEL';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("FARM GUADALAJARA")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'FARM GUADALAJARA';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("FARM SIMI")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'FARMACIAS SIMILARES';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("7 ELEVEN")>=0){
            objVal['NOMBRE DEL COMERCIO'] = '7 ELEVEN';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("GIGANTE")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'GIGANTE';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("H E B")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'H E B';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("HEB")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'H E B';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("HERBALIFE")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'HERBALIFE';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("HOME DEPOT")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'HOME DEPOT';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("HOMEDEPOT")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'HOME DEPOT';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("ISSEG")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'ISSEG';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("JOY")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'JOY';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("HOMEDEPOT")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'HOME DEPOT';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("LAILA INTIMA")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'LAILA INTIMA';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("LIB GONVILL")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'HOME DEPOT';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("LIVERPOOL")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'LIVERPOOL';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("LOB")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'LOB';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("MAC DONALD")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'MAC DONALDS';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("MACDONALS")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'MAC DONALD';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("MEGA")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'MEGA';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("NEXTEL")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'NEXTEL';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("O DE M")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'O DE M';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("OFFICE DEPOT")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'OFFICE DEPOT';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("HOMEDEPOT")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'HOME DEPOT';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("OPER")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'OPER';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("RADIO SHACK")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'RADIO SHACK';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("SAMS")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'SAMS';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("SANBORN")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'SANBORNS';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("SEARS")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'SEARS';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("SEG ING")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'SEG ING';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("SEG MTY")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'SEGUROS MONTERREY';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("SEGUROS MOTERREY NYL")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'SEGUROS MONTEREY';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("SIAPA")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'SIAPA';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("SORIANA")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'SORIANA';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("SRIA DE FNZ DL EDO DE")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'SRIA FINANZAS Y ADMON';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("STARBUCKS")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'STARBUCKS';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("STEREN")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'STEREN';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("SUBURBIA")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'SUBURBIA';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("SUPER LA PLAYA")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'SUPER LA PLAYA';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("SUPERAMA")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'SUPERAMA';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("TELAS PARISINA")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'TELAS PARISINA';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("TELCEL")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'TELCEL';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("TICKEMASTER")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'TICKETMASTER';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("VIPS")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'VIPS';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("WAL MART")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'WALMART';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("ZAP FLEXI")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'ZAP FLEXI';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("WINGS ARMY")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'WINGS ARMY';
        }
        if(objVal['NOMBRE DEL COMERCIO'].indexOf("HOMEDEPOT")>=0){
            objVal['NOMBRE DEL COMERCIO'] = 'HOME DEPOT';
        }



        if(objVal['NOMBRE DEL COMERCIO'].indexOf("FARMACIA")>=0){
            objVal['Zona'] = 1;
            objVal['Tipo'] = 1;
        }
        else if(objVal['NOMBRE DEL COMERCIO'].indexOf("GIGANTE")>=0){
            objVal['Zona'] = 2;
            objVal['Tipo'] = 2;
        }
        else if(objVal['NOMBRE DEL COMERCIO'].indexOf("WALMART")>=0){
            objVal['Zona'] = 3;
            objVal['Tipo'] = 3;
        }
        else {
            objVal['Zona'] = 4;
            objVal['Tipo'] = 4;
        }

    }


    json2csv({ data: jsonResult, fields: campos }, function(err, csv) {
        if (err) console.log(err);
        fs.writeFile('resultado.csv', csv, function(err) {
            if (err) throw err;
            console.log('file saved');
        });
    });
});

fileStream.pipe(converter);

