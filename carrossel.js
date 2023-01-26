document.getElementsByClassName('next').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementsByClassName('formList').scrollLeft += widthItem;
    }
    
    document.getElementsByClassName('prev').onclick = function(){
        const widthItem = document.querySelector('.item').offsetWidth;
        document.getElementsByClassName('formList').scrollLeft -= widthItem;
        }