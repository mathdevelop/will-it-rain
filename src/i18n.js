import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    lng: 'pt',
    resources: {
        en: {
            translation: {
                "name": "English",
                "title": "Will it rain",
                "home": "Home",
                "project": "Project",
                "projectSubtitle": "This project was done in order to learn the main concepts of the React library",
                "projectDescription": "identifies whether there is a possibility of rain in the city obtained by the location or informed manually by the user, answering this question without technical data and graphics difficult to interpret. See below what was used in the project.",
                "projectAPI": "API query (axios)",
                "projectInternationalization": "Internationalization (Portuguese / English - i18next)",
                "projectRouting": "Routing (React Router)",
                "about": "About Me",
                "aboutSubtitle": "Software Developer",
                "aboutDescription": "I started in the IT world 10 years ago, when I signed up for the Computer Technician course. Since that time I did not stop, I started working in the area and in 2016 concludes my Bachelor of Computer Science. Many technologies have emerged since then, in which I am qualifying to be a better professional. I like Naruto, Legião Urbana and Barbecue, not necessarily in that same order.",
                "in": "in",
                "yes": "Yes",
                "no": "No",
                "dialogTitle": "Change City",
                "dialogTitleError": "Error determining location",
                "dialogText": "Do you want to enter the city manually?",
                "dialogLabel": "City",
                "dialogButtonCancel": "Cancel",
                "dialogButtonSend": "Send",
                "alert": "City not found",
                "created": "Created with",
                "modules": "Modules"
            }
        },
        pt: {
            translation: {
                "name": "Português",
                "title": "Vai chover",
                "home": "Início",
                "project": "Projeto",
                "projectSubtitle": "Este projeto foi feito com o intuito de aprender os principais conceitos da biblioteca React",
                "projectDescription": "identifica se há possibilidade de chuva na cidade obtida pela localização ou informada manualmente pelo usuário, respondendo à esta pergunta sem dados técnicos e gráficos difíceis de interpretar. Veja abaixo o que foi utilizado no projeto.",
                "projectAPI": "Consulta à API (axios)",
                "projectInternationalization": "Internacionalização (Português / Inglês - i18next)",
                "projectRouting": "Roteamento (React Router)",
                "about": "Sobre Mim",
                "aboutSubtitle": "Desenvolvedor de Software",
                "aboutDescription": "Iniciei no mundo do TI há 10 anos, quando me inscrevi no curso Técnico em Informática. Desde daquela época não parei, comecei a trabalhar na área e em 2016 conclui meu Bacharelado em Ciência da Computação. Muitas tecnologias surgiram desde então, nas quais estou me qualificando para ser um profissional melhor. Gosto de Naruto, Legião Urbana e Churrasco, não necessariamente nessa mesma ordem.",
                "in": "em",
                "yes": "Sim",
                "no": "Não",
                "dialogTitle": "Alterar Cidade",
                "dialogTitleError": "Erro ao determinar a localização",
                "dialogText": "Deseja informar a cidade manualmente?",
                "dialogLabel": "Cidade",
                "dialogButtonCancel": "Cancelar",
                "dialogButtonSend": "Enviar",
                "alert": "Cidade não encontrada",
                "created": "Criado com",
                "modules": "Módulos"
            }
        }
    },
});

export default i18n;