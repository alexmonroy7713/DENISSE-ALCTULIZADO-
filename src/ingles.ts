import { addKeyword } from '@builderbot/bot';

const pdfUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

const ClasesSabatinas = addKeyword(["1", "uno", "Clases Sabatinas", "clases sabatinas"])
    .addAnswer("1️⃣ Clases Sabatinas 🇬🇧")
    .addAnswer("1️⃣ Clases Sabatinas 🇬🇧", { media: pdfUrl })
    .addAnswer(
        [
            "Para más información sobre Clases Sabatinas, visita: 🆕📄🔍",
            "  ",
            "https://upsrj.edu.mx/clases-sabatinas/"
        ]
    );

const CertificacionITEP = addKeyword(["2", "dos", "Certificación ITEP", "certificación ITEP"])
    .addAnswer("2️⃣ Certificación ITEP 🇬🇧")
    .addAnswer("2️⃣ Certificación ITEP 🇬🇧", { media: pdfUrl })
    .addAnswer(
        [
            "Para más información sobre Certificación ITEP, visita: 🆕📄🔍",
            "  ",
            "https://upsrj.edu.mx/certificacion-itep/"
        ]
    );

const CursosEgresados = addKeyword(["1", "uno", "Cursos", "cursos"])
    .addAnswer("1️⃣ Cursos para Egresados 🇬🇧")
    .addAnswer("1️⃣ Cursos para Egresados 🇬🇧", { media: pdfUrl })
    .addAnswer(
        [
            "Para más información sobre Cursos para Egresados, visita: 🆕📄🔍",
            "  ",
            "https://upsrj.edu.mx/cursos-egresados/"
        ]
    );

const CertificacionesEgresados = addKeyword(["2", "dos", "Certificaciones", "certificaciones"])
    .addAnswer("2️⃣ Certificaciones para Egresados 🇬🇧")
    .addAnswer("2️⃣ Certificaciones para Egresados 🇬🇧", { media: pdfUrl })
    .addAnswer(
        [
            "Para más información sobre Certificaciones para Egresados, visita: 🆕📄🔍",
            "  ",
            "https://upsrj.edu.mx/certificaciones-egresados/"
        ]
    );

const Egresados = addKeyword(["3", "tres", "Egresados", "egresados"]).addAnswer(
    [
        "Menu de Egresados 🇬🇧",
        "",
        "Elige una opción:",
        "1️⃣ Cursos",
        "2️⃣ Certificaciones"
    ].join('\n'),
    { delay: 800, capture: true },
    async (ctx, { fallBack }) => {
        const validOptions = ["1", "uno", "Cursos", "cursos", "2", "dos", "Certificaciones", "certificaciones"];
        if (!validOptions.includes(ctx.body)) {
            return fallBack(`Seleccione una opción válida del menú de Egresados✅💬${ctx.name}`);
        }
    },
    [
        CursosEgresados, CertificacionesEgresados
    ]
);

export const Ingles = addKeyword(["2", "dos", "Inglés", "ingles"])
    .addAnswer("2️⃣ Inglés 🇬🇧🇺🇸📚")
    .addAnswer(
        [
            "Elige una opción:",
            "1️⃣ Clases Sabatinas",
            "2️⃣ Certificación ITEP",
            "3️⃣ Egresados"
        ].join('\n'),
        {  capture: true },
        async (ctx, { fallBack }) => {
            const validOptions = ["1", "uno", "Clases Sabatinas", "clases sabatinas", "2", "dos", "Certificación ITEP", "certificación ITEP", "3", "tres", "Egresados", "egresados"];
            if (!validOptions.includes(ctx.body)) {
                return fallBack(`Seleccione una opción válida del menú de Inglés✅💬${ctx.name}`);
            }
        },
        [
            ClasesSabatinas, CertificacionITEP, Egresados
        ]
    );
