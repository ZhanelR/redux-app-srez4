const data = {
    ordinal: [
        {
            news1: [
             {
                id: "sd2", text: "Article1"
             },
             {
                id: "sd1", text: "Article2"
             },
             {
                id: "savds1", text: "Article3"
             },
             {
                id: "sdavds2", text: "Article4"
             },
             {
                id: "sdavds2", text: "Article5"
             },
            ],
            news2: [
                {
                   id: "sd2", text: "Article6"
                },
                {
                   id: "sa4", text: "Article7"
                },
                {
                   id: "savds1", text: "Article8"
                },
                {
                   id: "saf5", text: "Article9"
                },
                {
                   id: "sdavds2", text: "Article10"
                },
           ]
       }
    ],
    emergency: [
        {id: "sd1"},
        {id: "sa4"},
        {id: "saf5"}
    ],

}

/* data.emergency.forEach(emergencyElement => {
    debugger;
    const ordinalElementList = data.ordinal[0];
    console.log(Object.values(ordinalElementList))
    Object.values(ordinalElementList).forEach(newsElement => {
        debugger;
        newsElement.forEach(articleElement => {
            if(emergencyElement.id === articleElement.id) {
                console.log(articleElement["text"]);
            }
        })
        
    }) 
});  */


const ordinalElementList = data.ordinal[0];
    console.log(Object.values(ordinalElementList))
    Object.values(ordinalElementList).forEach(newsElement => {
        debugger;
        newsElement.forEach(articleElement => {
            data.emergency.forEach(emergencyElement => {
                if(emergencyElement.id === articleElement.id) {
                    console.log(articleElement["text"]);
                }
            })
            
        })
        
    }) 


