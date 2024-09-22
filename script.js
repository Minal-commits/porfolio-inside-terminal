


let datetime = document.querySelector("#datetime");
const date = new Date();
const month = date.getMonth() + 1;
const day = date.getDate();
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const formattedDateTime = `${month}/${day}/${year} ${hours}:${minutes}`;
datetime.innerHTML = formattedDateTime + " on Macbook pro";

let ipt = document.querySelector("#cmd");
let body = document.querySelector('#body');
let commands = document.querySelector('#commands');


function clearTerminal() {
    location.reload();
}


function submitform() {
    let a = ipt.value;

    // Help command
    if (a.toLowerCase() === 'help') {
        var helpdiv1 = document.createElement('div');
        helpdiv1.id = 'helpdiv1';
        helpdiv1.textContent = "1. introduction ";
        helpdiv1.style.width = '80%';
        body.insertBefore(helpdiv1, commands); // Inserting before the #commands div
        helpdiv1.style.display='block';

        var helpdiv2 = document.createElement('div');
        helpdiv2.id = 'helpdiv2';
        helpdiv2.textContent = "2. Download CV";
        helpdiv1.style.width = '80%';
        body.insertBefore(helpdiv2, commands); // Inserting before the #commands div
        helpdiv2.style.display='block';

        var helpdiv3 = document.createElement('div');
        helpdiv3.id = 'helpdiv3';
        helpdiv3.textContent = "3. Projects";
        helpdiv3.style.width = '80%';
        body.insertBefore(helpdiv3, commands); // Inserting before the #commands div
        helpdiv3.style.display='block';

        var helpdiv4 = document.createElement('div');
        helpdiv4.id = 'helpdiv4';
        helpdiv4.textContent = "4. Skills";
        helpdiv4.style.width = '80%';
        body.insertBefore(helpdiv4, commands); // Inserting before the #commands div
        helpdiv4.style.display='block';

        var helpdiv5 = document.createElement('div');
        helpdiv5.id = 'helpdiv5';
        helpdiv5.textContent = "5. Social Links";
        helpdiv5.style.width = '80%';
        body.insertBefore(helpdiv5, commands); // Inserting before the #commands div
        helpdiv5.style.display='block';

        var helpdiv6 = document.createElement('div');
        helpdiv6.id = 'helpdiv6';
        helpdiv6.textContent = "6. Clear";
        helpdiv6.style.width = '80%';
        body.insertBefore(helpdiv6, commands); // Inserting before the #commands div
        helpdiv6.style.display='block';
    }

    //introduction command
    else if (a.toLowerCase() === 'introduction') {
        var intro = document.createElement('div');
        intro.id = 'intro';
        intro.textContent = "Hi i am Minal I am an under graduate student of computer science engineering i'm passionate about Web Designing, Programming and photography.I'm skilled with C++, HTML5, CSS3, MS-powerpoint, MS-Excel, MS_Word and Adobe lightroom. I like to explore new technologies and i'll be happy to work with you.";
        intro.style.width = '80%';
        body.insertBefore(intro, commands); // Inserting before the #commands div
        intro.style.display='block';
    }


    // Download CV command
    else if (a.toLowerCase() === 'download cv') {
        var downcv = document.createElement('a');
        downcv.id = 'downcv';
        downcv.textContent = "Download CV";
        downcv.href = "https://drive.google.com/file/d/1srfhYF2AVJKKaVix4y89aU-rQTiHVP8V/view?usp=sharing";
        downcv.target = "_blank";
        downcv.style.width = '80%';
        downcv.style.textDecoration='none';
        body.insertBefore(downcv, commands); // Inserting before the #commands div
        downcv.style.display='block';
    }

    //projects
    else if (a.toLowerCase() === 'projects') {

        var project1 = document.createElement('a');
        var project2 = document.createElement('a');

        project1.id = 'project1';
        project2.id = 'project2';
        project1.style.textDecoration='none';
        project2.style.textDecoration='none';
        

        project1.textContent = "graphy (Engineered a Web app which plots a graph according to your data in a graph paper)";
        project1.href = "https://graphie.netlify.app/";
        project1.target = "_blank";
        project1.style.width = '80%';
        body.insertBefore(project1, commands); // Inserting before the #commands div
        project1.style.display='block';

        // var line_break=document.createElement('br');
        // body.insertBefore(line_break,commands);

        project2.textContent = "Tic Tac Toe Game (created a basic tic tac toe game)";
        project2.href = "https://tictactoemadebyminal.netlify.app/";
        project2.target = "_blank";
        project2.style.width = '80%';
        body.insertBefore(project2, commands); // Inserting before the #commands div
        project2.style.display='block';
    }


    //skills
    else if (a.toLowerCase() === 'skills') {
        var skills = document.createElement('div');
        skills.id = 'skills';
        skills.textContent = " C++, DSA, C, javascript, HTML5, CSS, python ";
        skills.style.width = '80%';
        body.insertBefore(skills, commands); // Inserting before the #commands div
        skills.style.display='block';
    }


    //social links
    else if (a.toLowerCase() === 'social links') {
        var github = document.createElement('a');
        var linkedin = document.createElement('a');
        var fb = document.createElement('a');
        var insta = document.createElement('a');

        github.id = 'github';
        linkedin.id = 'linkedin';
        fb.id = 'fb';
        insta.id = 'insta';
        github.style.textDecoration='none';
        linkedin.style.textDecoration='none';
        fb.style.textDecoration='none';
        insta.style.textDecoration='none';
        

        github.textContent = "Github";
        github.href = "https://github.com/MinALranjit";
        github.target = "_blank";
        github.style.width = '80%';
        body.insertBefore(github, commands); // Inserting before the #commands div
        github.style.display='block';

        linkedin.textContent = "Linkedin";
        linkedin.href = "https://tictactoemadebyminal.netlify.app/";
        linkedin.target = "_blank";
        linkedin.style.width = '80%';
        body.insertBefore(linkedin, commands); // Inserting before the #commands div
        linkedin.style.display='block';

        fb.textContent = "Facebook";
        fb.href = "https://www.facebook.com/minal.ranjit.3";
        fb.target = "_blank";
        fb.style.width = '80%';
        body.insertBefore(fb, commands); // Inserting before the #commands div
        fb.style.display='block';

        insta.textContent = "Instagram";
        insta.href = "https://www.instagram.com/your_minal/";
        insta.target = "_blank";
        insta.style.width = '80%';
        body.insertBefore(insta, commands); // Inserting before the #commands div
        insta.style.display='block';
    }

    else if(a.toLowerCase() === 'clear' || a.toLowerCase()==='cls'){
        clearTerminal(); // Clear the terminal
        return;
    }
    else{
        var defd = document.createElement('p');
        defd.textContent="'" + a + "' " + " is not recognized as an internal or external command"
        body.insertBefore(defd, commands);
        defd.style.display='block';
        }
    
    // Shift #commands div to the bottom after execution
    body.appendChild(commands); // Move #commands to the bottom
    commands.style.autofocus;
}

ipt.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        submitform();
        ipt.value = "";
        ipt.focus();
    }
});
