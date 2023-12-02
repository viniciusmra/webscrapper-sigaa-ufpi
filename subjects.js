const fs = require('fs');
const subjects = [
    {
        code: "CLE/CCHL002", 
        type: "OBRIGATÓRIA",
        name: "INGLÊS TÉCNICO E CIENTÍFICO",
        semester: 1,
        prerequisites: [],
        workload: 60,
        schedule: "35T34",
    },
    {
        code: "DC/CCN019", 
        type: "OBRIGATÓRIA",
        name: "INTRODUÇÃO À LÓGICA",
        semester: 1,
        prerequisites: [],
        workload: 60,
        schedule: "35M34",
    },
    {
        code: "DC/CCN020", 
        type: "OBRIGATÓRIA",
        name: "SEMINÁRIOS DE INTRODUÇÃO AO CURSO",
        semester: 1,
        prerequisites: [],
        workload: 30,
        schedule: "6M34",
    },
    {
        code: "DC/CCN021", 
        type: "OBRIGATÓRIA",
        name: "INFORMÁTICA E SOCIEDADE",
        semester: 1,
        prerequisites: [],
        workload: 60,
        schedule: "35T56",
    },
    {
        code: "DC/CCN026", 
        type: "OBRIGATÓRIA",
        name: "PROGRAMAÇÃO ESTRUTURADA",
        semester: 1,
        prerequisites: [],
        workload: 60,
        schedule: "35M56",

    },
    {
        code: "DFIL/CCHL009", 
        type: "OBRIGATÓRIA",
        name: "INTRODUÇÃO À METODOLOGIA CIENTÍFICA",
        semester: 1,
        prerequisites: [],
        workload: 60,
        schedule: "24M56",
    },
    {
        code: "DMAT/CCN032", 
        type: "OBRIGATÓRIA",
        name: "CÁLCULO DIFERENCIAL E INTEGRAL I",
        semester: 1,
        prerequisites: [],
        workload: 60,
        schedule: "24M34",
    },
    // 2 -------------------------------------------------
    {
        code: "DC/CCN022", 
        type: "OBRIGATÓRIA",
        name: "ESTRUTURAS DE DADOS",
        semester: 2,
        prerequisites: ["DC/CCN026"],
        workload: 60,
        schedule: "35M34",
    },
    {
        code: "DC/CCN023", 
        type: "OBRIGATÓRIA",
        name: "PROGRAMAÇÃO ORIENTADA A OBJETO",
        semester: 2,
        prerequisites: ["DC/CCN026"],
        workload: 60,
        schedule: "24M34",
    },
    {
        code: "DC/CCN024", 
        type: "OBRIGATÓRIA",
        name: "LABORATÓRIO DE PROGRAMAÇÃO",
        semester: 2,
        prerequisites: ["DC/CCN026"],
        workload: 60,
        schedule: "35M56",
    },
    {
        code: "DC/CCN029", 
        type: "OBRIGATÓRIA",
        name: "CIRCUITOS DIGITAIS",
        semester: 2,
        prerequisites: [],
        workload: 60,
        schedule: "35T34",
    },
    {
        code: "DMAT/CCN033", 
        type: "OBRIGATÓRIA",
        name: "CÁLCULO DIFERENCIAL E INTEGRAL II",
        semester: 2,
        prerequisites: ["DMAT/CCN032"],
        workload: 60,
        schedule: "24M56",
    },
    {
        code: "DMAT/CCN035", 
        type: "OBRIGATÓRIA",
        name: "MATEMÁTICA DISCRETA",
        semester: 2,
        prerequisites: ["DC/CCN019"],
        workload: 60,
        schedule: "24T34",
    },
    //3 ---------------------------------
    {
        code: "CGBEST/CCN013", 
        type: "OBRIGATÓRIA",
        name: "PROBABILIDADE E ESTATÍSTICA",
        semester: 3,
        prerequisites: ["DMAT/CCN032"],
        workload: 60,
        schedule: "24T34",
    },
    {
        code: "DC/CCN025", 
        type: "OBRIGATÓRIA",
        name: "BANCO DE DADOS",
        semester: 3,
        prerequisites: ["DC/CCN022", "DC/CCN023"],
        workload: 60,
        schedule: "24M56",
    },
    {
        code: "DC/CCN027", 
        type: "OBRIGATÓRIA",
        name: "INTERFACE HUMANO COMPUTADOR",
        semester: 3,
        prerequisites: ["DC/CCN026"],
        workload: 60,
        schedule: "35T34",
    },
    {
        code: "DC/CCN028", 
        type: "OBRIGATÓRIA",
        name: "TEORIA E APLICAÇÕES EM GRAFOS",
        semester: 3,
        prerequisites: ["DC/CCN022"],
        workload: 60,
        schedule: "35M56",
    },
    {
        code: "DC/CCN031", 
        type: "OBRIGATÓRIA",
        name: "ARQUITETURA DE COMPUTADORES",
        semester: 3,
        prerequisites: ["DC/CCN029"],
        workload: 60,
        schedule: "35M34",
    },
    {
        code: "DMAT/CCN034", 
        type: "OBRIGATÓRIA",
        name: "ÁLGEBRA LINEAR",
        semester: 3,
        prerequisites: ["DMAT/CCN033"],
        workload: 60,
        schedule: "24M34",
    },
    //4 --------------------------------
    {
        code: "DC/CCN032", 
        type: "OBRIGATÓRIA",
        name: "COMPUTAÇÃO GRÁFICA",
        semester: 4,
        prerequisites: ["DC/CCN023", "DMAT/CCN034"],
        workload: 60,
        schedule: "24T34",
    },
    {
        code: "DC/CCN033", 
        type: "OBRIGATÓRIA",
        name: "SISTEMAS OPERACIONAIS",
        semester: 4,
        prerequisites: ["DC/CCN023", "DC/CCN031"],
        workload: 60,
        schedule: "35T34",
    },
    {
        code: "DC/CCN034", 
        type: "OBRIGATÓRIA",
        name: "PROGRAMAÇÃO LINEAR",
        semester: 4,
        prerequisites: ["DC/CCN026", "DMAT/CCN034"],
        workload: 60,
        schedule: "24M34",
    },
    {
        code: "DC/CCN035", 
        type: "OBRIGATÓRIA",
        name: "REDES DE COMPUTADORES",
        semester: 4,
        prerequisites: ["DC/CCN031"],
        workload: 60,
        schedule: "24M56",
    },
    {
        code: "DC/CCN037", 
        type: "OBRIGATÓRIA",
        name: "PROCESSAMENTO DIGITAL DE IMAGENS",
        semester: 4,
        prerequisites: ["DC/CCN023", "DMAT/CCN034"],
        workload: 60,
        schedule: "35M34",
    },
    {
        code: "DC/CCN036", 
        type: "OBRIGATÓRIA",
        name: "PROJETO E ANÁLISE DE ALGORITMOS",
        semester: 4,
        prerequisites: ["DC/CCN028"],
        workload: 60,
        schedule: "35M56",
    },
    // 5 --------------------------------
    {
        code: "DC/CCN030", 
        type: "OBRIGATÓRIA",
        name: "TEORIA DA COMPUTAÇÃO",
        semester: 5,
        prerequisites: ["DMAT/CCN035", "DC/CCN022"],
        workload: 60,
        schedule: "24M34",
    },
    {
        code: "DC/CCN038", 
        type: "OBRIGATÓRIA",
        name: "SISTEMAS DISTRIBUÍDOS",
        semester: 5,
        prerequisites: ["DC/CCN033", "DC/CCN035"],
        workload: 60,
        schedule: "35T56",
    },
    {
        code: "DC/CCN039", 
        type: "OBRIGATÓRIA",
        name: "ENGENHARIA DE SOFTWARE I",
        semester: 5,
        prerequisites: ["DC/CCN025"],
        workload: 60,
        schedule: "35M34",
    },
    {
        code: "DC/CCN040", 
        type: "OBRIGATÓRIA",
        name: "SEGURANÇA EM SISTEMAS",
        semester: 5,
        prerequisites: ["DC/CCN033", "DC/CCN035"],
        workload: 60,
        schedule: "24M56",
    },
    {
        code: "DC/CCN041", 
        type: "OBRIGATÓRIA",
        name: "INTELIGÊNCIA ARTIFICIAL",
        semester: 5,
        prerequisites: ["DC/CCN023", "CGBEST/CCN013", "DC/CCN036"],
        workload: 60,
        schedule: "35M56",
    },
    // 6 --------------------------------
    {
        code: "DC/CCN042", 
        type: "OBRIGATÓRIA",
        name: "COMPILADORES",
        semester: 6,
        prerequisites: ["DC/CCN023", "DC/CCN030"],
        workload: 60,
        schedule: "35M56",
    },
    {
        code: "DC/CCN043", 
        type: "OBRIGATÓRIA",
        name: "LINGUAGENS DE PROGRAMAÇÃO",
        semester: 6,
        prerequisites: ["DC/CCN023"],
        workload: 60,
        schedule: "24M34",
    },
    {
        code: "DC/CCN044", 
        type: "OBRIGATÓRIA",
        name: "ENGENHARIA DE SOFTWARE II",
        semester: 6,
        prerequisites: ["DC/CCN039"],
        workload: 60,
        schedule: "35M34",
    },
    {
        code: "DC/CCN045", 
        type: "OBRIGATÓRIA",
        name: "BANCOS DE DADOS RELACIONAIS",
        semester: 6,
        prerequisites: ["DC/CCN025"],
        workload: 60,
        schedule: "35T34",
    },
    // 7-------------------
    {
        code: "DBI0057", 
        type: "OBRIGATÓRIA",
        name: "EDUCAÇÃO AMBIENTAL, TECNOLOGIA E SOCIEDADE",
        semester: 7,
        prerequisites: [],
        workload: 30,
        schedule: "4T56",
    },
    {
        code: "DC/CCN046", 
        type: "OBRIGATÓRIA",
        name: "TRABALHO DE CONCLUSÃO DE CURSO I - TCC I",
        semester: 7,
        prerequisites: ["DC/CCN038", "DC/CCN041", "DC/CCN044"],
        workload: 60,
        schedule: "6M3456",
    },
    {
        code: "DC/CCN047", 
        type: "OBRIGATÓRIA",
        name: "ESTÁGIO SUPERVISIONADO",
        semester: 7,
        prerequisites: ["DC/CCN038", "DC/CCN041", "DC/CCN044"],
        workload: 330,
        schedule: "",
    },
    {
        code: "DC/CCN048", 
        type: "OBRIGATÓRIA",
        name: "PROGRAMAÇÃO FUNCIONAL",
        semester: 7,
        prerequisites: ["DC/CCN043"],
        workload: 60,
        schedule: "24T34",
    },
    // 8 ----------------------------------------
    {
        code: "DC/CCN049", 
        type: "OBRIGATÓRIA",
        name: "TRABALHO DE CONCLUSÃO DE CURSO II - TCC II",
        semester: 8,
        prerequisites: ["DC/CCN046"],
        workload: 60,
        schedule: "",
    },
    // OPTATIVAS
    {
        code: "DFIS/CCN020", 
        type: "OPTATIVA",
        name: "ELETRICIDADE E MAGNETISMO",
        semester: 5,
        prerequisites: ["DMAT/CCN032"],
        workload: 60,
        schedule: "",
    },
    {
        code: "DC/CCN078", 
        type: "OPTATIVA",
        name: "VISÃO COMPUTACIONAL",
        semester: 5,
        prerequisites: ["DC/CCN034", "DC/CCN023"],
        workload: 60,
        schedule: "35M56",
    },
    {
        code: "DC/CCN033", 
        type: "OPTATIVA",
        name: "SISTEMAS EMBARCADOS",
        semester: 5,
        prerequisites: ["DC/CCN031"],
        workload: 60,
        schedule: "24M56",
    },
    {
        code: "DC/CCN062", 
        type: "OPTATIVA",
        name: "PROGRAMAÇÃO INTEIRA",
        semester: 5,
        prerequisites: ["DC/CCN034", "DC/CCN036"],
        workload: 60,
        schedule: "35T56",
    },
    {
        code: "DC/CCN053", 
        type: "OPTATIVA",
        name: "MÉTODOS NUMÉRICOS",
        semester: 5,
        prerequisites: ["DC/CCN032", "DMAT/CCN034"],
        workload: 60,
        schedule: "35T56",
    },
    {
        code: "LIBRAS009", 
        type: "OPTATIVA",
        name: "LIBRAS- LINGUA BRASILEIRA DE SINAIS",
        semester: 5,
        prerequisites: [],
        workload: 60,
        schedule: "24M34",
    },
    {
        code: "DC/CCN055", 
        type: "OPTATIVA",
        name: "FLUXOS EM REDES",
        semester: 5,
        prerequisites: ["DC/CCN028", "DC/CCN034"],
        workload: 60,
        schedule: "24T34",
    },

];

var dadosJSON = JSON.stringify(subjects, null, 2);

fs.writeFile("subjects.json", dadosJSON, 'utf8', (err) => {
    if (err) {
        console.error('Erro ao salvar o arquivo JSON:', err);
    } else {
        console.log('Arquivo JSON salvo com sucesso.');
    }
});