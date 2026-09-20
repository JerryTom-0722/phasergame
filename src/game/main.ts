import { Boot } from './scenes/Boot';
import { Boot } from './scenes/Boot';
import { MainMenu } from './scenes/MainMenu';
import { MenuScene } from './scenes/MenuScene';
import { Preloader } from './scenes/Preloader';
import { AUTO, Game } from 'phaser';

//  Find out more information about the Game Config at:
//  https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scene: [
        Boot,
        Preloader,
        MainMenu,
        MenuScene
    ]
};

const StartGame = (parent: string) => {
    // 更新宽度和高度为当前窗口大小
    config.width = window.innerWidth;
    config.height = window.innerHeight;

    return new Game({ ...config, parent });
}

export default StartGame;
