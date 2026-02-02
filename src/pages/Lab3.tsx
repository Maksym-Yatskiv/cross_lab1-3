import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import React, { useEffect, useState } from 'react'
import SharedHeader from '../components/SharedHeader'
import { Animal } from '../class/abstract/Animal';
import { AnimalDTO, AnimalFactory } from '../class/abstract/AnimalFactory';

import "./Lab3.css";

const Lab3 = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [averageSpeed, setAverageSpeed] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://api.jsonbin.io/v3/b/69812ceed0ea881f409c0cac"
      );
      const data = await res.json();

      const list: Animal[] = [];
      data.record.forEach((anim: AnimalDTO) => {
        list.push(AnimalFactory.getAnimal(anim));
      });
      const avg = list.reduce((sum, a) => sum + a.getSpeed(), 0) / list.length;
      setAverageSpeed(avg);

      setAnimals(list);
    }

    fetchData();
  }, []);

  return (
    <IonPage>
      <SharedHeader lab_name="Лабораторна робота №3"></SharedHeader>
      <IonContent className="ion-padding">
        <h2>Середня швидкість: {averageSpeed.toFixed(2)}</h2>

        <div className="card-grid">
          {animals.map((a, idx) => (
            <IonCard
              key={idx}
              color={a.getSpeed() < averageSpeed ? "danger" : "light"}
            >
              <IonCardHeader>
                <IonCardTitle>{a.getName()}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>Вік: {a.age}</p>
                <p>Швидкість: {a.getSpeed()}</p>
                {"furColor" in a && <p>Колір шерсті: {(a as any).furColor}</p>}
                {"breed" in a && <p>Порода: {(a as any).breed}</p>}
              </IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Lab3;