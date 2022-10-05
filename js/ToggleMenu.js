var dropDownBreakpoint = 587;

window.onload = function onLoadEnableMenuIntoBigDevices()
{
    if(window.innerWidth >= dropDownBreakpoint)
    {
        toggleMenu('dropdown-menu', true);
    }
}

addEventListener('resize', (event) => {
    if(window.innerWidth > dropDownBreakpoint)
    {
        toggleMenu('dropdown-menu', true)
    }
    else
    {
        toggleMenu('dropdown-menu', false)
    }
});

function toggleMenu(id, isEnabled)
{
    var menu = document.getElementById(id);
    var menuClasses = breakWordsToArray(menu.className);
    var formatedClasses;

    removeFromArray(menuClasses, "collapsed");
    removeFromArray(menuClasses, "hidden");

    formatedClasses = arrayToString(menuClasses);

    if(isEnabled)
    {
        menu.setAttribute("class", formatedClasses + " collapsed");
    }
    else
    {
        menu.setAttribute("class", formatedClasses + " hidden");
    }
}

function removeFromArray(array, removeThis)
{
    var indexLocation = arrayContains(array, removeThis);

    if(indexLocation != -1)
    {
        array[indexLocation] = "";
    }
}

function arrayToString(array)
{
    var classes="";

    for(var i=0; i < array.length; i++)
    {
        classes += array[i] + " ";
    }

    return classes;
}

function onDropMenuButtonClick(id, classes)
{
    var menu = document.getElementById(id);
    var menuClasses = breakWordsToArray(menu.className);

    if(arrayContains(menuClasses, "collapsed") != -1)
    {
        menu.setAttribute("class", classes + " hidden");
    }
    else
    {
        menu.setAttribute("class", classes + " collapsed");
    }
}

function breakWordsToArray(text)
{
    var word = "";
    var wordsArray = new Array();
    
    for(var i=0; i < text.length; i++)
    {
        if(text[i] != " ")
        {
            word += text[i];
        }
        else
        {
            wordsArray.push(word);
            word = "";
        }
    }

    if(word != "")
    {
        wordsArray.push(word);
        word = "";
    }

    return wordsArray;
}

function arrayContains(array, searchFor)
{
    var contain = -1;

    for(var i=0; i < array.length && contain == -1; i++)
    {
        if(array[i] == searchFor)
        {
            contain = i;
        }
    }

    return contain;
}