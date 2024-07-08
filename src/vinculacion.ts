import { addKeyword } from '@builderbot/bot';
import { appToCalendar } from './calendar';

const pdfUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
const videoUrl = 'https://i.pinimg.com/originals/6a/ce/86/6ace8682547b331e7546f66b9a2dcb88.gif';

// Convocatoria
const Convocatoria = addKeyword(["1", "uno", "Convocatoria", "convocatoria"])
    .addAnswer("1️⃣ Convocatoria 📄")
    .addAnswer("1️⃣ Convocatoria 📄", { media: pdfUrl })
    .addAnswer([
        "Para más información sobre la convocatoria, visita: 🆕📄🔍",
        "https://upsrj.edu.mx/convocatoria/"
    ]);

// Carreras
const Carreras = addKeyword(["2", "dos", "Carreras", "carreras"])
    .addAnswer([
        "¿Qué carrera le interesa? 🎓",
        "1️⃣ Terapia Física",
        "2️⃣ Ingeniería en Software",
        "3️⃣ Ingeniería en Metrología Industrial",
        "4️⃣ Ingeniería en Sistemas Automotrices",
        "5️⃣ Ingeniería en Animación y Efectos Visuales",
        "6️⃣ Ingeniería en Robótica Computacional"
    ].join('\n'), { capture: true },
    async (ctx, { fallBack }) => {
        const validOptions = [
            "1", "uno", "Terapia Física", "terapia física",
            "2", "dos", "Ingeniería en Software", "ingeniería en software",
            "3", "tres", "Ingeniería en Metrología Industrial", "ingeniería en metrología industrial",
            "4", "cuatro", "Ingeniería en Sistemas Automotrices", "ingeniería en sistemas automotrices",
            "5", "cinco", "Ingeniería en Animación y Efectos Visuales", "ingeniería en animación y efectos visuales",
            "6", "seis", "Ingeniería en Robótica Computacional", "ingeniería en robótica computacional"
        ];

        if (!validOptions.includes(ctx.body)) {
            return fallBack(`Seleccione una opción válida del menú de Carreras✅💬${ctx.name}`);
        }
    },
    [
        addKeyword(["1", "uno", "Terapia Física", "terapia física"])
            .addAnswer("1️⃣ Terapia Física 🎓")
            .addAnswer("1️⃣ Terapia Física 🎓", { media: videoUrl })
            .addAnswer("1️⃣ Terapia Física 🎓", { media: pdfUrl }),

        addKeyword(["2", "dos", "Ingeniería en Software", "ingeniería en software"])
            .addAnswer("2️⃣ Ingeniería en Software 🎓")
            .addAnswer("2️⃣ Ingeniería en Software 🎓", { media: videoUrl })
            .addAnswer("2️⃣ Ingeniería en Software 🎓", { media: pdfUrl }),

        addKeyword(["3", "tres", "Ingeniería en Metrología Industrial", "ingeniería en metrología industrial"])
            .addAnswer("3️⃣ Ingeniería en Metrología Industrial 🎓")
            .addAnswer("3️⃣ Ingeniería en Metrología Industrial 🎓", { media: videoUrl })
            .addAnswer("3️⃣ Ingeniería en Metrología Industrial 🎓", { media: pdfUrl }),

        addKeyword(["4", "cuatro", "Ingeniería en Sistemas Automotrices", "ingeniería en sistemas automotrices"])
            .addAnswer("4️⃣ Ingeniería en Sistemas Automotrices 🎓")
            .addAnswer("4️⃣ Ingeniería en Sistemas Automotrices 🎓", { media: videoUrl })
            .addAnswer("4️⃣ Ingeniería en Sistemas Automotrices 🎓", { media: pdfUrl }),

        addKeyword(["5", "cinco", "Ingeniería en Animación y Efectos Visuales", "ingeniería en animación y efectos visuales"])
            .addAnswer("5️⃣ Ingeniería en Animación y Efectos Visuales 🎓")
            .addAnswer("5️⃣ Ingeniería en Animación y Efectos Visuales 🎓", { media: videoUrl })
            .addAnswer("5️⃣ Ingeniería en Animación y Efectos Visuales 🎓", { media: pdfUrl }),

        addKeyword(["6", "seis", "Ingeniería en Robótica Computacional", "ingeniería en robótica computacional"])
            .addAnswer("6️⃣ Ingeniería en Robótica Computacional 🎓")
            .addAnswer("6️⃣ Ingeniería en Robótica Computacional 🎓", { media: videoUrl })
            .addAnswer("6️⃣ Ingeniería en Robótica Computacional 🎓", { media: pdfUrl })
    ]
);

// Contactar asesor
const ContactarAsesor = addKeyword(["3", "tres", "Contactar asesor", "contactar asesor"])
    .addAnswer("3️⃣ Contactar asesor académico 📞")
    .addAnswer([
        "Para contactar a un asesor académico, por favor envía un correo a asesor@upsrj.edu.mx o llama al (123) 456-7890.",
        "Estamos aquí para ayudarte con cualquier consulta que tengas."
    ]);

// Preguntas recurrentes
const PreguntasRecurrentes = addKeyword(["4", "cuatro", "Preguntas recurrentes", "preguntas recurrentes"])
    .addAnswer("4️⃣ Preguntas recurrentes ❓")
    .addAnswer([
        "Aquí tienes algunas preguntas recurrentes:",
        "1. ¿Cómo me inscribo?",
        "2. ¿Cuáles son los requisitos?",
        "3. ¿Qué documentos necesito?",
        "4. ¿Cuáles son las fechas importantes?",
        "Para más información, visita: 🆕📄🔍",
        "https://upsrj.edu.mx/preguntas-recurrentes/"
    ]);

// Formulario
const FormularioFlow = addKeyword("5")
    .addAction(async (_, { flowDynamic }) => {
        await flowDynamic('👍 Ok, voy a pedirte unos datos para agendar.');
        await flowDynamic('📝 ¿Cuál es tu nombre?');
    })
    .addAction({ capture: true }, async (ctx, { state, flowDynamic }) => {
        await state.update({ name: ctx.body });
        await flowDynamic('📞 ¿Cuál es tu teléfono?');
    })
    .addAction({ capture: true }, async (ctx, { state, flowDynamic }) => {
        await state.update({ phone: ctx.body });
        await flowDynamic('❓ Última pregunta, ¿cómo te enteraste de nosotros?');
    })
    .addAction({ capture: true }, async (ctx, { state, flowDynamic }) => {
        await state.update({ source: ctx.body });
        await flowDynamic('📧 ¿Cuál es tu email?');
    })
    .addAction({ capture: true }, async (ctx, { state, flowDynamic, fallBack }) => {
        if (!ctx.body.includes('@')) {
            return fallBack('⚠️ Debes ingresar un email correcto.');
        }

        
      

        await flowDynamic('✅ ¡Listo! Agendado. ¡Buen día! 😊');
    });

// Vinculación
export const Vinculacion = addKeyword(["3", "tres", "Vinculación", "vinculacion"])
    .addAnswer("3️⃣ Vinculación 🔗✨")
    .addAnswer([
        "Elige una opción:",
        "1️⃣ Convocatoria 📄",
        "2️⃣ Carreras 🎓",
        "3️⃣ Contactar asesor académico 📞",
        "4️⃣ Preguntas recurrentes ❓",
        "5️⃣ Formulario 📝"
    ].join('\n'), { capture: true },
    async (ctx, { fallBack }) => {
        const validOptions = [
            "1", "uno", "Convocatoria", "convocatoria",
            "2", "dos", "Carreras", "carreras",
            "3", "tres", "Contactar asesor", "contactar asesor",
            "4", "cuatro", "Preguntas recurrentes", "preguntas recurrentes",
            "5", "cinco", "Formulario", "formulario"
        ];

        if (!validOptions.includes(ctx.body)) {
            return fallBack(`Seleccione una opción válida del menú de Vinculación✅💬${ctx.name}`);
        }
    },
    [
        Convocatoria, Carreras, ContactarAsesor, PreguntasRecurrentes, FormularioFlow
    ]
);
