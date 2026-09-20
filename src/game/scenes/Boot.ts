import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    create ()
    {
        // 启动预加载场景
        this.scene.start('Preloader');
    }
}