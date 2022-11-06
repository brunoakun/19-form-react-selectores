export interface IPaisMini {
    name:         Name;
    cca3:         string;
    capital:      string[];
    altSpellings: string[];
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: NativeName;
}

export interface NativeName {
    spa: SPA;
}

export interface SPA {
    official: string;
    common:   string;
}


/*  Fronteras  */

export interface IPaisBorders {
    name:         Name;
    cca3:         string;
    capital:      string[];
    altSpellings: string[];
    borders:      string[];
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: NativeName;
}

export interface NativeName {
    spa: SPA;
}

export interface SPA {
    official: string;
    common:   string;
}
