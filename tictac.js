var pl='X';
var res = document.querySelector("#reset")
var xw = document.querySelector("#x")
var yw = document.querySelector("#y")
var tie = document.querySelector("#tie")
var x=0,y=0,t=0;
var tab=[[document.querySelector("#oo"),document.querySelector("#ot"),document.querySelector("#oth")],
         [document.querySelector("#to"),document.querySelector("#tt"),document.querySelector("#tth")],
         [document.querySelector("#tho"),document.querySelector("#tht"),document.querySelector("#thth")]]
console.log("Import Successfull");
function changecontent()
{
    if(this.textContent == '')
    {
        this.textContent=pl
        var result=wincheck();
        if(result=='O')
        {
            y++;
            yw.textContent=y;
            alert("O Wins The Game !!!");
            alert("Its O's Turn To Start The Game");
            pl='O';
            for (var i = 0; i < 3; i++)
            {
                for (var j = 0; j < 3; j++)
                {
                    tab[i][j].textContent='';
                }
            }
            return;
        }
        if(result=='X')
        {
            x++;
            xw.textContent=x;
            alert("X Wins The Game !!!");
            alert("Its X's Turn To Start The Game");
            pl='X';
            for (var i = 0; i < 3; i++)
            {
                for (var j = 0; j < 3; j++)
                {
                    tab[i][j].textContent='';
                }
            }
            return;
        }
        var tc=tiecheck();
        if(tc==1)
        {
            t++;
            tie.textContent=t;
            alert("Its A Tie !!!");
            if(pl=='X')
            {
                pl='O';
            }
            else
            {
                pl='X';
            }
            alert("Its "+ pl +"\'s Turn To Start The Game");
            for (var i = 0; i < 3; i++)
            {
                for (var j = 0; j < 3; j++)
                {
                    tab[i][j].textContent='';
                }
            }
            return;
        }
        if(pl=='X')
        {
            pl='O';
        }
        else
        {
            pl='X';
        }
    }
}
function tiecheck()
{
    var flg = 1;
    for (var i = 0; i < 3; i++)
    {
        for (var j = 0; j < 3; j++)
        {
            if(tab[i][j].textContent =='')
            {
                flg = 0;
                return flg;
            }
        }
    }
    return flg;
}
function wincheck()
{
    for (var i = 0; i < 3; i++)
    {
        if (tab[i][0].textContent==tab[i][1].textContent && tab[i][0].textContent==tab[i][2].textContent)
        {
            if(tab[i][0].textContent=='X' || tab[i][0].textContent=='O')
            {
                return tab[i][0].textContent;
            }
        }
        if (tab[0][i].textContent==tab[1][i].textContent && tab[0][i].textContent==tab[2][i].textContent)
        {
            if(tab[0][i].textContent=='X' || tab[0][i].textContent=='O')
            {
                return tab[0][i].textContent;
            }
        }
    }
    if (tab[0][0].textContent==tab[1][1].textContent && tab[0][0].textContent==tab[2][2].textContent)
    {
        if(tab[0][0].textContent=='X' || tab[0][0].textContent=='O')
        {
            return tab[0][0].textContent;
        }
    }
    if (tab[0][2].textContent==tab[1][1].textContent && tab[0][2].textContent==tab[2][0].textContent)
    {
        if(tab[0][2].textContent=='X' || tab[0][2].textContent=='O')
        {
            return tab[0][2].textContent;
        }
    }
    return '';
}
function resetgrid()
{
    for (var i = 0; i < 3; i++)
    {
        for (var j = 0; j < 3; j++)
        {
            tab[i][j].textContent='';
        }
    }
    xw.textContent='0';
    yw.textContent='0';
    tie.textContent='0';
    x=0;
    y=0;
    t=0;
    alert("New Game Started !!!");
    pl="X";
    alert("Its X's Turn To Start The Game");
}
res.addEventListener('click', resetgrid);
for (var i = 0; i < 3; i++)
{
    for (var j = 0; j < 3; j++)
    {
        tab[i][j].addEventListener('click', changecontent);
    }
}
