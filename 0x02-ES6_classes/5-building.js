class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error("Building is an abstract class and cannot be instantiated directly.");
    }
    this._sqft = sqft;
  }

  // Getter for sqft attribute
  get sqft() {
    return this._sqft;
  }

  // Abstract method to be implemented by subclasses
  evacuationWarningMessage() {
    throw new Error("Class extending Building must override evacuationWarningMessage");
  }
}

class Office extends Building {
  constructor(sqft, name) {
    super(sqft);
    this._name = name;
  }

  get name() {
    return this._name;
  }

  evacuationWarningMessage() {
    return 'Evacuate the building ${this._name} immediately!';
  }
}
