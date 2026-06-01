export type BeachStatus = 'available' | 'activation' | 'comingSoon'

export type Beach = {
  name: string
  city: string
  state: 'SP' | 'RJ' | 'SC'
  region: string
  status: BeachStatus
}

export const beaches: Beach[] = [
  // São Sebastião — disponível
  { name: 'Praia do Engenho', city: 'São Sebastião', state: 'SP', region: 'Litoral Norte SP', status: 'available' },
  { name: 'Praia de Juquehy', city: 'São Sebastião', state: 'SP', region: 'Litoral Norte SP', status: 'available' },
  // São Sebastião — ativação
  { name: 'Boraceia', city: 'São Sebastião', state: 'SP', region: 'Litoral Norte SP', status: 'activation' },
  { name: 'Barra do Una', city: 'São Sebastião', state: 'SP', region: 'Litoral Norte SP', status: 'activation' },
  { name: 'Barra do Sahy', city: 'São Sebastião', state: 'SP', region: 'Litoral Norte SP', status: 'activation' },
  { name: 'Boiçucanga', city: 'São Sebastião', state: 'SP', region: 'Litoral Norte SP', status: 'activation' },
  { name: 'Maresias', city: 'São Sebastião', state: 'SP', region: 'Litoral Norte SP', status: 'activation' },
  { name: 'Camburi', city: 'São Sebastião', state: 'SP', region: 'Litoral Norte SP', status: 'activation' },
  { name: 'Camburizinho', city: 'São Sebastião', state: 'SP', region: 'Litoral Norte SP', status: 'activation' },
  { name: 'Toque-Toque Pequeno', city: 'São Sebastião', state: 'SP', region: 'Litoral Norte SP', status: 'activation' },
  { name: 'Toque-Toque Grande', city: 'São Sebastião', state: 'SP', region: 'Litoral Norte SP', status: 'activation' },
  { name: 'Guaecá', city: 'São Sebastião', state: 'SP', region: 'Litoral Norte SP', status: 'activation' },
  { name: 'Barequeçaba', city: 'São Sebastião', state: 'SP', region: 'Litoral Norte SP', status: 'activation' },
  { name: 'Cigarras', city: 'São Sebastião', state: 'SP', region: 'Litoral Norte SP', status: 'activation' },
  { name: 'São Francisco', city: 'São Sebastião', state: 'SP', region: 'Litoral Norte SP', status: 'activation' },
  { name: 'Jureia', city: 'São Sebastião', state: 'SP', region: 'Litoral Norte SP', status: 'comingSoon' },
  { name: 'Paúba', city: 'São Sebastião', state: 'SP', region: 'Litoral Norte SP', status: 'comingSoon' },
  // Ubatuba
  { name: 'Praia Grande', city: 'Ubatuba', state: 'SP', region: 'Litoral Norte SP', status: 'comingSoon' },
  { name: 'Lagoinha', city: 'Ubatuba', state: 'SP', region: 'Litoral Norte SP', status: 'comingSoon' },
  { name: 'Félix', city: 'Ubatuba', state: 'SP', region: 'Litoral Norte SP', status: 'comingSoon' },
  { name: 'Perequê-Açu', city: 'Ubatuba', state: 'SP', region: 'Litoral Norte SP', status: 'comingSoon' },
  { name: 'Itamambuca', city: 'Ubatuba', state: 'SP', region: 'Litoral Norte SP', status: 'comingSoon' },
  // Caraguatatuba
  { name: 'Martim de Sá', city: 'Caraguatatuba', state: 'SP', region: 'Litoral Norte SP', status: 'comingSoon' },
  { name: 'Indaiá', city: 'Caraguatatuba', state: 'SP', region: 'Litoral Norte SP', status: 'comingSoon' },
  { name: 'Tabatinga', city: 'Caraguatatuba', state: 'SP', region: 'Litoral Norte SP', status: 'comingSoon' },
  // Ilhabela
  { name: 'Praia do Curral', city: 'Ilhabela', state: 'SP', region: 'Litoral Norte SP', status: 'comingSoon' },
  { name: 'Itaquanduba', city: 'Ilhabela', state: 'SP', region: 'Litoral Norte SP', status: 'comingSoon' },
  // Litoral Sul SP
  { name: 'Riviera de São Lourenço', city: 'Bertioga', state: 'SP', region: 'Litoral Sul SP', status: 'comingSoon' },
  { name: 'Enseada', city: 'Guarujá', state: 'SP', region: 'Litoral Sul SP', status: 'comingSoon' },
  { name: 'Pitangueiras', city: 'Guarujá', state: 'SP', region: 'Litoral Sul SP', status: 'comingSoon' },
  { name: 'Praia do Tombo', city: 'Guarujá', state: 'SP', region: 'Litoral Sul SP', status: 'comingSoon' },
  { name: 'Gonzaga', city: 'Santos', state: 'SP', region: 'Litoral Sul SP', status: 'comingSoon' },
  { name: 'José Menino', city: 'Santos', state: 'SP', region: 'Litoral Sul SP', status: 'comingSoon' },
  { name: 'Milionários', city: 'Santos', state: 'SP', region: 'Litoral Sul SP', status: 'comingSoon' },
  { name: 'Itararé', city: 'São Vicente', state: 'SP', region: 'Litoral Sul SP', status: 'comingSoon' },
  { name: 'Praia Grande', city: 'Praia Grande', state: 'SP', region: 'Litoral Sul SP', status: 'comingSoon' },
  { name: 'Mongaguá', city: 'Mongaguá', state: 'SP', region: 'Litoral Sul SP', status: 'comingSoon' },
  { name: 'Cibratel', city: 'Itanhaém', state: 'SP', region: 'Litoral Sul SP', status: 'comingSoon' },
  { name: 'Peruíbe', city: 'Peruíbe', state: 'SP', region: 'Litoral Sul SP', status: 'comingSoon' },
  { name: 'Ilha Comprida', city: 'Ilha Comprida', state: 'SP', region: 'Litoral Sul SP', status: 'comingSoon' },
  // Rio de Janeiro
  { name: 'Ipanema', city: 'Rio de Janeiro', state: 'RJ', region: 'Rio de Janeiro Capital', status: 'comingSoon' },
  { name: 'Copacabana', city: 'Rio de Janeiro', state: 'RJ', region: 'Rio de Janeiro Capital', status: 'comingSoon' },
  { name: 'Barra da Tijuca', city: 'Rio de Janeiro', state: 'RJ', region: 'Rio de Janeiro Capital', status: 'comingSoon' },
  { name: 'Recreio dos Bandeirantes', city: 'Rio de Janeiro', state: 'RJ', region: 'Rio de Janeiro Capital', status: 'comingSoon' },
  { name: 'Leblon', city: 'Rio de Janeiro', state: 'RJ', region: 'Rio de Janeiro Capital', status: 'comingSoon' },
  { name: 'Icaraí', city: 'Niterói', state: 'RJ', region: 'Niterói e Região', status: 'comingSoon' },
  { name: 'Camboinhas', city: 'Niterói', state: 'RJ', region: 'Niterói e Região', status: 'comingSoon' },
  { name: 'Ponta Negra', city: 'Maricá', state: 'RJ', region: 'Região dos Lagos', status: 'comingSoon' },
  { name: 'Itaipuaçu', city: 'Maricá', state: 'RJ', region: 'Região dos Lagos', status: 'comingSoon' },
  { name: 'Cabo Frio', city: 'Cabo Frio', state: 'RJ', region: 'Região dos Lagos', status: 'comingSoon' },
  { name: 'Arraial do Cabo', city: 'Arraial do Cabo', state: 'RJ', region: 'Região dos Lagos', status: 'comingSoon' },
  { name: 'Búzios', city: 'Armação dos Búzios', state: 'RJ', region: 'Região dos Lagos', status: 'comingSoon' },
  { name: 'Saquarema', city: 'Saquarema', state: 'RJ', region: 'Região dos Lagos', status: 'comingSoon' },
  { name: 'Angra dos Reis', city: 'Angra dos Reis', state: 'RJ', region: 'Costa Verde', status: 'comingSoon' },
  { name: 'Ilha Grande', city: 'Angra dos Reis', state: 'RJ', region: 'Costa Verde', status: 'comingSoon' },
  { name: 'Paraty', city: 'Paraty', state: 'RJ', region: 'Costa Verde', status: 'comingSoon' },
  // Santa Catarina
  { name: 'Jurere Internacional', city: 'Florianópolis', state: 'SC', region: 'Florianópolis', status: 'comingSoon' },
  { name: 'Praia dos Ingleses', city: 'Florianópolis', state: 'SC', region: 'Florianópolis', status: 'comingSoon' },
  { name: 'Canasvieiras', city: 'Florianópolis', state: 'SC', region: 'Florianópolis', status: 'comingSoon' },
  { name: 'Praia Mole', city: 'Florianópolis', state: 'SC', region: 'Florianópolis', status: 'comingSoon' },
  { name: 'Lagoa da Conceição', city: 'Florianópolis', state: 'SC', region: 'Florianópolis', status: 'comingSoon' },
  { name: 'Balneário Camboriú', city: 'Balneário Camboriú', state: 'SC', region: 'Vale do Itajaí', status: 'comingSoon' },
  { name: 'Meia Praia', city: 'Itapema', state: 'SC', region: 'Vale do Itajaí', status: 'comingSoon' },
  { name: 'Bombinhas', city: 'Bombinhas', state: 'SC', region: 'Vale do Itajaí', status: 'comingSoon' },
  { name: 'Garopaba', city: 'Garopaba', state: 'SC', region: 'Sul Catarinense', status: 'comingSoon' },
  { name: 'Imbituba', city: 'Imbituba', state: 'SC', region: 'Sul Catarinense', status: 'comingSoon' },
]
