# SUMMARY OF TRIO DISCUSSION
# We discussed the lists of names and how we had to change each element. We also discussed which methods were more concise and picked that to use. We combined the most concise way to print a name with the method of using a function. We also discussed adding input so that the user can choose a class.
# DISCOVERIES
# We each discovered other ways to pick and print a name at random. There was randrange, random.choice, and even random.randint. We also discovered a way to check for empty inputs so that if the user doesn't pick a class, the program can print a name from either class at random.
# QUESTIONS
# There were no questions.
# COMMENTS
# It was insightful to collaborate with other people and gain new ideas for this python program.

import random

# List people for periods 1 and 2
KREWES = {
    'orpheus': ["Alejandro Alonso", "Aryaman Goenka", "Christopher Liu", "Deven Maheshwari", "Emma Buller", "Ella Krechmer", "Gavin McGinley",
           "Haotian Gan", "Ivan Lam", "Ishraq Mahid", "Ivan Mijacika", "Julia Nelson", "Lucas Lee", "Lucas Tom wong",
           "Michelle Lo", "Oscar Wang", "Owen Yaggy", "Rayat Roy", "Reng geng Zheng", "Shriya Anand", "Shyne Choi", "Sadid Ethun",
           "Tomas Acuna", "Theodore Fahey", "Tina Nguyen", "Tami Takada", "William Chen", "Yusef Elsharawy", "Zhao yu Lin"],
    'endymion': ["Alif Abdullah", "Andrew Juang", "Andy Lin", "Austin Ngan", "Annabel Zhang", "Cameron Nelson", "David Chong",
            "Daniel Sooknanan", "Eric Guo", "Eliza Knapp", "Hebe Huang", "Han Zhang", "Yoonah Chang", "Joshua Kloepfer",
            "Josephine Lee", "Jonathan Wu", "Jesse Xie", "Justin Zou", "Kevin Cao", "Liesel Wong", "Michael Borczuk",
            "Noakai Aronesty", "Patrick Ging", "Qina Liu", "Roshani Shrestha", "Rachel Xiao", "Raymond Yeung", "Sophie Liu",
            "Shadman Rakib", "Thomas Yu", "Wen hao Dong", "Yaying Liang li", "Yuqing Wu"]
}

def random_student():
    val = input("Which class? class1 or class2\n")
    if (val == "class1"):
        print(random.choice(KREWES['orpheus']))
    elif (val == "class2"):
        print(random.choice(KREWES['endymion']))
    else:
        random_class = random.choice([KREWES['orpheus'], KREWES['endymion']])
        print(random.choice(random_class))

random_student()
