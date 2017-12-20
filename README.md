# BinaryTreeAlgorithm
二叉树排序算法及 demo

## 二叉排序树的定义  
**二叉排序树或者是一颗空数，或者是具有下列性质的二叉树：**
1.  若左子数不空，则左子数上所有结点的值均小于或等于它的根结点的值；

2.  若右子数不空，则右子数上所有结点的值均大于或等于它的根结点的值；
3.  左、右子数也分别为二叉排序树；

```javascript
    //首先定义节点的属性
    class Node {
        constructor(key) {
            this.key = key;
            this.left = null;
            this.right = null;
        }
    }
```

**然后我们可以设计2个函数作为节点生成解决方案:**

```javascript
    //定义根节点
    let root = null;
    
    //插入
    this.insert = key => {
        let newNode = new Node(key);
        if (root === null) {
            root = newNode; //如果没有根节点，则将新节点指定为根节点
        } else {
            insertNode(root, newNode);
        }
    };
    
    //插入节点
    let insertNode = (node, newNode) => {
        if (newNode.key < node.key) {   //如果子节点小于父节点
            
            if (node.left === null) {   //同时父节点没有左子节点
                node.left = newNode;    //直接赋值
            } else {
                insertNode(node.left, newNode);//否则继续向下寻找
            }
        
        } else {
            
            if (node.right === null) {  //判断右子树，与左子树同理
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
    
        }
    };
```


## 二叉树的遍历
创建好了的二叉树，如果我们要访问某一节点，则需要遍历，有三种方法：  
*   中序遍历

*   前序遍历
*   后续遍历

### 中序遍历
先从左子树开始检查，如果存在左子树，则遍历左子树，如果没有则返回当前节点的值。然后再进行右子树的遍历，方法同左子树。最后返回至上一节点并返回值。最后返回根节点的值。