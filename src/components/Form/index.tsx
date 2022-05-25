import * as S from './styles';
import iconDollar from '../../assets/images/icon-dollar.svg';
import iconPerson from '../../assets/images/icon-person.svg';
import { useEffect, useState } from 'react';

export function Form() {
  const [bill, setBill] = useState(0 as number);
  const [tipSelect, setTipSelect] = useState(0 as number);
  const [customTip, setCustomTip] = useState(0 as number);
  const [numberPeople, setNumberPeople] = useState(0 as number);
  const [tips, setTips] = useState([
    {
      id: 1,
      value: 5,
      isSelected: false,
    },
    {
      id: 2,
      value: 10,
      isSelected: false,
    },
    {
      id: 3,
      value: 15,
      isSelected: false,
    },
    {
      id: 4,
      value: 20,
      isSelected: false,
    },
    {
      id: 5,
      value: 50,
      isSelected: false,
    },
  ]);
  const [result, setResult] = useState({
    tipAmount: '',
    total: '',
  });

  console.log(`${bill} ${tipSelect} ${numberPeople}`);

  const resultCalculate = (bill: number, tip: number, people: number) => {
    const tipValue = bill * (tip / 100);
    const tipAmount = tipValue / people;

    const total = (bill + tipValue) / people;

    const tipAmountFormat = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
      Number(tipAmount).toFixed(2),
    );

    const totalFormat = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total);

    setResult({
      tipAmount: tipAmountFormat,
      total: totalFormat,
    });
  };

  useEffect(() => {
    if (customTip > 0) {
      resultCalculate(bill, customTip, numberPeople);
    } else {
      resultCalculate(bill, tipSelect, numberPeople);
    }

    console.log(result, tipSelect);
  }, [tipSelect, bill, numberPeople]);

  return (
    <S.Container>
      <div className="bill">
        <h2 className="title">Bill</h2>
        <label className="selected-bill">
          <img src={iconDollar} alt="" />
          <input type="number" value={bill} onChange={(e) => setBill(e.target.value)} />
        </label>
      </div>
      <div className="tips">
        <h2 className="title">Select Tip %</h2>
        <div className="select_tips">
          {tips.map((tip) => (
            <button
              key={tip.id}
              value={tip.value}
              className={tipSelect === tip.value ? 'active' : ''}
              onClick={() => setTipSelect(tip.value)}
            >
              {tip.value}%
            </button>
          ))}
          <input type="number" placeholder="CUSTOM" onChange={(e) => setCustomTip(e.target.value)} />
        </div>
      </div>
      <div className="people">
        <h2 className="title">Number of People</h2>
        <label htmlFor="" className="selected-people">
          <img src={iconPerson} alt="" />
          <input type="number" value={numberPeople} onChange={(e) => setNumberPeople(e.target.value)} />
        </label>
      </div>
    </S.Container>
  );
}
