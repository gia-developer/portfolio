const DegreesCard = ({size, title, year, institute}) => {
    return (
        <li className="p-4 rounded-xl bg-white flex space-x-4">
            <div className={`w-[120px] h-[120px] rounded-full flex justify-center items-center`} style={{background: `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#CE7BB0 ${size}%, #E4B3CB 0)`}}>
                <span className="text-lg">{size}%</span>
                <progress value={size} min="0" max="100" className="hidden h-0 w-0">{size}%</progress>
            </div>
            <div className="w-[calc(100%_-_136px)] flex flex-col justify-between">
                <div>
                    <h3 className="font-bold">{title}</h3>
                    <p>{year}</p>
                </div>
                <p className="text-sm text-text-grey">{institute}</p>
            </div>
        </li>
      );
}
  
export default DegreesCard;
  