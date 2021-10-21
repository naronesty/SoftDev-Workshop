#Clyde "Thluffy" Sinclair
#SoftDev
#skeleton/stub :: SQLITE3 BASICS
#Dec 2020 -- The Time of the Rona

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O

courses = {}

with open('courses.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)

        # for row in reader:
        #     courses[row['code']] = list(row['mark'],row[''])




DB_FILE="discobandit.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops -- you will use cursor to trigger db events

#==========================================================


# < < < INSERT YOUR TEAM'S POPULATE-THE-DB CODE HERE > > >


command = ""          # test SQL stmt in sqlite3 shell, save as string
c.execute(command)    # run SQL statement
c.execute("CREATE TABLE courses (code TEXT, mark INTEGER, id INTEGER);")
for row in reader:
    c.execute("INSERT INTO courses VALUES (?, ?, ?)", row['code'], row['mark'], row['id'])

#==========================================================

db.commit() #save changes
db.close()  #close database

if __name__ == "__main__":
    fileReader()
