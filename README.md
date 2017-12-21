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
创建好了的二叉树，如果我们要访问某一节点，则需要遍历，有三种方法，分别具有不同的优势：  
*   中序遍历 (通常用于排序)

*   前序遍历 (适合复制整个二叉树)
*   后续遍历 (适合遍历文件系统)

### 中序遍历
中序遍历原理：从根节点开始，先从左子树遍历，遵循从左至右的原则，当遇到叶节点（即没有左右子节点）后，打印当前节点值，并返回到父节点（中间节点），打印当前父节点值，再遍历其右子节点，遇到叶节点后，打印当前节点值，并返回到父节点（中间节点），直到返回到根节点，打印节点值，再遍历右子树，方法与左子树相同。 
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


### 前序遍历  
前序遍历原理：从根节点开始，打印当前节点值，之后从左子树遍历，遵循从左至右的原则，无论遇到中间节点还是叶节点，遵循先打印当前节点值，再进行遍历。当遇到叶节点之后，返回到父节点，当左右子节点遍历完之后，回到根节点。与中序遍历最大的区别也就是 callback 与左子树检查的先后顺序(是不是很相似呢～)：

```typescript
private preOrderTraverseNode(node: _Node, callback: any): void {
    if (node !== null) {
        callback(node.key);    //先输出本身的值
        this.preOrderTraverse(node.left, callback);   //然后遍历左侧子树
        this.preOrderTraverse(node.right, callback);  //最后遍历右侧子树
    }
}
```

### 后序遍历  
有了前两种的区别后，其实可以意识到：遍历的方法是与"回调函数"、左子树与右子树的访问顺序有关的，那么后序遍历的代码就不再赘述了，当然项目中是有后序遍历的代码的！ :)