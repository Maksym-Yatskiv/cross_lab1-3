import { IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonContent, IonInput, IonButton} from '@ionic/react';
import './Tab3.css';
import SharedHeader from '../components/SharedHeader';
import { useState } from 'react';
import { Task3 } from '../class/Task3';

const Tab3: React.FC = () => {
  const [n1, setN1] = useState<number>(0);
  const [result, setResult] = useState<Task3>();

  const calculate = () => {
    const calc = new Task3(n1);

    setResult(calc);
  }

  return (
    <IonPage>
      <SharedHeader lab_name="Лабораторна робота №1"></SharedHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Завдання №3</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              Згенерувати матрицю розміром NxN. Виокремити за допомогою кольору
              усі парні від’ємні елементи кратні 7.
            </IonItem>
            <IonItem>
              <IonInput
                label="Введіть перше число"
                labelPlacement="floating"
                type="number"
                value={n1}
                onIonInput={(e) => setN1(Number(e.detail.value))}
              ></IonInput>
            </IonItem>
            <IonButton
              expand="block"
              onClick={calculate}
              className="ion-margin-top"
            >
              Розрахувати
            </IonButton>
          </IonCardContent>

          {result && (
            <table className='task3-table'>
              <tbody>
                {result.matrix.map((row, i) => (
                  <tr key={i}>
                    {row.map((value, j) => {
                      return (
                        <td
                          key={j}
                          className={result.isHighlighted(value) ? 'cell highlighted' : 'cell'}
                        >
                          {value}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </IonCard>
      </IonContent>
    </IonPage>
  );

};

export default Tab3;
