const CATEGORIAS = ["Todas", "Espíritos", "Metamorfos", "Mortos-vivos", "Guardiões da natureza", "Híbridos"];
const CRIATURAS = [
  {
    id: "kitsune", nome: "Kitsune", origem: "Japão", cat: "Metamorfos",
    resumo: "Raposa de várias caudas que ganha poder com a idade e pode assumir forma humana.",
    descricao: "Na tradição japonesa, a kitsune é uma raposa dotada de inteligência e poderes sobrenaturais. Acredita-se que, quanto mais velha, mais caudas ela possui, podendo chegar a nove. Pode se transformar em pessoa e é descrita ora como trapaceira, ora como mensageira de divindades.",
    aparencia: "Raposa com uma a nove caudas; em forma humana, geralmente feminina", habitat: "Florestas, santuários e aldeias", fraquezas: "O reflexo ou a sombra podem revelar sua forma verdadeira"
  },
  {
    id: "lobisomem", nome: "Lobisomem", origem: "Europa e Brasil", cat: "Metamorfos",
    resumo: "Pessoa que se transforma em lobo nas noites de lua cheia, sob uma maldição.",
    descricao: "Presente em lendas europeias e no folclore brasileiro, o lobisomem é uma pessoa amaldiçoada que se transforma em criatura lupina durante a noite. No Brasil, a tradição conta que o sétimo filho homem de uma família, sem filhas mulheres antes dele, estaria sujeito a essa maldição.",
    aparencia: "Lobo grande e de pelagem escura, com traços humanos", habitat: "Matas e encruzilhadas, à noite", fraquezas: "Na tradição europeia, objetos de prata"
  },
  {
    id: "vampiro", nome: "Vampiro", origem: "Europa Oriental", cat: "Mortos-vivos",
    resumo: "Morto-vivo que se alimenta do sangue dos vivos e teme a luz do sol.",
    descricao: "As lendas de vampiros vêm do folclore da Europa Oriental, onde mortos que voltavam para atormentar suas comunidades eram temidos. Ao longo dos séculos, a figura ganhou versões elegantes e sedutoras na literatura e no cinema.",
    aparencia: "Pessoa pálida, de presas afiadas e olhar hipnótico", habitat: "Castelos, criptas e cidades, à noite", fraquezas: "Luz do sol, estaca no coração e, segundo o folclore, alho"
  },
  {
    id: "curupira", nome: "Curupira", origem: "Brasil", cat: "Guardiões da natureza",
    resumo: "Protetor das matas, com pés virados para trás para enganar caçadores.",
    descricao: "Figura do folclore indígena e brasileiro, o Curupira protege os animais e as árvores. Seus pés virados para trás deixam pegadas que levam o caçador na direção contrária, fazendo-o se perder na floresta. Está registrado em obras como o Dicionário do folclore brasileiro, de Câmara Cascudo.",
    aparencia: "Criança ou anão de cabelos vermelhos e pés virados para trás", habitat: "Florestas brasileiras", fraquezas: "Pode ser agradado com oferendas, como o fumo"
  },
  {
    id: "banshee", nome: "Banshee", origem: "Irlanda", cat: "Espíritos",
    resumo: "Espírito feminino cujo lamento anuncia a morte de alguém da família.",
    descricao: "No folclore irlandês, a banshee é um espírito que chora ou grita perto de uma casa para avisar que um membro da família vai morrer. Ela é vista como mensageira e não como ameaça direta.",
    aparencia: "Mulher pálida de cabelos longos e roupas claras ou cinzentas", habitat: "Arredores das casas de famílias tradicionais irlandesas", fraquezas: "Não há fraqueza conhecida; ela apenas anuncia"
  },
  {
    id: "esfinge", nome: "Esfinge", origem: "Egito e Grécia", cat: "Híbridos",
    resumo: "Criatura com corpo de leão e rosto humano que propõe enigmas aos viajantes.",
    descricao: "No Egito, a esfinge é uma figura guardiã, representada em esculturas monumentais. Na mitologia grega, ela ganhou asas e o hábito de propor um enigma aos viajantes, devorando quem errasse a resposta.",
    aparencia: "Corpo de leão com cabeça humana; na versão grega, com asas", habitat: "Desertos e entradas de cidades", fraquezas: "Perde o poder quando o enigma é respondido corretamente"
  },
  {
    id: "boitata", nome: "Boitatá", origem: "Brasil", cat: "Guardiões da natureza",
    resumo: "Serpente de fogo que protege as matas e castiga quem as incendeia.",
    descricao: "O Boitatá é uma das lendas mais antigas do Brasil. Aparece como uma grande serpente de fogo que protege os campos e as florestas, perseguindo quem destrói a mata com queimadas.",
    aparencia: "Serpente flamejante de olhos enormes", habitat: "Campos e matas", fraquezas: "Não há fraqueza clara na lenda"
  },
  {
    id: "saci", nome: "Saci", origem: "Brasil", cat: "Espíritos",
    resumo: "Moleque de uma perna só, de gorro vermelho, que faz travessuras.",
    descricao: "O Saci é um dos personagens mais conhecidos do folclore brasileiro. Ele aparece em redemoinhos, esconde objetos, azeda o leite e assusta animais, sempre de forma brincalhona.",
    aparencia: "Menino negro de uma perna só, gorro vermelho e cachimbo", habitat: "Fazendas, estradas e matas", fraquezas: "Pode ser preso em uma garrafa se capturado com uma peneira sobre o redemoinho"
  },
  {
    id: "quimera", nome: "Quimera", origem: "Grécia", cat: "Híbridos",
    resumo: "Monstro que mistura leão, cabra e serpente e solta fogo pela boca.",
    descricao: "Na mitologia grega, a Quimera é um monstro que aterrorizava a região da Lícia. Segundo o mito, foi derrotada pelo herói Belerofonte, que montava o cavalo alado Pégaso.",
    aparencia: "Corpo de leão, cabeça de cabra no dorso e cauda de serpente", habitat: "Montanhas da Lícia", fraquezas: "Ataques aéreos, como os de Belerofonte montado em Pégaso"
  },
  {
    id: "draugr", nome: "Draugr", origem: "Escandinávia", cat: "Mortos-vivos",
    resumo: "Morto-vivo das sagas nórdicas que guarda seu túmulo e seus tesouros.",
    descricao: "Nas sagas islandesas, o draugr é um morto que volta de seu túmulo para proteger o tesouro enterrado com ele ou para atormentar os vivos. É descrito como muito forte e de corpo pesado.",
    aparencia: "Cadáver inchado, de pele escura ou azulada", habitat: "Túmulos e montes funerários", fraquezas: "Segundo as sagas, a decapitação e a queima do corpo"
  },
];

const norm = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
const $ = (id) => document.getElementById(id);
const salvar = (estado) => sessionStorage.setItem("bestiario", JSON.stringify(estado));
const carregar = () => JSON.parse(sessionStorage.getItem("bestiario")) || {};
const filtrar = (q, cat) => CRIATURAS.filter((c) => (cat === "Todas" || c.cat === cat) && norm(c.nome).includes(norm(q)));

function cartao(c) {
  const a = document.createElement("a");
  a.className = "card";
  a.href = `criatura.html?id=${c.id}`;
  a.innerHTML = `<div class="top"><img class="glyph" src="img/${c.id}.jpg" alt=""><div><h3>${c.nome}</h3><div class="origem">${c.origem}</div></div></div><p>${c.resumo}</p><span class="tag">${c.cat}</span>`;
  return a;
}

function paginaCatalogo() {
  const est = carregar();
  let q = est.q || "", cat = est.cat || "Todas";
  const campo = $("busca"), chips = $("chips"), grade = $("grade"), vazio = $("vazio"), contador = $("contador");
  CATEGORIAS.forEach((nome) => {
    const b = document.createElement("button");
    b.className = "chip";
    b.textContent = nome;
    b.addEventListener("click", () => { cat = nome; desenhar(); });
    chips.appendChild(b);
  });
  function desenhar() {
    const lista = filtrar(q, cat);
    salvar({ q, cat });
    chips.querySelectorAll(".chip").forEach((b) => b.setAttribute("aria-pressed", b.textContent === cat));
    grade.replaceChildren(...lista.map(cartao));
    const n = lista.length;
    vazio.hidden = n > 0; contador.hidden = n === 0;
    contador.textContent = cat === "Todas" ? `Mostrando ${n} criaturas` : `${n} criaturas em ${cat}`;
  }
  campo.value = q;
  campo.addEventListener("input", () => { q = campo.value; desenhar(); });
  $("form").addEventListener("submit", (e) => e.preventDefault());
  $("limpar").addEventListener("click", () => { q = ""; cat = "Todas"; campo.value = ""; desenhar(); });
  desenhar();
}

function paginaDetalhe() {
  const id = new URLSearchParams(location.search).get("id");
  const c = CRIATURAS.find((x) => x.id === id);
  if (!c) { $("ficha").hidden = true; $("naoachou").hidden = false; return; }
  $("foto").src = `img/${c.id}.jpg`;
  $("foto").alt = `Ilustração de ${c.nome}`;
  $("nome").textContent = c.nome;
  $("meta").textContent = `${c.origem} · ${c.cat}`;
  $("descricao").textContent = c.descricao;
  $("attrs").innerHTML =
    `<dt>Origem</dt><dd>${c.origem}</dd>` +
    `<dt>Categoria</dt><dd>${c.cat}</dd>` +
    `<dt>Aparência</dt><dd>${c.aparencia}</dd>` +
    `<dt>Habitat</dt><dd>${c.habitat}</dd>` +
    `<dt>Fraquezas</dt><dd>${c.fraquezas}</dd>`;
  const mesmaCategoria = CRIATURAS.filter((x) => x.id !== c.id && x.cat === c.cat);
  const outras = CRIATURAS.filter((x) => x.id !== c.id && x.cat !== c.cat);
  const rel = [...mesmaCategoria, ...outras].slice(0, 3);
  $("relacionadas").replaceChildren(...rel.map(cartao));
}

const pagina = document.body.dataset.page;
if (pagina === "catalogo") paginaCatalogo();
if (pagina === "detalhe") paginaDetalhe();
