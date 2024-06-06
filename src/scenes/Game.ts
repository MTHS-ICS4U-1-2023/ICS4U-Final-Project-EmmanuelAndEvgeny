/**
  * This is the Game.ts code that runs
  * By: Evgeny Vovk
  * Version: 1.0
  * Since: 2024-05-21
  */

import { Scene, GameObjects } from 'phaser';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;
    doge: GameObjects.Image;

    constructor ()
    {
        super('Game');
    }

    create (data)
    {
        this.game.sound.stopAll()
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x00ff00);

        //create doge
        this.player = this.physics.add.sprite(500, 500, "doge")
        this.player.body.collideWorldBounds = true
        this.player.setSize(0.5, 0.5)

        this.background = this.add.image(512, 384, 'background');
        this.background.setAlpha(0.5);

        this.msg_text = this.add.text(512, 384, 'Hello, World!', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        });
        this.msg_text.setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');

        });
    }

    update(time, delta): void {
        
    }
}
