import { Scene } from 'phaser';

export class GameOver extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    gameover_text : Phaser.GameObjects.Text;

    constructor ()
    {
        super('GameOver');
    }

    create ()
    {
        this.camera = this.cameras.main
        this.camera.setBackgroundColor(0xff0000);

        // 获取当前窗口尺寸
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        // 设置背景图片填充整个屏幕
        this.background = this.add.image(width/2, height/2, 'background');
        this.background.setAlpha(0.5);
        this.background.setScale(Math.max(width / 1024, height / 768)); // 保持比例

        // 设置游戏结束文本位置和样式
        this.gameover_text = this.add.text(width/2, height/2, 'Game Over', {
            fontFamily: 'Arial Black', fontSize: 64, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        });
        this.gameover_text.setOrigin(0.5);

        this.input.once('pointerdown', () => {
            this.scene.start('MainMenu');
        });
    }
}
