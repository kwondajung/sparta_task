import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';

function App() {
  // 새로운 배열
  const [countryArr, setCountryArr] = useState([]);

  // 배열에 들어갈 요소들
  const [country, setCountry] = useState('');
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  // 📌 추가하기
  // 주석 먼저 쓰고 코드 짜기
  // 1. 먼저 있는 배열에 추가로 입력되는 객체 넣기
  // 2. state 변경
  const handleAddCountry = () => {
    const 추가 = {
      name: country,
      gold,
      silver,
      bronze,
    };

    const 새배열 = [...countryArr, 추가];
    setCountryArr(새배열);
  };

  // 📌 업데이트
  // 국가가 같은 걸 찾아서 메달 개수 수정
  // find는 조건에 맞는 것 중 제일 먼저 발견한 것만 반환함
  const handleUpdateCountry = (event) => {
    event.preventDefault();

    const 비교 = countryArr.find(function (대상) {
      if (대상.name === country) {
        return true;
      } else {
        return false;
      }
    });
    const 수정 = countryArr.map(function (대상) {
      if (대상.name === 비교.name) {
        return {
          name: country,
          gold,
          silver,
          bronze,
        };
      }
    });
    setCountryArr(수정);
  };
  // 📌 삭제하기
  // 삭제하기 btn이 클릭됐을 때 이 버튼이 어느 국가의 삭제하기 btn인지 판별하기 위해 버튼 자체에서 국가의 이름을 넘겨줘야 함
  // 그리고 그 넘겨준 인자(국가의 이름)를 여기 버튼 핸들러에서 받아오면 됨
  // 이 버튼은 form 태그 안에 있는 것이 아니기 때문에 prevent 필요 없음
  // const handleDeleteCountry = (country) => {
  //   const 삭제 = countryArr.filter(function(대상){
  //     if(대상.name === country.name){
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   });
  //   setCountryArr(삭제);
  // }

  const handleDeleteCountry = ({ name }) => {
    const 삭제 = countryArr.filter(function (대상) {
      if (대상.name === name) {
        return false;
      } else {
        return true;
      }
    });
    setCountryArr(삭제);
  };

  return (
    <div className="container">
      <h1>2024 파리 올림픽 메달 트래커</h1>
      <Input />
      <form
        className="input-group"
        onSubmit={function (e) {
          e.preventDefault(); // 새로고침 방지

          // 갱신할 배열 새롭게 만들어주기
          const newCountry = [];
          setCountry(newCountry);
        }}
      >
        <div>
          <h4>국가명</h4>
          <input
            type="text"
            placeholder="국가 입력"
            value={country}
            onChange={(e) => {
              const newCountry = e.target.value;
              setCountry(newCountry);
            }}
          />
        </div>
        <div>
          <h4>금메달</h4>
          <input
            type="number"
            value={gold}
            onChange={(e) => {
              const newGold = e.target.value;
              setGold(newGold);
            }}
          />
        </div>
        <div>
          <h4>은메달</h4>
          <input
            type="number"
            value={silver}
            onChange={(e) => {
              const newSilver = e.target.value;
              setSilver(newSilver);
            }}
          />
        </div>
        <div>
          <h4>동메달</h4>
          <input
            type="number"
            value={bronze}
            onChange={(e) => {
              const newBronze = e.target.value;
              setBronze(newBronze);
            }}
          />
        </div>
        <div className="button-group">
          <button onClick={handleAddCountry} type="submit">
            국가 추가
          </button>
          <button onClick={handleUpdateCountry} type="submit">
            업데이트
          </button>
        </div>
      </form>
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th>국가명</th>
                <th>금메달</th>
                <th>은메달</th>
                <th>동메달</th>
                <th>액션</th>
              </tr>
            </thead>
            <tbody>
              {countryArr.map((테이블) => (
                <tr key={테이블.name}>
                  <td>{테이블.name}</td>
                  <td>{테이블.gold}</td>
                  <td>{테이블.silver}</td>
                  <td>{테이블.bronze}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteCountry(테이블)}
                      type="submit"
                    >
                      삭제
                    </button>
                    {/* 함수로 감싼다/ 화살표 함수 빼면 함수의 리턴값임*/}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
