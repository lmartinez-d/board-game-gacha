function firstRoll (num: number) {
    // sets the parameter to what the user wishes for the dice to roll
    diceRoll = game.askForNumber("pick a number between 0 and 10", 2)
    randomNum = randint(0, 4)
    outcomes.setImage(outcomeImages[randomNum])
    // what the user inputs as a number will result on where the movingPiece should go to
    if (diceRoll == 1) {
        tiles.placeOnRandomTile(outcomes, tilePlacements[0])
    } else if (diceRoll == 2) {
        tiles.placeOnRandomTile(outcomes, tilePlacements[1])
    } else if (diceRoll == 3) {
        tiles.placeOnRandomTile(outcomes, tilePlacements[2])
    } else if (diceRoll == 4) {
        tiles.placeOnRandomTile(outcomes, tilePlacements[3])
    } else if (diceRoll == 5) {
        tiles.placeOnRandomTile(outcomes, tilePlacements[4])
    } else if (diceRoll == 6) {
        tiles.placeOnRandomTile(outcomes, tilePlacements[5])
    } else if (diceRoll == 7) {
        tiles.placeOnRandomTile(outcomes, tilePlacements[6])
    } else if (diceRoll == 8) {
        tiles.placeOnRandomTile(outcomes, tilePlacements[7])
    } else if (diceRoll == 9) {
        tiles.placeOnRandomTile(outcomes, tilePlacements[8])
    } else if (diceRoll == 10) {
        tiles.placeOnRandomTile(outcomes, tilePlacements[9])
    } else {
        game.splash("Over limit! Try again!")
        outcomes.destroy()
        game.reset()
    }
    addPlacements()
}
// adding at the end of the list so the number of rolls can be played more than twice
function addPlacements () {
    tilePlacements.push(assets.tile`myTile0`)
    tilePlacements.push(assets.tile`myTile15`)
    tilePlacements.push(assets.tile`myTile9`)
    tilePlacements.push(assets.tile`myTile16`)
    tilePlacements.push(assets.tile`myTile6`)
    tilePlacements.push(assets.tile`myTile5`)
    tilePlacements.push(assets.tile`myTile12`)
    tilePlacements.push(assets.tile`myTile13`)
    tilePlacements.push(assets.tile`myTile14`)
    tilePlacements.push(assets.tile`myTile8`)
}
// this function runs the lose screen code
function gameOver () {
    // once strikes get to 3, the user will lose
    if (strikes >= 3) {
        game.over(false, effects.splatter)
        game.reset()
    }
}
// this function will give a point or strike if the sprite overlaps with outcomes at a given number
function giveReward () {
    // only runs the code if the sprite overlaps with outcomes
    if (movingPiece.overlapsWith(outcomes)) {
        // what the random number lands on will determine whether the player gets a point or gets a strike
        if (randomNum == 0) {
            strikes += 1
        } else if (randomNum == 1) {
            info.changeScoreBy(1)
        } else if (randomNum == 2) {
            strikes += 2
        } else {
            info.changeScoreBy(2)
        }
    }
    // after the if statement there will be a text showing what their current score or strike is
    game.splash("score:" + info.score())
    game.splash("strikes:" + strikes)
}
// this procedure runs the win screen code
function WinScreen () {
    // once the score geto three, the loser will win
    if (info.score() >= 3) {
        game.over(true, effects.confetti)
    }
}
// procedure for the rolls after the first one
function afterFirstRoll (num: number) {
    rollsAfter = game.askForNumber("pick a number between 0 and 10", 2)
    // resets randomNum into 0 which then changes to random from 0 to 4
    randomNum = 0
    randomNum = randint(0, 4)
    // uses randomNum to know what outcome image the player will get
    outcomes.setImage(outcomeImages[randomNum])
    // if statement for what dice number the player inputs. the player can only choose numbers between 0 and 10. no less no more
    if (rollsAfter > 0 && rollsAfter <= 10) {
        tiles.placeOnRandomTile(outcomes, tilePlacements[rollsAfter + (diceRoll - 1)])
    } else {
        game.splash("Over Limit! Try Again!")
        game.reset()
    }
    // necessary so the third roll and forth wont add up to what the first roll was. it continuously changes as the user plays.
    diceRoll += rollsAfter
    addPlacements()
}
let randomNum = 0
let rollsAfter = 0
let diceRoll = 0
let strikes = 0
let movingPiece: Sprite = null
let tilePlacements: Image[] = []
let outcomeImages: Image[] = []
let outcomes: Sprite = null
// The layout for the game board
tiles.setTilemap(tilemap`level1`)
// converts outcomes into sprites
outcomes = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
outcomes.setImage(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
// array of the images outcomes contains. They are the result of what the dice landed on.
outcomeImages = [
img`
    d d d d d d d d d d d d d d d d 
    d d d f f f f f f f f f f d d d 
    d d f 1 1 1 1 1 1 1 1 1 1 f d d 
    d f 1 1 1 1 1 1 1 1 1 1 1 1 f d 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 b b b c 1 1 1 1 b b b c 1 f 
    f 1 b b b f 1 1 1 1 b b b f 1 f 
    f 1 b b b f 1 1 1 1 b b b f 1 f 
    f 1 c c f f 1 f f 1 c c f f 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 5 1 5 1 5 1 5 1 5 1 1 f 
    d f 1 f f f f f f f f f f 1 f d 
    d f 1 1 5 1 5 1 5 1 5 1 5 1 f d 
    d f 1 1 1 1 1 1 1 1 1 1 1 1 f d 
    d f 1 1 1 1 1 1 1 1 1 1 1 1 f d 
    d f f f f f f f f f f f f f f d 
    `,
img`
    1 1 1 1 1 1 f 5 5 5 5 5 f 1 1 1 
    f f f f f 1 f 5 5 5 5 5 f 1 1 1 
    5 5 5 5 5 f f 5 5 5 5 5 f 1 f f 
    5 5 5 5 5 f 1 f f f f f 1 f 5 5 
    5 5 5 5 5 f f 5 5 5 5 f 1 f 5 5 
    5 5 5 5 5 f f f f 5 5 f f f f 5 
    5 5 5 5 5 f 5 5 5 f f 5 5 5 5 f 
    f f f f f 5 5 5 5 f 5 5 5 5 5 5 
    1 f f f f f 5 5 5 f 5 5 5 5 5 5 
    f 5 5 5 5 5 f 5 5 f 5 5 5 5 5 5 
    f 5 5 5 5 5 f f f 1 f 5 5 5 5 f 
    f 5 5 5 5 5 f 1 1 1 1 f f f f 1 
    f 5 5 5 5 5 f f f f 1 1 1 f f f 
    f 5 5 5 5 5 f 5 5 5 f 1 f 5 5 5 
    1 f f f f f 5 5 5 5 f 1 f 5 5 5 
    1 1 1 1 1 f 5 5 5 5 f 1 f 5 5 5 
    `,
img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    b b b b b b b b b b b b b b b 1 
    1 b f f b f f b f f b f f b 1 1 
    1 b f f b f f b f f b f f b 1 1 
    1 b f f b f f b f f b f f b 1 1 
    b b b b b b b b b b b b b b b 1 
    1 b f f b f f b f f b f f b 1 1 
    1 b f f b f f b f f b f f b 1 1 
    1 b f b b b f b f f b f f b 1 1 
    1 b f 5 b b f b f f b f f b 1 1 
    1 b f f b f f b f f b f f b 1 1 
    b b b b b b b b b b b b b b b 1 
    1 b f f b f f b f f b f f b 1 1 
    1 b f f b f f b f f b f f b 1 1 
    1 b f f b f f b f f b f f b 1 1 
    1 b f f b f f b f f b f f b 1 1 
    `,
img`
    d d d d d d d d d d d d d d d d 
    d d d d d d d d d d d d d d d d 
    d d d d b b b b b b d d d d d d 
    d d b b b b b b b b b b b b b d 
    d b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    b b b b f f f f f f f f b b b b 
    b b b f f f f f f f f f f b b b 
    b b f f f f f f f f f f f f b b 
    b f f f f f f f f f f f f f f b 
    b f f f f f f f f f f f f f f b 
    b f f f f f f f f f f f f f f b 
    b 5 f 5 f f f 5 f f f f 5 f 5 b 
    b 9 5 5 5 f 5 5 5 f 5 5 5 5 5 b 
    b 5 5 9 5 5 9 5 5 5 5 5 5 9 5 b 
    `
]
let tileBlocks = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tileBlocks.setImage(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
// list of all tiles on the board game. Basically where it will land on.
tilePlacements = [
assets.tile`myTile0`,
assets.tile`myTile15`,
assets.tile`myTile9`,
assets.tile`myTile16`,
assets.tile`myTile6`,
assets.tile`myTile5`,
assets.tile`myTile12`,
assets.tile`myTile13`,
assets.tile`myTile14`,
assets.tile`myTile8`
]
// the sprite that moves around the map
movingPiece = sprites.create(assets.image`moving piece`, SpriteKind.Player)
movingPiece.setPosition(56, 62)
controller.moveSprite(movingPiece)
scene.cameraFollowSprite(movingPiece)
// before the code runs, the strike and score is set to 0 but changes overtime
strikes = 0
info.setScore(0)
firstRoll(diceRoll)
pause(5000)
giveReward()
// iteration which loops the function afterFirst until score or strikes is proven false
while (!(info.score() == 3 || strikes == 3)) {
    afterFirstRoll(rollsAfter)
    pause(5000)
    giveReward()
    WinScreen()
    gameOver()
}
