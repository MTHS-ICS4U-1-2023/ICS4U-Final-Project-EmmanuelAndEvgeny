/**
  * This is the Boot.ts code
  * By: Evgeny Vovk
  * Version: 1.0
  * Since: 2024-05-20
  */

import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

        this.load.image('background', 'assets/Doge_and_Floppa.jpg');
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
