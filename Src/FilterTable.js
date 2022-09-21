function filterBasedOnInputAndColumn(filterObject,tableObject,numberOfColumnToFilter) 
{
    let filter = filterObject.value.toUpperCase();
    let tdQty=tableObject.getElementsByTagName("th").length
    let tr = tableObject.getElementsByTagName("tr");
    let RowspanVal=0;
    let lastDisplayApplied
    for (let i = 0; i < tr.length; i++) 
    {
        

        let td = tr[i].getElementsByTagName("td")[numberOfColumnToFilter]; // se filtrara en base al primer elemento
        
        if (td) 
        {

            let rowspanRetrieved=td.getAttribute('rowspan');
            if(RowspanVal==0)
            {
                let txtValue = td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) 
                {
                    tr[i].style.display = "";
                    lastDisplayApplied="";
                } 
                else 
                {
                    tr[i].style.display = "none";
                    lastDisplayApplied="none";
                }
            }
            else
            {
                tr[i].style.display=lastDisplayApplied;
                RowspanVal-=1;
            }
            if (rowspanRetrieved)
            {
                RowspanVal+=rowspanRetrieved-1;
            }
            
        }
    
    }
}

export default filterBasedOnInputAndColumn