{- **********
CSCI 325
HW1
14 Jan 2013
Jim Bowring
*************-}

-- delete_all returns the list y with all elements x deleted
delete_all :: (Eq a) => a -> [a] -> [a]
delete_all x y = [z | z <- y, x /= z]


-- delete_first returns the list y with the first occurrence of element x deleted
delete_first :: (Eq a) => a -> [a] -> [a]
delete_first x y = if ((head y) == x) then (tail y) else (head y) : (delete_first x (tail y))


-- delete_ second returns the list y with the second occurrence of element x deleted
delete_second :: (Eq a) => a -> [a] -> [a]
delete_second x y = 
	[z | z <- ( if (null y) 
			then y 
			else  if (((head y) == x) && (elem x (tail y))) 
				then (head y) : (delete_first x (tail y)) 
				else (head y) : (delete_second x (tail y)))]


-- associated returns a list of the second elements of each pair in y that has a first element x
associated :: (Eq a) => a -> [(a, t)] -> [t]
associated x y = [b | (a,b) <- y,a == x] 


-- sumUp returns the sum of all the integers between the two parameters (inclusive)
sumUp :: (Enum a, Num a, Ord a) => a -> a -> a
sumUp x y = if(x > y) then sum[y..x] else sum[x..y]


-- count returns the number of times element x occurs in list y
count :: (Eq a1, Num a) => a1 -> [a1] -> a
count x y  = sum[1 | z <-y, z==x] 


-- declist returns a list of numbers with each number one less that the corresponding number in the original list y
declist :: Num t => [t] -> [t]
declist y = [z-1 | z <- y]



