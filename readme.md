# The Stairs: Short story-based experience in JS


### [GIVE IT A GO!](https://battjmo.github.io/The_Stairs/)

## SUMMARY

The Stairs is going to be a procedurally generated short interactive storytelling experience / walking simulator / #notagame for the browser. 

It is set at the end of the world. As the cataclysm unfolds, a stairway descend from the sky. Two people start climbing it.

## TECH

- As much vanilla JS as I can get away with.

- HTML5 Canvas rendering

... and that's it, so far. Part of my goal here is to see how far I can get before I run screaming to an engine.

## WHAT I'VE GOT SO FAR

- A basic procedural path generator that can draw a random path starting from a specific point on the left or top edge of the canvas and ending at one or both of the right and bottom edges. The path consists of squares, but already makes some pretty cool patterns and only breaks about 5% of the time.

- A player square that can move along the path. When they move from one end of a path to the other, they are taken to a new path that begins at the logical point for it to do so, based on where the exited the previous path.

## WHAT'S NEXT?

- Adding a second player object that will follow the first one around at a short distance.

- A procedural event system. I envision it consisting of a bunch of scripted events and a random number based assignment system. Every time a new path is generated, this system will iterate over it and randomly assign events to bits of the path that meet certain criteria. 

For example, there might be a certain character that can spawn on the path in any 2x3 square area, and will do so 40% of the time such an area is generated (once per game, of course).

- Artz

## WHAT I WOULD LOVE SOME HELP WITH

- The path generator still has quite a few squirrels under the hood. It sometimes will generate paths that leave the bounds of the level and come back to it, although not aggregiously so, despite the bounds checking I've implemented. It also breaks about 5% of the time, as mentioned above.

- The player movement functions slow down a lot sometimes, for reasons that have eluded me so far. The performance graphs seem to indicate it's a garbage collection cycle that's happening when the slowdown occurs, but I can't tell what excessive garbage is being collected.

- Artz

## Thanks for reading, cheers!

### Nick

