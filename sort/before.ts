import _Node from "../INode";

class Before{
    /**
     * 前序遍历，可以已最快的速度复制整课二叉树
     * @param node  节点
     * @param callback  回调函数
     */
    private preOrderTraverseNode(node: _Node, callback: any): void {
        if (node !== null) {
            callback(node.key);    //先输出本身的值
            this.preOrderTraverse(node.left, callback);   //然后遍历左侧子树
            this.preOrderTraverse(node.right, callback);  //最后遍历右侧子树
        }
    };

    preOrderTraverse(root: _Node, callback: object): void {
        this.preOrderTraverseNode(root,callback);
    }

}

export default Before;