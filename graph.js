let nodes = new vis.DataSet([

    //EX cidades
    { id: 1, label: "Lajeado" },
    { id: 2, label: "Arroio do Meio" },
    { id: 3, label: "Encantado" },
    { id: 4, label: "Guaporé" },
    { id: 5, label: "Arvorezinha" },
    { id: 6, label: "Bento Gonçalvez" },
    { id: 7, label: "Carlos Barbosa" },
    { id: 8, label: "Estrela" },
    { id: 9, label: "Bom Retiro do Sul" },


    //EX nodes simples
    /*{ id: 1, label: "Node 1" },
    { id: 2, label: "Node 2" },
    { id: 3, label: "Node 3" },
    { id: 4, label: "Node 4" },
    { id: 5, label: "Node 5" },
    { id: 6, label: "Node 6" },
    { id: 7, label: "Node 7" },*/
]);

let edges = new vis.DataSet([

    //EX cidades
    { from: 1, to: 2 },
    { from: 1, to: 8 },
    { from: 1, to: 7 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 3, to: 5 },
    { from: 3, to: 6 },
    { from: 5, to: 4 },
    { from: 7, to: 6 },
    { from: 8, to: 9 },

    //EX nodes simples
    /*{ from: 1, to: 3 },
    { from: 1, to: 2 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 4 },
    { from: 6, to: 1 },
    { from: 7, to: 1 },*/
]);

let container = document.getElementById("mynetwork");
let data = {
    nodes: nodes,
    edges: edges,
};

//SETTINGS
let options = {
    edges:{

        //exibir direção das setas
        arrows: 'to, from',// para ambos
        //arrows: 'to',

        color: 'black',
        font: '12px arial #ff0000',
        scaling:{
            label: true,
        },
        smooth: true,

        //permite overlap das setas
        arrowStrikethrough: true,
    }
};

let network = new vis.Network(container, data, options);


