export const CREATE_HALL = "CREATE_HALL";


export function createHall(newHall) {
    return {
        type:CREATE_HALL,
        payload:newHall
    }
}