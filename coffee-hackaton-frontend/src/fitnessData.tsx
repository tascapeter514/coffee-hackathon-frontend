
export type Equipment = 'barbell' | 'dumbell' | 'body weight' | 'cable' 

export type MovementPattern = 'upper push' | 'upper pull' | 'lower push' | 'lower pull'


export interface Exercise {
    id: number,
    name: string,
    movementPattern: MovementPattern,
    weight: number,
    equipment: Equipment,
    RPE: number
}



const chestPress: Exercise = {
    id : 1,
    name: 'chest press',
    movementPattern: 'upper push',
    weight: 150,
    equipment: 'barbell',
    RPE: 8
}

const overheadPress: Exercise = {
    id: 2,
    name: 'overhead press',
    movementPattern: 'upper push',
    weight: 150,
    equipment: 'dumbell',
    RPE: 8
}

const pullUp: Exercise = {
    id: 3,
    name: 'pull up',
    movementPattern: 'upper pull',
    weight: 0,
    equipment: 'body weight',
    RPE: 6
}

const pushUp: Exercise = {
    id : 4,
    name: 'push up',
    movementPattern: 'upper push',
    weight: 0,
    equipment: 'body weight',
    RPE: 8
}

const sampleExercises = [
    chestPress,
    overheadPress,
    pullUp,
    pushUp,

]

export default sampleExercises

