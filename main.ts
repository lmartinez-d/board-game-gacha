function checkPlacement () {
    tilePlacements.push(myTiles.tile2)
    tilePlacements.push(myTiles.tile18)
    tilePlacements.push(myTiles.tile11)
    tilePlacements.push(myTiles.tile19)
    tilePlacements.push(myTiles.tile8)
    tilePlacements.push(myTiles.tile7)
    tilePlacements.push(myTiles.tile15)
    tilePlacements.push(myTiles.tile16)
    tilePlacements.push(myTiles.tile17)
    tilePlacements.push(myTiles.tile10)
}
function AfterFirstRoll (num: number) {
    pause(5000)
    giveReward()
    rollAfter1 = game.askForNumber("", 2)
    outcomes.setImage(outcomeImages[randomNum])
    if (rollAfter1 <= 10) {
        tiles.placeOnRandomTile(outcomes, tilePlacements[diceRoll - 1 + rollAfter1])
    } else {
        game.splash("Over Limit! Try Again!")
    }
}
function giveReward () {
    strikes = 0
    info.setScore(0)
    if (movingPiece.overlapsWith(outcomes)) {
        if (randomNum == 0) {
            strikes += 2
        } else if (randomNum == 1) {
            info.changeScoreBy(1)
        } else if (randomNum == 2) {
            strikes += 1
        } else {
            info.changeScoreBy(2)
        }
        game.splash("you have" + strikes + "strikes")
        game.splash("you have" + info.score() + "lives")
    }
}
function rewardAppears (num: number) {
    diceRoll = game.askForNumber("", 2)
    randomNum = randint(0, 4)
    giveReward()
    outcomes.setImage(outcomeImages[randomNum])
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
    }
    checkPlacement()
    AfterFirstRoll(rollAfter1)
}
let strikes = 0
let randomNum = 0
let rollAfter1 = 0
let diceRoll = 0
let movingPiece: Sprite = null
let tilePlacements: Image[] = []
let outcomeImages: Image[] = []
let outcomes: Sprite = null
tiles.setTilemap(tilemap`level1`)
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
tileBlocks.setImage(assets.tile`transparency16`)
tilePlacements = [
myTiles.tile2,
myTiles.tile18,
myTiles.tile11,
myTiles.tile19,
myTiles.tile8,
myTiles.tile7,
myTiles.tile15,
myTiles.tile16,
myTiles.tile17,
myTiles.tile10
]
movingPiece = sprites.create(assets.image`moving piece`, SpriteKind.Player)
movingPiece.setPosition(56, 62)
controller.moveSprite(movingPiece)
scene.cameraFollowSprite(movingPiece)
rewardAppears(diceRoll)
