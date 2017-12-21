"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("./toolkit");
var medium_1 = require("./sort/medium");
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
    BinaryTree.root = null;
    return BinaryTree;
}());
var array = toolkit_1.default.makeRandomArray(100000); //制造随机数组
var binaryTree = new BinaryTree(); //二叉树
//依照数组生成二叉树
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var key = array_1[_i];
    binaryTree.insert(key);
}
console.time('cb');
// 中序排序
var medium = new medium_1.default();
medium.inOrderTraverse(BinaryTree.root, function (key) { return console.log(key); });
console.timeEnd('cb');
// //前序遍历
// const before = new Before();
// before.preOrderTraverse(BinaryTree.root, (key: number) => console.log(key));
