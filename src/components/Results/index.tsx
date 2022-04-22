import * as S from './styles';

export function Results() {
  return (
    <S.Container>
      <div className="results">
        <div className="tip_amount">
          <div className="title">
            <h3>Tip Amount</h3>
            <span>/ person</span>
          </div>
          <h2>$0.00</h2>
        </div>
        <div className="total">
          <div className="title">
            <h3>Total</h3>
            <span>/ person</span>
          </div>
          <h2>$0.00</h2>
        </div>
      </div>
      <button type="reset">Reset</button>
    </S.Container>
  );
}
