export interface NewsItem {
  status: string
  copyright: string
  response: Response
}

export interface Response {
  docs: Doc[]
  meta: Meta
}

export interface Doc {
  web_url: string
  headline: Headline
  pub_date: string
  byline: Byline
}

export interface Headline {
  main: string
  kicker?: string
  content_kicker: string
  print_headline: string
  name: string
  seo: string
  sub: string
}

export interface Byline {
  original?: string
  person: Person[]
  organization?: string
}

export interface Person {
  firstname: string
  middlename: string
  lastname: string
  qualifier: string
  title: string
  role: string
  organization: string
  rank: number
}

export interface Meta {
  hits: number
  offset: number
  time: number
}

export interface FilterItem {
  headline: string
  date: string
  filterTags: string[]
}
