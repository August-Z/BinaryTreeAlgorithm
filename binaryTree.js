"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("./toolkit");
var search_1 = require("./search/search");
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
var array = toolkit_1.default.makeRandomArray(50000); //制造随机数组
var binaryTree = new BinaryTree(); //二叉树
//依照数组 => 生成二叉树
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var key = array_1[_i];
    binaryTree.insert(key);
}
// 中序排序
// const medium = new Medium();
// medium.inOrderTraverse(BinaryTree.root, (key: number) => console.log(key));
//前序遍历
// const before = new Before();
// before.preOrderTraverse(BinaryTree.root, (key: number) => console.log(key));
//后序遍历
// const after = new After();
// after.afterOrderTraverse(BinaryTree.root, (key: number) => console.log(key));
//查找树最小值
var minByTree = search_1.default.searchMin(BinaryTree.root);
console.log("\u4E8C\u53C9\u6811\u6700\u5C0F\u503C\uFF1A" + minByTree);
//查找树最大值
var maxByTree = search_1.default.searchMax(BinaryTree.root);
console.log("\u4E8C\u53C9\u6811\u6700\u5927\u503C\uFF1A" + maxByTree);
//查找某一个数是否存在于二叉树中
var isHas = search_1.default.searchNodeKey(BinaryTree.root, 123);
console.log(BinaryTree.root ? "存在" : "不存在");
//删除二叉树中的某一个数
search_1.default.removeNode(BinaryTree.root, 0);
