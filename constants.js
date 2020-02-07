import {sanitizeRouteUrl} from "./src/util/helpers";

export const URL = {
    home: sanitizeRouteUrl("/"),
    assessment: sanitizeRouteUrl("/assessment"),
    context: sanitizeRouteUrl("/context"),
    onboarding: {
        basic: sanitizeRouteUrl("/onboarding/basic"),
        advanced: sanitizeRouteUrl("/onboarding/advanced"),
        proficient: sanitizeRouteUrl("/onboarding/proficient"),
    },
    visualisation: sanitizeRouteUrl("/visualisation"),
};

export const JAN_15 = "JAN_15";
export const JAN_16 = "JAN_16";
export const JAN_17 = "JAN_17";

export const BEACONS = {
    LLz2: {id: "LLz2", name: "Beacon Pro 1"},
    GmK6: {id: "GmK6", name: "Beacon Pro 2"},
    pMaq: {id: "pMaq", name: "Beacon Pro 3"},
    oiFK: {id: "oiFK", name: "Beacon Pro 4"},
    dPd9: {id: "dPd9", name: "Beacon Pro 5"},
    ofEZ: {id: "ofEz", name: "Beacon Pro 6"},
    UUWO: {id: "UUWO", name: "Beacon Pro 7"},
    WGSU: {id: "WGSU", name: "Beacon Pro 8"},
    Sfo7: {id: "Sfo7", name: "Beacon Pro 9"},
    nnhk: {id: "nnhk", name: "Beacon Pro 10"},
    Xgti: {id: "Xgti", name: "Beacon Pro 11"},
    cS4e: {id: "cS4e", name: "Beacon Pro 12"},
    n4gK: {id: "n4gK", name: "Beacon Pro 13"},
    FFms: {id: "FFms", name: "Beacon Pro 14"},
    GYPG: {id: "GYPG", name: "Beacon Pro 15"},
    GpfO: {id: "GpfO", name: "Beacon Pro 16"},
    Hf6q: {id: "Hf6q", name: "Beacon Pro 17"},
    IHp9: {id: "IHp9", name: "Beacon Pro 18"},
    JWwq: {id: "JWwq", name: "Beacon Pro 19"},
    QuLX: {id: "QuLX", name: "Beacon Pro 20"},
    e1lh: {id: "e1lh", name: "Beacon Pro 21"},
    lwFq: {id: "lwFq", name: "Beacon Pro 22"},
    o31S: {id: "o31S", name: "Beacon Pro 23"},
    ox0d: {id: "ox0d", name: "Beacon Pro 24"},
    xHvM: {id: "xHvM", name: "Beacon Pro 25"}
};