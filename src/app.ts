import 'phaser';
import MainScene from './scenes/main';

const config: Phaser.Types.Core.GameConfig = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    },
  },
  scene: MainScene,
};

window.addEventListener('load', () => {
  const game = new Phaser.Game(config);
});
