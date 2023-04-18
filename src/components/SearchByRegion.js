

const SearchByRegion = ({setSearchRegion}) => {
    
    const area = [
            {
                "region": "Arica y Parinacota",
               
            },
            {
                "region": "Tarapacá",
                
            },
            {
                "region": "Antofagasta",
              
            },
            {
                "region": "Atacama",
                
            },
            {
                "region": "Coquimbo",
            
            },
            {
                "region": "Valparaíso",
         
            },
            {
                "region": "Región del Libertador Gral. Bernardo O’Higgins",
               
            },
            {
                "region": "Región del Maule",
              
            },
            {
                "region": "Región de Ñuble",
                
            },
            {
                "region": "Región del Biobío",
             
            },
            {
                "region": "Región de la Araucanía",
              
            },
            {
                "region": "Región de Los Ríos",
               
            },
            {
                "region": "Región de Los Lagos",
              
            },
            {
                "region": "Región Aisén del Gral. Carlos Ibáñez del Campo",
               
            },
            {
                "region": "Región de Magallanes y de la Antártica Chilena",
             
            },
            {
                "region": "Región Metropolitana de Santiago",
               
             }
        ]
 
 
    
    return (
        <div className="container">
            <select class="form-select" aria-label="Default select example"
                onChange={(e) => setSearchRegion(e.target.value)}
                
                >
                <option selected>Región</option>

                {area.map((reg) => {
                    console.log(reg)
                    return (
                    <option key={reg.id}>
                        {reg.region}
                    </option>
                    );
                })}
           
      
              
            </select >
                


        </div>
    )
}


export default SearchByRegion;