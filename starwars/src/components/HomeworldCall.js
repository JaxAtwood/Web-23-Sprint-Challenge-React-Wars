// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Homeworld from "./Homeworld";


// const HomeworldCall = () => {
//     const [planet, setPlanet] = useState([]);

//     useEffect(() => {
//         axios
//         .get(`https://swapi.co/api/planets/`)
//         .then(res => {
//             const home = res.data.results;
//             console.log(home);
//             setPlanet(home);
//         }, [])
//         .catch(err => {
//             console.log(err);
//         })
//     }, []);

//     return (
//         <div>
//             {planet.map(loop => {
//                 return (
//                     <Homeworld 
//                         key={loop.id}
//                         id={loop.id}
//                         name={loop.name}
//                     />
//                 )
//             })}
//         </div>
//     )
// }

// export default HomeworldCall;