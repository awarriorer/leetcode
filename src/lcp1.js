/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function(guess, answer) {
    let num = 0

    for(let i = 0; i < guess.length; i++){
      guess[i] === answer[i] && num++
    }

    return num
};


export default game;