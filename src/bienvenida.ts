import { addKeyword } from '@builderbot/bot';
import { serviciosFlow } from './serviciosEscolares';
import { Ingles } from './ingles';
import { Vinculacion } from './vinculacion';

const BackAnswer:any = "Seleccione un número del menú✅💬";

export const welcomeFlow = addKeyword(['hi', 'hello', 'hola'])
    .addAnswer("👩🏽‍💻 ¡Hola! Soy Denisse, la asistente virtual de la UPSRJ.")
    .addAnswer(
        [
            "  Menu ✨📚",
            "",
            "1️⃣ Servicios Escolares 🏫📚✨",
            "2️⃣ Inglés 🇬🇧🇺🇸📚",
            "3️⃣ Vinculación 🔗✨",
            "4️⃣ Salir ❌"
        ].join('\n'),
        { delay: 800, capture: true },
        async (ctx, { fallBack }) => {
            const validOptions = [
                "1", "uno", "Servicios Escolares", "servicios",
                "2", "Ingles", "ingles",
                "3", "Vinculacion", "vinculacion",
                "4", "Salir", "salir"
            ];

            if (!validOptions.includes(ctx.body)) {
                return fallBack(BackAnswer);
            }
        },
        [
            serviciosFlow, Ingles, Vinculacion
        ]
    );
