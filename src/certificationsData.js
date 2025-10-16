import fatec from './assets/certifications/fatec.png';
import alura from './assets/certifications/alura.png';

// 1. Importe seus arquivos de certificado aqui.
// Exemplo: import certBlender from './assets/certificates/certificado-blender.pdf';

export const certifications = [
  {
    id: 1,
    category: 'Cursando',
    title: 'Desenvolvimento de Software Multiplataforma',
    image: fatec,
    issuer: 'Fatec Itaquera - Prof. Miguel Reale',
    status: 'Cursando',
    link: null,
    details: 'Previsão de conclusão: 12/2026'
  },
  {
    id: 2,
    category: 'Imersão',
    title: 'Imersão Front-End',
    image: alura,
    issuer: 'Alura',
    status: 'Concluído',
    link: 'https://cursos.alura.com.br/user/Luc45BS/immersion/certificate/14778',
    details: 'Duração: 5 Horas'
  },
  {
    id: 3,
    category: 'Curso',
    title: 'Blender: criando um modelo 3D',
    image: alura,
    issuer: 'Alura',
    status: 'Concluído',
    link: 'https://cursos.alura.com.br/user/Luc45BS/course/blender-criando-primeiro-modelo-3d/certificate',
    details: 'Duração: 8 horas'
  },
  {
    id: 4,
    category: 'Curso',
    title: 'C#: aplicando a Orientação a Objetos',
    image: alura,
    issuer: 'Alura',
    status: 'Concluído',
    link: 'https://cursos.alura.com.br/user/Luc45BS/course/csharp-aplicando-orientacao-objetos/certificate',
    details: 'Duração: 8 horas'
  },
 
];