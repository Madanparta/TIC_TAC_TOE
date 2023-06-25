
const History = ({history,moveTo,currentMove}) => {
  return (
    <div className="history-wrapper" >
        <ul className="history">
            {
                history.map((_,indx)=>(<li className="li" key={indx}>
                    <button onClick={()=>moveTo(indx)} className={`btn-move ${currentMove === indx? 'active':''}`} type="button" >{indx === 0 ? `Go to game start`:`Go to move #${indx}`}</button>
                </li>))
            }
        </ul>
    </div>
  )
}

export default History