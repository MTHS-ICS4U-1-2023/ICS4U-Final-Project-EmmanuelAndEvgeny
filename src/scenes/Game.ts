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
    blue_background: GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;
    doge: GameObjects.Image;

    constructor ()
    {
        super('Game');
    }

    create (data)
    {
        this.blue_background = this.add.tileSprite(
            1920,
            540,
            3840,
            1080,
            "blue_background"
        )

        this.game.sound.stopAll()
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x00ff00);

        //create doge
        this.player = this.physics.add.sprite(500, 500, "doge")
        this.player.body.collideWorldBounds = true

        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');

        });
    }

    update(time, delta): void {
        const keySpace = this.input.keyboard.addKey("SPACE")

        this.blue_background.tilePositionX += 6

    }
}
