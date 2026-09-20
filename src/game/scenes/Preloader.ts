import { Scene } from 'phaser';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    preload ()
    {
        // 加载游戏资源
        this.load.image('background', 'assets/bg.png');
        this.load.image('logo', 'assets/logo.png');
    }

    create ()
    {
        // 启动主菜单场景
        this.scene.start('MainMenu');
    }
}