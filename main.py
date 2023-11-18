def single_change(grades, index, maths_plus_25: bool):
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


non_linear(465, 6, 0, True)