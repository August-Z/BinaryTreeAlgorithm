import Toolkit from './toolkit';
import _Node from "./INode";
import Medium from "./sort/medium";

class BinaryTree {

    public static root: _Node = null;

    //插入节点
    private insertNode(node: _Node, newNode: _Node): void {
        if (newNode.key < node.key) {

            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }

        } else {

            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }

        }
    }

    //节点插入解决方案
    insert(key: number): void {
        let newNode = {
            key: key,
            left: null,
            right: null
        };
        if (BinaryTree.root === null) {
            BinaryTree.root = newNode;
        } else {
            this.insertNode(BinaryTree.root, newNode);
        }
    }

}


const array = Toolkit.makeRandomArray(10000);   //制造随机数组
const binaryTree = new BinaryTree();    //二叉树

//依照数组生成二叉树
for (const key of array) binaryTree.insert(key);

//中序排序
const medium = new Medium();
medium.inOrderTraverse(BinaryTree.root, key => console.log(key));




