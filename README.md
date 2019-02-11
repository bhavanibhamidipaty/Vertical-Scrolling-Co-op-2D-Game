# Vertical-Scrolling-Co-op-2D-Game
Fight through waves of enemies through a vertical map with a friend. Strategize your play based on your heroes' abilities and how they work together.


[comment]: <> (This is a comment, it will not be included)

## 2 Players : Archer Elf and Gladiator Elf
Archer can perform ranged attacks by shooting arrows. Gladiator can perform melee attacks using the spear and can protect self using shield from ranged attacks. 
Players have 2 resource bars: HP and SP. HP drains on being hit by arrows or melee attacks. SP varies for both players. 
* For archer, SP is quiver content. When it is empty, archer cannot shoot arrows. 
* For gladiator, SP is shield strength. If shield is facing in direction of arrow, HP will not drain, instead SP will be lost.</br>
![Gif1](https://github.com/bhavanibhamidipaty/Vertical-Scrolling-Co-op-2D-Game/blob/master/Proj1.gif)
![Gif2](https://github.com/bhavanibhamidipaty/Vertical-Scrolling-Co-op-2D-Game/blob/master/Proj2.gif)

## 2 Enemy types : Muscle Men and the Undead
The Undead have archer abilities and Muscle Men can perform melee attacks. Both enemies AIs are simple pathfinder algorithms. It considers all possible paths that can bring it closer to the player sprite and chooses one randomly. At the start of the game, AI is turned off and enemies are frozen in place. F1 can be used to start enemy movement. This is a purely debugging feature currently.</br>
![Gif4](https://github.com/bhavanibhamidipaty/Vertical-Scrolling-Co-op-2D-Game/blob/master/Proj4.gif)

## PowerUps : First-Aid and Gems
First-Aid are used to recharge HP to 100% and Gems to recharge SP. Either can only be picked up if player resource is less than 100%.</br>
![Gif3](https://github.com/bhavanibhamidipaty/Vertical-Scrolling-Co-op-2D-Game/blob/master/Proj3.gif)
