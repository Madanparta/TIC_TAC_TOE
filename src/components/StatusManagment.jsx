// import Square from "./Square"

const StatusManagment = ({winner,gamingBord}) => {

    const {squares,isXNext}=gamingBord
    const isMoveLeft = squares.every(squareValue => squareValue !== null)

    const howIsNext = isXNext?`X`:`O`
    console.log(squares)

    const renderStatusManagment=()=>{
        if(winner){
            return <>winner is <span className={winner==="X"?"text-orange":"text-green"}>{winner}</span></>
        }
        if(!winner && isMoveLeft){
            return <><span className="text-orange">X</span> and <span className="text-green">O</span> is trid</>
        }
        if(!winner && !isMoveLeft){
            return <>Next palyer is <span className={isXNext?"text-orange":"text-green"}>{howIsNext}</span></>
        }
    }

  return (
    <div className="status-message">{renderStatusManagment()}</div>
  )
}

export default StatusManagment