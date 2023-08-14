def plus_25(grades: list, maths_plus_25=True) -> bool:
    """ returns if True or False on the eligibility of an inputted list for plus 25 points  """
    bool_bank = []
    hl_grades = [46, 56, 66, 77, 88, 100]
    for i in range(len(grades)):
        if grades[i] in hl_grades:
            bool_bank.append(True)
        else:
            bool_bank.append(False)
    return True in bool_bank


def single_change(grades, index, maths_plus_25: bool):
    """ for changing a singple grade """
    dict_changeables = {
        12: 20,
        20: 28,
        28: 37,
        37: 46,
        46: 56,
        56: 66,
        66: 77,
        77: 88,
        88: 100
    }
    if grades[index] in dict_changeables:
        grades[index] = dict_changeables[grades[index]]

    if maths_plus_25 and 25 not in grades:
        grades.append(25)
    return grades


def non_linear(target, hl_subs, ol_subs, maths_plus_25: bool):
    total_subs = hl_subs + ol_subs
    current_grades = [37]*hl_subs + [12]*ol_subs
    current_points = sum(current_grades)
    index = 0
    while (current_points >= target) == False:
        current_grades = single_change(current_grades, index, maths_plus_25)

        current_points = sum(current_grades)
        index += 1

        if index == total_subs:
            index = 0

    print(current_grades, current_points)


non_linear(421, 6, 0, True)

# this is a massive improveme but it's still inneffcient cause
# it could start at the nearest 10 to to the target_num
# but it instead starts at 0
# this isn't a miassive issues perse