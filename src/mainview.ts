import StartGame from './game/main';

// 主游戏页面
class MainView {
    constructor() {
        this.init();
    }
    
    private init(): void {
        // 创建游戏容器
        const gameContainer = document.getElementById('game-container');
        if (gameContainer) {
            // 调用游戏初始化函数，传入容器ID
            StartGame('game-container');

            // 确保容器全屏
        this.setupFullscreen();
        
        // 监听窗口大小变化
        window.addEventListener('resize', () => {
            this.setupFullscreen();
                // 重新初始化游戏以适应新尺寸
                this.restartGame();
        });
    }
    }
    
    private setupFullscreen(): void {
        const gameContainer = document.getElementById('game-container');
        if (gameContainer) {
            // 设置容器全屏
            gameContainer.style.width = '100vw';
            gameContainer.style.height = '100vh';
            gameContainer.style.position = 'fixed';
            gameContainer.style.top = '0';
            gameContainer.style.left = '0';













        }
    }

    private restartGame(): void {
        // 重新初始化游戏以适应新的窗口大小
        const gameContainer = document.getElementById('game-container');
        if (gameContainer) {
            // 清空容器内容
            gameContainer.innerHTML = '';
            // 重新启动游戏
            StartGame('game-container');
            gameContainer.style.overflow = 'hidden';
        }
    }
}
// 页面加载完成后初始化主游戏界面
document.addEventListener('DOMContentLoaded', () => {
    new MainView();
});