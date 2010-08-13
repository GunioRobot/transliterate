#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
import codecs
from operator import itemgetter

sys.stdout = codecs.getwriter('utf-8')(sys.stdout)
source_file =  sys.argv[1]

lines = open(source_file).read().decode('utf-8').strip().splitlines()
pairs = [line.strip().split() for line in lines]
temp = sorted([(len(a), a, b) for a,b in pairs], reverse=True)
pairs = [(y,z) for x, y, z in temp]

lang_code = source_file.split('-')[0] # i'm looking at you.

json = u"""
var %s = [
  %s
]
""" 

row = u""" ['%s', '%s'],\n"""

rows = u''

for before, after in pairs:
  rows += row % (before, after)

rows = rows.strip()[:-1] # nuke final comma.

print json % (lang_code, rows)
  