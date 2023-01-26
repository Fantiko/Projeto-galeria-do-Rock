 /*document.getElementsByClassName('next').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementsByClassName('formList').scrollLeft += widthItem;
    }
    
    document.getElementsByClassName('prev').onclick = function(){
        const widthItem = document.querySelector('.item').offsetWidth;
        document.getElementsByClassName('formList').scrollLeft -= widthItem;
        }

        /*
function previous(){
    document.write("asjdkhasjdkhsa")

}
*/
document.getElementById('next').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft += widthItem;

}

document.getElementById('prev').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList').scrollLeft -= widthItem;

}


document.getElementById('next2').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList2').scrollLeft += widthItem;

}

document.getElementById('prev2').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formList2').scrollLeft -= widthItem;

}
