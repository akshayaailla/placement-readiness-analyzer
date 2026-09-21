def monkey_banana_problem(grid):
    rows = len(grid)
    cols = len(grid[0])

    
    dp = [[0] * cols for _ in range(rows)]

    
    for j in range(cols):
        dp[0][j] = grid[0][j]

    
    for i in range(1, rows):
        for j in range(cols):
            left = dp[i-1][j-1] if j-1 >= 0 else 0
            up = dp[i-1][j]
            right = dp[i-1][j+1] if j+1 < cols else 0

            dp[i][j] = grid[i][j] + max(left, up, right)

    max_bananas = max(dp[rows-1])

    return max_bananas



if __name__ == "__main__":
    grid = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    max_bananas = monkey_banana_problem(grid)
    print("Maximum number of bananas the monkey can collect:", max_bananas)
