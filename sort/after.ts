import _Node from "../INode";

class After {
    /**
     * 前序遍历，可以已最快的速度复制整课二叉树
     * @param node  节点
     * @param callback  回调函数
     */
    private afterOrderTraverseNode(node: _Node, callback: any): void {
        if (node !== null) {
            this.afterOrderTraverse(node.left, callback);   //先遍历左侧子树
            this.afterOrderTraverse(node.right, callback);  //然后遍历右侧子树
            callback(node.key);    //最后输出本身的值
        }
    };

    afterOrderTraverse(root: _Node, callback: object): void {
        this.afterOrderTraverseNode(root, callback);
    }

}

export default After;