import itertools

def tsp_brute_force(graph):
    num_vertices = len(graph)
    min_distance = float('inf')
    min_path = None

    for path in itertools.permutations(range(num_vertices)):
        distance = 0

        for i in range(num_vertices):
            distance += graph[path[i-1]][path[i]]

        if distance < min_distance:
            min_distance = distance
            min_path = path

    return min_path, min_distance



if __name__ == "__main__":
    graph = [
        [0, 10, 15, 20],
        [10, 0, 35, 25],
        [15, 35, 0, 30],
        [20, 25, 30, 0]
    ]

    min_path, min_distance = tsp_brute_force(graph)

    print("Minimum path:", min_path)
    print("Minimum distance:", min_distance)
