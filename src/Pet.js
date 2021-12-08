
const Pet = ({name,
    location,
    breed,
    animal,
    id,
    images}
    
    ) => {
    let hero = "http://pets-images.dev-apis.com/pets/none.jpg"
    if(images.length){
        hero = images[0];
    }
    return (
        <a href={`/details/${id}`} className="pet"> 
            <div clssName="image-container">
                <img src={hero} alt={name} />
            </div>
                
            <div className="info">
                <h1>{name}</h1>
                <h2>{`${animal} - ${breed} - ${location}`}</h2>
            </div>
        </a>
    )
}
/*const Pet = (props) => {
    return React.createElement(
      "div",
      {},
      React.createElement("h2", {}, props.name),
      React.createElement("h3", {}, props.animal),
      React.createElement("h3", {}, props.breed)
    );
  };*/
  

  export default Pet; 