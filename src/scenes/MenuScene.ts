import Phaser from 'phaser';

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super('MenuScene');
    }

    create() {
        // 设置背景色
        this.cameras.main.setBackgroundColor('#E9EDF4');

        // 获取屏幕尺寸
        const screenWidth = this.game.config.width as number;
        const screenHeight = this.game.config.height as number;

        // 左侧列 (1/4宽度)
        const leftColumnWidth = screenWidth * 0.25;
        const leftColumnHeight = screenHeight;
        
        // 中间列 (1/2宽度，垂直等分为两行)
        const middleColumnWidth = screenWidth * 0.5;
        const middleColumnHeight = screenHeight;
        const middleRowHeight = middleColumnHeight / 2;

        // 右侧列 (1/4宽度)
        const rightColumnWidth = screenWidth * 0.25;
        const rightColumnHeight = screenHeight;

        // 创建左侧列背景
        this.add.rectangle(0, 0, leftColumnWidth, leftColumnHeight, 0x66b2ff).setOrigin(0);
        
        // 创建中间列背景
        this.add.rectangle(leftColumnWidth, 0, middleColumnWidth, middleColumnHeight, 0xff9966).setOrigin(0);
        
        // 创建右侧列背景
        this.add.rectangle(leftColumnWidth + middleColumnWidth, 0, rightColumnWidth, rightColumnHeight, 0x33cc33).setOrigin(0);

        // 在左侧列添加文字标签
        this.add.text(leftColumnWidth / 2, screenHeight / 2, 'Left Column', {
            fontSize: '24px',
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);

        // 在中间列顶部添加文字标签
        this.add.text(leftColumnWidth + middleColumnWidth / 2, middleRowHeight / 2, 'Top Row', {
            fontSize: '24px',
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);

        // 在中间列底部添加文字标签
        this.add.text(leftColumnWidth + middleColumnWidth / 2, middleRowHeight + middleRowHeight / 2, 'Bottom Row', {
            fontSize: '24px',
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);

        // 在右侧列添加文字标签
        this.add.text(leftColumnWidth + middleColumnWidth + rightColumnWidth / 2, screenHeight / 2, 'Right Column', {
            fontSize: '24px',
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);
    }
}
