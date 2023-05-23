const ProgressBar = ({size}) => {
    return (
        <div className="w-full bg-primary-light rounded-full h-2.5">
            <div className="bg-primary-dark h-2.5 rounded-full" style={{width: `${size}%`}}></div>
        </div>
    );
}
  
export default ProgressBar;
  