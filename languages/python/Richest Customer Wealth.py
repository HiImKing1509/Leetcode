class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        a = 0
        for lst in accounts:
            a = max(a, sum(lst))
        return a