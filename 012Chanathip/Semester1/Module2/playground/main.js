const person = [
    { id: 1, name: 'Suda' },
    { id: 2, name: 'Surapong' },
    { id: 3, name: 'Somchai' }
    ]
    function getPersonName([ , ,{ name }]) {
        return name
    }  
    
    
    console.log(getPersonName(person)) // Sompong