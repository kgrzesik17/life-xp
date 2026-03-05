class Player {
  level = 1;
  xp = 0;
  tasks = [];

  // constructor() {}

  getNextLevelXp() {
    return 1000 * this.level ** 1.2;
  }

  addXp(xp) {
    this.xp += xp;

    for (
      let xpLeft = xp;
      xp >= this.getNextLevelXp();
      xpLeft -= this.getNextLevelXp(this.level)
    ) {
      this.level++;

      console.log(`You have reached level ${this.level}`);
    }

    return this;
  }
}

const player = new Player();

player.addXp();
