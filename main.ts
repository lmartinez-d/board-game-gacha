function placementOfRewards (num: number) {
    for (let index = 0; index < num; index++) {
        for (let index = 0; index <= randint(0, 4); index++) {
            outcomes.setImage(outcomeImages[index])
            tiles.placeOnRandomTile(outcomes, assets.tile`transparency16`)
        }
    }
}
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
let tilePlacements = [
myTiles.tile2,
myTiles.tile11,
myTiles.tile8,
myTiles.tile10,
myTiles.tile7
]
let movingPiece = sprites.create(assets.image`moving piece`, SpriteKind.Player)
movingPiece.setPosition(56, 62)
controller.moveSprite(movingPiece)
scene.cameraFollowSprite(movingPiece)
placementOfRewards(5)
