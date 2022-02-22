# -*- coding: utf-8 -*-

ratings = [6, 8, 5, 9, 10]

for rating in ratings:
    if (rating % 3) == 0:
        print((rating) , 'is multiple of 3')
        # ou
        print(f'{rating} is multiple of 3')