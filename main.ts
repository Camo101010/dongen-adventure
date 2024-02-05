controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 8 8 f f f . . . . 
        . . . f f f 8 8 8 8 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 8 8 8 8 8 8 e e f . . 
        . f f e 8 f f f f f f 8 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 8 8 8 8 8 8 8 8 e f . . 
        . . . f 8 8 8 8 8 8 8 8 f e . . 
        . . f e f 8 8 8 8 e d d 4 e . . 
        . . e 4 f 8 8 8 8 e d d e . . . 
        . . . . f 8 8 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `)
    pause(500)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 8 8 f f f . . . . 
        . . . f f f 8 8 8 8 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 8 8 8 8 8 8 e f f . . 
        . f f e 8 f f f f f f 8 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 8 8 8 8 8 8 8 8 e f . . 
        . . e f 8 8 8 8 8 8 8 8 f . . . 
        . . e 4 d d e 8 8 8 8 f e f . . 
        . . . e d d e 8 8 8 8 f 4 e . . 
        . . . . e e f 5 5 8 8 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `)
    pause(500)
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 8 8 f f f . . . . 
    . . . f f f 8 8 8 8 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 8 8 8 8 8 8 e e f . . 
    . . f e 8 f f f f f f 8 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f 4 4 f 1 4 e e f . 
    . . f e 8 8 8 8 8 8 8 8 e f . . 
    . . . f e 8 8 8 8 8 8 e f . . . 
    . . 8 8 f 8 8 8 8 8 8 f 8 8 . . 
    . . 8 8 f 8 8 8 8 8 8 f 8 8 . . 
    . . 4 4 f 8 8 5 5 8 8 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(22, 14)
forever(function () {
    controller.moveSprite(mySprite)
})
forever(function () {
    scene.cameraFollowSprite(mySprite)
})
