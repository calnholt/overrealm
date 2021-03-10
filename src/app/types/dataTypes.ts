import { TypeChart } from './../modules/data/data';
import { Term, Image } from '../modules/data/data';

export const ELEMENTS = [`Fire`, `Water`, `Rock`, `Leaf`, `Electric`, `Death`] as const;
export type ElemType = typeof ELEMENTS[number];

export const ROLES = [`Warrior`, `Assassin`, `Technical`, `Tank`, `Support`, `Tricky`] as const;
export type Role = typeof ROLES[number];

export const BUFF_TIMINGS = [`Pre-Actions`, `With Attack`, `Post Actions`];
export type BuffTiming = typeof BUFF_TIMINGS[number];

const typeChart = new Array;
ELEMENTS.forEach(e => typeChart.push(new TypeChart(e)));
export const TYPE_CHART = typeChart;

export const PLAYER_BOARD_TEXT: string[] = [
    'Buffs', 
    'Discards', 
    'Hand<br><div class="sub-text">(facedown)</div>'
];

export type Url = string;
export type Path = string;
export type Css = string;
export type ImageFile = string;

export type CardTypes = `MONSTER` | `ACTION` | `BUFF` | 'EXTRA';

export const ICON_PATH: Path = `./assets/images`;
export const SYMBOLS_PATH: Path = ICON_PATH + `/symbols/`;
export const ELEMENT_PATH_COLOR: Path = ICON_PATH + `/elements/color/`;
export const ELEMENT_PATH_GRAY: Path = ICON_PATH + `/elements/gray/`;
export const HP_PATH: Path = SYMBOLS_PATH + `/hp/`;
export const ROLE_PATH: Path = ICON_PATH + `/roles/`;

export const MODIFIER_OPTIONS_POS = [0, 1, 2, 3, 4, 5];
export const MODIFIER_OPTIONS_NEG = [0, -1, -2, -3, -4, -5, `X`];

export type TermCodeValue = string;

// best method I could think of with the least redundancy while maintaining strong typing
export const TERM_KEYS = [`~WOUND~`, `~SUCCESS~`, `~FLINCH~`, `~DRAIN~`, `~FATIGUE~`,
    `~STATUS~`, `~SINGLE~`, `~STUN~`, `~RECOIL~`, `~SWITCH~`, `~SUPER~`, `~FASTER~`, `~SLOWER~`, 
    `~GOOP~`, `~EXHAUST~`, '~PIERCE~', `~RESIST~`, `~EFFECTIVE~`, `~CRUSH~`, `~BELONGS~`, `~SPAM~`] as const;
export type TermCode = typeof TERM_KEYS[number];
export const TERM_CODES = [
    new Term('Belongs', `~BELONGS~`, `A buff card <b>Belongs</b> to a monster if the monster name on the bottom of the buff card matches.`),
    new Term('Crush', `~CRUSH~`, `<b>Crush</b> – Remove up to this many of the specified type(s) of stat cubes from either monster.`),
    new Term('Drain', `~DRAIN~`, `At the end of the turn, monsters with <b>Drain</b> [STATUS] suffer <div>1[ATK]</div> and your active monster heals `
    + `<div>1[HP].</div>`),
    new Term('Weak', `~EFFECTIVE~`, `Monsters are <b>Weak</b> to elements found on the bottom left of their monster card.`),
    new Term('Exhaust', `~EXHAUST~`, `<b>Exhaust</b> buffs are removed from the game after played as buffs.`),
    new Term('Faster', `~FASTER~`, `This action is <b>faster</b> if both players selected a monster action and yours has a higher speed, or if your opponent selected a standard action.`),
    new Term('Fatigue', `~FATIGUE~`, `When a monster with <b>Fatigue</b> [STATUS] buffs an attack, the attack gains <div><b>recoil 1[ATK]</b></div> for each buff slot used.`),
    new Term('Flinch', `~FLINCH~`, `Actions with <b>Flinch</b> prevent the enemy monster's monster action if this action is faster.`),
    new Term('Goop', `~GOOP~`, `If you do not have <b>Oozygoopz</b> on your team, goop buffs have no buff effect and are returned `
    + `to its owner's discard pile when played as a buff.`),
    new Term('Pierce', '~PIERCE~', `Attacks with <b>Pierce</b> ignore this amount of the enemy monster's <div>[DEF].</div> Multiple instances of pierce stack.`),
    new Term('Recoil', `~RECOIL~`, `This monster suffers this amount of <b>Recoil</b> damage to itself after the attack. `
    + `Multiple instances of recoil stack.`),
    new Term('Resistant', `~RESIST~`, `Monsters are <b>Resistant</b> to elements found on the bottom right of their monster card.`),
    new Term('Single Use', `~SINGLE~`, `<b>Single Use</b> actions remain disabled until switched out, as denoted by [SINGLE].`),
    new Term('Slower', `~SLOWER~`, `This action is <b>Slower</b> if both players select a monster action and yours has a lower speed.`),
    new Term('Spammable', `~SPAM~`, `<b>Spammable</b> actions do not become disabled.`),
    new Term('Status Condition', `~STATUS~`, `<b>Status Conditions</b> [STATUS] – drain, fatigue , stun, wound.`),
    new Term('Stun', `~STUN~`, `Monsters with <b>Stun</b> [STATUS] perform their switch actions after monster actions.`),
    new Term('Super', `~SUPER~`, `<b>Supers</b> require and use two [B] slots.`),
    new Term('Switches In', `~SWITCH~`, `<b>Switch In</b> abilities also trigger at the start of the game and following a monster KO.`),
    new Term('Unsuccessful', `~SUCCESS~`, `<b>Unsuccessful</b> actions do nothing.`),
    new Term('Wound', `~WOUND~`, `Monsters with <b>Wound</b> [STATUS] perform one less [FLIP] on all of their attacks.`),
] as const;

const IMAGE_KEYS = [`[ATK]`, `[+]`, `[B]`, `[-]`, `[1]`, `[2]`, `[3]`, `[4]`, `[DEF]`, `[TA]`, `[X]`, `[SUCC]`, `[FAIL]`,
`[SPD]`, `[F]`, `[W]`, `[L]`, `[R]`, `[E]`, `[S]`, `[ST]`, `[REAC]`, `[HP]`, '[CUBE]', '[NQ]', '[PQ]', '[ARROW]', '[!]',
'[SPECIAL]', '[STATUS]', '[COUNTER]', '[MQ]', '[ACORN]', '[HONEY]', '[WISH]', '[TORMENT]', '[FLIP]', '[DISABLE]', '[SINGLE]'] as const;
export type ImageCode = typeof IMAGE_KEYS[number];
export const IMAGE_CODES = [
    new Image(`[ATK]`, SYMBOLS_PATH + `attack.png`),
    new Image(`[+]`, SYMBOLS_PATH + `draw.png`),
    new Image(`[B]`, SYMBOLS_PATH + `buff.png`),
    new Image(`[-]`, SYMBOLS_PATH + `discard.png`),
    new Image(`[1]`, SYMBOLS_PATH + `1.png`),
    new Image(`[2]`, SYMBOLS_PATH + `2.png`),
    new Image(`[3]`, SYMBOLS_PATH + `3.png`),
    new Image(`[4]`, SYMBOLS_PATH + `4.png`),
    new Image(`[DEF]`, SYMBOLS_PATH + `defense.png`),
    new Image(`[TA]`, SYMBOLS_PATH + `aura.png`),
    new Image(`[X]`, SYMBOLS_PATH + `x.png`),
    new Image(`[SUCC]`, SYMBOLS_PATH + `success.png`),
    new Image(`[FAIL]`, SYMBOLS_PATH + `fail.png`),
    new Image(`[SPD]`, SYMBOLS_PATH + `speed.png`),
    new Image(`[F]`, ELEMENT_PATH_COLOR + `fire.png`),
    new Image(`[W]`, ELEMENT_PATH_COLOR + `water.png`),
    new Image(`[L]`, ELEMENT_PATH_COLOR + `leaf.png`),
    new Image(`[R]`, ELEMENT_PATH_COLOR + `rock.png`),
    new Image(`[E]`, ELEMENT_PATH_COLOR + `electric.png`),
    new Image(`[S]`, ELEMENT_PATH_COLOR + `death.png`),
    new Image(`[ST]`, SYMBOLS_PATH + `status.png`),
    new Image(`[REAC]`, SYMBOLS_PATH + `reaction.png`),
    new Image(`[HP]`, SYMBOLS_PATH + `heart.png`),
    new Image(`[CUBE]`, SYMBOLS_PATH + `cube.png`),
    new Image(`[NQ]`, SYMBOLS_PATH + `red-cube.png`),
    new Image(`[PQ]`, SYMBOLS_PATH + `green-cube.png`),
    new Image(`[MQ]`, SYMBOLS_PATH + `blue-cube.png`),
    new Image(`[ARROW]`, SYMBOLS_PATH + `sideswipe.png`),
    new Image(`[!]`, SYMBOLS_PATH + `flip-event.png`),
    new Image(`[SPECIAL]`, SYMBOLS_PATH + `status.png`),
    new Image(`[STATUS]`, SYMBOLS_PATH + `wound.png`),
    new Image(`[COUNTER]`, SYMBOLS_PATH + `counter.png`),
    new Image(`[ACORN]`, SYMBOLS_PATH + `acorn.png`),
    new Image(`[HONEY]`, SYMBOLS_PATH + `dripping-honey.png`),
    new Image(`[WISH]`, SYMBOLS_PATH + `round-star.png`),
    new Image(`[TORMENT]`, SYMBOLS_PATH + `torment.png`),
    new Image(`[FLIP]`, SYMBOLS_PATH + `flip.png`),
    new Image(`[DISABLE]`, SYMBOLS_PATH + `unlocked.png`),
    new Image(`[SINGLE]`, SYMBOLS_PATH + `single-use.png`),
] as const;

//TODO: this should return an object with two properties: advElems and DisElems that are arrays of elemtypes
export const getAdvantages = (elem: ElemType): number[] => {
    // fire, water, rock, leaf, elec, death
    // -1 means the monster takes MORE damage
    // 1 means resistance
      if (elem === 'Death') {return [0, -1, 1, 1, -1, 0]; }
      if (elem === 'Electric') { return [-1, 1, -1, 0, 0, 1]; }
      if (elem === 'Fire') { return [0, -1, -1, 1, 1, 0]; }
      if (elem === 'Water') { return [1, 0, 0, -1, -1, 1]; }
      if (elem === 'Leaf') { return [-1, 1, 1, 0, 0, -1]; }
      if (elem === 'Rock') { return [1, 0, 0, -1, 1, -1]; }
  };

