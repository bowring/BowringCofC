{- **********
CSCI 325
HW2
23 Jan 2013
Jim Bowring
*************-}


-- 1. Write a Haskell function isaPalindrome to determine whether a list is a palindrome.

isaPalindrome :: (Eq b) => [b] -> Bool
isaPalindrome xs = xs == (reverse xs)

-- alternate
isaPalindrome' :: (Eq b) => [b] -> Bool
isaPalindrome' []  = True
isaPalindrome' [_] = True
isaPalindrome' xs  = (head xs) == (last xs) && (isaPalindrome' $ init $ tail xs)

{- 2. Write a Haskell function myFlatten to transform a list, possibly holding lists as elements into a 
`flat' list by replacing each list with its elements (recursively).-}

data ListOfLists b = Elem b | List [ListOfLists b]
 
myFlatten :: ListOfLists b -> [b]
myFlatten (Elem a) = [a]
myFlatten (List (x:xs)) = myFlatten x ++ myFlatten (List xs)
myFlatten (List []) = []

--myFlatten (List [Elem 1, List [Elem 2, List [Elem 3, Elem 4], Elem 5]])


{- 3. Write a Haskell function myCompress that eliminates consecutive duplicates of list elements. -}

myCompress :: Eq a => [a] -> [a]
myCompress x = foldr (\a b -> if a == (head b) then b else a:b) [last x] x

{- 4. Write a Haskell function myPack that places consecutive duplicates of list elements into sublists.-}

myPack :: (Eq a) => [a] -> [[a]]
myPack [] = []
myPack [x] = [[x]]
myPack (x:xs) = if x `elem` (head (myPack xs))
              then (x:(head (myPack xs))):(tail (myPack xs))
              else [x]:(myPack xs)

{- 5. Write a Haskell function myEncode that places consecutive duplicates of list elements into 
pairs (n, e) where n is the number of element e. -}

myEncode xs = map (\x -> (length x,head x)) (myPack xs)














