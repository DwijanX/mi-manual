import filterBasedOnInputAndColumn from "./FilterTable.js"

const inputColors=document.querySelector("#ColorsInput")
const tableColors=document.querySelector("#ColorsTable")

const inputSelectors=document.querySelector("#SelectorsInput")
const tableSeletors=document.querySelector("#SelectorsTable")

const inputUnits=document.querySelector("#UnitsInput")
const tableUnits=document.querySelector("#UnitsTable")
const clickAbleRows=document.querySelectorAll(".clickableRow")

const CloseOverlayButtons=document.querySelectorAll(".CloseOverlayButton")
const Overlays=document.querySelectorAll(".overlay")

const TheoricButtons=document.querySelectorAll(".TheoricButton")

inputColors.addEventListener("input",()=>{
    filterBasedOnInputAndColumn(inputColors,tableColors,0);
})
inputSelectors.addEventListener("input",()=>{
    filterBasedOnInputAndColumn(inputSelectors,tableSeletors,0);
})
inputUnits.addEventListener("input",()=>{
    filterBasedOnInputAndColumn(inputUnits,tableUnits,0);
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