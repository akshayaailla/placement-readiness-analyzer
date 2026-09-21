class State:
    def __init__(self, x, y, parent=None):
        self.x = x
        self.y = y
        self.parent = parent

    def is_goal(self, target):
        return self.x == target or self.y == target

    def __str__(self):
        return f"({self.x}, {self.y})"


def get_successors(state, capacities):
    successors = []
    x, y = state.x, state.y
    x_cap, y_cap = capacities

    
    successors.append(State(0, y) if x > 0 else None)


    successors.append(State(x, 0) if y > 0 else None)

    
    successors.append(State(x_cap, y) if x < x_cap else None)

    
    successors.append(State(x, y_cap) if y < y_cap else None)

    
    pour = min(x, y_cap - y)
    if pour > 0:
        successors.append(State(x - pour, y + pour))

    
    pour = min(y, x_cap - x)
    if pour > 0:
        successors.append(State(x + pour, y - pour))

    return successors


def bfs(initial_state, capacities, target):
    visited = set()
    queue = [initial_state]

    while queue:
        current_state = queue.pop(0)

        if current_state.is_goal(target):
            path = []
            while current_state:
                path.append(current_state)
                current_state = current_state.parent
            return path[::-1]

        visited.add((current_state.x, current_state.y))

        for successor in get_successors(current_state, capacities):
            if successor and (successor.x, successor.y) not in visited:
                successor.parent = current_state
                queue.append(successor)

    return None



if __name__ == "__main__":
    initial_state = State(0, 0)
    capacities = (5, 3)
    target = 4

    path = bfs(initial_state, capacities, target)

    if path:
        print("Solution path:")
        for state in path:
            print(state)
    else:
        print("No solution exists.")
