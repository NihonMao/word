enum Value {
    right = 1,
    wrong = 0,
}

export default interface Option {
    value: Value,
    item: object
}