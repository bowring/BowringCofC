%Bowring CSCI325 HW4


% addatrear(X, oldlist, newlist).
addatrear(X, [], [X]).
addatrear(X, [Y|L], [Y|L1]) :- addatrear(X, L, L1).

% deletefromrear(oldlist, X, newlist).
deletefromrear([X|[]], X, []).
deletefromrear([A|L], X, [A|L1]) :- deletefromrear(L, X, L1).

% rotateright(oldlist, newlist).
rotateright([], []).
rotateright([X|Xs], R) :- addatrear(X, Xs, R).

% rotateleft(oldlist, newlist).
rotateleft([], []).
rotateleft(L, [X|Xs]) :- deletefromrear(L, X, Xs).
