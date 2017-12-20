"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("./toolkit");
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
    }
    //插入节点
    BinaryTree.prototype.insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    };
    //节点插入解决方案
    BinaryTree.prototype.insert = function (key) {
        var newNode = {
            key: key,
            left: null,
            right: null
        };
        if (BinaryTree.root === null) {
            BinaryTree.root = newNode;
        }
        else {
            this.insertNode(BinaryTree.root, newNode);
        }
    };
    /**
     * 中序遍历
     * @param node
     * @param callback
     */
    BinaryTree.prototype.inOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            this.inOrderTraverseNode(node.left, callback); //先遍历左侧子树
            callback(node.key); //再输出本身的值
            this.inOrderTraverseNode(node.right, callback); //最后遍历右侧子树
        }
    };
    ;
    BinaryTree.prototype.inOrderTraverse = function (callback) {
        this.inOrderTraverseNode(BinaryTree.root, callback);
    };
    BinaryTree.root = null;
    return BinaryTree;
}());
var array = toolkit_1.default.makeRandomArray(10000); //制造随机数组
var binaryTree = new BinaryTree(); //二叉树
//依照数组生成二叉树
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var key = array_1[_i];
    binaryTree.insert(key);
}
binaryTree.inOrderTraverse(function (key) {
    console.log(key);
});
