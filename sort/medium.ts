import _Node from "../INode";

class Medium {
    /**
     * 中序遍历，多用于排序整颗二叉树
     * @param node  节点
     * @param callback  回调函数
     */
    private inOrderTraverseNode(node: _Node, callback: any): void {
        if (node !== null) {
            this.inOrderTraverseNode(node.left, callback);   //先遍历左侧子树
            callback(node.key);    //再输出本身的值
            this.inOrderTraverseNode(node.right, callback);  //最后遍历右侧子树
        }
    };

    inOrderTraverse(root: _Node, callback: object): void {
        this.inOrderTraverseNode(root, callback);
    }
}

export default Medium;
