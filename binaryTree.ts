import Toolkit from './toolkit';
import _Node from "./INode";
import Medium from "./sort/medium";
import Before from "./sort/before";
import After from "./sort/after";
import Search from "./search/search";

class BinaryTree {

    public static root: any = null;

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
        let newNode: any = {
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

const array = Toolkit.makeRandomArray(50000);   //制造随机数组
const binaryTree = new BinaryTree();    //二叉树

//依照数组 => 生成二叉树
for (const key of array) {
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
const minByTree = Search.searchMin(BinaryTree.root);
console.log(`二叉树最小值：${minByTree}`);

//查找树最大值
const maxByTree = Search.searchMax(BinaryTree.root);
console.log(`二叉树最大值：${maxByTree}`);

//查找某一个数是否存在于二叉树中
const isHas = Search.searchNodeKey(BinaryTree.root, 123);
console.log(BinaryTree.root ? "存在" : "不存在");

//删除二叉树中的某一个数
Search.removeNode(BinaryTree.root,0);