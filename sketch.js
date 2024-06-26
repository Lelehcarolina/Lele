//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;
7 //variáveis do oponente
8 9 70 1 14 15 16 17 18 19 20
let xRaqueteOponente
585;
let yRaqueteOponente = 150;
//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
21
//placar do jogo
22
let meusPontos = 0;
23 let pontosDoOponente = 0;
24
25
26
let colidiu = false;
27
28
function setup()
29
createCanvas(600, 400);
30
C
31
32 function draw() ~S
33 background(0)
34
mostraBolinha();
35
movimentaBolinha()
36
verificaColisaoBorda()
37
mostraRaquete(xRaquete, yRaquere);
function draw() ~S
33
background(0);
34
mostraBolinha()
35
movimentaBolinha()
36
verificaColisaoBorda()
37
mostraRaquete(xRaquete, yRaquete),
38 39
movimentaMinhaRaquete()
verificaColisaoRaquete(xRaquete
yRaquete);
40
verificaColisaoRaquete(xRaqueteOponent
e, yRaqueteOponente);
mostraRaquete(xRaqueteOponente,
yRaqueteOponente);
movimentaRaqueteOponente();
incluiPlacar()
marcaPonto();
41
42
43
44
45
46 function mostraBolinha()
47
circle(xBolinha, yBolinha, diametro);
48
S
49
50 function movimentaBolinha() (
51
Bolinha += velocidadeXBolinha;
52
Bolinha += velocidadeYBolinha;
53
54
55 V function verificaColisaoBorda()
56
if (xBolinha + raio > width ||
xBolinha - raio < 0) L
57
velocidadeXBolinha *= -1;
58
59
if (yBolinha + raio > height
yBolinha - raio < 0) f
60
velocidadeYBolinha *= -1;
function verificaColisaoBorda() ~
56
if (xBolinha + raio > width ||
xBolinha - raio < 0) f
57
velocidadeXBolinha *= -1;
58
)
59
if (yBolinha t raio > height |l
yBolinha - raio < 0) t
60
velocidadeYBolinha *= -1;
61
62
63
647 function mostraRaquete(x,y) f
65
rect(x, y, raqueteComprimento
raqueteAltura)
66
F
67
68 V function movimentaMinhaRaquete()
697 if(keyIsDown(UP_ARROW)) f
70
yRaquete -= 10;
71
72
if(keyIsDown(DOWN_ARROW)) f
73
yRaquete += 10;
74
75
76
77 function verificaColisaoRaquete() f
78
if (xBolinha - raio < xRaquete +
raqueteComprimento && yBolinha - raio <
yRaquete + raqueteAltura && yBolinha +
raio > yRaquete)
79
velocidadeXBolinha *= -1;
function verificaColisaoRaquete(x, y) f
84
colidiu = collideRectCircle(x, y
raqueteComprimento, raqueteAltura
xBolinha, yBolinha, raio);
85
If (colidiu)f
86
velocidadeXBolinha *= -1;
87
88
89
90 V function movimentaRaqueteOponente()
91
velocidadeYOponente = yBolinha
yRaqueteOponente - raqueteComprimento /
2
30;
92
yRaqueteOponente +=
velocidadeYOponente
93
94
95
96 function incluiPlacar()f
97
stroke(255)
98 textAlign(CENTER)
99
textSize(16);
100
fill(color(255,140, 0));
101 rect(150, 10, 40, 20);
102
fill(255);
103
text (meusPontos, 170, 26);
104
fill(color(255,140, 0));
105
rect(450, 10, 40, 20);
106
fill(255);
107
text(pontosDoOponente, 470, 26);
