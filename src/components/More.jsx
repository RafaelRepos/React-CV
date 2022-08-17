import React from "react";

const More=({languages,habilities,volunteer})=>{

    return(
        <div>
        <div>
            <h3>Languages</h3>
            <p>{languages.language}</p>
            <p>{languages.wrlevel}</p>
            <p>{languages.splevel}</p>

        </div>
        <div>
            <h3>Habilities</h3>
            <p>{habilities}</p>

        </div>
        <div>
            <h3>Volunteer</h3>
            {volunteer.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p > {item.name}</p>
              <p > {item.where}</p>
              <p > {item.description}</p>
            </div>
          );
        })}

        </div>
        </div>
    )


}


export default More