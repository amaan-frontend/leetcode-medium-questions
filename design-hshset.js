class MyHashSet {
    constructor() {
        this.set = [];
    }

    add(key) {
        const index = this.hash(key);
        if (!this.set[index]) {
            this.set[index] = [];
        }
        if (!this.set[index].includes(key)) {
            this.set[index].push(key);
        }
    }

    remove(key) {
        const index = this.hash(key);
        if (this.set[index]) {
            this.set[index] = this.set[index].filter(k => k !== key);
        }
    }

    contains(key) {
        const index = this.hash(key);
        return !!this.set[index] && this.set[index].includes(key);
    }

    hash(key) {
        return key % 769; // Use a prime number to reduce collisions
    }
}

