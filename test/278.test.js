import solution from '../src/278'

test('278', () => {
  let run1 = solution((k) => {
    return k == 2
  })

  expect(run1(2)).toBe(2);

  let run2 = solution((k) => {
    return k == 4
  })

  expect(run2(4)).toBe(4);


  let run3 = solution((k) => {
    return k == 1
  })

  expect(run3(2)).toBe(1);

  // let run4 = solution((k) => {
  //   return k == 5
  // })

  // expect(run4(8)).toBe(5);

  // let run5 = solution((k) => {
  //   return k == 2
  // })

  // expect(run5(2)).toBe(2);


  // let run6 = solution((k) => {
  //   return k == 3
  // })

  // expect(run6(3)).toBe(3);

  // let run7 = solution((k) => {
  //   return k == 2
  // })

  // expect(run7(3)).toBe(2);

  // let run8 = solution((k) => {
  //   return k == 1702766719
  // })
  
  // expect(run8(2126753390)).toBe(1702766719);
});