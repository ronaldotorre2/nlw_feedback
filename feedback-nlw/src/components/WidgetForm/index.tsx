import { useState } from 'react';

import { CloseButton } from "../CloseButton";

import figmoji_bug from '../../assets/figmoji/bug.svg';
import figmoji_idea from '../../assets/figmoji/idea.svg';
import figmoji_thought from '../../assets/figmoji/thought.svg';

import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSucessStep } from './Steps/FeedbackSuccessStep';


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: figmoji_bug,
            alt:'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Idea',
        image: {
            source: figmoji_idea,
            alt:'Imagem de uma lampada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: figmoji_thought,
            alt:'Imagem de um balão de pensamento'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSend, setFeedbackSend] = useState(false);

    function handleRestartFeedback(){
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl
         mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)]
         md:w-auto">
           { feedbackSend ? (
               <FeedbackSucessStep/>
           ): (
             <>
                {!feedbackType ? (
                     <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                ): (
                    <FeedbackContentStep 
                    feedbackType= {feedbackType}
                    onFeedbackRestartRequest={handleRestartFeedback}
                    onFeedbackSend={() => setFeedbackSend(true)}
                    />   
                )}
             </>
           )}
            
            
            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" 
                href="https://rocketseat.com.br" target='_blank'>Rocketseat</a>
            </footer>
        </div>
    );
}