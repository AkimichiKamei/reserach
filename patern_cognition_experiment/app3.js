let imgList = ['0circle.png',
            '1circle.png',
            '2circle.png',
            '3circle.png',
            '4circle.png',
            '5circle.png',
            '6circle.png',
            '7circle.png',
            '8circle.png',
            '9circle.png',
            '10circle.png',
            '11circle.png',
            '12circle.png',
            '13circle.png',
            '14circle.png',
            '15circle.png',
            '16circle.png',
            '17circle.png',
            '18circle.png',
            '19circle.png',
            '20circle.png',
            '21circle.png',
            '22circle.png',
            '23circle.png',
            '24circle.png',
            '25circle.png',
            '26circle.png',
            '27circle.png',
            '28circle.png',
            '29circle.png',
            '30circle.png',
            '31circle.png',
            '32circle.png',
            '33circle.png',
            '34circle.png',
            '35circle.png',
            '36circle.png',
            '37circle.png',
            '38circle.png',
            '39circle.png',
            '40circle.png',
            '41circle.png',
            '42circle.png',
            '43circle.png',
            '44circle.png',
            '45circle.png',
            '46circle.png',
            '47circle.png',
            '48circle.png',
            '49circle.png',
            '50circle.png',
            '51circle.png',
            '52circle.png',
            '53circle.png',
            '54circle.png',
            '55circle.png',
            '56circle.png',
            '57circle.png',
            '58circle.png',
            '59circle.png',
            '60circle.png',
            '61circle.png',
            '62circle.png',
            '63circle.png',
            '64circle.png',
            '65circle.png',
            '66circle.png',
            '67circle.png',
            '68circle.png',
            '69circle.png',
            '70circle.png',
            '71circle.png',
            '72circle.png',
            '73circle.png',
            '74circle.png',
            '75circle.png',
            '76circle.png',
            '77circle.png',
            '78circle.png',
            '79circle.png',
            '80circle.png',
            '81circle.png',
            '82circle.png',
            '83circle.png',
            '84circle.png',
            '85circle.png',
            '86circle.png',
            '87circle.png',
            '88circle.png',
            '89circle.png',
            '90circle.png',
            '91circle.png',
            '92circle.png',
            '93circle.png',
            '94circle.png',
            '95circle.png',
            '96circle.png',
            '97circle.png',
            '98circle.png',
            '99circle.png',
            '100circle.png',
            '101circle.png',
            '102circle.png',
            '103circle.png',
            '104circle.png',
            '105circle.png',
            '106circle.png',
            '107circle.png',
            '108circle.png',
            '109circle.png',
            '110circle.png',
            '111circle.png',
            '112circle.png',
            '113circle.png',
            '114circle.png',
            '115circle.png',
            '116circle.png',
            '117circle.png',
            '118circle.png',
            '119circle.png',
            '120circle.png',
            '121circle.png',
            '122circle.png',
            '123circle.png',
            '124circle.png',
            '125circle.png',
            '126circle.png',
            '127circle.png',
            '128circle.png',
            '129circle.png',
            '130circle.png',
            '131circle.png',
            '132circle.png',
            '133circle.png',
            '134circle.png',
            '135circle.png'
]

var len = imgList.length;

for (var i = len - 1; i >= 0 ; i--) {
    var j =  Math.floor(Math.random() * i);
    imgList[i]=[imgList[j],imgList[j]=imgList[i]][0];
};

console.log(imgList);

var count = 0
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
        progress.textContent = count + " / 136"

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
            progress.textContent = count + " / 136"
    
            range.value = 5
            document.getElementById("output1").innerHTML = 5
    
            x = false;

        }
    }
}

console.log(rangeList);
console.log(rangeDict);
    
