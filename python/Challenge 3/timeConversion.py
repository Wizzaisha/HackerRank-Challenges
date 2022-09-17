def timeConversion(s):
    # Write your code here

    hour = s[:2]
    min_secs = s[2:len(s) - 2]
    aux = s[len(s) - 2: len(s)]

    if aux == "PM" and int(hour) == 12:
        return hour + min_secs
    elif aux == "AM" and int(hour) == 12:
        return "00" + min_secs
    elif aux == "AM":
        return hour + min_secs
    elif aux == "PM":
        return f"{int(hour) + 12}" + min_secs
    

s = "12:40:22AM"
print(timeConversion(s))