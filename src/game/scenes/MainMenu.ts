import { Scene, GameObjects } from 'phaser';

export class MainMenu extends Scene
{
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        // 获取当前窗口尺寸
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        // 设置背景图片填充整个屏幕
        this.background = this.add.image(width/2, height/2, 'background');
        this.background.setAlpha(0.5);
        this.background.setScale(Math.max(width / 1024, height / 768)); // 保持比例

        // 设置logo位置
        this.logo = this.add.image(width/2, height/3, 'logo');

        // 设置标题位置
        this.title = this.add.text(width/2, height/2, 'Main Menu', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {
            this.scene.start('Game');
        });
    }
}
