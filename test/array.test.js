const Array = require('../foldersjs/array')



let x = ["food", "item", "location"]
let y = ["cherry", "lightbulb", "Tazmania"]
let z = ["cherry", "lightbulb"]
const arr=new Array()
const obj={
    food: "cherry",
    item: "lightbulb",
    location: "Tazmania"
  }

test('should first the length be the same', () => { 
    expect(x.length).toBe(3)
    expect(y.length).toBe(3)
    let res = arr.manipulate(x,y)
    expect(res).toEqual(obj)
 })
test('if the lemngth not the same should return msg', () => { 
    let res = arr.manipulate(x,z)
    expect(res).toBe("so the length is not the same")
 })
test('removeAtLeastOne delet one elemnt from the array', () => { 
    let res = arr.removeAtLeastOne(x)
    expect(res.length).toBe(2)
 })
