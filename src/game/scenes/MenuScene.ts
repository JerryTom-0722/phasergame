import { Scene } from 'phaser';

export class MenuScene extends Scene
{
    constructor ()
    {
        super('MenuScene');
    }

    create ()
    {
        // 获取当前窗口尺寸
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        // 设置背景颜色
        this.cameras.main.setBackgroundColor(0x2c3e50);
        
        // 创建三列布局 (1:2:1)
        const leftColumnWidth = width * 0.2;    // 左列 20%
        const centerColumnWidth = width * 0.6;  // 中间列 60%
        const rightColumnWidth = width * 0.2;   // 右列 20%
        
        // 创建左列
        const leftColumn = this.add.rectangle(0, 0, leftColumnWidth, height, 0x3498db);
        leftColumn.setOrigin(0);
        
        // 创建中间列的上半部分
        const centerTopHeight = height * 0.5;   // 中间上半部分 50%
        const centerTop = this.add.rectangle(leftColumnWidth, 0, centerColumnWidth, centerTopHeight, 0x2ecc71);
        centerTop.setOrigin(0);
        
        // 创建中间列的下半部分
        const centerBottomHeight = height * 0.5;   // 中间下半部分 50%
        const centerBottom = this.add.rectangle(leftColumnWidth, centerTopHeight, centerColumnWidth, centerBottomHeight, 0xe74c3c);
        centerBottom.setOrigin(0);
        
        // 创建右列
        const rightColumn = this.add.rectangle(leftColumnWidth + centerColumnWidth, 0, rightColumnWidth, height, 0xf1c40f);
        rightColumn.setOrigin(0);
        
        // 添加一些文本内容来显示各区域
        this.add.text(leftColumnWidth/2, height/2, 'Left Column', {
            fontFamily: 'Arial Black', 
            fontSize: 24, 
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);
        
        this.add.text(leftColumnWidth + centerColumnWidth/2, centerTopHeight/2, 'Center Top', {
            fontFamily: 'Arial Black', 
            fontSize: 24, 
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);
        
        this.add.text(leftColumnWidth + centerColumnWidth/2, centerTopHeight + centerBottomHeight/2, 'Center Bottom', {
            fontFamily: 'Arial Black', 
            fontSize: 24, 
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);
        
        this.add.text(leftColumnWidth + centerColumnWidth + rightColumnWidth/2, height/2, 'Right Column', {
            fontFamily: 'Arial Black', 
            fontSize: 24, 
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);
    }
}