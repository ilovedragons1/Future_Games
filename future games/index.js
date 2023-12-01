let month1 = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEMPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
let month2 = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEMPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
let month3 = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEMPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];


k_1 = 10;
k_2 = 11;
k_3 = 0;

const left_month = document.getElementById('left_month');
const right_month = document.getElementById('right_month');
const month = document.getElementById('month');

k_year = -1;
k_2022 = -1;

function nextMonth(){




    if(k_year < 2){

    left_month.style.border = "2px solid white";   

    right_month.style.border = "2px solid white"; 

    k_2022 = k_2022 + 1;

    k_1 = k_1 + 1;
    k_2 = k_2 + 1;
    k_3 = k_3 + 1;

    if(k_1 == 12){
        k_1 = 0;
    }

    if(k_2 == 12){
        k_2 = 0;
    }

    if(k_3 == 12){
        k_3 = 0;
    }

    left_month.innerText = month1[k_1];
    right_month.innerText = month2[k_3];
    month.innerText = month3[k_2];
    
    k_year = k_year + 1;

    if(k_2022 >= 0){
    month.innerText = month.innerText + " 2024";
    }

if(k_2022 < 0){
    month.innerText = month.innerText + " 2023";
}
changeGames();
}

if(k_year === 2){
    right_month.style.border = "2px solid red";    
}



console.log(k_year);
}




function previousMonth(){


    if(k_year >= 0){

    left_month.style.border = "2px solid white";   

    right_month.style.border = "2px solid white"; 

    k_2022 = k_2022 - 1;

    k_1 = k_1 - 1;
    k_2 = k_2 - 1;
    k_3 = k_3 - 1;

    if(k_1 == -1){
        k_1 = 11;
    }

    if(k_2 == -1){
        k_2 = 11;
    }

    if(k_3 == -1){
        k_3 = 11;
    }

    left_month.innerText = month1[k_1];
    right_month.innerText = month2[k_3];
    month.innerText = month3[k_2];

    k_year = k_year - 1;

    if(k_2022 >= 0){
        month.innerText = month.innerText + " 2024";
    }

    if(k_2022 < 0){
        month.innerText = month.innerText + " 2023";
    }
    changeGames();
}

if(k_year === -1){
    left_month.style.border = "2px solid red";    
}

console.log(k_2022);
}

// BLOCK JS

const block1 = document.getElementById("block1");
const block2 = document.getElementById("block2");
const block3 = document.getElementById("block3");
const block4 = document.getElementById("block4");
const block5 = document.getElementById("block5");
const block6 = document.getElementById("block6");
const block7 = document.getElementById("block7");
const block8 = document.getElementById("block8");
const block9 = document.getElementById("block9");
const block10 = document.getElementById("block10");
const block11 = document.getElementById("block11");
const block12 = document.getElementById("block12");
const block13 = document.getElementById("block13");
const block14 = document.getElementById("block14");
const block15 = document.getElementById("block15");
const block16 = document.getElementById("block16");
const block17 = document.getElementById("block17");
const block18 = document.getElementById("block18");
const block19 = document.getElementById("block19");
const block20 = document.getElementById("block20");
const block21 = document.getElementById("block21");
const block22 = document.getElementById("block22");
const block23 = document.getElementById("block23");
const block24 = document.getElementById("block24");
const block25 = document.getElementById("block25");
const block26 = document.getElementById("block26");
const block27 = document.getElementById("block27");
const block28 = document.getElementById("block28");
const block29 = document.getElementById("block29");
const block30 = document.getElementById("block30");
const block31 = document.getElementById("block31");

changeGames();

function changeGames(){

    if(k_2 == 11){
        block1.innerHTML = `<div id="block_thing_1">1</div><div id="block_thing_2"><img src="Dec_1.jpg"></div>`
        block2.innerHTML = `<div id="block_thing_1">2</div><div id="block_thing_2"></div>`
        block3.innerHTML = `<div id="block_thing_1">3</div><div id="block_thing_2"></div>`
        block4.innerHTML = `<div id="block_thing_1">4</div><div id="block_thing_2"></div>`
        block5.innerHTML = `<div id="block_thing_1">5</div><div id="block_thing_2"><img src="Dec_5.jpg"></div>`
        block6.innerHTML = `<div id="block_thing_1">6</div><div id="block_thing_2"><img src="Dec_6.jpg"></div>`
        block7.innerHTML = `<div id="block_thing_1">7</div><div id="block_thing_2"><img src="Dec_7.png"><img src="Dec_7_2.jpg"><img src="Dec_7_3.webp"></div>`
        block8.innerHTML = `<div id="block_thing_1">8</div><div id="block_thing_2"><img src="Dec_8.jpg"></div>`
        block9.innerHTML = `<div id="block_thing_1">9</div><div id="block_thing_2"></div>`
        block10.innerHTML = `<div id="block_thing_1">10</div><div id="block_thing_2"></div>`
        block11.innerHTML = `<div id="block_thing_1">11</div><div id="block_thing_2"><img src="Dec_11.jpg"></div>`
        block12.innerHTML = `<div id="block_thing_1">12</div><div id="block_thing_2"></div>`
        block13.innerHTML = `<div id="block_thing_1">13</div><div id="block_thing_2"><img src="Dec_13.jpg"></div>`
        block14.innerHTML = `<div id="block_thing_1">14</div><div id="block_thing_2"><img src="Dec 14.webp"></div>`
        block15.innerHTML = `<div id="block_thing_1">15</div><div id="block_thing_2"></div>`
        block16.innerHTML = `<div id="block_thing_1">16</div><div id="block_thing_2"></div>`
        block17.innerHTML = `<div id="block_thing_1">17</div><div id="block_thing_2"></div>`
        block18.innerHTML = `<div id="block_thing_1">18</div><div id="block_thing_2"></div>`
        block19.innerHTML = `<div id="block_thing_1">19</div><div id="block_thing_2"></div>`
        block20.innerHTML = `<div id="block_thing_1">20</div><div id="block_thing_2"></div>`
        block21.innerHTML = `<div id="block_thing_1">21</div><div id="block_thing_2"></div>`
        block22.innerHTML = `<div id="block_thing_1">22</div><div id="block_thing_2"></div>`
        block23.innerHTML = `<div id="block_thing_1">23</div><div id="block_thing_2"></div>`
        block24.innerHTML = `<div id="block_thing_1">24</div><div id="block_thing_2"></div>`
        block25.innerHTML = `<div id="block_thing_1">25</div><div id="block_thing_2"></div>`
        block26.innerHTML = `<div id="block_thing_1">26</div><div id="block_thing_2"></div>`
        block27.innerHTML = `<div id="block_thing_1">27</div><div id="block_thing_2"></div>`
        block28.innerHTML = `<div id="block_thing_1">28</div><div id="block_thing_2"></div>`
        block29.innerHTML = `<div id="block_thing_1">29</div><div id="block_thing_2"></div>`
        block30.innerHTML = `<div id="block_thing_1">30</div><div id="block_thing_2"></div>`
        block31.innerHTML = `<div id="block_thing_1">31</div><div id="block_thing_2"></div>`
    }


    if(k_2 == 0){
        block1.innerHTML = `<div id="block_thing_1">1</div><div id="block_thing_2"></div>`
        block2.innerHTML = `<div id="block_thing_1">2</div><div id="block_thing_2"></div>`
        block3.innerHTML = `<div id="block_thing_1">3</div><div id="block_thing_2"></div>`
        block4.innerHTML = `<div id="block_thing_1">4</div><div id="block_thing_2"></div>`
        block5.innerHTML = `<div id="block_thing_1">5</div><div id="block_thing_2"></div>`
        block6.innerHTML = `<div id="block_thing_1">6</div><div id="block_thing_2"></div>`
        block7.innerHTML = `<div id="block_thing_1">7</div><div id="block_thing_2"></div>`
        block8.innerHTML = `<div id="block_thing_1">8</div><div id="block_thing_2"></div>`
        block9.innerHTML = `<div id="block_thing_1">9</div><div id="block_thing_2"></div>`
        block10.innerHTML = `<div id="block_thing_1">10</div><div id="block_thing_2"></div>`
        block11.innerHTML = `<div id="block_thing_1">11</div><div id="block_thing_2"></div>`
        block12.innerHTML = `<div id="block_thing_1">12</div><div id="block_thing_2"></div>`
        block13.innerHTML = `<div id="block_thing_1">13</div><div id="block_thing_2"></div>`
        block14.innerHTML = `<div id="block_thing_1">14</div><div id="block_thing_2"></div>`
        block15.innerHTML = `<div id="block_thing_1">15</div><div id="block_thing_2"></div>`
        block16.innerHTML = `<div id="block_thing_1">16</div><div id="block_thing_2"><img src="Jan_16.jpg"></div>`
        block17.innerHTML = `<div id="block_thing_1">17</div><div id="block_thing_2"></div>`
        block18.innerHTML = `<div id="block_thing_1">18</div><div id="block_thing_2"><img src="Jan_18.avif"><img src="Jan_18_2.jpg"></div>`
        block19.innerHTML = `<div id="block_thing_1">19</div><div id="block_thing_2"><img src="Jan_19.jpg"></div>`
        block20.innerHTML = `<div id="block_thing_1">20</div><div id="block_thing_2"></div>`
        block21.innerHTML = `<div id="block_thing_1">21</div><div id="block_thing_2"></div>`
        block22.innerHTML = `<div id="block_thing_1">22</div><div id="block_thing_2"></div>`
        block23.innerHTML = `<div id="block_thing_1">23</div><div id="block_thing_2"><img src="Jan_23.png"></div>`
        block24.innerHTML = `<div id="block_thing_1">24</div><div id="block_thing_2"></div>`
        block25.innerHTML = `<div id="block_thing_1">25</div><div id="block_thing_2"><img src="Jan_25.webp"></div>`
        block26.innerHTML = `<div id="block_thing_1">26</div><div id="block_thing_2"><img src="Jan_26.jpg"><img src="Jan_26_2.webp"></div>`
        block27.innerHTML = `<div id="block_thing_1">27</div><div id="block_thing_2"></div>`
        block28.innerHTML = `<div id="block_thing_1">28</div><div id="block_thing_2"></div>`
        block29.innerHTML = `<div id="block_thing_1">29</div><div id="block_thing_2"></div>`
        block30.innerHTML = `<div id="block_thing_1">30</div><div id="block_thing_2"></div>`
        block31.innerHTML = `<div id="block_thing_1">31</div><div id="block_thing_2"></div>`
    }

    if(k_2 == 1){
        block1.innerHTML = `<div id="block_thing_1">1</div><div id="block_thing_2"><img src="Feb_1.jpg"></div>`
        block2.innerHTML = `<div id="block_thing_1">2</div><div id="block_thing_2"><img src="Feb_2.jpg"><img src="Feb_2_2.jpg"></div>`
        block3.innerHTML = `<div id="block_thing_1">3</div><div id="block_thing_2"></div>`
        block4.innerHTML = `<div id="block_thing_1">4</div><div id="block_thing_2"></div>`
        block5.innerHTML = `<div id="block_thing_1">5</div><div id="block_thing_2"></div>`
        block6.innerHTML = `<div id="block_thing_1">6</div><div id="block_thing_2"></div>`
        block7.innerHTML = `<div id="block_thing_1">7</div><div id="block_thing_2"></div>`
        block8.innerHTML = `<div id="block_thing_1">8</div><div id="block_thing_2"></div>`
        block9.innerHTML = `<div id="block_thing_1">9</div><div id="block_thing_2"></div>`
        block10.innerHTML = `<div id="block_thing_1">10</div><div id="block_thing_2"></div>`
        block11.innerHTML = `<div id="block_thing_1">11</div><div id="block_thing_2"></div>`
        block12.innerHTML = `<div id="block_thing_1">12</div><div id="block_thing_2"></div>`
        block13.innerHTML = `<div id="block_thing_1">13</div><div id="block_thing_2"></div>`
        block14.innerHTML = `<div id="block_thing_1">14</div><div id="block_thing_2"><img src="Feb_14.jpg"></div>`
        block15.innerHTML = `<div id="block_thing_1">15</div><div id="block_thing_2"></div>`
        block16.innerHTML = `<div id="block_thing_1">16</div><div id="block_thing_2"><img src="Feb 16.jpg"></div>`
        block17.innerHTML = `<div id="block_thing_1">17</div><div id="block_thing_2"></div>`
        block18.innerHTML = `<div id="block_thing_1">18</div><div id="block_thing_2"></div>`
        block19.innerHTML = `<div id="block_thing_1">19</div><div id="block_thing_2"></div>`
        block20.innerHTML = `<div id="block_thing_1">20</div><div id="block_thing_2"></div>`
        block21.innerHTML = `<div id="block_thing_1">21</div><div id="block_thing_2"></div>`
        block22.innerHTML = `<div id="block_thing_1">22</div><div id="block_thing_2"><img src="Feb_22.jpg"><img src="Feb 22.jpg"></div>`
        block23.innerHTML = `<div id="block_thing_1">23</div><div id="block_thing_2"></div>`
        block24.innerHTML = `<div id="block_thing_1">24</div><div id="block_thing_2"></div>`
        block25.innerHTML = `<div id="block_thing_1">25</div><div id="block_thing_2"></div>`
        block26.innerHTML = `<div id="block_thing_1">26</div><div id="block_thing_2"></div>`
        block27.innerHTML = `<div id="block_thing_1">27</div><div id="block_thing_2"><img src="Feb_27.jpg"></div>`
        block28.innerHTML = `<div id="block_thing_1">28</div><div id="block_thing_2"><img src="Feb_28.jpg"></div>`
        block29.innerHTML = `<div id="block_thing_1">29</div><div id="block_thing_2"><img src="Feb_29.jpg"></div>`
        block30.innerHTML = `<div id="block_thing_1" style="opacity: 0.25;">30</div><div id="block_thing_2" style="opacity: 0.25;"></div>`
        block31.innerHTML = `<div id="block_thing_1" style="opacity: 0.25;">31</div><div id="block_thing_2" style="opacity: 0.25;"></div>`
    }


    if(k_2 == 2){
        block1.innerHTML = `<div id="block_thing_1">1</div><div id="block_thing_2"></div>`
        block2.innerHTML = `<div id="block_thing_1">2</div><div id="block_thing_2"></div>`
        block3.innerHTML = `<div id="block_thing_1">3</div><div id="block_thing_2"></div>`
        block4.innerHTML = `<div id="block_thing_1">4</div><div id="block_thing_2"></div>`
        block5.innerHTML = `<div id="block_thing_1">5</div><div id="block_thing_2"></div>`
        block6.innerHTML = `<div id="block_thing_1">6</div><div id="block_thing_2"></div>`
        block7.innerHTML = `<div id="block_thing_1">7</div><div id="block_thing_2"></div>`
        block8.innerHTML = `<div id="block_thing_1">8</div><div id="block_thing_2"><img src="Mar_8.jpg"></div>`
        block9.innerHTML = `<div id="block_thing_1">9</div><div id="block_thing_2"></div>`
        block10.innerHTML = `<div id="block_thing_1">10</div><div id="block_thing_2"></div>`
        block11.innerHTML = `<div id="block_thing_1">11</div><div id="block_thing_2"></div>`
        block12.innerHTML = `<div id="block_thing_1">12</div><div id="block_thing_2"></div>`
        block13.innerHTML = `<div id="block_thing_1">13</div><div id="block_thing_2"></div>`
        block14.innerHTML = `<div id="block_thing_1">14</div><div id="block_thing_2"></div>`
        block15.innerHTML = `<div id="block_thing_1">15</div><div id="block_thing_2"></div>`
        block16.innerHTML = `<div id="block_thing_1">16</div><div id="block_thing_2"></div>`
        block17.innerHTML = `<div id="block_thing_1">17</div><div id="block_thing_2"></div>`
        block18.innerHTML = `<div id="block_thing_1">18</div><div id="block_thing_2"></div>`
        block19.innerHTML = `<div id="block_thing_1">19</div><div id="block_thing_2"></div>`
        block20.innerHTML = `<div id="block_thing_1">20</div><div id="block_thing_2"></div>`
        block21.innerHTML = `<div id="block_thing_1">21</div><div id="block_thing_2"></div>`
        block22.innerHTML = `<div id="block_thing_1">22</div><div id="block_thing_2"><img src="March 22.webp"><img src="PEACH.png"></div>`
        block23.innerHTML = `<div id="block_thing_1">23</div><div id="block_thing_2"></div>`
        block24.innerHTML = `<div id="block_thing_1">24</div><div id="block_thing_2"></div>`
        block25.innerHTML = `<div id="block_thing_1">25</div><div id="block_thing_2"></div>`
        block26.innerHTML = `<div id="block_thing_1">26</div><div id="block_thing_2"></div>`
        block27.innerHTML = `<div id="block_thing_1">27</div><div id="block_thing_2"></div>`
        block28.innerHTML = `<div id="block_thing_1">28</div><div id="block_thing_2"></div>`
        block29.innerHTML = `<div id="block_thing_1">29</div><div id="block_thing_2"></div>`
        block30.innerHTML = `<div id="block_thing_1">30</div><div id="block_thing_2"></div>`
        block31.innerHTML = `<div id="block_thing_1">31</div><div id="block_thing_2"></div>`
    }


    if(k_2 == 3){
        block1.innerHTML = `<div id="block_thing_1">1</div><div id="block_thing_2"></div>`
        block2.innerHTML = `<div id="block_thing_1">2</div><div id="block_thing_2"></div>`
        block3.innerHTML = `<div id="block_thing_1">3</div><div id="block_thing_2"></div>`
        block4.innerHTML = `<div id="block_thing_1">4</div><div id="block_thing_2"></div>`
        block5.innerHTML = `<div id="block_thing_1">5</div><div id="block_thing_2"></div>`
        block6.innerHTML = `<div id="block_thing_1">6</div><div id="block_thing_2"></div>`
        block7.innerHTML = `<div id="block_thing_1">7</div><div id="block_thing_2"></div>`
        block8.innerHTML = `<div id="block_thing_1">8</div><div id="block_thing_2"></div>`
        block9.innerHTML = `<div id="block_thing_1">9</div><div id="block_thing_2"></div>`
        block10.innerHTML = `<div id="block_thing_1">10</div><div id="block_thing_2"></div>`
        block11.innerHTML = `<div id="block_thing_1">11</div><div id="block_thing_2"></div>`
        block12.innerHTML = `<div id="block_thing_1">12</div><div id="block_thing_2"></div>`
        block13.innerHTML = `<div id="block_thing_1">13</div><div id="block_thing_2"></div>`
        block14.innerHTML = `<div id="block_thing_1">14</div><div id="block_thing_2"></div>`
        block15.innerHTML = `<div id="block_thing_1">15</div><div id="block_thing_2"></div>`
        block16.innerHTML = `<div id="block_thing_1">16</div><div id="block_thing_2"></div>`
        block17.innerHTML = `<div id="block_thing_1">17</div><div id="block_thing_2"></div>`
        block18.innerHTML = `<div id="block_thing_1">18</div><div id="block_thing_2"></div>`
        block19.innerHTML = `<div id="block_thing_1">19</div><div id="block_thing_2"></div>`
        block20.innerHTML = `<div id="block_thing_1">20</div><div id="block_thing_2"></div>`
        block21.innerHTML = `<div id="block_thing_1">21</div><div id="block_thing_2"></div>`
        block22.innerHTML = `<div id="block_thing_1">22</div><div id="block_thing_2"></div>`
        block23.innerHTML = `<div id="block_thing_1">23</div><div id="block_thing_2"></div>`
        block24.innerHTML = `<div id="block_thing_1">24</div><div id="block_thing_2"></div>`
        block25.innerHTML = `<div id="block_thing_1">25</div><div id="block_thing_2"></div>`
        block26.innerHTML = `<div id="block_thing_1">26</div><div id="block_thing_2"></div>`
        block27.innerHTML = `<div id="block_thing_1">27</div><div id="block_thing_2"></div>`
        block28.innerHTML = `<div id="block_thing_1">28</div><div id="block_thing_2"></div>`
        block29.innerHTML = `<div id="block_thing_1">29</div><div id="block_thing_2"></div>`
        block30.innerHTML = `<div id="block_thing_1">30</div><div id="block_thing_2"></div>`
        block31.innerHTML = `<div id="block_thing_1">31</div><div id="block_thing_2"></div>`
    }
}

function startAnimationLeft(){
    console.log("yes");
    left_month.style.animation = "right 0.01s forwards";
}

function endAnimationLeft(){
    left_month.style.animation = "left 0.01s forwards"
}

function startAnimationRight(){
    right_month.style.animation = "right 0.01s forwards"
}

function endAnimationRight(){
    right_month.style.animation = "left 0.01s forwards"
}



