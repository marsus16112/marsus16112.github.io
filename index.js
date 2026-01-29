class MainMenu extends Phaser.Scene {
    constructor() {
        super({key: 'MainMenu'});
    }
    preload() {
    	console.log('Scene loading...')
    }
    init() {
    	console.log('Scene initializing...')
    }
    create() {
        try {
    	console.log('Scene creating objects...')
        let rectangle = new Phaser.Rectangle(100, 100, 100, 100);
        } catch (err) {
            alert(err);
        }

        let self = this;
        this.input.on('pointerdown', function() {alert('e'); self.scene.start('Level');});
      //alert("Scene ready!")
    }
    update() {
      console.log('Scene creating objects...')
    }
}

class Tutorial extends Phaser.Scene {
    constructor() {
        super({key: 'Tutorial'});
    }
}

class Electron extends Phaser.GameObjects.Image {
    constructor(x, y) {
        super(x, y, 'electron');
        charge = -1;
    }
}

class Proton extends Phaser.GameObjects.Image {
    constructor(x, y) {
        super(x, y, 'proton');
        charge = 1;
    }
}

class Level extends Phaser.Scene {
    constructor() {
        super({key: 'Level'});
    }
    preload() {
        this.load.image('proton', 'assets/proton.png');
        this.load.image('electron', 'assets/electron.png');
    }
    init() {
        this.add.image(400, 300, 'electron');
        
    }
    create(){}
    update(){}
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [MainMenu, Tutorial, Level]
};

const game = new Phaser.Game(config);