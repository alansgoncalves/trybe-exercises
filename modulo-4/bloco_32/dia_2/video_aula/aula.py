# -*- coding: utf-8 -*-
import json
file = open("video_games.json", "r")
video_games = json.load(file)
file.close()

game_genre = set()
for game in video_games:
  for genre in game ["Metadata"]["Genres"].split(","):
    print(genre)
