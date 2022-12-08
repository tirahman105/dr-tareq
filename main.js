function message(){
    var Date = document.getElementById('date');
    var StartTime= document.getElementById('start-time');
    var EndTime = document.getElementById('end-time');
    var Study = document.getElementById('study');
    var Remarks = document.getElementById('remarks');

    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Date.value === '' || StartTime.value === '' || EndTime.value === '' || Study.value === '' || Remarks.value === ''  ){
        danger.style.display = 'block'; 
    } 

    else{
        setTimeout(() => {
            Date.value = '';
            StartTime.value = '';
            EndTime.value = '';
            Study.value = '';
            Remarks.value = '';
            
        }, 1500);

        success.style.display = 'block';
    }
    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);
};

function messageb(){
    var Date2 = document.getElementById('date2');
    var StartTime2= document.getElementById('start-time2');
    var EndTime2 = document.getElementById('end-time2');
    var Study2 = document.getElementById('study2');
    var Remarks2 = document.getElementById('remarks2');

    const successb = document.getElementById('successb');
    const dangerb = document.getElementById('dangerb');

    if(Date2.value === '' || StartTime2.value === '' || EndTime2.value === '' || Study2.value === '' || Remarks2.value === ''  ){
        dangerb.style.display = 'block'; 
    } 

    else{
        setTimeout(() => {
            Date2.value = '';
            StartTime2.value = '';
            EndTime2.value = '';
            Study2.value = '';
            Remarks2.value = '';
            
        }, 1500);

        successb.style.display = 'block';
    }
    setTimeout(() => {
        dangerb.style.display = 'none';
        successb.style.display = 'none';
    }, 4000);
};


let popupb = document.getElementById("popupb");

function openPopupb(){
  popupb.classList.add("open-popupb");
}


// for progoti  1st year


function messagep1(){
    var Datep1 = document.getElementById('datep1');
    var StartTimep1= document.getElementById('start-timep1');
    var EndTimep1 = document.getElementById('end-timep1');
    var Studyp1 = document.getElementById('studyp1');
    var Remarksp1 = document.getElementById('remarksp1');

    const successp1 = document.getElementById('successp1');
    const dangerp1 = document.getElementById('dangerp1');

    if(Datep1.value === '' || StartTimep1.value === '' ||  Studyp1.value === '' || Remarksp1.value === ''  ){
        dangerp1.style.display = 'block'; 
    } 

    else{
        setTimeout(() => {
            Datep1.value = '';
            StartTimep1.value = '';
            EndTimep1.value = '';
            Studyp1.value = '';
            Remarksp1.value = '';
            
        }, 1500);

        successp1.style.display = 'block';
    }
    setTimeout(() => {
        dangerp1.style.display = 'none';
        successp1.style.display = 'none';
    }, 4000);
};


let popupp1 = document.getElementById("popupp1");

function openPopupp1(){
  popupp1.classList.add("open-popupp1");
}


// for progoti  2nd year


function messagep2(){
    var Datep2 = document.getElementById('datep2');
    var StartTimep2= document.getElementById('start-timep2');
    var EndTimep2 = document.getElementById('end-timep2');
    var Studyp2 = document.getElementById('studyp2');
    var Remarksp2 = document.getElementById('remarksp2');

    const successp2 = document.getElementById('successp2');
    const dangerp2 = document.getElementById('dangerp2');

    if(Datep2.value === '' || StartTimep2.value === '' ||  Studyp2.value === '' ){
        dangerp2.style.display = 'block'; 
    } 

    else{
        setTimeout(() => {
            Datep2.value = '';
            StartTimep2.value = '';
            EndTimep2.value = '';
            Studyp2.value = '';
            Remarksp2.value = '';
            
        }, 1500);

        successp2.style.display = 'block';
    }
    setTimeout(() => {
        dangerp2.style.display = 'none';
        successp2.style.display = 'none';
    }, 4000);
};


let popupp2 = document.getElementById("popupp2");

function openPopupp2(){
  popupp2.classList.add("open-popupp2");
}