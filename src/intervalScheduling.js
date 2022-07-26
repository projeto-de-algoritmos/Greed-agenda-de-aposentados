/**
 * Monta uma matriz de tamanho 6x14 representando os horários disponíveis durante a semana (SEGUNDA A SABADO DE 08 AS 22H)
 */
function montaTabela() {
  var grade = [];
  for (var i = 0; i < 6; i++) {
    grade.push([]);
    for (var j = 8; j <= 18; j++) {
      grade[i].push("-");
    }
  }

  return grade;
}

/**
 * Função que recebe o dia e retorna o index correspondente na tabela de horários.
 * @param  {Number} dia  Número do dia traduzido do padrão de horários do SIGAA
 */
var traduzDia = (dia) => dia - 2;

/**
 * Função que traduz o período da aula e devolve o index correspondente na tabela de horários
 * @param  {String} periodo  Dia da aula traduzido do padrão de horários do SIGAA
 * @param  {Number} horario  Horário da aula traduzido do padrão de horários do SIGAA
 */
var traduzHorario = (periodo, horario) => {
  var offset;
  if (periodo === "M") offset = -1;
  if (periodo === "T") offset = 4;
  if (periodo === "N") offset = 10;

  return horario + offset;
};

/**
 * Função que recebe o horário da aula no formato do SIGAA e devolve um objeto traduzindo os dias, período e horários.
 * @param  {String} horario  Horário da aula no formato do SIGAA.
 */
function traduzHorarioSigaa(horario) {
  const padrao = /\b([2-7]{1,6})([MTN])([1-7]{1,7})\b/;
  const res = horario.match(padrao);

  if (res === null) return null;
  else
    return {
      match: res[0],
      dias: res[1],
      periodo: res[2],
      horario: res[3],
    };
}

/**
 * Função que verifica se o horário da matéria já está ocupado com outra disciplina.
 * @param  {Array<Array<String>>} grade  Tabela de horários.
 * @param  {Object} horarioMapeado       Horário já traduzido do padrão sigaa.
 */
function verificaCompatibilidade(grade, horarioMapeado) {
  var retorno = [];

  if(grade[horarioMapeado.day][horarioMapeado.time-8] !== "-"){
    return [false, null];
  } else {
    retorno.push(Number(horarioMapeado.day), Number(horarioMapeado.time-8));
  }

  console.log(retorno)

  return [true, retorno];
}

/**
 * Função que atualiza os horários da grade horária com o nome da matéria
 * @param  {Array<Array<String>>} grade     Tabela de horários.
 * @param  {Array<Array<Number>>} posicoes  Conjunto de index da matéria.
 * @param  {String} nome                    Nome da matéria.
 */
function atualizaGrade(grade, posicoes, nome) {
  console.log(grade, posicoes, nome)

  console.log(grade[posicoes[0]][posicoes[1]])
  grade[posicoes[0]][posicoes[1]] = nome;
  console.log(grade)
}

/**
 * Função que monta a grade de horários
 * @param  {Array<Array<Object>>} listaDeMaterias  Lista de lista de matérias ordenada a partir da prioridade das matérias
 */
export default function montaGrade(listaDeMaterias) {
  var grade = montaTabela();
  console.log(listaDeMaterias, grade);
  var numPrioridades = listaDeMaterias.length;
  for (var i = 0; i < numPrioridades; i++) {
    if (listaDeMaterias[i].lenght !== 0) {
      console.log(listaDeMaterias[i]);
      for (const materia of listaDeMaterias[i]) {
        console.log(materia)
        const verifica = verificaCompatibilidade(
          grade,
          materia
        );
        console.log(verifica);
        if (verifica[0]) {
          atualizaGrade(grade, verifica[1], materia.name);
        } else console.log("falha");
      }
    }
  }

  console.log(grade)

  return grade;
}

// console.log(
//   montaGrade([
//     [
//       {
//         nome: "oo",
//         periodo: "26M12",
//       },
//     ],
//   ])
// );
