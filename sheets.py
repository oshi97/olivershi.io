#!/usr/bin/python

import os
import io
import json
from pathlib import Path

# Hmmm I should have just used node for this huh, then I wouldn't have to deal with python versions
# but python tho....
dirFile = 'src/data/sheets.json'
dirname = Path(__file__).parent

def scan(currentDir = os.path.join(dirname, 'public', 'sheets')):
  obj = {}
  scanDir = os.scandir(currentDir)
  currentDir = currentDir.replace('\\', '/')
  name = currentDir.split('/')[-1]
  currentDir += '/'
  obj['name'] = name
  obj['full_path'] = currentDir.split('/public')[1]
  contents = []
  for i in scanDir:
    if i.name == dirFile or i.name == __file__:
      continue
    if not i.is_dir():
      contents.append(i.name)
    else:
      contents.append(scan(i.path))
  obj['contents'] = contents
  return obj

def write(dirs = {}, name = dirFile):
  with io.open(name, "w", encoding="utf-8") as f:
    json_str = json.dumps(dirs,indent=2)
    f.write(json_str)

if not os.path.exists('data'):
  os.makedirs('data')
write(scan())

print('sheets.json generated! :)')