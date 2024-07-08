import { addKeyword } from '@builderbot/bot';

const pdfUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

// Sección 1: Becas
const Becas = addKeyword(["4", "cuatro", "Becas", "becas"])
    .addAnswer("4️⃣ Becas 🎓💰")
    .addAnswer("4️⃣ Becas 🎓💰", { media: pdfUrl })
    .addAnswer(
        [
            "Consulta la información sobre becas en: 🆕📄🔍",
            "  ",
            "https://upsrj.edu.mx/becas/"
        ]
    );

// Sección 2: Admisiones
const Admisiones = addKeyword(["1", "uno", "Admisiones"])
    .addAnswer("1️⃣ Admisiones 📝🎓")
    .addAnswer("1️⃣ Admisiones 📝🎓", { media: pdfUrl })
    .addAnswer(
        [
            "La información más reciente la podrás encontrar en: 🆕📄🔍",
            "  ",
            "https://upsrj.edu.mx/admision/"
        ]
    );

// Sección 3: Titulación
const Titulacion = addKeyword(["5", "cinco", "Titulación", "titulacion", "titulación", "Titulacion"])
    .addAnswer("5️⃣ Titulación 🎓📜")
    .addAnswer("5️⃣ Titulación 🎓📜", { media: pdfUrl })
    .addAnswer(
        [
            "Toda la información sobre titulación está disponible en: 🆕📄🔍",
            "  ",
            "https://upsrj.edu.mx/titulacion/"
        ]
    );

// Sección 4: Reinscripción
const Reinscripciones = addKeyword(["2", "dos", "Reinscripciones", "reinscripciones"])
    .addAnswer("2️⃣ Reinscripciones 🔄📝")
    .addAnswer("2️⃣ Reinscripciones 🔄📝", { media: pdfUrl })
    .addAnswer(
        [
            "También puedes revisar más información en: 🆕📄🔍",
            "  ",
            "https://upsrj.edu.mx/inscripciones-reinscripciones/"
        ],
        { capture: true }
    );

// Sección 5: Reincorporación
const Reincorporacion = addKeyword(["7", "siete", "Reincorporación", "reincorporacion", "Reincorporacion", "reincorporación"])
    .addAnswer("7️⃣ Reincorporación 🔄📚")
    .addAnswer("7️⃣ Reincorporación 🔄📚", { media: pdfUrl })
    .addAnswer(
        [
            "Información sobre reincorporación está disponible en: 🆕📄🔍",
            "  ",
            "https://upsrj.edu.mx/reincorporacion/"
        ]
    );

// Sección 6: Alta y Baja del IMSS
const IMSS = addKeyword(["6", "seis", "Registro y cancelación en el IMSS", "registro y cancelación en el IMSS", "Registro y cancelacion en el IMSS", "registro y cancelacion en el IMSS"])
    .addAnswer("6️⃣ Registro y cancelación en el IMSS 🏥📝❌")
    .addAnswer("6️⃣ Registro y cancelación en el IMSS 🏥📝❌", { media: pdfUrl })
    .addAnswer(
        [
            "Encuentra más información sobre el registro y cancelación en el IMSS en: 🆕📄🔍",
            "  ",
            "https://upsrj.edu.mx/registro-cancelacion-imss/"
        ]
    );

// Sección 7: Emisión de Documentos
const EmisionDocumentos = addKeyword(["3", "tres", "Emisión de documentos", "emisión de documentos", "Emision de documentos", "emision de documentos"])
    .addAnswer("3️⃣ Emisión de documentos 📄🖨️")
    .addAnswer(
        [
            "Elige una opción:",
            "1️⃣ Constancia",
            "2️⃣ Kardex",
            "3️⃣ Reposición de credencial física (parcial)",
            "4️⃣ Certificados de créditos",
            "5️⃣ Título de grados"
        ].join('\n'),
        { capture: true },
        async (ctx, { fallBack }) => {
            const validOptions = [
                "1", "uno", "Constancia", "constancia",
                "2", "dos", "Kardex", "kardex",
                "3", "tres", "Reposición de credencial física", "reposicion de credencial fisica",
                "4", "cuatro", "Certificados de créditos", "certificados de creditos",
                "5", "cinco", "Título de grados", "titulo de grados"
            ];

            if (!validOptions.includes(ctx.body)) {
                return fallBack(`Seleccione una opción válida del menú de Emisión de Documentos✅💬${ctx.name}`);
            }
        },
        [
            addKeyword(["1", "uno", "Constancia", "constancia"])
                .addAnswer("1️⃣ Constancia 📄")
                .addAnswer(
                    [
                        "Para más información sobre la constancia, visita: 🆕📄🔍",
                        "  ",
                        "https://upsrj.edu.mx/constancia/"
                    ]
                ),
            addKeyword(["2", "dos", "Kardex", "kardex"])
                .addAnswer("2️⃣ Kardex 📄")
                .addAnswer(
                    [
                        "Para más información sobre el Kardex, visita: 🆕📄🔍",
                        "  ",
                        "https://upsrj.edu.mx/kardex/"
                    ]
                ),
            addKeyword(["3", "tres", "Reposición de credencial física", "reposicion de credencial fisica"])
                .addAnswer("3️⃣ Reposición de credencial física (parcial) 📄")
                .addAnswer(
                    [
                        "Para más información sobre la reposición de la credencial física, visita: 🆕📄🔍",
                        "  ",
                        "https://upsrj.edu.mx/reposicion-credencial/"
                    ]
                ),
            addKeyword(["4", "cuatro", "Certificados de créditos", "certificados de creditos"])
                .addAnswer("4️⃣ Certificados de créditos 📄")
                .addAnswer(
                    [
                        "Para más información sobre los certificados de créditos, visita: 🆕📄🔍",
                        "  ",
                        "https://upsrj.edu.mx/certificados-creditos/"
                    ]
                ),
            addKeyword(["5", "cinco", "Título de grados", "titulo de grados"])
                .addAnswer("5️⃣ Título de grados 📄")
                .addAnswer(
                    [
                        "Para más información sobre el título de grados, visita: 🆕📄🔍",
                        "  ",
                        "https://upsrj.edu.mx/titulo-grados/"
                    ]
                )
        ]
    );

// Sección 8: Vinculación
const Vinculacion = addKeyword(["8", "ocho", "Vinculación", "vinculacion"])
    .addAnswer("8️⃣ Vinculación 🔗✨")
    .addAnswer(
        [
            "Elige una opción:",
            "",
            "1️⃣ Preguntas",
            "2️⃣ Fechas inscripción",
            "3️⃣ Rene",
            "4️⃣ Vinculación (Galviana, Venezuela)"
        ].join('\n'),
        { capture: true },
        async (ctx, { fallBack }) => {
            const validOptions = [
                "1", "uno", "Preguntas", "preguntas",
                "2", "dos", "Fechas inscripción", "fechas inscripción",
                "3", "tres", "Rene", "rene",
                "4", "cuatro", "Vinculación (Galviana, Venezuela)", "vinculación (Galviana, Venezuela)"
            ];

            if (!validOptions.includes(ctx.body)) {
                return fallBack(`Seleccione una opción válida del menú de Vinculación✅💬${ctx.name}`);
            }
        },
        [
            addKeyword(["1", "uno", "Preguntas", "preguntas"])
                .addAnswer("1️⃣ Preguntas ❓")
                .addAnswer(
                    [
                        "Para más información sobre preguntas frecuentes, visita: 🆕📄🔍",
                        "  ",
                        "https://upsrj.edu.mx/preguntas-recurrentes/"
                    ]
                ),
            addKeyword(["2", "dos", "Fechas inscripción", "fechas inscripción"])
                .addAnswer("2️⃣ Fechas inscripción 📅")
                .addAnswer(
                    [
                        "Para más información sobre las fechas de inscripción, visita: 🆕📄🔍",
                        "  ",
                        "https://upsrj.edu.mx/fechas-inscripcion/"
                    ]
                ),
            addKeyword(["3", "tres", "Rene", "rene"])
                .addAnswer("3️⃣ Rene 🔍")
                .addAnswer(
                    [
                        "Para más información sobre Rene, visita: 🆕📄🔍",
                        "  ",
                        "https://upsrj.edu.mx/rene/"
                    ]
                ),
            addKeyword(["4", "cuatro", "Vinculación (Galviana, Venezuela)", "vinculación (Galviana, Venezuela)"])
                .addAnswer("4️⃣ Vinculación (Galviana, Venezuela) 🇻🇪🔗")
                .addAnswer(
                    [
                        "Para más información sobre la vinculación con Galviana, Venezuela, visita: 🆕📄🔍",
                        "  ",
                        "https://upsrj.edu.mx/vinculacion-galviana-venezuela/"
                    ]
                )
        ]
    );

// Sección 9: Salir
const Salir = addKeyword(["9", "nueve", "Salir", "salir"]).addAnswer(
    "❌ Gracias por utilizar nuestro servicio. ¡Hasta luego! ❌"
);

// Menu Principal
export const serviciosFlow = addKeyword(["1", "uno", "Servicios Escolares", "servicios"]).addAnswer(
    [
        "",
        "  Menu ✨📚",
        "",
        "1️⃣ Admisiones 📝🎓",
        "2️⃣ Reinscripciones 🔄📝",
        "3️⃣ Emisión de documentos 📄🖨️",
        "4️⃣ Becas 🎓💰",
        "5️⃣ Titulación 🎓📜",
        "6️⃣ Registro y cancelación en el IMSS 🏥📝❌",
        "7️⃣ Reincorporación 🔄📚",
        "8️⃣ Vinculación 🔗✨",
        "9️⃣ Salir ❌"
    ].join('\n'),
    { capture: true },
    async (ctx, { fallBack }) => {
        const validOptions = [
            "1", "uno", "Admisiones", "admisiones",
            "2", "dos", "Reinscripciones", "reinscripciones",
            "3", "Emisión de documentos", "emisión de documentos", "Emision de documentos", "emision de documentos",
            "4", "Becas", "becas",
            "5", "Titulación", "titulacion", "titulación", "Titulacion",
            "6", "Registro y cancelación en el IMSS", "registro y cancelación en el IMSS", "Registro y cancelacion en el IMSS", "registro y cancelacion en el IMSS",
            "7", "Reincorporación", "reincorporacion", "Reincorporacion", "reincorporación",
            "8", "Vinculación", "vinculacion",
            "9", "Salir", "salir"
        ];

        if (!validOptions.includes(ctx.body)) {
            return fallBack(`Seleccione un número del menú✅💬${ctx.name}`);
        }
    },
    [
        Admisiones, Reinscripciones, EmisionDocumentos, Becas, Titulacion, IMSS, Reincorporacion, Vinculacion, Salir
    ]
);
