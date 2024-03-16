/**
 * Some feature/risk categories you want to add to your test. If you want other categories, make sure to adjust the setMetadata function as well.
 * @type {{LOGIN: string}}
 */
export interface TestMetadata {
  risk?: Risk;
  feature?: Feature;
  category?: Category;
  tfs?: TFS;
}

export enum Risk {
  SMOKE = 'SMOKE',
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
}

export enum Feature {
  LOGIN = 'LOGIN',
  MOBILE = 'MOBILE',
  USABILITY = 'USABILITY',
  THEME = 'THEME',
  DARKMODE = 'DARKMODE'
}

export enum TFS {
  EPIC = 'EPIC',
  PBI = 'PBI',
  TASK = 'TASK',
  BUG = "BUG"
}

export enum Category {
  FOCUS = 'FOCUS',
  HISTORY  = 'HISTORY',
  NAVIGATION = 'NAVIGATION',
  PERSISTANCE  = 'PERSISTANCE',
  SYNCHRONIZATION  = 'SYNCHRONIZATION'
}
