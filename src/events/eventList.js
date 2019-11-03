import Event from './event';
import Game from '../game.js';

//event objects
const Welcome = {
    name: "Welcome",
    text: [`Well Nige, looks like we've nowhere to go but up.`,
            `Yeah, it's getting pretty damn warm down here. Let's rock`
          ],
    size: [100,100],
    played: false
};

const Ending = {
    name: "Ending",
    text: [`This thing never ends, does it Nige?`,
        `WHAT THE FUCK?!`,
        `What the single fuck indeed.`,
        `*They reamin silent for a moment, starting over the edge*`,
        `So what do we do now? You got any food left?`,
        `Nah. You?`,
        `Nah`
    ],
    size: [200, 200],
    played: false
};

const Food = {
    name: "Food",
    text: [`How much food ya got left?`,
        `Lemme check. *Takes off his backpack, rummages around inside* Two power bars, one bag of Oberto,
        and most of a liter of water. You?`,
        `A bag of halloween candy, a bag of tortilla chips, and like half a two liter of coke.`,
        `Perfect fuel for walking up stairs huh?`,
        `Talking about it's not gonna make it any fucking better. Let's walk.`
    ],
    size: [100, 200],
    played: false
};

const Dance = {
    name: "Dance",
    text: [`We've nowhere to go but up.`,
        `Well, or back down.`,
        `It's quite hot down there, as you may recall.`,
        `Yeah. Let's keep going I guess.`
    ],
    size: [200, 100],
    played: false
};

//array of all events
const Events = [
    Welcome, 
    Dance,
    Food,
    Ending
];

export default Events;