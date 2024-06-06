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
    playButton: GameObjects.Image;
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

        this.title = this.add.image(1920 / 2 + 50, 1080 / 2 - 220, "title").setScale(3)

        this.playButton = this.add
          .sprite(1920 / 2 + 300, 1080 / 2 + 250, "playButton")
          .setScale(1)
        this.playButton.setInteractive({ useHandCursor: true })
        this.playButton.on("pointerdown", () =>
          this.scene.start("Game")
        )
    }

    update(): void {
        this.gray_background.tilePositionX += 3
    }
}
