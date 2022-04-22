import * as S from './styles';
import iconDollar from '../../assets/images/icon-dollar.svg';
import iconPerson from '../../assets/images/icon-person.svg';

const tipos = [
  {
    id: 1,
    value: 5,
    isSelected: true,
  },
  {
    id: 2,
    value: 5,
    isSelected: false,
  },
  {
    id: 3,
    value: 5,
    isSelected: false,
  },
  {
    id: 4,
    value: 5,
    isSelected: false,
  },
  {
    id: 5,
    value: 5,
    isSelected: false,
  },
];

export function Form() {
  return (
    <S.Container>
      <div className="bill">
        <h2 className="title">Bill</h2>
        <label className="selected-bill">
          <img src={iconDollar} alt="" />
          <input type="number" />
        </label>
      </div>
      <div className="tips">
        <h2 className="title">Select Tip %</h2>
        <div className="select_tips">
          {tipos.map((tip) => (
            <button key={tip.id} value="5" className={tip.isSelected ? 'active' : ''}>
              {tip.value}%
            </button>
          ))}
          <input type="number" placeholder="CUSTOM" />
        </div>
      </div>
      <div className="people">
        <h2 className="title">Number of People</h2>
        <label htmlFor="" className="selected-people">
          <img src={iconPerson} alt="" />
          <input type="number" />
        </label>
      </div>
    </S.Container>
  );
}
