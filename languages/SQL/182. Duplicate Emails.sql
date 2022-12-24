-- link: https://leetcode.com/problems/duplicate-emails/description/

-- Solution
SELECT email as Email
FROM Person
GROUP BY email
HAVING COUNT(email) > 1