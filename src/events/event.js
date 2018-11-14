import level from '../levels/level';

class Event {
    // WHERE THE EVENT GENERATOR WILL LIVE

    /* How is this going to work?
    1. need to create events, check for eligible locations for them when levels spawn
    2. events triggers need to be applied to the appropriate areas randomly. diff chance for each event.
    3. event needs a mechanism to ensure it doesn't spawn twice
    4. when the player walks into the event area or interacts with the event object, it triggers, they can't move during it?
    5. how the heck do i stop them moving? go to new screen? freeze controls with a new variable, bam
    except for a button to advance the event

    What's an event have?
    variables:
    1. text
    2. music?
    3. that seems like it for now, possibly rudiemtary battling

    functions:
    1. place: places the event on the map. should that go in level?
    2. 
    
    */

    constructor(text, spaceReq) {
        this.text = text;
        // keep track of whether it happened
        this.played = false;
        this.spaceReq = spaceReq;
    }



    //END OF CLASS
}

export default Event;
