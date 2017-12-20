# BinaryTreeAlgorithm
二叉树排序算法及 demo

## 二叉排序树的定义  
**二叉排序树或者是一颗空树，或者是具有下列性质的二叉树：**
1.  若左子数不空，则左子数上所有结点的值均小于或等于它的根结点的值；

2.  若右子数不空，则右子数上所有结点的值均大于或等于它的根结点的值；
3.  左、右子数也分别为二叉排序树；

```typescript
//首先定义节点的接口，节点具有：值、左子节点、右子节点
export default interface _Node {
    key: number,
    left: _Node,
    right: _Node
}
```
    
**然后我们可以设计二叉树类与解决方案**

```typescript
import _Node from "./INode";
   
class BinaryTree {
   
    public static root: _Node = null;
   
    //插入节点
    private insertNode(node: _Node, newNode: _Node): void {
        if (newNode.key < node.key) {   //如果子节点小于父节点，则站于父节点左侧
   
            if (node.left === null) {   //如果父节点左子节点为空，则直接赋值
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);    //否则继续向下寻找
            }
            
        } else {                        //如果子节点大于等于父节点，则站于父节点右侧
   
            if (node.right === null) {  //同理于左子树寻找规则
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
            
        }
    }
   
    //节点插入解决方案
    insert(key: number): void {
        //实现接口
        let newNode = { 
            key: key,
            left: null,
            right: null
        };
        if (BinaryTree.root === null) {
            BinaryTree.root = newNode;  //如果没有根节点，则将其设置为根节点
        } else {
            this.insertNode(BinaryTree.root, newNode);  //节点插入解决方案
        }
    }
    
}
```


## 二叉树的遍历
创建好了的二叉树，如果我们要访问某一节点，则需要遍历，有三种方法：  
*   中序遍历

*   前序遍历
*   后续遍历

### 中序遍历
先从左子树开始检查，如果存在左子树，则遍历左子树，如果没有则返回当前节点的值。然后再进行右子树的遍历，方法同左子树。最后返回至上一节点并返回值。最后返回根节点的值。  
```typescript
import _Node from "../INode";

class Medium {
    /**
     * 中序遍历
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
```

**我们只需要在需要遍历的地方编写下 callback 就好，比如我们将它打印：**

```typescript
//中序排序
const medium = new Medium();
medium.inOrderTraverse(BinaryTree.root, key => console.log(key));
```
