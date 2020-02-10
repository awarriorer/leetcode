/**
 * https://leetcode-cn.com/problems/count-primes/
 * /

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let num = 0

  n = n -1

  while(n > 0){
    if(isPrime(n)){
      num++
    }

    n--
  }

  return num
};

function isPrime(n){
  if(n <= 3){
    return n > 1
  }

  if(n % 2 === 0 || n % 3 === 0){
    return false
  }

  for(let i = 5; i * i <= n; i+= 6){
    if(n % i == 0 || n % (i + 2) == 0){
      return false
    }
  }

  return true
}

export default countPrimes