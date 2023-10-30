class TrieNode {
    constructor() {
        this.children = new Map();
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(num) {
        let node = this.root;

        for (let i = 31; i >= 0; i--) {
            const bit = (num >> i) & 1;

            if (!node.children.has(bit)) {
                node.children.set(bit, new TrieNode());
            }

            node = node.children.get(bit);
        }
    }

    findMaxXOR(num) {
        let node = this.root;
        let result = 0;

        for (let i = 31; i >= 0; i--) {
            const bit = (num >> i) & 1;
            const oppositeBit = bit ^ 1;

            if (node.children.has(oppositeBit)) {
                result |= (1 << i);
                node = node.children.get(oppositeBit);
            } else {
                node = node.children.get(bit);
            }
        }

        return result;
    }
}

function findMaximumXOR(nums) {
    const trie = new Trie();
    let maxXOR = 0;

    for (const num of nums) {
        trie.insert(num);
        maxXOR = Math.max(maxXOR, trie.findMaxXOR(num));
    }

    return maxXOR;
}
