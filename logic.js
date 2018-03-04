//there is nothing here right now

let game_id = 0;
let width = 0;
let height = 0;
let food_x = -1;
let food_y = -1;

/**
 *  Goals:
 *  - Approach food
 *  - Avoid wall
 *  - Avoid snake bodies
 * 
 */
const moveFunc = (ListOfFood, listOfSnakes, mySnake) => {
    closestFood(ListOfFood)

};

const closestFood = (ListOfFood) => {
    // mySnake[0].x
    // mySnake[0].y

    // mySnake[1].x
    // mySnake[1].y

    // mySnake[2].x
    // mySnake[2].y
    
    food_x = -1;
    food_y = -1;
};



const setupGame = (game_id, width, height) => {
    game_id = game_id;
    width = width;
    height = height;
};

module.exports = {moveFunc, setupGame};