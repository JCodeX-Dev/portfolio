export interface Profile {
  username: string
  profileImage: string
  firstName: string
  middleName: string
  lastName: string
  role: string
  quote: string
  socialLinks: Social
  about: About
  projects: Project[]
}

export interface About {
  intro: string
  skills: string[]
  aboutImage: string
  cv: string
}

export interface Project {
  title: string
  description: string
  link: string
}

export interface Social {
  linkedin: string
  github: string
  twitter: string
  discord: string
  stackoverflow: string
  instagram: string
  facebook: string
}
