"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("./toolkit");
class BinaryTree {
    //插入节点
    insertNode(node, newNode) {
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
    }
    //节点插入解决方案
    insert(key) {
        let newNode = {
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
    }
}
BinaryTree.root = null;
const array = toolkit_1.default.makeRandomArray(10000); //制造随机数组
const binaryTree = new BinaryTree(); //二叉树
//依照数组生成二叉树
for (const key of array)
    binaryTree.insert(key);
// //中序排序
// const medium = new Medium();
// medium.inOrderTraverse(BinaryTree.root, key => console.log(key));
// //前序遍历
// const before = new Before();
// before.preOrderTraverse(BinaryTree.root, (key: number) => console.log(key));
