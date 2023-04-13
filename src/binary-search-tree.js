const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.treeStart = null;
  }
  root() {
    return this.treeStart;
  }

  add(data) {
    this.treeStart = add(this.treeStart, data);

    function add(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data <= node.left) {
        node.left = add(node.left, data);
      } else {
        node.left = add(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchHas(this.treeStart, data);
    function searchHas(node, data) {
      if (!node) {
        return false;
      }
      if (node.data == data) {
        return true;
      }
      return data < node.data ? searchHas(node.left, data) : searchHas(node.rigth, data);
    }
  }

  find(/*data*/) {
    throw new NotImplementedError('Not implemented');
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
