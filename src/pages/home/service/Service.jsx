
const Service = ({service}) => {
   const {name, description, image} = service;
    return (
        <div className="flex flex-col justify-center text-center">
            <figure>
                <img className="mx-auto" src={image} alt="" />
                <h3 className="font-bold text-xl mt-8 mb-3">{name}</h3>
                <p>{description}</p>
            </figure>
        </div>
    );
};

export default Service;