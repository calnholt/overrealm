import { Term } from './../data/data';
import { TermCode, TERM_CODES } from './../../types/dataTypes';
import { Injectable } from '@angular/core';
import { RulebookSection, RulebookBlock } from './rulebook.component';
import { getAbilityText } from '../common/cards';

@Injectable({
  providedIn: 'root'
})
export class RulebookService {

  constructor() { }

  rulebook: Array<RulebookSection> = [
    {
      title: 'Switchems!',
      blocks: [
        {
          text: 'Leverage your team of monsters in a battle of cunning and wits in this exciting two-player card game',
        },
        {
          text: 'v.0.6.0',
        },
        {
          text: '2 Players   |   30 - 60 Minutes   |   Ages 12+',
        },
        {
          text: 'Designer: Calvin Holt',
        }
      ]
    },
    {
      title: 'How to Win',
      blocks: [
        {
          text: '<a href="ko">Knockout (KO)</a> two of your opponent\'s monsters to win. Monsters are KO’d when their HP [HP] is reduced to 0.'
        }
      ]
    },
    {
      title: 'Golden Rule',
      blocks: [
        {
          text: 'Whenever a card\'s text directly contradicts these rules, the card takes precedence.'
        }
      ]
    },
    {
      title: 'Components',
      blocks: [{
        ul: [
          {
            text: '20 Monsters, each with:',
            ul: [
              {
                text: '1 <a href="monster_card">Monster Card</a>',
              },
              {
                text: '4 <a href="action_card">Action Cards</a>',
              },
              {
                text: '4 <a href="buff_card">Buff Cards</a>',
              },
              {
                text: '1 Reference Card',
              }
            ]
          },
          {
            text: '4 Action Boards',
          },
          {
            text: '4 <a href="stat_cube_board">Stat Cube Boards</a>',
          },
          {
            text: '12 <a href="selection_phase">Maneuver</a> Cubes',
          },
          {
            text: 'A variety of tokens (lots of cubes, dice for damage, etc)',
          }
        ]
      }]
    },
    {
      title: 'Setup',
      rulebookImage: 'Setup',
      columns: 5,
      blocks: [
      {
        text: `After determining your <a href="modes_of_play">mode of play</a>, selecting your supply of monsters, and retrieving their associated cards:`,
      },
      {
        ol: [
          {
            text: 'Place your player shield in front of you, action Board, and one <a href="selection_phase">maneuver</a> cube [MQ] behind it (all of which are hidden from your opponent).',
          },
          {
            text: 'Place your stat cube board in front of the player shield.',
          },
          {
            text: 'After <a href="choosing_your_team">choosing your team</a>, form your deck by collecting the buff cards associated with your team of monsters (there will be four for each monster) for a total of 12 cards. Shuffle your deck and place beside you.',
          },
          {
            text: 'Place your active monster\'s monster card and its action cards in front of the player shield, and arrange the action cards in a two by two grid.',
          },
          {
            text: 'For the two non-starting monsters, place one to the left of you, and the other to the right (which is placed where is irrelevant).',
          },
          {
            text: 'Both players draw [+] two cards and you’re ready to play!',
          }
        ]
      },
    ]
    },
    {
      title: 'Modes of Play',
      id: 'modes_of_play',
      blocks: [
      {
        text: 'There are a couple different modes of play in <b>Switchems!</b>:',
      },
      {
        ul: [
          {
            text: '<b>Draft</b>',
            ul: [
              {
                text: 'Randomly select and shuffle four * [the number of players] monster reference cards together, and deal them out to each player. Each player secretly selects one monster from those cards, then passes the remaining monster cards to the left. Repeat this process until all players have four monsters.',
              },
            ],
          },
          {
            text: '<b>1v1 Casual</b>',
            ul: [
              {
                text: 'Randomly select eight monster cards from the full pool of monsters and collect their respective reference cards. Shuffle the eight reference cards, and deal four to each player. Both players will then secretly and simultaneously select one monster from the four cards. Then the players will exchange the remaining three cards and select another. All monsters selected after the first are revealed to each player. Keep doing this until both players have selected four monsters.',
              }
            ]
          },
          {
            text: '<b>1v1 Competitive</b>',
            ul: [
              {
                text: 'Players select five monsters they would like to use from their personal supply of monsters.',
              }
            ]
          }
        ]
      },
    ]},
    {
      title: 'Choosing your Team',
      id: 'choosing_your_team',
      blocks: [
        {
          text: 'At the start of the game, you will secretly select three monsters from your supply of monsters to bring into the round that compose your team.'
        },
        {
            text: 'Players will choose their teams secretly and simultaneously. Take the associated monster cards of the three you have chosen, and place them face down in a line, all face-down.'
        },
        {
            text: 'Once both players have done so, you simultaneously reveal your selections. The monster in the middle is your active monster. The other two are placed beside your active monster, one on each side.'
        },
        {
            text: 'The monster(s) not selected are put to the side and will not be used for the remainder of the game.'
        }
      ]
    },
    {
      title: 'Monster Cards',
      rulebookImage: 'Monster',
      id: 'monster_card',
      blocks: [
        {
          text: 'Monster cards have several unique attributes:',
          ol: [
            {
              text: 'Monster name',
            },
            {
              text: 'Elements of the monster',
            },
            {
              text: 'Monster ability name and ability text',
            },
            {
              text: 'Role (loosely describes the moster’s playstyle) and complexity (loosely describes how hard the monster is to play)',
            },
            {
              text: 'Initiative (determines when abilities resolve and breaks speed ties)',
            },
            {
              text: 'HP (hit points)',
            },
            {
              text: 'Elemental weaknesses (attacks of these types against this monster result in one additional <a href="flip_effects">flip</a> [FLIP] for the enemy monster\'s attack)',
            },
            {
              text: 'Elemental resistances (gains defense against attacks of the elements when switching in)',
            },
          ]
        },
      ],
    },
    {
      title: 'Monster Actions',
      rulebookImage: 'Action',
      id: 'action_card',
      blocks: [
        {
          text: 'Monster actions have several unique attributes:',
          ol: [
            {
              text: 'Monster action name',
            },
            {
              text: 'Denotes the type of monster action – [ATK] | [SPECIAL]',
            },
            {
              text: 'Denotes the element of this action – [F] | [W] | [R] | [L] | [E] | [S]',
            },
            {
              text: 'Denotes the speed [SPD] of this action',
            },
            {
              text: 'Monster Action ability (not all monster actions have an ability)',
            },
            {
              text: 'Elemental bonus, granting one additional <a href="flip_effects">flip</a> [FLIP] if the enemy monster has one or more of these elements',
            },
            {
              text: 'Action number, so actions are always laid out in the same configuration',
            },
            {
              text: 'Card section, which can feature three different icons – [-] | [+] | [B]'
            },
            {
              text: 'The name of the monster this action belongs to',
            }
          ]
        }
      ]
    },
    {
      title: 'Buffs',
      rulebookImage: 'Buff',
      id: 'buff_card',
      blocks: [
        {
          text: 'Buffs have several unique attributes:',
          ol: [
            {
              text: '<a href="buff_timing">Buff card timing</a>'
            },
            {
              text: 'Buff name',
            },
            {
              text: 'Buff ability text',
            },
            {
              text: '<a href="flip_effects">Flip</a> [FLIP] effect text',
            },
            {
              text: 'The monster the buff card is associated with',
            }
          ]
        },
        {
          text: 'Each monster has four buff cards. Your deck consists of the four buff cards from each of the three monsters in your team. Buff cards are used for either:',
          ul: [
            {
              text: 'Discarding them for actions with discard costs – [-]'
            },
            {
              text: 'Enhancing monster attack [ATK] actions with buffs – [B]'
            }
          ]
        },
        {
          text: 'When enhancing attack [ATK] actions with buff cards, players may select a buff card from their hand for each buff symbol on the selected monster attack. Buff cards are chosen before the <a href="action_phase">action phase</a>, before you and your opponent reveal your selected action.'
        },
        {
            text: '<b>NOTE:</b> You can buff monster attacks with any buff card in your hand - they do NOT have to match your active monster.'
        }
      ]
    },
    {
      title: 'Phases of a Turn',
      blocks: [
        {
          text: 'Each turn is simultaneous (players don’t have their own individual turns). Below is a brief overview of the phases of each turn in the order they occur.',
          ol: [
            {
              text: '<b><a href="selection_phase">Selection Phase</a></b>',
              ul: [
                {
                  text: 'Both players secretly place their action cube on one of the eight potential actions on their action boards',
                },
              ]
            },
            {
              text: '<b><a href="action_phase">Action Phase</a></b>',
              ul : [
                {
                  text: 'Both players reveal their selected actions and then resolve them:',
                  ol: [
                    {
                      text: 'Pre-Action Buffs',
                    },
                    {
                      text: 'Standard Actions',
                    },
                    {
                      text: 'Switch Actions',
                    },
                    {
                      text: 'Monster Actions',
                    },
                    {
                      text: 'Post Action Buffs',
                    },
                  ]
                }
              ]
            },
            {
              text: '<b><a href="end_phase">End Phase</a></b>',
              ul: [
                {
                  text: 'Perform end of turn effects and various cleanup.'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: 'Selection Phase',
      id: 'selection_phase',
      rulebookImage: 'Action-Board',
      blocks: [
        {
          text: 'During the Selection Phase, you will secretly place your action cube on one of the 8 spaces on your action board. These eight actions are split into three groups: Standard Actions, Switch Actions, and Monster Actions. This is also the order in which they resolve.',
        },
        {
            text: '<b>NOTE:</b> When you select any action, you must place the cards remaining in your hand (if any) face down on the hand section of your player board.'
        },
        {
          text: '<h1>Standard Actions</h1>There are two different standard actions. The two standard actions are:',
          ul: [
            {
              text: 'Draw Cards – [+] [+] [+]',
              ul: [
                {
                  text: 'When you select the Draw Cards standard action, you draw three cards as your action for the turn.',
                }
              ]
            },
            {
              text: 'Draw and Gain Maneuver Cube – [+] [MQ]',
              ul: [
                {
                  text: 'When you select the Draw and Gain Maneuver Cube standard action, draw one card and gain one maneuver cube as your action for the turn.'
                }
              ]
            }
          ]
        },
        {
          text: '<h1>Switch Actions</h1>Switch actions require you to discard a card from your hand, as denoted by [-]. Place the discarded card face-up on the discard [-] section of your player board. Switch actions enable you to change your active monster, replacing your active monster with the monster to your right or left (as denoted by the arrow on the action space). Additionally, perform the following:',
        },
        {
            ul: [
                {
                  text: 'Choose <b>one</b>: either the monster that is switching out heals 2[HP] OR remove a <a href="status_conditions">status condition</a> [STATUS] from the monster that is switching out.'
                },
                {
                  text: 'Remove all [NQ] from your <a href="stat_cube_board">stat cube board</a> and remove all but one [ATK][PQ] or [SPD][PQ] from your <a href="stat_cube_board">stat cube board</a>, or keep all [DEF][PQ]. '
                },
                {
                  text: 'The monster that is switching in gains +X[DEF] this turn against elements it is resistant to. The defense value and resistant elements are denoted on the monster card.'
                }
              ]
        },
        {
          text: '<b>NOTE:</b> You cannot switch to <a href="ko">KO’d</a> monsters.',
        },
        {
          text: '<h1>Monster Actions</h1>Monster actions, labeled 1 - 4, correspond to your active monster’s four action cards, arranged in a two by two grid. When you select a monster action, you must place the required number of [-] from your hand face-up on the discard [-] section of your player board. For each [B] on the action, you may optionally apply a <a href="buff_card">buff</a> from your hand to the action, placing each applied <a href="buff_card">buff</a> face-up on the buff [B] section of your action board. These actions are discussed in greater detail <a href="monster_actions">below</a>.'
        },
        {
          text: '<h1>Maneuvers</h1>Maneuver cubes [MQ] are used to augment monster attacks. To use a maneuver, when you select a monster attack [ATK] action, you may select a maneuver by placing one of your [MQ] on the maneuver space. Afterwards, the [MQ] is discarded.',
        },
        {
          ul: [
            {
              text: '+3[DEF] – Your monster gains +3[DEF] this turn.'
            },
            {
              text: '[FLIP] [FLIP] – This attack gains two <a href="flip_effects">flips</a>.'
            },
            {
              text: '+3[SPD] – This attack gains +3[SPD] this turn.'
            }
          ]
        }
      ]
    },
    {
      title: 'Action Phase',
      id: 'action_phase',
      blocks: [
        {
          text: 'After both players have secretly selected their actions, you simultaneously reveal your selected actions. Actions occur in a specific order:',
          ol: [
            {
              text: '<a href="buff_timing">Pre-Action Buffs</a>',
            },
            {
              text: '<a href="selection_phase">Standard Actions</a>',
            },
            {
              text: '<a href="selection_phase">Switch Actions</a>',
            },
            {
              text: '<a href="monster_actions">Monster Actions</a>',
            },
            {
              text: '<a href="buff_timing">Post Action Buffs</a>',
            },
          ]
        }
      ]
    },
    {
      title: 'Monster Actions Detailed',
      id: 'monster_actions',
      blocks: [
        {
          text: 'Monster actions come in two types - attack [ATK] and special [SPECIAL]. Regardless of the type, monster actions may require you to discard a number of cards in order to use, as denoted by the number of discard symbols [-]. This is known as an action’s discard cost. You must discard a number of cards from your hard equal to the discard cost of the action. This is done by placing the required number of [-] from your hand face-up on the discard [-] section of your player board before reveal. If you have fewer cards in your hand than the action’s discard cost, you cannot use that action.'
        },
        {
          text: 'Monster actions with the draw [+] symbol let you draw that many cards after reveal, when resolving the action.',
        },
        {
          text: 'If both players reveal monster actions, the faster action goes first (the action with the greater speed [SPD] value). When both actions have the same speed, the monster with the higher <a href="monster_card">initiative</a> goes first.'
        },
        {
          text: '<h1>Monster Actions - Attack[ATK]</h1>A monster action is an attack if it has the attack [ATK] icon. The number beside the [ATK] icon is how much damage the attack deals. When resolving a monster attack:',
          ul:
           [
            {
              text: 'Resolve all <a href="buff_timing">With Attack</a> buff card effects that were applied to this attack'
            },
            {
              text: 'Resolve the attack’s ability (if any)',
            },
            {
              text: 'If the enemy monster is weak to the attack’s element, apply one additional <a href="flip_effects">flip</a> [FLIP]',
            }
          ]
        },
        {
          text: 'The enemy monster then takes the resulting damage, by lowering its [HP] that much.'
        },
        {
          text: '<h1>Monster Actions - Special[SPECIAL]</h1>A monster action is special if it has the special [SPECIAL] symbol. Special [SPECIAL] actions behave just like attacks except they do not deal damage. These actions usually make your monster stronger or make your opponent\'s monster weaker.',
        },
        {
          text: '<h1>Disabled Actions[DISABLE]</h1>A monster action becomes disabled when it is selected. When a monster action is disabled, place a disabled token on the [DISABLE] space on the action. Actions that are disabled cannot be selected. A disabled monster action becomes enabled after performing your next action.',
        },
        // {
        //   text: '<h1>Monster Actions - Team Aura[TA]</h1>A monster action is a team aura if it has the team aura [TA] symbol. Team aura actions create ongoing benefits for your active monster for a number of turns, as denoted by the number beside the team aura [TA] symbol, called its duration. Put a number of time counters on this action card equal to the action’s team aura [TA] duration value. At the end of each turn, remove a time counter.'
        // },
        // {
        //   text: 'While this action card has time counters on it, the team aura effect is active. This effect is active even if that monster is not your active monster.'
        // },
        // {
        //   text: '<b>NOTE:</b> Team auras [TA] can never have more duration counters on it than its printed duration value.'
        // },
        // {
        //   text: '<b>NOTE:</b> When a monster has a team aura [TA] with time counters on it and switches, keep that card visible to show that its effect is still active. When all of the time counters are removed, return the card to the monster.',
        // }
      ]
    },
    {
      title: 'Buff Timing',
      id: 'buff_timing',
      blocks: [
        {
          text: '<a href="buff_card">Buff</a> cards have three stages of timing, which denote when they resolve during the action phase. These timings are Pre-Actions, With Attack, and Post Actions.',
          ul: [
            {
              text: '<b>Pre-Actions (I):<b>',
              ul: [
                {
                  text: 'Buff cards with Pre-Actions timing reolve before any actions occur. These buffs are resolved in <a href="monster_card">initiative</a> order.'
                }
              ]
            },
            {
              text: '<b>With Attack (II):</b>',
              ul: [
                {
                  text: 'Buff cards that have With Attack timing occur when that player’s selected monster attack action is being resolved, and before calculating damage.'
                },
                {
                  text: '<b>NOTE:</b> If an attack action applied with a With Attack timing buff is prevented by another ability (like flinch), the attack never occurs, therefore the buff’s ability is prevented.'
                }
              ]
            },
            {
              text: '<b>Post Actions (III):</b>',
              ul: [
                {
                  text: 'Buff cards with Post Actions timing occur after all monster actions have been resolved. These buffs are resolved in <a href="monster_card">initiative order</a>.',
                },
                {
                  text: '<b>NOTE:</b> If your active monster is <a href="ko">KO\'d</a> before resolving Post Actions buffs, they are not resolved.',
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: 'Flip Effects[FLIP]',
      id: 'flip_effects',
      blocks: [
        {
          text: 'All <a href="buff_card">buff</a> cards have a flip effect [FLIP], found at the bottom of the card. Sometimes effects have you flip the top card of your deck when resolving a monster attack, denoted by this symbol [FLIP]. For each [FLIP] symbol, flip the top card of your deck and apply its flip effect to your attack [ATK] action.'
        },
      ]
    },
    {
      title: 'Stat Cube Board',
      id: 'stat_cube_board',
      rulebookImage: 'Stat-Cube',
      blocks: [
        {
          text: 'Some abilities have monsters gaining stat cubes. Stat cubes modify your active monster’s stats. These can either be beneficial or detrimental.',
        },
        {
          text: 'When gaining positive stat cubes [PQ], place the number of cubes on the corresponding green space. When gaining negative stat cubes [NQ], place the number of cubes on the corresponding red space. If you gain positive cubes for stats that you already have negative cubes for, instead remove the negative cubes (and vice versa). Each stat has a maximum number of cubes, as denoted on the section.'
        },
        {
          text: 'For example, if an abilty shows this: {\"stat\": \"ATK\", \"num\": 2, \"isPositive\": true}, that means the monster gains two positive attack stat cubes.'
        },
        {
          text: '<h1>Attack Stat Cubes</h1>Attack stat cubes modify the damage value for all of your monster attack actions. If your monster has 2[ATK][PQ] stat cubes, each of your active monster’s attack actions deal an additional 2[ATK]. Likewise, if your monster has 1[ATK][NQ] stat cubes, each of your active monster’s attack actions deal 1[ATK] less.'
        },
        {
          text: '<h1>Speed Stat Cubes</h1>Speed Stat Cubes modify the speed value for all of your monster actions. If your monster has 3[SPD][PQ] stat cubes, each of your active monster’s actions are +3[SPD] speed faster. Likewise, if your monster has 2[SPD][NQ] stat cubes, each of your active monster’s actions are -2[SPD] speed slower.',
        },
        {
          text: '<b>NOTE:</b> Monster actions can never have a speed higher than 9 or lower than 0.'
        },
        {
          text: '<h1>Defense Stat Cubes</h1>Defense stat cubes reduce the amount of damage your monster takes from attacks. These work differently from attack [ATK] and speed [SPD] cubes. No matter how many [DEF][PQ] your monster has, your monster gains +2[DEF]. During the <a href="end_phase">end phase</a>, remove one [DEF][PQ].'
        },
      ]
    },
    {
      title: 'End Phase',
      id: 'end_phase',
      blocks: [
        {
          text: 'After you and your opponent have resolved your actions, perform the following:',
          ul: [
            {
              text: 'Resolve any end of turn abilities in <a href="monster_card">initiative</a> order',
            },
            {
              text: 'Remove one time counter from each team aura [TA]',
            },
            {
              text: 'Remove one [DEF][PQ] from your monster, if applicable'
            },
            {
              text: 'Draw [+] one card'
            }
          ]
        },
        {
          text: 'After this has been done, a new turn begins with the <a href="selection_phase">selection phase</a>.'
        }
      ]
    },
    {
      title: 'Status Conditions[STATUS]',
      id: 'status_conditions',
      blocks: [
        {
          text: 'Many monsters have abilities that apply status conditions [STATUS]. All [STATUS] remain on monsters for the duration of the game unless removed by an effect or chosen to be removed on <a href="selection_phase">switch</a>. Here is a list of all status conditions:',
          ul: [
            {
              text: `<b>Fatigue</b>`,
              ul: [
                {
                  text: `${this.getTerm('~FATIGUE~')}`,
                }
              ]
            },
            {
              text: `<b>Wound</b>`,
              ul: [
                {
                  text: `${this.getTerm('~WOUND~')}`,
                }
              ]
            },
            {
              text: `<b>Drain</b>`,
              ul: [
                {
                  text: `${this.getTerm('~DRAIN~')}`,
                }
              ]
            },
            {
              text: '<b>Stun</b>',
              ul: [
                {
                  text: `${this.getTerm('~STUN~')}`,
                }
              ]
            },
          ]
        }
      ]
    },
    {
      title: 'KO’d Monsters',
      id: 'ko',
      blocks: [
        {
          text: 'Monsters are KO’d when their health points are reduced to 0. Whenever a monster is KO’d, remove ALL cubes from that monster’s <a href="stat_cube_board">stat cube board</a>, and the player controlling that monster selects one of their other monsters to be their new active monster after resolving Post Actions buffs.',
        },
        {
          text: '<b>NOTE:</b> In the instance where both monsters select a monster action, and the faster monster is KO’d from suffer damage before the enemy monster resolves their attack, the slower monster’s action is prevented because there is no valid monster to target.'
        },
        {
          text: '<b>NOTE:</b> KO’d monsters can never recover HP.'
        }
      ]
    },
    {
      title: 'Deck & Hand Limit',
      blocks: [
        {
          text: 'Whenever you need to draw cards from your deck but your deck is empty, shuffle your discard pile to form a new deck. Then draw the requisite number of cards.'
        },
        {
          text: 'Players have a hand limit of five cards. If players would draw cards while having five cards in their hand, players do not draw additional cards.'
        }
      ]
    },
    {
      title: 'Keyword Glossary',
      blocks: this.getKeywordGlossary(),
    },
    {
      title: 'Playtesters',
      blocks: [
        {
          ul: [
            {
              text: 'Conor Cain',
            },
            {
              text: 'Chris Eyer',
            },
            {
              text: 'Zachary Gogel'
            },
            {
              text: 'Ethan Grosso',
            },
            {
              text: 'John Holt',
            },
            {
              text: 'Kevin Levesque',
            },
            {
              text: 'Will Little'
            },
            {
              text: 'Tim Oliva',
            },
            {
              text: 'Jim Palmeri',
            },
            {
              text: 'Dan Peterson',
            },
            {
              text: 'Dan S.'
            },
            {
              text: 'Mike Sette'
            },
            {
              text: 'Guy Tuori',
            },
            {
              text: 'Eric Twardzik',
            },
            {
              text: 'Mike Vessia',
            },
            {
              text: 'Diego Vizhnay',
            },
            {
              text: 'Bruce',
            },
            {
              text: 'Dan',
            },
            {
              text: 'Jeff',
            },
          ]
        }
      ]
    }
];

  getTerm(term: TermCode): string {
    let text = TERM_CODES.find(t => t.key === term).value;
    ['<div>', '</div>'].forEach(html => {
      while (text.includes(html)) {
        text = text.replace(html, '');
      }
    });
    return text;
  }

  getKeywordGlossary(): Array<RulebookBlock> {
    let out = new Array<RulebookBlock>();
    TERM_CODES.forEach((term: Term) => {
      if (!['~GOOP~'].includes(term.key)) {
        let description: string = term.value;
        ['<div>', '</div>'].forEach(html => {
          while (description.includes(html)) {
            description = description.replace(html, '');
          }
        });
        let block: RulebookBlock = new RulebookBlock();
        block.text = `<b>${term.name}</b>`;
        block.ul = [{text: getAbilityText(description, 'term', 'term-img')}];
        out.push(block);
      }
    });
    return out;
  }

}
