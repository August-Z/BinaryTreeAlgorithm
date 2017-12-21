import _Node from "../INode";

class Search {

    private static minNode(node: _Node): any {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    }

    public static searchMin(root: _Node): number {
        return Search.minNode(root);
    }

    private static maxNode(node: _Node): any {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    }

    public static searchMax(root: _Node): number {
        return Search.maxNode(root);
    }

    private static searchKey(node: _Node, key: number): boolean {
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            return Search.searchKey(node.left, key);
        } else if (key > node.key) {
            return Search.searchKey(node.right, key);
        } else {
            return true;
        }
    }

    public static searchNodeKey(root: _Node, key: number): boolean {
        return Search.searchKey(root, key);
    }

    private static findMinNode(node: _Node): any {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node;
        }
        return null;
    }

    private static remove(node: _Node, key: number): any {
        if (!node) {
            return null;
        }
        if (key < node.key) {
            node.left = Search.remove(node, key);
            return node;
        } else if (key > node.key) {
            node.right = Search.remove(node, key);
            return node;
        } else {
            if (!node.left && !node.right) {
                // node = null; //删除
                return node;
            }
            if (!node.left) {
                node = node.right;
                return node;
            }
            if (!node.right) {
                node = node.left;
                return node;
            }

            let aux = this.findMinNode(node.right);
            node.key = aux.key;
            node.right = Search.remove(node.right, aux.key);
        }
    }

    public static removeNode(root: _Node, key: number): any {
        this.remove(root, key);
    }

}

export default Search;