// const greeting = document.getElementById('greeting');
// const myname = document.getElementById('myname');


// const func1 = () => {
//     const val = myname.value;
//     greeting.innerHTML = "<p>" + val + "さん，こんにちは！</p>";
//     console.log(greeting.innerHTML);
// };

var count = 0
let imgList = ['o0circle.png',
            'o1circle.png',
            'o2circle.png',
            'o3circle.png',
            'o4circle.png',
            'o5circle.png',
            'o6circle.png',
            'o7circle.png',
            'o8circle.png',
            'o9circle.png',
            'o10circle.png',
            'o11circle.png',
            'o12circle.png',
            'o13circle.png',
            'o14circle.png',
            'o15circle.png',
]

var len = imgList.length;

for (var i = len - 1; i >= 0 ; i--) {
    var j =  Math.floor(Math.random() * i);
    imgList[i]=[imgList[j],imgList[j]=imgList[i]][0];
};

console.log(imgList);

let evaluationList = []
let rangeList = []
var x = new Boolean(false);
let rangeDict = {}

const okNext = () => {
    x = true
};

const chgImg = () => {
    if (x === true) {
    
        if (count > 0) {

        var range = document.getElementById("rangeid");
        rangeList.push(range.value);
        
        var imgName = imgList[count - 1].replace('circle.png', ''); 
        rangeDict[imgName] = range.value;
        

        var img = document.getElementById('myimage');
        let image = imgList[count];
        myimage.setAttribute('src', image);

        count = count + 1
        var progress = document.getElementById("progress");
        progress.textContent = count + " / 16"

        range.value = 5
        document.getElementById("output1").innerHTML = 5

        x = false;
        } else {

            var range = document.getElementById("rangeid");
            rangeList.push(range.value);
            
            var imgName = 'sample'; 
            rangeDict[imgName] = range.value;
                
            var img = document.getElementById('myimage');
            let image = imgList[count];
            myimage.setAttribute('src', image);
    
            count = count + 1
            var progress = document.getElementById("progress");
            progress.textContent = count + " / 16"
    
            range.value = 5
            document.getElementById("output1").innerHTML = 5
    
            x = false;

        }
    }
}

console.log(rangeList);
console.log(rangeDict);
    
