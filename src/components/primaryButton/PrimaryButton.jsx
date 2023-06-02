
const PrimaryButton = ({children}) => {
    return (
        <div>
             <button className='btn mt-8 text-white bg-gradient-to-r from-primary to-secondary'>{children}</button>
        </div>
    );
};

export default PrimaryButton;