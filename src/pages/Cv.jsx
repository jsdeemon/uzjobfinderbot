import React from 'react';
import { Dialog, DialogStep, Text, useBotContext } from '@urban-bot/core';
import TelegramBot from 'node-telegram-bot-api'
import { TELEGRAM_TOKEN, CHANNELCV } from '../render/telegram'


export function Cv() {

   
    const { chat } = useBotContext()
    const bot = new TelegramBot(TELEGRAM_TOKEN, {polling: false});

    // if (!chat.username) {
    //     return <Text>У вас не указан username, поэтому бот не может разместить вашу анкету на канале. Для размещения анкеты вы должны указать свой username в вашем телеграм профиле. Для этого перейдите в меню настройки - изменить профиль - и укажите имя пользователя.</Text>;
    //     }

    return (
       
        <Dialog
         onFinish={(answers) => {
           //  console.log(answers);
             let message = `\n(1) Имя: ${answers.name}\n(2) Возраст: ${answers.age}\n(3) Профессия: ${answers.major}\n(4) Гражданство: ${answers.citizenship}\n(5) Контактная информация: ${answers.contacts}\n\n--------------------------------------------\n(6) Дополнительная информация:\n\n${answers.about}`

             bot.sendMessage(CHANNELCV, message)
             bot.sendMessage(chat.id, `Ваше резюме опубликовано на канале https://t.me/uzexpatcv`)
         }}>
            <DialogStep
                content={<Text>Укажите Ваше имя:</Text>} 
                id="name"
              //  onNext={(name) => console.log(name)}
            >
                <DialogStep
                    content={<Text>Укажите Ваш возраст:</Text>}
                    id="age"
                >
                    <DialogStep 
                        content={<Text>Укажите Вашу профессию:</Text>}
                        id="major"
                    >
                         <DialogStep 
                        content={<Text>Укажите Ваше гражданство:</Text>}
                        id="citizenship"
                    >
                          <DialogStep 
                        content={<Text>Укажите контактную информацию:</Text>}
                        id="contacts"
                    >
                          <DialogStep 
                        content={<Text>Укажите дополнительную информацию о себе:</Text>}
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