"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Search = /** @class */ (function () {
    function Search() {
    }
    Search.minNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    };
    Search.searchMin = function (root) {
        return Search.minNode(root);
    };
    Search.maxNode = function (node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    };
    Search.searchMax = function (root) {
        return Search.maxNode(root);
    };
    Search.searchKey = function (node, key) {
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            return Search.searchKey(node.left, key);
        }
        else if (key > node.key) {
            return Search.searchKey(node.right, key);
        }
        else {
            return true;
        }
    };
    Search.searchNodeKey = function (root, key) {
        return Search.searchKey(root, key);
    };
    Search.findMinNode = function (node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node;
        }
        return null;
    };
    Search.remove = function (node, key) {
        if (!node) {
            return null;
        }
        if (key < node.key) {
            node.left = Search.remove(node, key);
            return node;
        }
        else if (key > node.key) {
            node.right = Search.remove(node, key);
            return node;
        }
        else {
            if (!node.left && !node.right) {
                // node = null; //删除
                return node;
            }
            if (!node.left) {
                node = node.right;
                return node;
            }
            if (!node.right) {
                node = node.left;
                return node;
            }
            var aux = this.findMinNode(node.right);
            node.key = aux.key;
            node.right = Search.remove(node.right, aux.key);
        }
    };
    Search.removeNode = function (root, key) {
        this.remove(root, key);
    };
    return Search;
}());
exports.default = Search;
