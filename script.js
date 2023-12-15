function gerarTabela() {
    var selectedCotas = document.querySelectorAll("input[name='cota']:checked");

    // Tabela de Benefícios
    var tabelaBeneficios = "<table><tr><th>Benefícios</th></tr>";

    var beneficios = [
        "Prioridade no licenciamento da PI com compensação financeira",
        "Horas de consultoria por ano dentro do limite oferecido",
        "Participação dos colaboradores na pós-graduação presencial/remoto síncrono",
        "Participação dos colaboradores na pós-graduação online assíncrono",
        "Acesso à documentação técnica produzida em todos os planos do centro",
        "Participação técnica na execução dos projetos de PDI do centro",
        "Menção nos agradecimentos das produções científicas",
        "Utilização da infraestrutura do centro, incluindo o parque de equipamentos",
        "Lançamento de desafios para startups",
        "Acesso ao RH qualificado pelo centro",
        "Participação em reuniões periódicas sobre as ações do centro",
        "Participação dos colaboradores em capacitação de curta duração",
        "Participação dos colaboradores em capacitação online e assíncrono",
        "Participação em workshops",
        "Acesso diferenciado à consultoria para elevar TRL na unidade Embrapii.",
        "Logo da empresa no site e nas divulgações de eventos do centro",
        "Participação em rodadas de negócios",
        "Acesso ao programa Inatel Startups",
    ];

    for (var i = 0; i < beneficios.length; i++) {
        tabelaBeneficios += "<tr><td>" + beneficios[i] + "</td></tr>";
    }

    tabelaBeneficios += "</table>";

    // Tabela da Cota
    var tabelaCota = "<table><tr><th>Benefícios</th>";

    for (var i = 0; i < selectedCotas.length; i++) {
        tabelaCota += "<th>" + selectedCotas[i].value + "</th>";
    }

    tabelaCota += "</tr>";

    // Insira um valor aqui - Modifique os valores abaixo conforme necessário
    var cotasValores = {
        DIAMOND: [
            "1",
            "168h",
            "12",
            "200",
            "imgChecked",
            "imgChecked",
            "imgChecked",
            "Sem custo",
            "4",
            "imgChecked",
            "imgChecked",
            "12",
            "200",
            "imgChecked",
            "imgChecked",
            "imgChecked",
            "imgChecked",
            "-",
        ],
        PLATINUM: [
            "2",
            "80h",
            "8",
            "100",
            "imgChecked",
            "imgChecked",
            "imgChecked",
            "Sem custo",
            "2",
            "imgChecked",
            "imgChecked",
            "8",
            "100",
            "imgChecked",
            "imgChecked",
            "imgChecked",
            "imgChecked",
            "-",
        ],
        GOLD: [
            "3",
            "40h",
            "4",
            "50",
            "-",
            "-",
            "-",
            "Preço especial",
            "1",
            "-",
            "imgChecked",
            "4",
            "50",
            "imgChecked",
            "imgChecked",
            "imgChecked",
            "imgChecked",
            "-",
        ],
        SILVER: [
            "4",
            "18h",
            "2",
            "20",
            "-",
            "-",
            "-",
            "Preço especial",
            "-",
            "-",
            "-",
            "2",
            "20",
            "imgChecked",
            "imgChecked",
            "imgChecked",
            "imgChecked",
            "-",
        ],
        BRONZE: [
            "5",
            "-",
            "1",
            "10",
            "-",
            "-",
            "-",
            "Preço especial",
            "-",
            "-",
            "-",
            "1",
            "10",
            "imgChecked",
            "imgChecked",
            "imgChecked",
            "imgChecked",
            "-",
        ],
        STARTUP: [
            "5",
            "8h",
            "-",
            "5",
            "-",
            "-",
            "-",
            "Preço especial",
            "-",
            "-",
            "-",
            "-",
            "5",
            "imgChecked",
            "imgChecked",
            "-",
            "imgChecked",
            "imgChecked",
        ],
    };

    for (var j = 0; j < beneficios.length; j++) {
        tabelaCota += "<tr><td>" + beneficios[j] + "</td>";

        for (var i = 0; i < selectedCotas.length; i++) {
            if (cotasValores[selectedCotas[i].value][j] === "imgChecked") {
                var svgContent = "<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='22' height='32' viewBox='0 0 48 48'>" +
                    "<circle cx='24' cy='24' r='20' fill='#4dd0e1'></circle>" +
                    "<path fill='#fff' d='M22.491,30.69c-0.576,0-1.152-0.22-1.591-0.659l-6.083-6.084c-0.879-0.878-0.879-2.303,0-3.182 " +
                    "c0.878-0.879,2.304-0.879,3.182,0l6.083,6.084c0.879,0.878,0.879,2.303,0,3.182C23.643,30.47,23.067,30.69,22.491,30.69z'></path>" +
                    "<path fill='#fff' d='M22.491,30.69c-0.576,0-1.152-0.22-1.591-0.659c-0.879-0.878-0.879-2.303,0-3.182l9.539-9.539 " +
                    "c0.878-0.879,2.304-0.879,3.182,0c0.879,0.878,0.879,2.303,0,3.182l-9.539,9.539C23.643,30.47,23.067,30.69,22.491,30.69z'></path>" +
                    "</svg>";
                tabelaCota += "<td>" + svgContent + "</td>";
            } else {
                tabelaCota +=
                    "<td>" + cotasValores[selectedCotas[i].value][j] + "</td>";
            }
        }


        tabelaCota += "</tr>";
    }

    tabelaCota += "</table>";

    document.getElementById("tabelaCota").innerHTML = tabelaCota;
}