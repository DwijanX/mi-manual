import filterBasedOnInputAndColumn from "./FilterTable.js"

const inputColors=document.querySelector("#ColorsInput")
const tableColors=document.querySelector("#ColorsTable")

const inputSelectors=document.querySelector("#SelectorsInput")
const tableSeletors=document.querySelector("#SelectorsTable")

const inputUnits=document.querySelector("#UnitsInput")
const tableUnits=document.querySelector("#UnitsTable")

const displaySectInput=document.querySelector("#displaySectInput")
const displayTable=document.querySelector("#displayTable")


const clickAbleRows=document.querySelectorAll(".clickableRow")

const CloseOverlayButtons=document.querySelectorAll(".CloseOverlayButton")
const Overlays=document.querySelectorAll(".overlay")

const TheoricButtons=document.querySelectorAll(".TheoricButton")

const codeArea=document.querySelector("#flexCssCode")
const ObjectsContainerFlexExample=document.querySelector("#ObjectsContainerFlexExample")

inputColors.addEventListener("input",()=>{
    filterBasedOnInputAndColumn(inputColors,tableColors,0);
})
inputSelectors.addEventListener("input",()=>{
    filterBasedOnInputAndColumn(inputSelectors,tableSeletors,0);
})
inputUnits.addEventListener("input",()=>{
    filterBasedOnInputAndColumn(inputUnits,tableUnits,0);
})
displaySectInput.addEventListener("input",()=>{
    filterBasedOnInputAndColumn(displaySectInput,displayTable,0);
})


clickAbleRows.forEach((clickAbleRow)=>{
    clickAbleRow.addEventListener("dblclick",()=>{
        let link=clickAbleRow.getAttribute("data-href")
        window.open(link, '_blank');
    })
})
CloseOverlayButtons.forEach((CloseButton)=>{
    CloseButton.addEventListener("click",()=>{
        Overlays.forEach((overlay)=>{
            overlay.style.display="none"
        })
    })
})

TheoricButtons.forEach((TheoricButton)=>{
    TheoricButton.addEventListener("click",()=>{
        let relatedOverlay=document.querySelector("#"+TheoricButton.getAttribute("OverlayId"))
        relatedOverlay.style.display="flex"
    })
})
function setStyles(element, styles)
{
    for(var s in styles) {
        element.style[s] = styles[s];
    }
}
codeArea.addEventListener("input",()=>{
    let CssString=codeArea.value
    CssString=CssString.replaceAll(";",",")
    let StylesObj=JSON.parse(CssString)
    setStyles(ObjectsContainerFlexExample,StylesObj)
})
addEventListener('load', ()=>{
    let currentCSSCode='{'+'\r\n'+'"display":"flex";'+"\r\n"+'"flex-direction": "row";'+"\r\n"+'"align-items": "center";'+"\r\n"+'"flex-wrap": "nowrap";'+"\r\n"+'"justify-content": "center"'+"\r\n"+"}"
    codeArea.innerHTML=currentCSSCode
});