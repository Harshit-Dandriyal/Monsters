import React from 'react';
import './CardListStyle.css';
import { Card } from '../Cards/Card';
export const Cardlist =(props) => (
 <div className = "card-list">
    {

    props.monster.map(

        monster=> <Card key = {monster.id} monster={monster}></Card>
    
    )}
</div>
);