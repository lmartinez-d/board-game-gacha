function doSomething () {
    outcomes.setImage(outcomeImages)
    if (outcomes == outcomeImages[0]) {
    	
    } else {
    	
    }
}
function placementOfRewards (num: number) {
    score = num
    outcomes.setImage(outcomeImages._pickRandom())
    rollTheDice()
    if (movingPiece.overlapsWith(outcomes)) {
    	
    }
}
function rollTheDice () {
    score = game.askForNumber("", 2)
    if (score == 9) {
        tiles.placeOnRandomTile(outcomes, assets.tile`myTile14`)
    } else if (score == 8) {
        tiles.placeOnRandomTile(outcomes, assets.tile`myTile13`)
    } else if (score == 7) {
        tiles.placeOnRandomTile(outcomes, assets.tile`myTile12`)
    } else if (score == 6) {
        tiles.placeOnRandomTile(outcomes, assets.tile`myTile5`)
    } else if (score == 5) {
        tiles.placeOnRandomTile(outcomes, assets.tile`myTile6`)
    } else if (score == 4) {
        tiles.placeOnRandomTile(outcomes, assets.tile`myTile16`)
    } else if (score == 3) {
        tiles.placeOnRandomTile(outcomes, assets.tile`myTile9`)
    } else if (score == 2) {
        tiles.placeOnRandomTile(outcomes, assets.tile`myTile15`)
    } else if (score == 1) {
        tiles.placeOnRandomTile(outcomes, assets.tile`myTile0`)
    } else if (score == 10) {
        tiles.placeOnRandomTile(outcomes, assets.tile`myTile8`)
    } else {
        game.splash("over limit. try again ;(")
    }
}
let score = 0
let movingPiece: Sprite = null
let outcomeImages: Image = null
let outcomes: Sprite = null
tiles.setTilemap(tilemap`level1`)
let diceScore = [
2,
3,
4,
5,
6,
7,
8,
9,
10,
11
]
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
let tilePlacements = [
myTiles.tile2,
myTiles.tile11,
myTiles.tile8,
myTiles.tile10,
myTiles.tile7,
myTiles.tile13,
myTiles.tile19,
myTiles.tile18,
myTiles.tile16,
myTiles.tile15
]
movingPiece = sprites.create(assets.image`moving piece`, SpriteKind.Player)
movingPiece.setPosition(56, 62)
controller.moveSprite(movingPiece)
scene.cameraFollowSprite(movingPiece)
placementOfRewards(score)
