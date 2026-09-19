import { Scene } from 'phaser';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text : Phaser.GameObjects.Text;

    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x00ff00);

        // 获取当前窗口尺寸
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        // 设置背景图片填充整个屏幕
        this.background = this.add.image(width/2, height/2, 'background');
        this.background.setAlpha(0.5);
        this.background.setScale(Math.max(width / 1024, height / 768)); // 保持比例

        // 设置文本位置和样式
        this.msg_text = this.add.text(width/2, height/2, 'Make something fun!\nand share it with us:\nsupport@phaser.io', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        });
        this.msg_text.setOrigin(0.5);

        this.input.once('pointerdown', () => {
            this.scene.start('GameOver');
        });
    }
}
