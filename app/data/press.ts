export interface PressMention {
  outlet: string
  url: string
  logoDomain: string
  images: string[]
}

const laiaPress: PressMention[] = [
  {
    outlet: 'Cultura B',
    url: 'https://culturab.cat/noticies/iniciativa-porta-art-comercos-barcelona-per-fer-cultura-barris/',
    logoDomain: 'culturab.cat',
    images: []
  },
  {
    outlet: 'El Periódico',
    url: 'https://www.elperiodico.com/es/barcelona/20260629/iniciativa-fortalecer-comerciodeproximidad-barcelona-barrisvius-vuelvetelocal-131921597',
    logoDomain: 'elperiodico.com',
    images: []
  },
  {
    outlet: 'Barcelona Secreta',
    url: 'https://barcelonasecreta.com/ca/no-tho-perdis-planes-per-aquest-capdesetmana-a-barcelona/',
    logoDomain: 'barcelonasecreta.com',
    images: []
  },
  {
    outlet: 'La Vanguardia',
    url: 'https://www.lavanguardia.com/qf/20260529/11548176/plataforma-devuelve-vida-comercio-barrio-brl.html',
    logoDomain: 'lavanguardia.com',
    images: []
  },
  {
    outlet: 'Consumidor Global',
    url: 'https://www.consumidorglobal.com/ocio-entretenimiento/vuelvete-local-mapa-encontrar-tiendas-barrio-ya-cansa-comprar-en-amazon_19167_102.html',
    logoDomain: 'consumidorglobal.com',
    images: []
  },
  {
    outlet: 'AMIC Cultura',
    url: 'https://www.amiccultura.cat/es/noticia/comercios-barcelona-ponen-alfombra-roja-arte-se-hace-en-barrios_942_102.html',
    logoDomain: 'amiccultura.cat',
    images: []
  }
]

export const pressByProfile: Record<string, PressMention[]> = {
  laia: laiaPress,
  gabo: []
}
