import Square from "./Square"


const Bord = ({handleSquareClick,squares,winningSquare}) => {
    
    const renderSquareHandling=(position)=>{
        const isWinningSquare = winningSquare.includes(position)
        
        return <Square value={squares[position]} onClick={()=>handleSquareClick(position)} isWinningSquare={isWinningSquare}/>
    }
  return (
    <div className="board">
        <div className="board-row">
            {renderSquareHandling(0)}
            {renderSquareHandling(1)}
            {renderSquareHandling(2)}
        </div>

        <div className="board-row">
            {renderSquareHandling(3)}
            {renderSquareHandling(4)}
            {renderSquareHandling(5)}
        </div>

        <div className="board-row">
            {renderSquareHandling(6)}
            {renderSquareHandling(7)}
            {renderSquareHandling(8)}
        </div>
        
    </div>
  )
}

export default Bord