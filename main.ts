namespace SpriteKind {
    export const poo = SpriteKind.create()
    export const spike = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    sprite.vy = 1000000
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile72`, function (sprite, location) {
    if (!(ship == 3)) {
        if ((controller.A.isPressed() || controller.up.isPressed()) && released == 0) {
            if (cube_gravity == 0) {
                mySprite.vy = -250
                cube_gravity = 1
                released = 1
                mySprite.setImage(img`
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 9 9 9 9 9 9 9 9 5 5 5 5 
                    5 5 5 5 9 9 9 9 9 9 9 9 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 9 9 5 5 5 5 5 5 9 9 5 5 5 
                    5 5 5 9 9 5 5 5 5 5 5 9 9 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `)
            } else {
                mySprite.vy = 250
                cube_gravity = 0
                released = 1
                mySprite.setImage(img`
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 9 9 5 5 5 5 5 5 9 9 5 5 5 
                    5 5 5 9 9 5 5 5 5 5 5 9 9 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 9 9 9 9 9 9 9 9 5 5 5 5 
                    5 5 5 5 9 9 9 9 9 9 9 9 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
                    `)
            }
        }
    }
    if (ship == 3) {
        if ((controller.A.isPressed() || controller.up.isPressed()) && released == 0) {
            if (mySprite.vy == -240) {
                ballV = 165
                released = 1
            } else {
                ballV = -165
                released = 1
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.spike, function (sprite, otherSprite) {
    reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile65`, function (sprite, location) {
    if (!(ship == 3)) {
        cube_gravity = 0
        mySprite.setImage(img`
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 9 9 5 5 5 5 5 5 9 9 5 5 5 
            5 5 5 9 9 5 5 5 5 5 5 9 9 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 9 9 9 9 9 9 9 9 5 5 5 5 
            5 5 5 5 9 9 9 9 9 9 9 9 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile63`, function (sprite, location) {
    if (!(ship == 3)) {
        cube_gravity = 1
        mySprite.setImage(img`
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 9 9 9 9 9 9 9 9 5 5 5 5 
            5 5 5 5 9 9 9 9 9 9 9 9 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 9 9 5 5 5 5 5 5 9 9 5 5 5 
            5 5 5 9 9 5 5 5 5 5 5 9 9 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `)
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile71`, function (sprite, location) {
    if (cube_gravity == 1) {
        mySprite.vy = 250
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    ship = 0
    mySprite.setImage(img`
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 9 9 5 5 5 5 5 5 9 9 5 5 5 
        5 5 5 9 9 5 5 5 5 5 5 9 9 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 9 9 9 9 9 9 9 9 5 5 5 5 
        5 5 5 5 9 9 9 9 9 9 9 9 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `)
    mySprite.vx = 165
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    ship = 3
    mySprite.setImage(img`
        5 5 . . . . . 5 5 . . . . . 5 5 
        5 5 5 5 . . . 5 5 . . . 5 5 5 5 
        . 5 5 5 5 . . 5 5 . . 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 9 5 5 9 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 9 5 5 5 5 5 5 9 5 . . . 
        5 5 5 5 5 5 5 9 9 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 9 9 5 5 5 5 5 5 5 
        . . . 5 9 5 5 5 5 5 5 9 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 9 5 5 9 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 . . 5 5 . . 5 5 5 5 . 
        5 5 5 5 . . . 5 5 . . . 5 5 5 5 
        5 5 . . . . . 5 5 . . . . . 5 5 
        `)
    ballV = 165
    mySprite.vy = 165
})
function spikes () {
    sprites.destroyAllSpritesOfKind(SpriteKind.spike)
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . b b . . . . . . . 
            `, SpriteKind.spike)
        tiles.placeOnTile(mySprite3, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . d d d d d d d d d d d b 
            . . . . d d d d d d d d d d d b 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.spike)
        tiles.placeOnTile(mySprite3, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        mySprite3 = sprites.create(img`
            . . . . . . . b b . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.spike)
        tiles.placeOnTile(mySprite3, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
        mySprite3 = sprites.create(img`
            . . . . . . . . 6 6 6 6 6 6 6 6 
            . . . . . . . . 6 6 6 6 6 6 6 6 
            . . . . . . . . 6 6 6 6 6 6 6 6 
            . . . . . . . . 6 6 6 6 6 6 6 6 
            . . . . . . . . 6 6 6 6 6 6 6 6 
            . . . . . . . . 6 6 6 6 6 6 6 6 
            . . . . . . . . 6 6 6 6 6 6 6 6 
            . . . . . . . . 6 6 6 6 6 6 6 6 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.spike)
        tiles.placeOnTile(mySprite3, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 6 6 6 6 6 6 6 6 
            . . . . . . . . 6 6 6 6 6 6 6 6 
            . . . . . . . . 6 6 6 6 6 6 6 6 
            . . . . . . . . 6 6 6 6 6 6 6 6 
            . . . . . . . . 6 6 6 6 6 6 6 6 
            . . . . . . . . 6 6 6 6 6 6 6 6 
            . . . . . . . . 6 6 6 6 6 6 6 6 
            . . . . . . . . 6 6 6 6 6 6 6 6 
            `, SpriteKind.spike)
        tiles.placeOnTile(mySprite3, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
        mySprite3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            `, SpriteKind.spike)
        tiles.placeOnTile(mySprite3, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
        mySprite3 = sprites.create(img`
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            6 6 6 6 6 6 6 6 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.spike)
        tiles.placeOnTile(mySprite3, value)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    ship = 2
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    ship = 1
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 5 5 5 5 5 5 5 . . . . . . . 
        . . 5 5 9 5 9 5 5 . . . . . . . 
        . . 5 5 5 5 5 5 5 . . . . . . . 
        . . 5 5 9 9 9 5 5 . . . . . . . 
        . . c c c c c c c . . . . . . . 
        2 2 c b d b d b d c c . . . . . 
        4 4 c b d b d b d b d c c . . . 
        4 4 c b d b d b d b d b d c c c 
        4 4 c b d b d b d b c c c . . . 
        2 2 c b d b d c c c . . . . . . 
        . . c c c c c . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    reset()
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    ship = 3
    mySprite.setImage(img`
        5 5 . . . . . 5 5 . . . . . 5 5 
        5 5 5 5 . . . 5 5 . . . 5 5 5 5 
        . 5 5 5 5 . . 5 5 . . 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 9 5 5 9 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 9 5 5 5 5 5 5 9 5 . . . 
        5 5 5 5 5 5 5 9 9 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 9 9 5 5 5 5 5 5 5 
        . . . 5 9 5 5 5 5 5 5 9 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 9 5 5 9 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 . . 5 5 . . 5 5 5 5 . 
        5 5 5 5 . . . 5 5 . . . 5 5 5 5 
        5 5 . . . . . 5 5 . . . . . 5 5 
        `)
    ballV = 165
    mySprite.vy = 165
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    if (!(ship == 3)) {
        if (released == 0 && (controller.up.isPressed() || controller.A.isPressed())) {
            if (cube_gravity == 0) {
                mySprite.vy = -200
            } else {
                mySprite.vy = 200
            }
        }
    } else {
        if (released == 0 && (controller.up.isPressed() || controller.A.isPressed())) {
            if (ballV == 165) {
                mySprite.vy = -200
            } else {
                mySprite.vy = 200
            }
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    sprite.vy = -100000
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    mySprite.vy = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile66`, function (sprite, location) {
    reset()
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    released = 0
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    released = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    ship = 1
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 5 5 5 5 5 5 5 . . . . . . . 
        . . 5 5 9 5 9 5 5 . . . . . . . 
        . . 5 5 5 5 5 5 5 . . . . . . . 
        . . 5 5 9 9 9 5 5 . . . . . . . 
        . . c c c c c c c . . . . . . . 
        2 2 c b d b d b d c c . . . . . 
        4 4 c b d b d b d b d c c . . . 
        4 4 c b d b d b d b d b d c c c 
        4 4 c b d b d b d b c c c . . . 
        2 2 c b d b d c c c . . . . . . 
        . . c c c c c . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile75`, function (sprite, location) {
    reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile62`, function (sprite, location) {
    if (!(ship == 3)) {
        mySprite.setImage(img`
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 9 9 9 9 9 9 9 9 5 5 5 5 
            5 5 5 5 9 9 9 9 9 9 9 9 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 9 9 5 5 5 5 5 5 9 9 5 5 5 
            5 5 5 9 9 5 5 5 5 5 5 9 9 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `)
        cube_gravity = 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile68`, function (sprite, location) {
    reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile64`, function (sprite, location) {
    if (!(ship == 3)) {
        cube_gravity = 0
        mySprite.setImage(img`
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 9 9 5 5 5 5 5 5 9 9 5 5 5 
            5 5 5 9 9 5 5 5 5 5 5 9 9 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 9 9 9 9 9 9 9 9 5 5 5 5 
            5 5 5 5 9 9 9 9 9 9 9 9 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `)
    }
})
function reset () {
    music.setVolume(100)
    cube_gravity = 0
    cube_speed = 0
    mySprite.vy = 0
    stage = 0
    mySprite.setImage(img`
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 9 9 5 5 5 5 5 5 9 9 5 5 5 
        5 5 5 9 9 5 5 5 5 5 5 9 9 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 9 9 9 9 9 9 9 9 5 5 5 5 
        5 5 5 5 9 9 9 9 9 9 9 9 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `)
    coin1 = sprites.create(img`
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 4 4 4 4 5 5 5 5 5 5 
        5 5 5 5 5 5 4 5 5 4 5 5 5 5 5 5 
        5 5 5 5 5 5 4 5 5 4 5 5 5 5 5 5 
        5 5 5 5 5 5 4 5 5 4 5 5 5 5 5 5 
        5 5 5 5 5 5 4 5 5 4 5 5 5 5 5 5 
        5 5 5 5 5 5 4 5 5 4 5 5 5 5 5 5 
        5 5 5 5 5 5 4 5 5 4 5 5 5 5 5 5 
        5 5 5 5 5 5 4 4 4 4 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        `, SpriteKind.Food)
    coin2 = sprites.create(img`
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 4 4 4 4 5 5 5 5 5 5 
        5 5 5 5 5 5 4 5 5 4 5 5 5 5 5 5 
        5 5 5 5 5 5 4 5 5 4 5 5 5 5 5 5 
        5 5 5 5 5 5 4 5 5 4 5 5 5 5 5 5 
        5 5 5 5 5 5 4 5 5 4 5 5 5 5 5 5 
        5 5 5 5 5 5 4 5 5 4 5 5 5 5 5 5 
        5 5 5 5 5 5 4 5 5 4 5 5 5 5 5 5 
        5 5 5 5 5 5 4 4 4 4 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        `, SpriteKind.Food)
    ship = 0
    tiles.setCurrentTilemap(tilemap`level1`)
    spikes()
    scene.setBackgroundColor(11)
    tiles.placeOnTile(coin1, tiles.getTileLocation(80, 1))
    tiles.placeOnTile(coin2, tiles.getTileLocation(127, 12))
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 6))
    mySprite.vx = 165
    info.changeScoreBy(1)
    mySprite2 = sprites.create(img`
        ....................f.....................ff....................
        ...................fff....................ff....................
        .........f........ff1f....................fff......f............
        ........ff........f11ff..................ff1f......ff...........
        ........fff......f1111ff.................f11ff.....ff...........
        .......f11f......f11111ff...............f1111f....ffff..........
        ......ff11f......f111111ff.............ff1111ff...f11ff.........
        ......f111f......f1111111ff............f111111f...f111ff........
        ......f111f......ff11ddddffffffffffffffddd1111f...f1111f........
        ......f111f.......fdddfff2222222222222fffddd11f..f11111f........
        ......f1111f......fdff2222222222222222222ffddff..f111111f.......
        ......f1111ff.....ff22222222222222222222222fff..ff111111f.......
        ......f11111ff...f222222222222222222222222222f.ff1111111f.......
        ......f1111111fff22222222222222222222222222222ffdd111111f.......
        ......f111111ddf2222222222222222222222222222222fdd11111ff.......
        .......f1111ddf222222222222222222222222222222222fdd1111f........
        .......f111ddf22222222222222222222222222222222222fdd11ff........
        .......f11ddfc222222222222222222222222222222222222fd1ff.........
        ........f1dfcc2222222222222222222222222222222222222fff..........
        ........ffdfcc2222222222222222222222222222222222222f............
        ..........fcc2222222222222222222222222222222222ff222f........ff.
        .f...ffffffc22222fff222222222222222222222222222ff222f......ffff.
        .ffff111dfcc22222f4ff2222222222222222222222222ffff222fffffff11f.
        .f111111dfc22222ff44f2222222222222222222222222f44f222fd1111111f.
        .f11111ddfc22222f445ff22222222222222222222222ff44ff22fdd111111f.
        ..f1111dfcc22222f4455ff222222222222222222222ff5544f222fd111111f.
        ..ff111dfc222222f44555fff2222222222222222fff555544f222fd111111f.
        ...fff1df2222222f4455155ff222222222222ffff55155544f222fd11111ff.
        ......fff2222222ff4455555ff222222222fff55555555544f222fd1111ff..
        ........f22222222f445555555ffff2222ff555555555544ff222fd11fff...
        ........f22222222ffff55555ffff22222fffffff55555fff2222ffff......
        ........f222222222222ffffff22222222222222ffffff2222222f.........
        ........f222222222222222222222222222222222222222222222f.........
        ........f222222222222222222222222222222222222222222222f.........
        ........f222222222222222222222222222222222222222222222f.........
        ........f222222222222222222222222222222222222222222222f.........
        ........f222222222222222222222222222222222222222222222f.........
        ........f222222222ff222222222222222222222222ffff222222f.........
        .........f2222222ffffff222222222222222222ffff111f2222f..........
        .........f222222fffff1fffff222222222f222fff11111ff222f..........
        .........f222222fffff1111fffffffffffffff1ff1111fff222f..........
        ..........f22222fffff1111ff11f111111ff111ff1111fff22f...........
        ..........f22222fffff111fff1ff11111fff111ff1111ffff2f...........
        ...........f2222fffffffffff1ff1111ffff111fff1fffffff............
        ...........f2222ffffffffffffffffffffff11ffffffffffff............
        ............f222fffffffffffffffff11ffffffffffffffff.............
        .............f22fffff111ff1111ff1111fff11ffff11fff..............
        ..............f2fffff111ff1111f111111f1111ff111fff..............
        ...............f.fff111fffffffffffff1f11111f111ff...............
        ................fffffff2222222222222ffff11ff1fff................
        .................fff2222222222222222222fffffff..................
        ..................ff22222222222222222222222ff...................
        ....................ff2222222222222222222ff.....................
        ......................fff2222222222222fff.......................
        .........................fffffffffffff..........................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        ................................................................
        `, SpriteKind.poo)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    ship = 0
    mySprite.setImage(img`
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 9 9 5 5 5 5 5 5 9 9 5 5 5 
        5 5 5 9 9 5 5 5 5 5 5 9 9 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 9 9 9 9 9 9 9 9 5 5 5 5 
        5 5 5 5 9 9 9 9 9 9 9 9 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `)
    mySprite.vx = 165
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    ship = 2
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile70`, function (sprite, location) {
    if (cube_gravity == 0) {
        mySprite.vy = -250
    }
})
let coin3: Sprite = null
let mySprite2: Sprite = null
let coin2: Sprite = null
let coin1: Sprite = null
let stage = 0
let cube_speed = 0
let mySprite3: Sprite = null
let ballV = 0
let cube_gravity = 0
let released = 0
let mySprite: Sprite = null
let ship = 0
ship = 0
mySprite = sprites.create(img`
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 9 9 5 5 5 5 5 5 9 9 5 5 5 
    5 5 5 9 9 5 5 5 5 5 5 9 9 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 9 9 9 9 9 9 9 9 5 5 5 5 
    5 5 5 5 9 9 9 9 9 9 9 9 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
reset()
spikes()
music.play(music.createSong(hex`0078000408060200001c00010a006400f401640000040000000000000000000000000005000004960000000400012004000800012008001000012210001800012018002000012520003000012430003400012034003800012038004000012240004800012048005000012750006000012560006400012064006800012068007000012c70007800012978008000012580008800012488009000012290009400012a94009800012a9800a0000129a000a8000125a800b0000127b000c000012507001c00020a006400f401640000040000000000000000000000000000000003640008000c00010d1000140002111418001c0002111420002400010f28002c0002121438003c00010c4000440002121448004c0002121450005400010d58005c000211146800800001118000900001129800a8000114a800ac00030c1214b000c000030d1114`), music.PlaybackMode.LoopingInBackground)
mySprite.setStayInScreen(true)
info.setScore(1)
let statusbar = statusbars.create(100, 2, StatusBarKind.Health)
statusbar.setPosition(76, 20)
statusbar.max = 100
statusbar.setColor(7, 15)
forever(function () {
    if (ship == 0) {
        if (cube_speed == 0) {
            mySprite.vx = 165
        } else if (cube_speed == 1) {
            mySprite.vx = 300
        } else {
            mySprite.vx = 210
        }
    } else {
        if (!(ship == 2)) {
            if (cube_speed == 2) {
                mySprite.vx = 210
            } else {
                mySprite.vx = 165
            }
        }
    }
})
forever(function () {
    if (ship == 0) {
        if (cube_gravity == 0) {
            mySprite.vy += 10
        } else {
            mySprite.vy += -10
        }
    } else if (ship == 1) {
        mySprite.vy += 8
    }
})
forever(function () {
    if (stage == 0) {
        statusbar.value = mySprite.tilemapLocation().column * 0.7874015748 / 2
    } else if (stage == 1) {
        statusbar.value = mySprite.tilemapLocation().column * 0.7874015748 / 2 + 50
    } else if (stage == 2) {
        statusbar.value = mySprite.tilemapLocation().column * 0.7874015748 / 5 + 40
    } else if (stage == 3) {
        statusbar.value = mySprite.tilemapLocation().column * 0.7874015748 / 5 + 60
    } else {
        statusbar.value = mySprite.tilemapLocation().column * 0.7874015748 / 5 + 80
    }
    statusbar.setLabel("" + Math.round(statusbar.value) + "%", 15)
})
forever(function () {
    if (stage == 0 && 126 < mySprite.tilemapLocation().column) {
        sprites.destroy(mySprite2)
        sprites.destroyAllSpritesOfKind(SpriteKind.poo)
        sprites.destroyAllSpritesOfKind(SpriteKind.Food)
        stage = 1
        cube_speed = 2
        mySprite.vy = 0
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 4))
        tiles.setCurrentTilemap(tilemap`level4`)
        music.setVolume(150)
        spikes()
    }
    if (stage == 0 && 74 < mySprite.tilemapLocation().column) {
        scene.setBackgroundColor(2)
    }
    if (stage == 0 && 93 < mySprite.tilemapLocation().column) {
        cube_speed = 1
    }
    if (stage == 1 && 126 < mySprite.tilemapLocation().column) {
        game.setGameOverMessage(true, "Happy birthday, RB!")
        game.gameOver(true)
    }
    if (stage == 2 && 126 < mySprite.tilemapLocation().column) {
        stage = 3
        ship = 3
        cube_speed = 0
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
        tiles.setCurrentTilemap(tilemap`level16`)
        sprites.destroyAllSpritesOfKind(SpriteKind.spike)
        sprites.destroyAllSpritesOfKind(SpriteKind.Food)
        coin3 = sprites.create(img`
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            5 5 5 5 5 5 4 4 4 4 5 5 5 5 5 5 
            5 5 5 5 5 5 4 5 5 4 5 5 5 5 5 5 
            5 5 5 5 5 5 4 5 5 4 5 5 5 5 5 5 
            5 5 5 5 5 5 4 5 5 4 5 5 5 5 5 5 
            5 5 5 5 5 5 4 5 5 4 5 5 5 5 5 5 
            5 5 5 5 5 5 4 5 5 4 5 5 5 5 5 5 
            5 5 5 5 5 5 4 5 5 4 5 5 5 5 5 5 
            5 5 5 5 5 5 4 4 4 4 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(coin3, tiles.getTileLocation(117, 10))
        game.setGameOverMessage(true, "You beat me...")
    }
    if (stage == 3 && 126 < mySprite.tilemapLocation().column) {
        stage = 4
        ship = 2
        cube_speed = 1
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
        tiles.setCurrentTilemap(tilemap`level19`)
        sprites.destroyAllSpritesOfKind(SpriteKind.spike)
        sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    }
    if (stage == 4 && 126 < mySprite.tilemapLocation().column) {
        game.gameOver(true)
    }
})
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Right)) {
        reset()
    }
})
forever(function () {
    if (ship == 0) {
        if ((controller.A.isPressed() || controller.up.isPressed()) && mySprite.isHittingTile(CollisionDirection.Bottom)) {
            if (cube_gravity == 0) {
                mySprite.vy = -200
                released = 1
            }
        }
        if ((controller.A.isPressed() || controller.up.isPressed()) && mySprite.isHittingTile(CollisionDirection.Top)) {
            if (cube_gravity == 1) {
                mySprite.vy = 200
                released = 1
            }
        }
    } else if (ship == 1) {
        if (controller.A.isPressed() || controller.up.isPressed()) {
            mySprite.vy += -20
        }
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 5 5 5 5 5 5 5 . . . . . . . 
            . . 5 5 9 5 9 5 5 . . . . . . . 
            . . 5 5 5 5 5 5 5 . . . . . . . 
            . . 5 5 9 9 9 5 5 . . . . . . . 
            . . c c c c c c c . . . . . . . 
            2 2 c b d b d b d c c . . . . . 
            4 4 c b d b d b d b d c c . . . 
            4 4 c b d b d b d b d b d c c c 
            4 4 c b d b d b d b c c c . . . 
            2 2 c b d b d c c c . . . . . . 
            . . c c c c c . . . . . . . . . 
            `)
    } else if (ship == 2) {
        if (controller.A.isPressed() || controller.up.isPressed()) {
            mySprite.vy = -200
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 5 5 . . . . 
                . . . . . . . . 8 8 5 5 . . . . 
                . . . . . . 8 8 5 9 8 . . . . . 
                . . . . 8 8 5 5 9 5 8 . . . . . 
                . . . . . 8 8 9 5 8 . . . . . . 
                . . . . . 5 9 8 5 8 . . . . . . 
                . . . . . 9 5 8 8 . . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        } else {
            mySprite.vy = 200
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 8 . . . . . . . 
                . . . . . 9 5 8 8 . . . . . . . 
                . . . . . 5 9 8 5 8 . . . . . . 
                . . . . . 8 8 9 5 8 . . . . . . 
                . . . . 8 8 5 5 9 5 8 . . . . . 
                . . . . . . 8 8 5 9 8 . . . . . 
                . . . . . . . . 8 8 5 5 . . . . 
                . . . . . . . . . . 5 5 . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
        mySprite.vx = 200
    } else {
        ship = 3
        if (controller.A.isPressed() || controller.up.isPressed()) {
            if (ballV == 165) {
                if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
                    if (released == 0) {
                        mySprite.vy = -240
                        ballV = -165
                    }
                }
            } else {
                if (ballV == -165) {
                    if (mySprite.isHittingTile(CollisionDirection.Top)) {
                        if (released == 0) {
                            mySprite.vy = 240
                            ballV = 165
                        }
                    }
                    released = 1
                }
            }
        }
        if (ballV == -165) {
            mySprite.vy = -240
        }
        if (ballV == 165) {
            mySprite.vy = 240
        }
        mySprite.setImage(img`
            5 5 . . . . . 5 5 . . . . . 5 5 
            5 5 5 5 . . . 5 5 . . . 5 5 5 5 
            . 5 5 5 5 . . 5 5 . . 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 5 5 9 5 5 9 5 5 5 5 . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . . 5 9 5 5 5 5 5 5 9 5 . . . 
            5 5 5 5 5 5 5 9 9 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 9 9 5 5 5 5 5 5 5 
            . . . 5 9 5 5 5 5 5 5 9 5 . . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . 5 5 5 5 9 5 5 9 5 5 5 5 . . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 . . 5 5 . . 5 5 5 5 . 
            5 5 5 5 . . . 5 5 . . . 5 5 5 5 
            5 5 . . . . . 5 5 . . . . . 5 5 
            `)
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile19`)) {
        mySprite.vy = 1000000
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile20`)) {
        mySprite.vy = -100000
    }
})
