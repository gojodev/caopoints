import itertools
import json


def plus_25(grade: list) -> bool:
    """ returns if True or False on the eligibility of an inputted list for plus 25 points  """
    bool_bank = []
    hl_grades = [46, 56, 66, 77, 88, 100]
    for i in range(len(grade)):
        if grade[i] in hl_grades:
            bool_bank.append(True)
        else:
            bool_bank.append(False)
    if True in bool_bank:
        return True
    else:
        return False


def is_hl(grade: int) -> bool:
    """ returns True or False to determine if a grade is higher level """
    hl_sub = grade in [37, 46, 56, 66, 77, 88, 100]
    if hl_sub == True and hl_sub != 25:
        return True
    else:
        return False


def is_ol(grade: int) -> bool:
    """ returns True or False to determine if a grade is ordinary level """
    ol_sub = grade in [12, 20, 28, 37, 46, 56]
    if ol_sub == True and ol_sub != 25:
        return True
    else:
        return False


def grades_perm(input_list: list, maths_plus_25: int) -> None:
    """ creates permutations for all grades and adds to them to their respective files """
    perms = list(itertools.product(input_list, repeat=6))

    all_combos = []

    perms = list(map(list, perms))

    if maths_plus_25 == True:
        for i in range(len(perms)):
            if plus_25(perms[i]) == True and sum(perms[i])+25 <= 625:
                output = [perms[i] + [25], sum(perms[i]) + 25]
            else:
                output = [perms[i], sum(perms[i])]
            all_combos.append(output)

        file = open(
            r'C:\Users\eakol\OneDrive\Desktop\Emmanuel K\Programming\caopts\public\_all_grades_true.txt', 'w')
        file.write(str(all_combos))
        file.close()
    else:
        for i in range(len(perms)):
            if sum(perms[i]) <= 625:
                output = [perms[i], sum(perms[i])]
            all_combos.append(output)

        file = open(
            r'C:\Users\eakol\OneDrive\Desktop\Emmanuel K\Programming\caopts\public\_all_grades_false.txt', 'w')
        file.write(str(all_combos))
        file.close()
# grades_perm([0, 12, 20, 28, 37, 46, 56, 66, 77, 88, 100], False)

# sometimes there are missing outputs at the end of the grade files this function accounts for and fixes that issue no issues
# no need to adjust for the "invalid" outputs (usuaully from OL) cause the JS fixes that
def endings(hl_subs: int, ol_subs: int, maths_plus_25: bool) -> list:
    """ creates the values for the missing outputs """
    hl_grades = [0, 37, 46, 56, 66, 77, 88, 100]
    ol_grades = [0, 12, 20, 28, 37, 46, 56]

    hl_ends = []
    for i in range(len(ol_grades)):
        hl = [100]*hl_subs
        ol = ol_grades[i:i+ol_subs]
        output = list(hl + ol)
        output = output + [0]*(6-len(output))

        if maths_plus_25:
            output.append(25)
        output = [output, sum(output)]
        hl_ends.append(output)
    #     print(output)

    # print()

    ol_ends = []
    for i in range(len(hl_grades)):
        ol = [56]*ol_subs
        hl = hl_grades[i:i+hl_subs]
        output = list(ol + hl)
        output = output + [0]*(6-len(output))

        if maths_plus_25:
            output.append(25)
        output = [output, sum(output)]
        ol_ends.append(output)
        print(output)

    grades_hl_and_ol_ends = hl_ends + ol_ends
    points_hl_and_ol_ends = []
    for i in range(len(grades_hl_and_ol_ends)):
        points_hl_and_ol_ends.append(grades_hl_and_ol_ends[i][1])

    return [grades_hl_and_ol_ends, points_hl_and_ol_ends]


# endings(4, 2, False)

# this is needed for quicker output when data is pulled from the database


def arrange_order(grades: list, points: list) -> list:
    """ 
    arranges the order of the grades and points from smallest to largest and remove duplication 
    return [ordered_grades, current_points]
    """
    points_with_index = []
    for i in range(len(points)):
        points_with_index.append([points[i], i])

    points_with_index = sorted(points_with_index)

    ordered_grades = []
    str_ordered_grades = []
    ordered_points = []

    for i in range(len(points_with_index)):
        current_points = points_with_index[i][0]
        assigned_index = points_with_index[i][1]

        grades_list = sorted(grades[assigned_index][0], reverse=True)
        current_grade = [grades_list, current_points]

        str_grades = str(grades_list)

        if str_grades not in str_ordered_grades:
            ordered_grades.append(current_grade)
            ordered_points.append(current_points)
            str_ordered_grades.append(str_grades)

    return [ordered_grades, ordered_points]


def calculator(hl_subs: int, ol_subs: int, maths_plus_25: bool) -> list:
    """ returns the "main output" from  hl subjects, ol subjects and a user's eligiblity for plus 25 points """
    hl_grades = [0, 37, 46, 56, 66, 77, 88, 100]
    ol_grades = [0, 12, 20, 28, 37, 46, 56]

    final_soultion = []

    linear_case = (hl_subs > 0 and ol_subs == 0) or (
        ol_subs > 0 and hl_subs == 0)

    if linear_case == True:
        if hl_subs > 0 and ol_subs == 0:
            perms = list(itertools.product(hl_grades, repeat=hl_subs))
        elif ol_subs > 0 and hl_subs == 0:
            perms = list(itertools.product(ol_grades, repeat=ol_subs))

        for i in range(len(perms)):
            output = [0]*6
            perms[i] = list(perms[i])
            current = perms[i]
            output[:len(current)] = current

            if plus_25(current) and maths_plus_25:
                output.append(25)
                ans = [output, sum(output)]
            else:
                ans = [output, sum(output)]

            final_soultion.append(ans)
        return final_soultion

    else:
        final_soultion = []
        final_soultion_points = []
        str_final_soultion = []
        all_grades = open(
            rf'C:\Users\eakol\OneDrive\Desktop\Emmanuel K\Programming\caopts\public\_all_grades_{str(maths_plus_25).lower()}.txt', 'r')
        data = json.loads(all_grades.read())

        for i in range(len(data)):
            current = data[i][0]
            str_current = str(current)

            not_repeating = str_current not in str_final_soultion

            counted_hl = list(map(is_hl, current[:6])).count(True)
            counted_ol = list(map(is_ol, current[:6])).count(True)

            same_hl_count = counted_hl == hl_subs
            same_ol_count = counted_ol == ol_subs

            same_counts = same_hl_count and same_ol_count

            if not_repeating and same_counts:
                final_soultion.append([current, sum(current)])
                final_soultion_points.append(sum(current))
                str_final_soultion.append(str_current)

        ends = endings(hl_subs, ol_subs, maths_plus_25)[0]
        final_soultion.extend(ends)

        return final_soultion


def output_test(hl_subs: int, ol_subs: int, maths_plus_25: bool) -> None:
    """ is used for to test the output tp the grade and point files """
    filename = f"[{hl_subs}, {ol_subs}]"
    grade_file = rf'C:\Users\eakol\OneDrive\Desktop\Emmanuel K\Programming\caopts\public\{filename}.txt'
    points_file = rf'C:\Users\eakol\OneDrive\Desktop\Emmanuel K\Programming\caopts\public\{filename}_points.txt'
    f_test = open(grade_file, 'w')
    points = open(points_file, "w")

    grades_data = calculator(hl_subs, ol_subs, maths_plus_25)
    points_data = []
    [points_data.append(grades_data[i][1])
        for i in range(len(grades_data))]

    arranged_data = arrange_order(grades_data, points_data)
    arranged_grades = arranged_data[0]
    arranged_points = arranged_data[1]

    f_test.write(str(arranged_grades))
    points.write(str(arranged_points))
    points.close()
    f_test.close()


# output_test(6, 0, True)

subs_amts = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [2, 0], [
    2, 1], [2, 2], [2, 3], [2, 4], [3, 0], [3, 1], [3, 2], [3, 3], [4, 0], [4, 1], [4, 2], [5, 0], [5, 1], [6, 0]]


def files_data(maths_plus_25: bool) -> None:
    """ writes data to the files that will be uploaded to the database """
    for x in range(len(subs_amts)):
        hl_subs = subs_amts[x][0]
        ol_subs = subs_amts[x][1]

        boolen = str(maths_plus_25).lower()

        grades_prefix = str(
            rf'C:\Users\eakol\OneDrive\Desktop\Emmanuel K\Programming\caopts\public\grades_and_points\{boolen}_grades')
        points_prefix = str(
            rf'C:\Users\eakol\OneDrive\Desktop\Emmanuel K\Programming\caopts\public\grades_and_points\{boolen}_points')

        grades_file = rf"{grades_prefix}\{subs_amts[x]}.txt"
        points_file = rf"{points_prefix}\{subs_amts[x]}_points.txt"

        grades = open(grades_file, "w")
        grades_data = calculator(hl_subs, ol_subs, maths_plus_25)

        points = open(points_file, "w")
        points_data = []
        [points_data.append(grades_data[i][1])
         for i in range(len(grades_data))]

        arranged_data = arrange_order(grades_data, points_data)
        grades_data = arranged_data[0]
        points_data = arranged_data[1]

        grades.write(str(grades_data))
        points.write(str(points_data))
        points.close()
        grades.close()

        print(subs_amts[x], f"{x+1}/27", maths_plus_25)


# files_data(True)
# print()
# files_data(False)
