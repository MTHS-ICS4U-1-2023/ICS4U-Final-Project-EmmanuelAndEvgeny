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
    public isJumping: boolean = false;
    public canJump: boolean = true;

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
        const keyW = this.input.keyboard.addKey("W")
        const keyArrow = this.input.keyboard.addKey("UP")

        this.blue_background.tilePositionX += 9

        if (keySpace.isDown === true || keyW.isDown === true || keyArrow.isDown === true) {
            if (this.canJump == true) {
                this.isJumping = true;
                this.canJump = false;
                this.player.body.velocity.y = -1300
            }
        }
        if (this.isJumping == true) {
            this.player.rotation += 0.20;
            if (this.player.body.y > 900) {
                this.isJumping = false;
                this.canJump = true;
                this.player.angle = 0
            }
        }
    }
}
