# -*- coding: utf-8 -*-

books = 60
book_price = (1 - 0.4) * 24.20
logistic = 3 + (books - 1) * 0.75

cost = books * book_price + logistic

print(cost)
