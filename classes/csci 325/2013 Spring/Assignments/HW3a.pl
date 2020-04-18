%BOWRING CSCI325 Spring 2013 HW3%

male(reg).
male(joe).
male(sam).

male(bill).
male(trev).

female(urs).
female(ann).
female(mag).

female(barb).
female(marie).

female(sara).

female(paula).

parent(reg, joe).
parent(reg, sam).
parent(reg, ann).
parent(reg, mag).

parent(urs, joe).
parent(urs, sam).
parent(urs, ann).
parent(urs, mag).

parent(barb, urs).
parent(barb, marie).

parent(mag, sara).

parent(bill, trev).
parent(bill, paula).

marriedTo(reg, urs).
marriedTo(trev, mag).

%1%
mother(X, Y) :- parent(X, Y), female(X).

%2%
is_mother(X) :- mother(X, Z).

%3%
daughter(X, Y) :- parent(Y, X), female(X).

%4%
child(X, Y) :- parent(Y, X).

%5%
sister(X, Y) :- parent(Z, X), parent(Z, Y), female(X), X\=Y.

%6%
aunt(X, Y) :- sister(X, Z), parent(Z, Y).

%7%
grandparent(X, Y) :- parent(X, Z), parent(Z, Y).
grandmother(X, Y) :- grandparent(X, Y), female(X).

%8%
great_aunt(X, Y) :- sister(X, Z), grandparent(Z, Y).

%9%
brother(X, Y) :- parent(Z, X), parent(Z, Y), male(X), x \= Y.
sister_in_law(X, Y) :- sister(X, Z), marriedTo(Z, Y).
sister_in_law(X, Y) :- marriedTo(X, Z), brother(Z, Y), female(X).

%10%
descendant(X, Y) :- child(X, Y).
descendant(X, Y) :- child(X, Z), descendant(Z, Y).

member(X, [X|Xs]).
member(X, [Y|Xs]) :-member(X, Ys).

append([], X, X).
append([X|Xs], Ys, [X|Zs]) :- append(Xs, Ys, Zs).

