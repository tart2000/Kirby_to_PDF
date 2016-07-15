

// function gethigh(mot,col,awesome) {
// 	var context = document.querySelector(".content");
// 	var instance = new Mark(context);
// 	instance.mark(mot,{
// 	'className': mot,
// 	});
// 	var pointmot = '.'+ mot;
// 	var famot = ".fa-"+awesome;
// 	$(pointmot).css('background-color',col);
// 	$(pointmot).after('<i class=\'fa icon fa-'+awesome+'\'></i>');
// 	$(famot).css('color',col);	
// }
// gethigh('engagement','#C8F526','bell');


$("p").text(function () {
    return $(this).text().replace("St ", "Saint "); 
});
$("p").text(function () {
    return $(this).text().replace("Saint Sulpice", "Saint-Sulpice"); 
});
$("p").text(function () {
    return $(this).text().replace("incubateur Saint Sulpice", "Incubateur Saint-Sulpice"); 
});

var InstantSearch = {

    "highlight": function (container, highlightText)
    {
        var internalHighlighter = function (options)
        {

            var id = {
                container: "container",
                tokens: "tokens",
                all: "all",
                token: "token",
                className: "className",
                sensitiveSearch: "sensitiveSearch"
            },
            tokens = options[id.tokens],
            allClassName = options[id.all][id.className],
            allSensitiveSearch = options[id.all][id.sensitiveSearch];


            function checkAndReplace(node, tokenArr, classNameAll, sensitiveSearchAll)
            {
                var nodeVal = node.nodeValue, parentNode = node.parentNode,
                    i, j, curToken, myToken, myClassName, mySensitiveSearch,
                    finalClassName, finalSensitiveSearch,
                    foundIndex, begin, matched, end,
                    textNode, span, isFirst;

                for (i = 0, j = tokenArr.length; i < j; i++)
                {
                    curToken = tokenArr[i];
                    myToken = curToken[id.token];
                    myClassName = curToken[id.className];
                    mySensitiveSearch = curToken[id.sensitiveSearch];

                    finalClassName = (classNameAll ? myClassName + " " + classNameAll : myClassName);

                    finalSensitiveSearch = (typeof sensitiveSearchAll !== "undefined" ? sensitiveSearchAll : mySensitiveSearch);

                    isFirst = true;
                    while (true)
                    {
                        if (finalSensitiveSearch)
                            foundIndex = nodeVal.indexOf(myToken);
                        else
                            foundIndex = nodeVal.toLowerCase().indexOf(myToken.toLowerCase());

                        if (foundIndex < 0)
                        {
                            if (isFirst)
                                break;

                            if (nodeVal)
                            {
                                textNode = document.createTextNode(nodeVal);
                                parentNode.insertBefore(textNode, node);
                            } // End if (nodeVal)

                            parentNode.removeChild(node);
                            break;
                        } // End if (foundIndex < 0)

                        isFirst = false;


                        begin = nodeVal.substring(0, foundIndex);
                        matched = nodeVal.substr(foundIndex, myToken.length);

                        if (begin)
                        {
                            textNode = document.createTextNode(begin);
                            parentNode.insertBefore(textNode, node);
                        } // End if (begin)

                        span = document.createElement("span");
                        span.className += finalClassName;
                        span.appendChild(document.createTextNode(matched));
                        parentNode.insertBefore(span, node);

                        nodeVal = nodeVal.substring(foundIndex + myToken.length);
                    } // Whend

                } // Next i 
            }; // End Function checkAndReplace 

            function iterator(p)
            {
                if (p === null) return;

                var children = Array.prototype.slice.call(p.childNodes), i, cur;

                if (children.length)
                {
                    for (i = 0; i < children.length; i++)
                    {
                        cur = children[i];
                        if (cur.nodeType === 3)
                        {
                            checkAndReplace(cur, tokens, allClassName, allSensitiveSearch);
                        }
                        else if (cur.nodeType === 1)
                        {
                            iterator(cur);
                        }
                    }
                }
            }; // End Function iterator

            iterator(options[id.container]);
        } // End Function highlighter
        ;


        internalHighlighter(
            {
                container: container
                , all:
                    {
                        className: "highlighter"
                    }
                , tokens: [
                    {
                        token: highlightText
                        , className: makeSafe(highlightText)
                        , sensitiveSearch: false
                    }
                ]
            }
        ); // End Call internalHighlighter 

    } // End Function highlight

};

function DoHighlight(highlightText,color, awesome)
{
    var container = document.getElementById("thecontent");
    InstantSearch.highlight(container, highlightText);
    var pointmot = '.' + makeSafe(highlightText);
    //$(pointmot).css('background-color',color);
    var famot = ".fa-" + awesome;
    $(pointmot).append('<i class=\'fa icon fa-' + awesome + '\'></i>');
    $(famot).css('color',color); 
}

function makeSafe(unsafe) {
    return unsafe
         .replace("é", "e");
 }


DoHighlight('programmation','#FF5C4B','calendar');
DoHighlight('activités','#FF5C4B','calendar');

DoHighlight('aménagement','#C8F526','home');

DoHighlight('communication','#06DCFB','arrows-alt');

DoHighlight('partenariats','#660A00','link');
DoHighlight('communauté','#660A00','link');
DoHighlight('écosystème','#660A00','link');

DoHighlight('gouvernance','#DFB0FF','cogs');

DoHighlight('équipement','#FF9955','wrench');

DoHighlight('compétences','#F5F069','users');



// function highlight(text,col,awesome)
// {
//     var inputText = document.getElementById("thecontent");
//     var innerHTML = inputText.innerHTML;
//     var index = innerHTML.indexOf(text);
//     if ( index >= 0 )
//     { 
//         innerHTML = innerHTML.substring(0,index) + "<span class=" + text + ">" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
//         inputText.innerHTML = innerHTML 
//     }
// 	var pointmot = '.'+ text;
// 	var famot = ".fa-"+awesome;
// 	$(pointmot).css('background-color',col);
// 	$(pointmot).after('<i class=\'fa icon fa-'+awesome+'\'></i>');
// 	$(famot).css('color',col);	

// };





// highlight('compétences','#FFFFAA','users');
// highlight('Compétences','#FFFFAA','users');

// highlight('gouvernance','#EEE9E9','cogs');
// highlight('Gouvernance','#EEE9E9','cogs');

// highlight('communication','#EEE9E9','cogs');



