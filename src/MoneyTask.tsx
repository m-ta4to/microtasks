import React, {useState} from 'react';

// type MoneyTaskPropsType={
//     money:MoneyItems[]
// }
// type MoneyItems={
//     banknots: string
//     value: number
//     number: string
//
// }
type FilterType= 'all'| 'dollars'| 'rubls'
export const MoneyTask = () => {
    const [money, setMoney] = useState( [
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const [filter, setFilter]=useState<FilterType>('all')
    let currentMoney = money;
    if (filter === 'dollars') {
        currentMoney = money.filter(filtredMoney => filtredMoney.banknots === 'dollars');
    }
    if (filter === 'rubls') {
        currentMoney = money.filter(filtredMoney => filtredMoney.banknots === 'rubls');
    }
    const  onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }
    return (
        <div>
          <ul>{money.map( (el,index)=>{
              return (
              <li key={index}>
                  <span>{el.banknots}</span>
                  <span>{el.value}</span>
                  <span>{el.number}</span>
              </li>
              )
          })}

          </ul>
            <div>
                <button onClick={() => onClickFilterHandler('all')}>all</button>
                <button onClick={() => onClickFilterHandler('rubls')}>RUBLS</button>
                <button onClick={() => onClickFilterHandler('dollars')}>Dollars</button>

            </div>
        </div>
    );
};

