
const Square = ({value,onClick,isWinningSquare}) => {
  const colorClassName = value === 'X' ? 'text-orange':'text-green';
  const winnerClassName = isWinningSquare?'winning':''
  return (
    <button type="button" className={`square ${colorClassName} ${winnerClassName}`} onClick={onClick}>{value}</button>
  )
}

export default Square