export default class MainScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'Main',
      physics: {
        arcade: {
          gravity: { y: 300 }
        }
      }
    });
  }

  preload(): void {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 'assets/dude.png', {
      frameWidth: 32,
      frameHeight: 48
    });
  }

  create(): void {
    this.add.image(400, 300, 'sky');
  }

  update(): void {
    //
  }
}
