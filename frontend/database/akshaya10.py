import math

def minimax_with_ab_pruning(node, depth, alpha, beta, maximizingPlayer):
    if depth == 0 or node.is_terminal():
        return node.evaluate(), None

    if maximizingPlayer:
        max_val = -math.inf
        best_move = None
        for child in node.get_children():
            val, _ = minimax_with_ab_pruning(child, depth - 1, alpha, beta, False)
            max_val = max(max_val, val)
            alpha = max(alpha, val)
            if beta <= alpha:
                break
            if val == max_val:
                best_move = child.get_last_move()
        return max_val, best_move

    else:
        min_val = math.inf
        best_move = None
        for child in node.get_children():
            val, _ = minimax_with_ab_pruning(child, depth - 1, alpha, beta, True)
            min_val = min(min_val, val)
            beta = min(beta, val)
            if beta <= alpha:
                break
            if val == min_val:
                best_move = child.get_last_move()
        return min_val, best_move


class Node:
    def __init__(self, value, children=None, last_move=None):
        self.value = value
        self.children = children or []
        self.last_move = last_move

    def is_terminal(self):
        return not self.children

    def evaluate(self):
        return self.value

    def get_children(self):
        return self.children

    def get_last_move(self):
        return self.last_move


if __name__ == "__main__":
    
    node1 = Node(3, last_move='A')
    node2 = Node(6, last_move='B')
    node3 = Node(12, last_move='C')
    node4 = Node(4, last_move='D')
    node5 = Node(5, last_move='E')

    root = Node(0, [node1, node2, node3, node4, node5])


    optimal_value, best_move = minimax_with_ab_pruning(root, 3, -math.inf, math.inf, True)

    print("Optimal value:", optimal_value)
    print("Best move:", best_move)
