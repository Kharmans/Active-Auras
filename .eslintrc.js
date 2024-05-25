module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    "operator-linebreak": ["error", "before"],
    semi: ["error", "always"],
    "no-constant-condition": ["error", { checkLoops: false }],
    "no-console": "warn",
    "no-undef": "error",
  },
  globals: {
    _levels: true,
    $: true,
    Actor: true,
    AdaptiveLightingShader: true,
    Application: true,
    Atomics: "readonly",
    Azzu: true,
    canvas: true,
    CanvasAnimation: true,
    ChatMessage: true,
    ChatPopout: true,
    Collection: true,
    Combat: true,
    Compendium: true,
    CompendiumCollection: true,
    CONFIG: true,
    CONST: true,
    DAE: true,
    Dialog: true,
    FilePicker: true,
    Folder: true,
    ForgeAPI: true,
    ForgeVTT: true,
    FormApplication: true,
    foundry: true,
    fromUuid: true,
    fromUuidSync: true,
    game: true,
    globalThis: true,
    Hooks: true,
    ImagePopout: true,
    io: true,
    Item: true,
    Journal: true,
    JournalEntry: true,
    JournalEntryPage: true,
    JournalSheet: true,
    JSZip: true,
    libWrapper: true,
    Macro: true,
    MidiQOL: true,
    PIXI: true,
    Playlist: true,
    Ray: true,
    renderTemplate: true,
    Roll: true,
    RollTable: true,
    ROUTE_PREFIX: true,
    Scene: true,
    Sequence: true,
    setProperty: true,
    SettingsConfig: true,
    SharedArrayBuffer: "readonly",
    socketlib: true,
    ui: true,
  },
};
