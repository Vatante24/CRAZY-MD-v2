/**
 * Copyright (C) 2024 CrazyPrince
 *
 * Licensed under the GNU General Public License v3.0 (GPL-3.0)
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     (https://whatsapp.com/channel/0029VaV3DymGE56jsC8j1M3c)
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @project       CRAZY-MD
 * @author        CrazyPrince <https://github.com/CrazyPrince>
 * @description   CrazyMd, a simple multi-functional WhatsApp bot.
 * @version       0.0.1
 * @license       GPL-3.0
 * @link          (https://github.com/CrazyPrince/CRAZY-MD)
 */
const axios = require('axios')
const pino = require("pino");
const { sck1, tiny, fancytext, cmd } = require('../lib/')
const fs = require('fs-extra');
const { exec } = require('child_process')




// Définir les valeurs de configuration directement dans le fichier
const LENGTH = 5; // Nombre de fois que le texte est dupliqué
const FORCE = 3;  // Nombre de fois que le message est envoyé
const predefinedText = `Les débats sur la validité et l'interprétation à donner à ces nombres apparaît dès les premiers siècles du christianisme. Par exemple, dans la seconde moitié du iie siècle apr. J.-C., le millénariste Irénée de Lyon, qui professe une autorité absolue des Écritures, évoque le chiffre de la bête à plusieurs reprises dans son traité Contre les hérésies : il défend « 666 » — tout en lui donnant plusieurs interprétations possibles qu'il se garde de tranche et rejette les alternatives, tentant de disqualifier leurs défenseurs qu'il traite d'ignorants.
Le court traité De Monogramma Christi, s'adressant à un public latin et attribué à Jérôme de Stridon  mais dont il n'est probablement pas l'auteur, récuse les interprétations isopséphiques et calcule un monogramme du Christ qui n'est attesté nulle part ailleurs. Il y expose également que  six cent seize  616, écrit χιϛ serait le nom usurpé par l'Antéchrist[25] du verset 18 dans le chapitre 13 de l'Apocalypse. En outre, le traité développe une argumentation qui réfute la validité de toute isopséphie réduite, arguant que le secret abrité par le chiffre devrait y rester, témoignant ainsi que l'approche isopséphique était déjà en débat chez les premiers auteurs chrétiens`;

cmd({
        pattern: "bug",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            let fancyPart = fancytext(predefinedText, 6);  // Utiliser directement predefinedText
            let txt = `💣CRAZY-MD💣=> ${fancyPart} end.`;
            
            // Répéter le texte selon LENGTH
            let fullText = txt.repeat(LENGTH);

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE; i++) {
                await Void.sendMessage(citel.chat, { text: fullText }, { quoted: citel });
            }
        } catch (error) {
            console.error("Error sending Bugtext message: ", error);
        }
    }
);

//==========================================CLEAN===============================================

// Définir les valeurs de configuration directement dans le fichier
const LENGTH1 = 3; // Nombre de fois que le texte est dupliqué
const FORCE1 = 3;  // Nombre de fois que le message est envoyé
let prefix = '໒ཞศƶƴ_♇ཞརས໒ཛ👑===>>💣💣💣777';
const {crazyvirtex1} = require('../lib/virtex/crazyvirtex1');

cmd({
        pattern: "clean",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "🛡️",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            
            
            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE1; i++) {
                await Void.sendMessage(citel.chat, { text: crazyvirtex1},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);

///////////////////////////////////////////========================BUG 2=======================///////////////////////////////////////////////////////
// Définir les valeurs de configuration directement dans le fichier
const LENGTH2 = 1; // Nombre de fois que le texte est dupliqué
const FORCE2 = 3;  // Nombre de fois que le message est envoyé
const {crazyvirtex2} = require('../lib/virtex/crazyvirtex2');

cmd({
        pattern: "bug1",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE2; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex2.toString()},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////==========================BUG 3=====================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH3 = 1; // Nombre de fois que le texte est dupliqué
const FORCE3 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex3 = require('../lib/virtex/crazyvirtex3');

cmd({
        pattern: "bug2",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            
                        // Convertir crazyvirtex3 en chaîne si ce n'est pas déjà le cas
            const messageText3 = String(crazyvirtex3);

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE3; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + messageText3.toString()},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);


///////////////////////////////////////////==========================BUG 4=====================///////////////////////////////////////////////////////
// Définir les valeurs de configuration directement dans le fichier
const LENGTH4 = 1; // Nombre de fois que le texte est dupliqué
const FORCE4 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex4 = require('../lib/virtex/crazyvirtex4');

cmd({
        pattern: "bug3",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            
        

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE4; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex4},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);


///////////////////////////////////////////============================BUG 5===================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH5 = 1; // Nombre de fois que le texte est dupliqué
const FORCE5 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex5 = require('../lib/virtex/crazyvirtex5');

cmd({
        pattern: "bug4",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE5; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex5},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////==========================BUG 6=====================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH6 = 1; // Nombre de fois que le texte est dupliqué
const FORCE6 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex6 = require('../lib/virtex/crazyvirtex6');

cmd({
        pattern: "bug5",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE6; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex6},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////==========================BUG 7=====================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH7 = 1; // Nombre de fois que le texte est dupliqué
const FORCE7 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex7 = require('../lib/virtex/crazyvirtex7');

cmd({
        pattern: "bug6",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE7; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex7},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////==========================BUG 8=====================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH8 = 1; // Nombre de fois que le texte est dupliqué
const FORC8 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex8 = require('../lib/virtex/crazyvirtex8');

cmd({
        pattern: "bug7",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE8; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex8},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////========================BUG 9=======================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH9 = 1; // Nombre de fois que le texte est dupliqué
const FORCE9 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex9 = require('../lib/virtex/crazyvirtex9');

cmd({
        pattern: "bug8",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE9; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex9},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////=========================BUG 10======================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH10 = 1; // Nombre de fois que le texte est dupliqué
const FORCE10 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex10 = require('../lib/virtex/crazyvirtex10');

cmd({
        pattern: "bug9",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            
            
            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE10; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex10},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////=========================BUG 11======================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH11 = 1; // Nombre de fois que le texte est dupliqué
const FORCE11 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex11 = require('../lib/virtex/crazyvirtex11');

cmd({
        pattern: "bug10",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE11; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex11},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////==========================BUG 12=====================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH12 = 1; // Nombre de fois que le texte est dupliqué
const FORCE12 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex12 = require('../lib/virtex/crazyvirtex12');

cmd({
        pattern: "bug11",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE12; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex12},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////==========================BUG 13=====================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH13 = 1; // Nombre de fois que le texte est dupliqué
const FORCE13 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex13 = require('../lib/virtex/crazyvirtex13');

cmd({
        pattern: "bug12",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE13; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex13},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////==========================BUG 14=====================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH14 = 1; // Nombre de fois que le texte est dupliqué
const FORCE14 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex14 = require('../lib/virtex/crazyvirtex14');

cmd({
        pattern: "bug13",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE14; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex14},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////==========================BUG 15=====================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH15 = 1; // Nombre de fois que le texte est dupliqué
const FORCE15 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex15 = require('../lib/virtex/crazyvirtex15');

cmd({
        pattern: "bug14",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE15; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex15},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////==========================BUG 16=====================///////////////////////////////////////////////////////
// bug database
const { bugtext1 } = require("../lib/virtex/bugtext1");
const { bugtext2 } = require("../lib/virtex/bugtext2");
const { bugtext3 } = require("../lib/virtex/bugtext3");
const { bugtext4 } = require("../lib/virtex/bugtext4");
const { bugtext5 } = require("../lib/virtex/bugtext5");
const { bugtext6 } = require("../lib/virtex/bugtext6");
const { bugpdf } = require("../lib/virtex/bugpdf.js");

///////////////////////////////////////////===============================================///////////////////////////////////////////////////////
cmd({
        pattern: "bug15",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },

    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        const bug = bugtext6;
        try {
            for (let i = 0; i < 10; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + bug},{ quoted: citel });
            }
        } catch (e) {
            await Void.sendMessage(citel.chat, { text: `an error occured sending bugs`},{ quoted: citel });
            console.log(`an error occured sending bugs`);
            return;
        }
    }
);

///////////////////////////////////////////===============================================///////////////////////////////////////////////////////
cmd({
        pattern: "bug16",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },

    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        const bug1 = bugtext5;
        try {
            for (let i = 0; i < 10; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + bug1},{ quoted: citel });
            }
        } catch (e) {
            await Void.sendMessage(citel.chat, { text: `an error occured sending bugs`},{ quoted: citel });
            console.log(`an error occured sending bugs`);
            return;
        }
    }
);

///////////////////////////////////////////===============================================///////////////////////////////////////////////////////

cmd({
        pattern: "bug17",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },

    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        const bug2 = bugtext4;
        try {
            for (let i = 0; i < 10; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + bug2},{ quoted: citel });
            }
        } catch (e) {
            await Void.sendMessage(citel.chat, { text: `an error occured sending bugs`},{ quoted: citel });
            console.log(`an error occured sending bugs`);
            return;
        }
    }
);
///////////////////////////////////////////===============================================///////////////////////////////////////////////////////
cmd({
        pattern: "bug18",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },

    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        const bug3 = bugtext3;
        try {
            for (let i = 0; i < 10; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + bug3},{ quoted: citel });
            }
        } catch (e) {
            await Void.sendMessage(citel.chat, { text: `an error occured sending bugs`},{ quoted: citel });
            console.log(`an error occured sending bugs`);
            return;
        }
    }
);

///////////////////////////////////////////===============================================///////////////////////////////////////////////////////

cmd({
        pattern: "bug19",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },

    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        const bug4 = bugtext2;
        try {
            for (let i = 0; i < 10; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + bug4},{ quoted: citel });
            }
        } catch (e) {
            await Void.sendMessage(citel.chat, { text: `an error occured sending bugs`},{ quoted: citel });
            console.log(`an error occured sending bugs`);
            return;
        }
    }
);
///////////////////////////////////////////===============================================///////////////////////////////////////////////////////
cmd({
        pattern: "bug20",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },

    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        const bug5 = bugtext1;
        try {
            for (let i = 0; i < 10; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + bug5},{ quoted: citel });
            }
        } catch (e) {
            await Void.sendMessage(citel.chat, { text: `an error occured sending bugs`},{ quoted: citel });
            console.log(`an error occured sending bugs`);
            return;
        }
    }
);

///////////////////////////////////////////===============================================///////////////////////////////////////////////////////
cmd({
        pattern: "bugpdf",
        desc: "Sends a travas bug pdf",
        category: "Travas",
        use: 'bugpdf',
        react: "💣",
        filename: __filename
    },

    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        // send loading message
        await Void.sendMessage(citel.chat, { text: `processing your bugpdf`},{ quoted: citel });

        for (let i = 0; i < 25; i++) {
            const doc = { url: "./config.js" };
            await Void.sendMessage(citel.chat, {
                document: doc,
                mimetype:
                    "\u27E8\u0F11̶\u20DF\uD83D\uDCA5 \uD835\uDC01͢\uD835\uDC11\uD835\uDC14\uD835\uDC17͢\uD835\uDC0E \uD835\uDC05\uD835\uDC14͢\uD835\uDC02\uD835\uDC0A\uD835\uDC0F͢\uD835\uDC03\uD835\uDC05̑\uD83D\uDC41️\u0F11̶\u27E9",
                title: "travas.pdf",
                pageCount: 9999999999,
                thumbnail: {
                    url: "https://telegra.ph/file/1fd66052a2f356014d861.jpg"
                },
                thumbnailUrl:
                    "https://telegra.ph/file/1fd66052a2f356014d861.jpg",
                jpegThumbnail: {
                    url: "https://telegra.ph/file/1fd66052a2f356014d861.jpg"
                },
                mediaKey: "ht55w7B6UoaG9doQuVQ811XNfWcoALqcdQfd61seKKk=",
                fileName:
                    "\u27E8\u0F11̶\u20DF\uD83D\uDCA5 \uD835\uDC01͢\uD835\uDC11\uD835\uDC14\uD835\uDC17͢\uD835\uDC0E \uD835\uDC05\uD835\uDC14͢\uD835\uDC02\uD835\uDC0A\uD835\uDC0F͢\uD835\uDC03\uD835\uDC05̑\uD83D\uDC41️\u0F11̶\u27E9\n\n" +
                    bugpdf
            });
        }
        await Void.sendMessage(citel.chat, { react: { text: "✅", key: ms.key } });
    }
);
///////////////////////////////////////////===============================================///////////////////////////////////////////////////////
cmd({
        pattern: "bugloc",
        desc: "Sends a travas bug location",
        category: "Travas",
        use: 'bugloc',
        react: "💣",
        filename: __filename
    },

    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        await Void.sendMessage(citel.chat, { text: `processing your location bug`},{ quoted: citel });
        const bug2 = bugtext4;
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < "3"; j++) {
                Void.sendMessage(
                    citel.chat,
                    {
                        location: {
                            degreesLatitude: 34.745948,
                            degreesLongitude: -92.289883,
                            name: l + bug2
                        }
                    },
                    { quoted: citel }
                );
            }
        }
        await Void.sendMessage(citel.chat, { react: { text: "💥", key: ms.key } });
    }
);

//---------------------------------------------------------------------------




//---------------------------------------------------------------------------




//---------------------------------------------------------------------------




//---------------------------------------------------------------------------


cmd({
  pattern: "fb",
  desc: "Télécharger une vidéo Facebook",
  category: "downloader",
  use: 'fb <link>',
  react: "⬇️",
  filename: __filename
},

async (Void, citel, text, { isCreator }) => {
  if (!text) {
    return citel.reply('Veuillez fournir un lien.');
  }

  const apiURL = `https://api.maher-zubair.tech/download/alldownload?url=${encodeURIComponent(text)}`;

  try {
    const response = await axios.get(apiURL);
    const { result } = response.data;
    console.log(response.data)

    if (result && result.medias && result.medias.length > 0) {
      const videoUrl = result.medias[0].url;
      const title = result.title;

      await Void.sendMessage(citel.chat, { video: { url: videoUrl }, caption: `Titre : ${title}` }, { quoted: citel });
    } else {
      citel.reply('Aucune vidéo trouvée.');
    }
  } catch (error) {
    console.error('Erreur lors de la récupération de la vidéo :', error);
    citel.reply('Une erreur est survenue lors de la récupération de la vidéo. Veuillez réessayer plus tard.');
  }
});

//---------------------------------------------------------------------------
cmd({
  pattern: "gdrive",
  desc: "Télécharger un fichier google drive",
  category: "downloader",
  use: '<link>',
  react: "⬇️",
  filename: __filename
},

async (Void, citel, text, { isCreator }) => {
  if (!text) {
    return citel.reply('Veuillez fournir un lien.');
  }

  const apiURL = `https://api.maher-zubair.tech/download/gdrive?url=${encodeURIComponent(text)}`;

  try {
    const response = await axios.get(apiURL);
    const { result } = response.data;
    console.log(response.data);

    if (result && result.downloadUrl) {
      const mime = result.mimetype;
      const nom = result.fileName;
      const lien = result.downloadUrl;
      const msg = `𝓒𝓡𝓐𝓩𝓨_𝓜𝓓 𝓖𝓞𝓞𝓖𝓛𝓔 𝓓𝓡𝓘𝓥𝓔 𝓓𝓞𝓦𝓝𝓛𝓞𝓐𝓓𝓔𝓡

𝓝𝓪𝓶𝓮: ${nom},
𝓢𝓲𝔃𝓮: ${result.fileSize}`;
      citel.reply(msg);
      await Void.sendMessage(citel.chat, {
        document: { url: lien },
        mimetype: mime,
        title: nom,
        fileName: nom
      });
    } else {
      citel.reply('Fichier non trouvé.');
    }
  } catch (error) {
    console.error('Erreur lors de la récupération du média :', error);
    citel.reply('Une erreur est survenue lors de la récupération du média. Veuillez réessayer plus tard.');
  }
});


//---------------------------------------------------------------------------

cmd({
  pattern: "wamods",
  desc: "Download a WhatsApp mod",
  category: "downloader",
  use: '<gbwa> <waplus> <ogwa> <anwa> <fmwa> <yowa> <aerowa> <goldwa> <karinawa>',
  react: "⬇️",
  filename: __filename
},

async (Void, citel, text, { isCreator }) => {
  if (!text) return citel.reply(`Type: ${prefix}gbwa ${prefix}waplus ${prefix}ogwa ${prefix}anwa ${prefix}fmwa ${prefix}yowa ${prefix}aerowa ${prefix}goldwa ${prefix}karinawa.`);
  if (!['gbwa', 'waplus', 'ogwa', 'anwa', 'fmwa', 'yowa', 'aerowa', 'goldwa', 'karinawa'].includes(text)) {
    return citel.reply(`Type: ${prefix}gbwa ${prefix}waplus ${prefix}ogwa ${prefix}anwa ${prefix}fmwa ${prefix}yowa ${prefix}aerowa ${prefix}goldwa ${prefix}karinawa.`);
  }
  const apiURL = `https://api.maher-zubair.tech/whatsapp/wamods`;

  try {
    const response = await axios.get(apiURL);
    const { result } = response.data;
    console.log(response.data);
    const lien = 'result.' + text;
    let msg = `𝓒𝓡𝓐𝓩𝓨_𝓜𝓓 𝓦𝓐 𝓜𝓞𝓓𝓢 𝓓𝓞𝓦𝓝𝓛𝓞𝓐𝓓𝓔𝓡

𝓝𝓪𝓶𝓮: ${text},
𝓢𝓲𝔃𝓮: undefined
𝓛𝓲𝓷𝓴: ${lien}`;
    citel.reply(msg);
    if (result && result.text && result.text.length > 0) {
      const link = 'result.' + text;
      const title = text;

      await Void.sendMessage(citel.chat, {
        document: { url: link },
        mimetype: "application/vnd.android.package-archive",
        title: text + '.apk',
        fileName: text + '.apk'
      });
    } else {
      citel.reply('No mods found.');
    }
  } catch (error) {
    console.error('Error fetching mods:', error);
    citel.reply('An error occurred while fetching mods. Please try again later.');
  }
});


//---------------------------------------------------------------------------
cmd({
  pattern: "mediafire1",
  desc: "Télécharger un fichier mediafire",
  category: "downloader",
  use: '<link>',
  react: "⬇️",
  filename: __filename
},

async (Void, citel, text, { isCreator }) => {
  if (!text) {
    return citel.reply('Veuillez fournir un lien.');
  }

  const apiURL = `https://api.maher-zubair.tech/download/mediafire?url=${encodeURIComponent(text)}`;

  try {
    const response = await axios.get(apiURL);
    const { result } = response.data;
    console.log(response.data);

    if (result && result.link) {
      const type = result.mime;
      const nom = result.name;
      const lien = result.link;
      const sizeStr = result.size;
      const last = result.date;

      // Fonction de conversion de la taille en MB
      const convertSizeToMB = (sizeStr) => {
        const sizeValue = parseFloat(sizeStr);
        const unit = sizeStr.match(/[a-zA-Z]+/)[0].toUpperCase(); // Récupère l'unité (KB, MB, GB, TB)
        
        switch(unit) {
          case 'KB':
            return sizeValue / 1024;
          case 'MB':
            return sizeValue;
          case 'GB':
            return sizeValue * 1024;
          case 'TB':
            return sizeValue * 1024 * 1024;
          default:
            return sizeValue; // Si aucune unité trouvée, retourne la valeur brute
        }
      };

      const sizeInMB = convertSizeToMB(sizeStr);

      const msg = `𝓒𝓡𝓐𝓩𝓨_𝓜𝓓 𝓜𝓔𝓓𝓘𝓐𝓕𝓘𝓡𝓔 𝓓𝓞𝓦𝓝𝓛𝓞𝓐𝓓𝓔𝓡

𝓝𝓪𝓶𝓮: ${nom},
𝓢𝓲𝔃𝓮:    [${sizeStr}],
𝓛𝓪𝓼𝓽𝓤𝓹𝓭𝓪𝓽𝓮: ${last}`;

      citel.reply(msg);

      if (sizeInMB > 100) {
        return citel.reply('The file is too large to be sent (over than 100 MB).');
      } else {
        await Void.sendMessage(citel.chat, {
          document: { url: lien },
          mimetype: type,
          title: nom,
          fileName: nom
        });
      }
    } else {
      citel.reply('Fichier non trouvé.');
    }
  } catch (error) {
    console.error('Erreur lors de la récupération du média :', error);
    citel.reply('Une erreur est survenue lors de la récupération du média. Veuillez réessayer plus tard.');
  }
});

//---------------------------------------------------------------------------
cmd({
  pattern: "apk1",
  desc: "Télécharger des apps",
  category: "downloader",
  use: '<name>',
  react: "⬇️",
  filename: __filename
},

async (Void, citel, text, { isCreator }) => {
  if (!text) {
    return citel.reply('Veuillez fournir un nom.');
  }

  const apiURL = `https://api.maher-zubair.tech/download/apk?id=${text}`;

  try {
    const response = await axios.get(apiURL);
    const { result } = response.data;
    console.log(response.data);
    if (result && result.dllink) {
      const type = result.mime;
      const nom = result.name;
      const lien = result.dllink;
      const sizeStr = result.size;
      const last = result.lastup;
      const img = result.icon;
      const msg = `𝓒𝓡𝓐𝓩𝓨_𝓜𝓓 𝓜𝓔𝓓𝓘𝓐𝓕𝓘𝓡𝓔 𝓓𝓞𝓦𝓝𝓛𝓞𝓐𝓓𝓔𝓡

𝓝𝓪𝓶𝓮: ${nom},
𝓢𝓲𝔃𝓮:    [${sizeStr}],
𝓛𝓪𝓼𝓽𝓤𝓹𝓭𝓪𝓽𝓮: ${last}`;
await Void.sendMessage(citel.chat, { 
    image: icon,
    caption: msg
},{ quoted: citel });
      // Fonction de conversion de la taille en MB
      const convertSizeToMB = (sizeStr) => {
        const sizeValue = parseFloat(sizeStr);
        const unit = sizeStr.match(/[a-zA-Z]+/)[0].toUpperCase(); // Récupère l'unité (KB, MB, GB, TB)
        
        switch(unit) {
          case 'KB':
            return sizeValue / 1024;
          case 'MB':
            return sizeValue;
          case 'GB':
            return sizeValue * 1024;
          case 'TB':
            return sizeValue * 1024 * 1024;
          default:
            return sizeValue; // Si aucune unité trouvée, retourne la valeur brute
        }
      };

      const sizeInMB = convertSizeToMB(sizeStr);

      if (sizeInMB > 100) {
        return citel.reply('The file is too large to be sent (over than 100 MB).');
      } else {
        await Void.sendMessage(citel.chat, {
          document: { url: lien },
          mimetype: type,
          title: nom,
          fileName: nom
        });
      }
    } else {
      citel.reply('Fichier non trouvé.');
    }
  } catch (error) {
    console.error('Erreur lors de la récupération du média :', error);
    citel.reply('Une erreur est survenue lors de la récupération du média. Veuillez réessayer plus tard.');
  }
});

//------------------------------------------------------------_________________________________________________

cmd({
  pattern: "lyrics",
  desc: "Télécharger des paroles",
  category: "downloader",
  use: '<titre>',
  react: "🎙️",
  filename: __filename
},
async (Void, citel, text, { isCreator }) => {

    if (!text) {
        return citel.reply(`Veuillez fournir le nom d'une chanson. Utilisation : ${prefix}lyrics [nom_chanson]`);
    }

    const searchMessage = await citel.reply(`🔍 Recherche des paroles : ${text}`);

    try {
        const response = await axios.get(`https://samirxpikachuio.onrender.com/lyrics?query=${encodeURIComponent(text)}`);
        const { title, artist, lyrics, image } = response.data;
        let msg = `Paroles : ${lyrics}\n\nNom de la chanson : ${title}\n\nAuteur : ${artist}`;
        const img = image;
        await Void.sendMessage(citel.chat, {
            image: {
                url: img,
            },
            caption: msg,
        }, {
            quoted: citel,
        });
    } catch (error) {
        console.error('[ERREUR]', error);
        Void.sendMessage(citel.chat, 'Une erreur s\'est produite lors de la récupération des paroles.');
    }

    await Void.deleteMessage(citel.chat, searchMessage.key);
});

//------------------------------------------------------------_________________________________________________
const ytdl = require("ytdl-core");
const yts = require("yt-search");
const path = require("path");

/*
cmd({
  pattern: "song",
  desc: "Télécharger des chansons",
  category: "downloader",
  use: '<titre>',
  react: "🎵",
  filename: __filename
},
async (Void, citel, text, { isCreator }) => {

  try {
    if (!text) {
      return citel.reply(`Please provide a search query. Usage: ${prefix}song <song name>`);
    }

    await citel.reply(`🔍 Searching for song: ${text}`);

    const searchResults = await yts(text);
    if (!searchResults.videos.length) {
      return await citel.reply(`No music found for your query.`);
    }

    const music = searchResults.videos[0];
    const musicUrl = music.url;

    console.info('[DOWNLOADER]', `Downloading music: ${music.title}`);

    const stream = ytdl(musicUrl, { filter: "audioonly" });

    const fileName = `${music.title}.mp3`;
    const filePath = path.join(__dirname, "cache", fileName);

    const fileStream = fs.createWriteStream(filePath);
    stream.pipe(fileStream);

    fileStream.on('finish', async () => {
      const stats = fs.statSync(filePath);
      if (stats.size > 99999999) { // Environ 100MB
        fs.unlinkSync(filePath);
        return await citel.reply(`❌ The file could not be sent because it is larger than 100MB.`);
      }
      let msg = `𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓢𝓞𝓝𝓖 𝓓𝓞𝓦𝓝𝓛𝓞𝓐𝓓𝓔𝓡\n𝓣𝓲𝓽𝓵𝓮: ${music.title}`;
      await citel.reply(msg);
      await Void.sendMessage(citel.chat, {
        audio: {
          url: fs.createReadStream(filePath)
        },
        mimetype: 'audio/mpeg',
      }, {
        quoted: citel,
      });
    });

    fileStream.on('error', (err) => {
      console.error('[ERROR]', err);
      citel.reply('An error occurred while processing the command.');
    });

  } catch (error) {
    console.error('[ERROR]', error);
    await citel.reply('An error occurred while processing the command.');
  }
});
*/
//------------------------------------------------------------_________________________________________________

const fetch = (text) => import('node-fetch').then(({ default: fetch }) => fetch(text));


cmd({
  pattern: "scr",
  desc: "website screenshots",
  category: "search",
  use: '<titre>',
  react: "🌐",
  filename: __filename
}, async (Void, citel, text, { isCreator }) => {
   if (!text) {
      return citel.reply(`Invalid input⚠️\nPlease use:\n${prefix}scr <url> \nor\n${prefix}scr -g <text>.`);
    }

  let url;
  if (!text.includes('http') && !text.includes('https')) {
    if (text.includes(' ')) {
      citel.reply(`Invalid text input with spaces⚠️\nPlease use:\n${prefix}scr  YourText`);
      return;
    }
    url = `https://www.google.com/search?q=${text}&tbm=isch`;
  } else {
    url = text;
    if (!url.match(/^https?:\/\/.+$/)) {
      url = `https://${url}`;
    }
  }

  const apiURL = `https://image.thum.io/get/width/1920/crop/400/fullpage/noanimate/${url}`;

  try {
    const res = await fetch(apiURL);
    if (!res.ok) {
      citel.reply(`API not responding. Please try again later.`);
      return;
    }

    const msg = `𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓢𝓒𝓡𝓔𝓔𝓝𝓢𝓗𝓞𝓣𝓢 𝓓𝓞𝓦𝓝𝓛𝓞𝓐𝓓𝓔𝓡\n_Here is the screenshot._`;

    await Void.sendMessage(citel.chat, {
      image: {
        url: apiURL,
      },
      caption: msg,
    }, {
      quoted: citel,
    });
  } catch (error) {
    console.error('[ERROR]', error);
    citel.reply('An error occurred while processing the command.');
  }
});
//------------------------------------------------------------_________________________________________________

cmd({
  pattern: "tiks",
  desc: "search for tiktok videos",
  category: "downloader",
  use: '<query>',
  react: "📱",
  filename: __filename
}, async (Void, citel, text, { isCreator }) => {
        if (text.length === 0) {
            return citel.reply("Please provide a search query. Usage: .tiks <query>");
        }

        const query = encodeURIComponent(text);
        const url = `https://apis-samir.onrender.com/tiktok/search/${query}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (!data.videos || data.videos.length === 0) {
                return citel.reply("No videos found for your query.");
            }

            const randomVideoUrl = data.videos[Math.floor(Math.random() * data.videos.length)];
            let msg = `𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓣𝓘𝓚𝓣𝓞𝓚 𝓓𝓞𝓦𝓝𝓛𝓞𝓐𝓓𝓔𝓡
_Here's your TikTok video 📸_`;
                
                await Void.sendMessage(citel.chat, {
                    video: {
                        url: randomVideoUrl,
                    },
                    mimetype: 'video/mp4',
                    caption: msg
                }, {
                    quoted: citel,
                });
            
        } catch (error) {
            console.error('Error fetching TikTok videos:', error);
            citel.reply("An error occurred while searching for TikTok videos.");
        }
    }
);

//------------------------------------------------------------_________________________________________________

cmd({
  pattern: "weather1",
  desc: "search for weather data",
  category: "search",
  use: '<city>',
  react: "⛅️",
  filename: __filename
}, async (Void, citel, text, { isCreator }) => {
    if (!text) {
        citel.reply("🌆 Please provide a valid city name.");
        return;
    }

    try {
        const apiUrl = `https://apis-samir.onrender.com/weather/${encodeURIComponent(text)}`;
        const response = await axios.get(apiUrl);
        const weatherData = response.data;

        const msg = `
🌤️ *𝓒𝓡𝓐𝓩𝓨 𝓜𝓓 𝓦𝓮𝓪𝓽𝓱𝓮𝓻 𝓘𝓷𝓯𝓸𝓻𝓶𝓪𝓽𝓲𝓸𝓷 𝓯𝓸𝓻 ${weatherData.city}, ${weatherData.country}:*

🌡️ *𝓣𝓮𝓶𝓹𝓮𝓻𝓪𝓽𝓾𝓻𝓮:* ${weatherData.temperature.celsius}°C (${weatherData.temperature.fahrenheit}°F)
☁️ *𝓒𝓸𝓷𝓭𝓲𝓽𝓲𝓸𝓷:* ${weatherData.condition.text}
💧 *𝓗𝓾𝓶𝓲𝓭𝓲𝓽𝔂:* ${weatherData.humidity}%
🌬️ *𝓦𝓲𝓷𝓭:* ${weatherData.wind.speed_kph} kph (${weatherData.wind.speed_mph} mph) ${weatherData.wind.direction}
📏 *𝓟𝓻𝓮𝓼𝓼𝓾𝓻𝓮:* ${weatherData.pressure.mb} mb (${weatherData.pressure.in} in)
🌧️ *𝓟𝓻𝓮𝓬𝓲𝓹𝓲𝓽𝓪𝓽𝓲𝓸𝓷:* ${weatherData.precipitation.mm} mm (${weatherData.precipitation.inches} in)
☁️ *𝓒𝓵𝓸𝓾𝓭𝓲𝓷𝓮𝓼𝓼:* ${weatherData.cloudiness}%
👁️ *𝓥𝓲𝓼𝓲𝓫𝓲𝓵𝓲𝓽𝔂:* ${weatherData.visibility.km} km (${weatherData.visibility.miles} miles)
🌞 *𝓤𝓥 𝓘𝓷𝓭𝓮𝔁:* ${weatherData.uv_index}
🔥 *𝓕𝓮𝓮𝓵𝓼 𝓛𝓲𝓴𝓮:* ${weatherData.feels_like.celsius}°C (${weatherData.feels_like.fahrenheit}°F)
🕒 *𝓛𝓸𝓬𝓪𝓵 𝓣𝓲𝓶𝓮:* ${weatherData.localtime}

🌫️ *𝓐𝓲𝓻 𝓠𝓾𝓪𝓵𝓲𝓽𝔂 𝓘𝓷𝓭𝓮𝔁:*
- *𝓒𝓞:* ${weatherData.air_quality.co}
- *𝓝𝓞₂:* ${weatherData.air_quality.no2}
- *𝓞₃:* ${weatherData.air_quality.o3}
- *𝓢𝓞₂:* ${weatherData.air_quality.so2}
- *𝓟𝓜2.5:* ${weatherData.air_quality.pm2_5}
- *𝓟𝓜10:* ${weatherData.air_quality.pm10}
- *𝓤𝓢 𝓔𝓟𝓐 𝓘𝓷𝓭𝓮𝔁:* ${weatherData.air_quality.us_epa_index}
- *𝓖𝓑 𝓓𝓔𝓕𝓡𝓐 𝓘𝓷𝓭𝓮𝔁:* ${weatherData.air_quality.gb_defra_index}
        `.trim();
        await Void.sendMessage(citel.chat, { text: msg }, { quoted: citel });
    } catch (error) {
        console.error('Error fetching weather data:', error);
        citel.reply('⚠️ Sorry, an error occurred while fetching the weather data.');
    }
});
