let list: number[] = []
let Lucky = 0
Lucky = 3
list[0] = 4
list[1] = 2
list[2] = 4
list[3] = 1
list[4] = 3
list.push(5)
for (let value of list) {
    if (value == Lucky) {
        basic.showNumber(list.indexOf(value))
    }
}

#Challenge
let list: number[] = []
let Max = 0
let Min = 0
Min = 40
Max = 60
list[0] = 30
list[1] = 54
list[2] = 79
list[3] = 55
list[4] = 35
list[5] = 30
list[6] = 92
for (let value of list) {
    if (value > Min && value < Max) {
        basic.showNumber(value)
    }
}
