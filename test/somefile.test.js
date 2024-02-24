// const sumFs = require('./somefile');
const PM = require('../foldersjs/somefile')

test("addPicture should add a picture URL to the pictureURLs array", function () {
  //sanity 
  const picManager = new PM()
  expect(picManager.pictureURLs.length).toBe(0)
  
  picManager.addPicture("some_url")
  expect(picManager.pictureURLs.length).toBe(1)           //test
  expect(picManager.pictureURLs).toContain("some_url")    //double check 
  picManager.removePicture("some_url")
  expect(picManager.pictureURLs.length).toBe(0)
})
// test('sumFs 3 * 4 to equal 5', () => {
//   expect(sumFs.sumF(3, 4)).toBe(5);
// });


// test("should remove all BUGs from list of code", () => {
//     let code = ["great code", "good code", "BUG", "async await awesome code", "BUG", "BUG", "general code"]
//     let bugFreeCode = sumFs.removeBugs(code)
//     expect(bugFreeCode).not.toContain("BUG")
//     expect(code).toContain("good code")
// })

// test("should keep only HIGH priority tasks", () => {
//     let tasks = [{ text: "dummy", priority: "HIGH" }, { text: "dummy", priority: "LOW" }]
//     let filteredTasks = sumFs.clearLowPriority(tasks)
//     console.log(filteredTasks)
//     expect(filteredTasks.length()).toBe(1)
//     expect(filteredTasks[0].priority).toBe("HIGH")
// })