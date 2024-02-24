// function sumF(a, b) {

//     return Math.sqrt((a*a)+ (b* b));
//   }

//   const removeBugs = function (code) {
//     return code.map(c => c != "BUG")
// }
// const clearLowPriority = function(a){
//     let b =[]
//     a.forEach(element => {
//        if (element.priority==="HIGH"){
//         b.push(element)
//         console.log(element)
//        }
//        console.log(b)
//        return b.priority
//     });
// }
// module.exports = {sumF,removeBugs,clearLowPriority};
class PictureManager {
    constructor() {
        this.pictureURLs = []
    }

    addPicture(picURL) {
        this.pictureURLs.push(picURL)
    }

    removePicture(picURL) {
        this.pictureURLs.splice(this.pictureURLs.indexOf(picURL), 1)
    }
}

module.exports = PictureManager