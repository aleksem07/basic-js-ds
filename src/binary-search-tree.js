const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  root() {
    return this.data ? this.data : null;
  }

  add(data) {
    if (!this.data) {
      this.data = data;
    }
    if (data < this.data) {
      if (!this.left) {
        this.left = new BinarySearchTree(data);
      } else {
        this.left.add(data);
      }
    }
    if (data > this.data) {
      if (!this.right) {
        this.right = new BinarySearchTree(data);
      } else {
        this.right.add(data);
      }
    }
  }

  has(data) {
    !!this.remove(data);
  }

  find(data) {
    // console.debug('find' + data);
    return searchFind(this.data, data);

    function searchFind(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return data;
      }
      return data < node.data ? searchFind(node.left, data) : searchFind(node.rigth, data);
    }
  }

  remove(data) {
    this.data = remove(this.data, data);

    function remove(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = remove(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = remove(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = remove(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.left) {
      return;
    }

    let min = this.left;
    while (min.left) {
      min = min.left;
    }
    return min.data;
  }

  max() {
    if (!this.right) {
      return;
    }

    let max = this.right;
    while (max.right) {
      max = max.right;
    }
    return max.data;
  }
}

module.exports = {
  BinarySearchTree,
};
