let initialState = {
    newTask: {
    },
    data: [
        {
            id : 1,
            description : "asdasd",
            deadLine: "19:00"
        },
        {
            id : 2,
            description : "asdasd",
            deadLine: "19:00"
        },
        {
            id : 3,
            description : "asdasd",
            deadLine: "19:00"
        },
        {
            id : 4,
            description : "asdasd",
            deadLine: "19:00"
        }
    ]
}

const tasks = (state = initialState, action) => {
    return state;
}

export default tasks;