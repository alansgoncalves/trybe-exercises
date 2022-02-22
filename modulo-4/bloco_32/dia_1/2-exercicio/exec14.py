# -*- coding: utf-8 -*-

#Exemplo 1
ratings = [6, 8, 5, 9, 10]
new_ratings = []

for rating in ratings:
    new_ratings.append(rating * 10)

print(new_ratings)

#Exemplo 2
ratings = [6, 8, 5, 9, 10]
new_ratings = [10 * rating for rating in ratings]
new_ratings
