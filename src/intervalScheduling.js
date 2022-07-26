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


function atualizaGrade(grade, posicoes, nome) {
  console.log(grade, posicoes, nome)

  console.log(grade[posicoes[0]][posicoes[1]])
  grade[posicoes[0]][posicoes[1]] = nome;
  console.log(grade)
}

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