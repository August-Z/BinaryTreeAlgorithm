import Toolkit from './toolkit';

interface _Node {
    key: number,
    left: _Node,
    right: _Node
}

class BinaryTree {

    private static root: _Node = null;

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

    /**
     * 中序遍历
     * @param node
     * @param callback
     */
    private inOrderTraverseNode(node: _Node, callback: any): void {
        if (node !== null) {
            this.inOrderTraverseNode(node.left, callback);   //先遍历左侧子树
            callback(node.key);    //再输出本身的值
            this.inOrderTraverseNode(node.right, callback);  //最后遍历右侧子树
        }
    };

    inOrderTraverse(callback): void {
        this.inOrderTraverseNode(BinaryTree.root, callback);
    }

}


const array = Toolkit.makeRandomArray(10000);   //制造随机数组
const binaryTree = new BinaryTree();    //二叉树

//依照数组生成二叉树
for (const key of array) {
    binaryTree.insert(key);
}
binaryTree.inOrderTraverse((key) => {
    console.log(key);
});


