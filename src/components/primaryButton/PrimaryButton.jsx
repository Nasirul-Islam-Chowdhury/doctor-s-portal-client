
const PrimaryButton = ({children}) => {
    return (
        <div>
             <button className='btn mt-8 bg-gradient-to-r from-primary to-secondary'>{children}</button>
        </div>
    );
};

export default PrimaryButton;