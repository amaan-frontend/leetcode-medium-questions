class RandomizedSet {
    constructor() {
        this.values = [];
        this.valToIndex = new Map();
    }

    insert(val) {
        if (this.valToIndex.has(val)) {
            return false;
        }

        this.values.push(val);
        this.valToIndex.set(val, this.values.length - 1);
        return true;
    }

    remove(val) {
        if (!this.valToIndex.has(val)) {
            return false;
        }

        const indexToRemove = this.valToIndex.get(val);
        const lastVal = this.values[this.values.length - 1];

        this.values[indexToRemove] = lastVal;
        this.valToIndex.set(lastVal, indexToRemove);

        this.values.pop();
        this.valToIndex.delete(val);

        return true;
    }

    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.values.length);
        return this.values[randomIndex];
    }
}

