"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Medium = /** @class */ (function () {
    function Medium() {
    }
    /**
     * 中序遍历，多用于排序整颗二叉树
     * @param node  节点
     * @param callback  回调函数
     */
    Medium.prototype.inOrderTraverseNode = function (node, callback) {
        if (node !== null) {
            this.inOrderTraverseNode(node.left, callback); //先遍历左侧子树
            callback(node.key); //再输出本身的值
            this.inOrderTraverseNode(node.right, callback); //最后遍历右侧子树
        }
    };
    ;
    Medium.prototype.inOrderTraverse = function (root, callback) {
        this.inOrderTraverseNode(root, callback);
    };
    return Medium;
}());
exports.default = Medium;
