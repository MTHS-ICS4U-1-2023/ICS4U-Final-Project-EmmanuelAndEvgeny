/**
  * This is the MainMenu.ts code that runs
  * By: Evgeny Vovk
  * Version: 1.0
  * Since: 2024-05-21
  */

import { Scene, GameObjects } from 'phaser';

export class MainMenu extends Scene
{
    gray_background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.gray_background = this.add.tileSprite(
            1920,
            540,
            3840,
            1080,
            "gray_background"
          )

        this.logo = this.add.image(512, 300, 'logo');

        this.title = this.add.text(512, 460, 'Main Menu', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
    update(): void {
        this.gray_background.tilePositionX += 5
    }
}
