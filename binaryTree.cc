#include <iostream>
#include <stdio.h>
#include <vector>
#include <memory.h>
#include <string>
#include <algorithm>
#include <iomanip>
#include <map>
#include <fstream>
#include <stack>
#include <queue>
#include <algorithm>
#include <cmath>
using namespace std;


struct Node
{
    int value;
    Node *left;
    Node *right;
    Node(int val)
    {
        value = val;
        left = NULL;
        right = NULL;
    }
};

bool isBinarySearchTree(vector<int> & a,int start,int end)
{
    if(start >= end)
        return true;
    int i = start;
    while(i < end)
    {
        if(a[i] > a[end])
            break;
        i ++;
    }
    int j = i;
    while(j < end)
    {
        if(a[j] < a[end])
            return false;
        j ++;
    }
    return isBinarySearchTree(a,start,i-1) &&
        isBinarySearchTree(a,i,end-1);
}

void buildTree(Node *root,vector<Node*>&node)
{
    if(root == NULL)
        return;
    Node *pre = root, *p = root;
    bool tag = false;
    int i = 0;
    while(i < node.size())
    {
        p = root;
        while(p != NULL)
        {
            pre = p;
            if(node[i]->value == p->value)
            {
                tag = true;
                break;
            }
            else if(node[i]->value < p->value)
                p = p->left;
            else
                p = p->right;
        }
        if(tag)
        {
            tag = false;
            cout<<-1<<endl;
        }
        else
        {
            if(node[i]->value < pre->value)
                pre->left = node[i];
            else
                pre->right = node[i];
            cout<<pre->value<<endl;
        }

        i ++;
    }
}

void input()
{
    int n;
    while(scanf("%d",&n) != EOF)
    {
        vector<Node*> node;
        Node *root = NULL, *tmp;
        int x;
        while(n-- > 0)
        {
            scanf("%d",&x);
            tmp = new Node(x);
            node.push_back(tmp);
        }
        if(node.size() > 0)
            root = node[0];

        if(root == NULL)
            printf("-1");
        else
        {
            buildTree(root,node);
        }
    }
}

int main()
{
    input();
    return 0;
}