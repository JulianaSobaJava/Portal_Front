const questions = [
  {
    pergunta: "A profissao ideal para mim é aquela em que: ",
    respostas: [
      {
        resposta: "Pesquiso, e Aprendo coisas novas",
        type: "I",
      },
      {
        resposta: "Ajudo as pessoas e ganho dinheiro",
        type: "R",
      },
      {
        resposta: "Ajudo as pessoas",
        type: "S",
      },
      {
        resposta: "Ganho dinheiro",
        type: "E",
      },
      {
        resposta: "Por mim tanto faz, desde que eu seja remunerado",
        type: "C",
      },
      {
        resposta: "Faço o que gosto",
        type: "A",
      },
    ],
  },
  {
    pergunta: "Em um ambiente em que você não conhece ninguém você costuma",
    respostas: [
      {
        resposta: "Ficar em um Lugar Isolado",
        type: "C",
      },
      {
        resposta: "Conversar com alguém que possa lhe introduzir em um grupo",
        type: "I",
      },
      {
        resposta: "Se socializar e conquistar amigos",
        type: "S",
      },
      {
        resposta: "Se sentir incomodado por estar sozinho e vai embora",
        type: "A",
      },
      {
        resposta: "Conversar com alguns, não todos.",
        type: "E",
      },
      {
        resposta: "Curtir sozinho",
        type: "R",
      },
    ],
  },
  {
    pergunta: "Em um trabalho em grupo você é aquele que procura: ",
    respostas: [
      {
        resposta: "Ouvir as ideias dos outros",
        type: "S",
      },
      {
        resposta: "Entender qual é o problema para resolver melhor ",
        type: "R",
      },
      {
        resposta: " Buscar um livro para se basear ou buscar indicações",
        type: "I",
      },
      {
        resposta: "Dar Iniciativa, Coordenar o grupo  ",
        type: "E",
      },
      {
        resposta: "Procurar uma forma de resolver primeiro   ",
        type: "C",
      },
      {
        resposta: "Apenas começar a fazer ",
        type: "A",
      },
    ],
  },
  {
    pergunta: "Se você pudesse abrir uma empresa, essa empresa seria: ",
    respostas: [
      {
        resposta:
          "Uma empresa familiar, onde eu pudesse trabalhar com os familiares e amigos do meu lado",
        type: "S",
      },
      {
        resposta:
          "Uma empresa tradicional, com produtos e servicos de facil comercialização ",
        type: "R",
      },
      {
        resposta:
          " Uma empresa onde eu faria algo de interesse pessoal, um passatempo, ou actividade minha",
        type: "C",
      },
      {
        resposta:
          "Uma empresa criativa onde eu pudesse desenvolver novas ideias, arriscar ",
        type: "A",
      },
      {
        resposta: "Uma empresa que geraria muito lucro e me deixasse famoso.",
        type: "E",
      },
      {
        resposta:
          "Uma empresa voltada nas tendencias actuais, independentemente da area ou actividade ",
        type: "I",
      },
    ],
  },
  {
    pergunta: "Eu procuro fazer amigos que: ",
    respostas: [
      {
        resposta: " Compartilham das mesmas ideias    ",
        type: "A",
      },
      {
        resposta: " Possuem os mesmos Interesses que eu  ",
        type: "R",
      },
      {
        resposta: "Possuem estatus e são Influentes    ",
        type: "E",
      },
      {
        resposta: "Pessoas com as quais vou aprender e vou ensinar",
        type: "I",
      },
      {
        resposta: "São Bastante diferentes de mim  ",
        type: "C",
      },
      {
        resposta:
          "Não me preocupo com características quando procuro por amigos",
        type: "S",
      },
    ],
  },
  {
    pergunta: "Na escola eu geralmente me destacava por:",
    respostas: [
      {
        resposta: "Ser engraçado e contar piadas ",
        type: "A",
      },
      {
        resposta: " Ser um aluno destacado e tirar boas notas  ",
        type: "I",
      },
      {
        resposta: "Não prestar atenção nas aulas e ser repreendido  ",
        type: "C",
      },
      {
        resposta: "Ser atencioso e ajudar os colegas  ",
        type: "S",
      },
      {
        resposta:
          "Por liderar bem os grupos de estudo e fazer bem os trabalhos de casa.",
        type: "E",
      },
      {
        resposta: "Ser bastante dedicado aos esportes  ",
        type: "R",
      },
    ],
  },
  {
    pergunta: "Quando penso numa profissão o mais importante para mim é: ",
    respostas: [
      {
        resposta:
          "Fazer algo que gosto independentemente do retorno financeiro ",
        type: "A",
      },
      {
        resposta: "Poder Fazer bem o que fizer, e ganhar bem.",
        type: "I",
      },
      {
        resposta: " Trabalhar em algo que esteja em evidência no mercado    ",
        type: "C",
      },
      {
        resposta: "Poder actuar na minha comunidade ",
        type: "S",
      },
      {
        resposta: "Ser muito bem sucedido financeiramente    ",
        type: "E",
      },
      {
        resposta: " Ser bem remunerado e bem sucedido  ",
        type: "R",
      },
    ],
  },
  {
    pergunta: "O que seria mais frustrante para você:",
    respostas: [
      {
        resposta: "Não ter muito tempo para curtir a vida",
        type: "A",
      },
      {
        resposta: "Não poder ajudar alguém quando ele precisar",
        type: "S",
      },
      {
        resposta: "Não Puder construir uma família",
        type: "C",
      },
      {
        resposta: "Não ser bem sucedido profissionalmente",
        type: "R",
      },
      {
        resposta: "Não ser bem sucedido financeiramente",
        type: "E",
      },
      {
        resposta: "Não Aprender quando devia, ou com quem devia",
        type: "I",
      },
    ],
  },
  {
    pergunta: "Em que area você acha que se encaixa melhor??",
    respostas: [
      {
        resposta: "Calculos, Raciocínio, Números",
        type: "R",
      },
      {
        resposta: "Ensino ou Saúde",
        type: "S",
      },
      {
        resposta: "Ainda Não sei.",
        type: "C",
      },
      {
        resposta: " Turistmo ou Hotelaria",
        type: "A",
      },
      {
        resposta: "Investigação Científica, Pesquisas",
        type: "I",
      },
      {
        resposta: "Administração ou Gestão",
        type: "E",
      },
    ],
  },
  {
    pergunta: "Como você acha que um bom professor é??",
    respostas: [
      {
        resposta:
          "Aquele que ensina, Aprende com os alunos, mostra o errado, o certo.",
        type: "S",
      },
      {
        resposta: " Aquele que ensina tudo e não deixa passar nada ",
        type: "C",
      },
      {
        resposta: " Aquele que dá ao aluno a oportunidade de pesquisar ",
        type: "I",
      },
      {
        resposta:
          " Aquele que cria no aluno o hábito de investigar e contribuir no assunto ",
        type: "R",
      },
      {
        resposta:
          " Aquele que ensina uma parte e manda o aluno ir pesquisar outra parte",
        type: "E",
      },
      {
        resposta:
          "Aquele que deixa que o aluno vá a procura de tudo que deve aprender ",
        type: "A",
      },
    ],
  },
];

export default questions;

export const descriptions = [
  {
    type: "R",
    desc: `Realista:
    » Gosta de atividades concretas e produtivas, que precisem de conceitos técnicos ou tecnológicos e busquem a solução de problemas.
    » Características pessoais: O perfil realístico gosta de viver em seu mundo, compreendendo-o através da lógica e de ferramentas teóricas ou tecnológicas. Deste modo, não é um perfil extremamente sociável ou falante, pois prefere observar a se expor. Prefere resolver um problema que lhe seja apresentado, chegando a uma solução concreta a discutir ideias e precisar chegar a consensos. Demonstra certa aversão a situações ambíguas e carregadas de subjetividade.
    » Possíveis áreas de atuação: engenharias em geral (existem cerca de 35 tipos de engenharia!), atividades que envolvam ferramentas, mecânica ou elétrica, atividades ligadas ao campo - por exemplo agronomia ou zootecnia. Se a área de interesse for medicina, gostará mais das áreas cirúrgicas. Ao fazer administração, o setor financeiro, tributário ou de controladoria terão sua atenção. Atletas profissionais possuem muito do perfil realista, devido às suas características quanto a foco, concentração e determinação para atingir aperfeiçoamentos constantes. Carreiras militares também possuem alto traço do perfil realista.
    `,
  },
  {
    type: "I",
    desc: `» A partir de uma área de conhecimento escolhida, este perfil se dedicará por horas a fio em seu estudo, aprofundamento e análise. Tudo no mundo e à sua volta será compreendido ou explicado através da argumentação lógica.
    » Características pessoais: desconfortável diante de emoções intensas e conflitos de interesses pessoais, sua tendência será sempre recolher-se às suas convicções. Suas preferências por atividades teóricas e autônomas tendem a torná-lo ainda mais independente com relação a vínculos grupais, e mais centrado em si mesmo e suas prioridades.
    » Possíveis áreas de atuação: em qualquer profissão é possível ser pesquisador; geralmente após a graduação será atraído à pós graduação strictu sensu (mestrado e doutorado), para seguir vida acadêmica. Podemos subdividir o grupo pesquisador em um mais objetivo (biologia, biomedicina, farmácia, tecnologia, engenharia, medicina, etc) e outro mais subjetivo (filosofia, sociologia, literatura, psicologia, etc).
    » OBS: Professores fantásticos são 50% Investigativo e 50% Social...
    `,
  },
  {
    type: "A",
    desc: `Criar produtos, encontrar formas de comunicar ideias ou sentimentos, expressar artisticamente seu modo de compreender tudo o que percebe, sente e acredita. O potencial de expressão é o propulsor pessoal e profissional do perfil artístico. Se você compreender o canal de comunicação utilizado pelo artístico, então compreenderá seu mundo.
    » Características pessoais: aprecia o contato interpessoal quando está seguro de poder expressar-se livremente - caso contrário, pode apresentar-se mais retraído. É aberto a estímulos subjetivos e emocionais, sendo capaz de perceber as reações das pessoas através de empatia. Seu tipo de idealismo: sonha com um mundo ideal... e deseja mudar-se para lá!
    » Possíveis áreas de atuação: publicidade, design gráfico, design digital,design de produtos, arquitetura ou design de interiores, música, fotografia, audiovisual, cinema, artes visuais, artes plásticas, teatro, literatura. Muitas pessoas de perfil artístico pensam em jornalismo, mas precisam pesquisar exatamente as funções desta profissão para diferenciar o que projeta e o que encontrará enquanto potencial de criatividade. Qualquer profissão que necessite de criação de imagens, ou comunicação de ideias são potenciais para o perfil artístico.
    `,
  },
  {
    type: "S",
    desc: `Sua palavra chave: RELACIONAR-SE. Atividades onde possa informar, orientar, auxiliar, tratar ou ajudar terapeuticamente são suas principais escolhas. Interessa-se pelos vínculos humanos e manifesta sensibilidade e responsabilidade na busca por desenvolvimento individual, grupal, institucional, social e ético.
    » Possui um estilo de liderança pela credibilidade, dedicação e lealdade.
    » Características pessoais: Gosta de sentir-se aceito e respeitado em suas atividades, conquistar seu espaço pelas suas atitudes coerentes com seus valores pessoais, sociais e éticos. Seu tipo de idealismo: sonha com um mundo ideal... e começa a atuar imediatamente para que nosso mundo se torne o que sonhou.
    » Possíveis áreas de atuação: psicologia, fisioterapia, enfermagem, serviço social. Se fizer medicina, preferirá as áreas clínicas às cirúrgicas. Se fizer administração, gostará da gestão de pessoas e Recursos Humanos (seleção e treinamento de pessoal).
    » OBS: Professores fantásticos são 50% Investigativo e 50% Social...
    `,
  },
  {
    type: "E",
    desc: `Empreender significa literalmente "tomar a responsabilidade para si, assumir com as próprias mãos". Este perfil demonstra grande apetite por desafios e não gosta de atividades excessivamente rotineiras. O novo ou inusitado o atraem. Demonstra habilidades verbais para a persuasão, negociação e decisão.
    » Características pessoais: Expansivo, apresenta iniciativa e competitividade. Aprecia a aquisição de poder, status e bens materiais. Precisa trabalhar seu excesso de energia para exercer uma liderança positiva, senão tende a adotar um estilo autoritário.
    » Possíveis áreas de atuação: marketing, atividades comerciais em geral, advocacia, carreira política, se fizer administração gostará da gestão executiva e área comercial.
    `,
  },
  {
    type: "C",
    desc: `Planejamento, organização e busca máxima de eficiência nas mínimas tarefas. Gosta de atuar em seus projetos para atingir suas metas - grande característica de atuação deste perfil. Parece adequado a ele o protocolo de gestão PDCA: Plain / Do / Check / Act.
    » Características pessoais: evita atividades de risco e gosta de ser reconhecido em sua competência. Leal, estável em suas opiniões e emoções, gera alta credibilidade em sua vida pessoal e profissional - esta é a fonte de seu estilo de liderança. Identifica-se com tudo que outorgue status e poder, apresentando habilidades técnicas em negociações - e não o caráter persuasivo do empreendedor.
    » Possíveis áreas de atuação: auditoria, contabilidade, administração, atividades diversas que envolvam gestão e organização ou área comercial, dentre outras.
    `,
  },
];
