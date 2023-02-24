

const config = {
    width: 1080,
    height: 720,
    type: Phaser.AUTO,
    physics:{
        default: 'arcade',
        arcade: {
            gravity: {
                y: 400
            }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}


var game = new Phaser.Game(config)
let dude;
let cursors;



function preload(){
    this.load.image('dude', 'assets/dude.png');
}

function create(){
    
    dude = this.physics.add.image(500,100,'dude');
    dude.body.collideWorldBounds = true;

    cursors = this.input.keyboard.createCursorKeys()
    console.log(cursors)
}

function update(){
    dude.setVelocityX(0);

    if(cursors.up.isDown){
        dude.setVelocity(0, -300);
    }
    if(cursors.right.isDown){
        dude.setVelocity(300, 0);
    }
    if(cursors.left.isDown){
        dude.setVelocity(-300, 0);
    }
}