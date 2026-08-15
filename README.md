# 🧠 Data Structures & Algorithms

A collection of my **Data Structures & Algorithms and LeetCode solutions implemented primarily in C++**.

This repository focuses on solving algorithmic problems using efficient data structures, identifying common problem-solving patterns, and analyzing **time and space complexity**.

---

## 💻 Language

### C++

<p>
  <img src="https://skillicons.dev/icons?i=cpp" height="48" />
</p>

Solutions are primarily implemented in **C++**, making use of the Standard Template Library (STL).

### C++ STL

```text
vector
string
pair

unordered_map
unordered_set
map
set

stack
queue
deque
priority_queue

sort
binary_search
lower_bound
upper_bound

algorithm
numeric
```

---

# 📚 Topics Covered

## Arrays

Core concepts:

* Array traversal
* Index manipulation
* In-place operations
* Running values
* Min / Max
* Duplicate detection
* Array rotation
* Product calculations
* Time and space optimization

Common patterns:

* Hashing
* Two Pointers
* Sliding Window
* Prefix Sum
* Sorting
* Binary Search

---

## Hash Maps & Hash Sets

Concepts:

* Key-value storage
* Constant-time average lookup
* Frequency counting
* Duplicate detection
* Membership checking
* Character counting

Common applications:

```text
Fast Lookup
Frequency Counting
Duplicate Detection
Previously Seen Values
Value → Index Mapping
```

---

## Strings

Concepts:

* String traversal
* Character manipulation
* Character frequencies
* Substrings
* Palindrome detection
* String comparison
* String construction

Common patterns:

* Two Pointers
* Sliding Window
* Hashing
* Frequency Maps

---

## Sorting

Concepts:

* Comparison-based sorting
* Custom comparators
* Stable vs unstable sorting
* Merge Sort
* Quick Sort intuition
* `O(n log n)` sorting

Key idea:

> Sorting can expose structure that makes a difficult problem easier to solve.

---

## Two Pointers

Common signals:

* Sorted input
* Pair / triplet relationships
* Comparing opposite ends
* Palindromes
* Partitioning

Typical structure:

```text
Left → → → ← ← ← Right
```

Common applications:

* Pair finding
* Palindrome validation
* Container problems
* 3Sum-style problems

---

## Sliding Window

### Fixed Window

```text
[ 1  2  3 ] 4  5  6

     ↓

1 [ 2  3  4 ] 5  6
```

### Variable Window

```text
Expand Right
      ↓
Maintain State
      ↓
Condition Invalid?
      ↓
Shrink Left
```

Common applications:

* Longest substring
* Shortest subarray
* Maximum/minimum contiguous ranges
* Character frequency windows
* Subarray constraints

---

## Prefix Sum

Concept:

```text
Input

[2, 4, 1, 3]

Prefix

[2, 6, 7, 10]
```

Used for:

* Range sums
* Running totals
* Subarray calculations
* Prefix state
* Prefix Sum + HashMap problems

---

## Stack

Concept:

```text
LIFO

Push
 ↓
┌─────┐
│  C  │ ← Top
├─────┤
│  B  │
├─────┤
│  A  │
└─────┘
```

Common patterns:

* Matching
* Nested structures
* Previous/next greater element
* Monotonic stack

Applications include:

* Parentheses validation
* Temperature problems
* Next Greater Element
* Expression processing

---

## Queue & Deque

Concept:

```text
FIFO

Front → [ A ][ B ][ C ] ← Back
```

Topics:

* Queue operations
* Deque operations
* FIFO processing
* Queue-based traversal

Queues are especially important for **Breadth-First Search**.

---

## Linked Lists

Concepts:

* Nodes
* Traversal
* Insert
* Delete
* Pointer manipulation
* Linked list reversal

Patterns:

```text
Dummy Node
Fast / Slow Pointers
Pointer Reversal
Two Pointers
```

Common problems:

* Reverse Linked List
* Cycle Detection
* Find Middle
* Merge Lists
* Remove Nth Node
* Reorder List

---

# 🔎 Binary Search

Binary search is used when part of the search space can safely be eliminated.

```text
Search Space

[ 1  3  5  7  9  11  13 ]

             ↓

          midpoint

             ↓

Discard Half
```

Topics:

* Standard binary search
* Search boundaries
* First / last occurrence
* Search insert position
* Rotated sorted arrays
* Binary search on answer

### Complexity

```text
Time:  O(log n)
Space: O(1)
```

---

# 🔁 Recursion

Core concepts:

```text
Base Case
    +
Recursive Case
    +
Progress Toward Base Case
```

Topics:

* Call stack
* Recursive return values
* Recursive traversal
* Recursion trees

Recursion forms the foundation for:

* Trees
* DFS
* Backtracking
* Dynamic Programming

---

# 🔀 Backtracking

Core pattern:

```text
Choose
  ↓
Explore
  ↓
Undo
```

Used for generating or exploring possible solutions.

Common applications:

* Subsets
* Permutations
* Combinations
* Combination Sum
* Word Search

---

# 🌳 Trees

Core concepts:

* Nodes
* Parent / child relationships
* Leaves
* Height
* Depth
* Subtrees
* Binary trees
* Binary Search Trees

---

## Depth-First Search — DFS

Traversal strategies:

```text
Preorder
Root → Left → Right

Inorder
Left → Root → Right

Postorder
Left → Right → Root
```

DFS is commonly useful when reasoning about:

* Paths
* Subtrees
* Children
* Tree depth
* Recursive relationships

---

## Breadth-First Search — BFS

BFS explores a tree **level by level**.

```text
        1
       / \
      2   3
     / \   \
    4   5   6

BFS:

1 → 2 → 3 → 4 → 5 → 6
```

Common applications:

* Level-order traversal
* Minimum depth
* Nearest node
* Right-side view

---

## Binary Search Trees

BST property:

```text
        Root
       /    \
   Smaller  Larger
```

Topics:

* BST search
* BST validation
* Kth smallest element
* Lowest common ancestor

---

# ⛰️ Heap / Priority Queue

Used when repeatedly accessing the **smallest or largest element**.

Topics:

* Min Heap
* Max Heap
* Push
* Pop
* Peek
* Heapify
* Priority Queue

Common applications:

```text
Top K
Kth Largest
Kth Smallest
Closest K Elements
Repeated Min / Max
```

Typical complexity:

```text
Insert: O(log n)
Remove: O(log n)
Peek:   O(1)
```

---

# 🕸️ Graphs

Core concepts:

```text
Vertices
Edges
Directed Graphs
Undirected Graphs
Adjacency Lists
Visited Sets
```

Example:

```text
A ─── B
│     │
│     │
C ─── D
```

---

## Graph DFS

Useful for:

* Connected components
* Island problems
* Path exploration
* Cycle detection
* Graph traversal

---

## Graph BFS

Useful for:

* Shortest paths in unweighted graphs
* Minimum number of steps
* Level-based exploration
* Grid traversal

---

## Topological Sort

Used when relationships contain **dependencies**.

```text
A → B → D
 \→ C ↗
```

Common applications:

* Course scheduling
* Dependency resolution
* Directed Acyclic Graphs

---

## Union Find

Used for efficiently tracking **connected components**.

Core operations:

```text
Find
Union
Connected
```

Useful for:

* Connectivity
* Cycle detection
* Grouping connected objects

---

# 🧮 Dynamic Programming

Dynamic Programming is useful when a problem contains **repeated subproblems**.

The general progression:

```text
Brute-Force Recursion
        ↓
Repeated Subproblems
        ↓
Memoization
        ↓
Tabulation
        ↓
Optimized DP
```

---

## 1D Dynamic Programming

Examples include:

* Climbing Stairs
* House Robber
* Min Cost Climbing Stairs
* Decode Ways

A key question for every DP problem:

> **What does `dp[i]` represent?**

---

## 2D / Grid Dynamic Programming

Common applications:

* Grid traversal
* Unique paths
* Minimum path problems
* Longest Common Subsequence

---

## Knapsack Patterns

Topics include:

* Coin Change
* Partition Equal Subset Sum
* Subset selection problems

---

# 🧩 Pattern Recognition Reference

| Problem Signal              | Pattern / Data Structure    |
| --------------------------- | --------------------------- |
| Need fast lookup            | HashMap / HashSet           |
| Sorted + pair relationship  | Two Pointers                |
| Contiguous range            | Sliding Window / Prefix Sum |
| Search space can be divided | Binary Search               |
| Matching / nesting          | Stack                       |
| Next greater / smaller      | Monotonic Stack             |
| Cycle / midpoint            | Fast & Slow Pointers        |
| Repeated smallest/largest   | Heap                        |
| Top K elements              | Heap                        |
| Tree path / subtree         | DFS                         |
| Level / nearest             | BFS                         |
| Connected objects           | Graph DFS/BFS / Union Find  |
| Dependencies                | Topological Sort            |
| Generate possibilities      | Backtracking                |
| Repeated subproblems        | Dynamic Programming         |

These are **signals rather than absolute rules**. The appropriate algorithm still depends on the constraints and structure of the problem.

---

# ⏱️ Complexity Reference

## Common Time Complexities

| Complexity   | Description  |
| ------------ | ------------ |
| `O(1)`       | Constant     |
| `O(log n)`   | Logarithmic  |
| `O(n)`       | Linear       |
| `O(n log n)` | Linearithmic |
| `O(n²)`      | Quadratic    |
| `O(2ⁿ)`      | Exponential  |
| `O(n!)`      | Factorial    |

---

## Common Data Structure Operations

| Data Structure | Operation  | Average Complexity |
| -------------- | ---------- | -----------------: |
| Array / Vector | Access     |             `O(1)` |
| Array / Vector | Search     |             `O(n)` |
| Hash Map       | Lookup     |             `O(1)` |
| Hash Set       | Lookup     |             `O(1)` |
| Stack          | Push / Pop |             `O(1)` |
| Queue          | Push / Pop |             `O(1)` |
| Heap           | Insert     |         `O(log n)` |
| Heap           | Remove     |         `O(log n)` |
| Balanced BST   | Search     |         `O(log n)` |
| Binary Search  | Search     |         `O(log n)` |

---

# 🗺️ Topic Map

```text
Data Structures & Algorithms
│
├── Arrays
│   ├── Hashing
│   ├── Two Pointers
│   ├── Sliding Window
│   └── Prefix Sum
│
├── Strings
│   ├── Hashing
│   ├── Two Pointers
│   └── Sliding Window
│
├── Sorting
│
├── Linked Lists
│   ├── Reversal
│   └── Fast / Slow Pointers
│
├── Stack
│   └── Monotonic Stack
│
├── Queue / Deque
│
├── Binary Search
│
├── Recursion
│   └── Backtracking
│
├── Trees
│   ├── DFS
│   ├── BFS
│   └── BST
│
├── Heap / Priority Queue
│
├── Graphs
│   ├── DFS
│   ├── BFS
│   ├── Topological Sort
│   └── Union Find
│
└── Dynamic Programming
    ├── 1D DP
    ├── 2D DP
    └── Knapsack
```

---

# 📂 Repository

Solutions in this repository are automatically synced from **LeetCode using LeetSync**.

The repository contains solutions covering:

```text
Arrays & Strings
Hashing
Sorting
Two Pointers
Sliding Window
Prefix Sum
Stack
Queue / Deque
Linked Lists
Binary Search
Recursion
Backtracking
Trees
DFS
BFS
Binary Search Trees
Heap / Priority Queue
Graphs
Topological Sort
Union Find
Greedy Algorithms
Dynamic Programming
```

---

# 🤝 Connect With Me

<p align="left">

  <a href="https://www.linkedin.com/in/korra-maheshwari/">
    <img src="https://img.shields.io/badge/LinkedIn-Maheshwari%20Korra-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>

  <a href="mailto:maheshwari.korra16@gmail.com">
    <img src="https://img.shields.io/badge/Email-Contact%20Me-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>

</p>

---

### C++ • Data Structures • Algorithms • Problem Solving
