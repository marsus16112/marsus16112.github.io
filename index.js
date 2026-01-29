const K = 8.987551785972e9; // coulomb const. Nm^2/C^2
const m_e = 9.109e-31; // mass of electron kg
const Q = 1.602176634e-19; // charge unit Coulombs

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
        let rectangle = new Phaser.GameObjects.Rectangle(this, 100, 100, 100, 100);
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
    constructor(scene, x, y) {
        super(scene, x, y, 'electron');
        let charge = -Q;
        console.log(this);
        scene.add.existing(this);
    }
    field(a, b) { // return electric field (N/C) at point (a, b)
        let r = Math.hypot(a - x, b - y);
        let F = K * Q / (r * r);
        return [-F * (a - x) / r, -F * (b - y) / r];
    }
}

class Proton extends Phaser.GameObjects.Image {
    constructor(scene, x, y) {
        super(scene, x, y, 'proton');
        let charge = Q;
        this.add.existing(this);
        scene.add.existing(this);
    }
    field(a, b) { // return electric field at point (a, b)
        let r = Math.hypot(a - x, b - y);
        let F = K * Q / (r * r);
        return [F * (a - x) / r, F * (b - y) / r];
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
        let electron = new Electron(this, 300, 400);
        
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