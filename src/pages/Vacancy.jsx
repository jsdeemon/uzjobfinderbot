import React from 'react';
import { Dialog, DialogStep, Text, useBotContext } from '@urban-bot/core';
import TelegramBot from 'node-telegram-bot-api'
import { TELEGRAM_TOKEN, CHANNELJOB } from '../render/telegram'


export function Vacancy() {


    const { chat } = useBotContext()
    const bot = new TelegramBot(TELEGRAM_TOKEN, {polling: false});

    // if (!chat.username) {
    //     return <Text>У вас не указан username, поэтому бот не может разместить вашу анкету на канале. Для размещения анкеты вы должны указать свой username в вашем телеграм профиле. Для этого перейдите в меню настройки - изменить профиль - и укажите имя пользователя.</Text>;
    //     }

    return (
       
        <Dialog
         onFinish={(answers) => {
           //  console.log(answers);
             let message = `\n(1) Вакансия: ${answers.name}\n(2) Название компании: ${answers.company}\n(3) Требования: ${answers.requirements}\n(4) Зарплата: ${answers.salary}\n(5) Обращаться: ${answers.contacts}\n\n--------------------------------------------\n(6) Дополнительная информация:\n\n${answers.about}`

             bot.sendMessage(CHANNELJOB, message)
             bot.sendMessage(chat.id, `Ваша вакансия опубликована на канале https://t.me/uzvacancies`)
         }}>
            <DialogStep
                content={<Text>Укажите название вакансии:</Text>} 
                id="name"
              //  onNext={(name) => console.log(name)}
            >
                <DialogStep
                    content={<Text>Укажите навание компании:</Text>}
                    id="company"
                >
                    <DialogStep 
                        content={<Text>Опишите требования к кандидату:</Text>}
                        id="requirements"
                    >
                           <DialogStep 
                        content={<Text>Укажите примерный уровень зарплаты:</Text>}
                        id="salary"
                    >
                         <DialogStep 
                        content={<Text>Укажите контактную информацию (телефон, адрес эл. почты, и т.п.):</Text>}
                        id="contacts"
                    >
                          <DialogStep 
                        content={<Text>Дополнительная информация:</Text>}
                        id="about"
                    >
                     
                </DialogStep>
            </DialogStep>
            </DialogStep>
            </DialogStep>
            </DialogStep> 
            </DialogStep> 
          
        </Dialog>
    
    );
}