# 链表

::: tip 链表题常规思路：

1. 虚拟头结点法
2. 快慢指针法
   :::

---

## 19 删除链表的倒数第 N 个节点.

### 题目描述

给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

> 给定一个链表: 1->2->3->4->5, 和 n = 2.
> 当删除了倒数第二个节点后，链表变为 1->2->3->5.

说明：

给定的 n 保证是有效的。

进阶：

你能尝试使用一趟扫描实现吗？

---

### 实现

```java
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode current = head;
        List<ListNode> list  = new ArrayList<ListNode>();
        while(current!=null){
            list.add(current);
            current = current.next;
        }

        int index = list.size()-n-1;//待删除前一个node
        if(index==-1) {//说明待删除的是第一个node
            return list.get(0).next;
        }
        list.get(index).next = list.get(index).next.next;

        return list.get(0);
    }
```

用间：9ms
战胜：91.31%

---

### 反思

最先想到的思路就是放到一个 ArrayList 里边，遍历一遍链表就有各自的顺序了，然后找到 list 对应序号结点的 node，让它指向下下个 node。
但是这种方式无法将所有情况统一处理，不是出题者想考察的。

实际上，链表题目有一个固有的结题思路，就是在链表的头部加一个 dummy head（哑结点）。如此，一些极端的情况（如链表只有一个结点）就得以统一处理。

运用这个思路，我们先尝试两次遍历的算法。即，第一次遍历链表的长度，第二次遍历到目标结点，使之指向下下个结点

---

### 优化

```java
public ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    int length  = 0;
    ListNode first = head;
    while (first != null) {
        length++;
        first = first.next;
    }
    length -= n;
    first = dummy;
    while (length > 0) {
        length--;
        first = first.next;
    }
    first.next = first.next.next;
    return dummy.next;
}
```

复杂度分析

> 时间复杂度：O(L)，
> 该算法对列表进行了两次遍历，首先计算了列表的长度 L 其次找到第 (L - n>)个结点。 操作执行了 2L-n 步，时间复杂度为 O(L)。
>
> 空间复杂度：O(1)，
> 我们只用了常量级的额外空间。

---

### 反思

题目在“进阶”处给出思考，能否用一次遍历实现？答案肯定是能。如果同时遍历两个链表，一个是从头开始遍历，而另外一个呢是从头开始第 n 的结点开始遍历。那么，当我遍历完第二个链表时，第一个链表更好遍历到目标结点，将其 next 指向下下个结点即可。

---

### 一次遍历实现

```java
public ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    ListNode first = dummy;
    ListNode second = dummy;
    // Advances first pointer so that the gap between first and second is n nodes apart
    for (int i = 1; i <= n + 1; i++) {
        first = first.next;
    }
    // Move first to the end, maintaining the gap
    while (first != null) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;
}
```

复杂度分析

> 时间复杂度：O(L)，
> 该算法对含有 L 个结点的列表进行了一次遍历。因此时间复杂度为 O(L)。
> 空间复杂度：O(1)，
> 我们只用了常量级的额外空间。

---

### 总结

1. 链表解题模板，先在头部建立 dummy head，方便处理特殊情况问题。
2. 还是以空间换时间

## 206 反转链表.

### 题目描述

反转一个单链表。

示例:

> 输入: 1->2->3->4->5->NULL
> 输出: 5->4->3->2->1->NULL

进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

---

### 思考

有的时候不妨可以先试试递归的解法，将复杂的问题化简为一个相同的小问题。反而能让你缕清思路。

> 注，原地翻转，一般是需要两个指针变量来实现。

---

### 递归实现

```java
	public ListNode reverseList(ListNode head) {
        if (head == null) {
            return head;
        }
        ListNode dummy = null;
        return reverseList(head,dummy);
    }

    public ListNode reverseList(ListNode currentNode,ListNode lastNode){
        //递归到底的情况
        if(currentNode.next == null){
            currentNode.next = lastNode;
            return currentNode;
        }

        //正常情况
        //解释一下，每个步骤分为三个结点，分别为“上一个结点”，“当前结点”和“下一个结点”
        ListNode nextNode = currentNode.next;//备份下一个结点
        currentNode.next = lastNode;//将当前结点的指针指向上一个结点
        lastNode = currentNode;//上一个结点的指针指向当前结点
        currentNode = nextNode;//当前结点的指针指向下一个结点
        return reverseList(currentNode,lastNode);
    }
```

---

### 迭代实现

用迭代的方法描述这个步骤为：

```java
public ListNode reverseList(ListNode head) {
       if (head == null) {
           return head;
       }
       ListNode pre = null;
       while (head != null) {
           ListNode newCurrent = head.next;
           head.next = pre;
           pre = head;
           head = newCurrent;
       }
       return pre;
   }
```

---

### 总结

1. 翻转的题目一般需要两个指针协助完成，看到“翻转”想到“双指针”。
2. 递归写法的小技巧。分为“递归到底的情况”和“正常情况”。将化繁为单一的递归问题再次拆分。






<comment-comment/>