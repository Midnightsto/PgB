// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('https://git.io/d.js-heroku', {type: 'WATCHING'});
});

client.on('message', (message) => {
       if(message.content == "RD Vega") {
        message.channel.send({embed: {
            color: 3447003,
            title: "RD available in vega:",
            fields: [
              { name: "Name",   value: "Standard\nEnhanced\nPower\nEnhanced Power\nVega\nVega Ancient\nVega Ancient Long\nVega Ancient Strong", inline: true},
              { name: "Cryo",   value: "49\n77\n149\n270\n540\n621", inline: true},
              { name: "Energy", value: "16\n20\n26\n30\n30\n32", inline: true},
              { name: "Rank",   value: "5\n8\n10\n12", inline: true},
              { name: "Planet", value: "Kalabesh\nLyris\nLyris/Aurora\nAurora\nAurora\nR5", inline: true},
              { name: "Mantis", value: "R6Sentinel\nR10Sentinel\nR11Sentinel\nR13,15Sentinel\nSentinel\nR82 Boss", inline: true},
            ]
            }
        });
    }
    if(message.content == "RD Antares" ) {

        message.channel.send({embed: {
            color: 3447003,
            title: "RD Obtainable in Antares:",
            fields: [
                { name: "Name",   value: "Nano\nGammatronic\nInfratech\nHyper Razed\nAntares\nAntares Ancient\nAntares Ancient Long\nVega Ancient Strong", inline: true},
                { name: "Cryo",   value: "372\n421\n452\n656\n1'312\n1'509", inline: true},
                { name: "Energy", value: "36\n40\n46\n50\n50\n53", inline: true},
                { name: "Rank",   value: "14\n16\n18\n20", inline: true},
                { name: "Planet", value: "Terasa\nTerasa\nLustra/Lustra\nTerasa\nR5", inline: true},
                { name: "Mantis", value: "Mender,Parasite\nR20Mender,Parasite\nMender,Parasite\nMender,Parasite\nR82 Boss", inline: true},
            ]
          }
        });
    }
    if(message.content == "RD Gemini" ) {

        message.channel.send({embed: {
            color: 3447003,
            title: "RD Obtainable in Gemini:",
            fields: [
                { name: "Name",   value: "Atomic\nElectron\nProton\nGemini\nGemini Ancient\nGemini Ancient Long\nGemini Ancient Strong", inline: true},
                { name: "Cryo",   value: "815\n904\n1'036\n2'072\n2'383", inline: true},
                { name: "Energy", value: "56\n60\n66\n66\n69", inline: true},
                { name: "Rank",   value: "23\n25\n28\n28", inline: true},
                { name: "Planet", value: "CC\nCC\nCC\nCC\nR5", inline: true},
                { name: "Mantis", value: "R28Parasite\nR31Parasite\nR33Parasite\nR28,R31,R33Parasite\nR82 Boss", inline: true},
            ]
          }
        });
    }
    if(message.content == "RD Mizar" ) {

        message.channel.send({embed: {
            color: 3447003,
            title: "RD Obtainable in Mizar:",
            fields: [
                { name: "Name",   value: "Neutron\nSynapse\nProtononic\nFusion Force\nMizar Modulator\nMizar Ancient\nMizar Ancient Long\nMizar Ancient Strong", inline: true},
                { name: "Cryo",   value: "1'457\n1'519\n1'731\n2'061\n4'122\n4'741 ", inline: true},
                { name: "Energy", value: "70\n76\n80\n86\n86\n90", inline: true},
                { name: "Rank",   value: "30\n33\n35\n38", inline: true},
                { name: "Planet", value: "Baumar\nBaumar\nMolikar\nMolikar\nBaumar\nR5", inline: true},
                { name: "Mantis", value: "R35,37Parasite\nParasite\nParasite\nParasite\nRocketeer,Pyro\nR82 Boss", inline: true},
            ]
          }
        });
    }
    if(message.content == "RD Sol" ) {

        message.channel.send({embed: {
            color: 3447003,
            title: "RD Obtainable in Sol:",
            fields: [
                { name: "Name",   value: "Antimatter\nAM Enhanced\n AM Power \n AM Materializing \n AM Enhanced Materializing\nAM Power Materializing\nAM R1-D1\nSol Super\nSol Ancient\nSol ancient long\nSol Ancient Strong", inline: true},
                { name: "Cryo",   value: "2'193\n2'489\n2'608\n2'968\n3'267\n3'753\n5'355\n10'710\n12'316", inline: true},
                { name: "Energy", value: "90\n96\n100\n106\n110\n116\n120\n120\n126", inline: true},
                { name: "Rank",   value: "40\n43\n45\n48\n50\n53\n55", inline: true},
                { name: "Planet", value: "Mars\nMars\nMars\nMoon\nMoon\nEarth\nEarth\nAll\nR5", inline: true},
                { name: "Mantis", value: "R45-47 Sniper\nE48,49 Sniper\nR50 Sniper\nR52-54 Sniper\nR55-56 Sniper\nR57-58Sniper R59,60 Sniper\nMender ,r45-60 Sniper\nR82 Boss", inline: true},
            ]
          }
        });
    }
    if(message.content == "RD Draconis" ) {

        message.channel.send({embed: {
            color: 3447003,
            title: "RD Obtainable in Draconis:",
            fields: [
                { name: "Name",   value: "Zeropoint\nZP Power\nZP Liquid Filament\nZP Mono-Cryodine Vapor\n Draconis Definitive\nDraconis Ancient\n Draconis Ancient Long \n Draconis Ancient Strong", inline: true},
                { name: "Cryo",   value: "11'996\n15'565\n23'754\n29'724\n59'448\n68'366", inline: true},
                { name: "Energy", value: "126\n130\n136\n140\n147", inline: true},
                { name: "Rank",   value: "58\n60\n63\n65", inline: true},
                { name: "Planet", value: "Gazica\nGazica\nMantis Hive\nMantis Hive\nGazica\nR5", inline: true},
                { name: "Mantis", value: " Sniper\n Sniper\nSniper\n Sniper\nMender\nR82 Boss", inline: true},
            ]
          }
        });
    }
    if(message.content == "Energy Kalabesh"){
        message.channel.send("Here is the map you requested", {files: ["https://imgur.com/MqbNU3S.png"]});

    }
    if(message.content == "Energy Axiom"){
        message.channel.send("Here is the map you requested",{files: ["https://imgur.com/Gcl9nxh.png"]});
    }
    if(message.content == "Energy Colossus"){
        message.channel.send("Here is the map you requested",{files: ["https://imgur.com/mUpcZzR.png"]});
    }
    if(message.content == "Energy Lyris"){
        message.channel.send("Here is the map you requested",{files: ["https://imgur.com/8VGrlen.png"]});
    }
    if(message.content == "Energy Aurora"){
        message.channel.send("Here is the map you requested",{files: ["https://imgur.com/DVJ7MiG.png"]});
    }
    if(message.content == "Mantis Aurora"){
        message.channel.send("Here is the map you requested",{files:  ["https://imgur.com/o3rFdco.png"]});

    }
    if(message.content == "Turret Aurora"){
        message.channel.send("Here is the map you requested", {files: ["https://imgur.com/BrMwbR2.png"]});

    }
    if(message.context == "Energy Phobos"){
        message.channel.send("Here is the map you requested",{files:  ["https://imgur.com/svzG2Fq.png"]});
    }
    if(message.content == "Energy Dante"){
        message.channel.send("Here is the map you requested",{files: ["https://imgur.com/nJh7S58.png"]});
    }
    if(message.content == "Energy Asteroid Junkyard"){
        message.channel.send("Here is the map you requested",{files: ["https://imgur.com/hk1WBba.png"]});
    
    }
    if(message.content == "Energy Remo"){
        message.channel.send("Here is the map that you requested",{files: ["https://imgur.com/EanOJ5T.png"]});
    }
    if(message.content == "Energy Lustra"){
        message.channel.send("Here is the map that u requested",{files:["https://imgur.com/a/YxdcvC3.png"]});
    }
    if(message.content == "Mantis Lustra"){
        message.channel.send("Here is the map that u requested",{files:["https://imgur.com/hoWMmu8.png"]});
    }
    if(message.content == "Energy Terasa"){
        message.channel.send("Here is the map that u requested",{files:["https://imgur.com/kiR9ZNQ.png"]});

    }
    if(message.content == "Mantis Terasa"){
        message.channel.send("Here is the map that you requested",{files:["https://imgur.com/fkgLG0Z.png"]});

    }
    if(message.content == "Energy Goya"){
        message.channel.send("Here is the map that you requested",{files:["https://imgur.com/cPrwv72.png"]});
    }
    if(message.content == "Energy Prosperous"){
        message.channel.send("Here is the map that you requested",{files:["https://imgur.com/cPrwv72.png"]});
    }
    if(message.content == "Bhelp"){
    message.channel.send({embed: {
        color: 3447003,
        title: "Command:",
        fields:[
            {name:"(Bp) (System)",value:"Searches for all the available version of the specified blueprint in the specified system(see Abbr)", inline:true},

        ]
    }})
}
if(message.content == "Blaster Vega" ) {

    message.channel.send({embed: {
        color: 3447003,
        title: "Blasters obtainable in Vega:",
        fields: [
            { name: "Name",   value: "Standard Ion\nEnhanced Ion\nTwin ion\nIon Storm\nVega Vendetta\nVega Ancient\nVega Ancient Rapid\nVega Ancient Strong", inline: true},
            { name: "Cryo",   value: "40\n82\n123\n249\n459\n917\n1'055", inline: true},
            { name: "Energy", value: "2\n4\n5\n6\n8\n8\n7\n16", inline: true},
            { name: "Rank",   value: "2\n5\n\n8\n12", inline: true},
            { name: "Planet", value: "Kalabesh,axiom\nLyris\nAurora\nAurora\nAurora\nR5", inline: true},
            { name: "Mantis", value: "Eliminator\nR1 eliminator\nR11 Avenger\nR13,R15 Avenger\nR11~R15 Avenger\nR82 Boss", inline: true},
        ]
      }
    });
}
if(message.content == "Blaster Antares" ) {

    message.channel.send({embed: {
        color: 3447003,
        title: "Blasters obtainable in Antares:",
        fields: [
            { name: "Name",   value: "Ion Thunder\nIon Tempest\nIon Blaze\nIon inferno\nAntares Armageddon\nAntares Ancient\nAntares Rapid\nAntares Strong", inline: true},
            { name: "Cryo",   value: "652\n701\n979\n1'230\n2460\n2'830", inline: true},
            { name: "Energy", value: "9\n10\n12\n13\n13\n13\n12\n28", inline: true},
            { name: "Rank",   value: "14\n16\n18\n20", inline: true},
            { name: "Planet", value: "Terasa\nTerasa\nLustra\nLustra\nLustra\nR5", inline: true},
            { name: "Mantis", value: "R18 Sentinel,Frenzoid,Barbarian\nR20 Sentinel Frenzoid Barbarian\nE23 Sentinel Frenzoid Barbarian\nR25 Sentinel Frenzoid Barbarian\nr23~25 Avenger Barbarian\nR82 Boss", inline: true},
        ]
      }
    });
}
if(message.content == "Blaster Gemini" ) {

    message.channel.send({embed: {
        color: 3447003,
        title: "Blasters obtainable in Gemini:",
        fields: [
            { name: "Name",   value: "Fusion Storm\nFusion Thunder\nFusion Tempest\n Gemini Geiger\nGemini Ancient\nGemini Rapid\nGemini Strong", inline: true},
            { name: "Cryo",   value: "1'433\n1'567\n1'779\n3'558\n4'091", inline: true},
            { name: "Energy", value: "14\n15\n17\n17\n18\16\n38", inline: true},
            { name: "Rank",   value: "23\n25\n28", inline: true},
            { name: "Planet", value: "Prosperous\nProsperous\nProsperous\nProsperous,Commerce Central,Technatoria\nR5", inline: true},
            { name: "Mantis", value: "R28 Avenger\nR31Avenger\nE33 Avenger\nR26~20 Marauder,Paralyzor\nR82 Boss", inline: true},
        ]
      }
    });
}
if(message.content == "Blaster Mizar" ) {

    message.channel.send({embed: {
        color: 3447003,
        title: "Blasters obtainable in Mizar:",
        fields: [
            { name: "Name",   value: "Fusion Blaze\nFusion Inferno\nFusion Apocalypse\nFusion Force\n Mizar Master\nMizar Ancient\nMizar Rapid\nMizar Strong", inline: true},
            { name: "Cryo",   value: "2'394\n3'039\n3'789\n4'168\n8'337\n9'587", inline: true},
            { name: "Energy", value: "18\n19\n20\n22\n23\n21\n36", inline: true},
            { name: "Rank",   value: "30\n33\n35\n38", inline: true},
            { name: "Planet", value: "Baumar\nBaumar\nMolikar\nMolikar\nMolikar\nR5", inline: true},
            { name: "Mantis", value: "R23,37 Avenger\nR38,39Avenger\nR40~42 Avenger\nR43,44 Avenger\nR35~44 Avenger Parasite Detonator Pyro Paralyzor\nR82 Boss", inline: true},
        ]
      }
    });
}
if(message.content == "Blaster Sol" ) {

    message.channel.send({embed: {
        color: 3447003,
        title: "Blasters obtainable in Sol:",
        fields: [
            { name: "Name",   value: "Antimatter\nAM Power\n AM Blaze\n AM Inferno wave\nAM Gamma Burst\nAM Gamma Spike\nAM Distortion\n Sol Sonic\nSol Ancient\nSol Rapid\nSol Strong", inline: true},
            { name: "Cryo",   value: "4'354\n4'595\n4'844\n5'266\n5'596\n6'093\n9'037\n18'973\n20'784", inline: true},
            { name: "Energy", value: "23\n24\n25\n27\n29\n30\n30\n32\n28\n64", inline: true},
            { name: "Rank",   value: "40\n43\n45\n48\n50\n53\n55", inline: true},
            { name: "Planet", value: "Mars\nMars\nMars\nMoon\nMoon\nEarth\nEarth\nEarth\nR5", inline: true},
            { name: "Mantis", value: "R45~47 Assasin\n48,49\n50\n52~54\n55,56\n57,58\n59,60 Assasin,Pyro,",inline :true},
        ]
      }
    });
}
if(message.content == "Blaster Draconis" ) {

    message.channel.send({embed: {
        color: 3447003,
        title: "Blasters obtainable in Draconis:",
        fields: [
            { name: "Name",   value: "Zero Point\nZP Power\n ZP Distortion Rail\n ZP Pulsar\n Draconis Disaster \nDraconis Ancient\nDraconis Rapid\nDraconis Strong", inline: true},
            { name: "Cryo",   value: "17'395\n22'640\n33'652\n43'443\n86'886\n99'919", inline: true},
            { name: "Energy", value: "32\n33\n34\n35\n37\37\n33\n74", inline: true},
            { name: "Rank",   value: "58\n63\n65", inline: true},
            { name: "Planet", value: "Gazica\nGazica\nMantis Hive \n Mantis Hive \n Mantis Hive\nR5", inline: true},
            { name: "Mantis", value: "R62~64 Assasin\n65,66\n67,69\n70\n67~70 Assasin, harv\nR82 Boss",inline :true},
        ]
      }
    });
}
if(message.content == "Collector Vega" ) {

    message.channel.send({embed: {
        color: 3447003,
        title: "Collectors obtainable in Vega:",
        fields: [
            { name: "Name",   value: "Enhanced \nPower \nEnhanced Power\nSupreme\nVega\nVega Ancient", inline: true},
            { name: "Cryo",   value: "71\n131\n199\n378\n755\n869", inline: true},
            { name: "Rank",   value: "5\n8\n10\n12", inline: true},
            { name: "Planet", value: "Axiom\nLyris\nAurora\nAurora\nAurora\nR5", inline: true},
            { name: "Mantis", value: "R5 Sentinel\nR9 Sentinel\nR13 Harvester\nR15\nR82 Boss",inline :true},
        ]
      }
    });
}
if(message.content == "Collector Antares" ) {

    message.channel.send({embed: {
        color: 3447003,
        title: "Collectors obtainable in Antares:",
        fields: [
            { name: "Name",   value: "Nano Threaded\nSub Surface\n Linked Continuum\nQuantum vortex\nAntares\nAntares Ancient", inline: true},
            { name: "Cryo",   value: "512\n608\n753\n1'066\n2'132\n2'452", inline: true},
            { name: "Rank",   value: "14\n16\n18\n20", inline: true},
            { name: "Planet", value: "Terasa\nTerasa\nLustra\nLustra\nTerasa\nR5", inline: true},
            { name: "Mantis", value: "R19 Harvester\nR21\nR24\nR26\nR18,20 Avenger,Marauder,Barbarian,Rocketeer\nR82 Boss",inline :true},
        ]
      }
    });
}
if(message.content == "Collector Gemini" ) {

    message.channel.send({embed: {
        color: 3447003,
        title: "Collectors obtainable in Gemini:",
        fields: [
            { name: "Name",   value: "Fusion\nEnhanced Fusion\nDual Fusion \Gemini\nGemini Ancient", inline: true},
            { name: "Cryo",   value: "1'254\n1'326\n1'485\n2'970\n3'416", inline: true},
            { name: "Rank",   value: "23\n25\n28", inline: true},
            { name: "Planet", value: "Prosperous\nProsperous\nProsperous\nProsperous\nR5", inline: true},
            { name: "Mantis", value: "R27 Harvester\nR29,31\nR28~33 Harvester,R28~33 Avenger,\nR82 Boss",inline :true},
        ]
      }
    });
}
if(message.content == "Collector Mizar" ) {

    message.channel.send({embed: {
        color: 3447003,
        title: "Collectors obtainable in Mizar:",
        fields: [
            { name: "Name",   value: "Fusion Power\nFusion Nano \n Fusion Quantum\nFusion Force\nMizar\nMizar Ancient", inline: true},
            { name: "Cryo",   value: "2'082\n2'431\n3'169\n3'344\n6'688\n7'691", inline: true},
            { name: "Rank",   value: "30\n33\n35\n38\n38\n38", inline: true},
            { name: "Planet", value: "Baumar\nBaumar\nMolikar\nBaumar\nBaumar Molikar\nR5", inline: true},
            { name: "Mantis", value: "R35~37 Harvester\nR38~39\nR40~42\nR43~44\nR35~44 Avenger,Marauder,Rocketeer,Pyro\nR82 Boss",inline :true},
        ]
      }
    });
}
if(message.content == "Collector Sol" ) {

    message.channel.send({embed: {
        color: 3447003,
        title: "Collectors obtainable in Sol:",
        fields: [
            { name: "Name",   value: "Antimatter\n AM Enhanced\nAM Power \nAM Parallel Burst\nQuantum Forcen\nAM Big Claw\n AM Wormhole\nSol\nSol Ancient", inline: true},
            { name: "Cryo",   value: "3'483\n3'714\n4'099\n4'548\n4'840\n5'362\n8'032\n16'065\n18'475", inline: true},
            { name: "Rank",   value: "40\n43\n45\n48\n50\n53\n55", inline: true},
            { name: "Planet", value: "Mars\nMars\nMars\nMoon\nMoon\nEarth\nEarth\nAll Planets\nR5", inline: true},
            { name: "Mantis", value: "R45 Harvester\nR48\nR50\nR54\nR57\n58\n60\nR45~60\nR82 Boss",inline :true},
        ]
      }
    });
}
if(message.content == "Collector Draconis" ) {

    message.channel.send({embed: {
        color: 3447003,
        title: "Collectors obtainable in Draconis:",
        fields: [
            { name: "Name",   value: "Zero Point\nZP Power\nZP Singularity\nZP Dimensional Vortex\nDraconis\nDraconis Ancient Ancient", inline: true},
            { name: "Cryo",   value: "14'396\n18'395\n27'713\34'297", inline: true},
            { name: "Rank",   value: "30\n33\n35\n38\n38\n38", inline: true},
            { name: "Planet", value: "Gazica\nGazica\nHive\nHive\nR5", inline: true},
            { name: "Mantis", value: "R63 Harvester\nR66\nR67\nR70\nR63,66\nR82 Boss",inline :true},
        ]
      }
    });
}

if(message.content == "AB Vega" ) {

    message.channel.send({embed: {
        color: 3447003,
        title: "Afterburners obtainable in Vega:",
        fields: [
            { name: "Name",   value: "Enhanced\nPower\nEnhanced Power \n Vega  \nVega Ancient\nVega Long\nVega Strong", inline: true},
            { name: "Cryo",   value: "94\n162\n324\n648\n754", inline: true},
            { name: "Energy", value: "20\n24\n30\n30\n30\n20\n38", inline: true},
            { name: "Rank",   value: "8\n10\n12", inline: true},
            { name: "Planet", value: "Lyris\nAurora\nAurora\nAurora\nR5", inline: true},
            { name: "Mantis", value: "R9Sentinel\nR13Interceptor\nR15\nR13,15\nR79 DS",inline :true},
        ]
      }
    });
}
if(message.content == "AB Antares" ) {

    message.channel.send({embed: {
        color: 3447003,
        title: "Afterburners obtainable in Antares:",
        fields: [
            { name: "Name",   value: "Augmented\nSpeedster\nRam accelerated\nScram Driven\n Antares  \nAntares Ancient\nAntares Long\nAntares Strong", inline: true},
            { name: "Cryo",   value: "419\n514\n527\n820\n1'640\n1'886", inline: true},
            { name: "Energy", value: "36\n40\n46\n50\n50\n50\n33\n75", inline: true},
            { name: "Rank",   value: "14\n16\n18\n20", inline: true},
            { name: "Planet", value: "Terasa\nTerasa\nLustra\nLustra\nTerasa and Lustra\nR5", inline: true},
            { name: "Mantis", value: "R19Interceptor\nR21\nR24\nR26\n19~26\nR79 DS",inline :true},
        ]
      }
    });
}
if(message.content == "AB Gemini" ) {

    message.channel.send({embed: {
        color: 3447003,
        title: "Afterburners obtainable in Gemini:",
        fields: [
            { name: "Name",   value: "Fusion\nEnhanced Fusion\nDual Fusion\n Gemini  \nGemini Ancient\nGemini Long\nGemini Strong", inline: true},
            { name: "Cryo",   value: "1'003\n1'14\n1'29\n2'90\n2'979", inline: true},
            { name: "Energy", value: "56\n60\n66\n66\n66\n44\n99" ,inline: true},
            { name: "Rank",   value: "23\n25\n28", inline: true},
            { name: "Planet", value: "Prosperous\nProsperous\nProsperous\nProsperous\nR5", inline: true},
            { name: "Mantis", value: "R27Interceptor\nR29~31\nR33\n27~33\nR79 DS",inline :true},
        ]
      }
    });
}
if(message.content == "AB Mizar" ) {

    message.channel.send({embed: {
        color: 3447003,
        title: "Afterburners obtainable in Mizar:",
        fields: [
            { name: "Name",   value: "Fussion Pressure\nFusion Turbo\nShkado Fusion\nFusion Force\n Mizar \nMizar Ancient\nMizar Long\nMizar Strong", inline: true},
            { name: "Cryo",   value: "1'770\n2'127\n2'512\n2'932\n5'863\n6'743", inline: true},
            { name: "Energy", value: "70\n76\n80\n86\n86\n86\n57\n129", inline: true},
            { name: "Rank",   value: "30\n33\n35\n38", inline: true},
            { name: "Planet", value: "Baumar\nBaumar\nMolikar\nMolikar\nAll planets\nR5", inline: true},
            { name: "Mantis", value: "R35~37Interceptor\nR38,39\nR40,42\nR43~44\n35~44\nR79 DS",inline :true},
        ]
      }
    });
}
if(message.content == "AB Sol" ) {

    message.channel.send({embed: {
        color: 3447003,
        title: "Afterburners obtainable in Sol:",
        fields: [
            { name: "Name",   value: "Antimatter \nAM Enhanced \nAM Power \nAM Arcjet \nAM Graviton \nAM Redshift \nAM Distortion Wave \nSol Skyrocket \nSol Ancient \nSol Ancient Long\nSol Ancient Strong", inline: true},
            { name: "Cryo",   value: "3'161\n3'370\n3'540\n4'021\n4'386\n4'875\n8'032\n16'065\n18'475\n18'475\n18'475", inline: true},
            { name: "Energy", value: "90\n96\n100\n106\n110\n116\n120\n120\n120 \n84 \n180", inline: true},
            { name: "Rank",   value: "40\n43\n45\n48\n50\n53\n55\n55\n55\n55", inline: true},
            { name: "Planet", value: "Mars\nMars\nMars\nMoon\nMoon\nEarth\nEarth\nAll planets\nR5", inline: true},
            { name: "Mantis", value: "R45Interceptor\nR48Interceptor\nR50Interceptor\nR54Interceptor\nR57 Interceptor \nR58 Interceptor \nR60 Interceptor \nR45–60 Interceptor\nR79 DS",inline :true},
        ]
      }
    });
}
if(message.content == "AB Draconis" ) {

    message.channel.send({embed: {
        color: 3447003,
        title: "Afterburners obtainable in Draconis:",
        fields: [
            { name: "Name",   value: "Zero Point\nZP Power\nZP Lunar Shift\nZP Stellar Nova \nDraconis Drifter \nDraconis Ancient \nDraconis Ancient Long \nDraconis Ancient Strong", inline: true},
            { name: "Cryo",   value: "14'996\n18'395\n29'693\n34'297\n68'594\n78'883\n78'883\n78'883", inline: true},
            { name: "Energy", value: "126\n130\n136\n140\n147\n140\n93\n210", inline: true},
            { name: "Rank",   value: "58\n60\n63\n65\n65\n65\n65\n65", inline: true},
            { name: "Planet", value: "Gazica\nGazica\nHive\nHive\nAll planets\nR5", inline: true},
            { name: "Mantis", value: "R63 Interceptor\nR66 Interceptor\nR67 Interceptor\nR70 Interceptor\nR63–70 Interceptor\nR79 DS",inline :true},
        ]
      }
    });
}
if(message.content == "Rocket Vega" ) {

    message.channel.send({embed: {
        color: 3447003,
        title: "Rockets obtainable in Vega:",
        fields: [
            { name: "Name",   value: "Standard\nEnhanced\nPower\nVega Venom\nVega Ancient\nVega Ancient Rapid\nVega Ancient Strong", inline: true},
            { name: "Cryo",   value: "120\n224\n432\n863\n993\n993\n993", inline: true},
            { name: "Energy", value: "15\n18\n23\n23\n23\n12 \n46", inline: true},
            { name: "Rank",   value: "8 \n10 \n12 \n12\n12 \n12 \n12", inline: true},
            { name: "Planet", value: "Lyris\nAurora\nAurora\nAurora\nR5", inline: true},
            { name: "Mantis", value: "R10 Eliminator, Marauder \nR11 Rocket Turret \nR13,15 Rocket Turret \nRocket Turret \nR82 Boss unit ",inline :true},
        ]
      }
    });
}
if(message.content == "Rocket Antares" ) {

    message.channel.send({embed: {
        color: 3447003,
        title: "Rockets obtainable in Antares:",
        fields: [
            { name: "Name",   value: "Molten Power \nShock \nTsunami \nSeismic Destructor \nAntares Apocalypse \nAntares Ancient \nAntares Ancient Rapid \nAntares Ancient Strong", inline: true},
            { name: "Cryo",   value: "605 \n655 \n904 \n1'148\n2'296\n2'641\n2'641\n2'641", inline: true},
            { name: "Energy", value: "27\n30\n35\n38\n38\n38\n19\n76", inline: true},
            { name: "Rank",   value: "14\n16\n18\n20\n20\n20\n20\n20", inline: true},
            { name: "Planet", value: "Terasa\nTerasa\nLustra\nLustra\nLustra\nR5", inline: true},
            { name: "Mantis", value: "Rocketeer\nRocketeer\nRocketeer\nRocketeer\nRocketeer\nR82 Boss unit",inline :true},
        ]
      }
    });
}
if(message.content == "Rocket Gemini" ) {

    message.channel.send({embed: {
        color: 3447003,
        title: "Rockets obtainable in Gemini:",
        fields: [
            { name: "Name",   value: "Fusion \nFusion Power \nFusion Shock \nGemini Giga \nGemini Ancient \nGemini Ancient Rapid \nGemini Ancient Strong", inline: true},
            { name: "Cryo",   value: "1'380\n1'506\n1'692\n3'385\n3'893\n3'893\n3'893", inline: true},
            { name: "Energy", value: "42 \n45 \n50 \n50 \n50 \n25 \n100", inline: true},
            { name: "Rank",   value: "23\n25 \n28 \n28 \n28 \n28 \n28", inline: true},
            { name: "Planet", value: "Prosperous\nCC,Prosperous\nTechnatoria\nR5", inline: true},
            { name: "Mantis", value: "Rocketeer \nR29,30 Rocketeer \nRocketeer \nRocketeer \nR82 Boss unit ",inline :true},
        ]
      }
    });
}
if(message.content == "Rocket Mizar" ) {

    message.channel.send({embed: {
        color: 3447003,
        title: "Rockets obtainable in Mizar:",
        fields: [
            { name: "Name",   value: "Fusion Ram \nFusion Rage \nFusion Apocalypse \nFusion Force \nMizar Mutilation \nMizar Ancient \nMizar Ancient Rapid \nMizar Ancient Strong", inline: true},
            { name: "Cryo",   value: "2'336 \n2'790 \n3'532 \n3'878 \n7'756\n8'919 \n8'919 \n8'919", inline: true},
            { name: "Energy", value: "53\n57 \n60 \n65 \n65 \n65 \n33 \n130", inline: true},
            { name: "Rank",   value: "30\n33\n35\n38\n38\n38\n38\n38", inline: true},
            { name: "Planet", value: "Baumar\nBaumar\nMolikar\nMolikar\nAll Planets\nR5", inline: true},
            { name: "Mantis", value: "Rocketeer \nR39 Rocketeer \nRocketeer \nRocketeer \nDS Rocketeer only \nR82 Boss unit ",inline :true},
        ]
      }
    });
}
if(message.content == "Rocket Sol" ) {

    message.channel.send({embed: {
        color: 3447003,
        title: "Rockets obtainable in Sol:",
        fields: [
            { name: "Name",   value: "Antimatter \nAM Awe \nAM Annihilation \nAM Screamer \nM Conical Force \nAM Pirate's Folly \nAM Extinctor \nSol Sanitizer \nSol Ancient \nSol Ancient Rapid \nSol Ancient Strong", inline: true},
            { name: "Cryo",   value: "4'047\n4'257\n4'409\n4'883\n5'091\n5'966\n9'217\n18'434\n21'200\n21'200\n21'200", inline: true},
            { name: "Energy", value: "68 \n72 \n75 \n80 \n83 \n87 \n90 \n90 \n90 \n45 \n180", inline: true},
            { name: "Rank",   value: "40 \n43 \n45 \n48 \n50 \n53 \n55 \n55 \n55 \n55 \n55", inline: true},
            { name: "Planet", value: "Mars\nMars\nMars\nMoon\nMoon\nEarth\nEarth\nAll Planets\nR5", inline: true},
            { name: "Mantis", value: "R45–47 Rocketeer, Rocket Turret \nR48,49 Rocketeer, Rocket Turret \nR50 Rocketeer, Rocket Turret \nR52–54 Rocketeer, Rocket Turret \nR55–57 Rocketeer, Rocket Turret \nR57,58 Rocketeer, Rocket Turret \nR59,60 Rocketeer, R60 Rocket Turret \nR45–60 Rocketeer, Rocket Turret \nR82 Boss unit ",inline :true},
        ]
      }
    });
}
if(message.content == "Rocket Draconis" ) {

    message.channel.send({embed: {
        color: 3447003,
        title: "Rockets obtainable in Draconis:",
        fields: [
            { name: "Name",   value: "Zero Point \nZP Power \nZP Helical Ray \nZP Solar Requiem \nDraconis Diabolic \nDraconis Ancient \nDraconis Ancient Rapid \nDraconis Ancient Strong", inline: true},
            { name: "Cryo",   value: "17'131\n23'814\n34'325\n41'980\n83'959\n96'553\n96'553\n96'553", inline: true},
            { name: "Energy", value: "95 \n98 \n102 \n105 \n105 \n105 \n53 \n210", inline: true},
            { name: "Rank",   value: "58\n60\n63\n65\n65\n65\n65\n65", inline: true},
            { name: "Planet", value: "Baumar\nBaumar\nMolikar\nMolikar\nAll Planets\nR5", inline: true},
            { name: "Mantis", value: "Rocketeer \nRocketeer \nRocketeer, Rocket Turret \nRocketeer, Rocket Turret \nRocketeer, Rocket Turret, Harvester \nR82 Boss unit ",inline :true},
        ]
      }
    });
}
});

client.login(process.env.TOKEN);
