class Player {
  level = 1;
  xp = 0;
  tasks = [];

  constructor(name) {
    this.name = name;
  }

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

class Task {
  #xpMultiplier;
  #streak = 1;
  isActive = true;
  #xp;

  constructor(name, description, xpMultiplier) {
    this.name = name;
    this.description = description;
    this.#xpMultiplier = xpMultiplier;

    this.#xp = this.#xpMultiplier * 100;
  }

  get streak() {
    return this.#streak;
  }

  extendStreak() {
    this.#streak++;
    return this;
  }

  get totalXp() {
    return this.#xp * this.#streak ** 0.3;
  }

  get xpFromStreak() {
    return this.totalXp - this.#xp;
  }

  changeIsActive() {
    this.isActive = !this.isActive;
  }
}

const player = new Player("Kacper");
const task = new Task("zakupy", "kupic chleb i maslo", 1);

player.addXp();

console.log(task.extendStreak().extendStreak().xpFromStreak);
