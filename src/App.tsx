import React from 'react';
import {Button, ButtonGroup, Route, Router, useBotContext } from '@urban-bot/core';
import { Info } from './pages/Info';
import { Vacancy } from './pages/Vacancy';
import { Cv } from './pages/Cv';


export function App() {
    const { chat } = useBotContext();

    return (
      
<>
              
                <ButtonGroup maxColumns={2}
                    title={`Добро пожаловать в бот по поиску работы для экспатов в Узбекистане, ${chat.firstName ?? ''}! Если вы ищете работу, нажмите на кнопку /cv, если вы работодатель и хотите разместиь вакансию -  /vacancy`}
                    isReplyButtons
                 //   isNewMessageEveryRender
                    isResizedKeyboard
                >
                  
                    <Button>/cv</Button>
                    <Button>/vacancy</Button>
                    <Button>/info</Button>
                </ButtonGroup>
                <Router>
                   
                    <Route path="/cv">
                        <Cv />
                    </Route>
                    <Route path="/vacancy">
                        <Vacancy />
                    </Route>
                    <Route path="/info">
                        <Info />
                    </Route>
                </Router>
                </>
      
    );
}
