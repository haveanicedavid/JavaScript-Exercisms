'use strict';

class School {
  constructor() {
    this.currentRoster = {};
  }

  roster() {
    return this.currentRoster;
  }

  add(name, grade) {
    if (this.currentRoster[grade]) {
      this.currentRoster[grade].push(name);
      this.currentRoster[grade].sort();
    } else {
      this.currentRoster[grade] = [name];
    }
  }

  grade(grade) {
    return this.currentRoster[grade] || [];
  }
}

module.exports = School;
