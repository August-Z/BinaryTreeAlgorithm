"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Before = /** @class */ (function () {
    function Before() {
    }
    /**
     * 前序遍历，可以已最快的速度复制整课二叉树
     * @param node  节点
     * @param callback  回调函数
     */
    Before.prototype.preOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            callback(node.key); //先输出本身的值
            this.preOrderTraverse(node.left, callback); //然后遍历左侧子树
            this.preOrderTraverse(node.right, callback); //最后遍历右侧子树
        }
    };
    ;
    Before.prototype.preOrderTraverse = function (root, callback) {
        this.preOrderTraverseNode(root, callback);
    };
    return Before;
}());
exports.default = Before;
