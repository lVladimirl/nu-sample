import './index.css'
export const TotalMoney = ({ setList, list }) => {

    const values = list.map(elem => elem.selectType ==="dispensa"? elem.amount*(-1):elem.amount)
    const  totalValues = values.reduce((acc,prev)=>acc+prev,0)
    return (
        <div className="TotalMoney">
            <div className='label'>
                <p>Valor Total:</p>
                <p className='total'>R$ {totalValues}</p>
            </div>
            <p className='label-minor'>O valor se refere ao saldo</p>
        </div>
    )
}