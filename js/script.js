(() => {
  const _0x74a807 = 5;
  const _0x152030 = 0.1;
  const _0x4e82de = 0.05;
  const _0x14a303 = 0.01;
  const _0x24da92 = 0.03;
  const _0x2f75f1 = ["Protag.", "Mass P.", "Ace Excl.", "Amphib.", 'Commander', "Close Combat", "Mid-Range", "Long-Range", 'High\x20Mobility', "High Firepower", "Heavy Armor", 'Transformer', "Gundam Type", "Mobile Fighter", "Support Type", "Federation", "Zeon", "Zaku Type", "GM Type", "For Space", "For Desert", 'For\x20Tundra', "For Forest", "For Urban Area", "For Base", "For Computers"];
  const _0x1ca4e1 = ['For\x20Space', "For Desert", "For Tundra", "For Forest", 'For\x20Urban\x20Area', "For Base", "For Computers"];
  const _0x1d757e = [{
    'name': "Protag.",
    'parameters': ['ma'],
    'multiplier': _0x152030
  }, {
    'name': "Mass P.",
    'parameters': ['a'],
    'multiplier': _0x152030
  }, {
    'name': "Ace Excl.",
    'parameters': ['sa'],
    'multiplier': _0x152030
  }, {
    'name': "Amphib.",
    'parameters': ['br'],
    'multiplier': _0x152030
  }, {
    'name': 'Commander',
    'parameters': ['sa', 'br'],
    'multiplier': _0x4e82de
  }, {
    'name': "Close Combat",
    'parameters': ['a', 'ma'],
    'multiplier': _0x4e82de
  }, {
    'name': "Mid-Range",
    'parameters': ['sa', 'pr'],
    'multiplier': _0x4e82de
  }, {
    'name': "Long-Range",
    'parameters': ['sa', 'sd'],
    'multiplier': _0x4e82de
  }, {
    'name': 'High\x20Mobility',
    'parameters': ['sd', 'br'],
    'multiplier': _0x4e82de
  }, {
    'name': "High Firepower",
    'parameters': ['ma', 'sa'],
    'multiplier': _0x4e82de
  }, {
    'name': "Heavy Armor",
    'parameters': ['md', 'sd'],
    'multiplier': _0x4e82de
  }, {
    'name': 'Transformer',
    'parameters': ['sd'],
    'multiplier': _0x152030
  }, {
    'name': "Gundam Type",
    'parameters': ['a', 'pr'],
    'multiplier': _0x4e82de
  }, {
    'name': "Mobile Fighter",
    'parameters': ['ma', 'md'],
    'multiplier': _0x4e82de
  }, {
    'name': "Support Type",
    'parameters': ['pr'],
    'multiplier': _0x152030
  }, {
    'name': "Federation",
    'parameters': ['ma', 'sd'],
    'multiplier': _0x4e82de
  }, {
    'name': "Zeon",
    'parameters': ['md'],
    'multiplier': _0x152030
  }, {
    'name': "Zaku Type",
    'parameters': ['ma', 'pr'],
    'multiplier': _0x4e82de
  }, {
    'name': "GM Type",
    'parameters': ['sa', 'md'],
    'multiplier': _0x4e82de
  }, {
    'name': "For Space",
    'parameters': ['a', 'ma', 'sa', 'md', 'sd', 'br', 'pr'],
    'multiplier': _0x14a303
  }, {
    'name': "For Desert",
    'parameters': ['a', 'ma', 'sa', 'md', 'sd', 'br', 'pr'],
    'multiplier': _0x14a303
  }, {
    'name': "For Tundra",
    'parameters': ['a', 'ma', 'sa', 'md', 'sd', 'br', 'pr'],
    'multiplier': _0x14a303
  }, {
    'name': 'For\x20Forest',
    'parameters': ['a', 'ma', 'sa', 'md', 'sd', 'br', 'pr'],
    'multiplier': _0x14a303
  }, {
    'name': "For Urban Area",
    'parameters': ['a', 'ma', 'sa', 'md', 'sd', 'br', 'pr'],
    'multiplier': _0x14a303
  }, {
    'name': "For Base",
    'parameters': ['a', 'ma', 'sa', 'md', 'sd', 'br', 'pr'],
    'multiplier': _0x14a303
  }, {
    'name': 'For\x20Computers',
    'parameters': ['a', 'ma', 'sa', 'md', 'sd', 'br', 'pr'],
    'multiplier': _0x14a303
  }];
  const _0x41368a = ["Power", "Speed", "Technique"];
  const _0x919252 = ["EX Skill", "Part Traits"];
  const _0x53b439 = [{
    'name': "Armor",
    'slug': 'a'
  }, {
    'name': "Melee ATK",
    'slug': 'ma'
  }, {
    'name': "Shot ATK",
    'slug': 'sa'
  }, {
    'name': "Melee DEF",
    'slug': 'md'
  }, {
    'name': "Shot DEF",
    'slug': 'sd'
  }, {
    'name': "Beam RES",
    'slug': 'br'
  }, {
    'name': "Phys. RES",
    'slug': 'pr'
  }];
  const _0x3f0092 = ['Beam\x20', 'Physical'];
  const _0x904226 = ["head", "torso", 'arms', "legs", 'backpack', "melee", "range", "shield", "pilot"];
  const _0x31ba3e = ["gear-s1ot1"];
  const _0x3bb2a7 = [..._0x904226, ..._0x31ba3e];
  const _0x240928 = [{
    'name': "All-Rounder"
  }, {
    'name': "Defender",
    'parameters': ['a', 'md', 'sd'],
    'multiplier': _0x4e82de
  }, {
    'name': 'In-Fighter',
    'parameters': ['ma'],
    'multiplier': _0x152030
  }, {
    'name': "Out-Fighter",
    'parameters': ['ma'],
    'multiplier': _0x152030
  }, {
    'name': "Middle-Shooter",
    'parameters': ['sa'],
    'multiplier': _0x152030
  }, {
    'name': "Long-Shooter",
    'parameters': ['sa'],
    'multiplier': _0x152030
  }, {
    'name': "Supporter"
  }];
  const _0x28b132 = ["All power boosted", "All power reduced", "Attacks penetrating super armor", "Buff EX Skill effect up", "Buff EX Skill time up", "Chance to not recoil", "Chance to survive a fatal blow", "CRIT rate boosted", "Debuff EX Skill effect up", "Debuff EX Skill time up", "EX Skill CD reduced", "EX Skill piercing boosted", 'EX\x20Skill\x20power\x20boosted', "EX Skill recovery boosted", "Initial EX Skill Charge boosted", "Job Gauge increase boosted", "Melee power boosted", "Melee power reduced", 'Prevent\x20vernier\x20consumption', "Projectile Speed boosted", "Ranged weapon magazine boosted", "Ranged weapon reload speed", "Shooting power boosted", "Shooting power reduced", "Shot Attack raised", "Shot guidance boosted", "Shot spread reduced", "Sp. Shot power boosted", "Sp. Shot power reduced", "Vernier consumption reduced", "Vernier recovery"];
  const _0x4eaec4 = [0, 0.2, 0.25, 0.3, 0.35, 0.4];
  const _0x1801fd = [{
    'name': "00 Qan[T] Full Saber",
    'attribute': 'Power',
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 1363,
      'ma': 972,
      'sa': 1363,
      'md': 555,
      'sd': 1636,
      'br': 680,
      'pr': 0,
      'wt': ['Protag.', "Close Combat"],
      'ex': {
        'type': "EX Skill",
        'name': "Recovery Tool Y"
      }
    }, {
      'part': "torso",
      'a': 1745,
      'ma': 555,
      'sa': 972,
      'md': 0,
      'sd': 2146,
      'br': 680,
      'pr': 0,
      'wt': ['Protag.', "Close Combat"],
      'ex': {
        'type': "EX Skill",
        'name': 'Defense\x20Hack\x20B'
      }
    }, {
      'part': "arms",
      'a': 0,
      'ma': 2770,
      'sa': 555,
      'md': 555,
      'sd': 1363,
      'br': 471,
      'pr': 286,
      'wt': ["Protag.", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': "With Power attribute (self) Melee power boosted 30%"
      }
    }, {
      'part': "legs",
      'a': 972,
      'ma': 972,
      'sa': 555,
      'md': 972,
      'sd': 1363,
      'br': 680,
      'pr': 286,
      'wt': ['Protag.', "For Space"],
      'ex': {
        'type': "Part Traits",
        'name': "In-Fighter Job Ex Skill CD reduced 20%"
      }
    }, {
      'part': "backpack",
      'a': 972,
      'ma': 972,
      'sa': 555,
      'md': 972,
      'sd': 1363,
      'br': 680,
      'pr': 471,
      'wt': ['Protag.', "For Space"],
      'ex': {
        'type': "EX Skill",
        'name': "Full Saber Attack"
      }
    }, {
      'part': "melee",
      'a': 384,
      'ma': 3582,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 611,
      'pr': 418,
      'wt': ["Protag.", "For Space"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 80% or less EX Skill power boosted 30%"
      },
      'name': "GN Sword IV [Katar Mode]",
      'type': "Physical"
    }, {
      'part': 'melee',
      'a': 1363,
      'ma': 3713,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 680,
      'pr': 286,
      'wt': ["Protag.", "Gundam Type"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "When attacking with Physical Strong Melee CRIT rate boosted 30%"
      },
      'name': 'GN\x20Sword\x20IV\x20[Saber\x20Mode]',
      'type': "Physical"
    }, {
      'part': "melee",
      'a': 1363,
      'ma': 3713,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 680,
      'pr': 286,
      'wt': ["Protag.", 'Gundam\x20Type'],
      'ex': {
        'type': "Part Traits",
        'name': "In-Fighter Job Enemy Shooting power reduced 30%"
      },
      'name': 'GN\x20Gun\x20Blade\x20[Blade\x20Mode]',
      'type': "Physical"
    }, {
      'part': "melee",
      'a': 384,
      'ma': 4004,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 420,
      'pr': 420,
      'wt': ["Protag.", "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': "While Close Combat Initial Ex Skill charge boosted 20%"
      },
      'name': "GN Sword IV Full Saber",
      'type': "Physical"
    }, {
      'part': "range",
      'a': 555,
      'ma': 154,
      'sa': 3331,
      'md': 0,
      'sd': 972,
      'br': 471,
      'pr': 286,
      'wt': ["Protag.", "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': 'Wide\x20Cutter\x20Particle\x20Beam'
      },
      'name': "GN Sword IV [Rifle Mode]",
      'type': "Beam"
    }]
  }, {
    'name': "Aegis Gundam",
    'attribute': 'Speed',
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 1181,
      'ma': 384,
      'sa': 2380,
      'md': 384,
      'sd': 384,
      'br': 213,
      'pr': 417,
      'wt': ["Transformer", "High Mobility"],
      'ex': {
        'type': "EX Skill",
        'name': 'Igelstellung'
      }
    }, {
      'part': 'torso',
      'a': 1977,
      'ma': 384,
      'sa': 796,
      'md': 796,
      'sd': 796,
      'br': 0,
      'pr': 661,
      'wt': ["Transformer", "High Mobility"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': 'When\x20Armor\x20is\x2040%\x20or\x20more\x20Shooting\x20DMG\x20taken\x20reduced\x20by\x208-35'
      }
    }, {
      'part': "arms",
      'a': 1181,
      'ma': 796,
      'sa': 796,
      'md': 1181,
      'sd': 1181,
      'br': 0,
      'pr': 0,
      'wt': ["Transformer", "High Mobility"],
      'ex': {
        'type': "EX Skill",
        'name': "Assault Cyclone"
      }
    }, {
      'part': "legs",
      'a': 1181,
      'ma': 384,
      'sa': 384,
      'md': 796,
      'sd': 1181,
      'br': 417,
      'pr': 611,
      'wt': ["Transformer", "Gundam Type"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': 'Kick\x20Combination'
      }
    }, {
      'part': 'backpack',
      'a': 1181,
      'ma': 384,
      'sa': 384,
      'md': 796,
      'sd': 1181,
      'br': 417,
      'pr': 611,
      'wt': ["Transformer", "Gundam Type"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "When Armor is 40% or more Enemy Sp. Shot power reduced 17-30%"
      }
    }, {
      'part': 'range',
      'a': 1181,
      'ma': 0,
      'sa': 3177,
      'md': 0,
      'sd': 0,
      'br': 213,
      'pr': 611,
      'wt': ["Transformer", "For Base"],
      'ex': {
        'type': "Part Traits",
        'name': "Out-Fighter Job Enemy Shooting power reduced 17-30%"
      },
      'name': "60mm High-Energy Beam Rifle",
      'type': "Beam"
    }, {
      'part': "shield",
      'a': 1181,
      'ma': 0,
      'sa': 0,
      'md': 796,
      'sd': 1602,
      'br': 213,
      'pr': 806,
      'wt': ["Transformer", "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Shield Throw"
      },
      'name': 'Anti-Beam\x20Shield'
    }]
  }, {
    'name': "Aile Strike Gundam",
    'attribute': 'Speed',
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 799,
      'ma': 384,
      'sa': 2791,
      'md': 799,
      'sd': 384,
      'br': 213,
      'pr': 0,
      'wt': ["Protag.", "Mid-Range"],
      'ex': {
        'type': "EX Skill",
        'name': "Igelstellung"
      }
    }, {
      'part': "torso",
      'a': 1184,
      'ma': 384,
      'sa': 384,
      'md': 1608,
      'sd': 799,
      'br': 614,
      'pr': 0,
      'wt': ["Protag.", "Mid-Range"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "With Speed attribute (self) Shooting CRIT rate boosted 10-30%"
      }
    }, {
      'part': "arms",
      'a': 799,
      'ma': 1982,
      'sa': 384,
      'md': 1184,
      'sd': 799,
      'br': 0,
      'pr': 0,
      'wt': ["Protag.", 'Mid-Range'],
      'ex': {
        'type': "Part Traits",
        'name': "With Speed attribute (self) Sp. Shot power boosted 17-30%"
      }
    }, {
      'part': 'legs',
      'a': 799,
      'ma': 384,
      'sa': 799,
      'md': 1184,
      'sd': 384,
      'br': 614,
      'pr': 420,
      'wt': ["Protag.", "High Mobility"],
      'ex': {
        'type': "EX Skill",
        'name': "Rapid Thrust"
      }
    }, {
      'part': "backpack",
      'a': 799,
      'ma': 384,
      'sa': 384,
      'md': 1608,
      'sd': 384,
      'br': 614,
      'pr': 420,
      'wt': ["Protag.", "High Mobility"],
      'ex': {
        'type': "EX Skill",
        'name': "Strike Punisher"
      }
    }, {
      'part': "melee",
      'a': 799,
      'ma': 1982,
      'sa': 0,
      'md': 799,
      'sd': 0,
      'br': 614,
      'pr': 213,
      'wt': ["Protag.", "High Mobility"],
      'ex': {
        'type': "Part Traits",
        'name': "Out-Fighter Job Enemy Melee Power reduced 17-30%"
      },
      'name': "Beam Saber",
      'type': "Beam"
    }, {
      'part': "melee",
      'a': 799,
      'ma': 1982,
      'sa': 0,
      'md': 799,
      'sd': 0,
      'br': 614,
      'pr': 213,
      'wt': ["Protag.", "High Mobility"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Knight's Nail"
      },
      'name': "Grand Slam",
      'type': "Physical"
    }, {
      'part': 'range',
      'a': 384,
      'ma': 0,
      'sa': 3590,
      'md': 799,
      'sd': 0,
      'br': 420,
      'pr': 213,
      'wt': ["Protag.", "Mid-Range"],
      'ex': {
        'type': "Part Traits",
        'name': "With Speed Attribute (Self) Initial EX Skill Charge boosted 6-20%"
      },
      'name': "57mm High-Energy Beam Rifle",
      'type': 'Beam'
    }, {
      'part': "shield",
      'a': 799,
      'ma': 0,
      'sa': 0,
      'md': 1982,
      'sd': 799,
      'br': 812,
      'pr': 213,
      'wt': ["Protag.", "Mid-Range"],
      'ex': {
        'type': "Part Traits",
        'name': "With Speed attribute (self) EX Skill DMG output boosted 8-35"
      },
      'name': "Anti-Beam Shield"
    }]
  }, {
    'name': "Akatsuki [Oowashi Pack]",
    'attribute': "Speed",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 1181,
      'ma': 384,
      'sa': 1181,
      'md': 796,
      'sd': 1181,
      'br': 417,
      'pr': 213,
      'wt': ["Gundam Type", "For Base"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Close-In Weapons System"
      }
    }, {
      'part': "torso",
      'a': 1977,
      'ma': 384,
      'sa': 384,
      'md': 796,
      'sd': 1602,
      'br': 213,
      'pr': 0,
      'wt': ['Gundam\x20Type', 'For\x20Base'],
      'ex': {
        'type': "EX Skill",
        'name': "Yata-no-Kagami"
      }
    }, {
      'part': "arms",
      'a': 796,
      'ma': 1181,
      'sa': 384,
      'md': 1181,
      'sd': 1602,
      'br': 213,
      'pr': 0,
      'wt': ["Gundam Type", 'For\x20Base'],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "When attacking with Beam Sp. Shot power boosted 30%"
      }
    }, {
      'part': "legs",
      'a': 1181,
      'ma': 384,
      'sa': 384,
      'md': 384,
      'sd': 1602,
      'br': 611,
      'pr': 213,
      'wt': ['Gundam\x20Type', 'For\x20Tundra'],
      'ex': {
        'type': "EX Skill",
        'name': 'Experimental\x20Twin\x20Beam\x20Saber'
      }
    }, {
      'part': 'backpack',
      'a': 1181,
      'ma': 384,
      'sa': 384,
      'md': 796,
      'sd': 1181,
      'br': 611,
      'pr': 213,
      'wt': ["Gundam Type", "For Tundra"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': 'High\x20Energy\x20Beam\x20Cannon'
      }
    }, {
      'part': "melee",
      'a': 1181,
      'ma': 2380,
      'sa': 0,
      'md': 0,
      'sd': 796,
      'br': 417,
      'pr': 213,
      'wt': ["Gundam Type", 'High\x20Mobility'],
      'ex': {
        'type': "Part Traits",
        'name': "Middle-Shooter Job Job Gauge Increase boosted 17%"
      },
      'name': "Experimental Twin Beam Saber",
      'type': 'Beam'
    }, {
      'part': "range",
      'a': 1181,
      'ma': 0,
      'sa': 2380,
      'md': 0,
      'sd': 796,
      'br': 611,
      'pr': 213,
      'wt': ["Gundam Type", 'For\x20Base'],
      'ex': {
        'type': "Part Traits",
        'name': 'Initial\x20EX\x20Skill\x20charge\x20boosted\x2020%'
      },
      'name': 'Hyakurai',
      'type': "Beam"
    }, {
      'part': "shield",
      'a': 1181,
      'ma': 0,
      'sa': 0,
      'md': 796,
      'sd': 1977,
      'br': 806,
      'pr': 213,
      'wt': ["Gundam Type", "High Mobility"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Rifle\x20category\x20equipped\x20Enemy\x20Shooting\x20power\x20reduced\x2030%'
      },
      'name': "Type 71 Experimental Defensive Shield"
    }]
  }, {
    'name': "Arche Gundam",
    'attribute': "Power",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 558,
      'ma': 291,
      'sa': 1698,
      'md': 558,
      'sd': 558,
      'br': 302,
      'pr': 0,
      'wt': ["Close Combat", "For Computers"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 50% or less Recover 1-10 Armor gradually"
      }
    }, {
      'part': "torso",
      'a': 1140,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 428,
      'pr': 0,
      'wt': ["Close Combat", "For Computers"],
      'ex': {
        'type': "Part Traits",
        'name': 'In-Fighter\x20Enemy\x20EX\x20Skill\x20penetration\x20reduced\x208-22%'
      }
    }, {
      'part': "arms",
      'a': 558,
      'ma': 1698,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 0,
      'pr': 0,
      'wt': ['Close\x20Combat', "For Computers"],
      'ex': {
        'type': "Part Traits",
        'name': "With Power attribute (self) Enemy Melee power reduced 8-25%"
      }
    }, {
      'part': 'legs',
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 428,
      'pr': 302,
      'wt': ["Close Combat", "High Mobility"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "GN Fang"
      }
    }, {
      'part': "backpack",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 428,
      'pr': 302,
      'wt': ['Close\x20Combat', 'High\x20Mobility'],
      'ex': {
        'type': "Part Traits",
        'name': "While Close Combat Melee power boosted 8-25%"
      }
    }, {
      'part': "melee",
      'a': 558,
      'ma': 2297,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 428,
      'pr': 126,
      'wt': ["Close Combat", 'High\x20Mobility'],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "3-12% chance of attacks penetrating super armor"
      },
      'name': "GN Buster Sword",
      'type': "Physical"
    }, {
      'part': "range",
      'a': 558,
      'ma': 0,
      'sa': 2297,
      'md': 0,
      'sd': 0,
      'br': 428,
      'pr': 126,
      'wt': ["Close Combat", "For Computers"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Power\x20attribute\x20(self)\x20Job\x20Gauge\x20increase\x20boosted\x204-13%'
      },
      'name': "GN Buster Sword Rifle Mode",
      'type': "Beam"
    }, {
      'part': 'shield',
      'a': 558,
      'ma': 0,
      'sa': 0,
      'md': 1140,
      'sd': 1140,
      'br': 588,
      'pr': 126,
      'wt': ["Close Combat", "For Computers"],
      'ex': {
        'type': "EX Skill",
        'name': "GN Field"
      },
      'name': 'GN\x20Shield'
    }]
  }, {
    'name': "Astray Blue Frame",
    'attribute': "Speed",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 795,
      'ma': 382,
      'sa': 1179,
      'md': 1179,
      'sd': 1179,
      'br': 0,
      'pr': 416,
      'wt': ['Mid-Range', 'For\x20Tundra'],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Igelstellung"
      }
    }, {
      'part': "torso",
      'a': 1601,
      'ma': 382,
      'sa': 0,
      'md': 1179,
      'sd': 1179,
      'br': 0,
      'pr': 609,
      'wt': ["Mid-Range", 'For\x20Tundra'],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Offence Hack b"
      }
    }, {
      'part': "arms",
      'a': 795,
      'ma': 1179,
      'sa': 382,
      'md': 1179,
      'sd': 1179,
      'br': 211,
      'pr': 416,
      'wt': ["Mid-Range", "For Tundra"],
      'ex': {
        'type': "EX Skill",
        'name': "Defence Hack b"
      }
    }, {
      'part': 'legs',
      'a': 795,
      'ma': 382,
      'sa': 382,
      'md': 1601,
      'sd': 1601,
      'br': 416,
      'pr': 211,
      'wt': ["Mid-Range", 'Gundam\x20Type'],
      'ex': {
        'type': "Part Traits",
        'name': "With Speed attribute (self) EX Skill piercing boosted 28%"
      }
    }, {
      'part': "backpack",
      'a': 795,
      'ma': 382,
      'sa': 382,
      'md': 1601,
      'sd': 1601,
      'br': 211,
      'pr': 416,
      'wt': ["Mid-Range", 'Gundam\x20Type'],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Serpent Bite"
      }
    }, {
      'part': "shield",
      'a': 0,
      'ma': 0,
      'sa': 0,
      'md': 1974,
      'sd': 1974,
      'br': 211,
      'pr': 805,
      'wt': ["Mid-Range", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': "Middle-Shooter Job Enemy Shooting Power reduced 30%"
      },
      'name': "Anti-Beam Shield"
    }]
  }, {
    'name': "Astray Gold Frame Amatsu",
    'attribute': 'Technique',
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 795,
      'ma': 382,
      'sa': 2377,
      'md': 795,
      'sd': 795,
      'br': 416,
      'pr': 0,
      'wt': ["High Mobility", "Ace Excl."],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 70% or less Enemy Shooting power reduced 30%"
      }
    }, {
      'part': "torso",
      'a': 1601,
      'ma': 382,
      'sa': 382,
      'md': 1179,
      'sd': 1179,
      'br': 609,
      'pr': 0,
      'wt': ["High Mobility", 'Ace\x20Excl.'],
      'ex': {
        'type': 'EX\x20Skill',
        'name': 'Mirage\x20Colloid'
      }
    }, {
      'part': "arms",
      'a': 795,
      'ma': 2377,
      'sa': 382,
      'md': 1179,
      'sd': 1179,
      'br': 0,
      'pr': 0,
      'wt': ['High\x20Mobility', "Ace Excl."],
      'ex': {
        'type': "EX Skill",
        'name': "Trikeros Rush"
      }
    }, {
      'part': "legs",
      'a': 795,
      'ma': 382,
      'sa': 382,
      'md': 1179,
      'sd': 1179,
      'br': 609,
      'pr': 416,
      'wt': ["High Mobility", "For Space"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Technique\x20attribute\x20(self)\x20EX\x20Skill\x20CD\x20reduced\x2020%'
      }
    }, {
      'part': "backpack",
      'a': 795,
      'ma': 382,
      'sa': 382,
      'md': 1179,
      'sd': 1179,
      'br': 609,
      'pr': 416,
      'wt': ['High\x20Mobility', "For Space"],
      'ex': {
        'type': "EX Skill",
        'name': "Maga no Ikutachi"
      }
    }]
  }, {
    'name': "Astray Red Frame",
    'attribute': "Speed",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 1181,
      'ma': 384,
      'sa': 796,
      'md': 1181,
      'sd': 796,
      'br': 289,
      'pr': 289,
      'wt': ["Protag.", "Close Combat"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Igelstellung"
      }
    }, {
      'part': "torso",
      'a': 1977,
      'ma': 796,
      'sa': 384,
      'md': 796,
      'sd': 796,
      'br': 289,
      'pr': 289,
      'wt': ["Protag.", "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': 'In-Fighter\x20Job\x20EX\x20Skill\x20CD\x20reduced\x206-20%'
      }
    }, {
      'part': "arms",
      'a': 796,
      'ma': 2783,
      'sa': 0,
      'md': 1181,
      'sd': 1181,
      'br': 0,
      'pr': 0,
      'wt': ["Protag.", 'Close\x20Combat'],
      'ex': {
        'type': "EX Skill",
        'name': "Lightning Ball"
      }
    }, {
      'part': "legs",
      'a': 1181,
      'ma': 384,
      'sa': 384,
      'md': 1181,
      'sd': 796,
      'br': 476,
      'pr': 476,
      'wt': ["Protag.", "For Urban Area"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Bisect"
      }
    }, {
      'part': 'backpack',
      'a': 1181,
      'ma': 384,
      'sa': 384,
      'md': 1181,
      'sd': 796,
      'br': 476,
      'pr': 476,
      'wt': ["Protag.", "For Urban Area"],
      'ex': {
        'type': "EX Skill",
        'name': "Double Saber Rush"
      }
    }, {
      'part': "melee",
      'a': 1181,
      'ma': 3581,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 289,
      'pr': 289,
      'wt': ["Protag.", "For Urban Area"],
      'ex': {
        'type': "EX Skill",
        'name': "Gerbera Straight"
      },
      'name': "Gerbera Straight",
      'type': "Physical"
    }, {
      'part': "shield",
      'a': 1181,
      'ma': 0,
      'sa': 0,
      'md': 1603,
      'sd': 796,
      'br': 476,
      'pr': 476,
      'wt': ["Protag.", "For Urban Area"],
      'ex': {
        'type': "Part Traits",
        'name': "In-Fighter Job Enemy Shooting Power reduced 17-30%"
      },
      'name': "Anti-Beam Shield"
    }]
  }, {
    'name': "Astray Red Frame Custom",
    'attribute': 'Technique',
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 1182,
      'ma': 384,
      'sa': 799,
      'md': 1182,
      'sd': 384,
      'br': 290,
      'pr': 290,
      'wt': ['Protag.', "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': "With Technique attribute (self) Enemy Shooting power reduced 30%"
      }
    }, {
      'part': "torso",
      'a': 1606,
      'ma': 384,
      'sa': 384,
      'md': 1606,
      'sd': 799,
      'br': 290,
      'pr': 290,
      'wt': ["Protag.", "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': "In-Fighter Job Strong Melee power boosted 30%"
      }
    }, {
      'part': "arms",
      'a': 384,
      'ma': 3181,
      'sa': 384,
      'md': 1606,
      'sd': 384,
      'br': 0,
      'pr': 0,
      'wt': ['Protag.', "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 80% or less Melee CRIT rate boosted 30%"
      }
    }, {
      'part': 'legs',
      'a': 799,
      'ma': 384,
      'sa': 384,
      'md': 1606,
      'sd': 799,
      'br': 420,
      'pr': 290,
      'wt': ["Protag.", "High Mobility"],
      'ex': {
        'type': "EX Skill",
        'name': "Gerbera Straight/Tiger Pierce"
      }
    }, {
      'part': "backpack",
      'a': 799,
      'ma': 384,
      'sa': 384,
      'md': 1606,
      'sd': 799,
      'br': 290,
      'pr': 420,
      'wt': ["Protag.", "High Mobility"],
      'ex': {
        'type': "EX Skill",
        'name': 'Tactical\x20Arms\x20II\x20L'
      }
    }, {
      'part': "melee",
      'a': 384,
      'ma': 4004,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 420,
      'pr': 420,
      'wt': ["Protag.", "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': "While Protag Initial EX Skill charge boosted 20%"
      },
      'name': "Gerbera Straight/Tiger Pierce",
      'type': "Physical"
    }, {
      'part': "range",
      'a': 0,
      'ma': 0,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 0,
      'pr': 0,
      'wt': ['', ''],
      'ex': {
        'type': '',
        'name': ''
      },
      'name': '',
      'type': ''
    }, {
      'part': 'shield',
      'a': 0,
      'ma': 0,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 0,
      'pr': 0,
      'wt': ['', ''],
      'ex': {
        'type': '',
        'name': ''
      },
      'name': ''
    }]
  }, {
    'name': "Banshee",
    'attribute': 'Power',
    'rarity': 4,
    'sokai': 1,
    'parts': [{
      'part': "head",
      'a': 966,
      'ma': 379,
      'sa': 3313,
      'md': 0,
      'sd': 553,
      'br': 284,
      'pr': 465,
      'wt': ["Gundam Type", "Close Combat"],
      'ex': {
        'type': "EX Skill",
        'name': "Head-Mounted Vulcan"
      }
    }, {
      'part': "torso",
      'a': 1736,
      'ma': 789,
      'sa': 1098,
      'md': 966,
      'sd': 966,
      'br': 0,
      'pr': 674,
      'wt': ["Gundam Type", "Close Combat"],
      'ex': {
        'type': "EX Skill",
        'name': 'NT-D'
      }
    }, {
      'part': "arms",
      'a': 1888,
      'ma': 3692,
      'sa': 2026,
      'md': 1508,
      'sd': 1508,
      'br': 0,
      'pr': 1083,
      'wt': ["Gundam Type", "Close Combat"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Armed Armor"
      },
      'combo': "shield"
    }, {
      'part': "legs",
      'a': 966,
      'ma': 789,
      'sa': 720,
      'md': 966,
      'sd': 966,
      'br': 674,
      'pr': 465,
      'wt': ['Gundam\x20Type', "High Firepower"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "With Power attribute (self) EX Skill CD reduced 20%"
      }
    }, {
      'part': "backpack",
      'a': 966,
      'ma': 789,
      'sa': 720,
      'md': 966,
      'sd': 966,
      'br': 465,
      'pr': 674,
      'wt': ["Gundam Type", "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': "Double Saber Rush"
      }
    }]
  }, {
    'name': "Beargguy",
    'attribute': "Power",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 1144,
      'ma': 294,
      'sa': 891,
      'md': 558,
      'sd': 558,
      'br': 302,
      'pr': 0,
      'wt': ["Amphib.", "For Computers"],
      'ex': {
        'type': "EX Skill",
        'name': "Head-Mounted Mega Particle Cannon"
      }
    }, {
      'part': "torso",
      'a': 2593,
      'ma': 558,
      'sa': 558,
      'md': 1435,
      'sd': 1435,
      'br': 592,
      'pr': 430,
      'wt': ['Amphib.', 'For\x20Urban\x20Area'],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "With Module category equipped Buff EX Skill effect up 1-15%"
      },
      'combo': "legs"
    }, {
      'part': 'arms',
      'a': 891,
      'ma': 891,
      'sa': 292,
      'md': 891,
      'sd': 891,
      'br': 127,
      'pr': 0,
      'wt': ['Amphib.', "For Urban Area"],
      'ex': {
        'type': "EX Skill",
        'name': "Arm-Mounted Mega Particle Cannon"
      }
    }, {
      'part': 'backpack',
      'a': 891,
      'ma': 292,
      'sa': 292,
      'md': 891,
      'sd': 891,
      'br': 430,
      'pr': 217,
      'wt': ['Amphib.', 'For\x20Computers'],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Beam Recorder"
      }
    }]
  }, {
    'name': "Beginning 30 Gundam",
    'attribute': "Technique",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 799,
      'ma': 384,
      'sa': 1979,
      'md': 384,
      'sd': 1132,
      'br': 420,
      'pr': 213,
      'wt': ["Gundam Type", 'For\x20Computers'],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Beam Vulcan"
      }
    }, {
      'part': 'torso',
      'a': 1182,
      'ma': 799,
      'sa': 384,
      'md': 799,
      'sd': 1606,
      'br': 612,
      'pr': 0,
      'wt': ["Gundam Type", "For Computers"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 60% or more EX Skill CD reduced 20%"
      }
    }, {
      'part': "arms",
      'a': 1606,
      'ma': 2786,
      'sa': 384,
      'md': 1606,
      'sd': 3181,
      'br': 810,
      'pr': 213,
      'wt': ["Gundam Type", "For Computers"],
      'ex': {
        'type': "Part Traits",
        'name': "Out-fighter Job Melee power boosted 30%"
      },
      'combo': "shield"
    }, {
      'part': "legs",
      'a': 799,
      'ma': 384,
      'sa': 384,
      'md': 384,
      'sd': 1182,
      'br': 612,
      'pr': 420,
      'wt': ["Gundam Type", "For Computers"],
      'ex': {
        'type': "EX Skill",
        'name': 'IFS\x20Unit\x20Barrier'
      }
    }, {
      'part': "backpack",
      'a': 799,
      'ma': 384,
      'sa': 384,
      'md': 384,
      'sd': 1182,
      'br': 612,
      'pr': 420,
      'wt': ["Gundam Type", "High Firepower"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "IFS Unit Combo"
      }
    }, {
      'part': "melee",
      'a': 384,
      'ma': 3586,
      'sa': 0,
      'md': 0,
      'sd': 799,
      'br': 420,
      'pr': 213,
      'wt': ["Gundam Type", "High Firepower"],
      'ex': {
        'type': "Part Traits",
        'name': "15% chance of attacks penetrating super armor"
      },
      'name': "Beam Saber",
      'type': "Beam"
    }, {
      'part': "range",
      'a': 799,
      'ma': 0,
      'sa': 1979,
      'md': 0,
      'sd': 799,
      'br': 612,
      'pr': 213,
      'wt': ["Gundam Type", 'High\x20Firepower'],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "Initial EX Skill charge boosted 20%"
      },
      'name': "Beam Rifle",
      'type': "Beam"
    }]
  }, {
    'name': "Blue Destiny Unit-1",
    'attribute': "Power",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 558,
      'ma': 291,
      'sa': 1698,
      'md': 558,
      'sd': 558,
      'br': 302,
      'pr': 0,
      'wt': ["Close Combat", 'For\x20Desert'],
      'ex': {
        'type': "EX Skill",
        'name': "Exam System"
      }
    }, {
      'part': "torso",
      'a': 1140,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 428,
      'pr': 0,
      'wt': ["Close Combat", 'For\x20Desert'],
      'ex': {
        'type': "EX Skill",
        'name': "Abdominal Wired Missile"
      }
    }, {
      'part': "arms",
      'a': 558,
      'ma': 1698,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 0,
      'pr': 0,
      'wt': ['Close\x20Combat', 'Federation'],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 80% or less Melee DMG taken reduced by 6-20"
      }
    }, {
      'part': "legs",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 428,
      'pr': 302,
      'wt': ["Close Combat", 'Federation'],
      'ex': {
        'type': "EX Skill",
        'name': "Beam Saber Combo"
      }
    }, {
      'part': 'shield',
      'a': 558,
      'ma': 0,
      'sa': 0,
      'md': 1140,
      'sd': 1140,
      'br': 588,
      'pr': 126,
      'wt': ["Close Combat", "For Desert"],
      'ex': {
        'type': "Part Traits",
        'name': "With Power attribute (self) Buff EX Skill time up 1-15%"
      },
      'name': "Shield"
    }]
  }, {
    'name': 'Blitz\x20Gundam',
    'attribute': "Speed",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 558,
      'ma': 291,
      'sa': 889,
      'md': 889,
      'sd': 889,
      'br': 302,
      'pr': 0,
      'wt': ['High\x20Mobility', "For Urban Area"],
      'ex': {
        'type': "EX Skill",
        'name': "Recovery Tool b"
      }
    }, {
      'part': 'torso',
      'a': 1140,
      'ma': 291,
      'sa': 0,
      'md': 889,
      'sd': 889,
      'br': 428,
      'pr': 0,
      'wt': ['High\x20Mobility', 'For\x20Urban\x20Area'],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Mirage Colloid"
      }
    }, {
      'part': "arms",
      'a': 558,
      'ma': 889,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 302,
      'pr': 126,
      'wt': ["High Mobility", "For Urban Area"],
      'ex': {
        'type': "EX Skill",
        'name': 'Trikeros\x20Rush'
      }
    }, {
      'part': "legs",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 1140,
      'sd': 1140,
      'br': 126,
      'pr': 302,
      'wt': ["High Mobility", "Mid-Range"],
      'ex': {
        'type': "Part Traits",
        'name': "With Speed attribute (self) Shooting CRIT rate boosted 8-17%"
      }
    }, {
      'part': "backpack",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 1140,
      'sd': 1140,
      'br': 302,
      'pr': 126,
      'wt': ["High Mobility", 'Mid-Range'],
      'ex': {
        'type': 'Part\x20Traits',
        'name': '1-15%\x20chance\x20to\x20prevent\x20vernier\x20consumption\x20when\x20stepping'
      }
    }]
  }, {
    'name': 'Build\x20Burning\x20Gundam',
    'attribute': "Speed",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 1181,
      'ma': 384,
      'sa': 796,
      'md': 1181,
      'sd': 384,
      'br': 417,
      'pr': 213,
      'wt': ['Protag.', "Close Combat"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "With Speed attribute Buff EX Skill time up 22%"
      }
    }, {
      'part': "torso",
      'a': 1602,
      'ma': 384,
      'sa': 384,
      'md': 1602,
      'sd': 796,
      'br': 611,
      'pr': 0,
      'wt': ["Protag.", "Close Combat"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Jigen Haoh Style Gokui"
      }
    }, {
      'part': "arms",
      'a': 384,
      'ma': 3177,
      'sa': 384,
      'md': 1602,
      'sd': 384,
      'br': 0,
      'pr': 0,
      'wt': ["Protag.", 'Close\x20Combat'],
      'ex': {
        'type': "EX Skill",
        'name': "Jigen Haoh Style Shippu-Zuki"
      }
    }, {
      'part': "legs",
      'a': 796,
      'ma': 384,
      'sa': 384,
      'md': 1602,
      'sd': 796,
      'br': 417,
      'pr': 611,
      'wt': ["Protag.", "Gundam Type"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': 'Jigen\x20Haoh\x20Style\x20Seiso-Geri'
      }
    }, {
      'part': "backpack",
      'a': 796,
      'ma': 384,
      'sa': 384,
      'md': 1602,
      'sd': 796,
      'br': 611,
      'pr': 417,
      'wt': ['Protag.', 'Gundam\x20Type'],
      'ex': {
        'type': "EX Skill",
        'name': "Houou Haoh-Ken"
      }
    }]
  }, {
    'name': "Build Gundam Mk-II",
    'attribute': 'Speed',
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 889,
      'ma': 291,
      'sa': 1701,
      'md': 291,
      'sd': 291,
      'br': 302,
      'pr': 126,
      'wt': ['Gundam\x20Type', 'For\x20Computers'],
      'ex': {
        'type': "EX Skill",
        'name': "Barrier Stance y"
      }
    }, {
      'part': "torso",
      'a': 1433,
      'ma': 291,
      'sa': 558,
      'md': 558,
      'sd': 558,
      'br': 428,
      'pr': 0,
      'wt': ['Gundam\x20Type', 'For\x20Computers'],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "While Gundam Type Debuff EX Skill time up 16%"
      }
    }, {
      'part': 'arms',
      'a': 889,
      'ma': 558,
      'sa': 558,
      'md': 889,
      'sd': 889,
      'br': 0,
      'pr': 0,
      'wt': ["Gundam Type", "For Urban Area"],
      'ex': {
        'type': "EX Skill",
        'name': "Offense Up a"
      }
    }, {
      'part': "legs",
      'a': 889,
      'ma': 291,
      'sa': 291,
      'md': 558,
      'sd': 889,
      'br': 428,
      'pr': 302,
      'wt': ["Gundam Type", "For Urban Area"],
      'ex': {
        'type': "Part Traits",
        'name': "With Speed attribute (self) Mid Shot Attack raised 14%"
      }
    }, {
      'part': "backpack",
      'a': 889,
      'ma': 291,
      'sa': 291,
      'md': 558,
      'sd': 889,
      'br': 428,
      'pr': 302,
      'wt': ['Gundam\x20Type', "For Urban Area"],
      'ex': {
        'type': "EX Skill",
        'name': 'Cougar\x20Rush'
      }
    }, {
      'part': "melee",
      'a': 889,
      'ma': 1701,
      'sa': 0,
      'md': 0,
      'sd': 291,
      'br': 302,
      'pr': 126,
      'wt': ["Gundam Type", "For Computers"],
      'ex': {
        'type': "Part Traits",
        'name': "While For Computers Initial EX Skill charge boosted 12%"
      },
      'name': "Beam Saber",
      'type': "Beam"
    }, {
      'part': 'range',
      'a': 889,
      'ma': 0,
      'sa': 2300,
      'md': 0,
      'sd': 0,
      'br': 428,
      'pr': 126,
      'wt': ["Gundam Type", "For Computers"],
      'ex': {
        'type': "Part Traits",
        'name': "With Speed attribute (self) Job Gauge increase boosted 13%"
      },
      'name': 'Beam\x20Rifle',
      'type': "Beam"
    }, {
      'part': "range",
      'a': 889,
      'ma': 0,
      'sa': 2300,
      'md': 0,
      'sd': 0,
      'br': 428,
      'pr': 126,
      'wt': ["Gundam Type", "For Computers"],
      'ex': {
        'type': "Part Traits",
        'name': "Physical ranged weapon reload speed boosted 15%"
      },
      'name': "Hyper Bazooka",
      'type': "Physical"
    }, {
      'part': "range",
      'a': 889,
      'ma': 0,
      'sa': 2300,
      'md': 0,
      'sd': 0,
      'br': 428,
      'pr': 126,
      'wt': ["Gundam Type", "For Urban Area"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 60% or more Sp. Shot power boosted 25%"
      },
      'name': "Beam Rifle Mk-II",
      'type': "Beam"
    }, {
      'part': "shield",
      'a': 889,
      'ma': 0,
      'sa': 0,
      'md': 558,
      'sd': 1142,
      'br': 590,
      'pr': 126,
      'wt': ['Gundam\x20Type', "For Urban Area"],
      'ex': {
        'type': "Part Traits",
        'name': "Middle-Shooter Job Shooting DMG taken reduced by 20"
      },
      'name': 'Movable\x20Shield'
    }]
  }, {
    'name': "Build Strike Gundam [Full Package]",
    'attribute': "Technique",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 796,
      'ma': 383,
      'sa': 2378,
      'md': 796,
      'sd': 796,
      'br': 212,
      'pr': 212,
      'wt': ["Protag.", "For Urban Area"],
      'ex': {
        'type': "EX Skill",
        'name': "Head-Mounted Vlcan"
      }
    }, {
      'part': "torso",
      'a': 1602,
      'ma': 383,
      'sa': 383,
      'md': 1180,
      'sd': 1180,
      'br': 288,
      'pr': 288,
      'wt': ['Protag.', "For Urban Area"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 80% or less EX Skill DMG output boosted by 35"
      }
    }, {
      'part': "arms",
      'a': 796,
      'ma': 2378,
      'sa': 383,
      'md': 1180,
      'sd': 1180,
      'br': 0,
      'pr': 0,
      'wt': ['Protag.', "For Urban Area"],
      'ex': {
        'type': "Part Traits",
        'name': "With Technique attribute (self) Strong Melee CRIT rate boosted 30%"
      }
    }, {
      'part': "legs",
      'a': 796,
      'ma': 383,
      'sa': 383,
      'md': 1180,
      'sd': 1180,
      'br': 475,
      'pr': 502,
      'wt': ["Protag.", 'Gundam\x20Type'],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Double Saber Rush"
      }
    }, {
      'part': "backpack",
      'a': 796,
      'ma': 383,
      'sa': 383,
      'md': 1180,
      'sd': 1180,
      'br': 502,
      'pr': 475,
      'wt': ["Protag.", "Gundam Type"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Launch Build Booster"
      }
    }, {
      'part': "range",
      'a': 796,
      'ma': 0,
      'sa': 3175,
      'md': 0,
      'sd': 0,
      'br': 417,
      'pr': 417,
      'wt': ["Protag.", "For Urban Area"],
      'ex': {
        'type': "Part Traits",
        'name': "Out-Fighter Job Initial EX Skill charge boosted 20%"
      },
      'name': "Beam Rifle",
      'type': "Beam"
    }, {
      'part': "range",
      'a': 384,
      'ma': 0,
      'sa': 4004,
      'md': 0,
      'sd': 0,
      'br': 290,
      'pr': 290,
      'wt': ["Protag.", 'Gundam\x20Type'],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Technique\x20attribute\x20(self)\x20Job\x20Gauge\x20increase\x20boosted\x2017%'
      },
      'name': 'Enhanced\x20Beam\x20Rifle',
      'type': 'Beam'
    }, {
      'part': "shield",
      'a': 796,
      'ma': 0,
      'sa': 0,
      'md': 1602,
      'sd': 1602,
      'br': 417,
      'pr': 417,
      'wt': ['Protag.', "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Beam Gun"
      },
      'name': "Chobham Shield"
    }]
  }, {
    'name': "Buster Gundam",
    'attribute': "Power",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 291,
      'ma': 291,
      'sa': 2300,
      'md': 291,
      'sd': 889,
      'br': 0,
      'pr': 0,
      'wt': ['Long-Range', "For Desert"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "With Power attribute (self) Shooting power boosted 25%"
      }
    }, {
      'part': "torso",
      'a': 1142,
      'ma': 291,
      'sa': 291,
      'md': 558,
      'sd': 1142,
      'br': 0,
      'pr': 428,
      'wt': ["Long-Range", "For Desert"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': 'Offense\x20Up\x20b'
      }
    }, {
      'part': "arms",
      'a': 889,
      'ma': 558,
      'sa': 291,
      'md': 291,
      'sd': 1142,
      'br': 126,
      'pr': 302,
      'wt': ["Long-Range", "For Desert"],
      'ex': {
        'type': "EX Skill",
        'name': "Archer Stance y"
      }
    }, {
      'part': 'legs',
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 558,
      'sd': 1142,
      'br': 428,
      'pr': 302,
      'wt': ["Long-Range", "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': 'Anti-Armor\x20Shotgun'
      }
    }, {
      'part': "backpack",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 558,
      'sd': 1142,
      'br': 302,
      'pr': 428,
      'wt': ["Long-Range", 'Gundam\x20Type'],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Power\x20attribute\x20(self)\x20Shooting\x20power\x20boosted\x2025%'
      }
    }, {
      'part': "range",
      'a': 291,
      'ma': 0,
      'sa': 2867,
      'md': 0,
      'sd': 0,
      'br': 126,
      'pr': 302,
      'wt': ["Long-Range", "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Nix Snipe"
      },
      'name': "Hyper Impulse Long-Range Sniper Rifle",
      'type': "Beam"
    }]
  }, {
    'name': 'Code\x20Φ',
    'attribute': "Technique",
    'rarity': 2,
    'sokai': 0,
    'mark': 4,
    'parts': [{
      'part': "head",
      'a': 800,
      'ma': 385,
      'sa': 1985,
      'md': 385,
      'sd': 1185,
      'br': 292,
      'pr': 292,
      'wt': ["Ace Excl.", "High Mobility"],
      'ex': {
        'type': "EX Skill",
        'name': "Head-Mounted Vulcan"
      }
    }, {
      'part': "torso",
      'a': 1185,
      'ma': 800,
      'sa': 385,
      'md': 800,
      'sd': 1610,
      'br': 292,
      'pr': 292,
      'wt': ['Ace\x20Excl.', 'High\x20Mobility'],
      'ex': {
        'type': "EX Skill",
        'name': "Assassination"
      }
    }, {
      'part': "arms",
      'a': 800,
      'ma': 2795,
      'sa': 385,
      'md': 800,
      'sd': 1185,
      'br': 0,
      'pr': 0,
      'wt': ["Ace Excl.", 'High\x20Mobility'],
      'ex': {
        'type': "Part Traits",
        'name': "Melee Power boosted 3-15%"
      }
    }, {
      'part': "legs",
      'a': 800,
      'ma': 385,
      'sa': 385,
      'md': 385,
      'sd': 1185,
      'br': 479,
      'pr': 479,
      'wt': ["Ace Excl.", "For Tundra"],
      'ex': {
        'type': "Part Traits",
        'name': "Melee CRIT rate boosted 5-14%"
      }
    }, {
      'part': 'melee',
      'a': 385,
      'ma': 3594,
      'sa': 0,
      'md': 0,
      'sd': 800,
      'br': 292,
      'pr': 292,
      'wt': ["Ace Excl.", 'High\x20Mobility'],
      'ex': {
        'type': "EX Skill",
        'name': 'Grave\x20Punisher'
      },
      'name': "Beam Scythe",
      'type': 'Beam'
    }, {
      'part': "range",
      'a': 800,
      'ma': 0,
      'sa': 1985,
      'md': 0,
      'sd': 800,
      'br': 292,
      'pr': 292,
      'wt': ['Ace\x20Excl.', 'High\x20Mobility'],
      'ex': {
        'type': "Part Traits",
        'name': "Job Gauge increase boosted 2-11%"
      },
      'name': 'Beam\x20Rifle',
      'type': "Beam"
    }]
  }, {
    'name': "Crossbone Gundam X1",
    'attribute': "Technique",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 889,
      'ma': 291,
      'sa': 558,
      'md': 889,
      'sd': 558,
      'br': 302,
      'pr': 126,
      'wt': ["Protag.", 'Close\x20Combat'],
      'ex': {
        'type': "EX Skill",
        'name': "Head-Mounted Vulcan"
      }
    }, {
      'part': "torso",
      'a': 1433,
      'ma': 558,
      'sa': 291,
      'md': 558,
      'sd': 558,
      'br': 428,
      'pr': 0,
      'wt': ["Protag.", "Close Combat"],
      'ex': {
        'type': "EX Skill",
        'name': "Beam Gun"
      }
    }, {
      'part': "arms",
      'a': 558,
      'ma': 1991,
      'sa': 0,
      'md': 889,
      'sd': 889,
      'br': 0,
      'pr': 0,
      'wt': ["Protag.", "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': '3-12%\x20chance\x20of\x20attacks\x20penetrating\x20super\x20armor'
      }
    }, {
      'part': 'legs',
      'a': 889,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 558,
      'br': 428,
      'pr': 302,
      'wt': ["Protag.", "For Space"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Heat Dagger"
      }
    }, {
      'part': "backpack",
      'a': 889,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 558,
      'br': 428,
      'pr': 302,
      'wt': ["Protag.", "For Space"],
      'ex': {
        'type': "Part Traits",
        'name': "Vernier consumption reduced 1-15%"
      }
    }, {
      'part': "melee",
      'a': 889,
      'ma': 2589,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 302,
      'pr': 126,
      'wt': ["Protag.", "For Space"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': 'With\x20Technique\x20attribute\x20(self)\x20EX\x20Skill\x20power\x20boosted\x208-25%'
      },
      'name': "Beam Zanba",
      'type': "Beam"
    }, {
      'part': "range",
      'a': 889,
      'ma': 0,
      'sa': 1699,
      'md': 0,
      'sd': 0,
      'br': 428,
      'pr': 126,
      'wt': ["Protag.", "For Space"],
      'ex': {
        'type': "Part Traits",
        'name': "Beam ranged weapon reload speed boosted 6-15%"
      },
      'name': "Zanbuster",
      'type': "Beam"
    }, {
      'part': "shield",
      'a': 889,
      'ma': 0,
      'sa': 0,
      'md': 1142,
      'sd': 558,
      'br': 590,
      'pr': 126,
      'wt': ["Protag.", 'Close\x20Combat'],
      'ex': {
        'type': "Part Traits",
        'name': "With Technique attribute (self) Enemy Shooting power reduced 8-25%"
      },
      'name': "ABC Cloak"
    }]
  }, {
    'name': "Dragon Gundam",
    'attribute': "Technique",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 559,
      'ma': 292,
      'sa': 1436,
      'md': 292,
      'sd': 891,
      'br': 127,
      'pr': 303,
      'wt': ["Mobile Fighter", "Close Combat"],
      'ex': {
        'type': "EX Skill",
        'name': "Queue Blade"
      }
    }, {
      'part': 'torso',
      'a': 891,
      'ma': 559,
      'sa': 292,
      'md': 559,
      'sd': 1144,
      'br': 0,
      'pr': 430,
      'wt': ["Mobile Fighter", "Close Combat"],
      'ex': {
        'type': "EX Skill",
        'name': "Hyper Mode"
      }
    }, {
      'part': "arms",
      'a': 559,
      'ma': 1994,
      'sa': 292,
      'md': 559,
      'sd': 891,
      'br': 0,
      'pr': 0,
      'wt': ["Mobile Fighter", 'Close\x20Combat'],
      'ex': {
        'type': "EX Skill",
        'name': "Dragon Claw"
      }
    }, {
      'part': "legs",
      'a': 559,
      'ma': 292,
      'sa': 292,
      'md': 292,
      'sd': 891,
      'br': 303,
      'pr': 430,
      'wt': ['Mobile\x20Fighter', "High Firepower"],
      'ex': {
        'type': "Part Traits",
        'name': "Out-Fighter Job Close Shot Attack raised 5-14%"
      }
    }, {
      'part': "backpack",
      'a': 559,
      'ma': 292,
      'sa': 292,
      'md': 292,
      'sd': 891,
      'br': 303,
      'pr': 430,
      'wt': ["Mobile Fighter", "High Firepower"],
      'ex': {
        'type': "Part Traits",
        'name': "Out-Fighter Job Enemy Sp. Shot power reduced 8-25%"
      }
    }, {
      'part': "melee",
      'a': 292,
      'ma': 2594,
      'sa': 0,
      'md': 0,
      'sd': 559,
      'br': 127,
      'pr': 303,
      'wt': ["Mobile Fighter", "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': "Hell Jumper"
      },
      'name': "Feilong Flag",
      'type': "Beam"
    }]
  }, {
    'name': 'Delta\x20Plus',
    'attribute': "Power",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': 'head',
      'a': 889,
      'ma': 291,
      'sa': 558,
      'md': 889,
      'sd': 558,
      'br': 213,
      'pr': 213,
      'wt': ["Transformer", "Federation"],
      'ex': {
        'type': "EX Skill",
        'name': "Head-Mounted Vulcan"
      }
    }, {
      'part': "torso",
      'a': 1434,
      'ma': 558,
      'sa': 291,
      'md': 558,
      'sd': 558,
      'br': 213,
      'pr': 213,
      'wt': ["Transformer", "Federation"],
      'ex': {
        'type': "Part Traits",
        'name': "With Power attribute (self) EX Skill DMG output boosted by 6-20"
      }
    }, {
      'part': "arms",
      'a': 558,
      'ma': 1992,
      'sa': 0,
      'md': 889,
      'sd': 889,
      'br': 0,
      'pr': 0,
      'wt': ["Transformer", "Federation"],
      'ex': {
        'type': "Part Traits",
        'name': "With Rifle category equipped Sp. Shot DMG taken reduced 20"
      }
    }, {
      'part': "legs",
      'a': 889,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 558,
      'br': 350,
      'pr': 350,
      'wt': ['Transformer', "Mid-Range"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 60% or more Sp. Shot power boosted 8-25%"
      }
    }, {
      'part': "backpack",
      'a': 889,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 558,
      'br': 350,
      'pr': 350,
      'wt': ["Transformer", "Mid-Range"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Power\x20attribute\x20(self)\x20Buff\x20EX\x20Skill\x20effect\x20up\x201-15%'
      }
    }, {
      'part': "melee",
      'a': 889,
      'ma': 2591,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 213,
      'pr': 213,
      'wt': ["Transformer", "Federation"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 60% or more Strong Melee power boosted 8-20%"
      },
      'name': 'Beam\x20Saber',
      'type': "Beam"
    }, {
      'part': 'range',
      'a': 889,
      'ma': 0,
      'sa': 1702,
      'md': 0,
      'sd': 0,
      'br': 302,
      'pr': 302,
      'wt': ["Transformer", "Federation"],
      'ex': {
        'type': "Part Traits",
        'name': 'When\x20attacking\x20with\x20Beam\x20Sp.\x20Shot\x20power\x20boosted\x208-25%'
      },
      'name': "Beam Rifle",
      'type': "Beam"
    }, {
      'part': 'shield',
      'a': 889,
      'ma': 0,
      'sa': 0,
      'md': 1142,
      'sd': 558,
      'br': 350,
      'pr': 350,
      'wt': ['Transformer', "Federation"],
      'ex': {
        'type': "EX Skill",
        'name': "Grenade Launcher"
      },
      'name': "Shield"
    }]
  }, {
    'name': "Duel Gundam",
    'attribute': 'Speed',
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 889,
      'ma': 291,
      'sa': 1701,
      'md': 291,
      'sd': 291,
      'br': 302,
      'pr': 126,
      'wt': ["Mid-Range", 'For\x20Urban\x20Area'],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Igelstellung"
      }
    }, {
      'part': "torso",
      'a': 1433,
      'ma': 291,
      'sa': 558,
      'md': 558,
      'sd': 558,
      'br': 428,
      'pr': 0,
      'wt': ['Mid-Range', 'Gundam\x20Type'],
      'ex': {
        'type': "Part Traits",
        'name': "With Bazooka category equipped Sp. Shot power boosted 8-25%"
      }
    }, {
      'part': "arms",
      'a': 889,
      'ma': 558,
      'sa': 558,
      'md': 889,
      'sd': 889,
      'br': 0,
      'pr': 0,
      'wt': ['Mid-Range', "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Barrier Hack b"
      }
    }, {
      'part': "legs",
      'a': 889,
      'ma': 291,
      'sa': 291,
      'md': 558,
      'sd': 889,
      'br': 428,
      'pr': 302,
      'wt': ['Mid-Range', "Gundam Type"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "When Armor is 40% or less 4-13% chance to not recoil"
      }
    }, {
      'part': "backpack",
      'a': 889,
      'ma': 291,
      'sa': 291,
      'md': 558,
      'sd': 889,
      'br': 428,
      'pr': 302,
      'wt': ['Mid-Range', "For Urban Area"],
      'ex': {
        'type': "EX Skill",
        'name': "Combat Hack b"
      }
    }, {
      'part': "range",
      'a': 889,
      'ma': 0,
      'sa': 2300,
      'md': 0,
      'sd': 0,
      'br': 428,
      'pr': 126,
      'wt': ["Mid-Range", "For Urban Area"],
      'ex': {
        'type': "Part Traits",
        'name': "With Speed attribute (Self) EX Skill power boosted 8-25%"
      },
      'name': '57mm\x20High-Energy\x20Beam\x20Rifle',
      'type': 'Beam'
    }, {
      'part': "range",
      'a': 889,
      'ma': 0,
      'sa': 2300,
      'md': 0,
      'sd': 0,
      'br': 428,
      'pr': 126,
      'wt': ['Mid-Range', "For Urban Area"],
      'ex': {
        'type': "Part Traits",
        'name': 'When\x20Armor\x20is\x2040%\x20or\x20less\x20Enemy\x20Shooting\x20power\x20reduced\x208-25%'
      },
      'name': "Gae Bulg",
      'type': "Physical"
    }, {
      'part': "shield",
      'a': 889,
      'ma': 0,
      'sa': 0,
      'md': 558,
      'sd': 1142,
      'br': 590,
      'pr': 126,
      'wt': ["Mid-Range", 'For\x20Forest'],
      'ex': {
        'type': "EX Skill",
        'name': "Combat Hack a"
      },
      'name': "Anti-Beam Shield"
    }]
  }, {
    'name': "Duel Gundam (Assault Shroud)",
    'attribute': "Power",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 384,
      'ma': 384,
      'sa': 3181,
      'md': 384,
      'sd': 1182,
      'br': 0,
      'pr': 0,
      'wt': ["High Firepower", "Mid-Range"],
      'ex': {
        'type': "Part Traits",
        'name': 'Beam\x20ranged\x20weapon\x20reload\x20speed\x20boosted\x208-20%'
      }
    }, {
      'part': 'torso',
      'a': 1606,
      'ma': 384,
      'sa': 384,
      'md': 799,
      'sd': 1606,
      'br': 290,
      'pr': 290,
      'wt': ["High Firepower", "Mid-Range"],
      'ex': {
        'type': "EX Skill",
        'name': "Armed Aura b"
      }
    }, {
      'part': "arms",
      'a': 1182,
      'ma': 799,
      'sa': 384,
      'md': 384,
      'sd': 1606,
      'br': 290,
      'pr': 290,
      'wt': ["High Firepower", "Mid-Range"],
      'ex': {
        'type': "EX Skill",
        'name': 'Shiva\x20&\x205-Tube\x20Missile\x20Pod'
      }
    }, {
      'part': "legs",
      'a': 799,
      'ma': 384,
      'sa': 384,
      'md': 799,
      'sd': 1606,
      'br': 420,
      'pr': 420,
      'wt': ["High Firepower", 'For\x20Space'],
      'ex': {
        'type': "Part Traits",
        'name': "With Power attribute (self) EX Skill piercing boosted 10-28%"
      }
    }, {
      'part': "backpack",
      'a': 799,
      'ma': 384,
      'sa': 384,
      'md': 799,
      'sd': 1606,
      'br': 420,
      'pr': 420,
      'wt': ["High Firepower", "For Space"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 40% or more Melee DMG Output boosted 8-35"
      }
    }]
  }, {
    'name': "Earththree Gundam",
    'attribute': "Speed",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 795,
      'ma': 382,
      'sa': 2377,
      'md': 795,
      'sd': 795,
      'br': 0,
      'pr': 416,
      'wt': ['Protag.', 'For\x20Computers'],
      'ex': {
        'type': "EX Skill",
        'name': "Head-Mounted Vulcan"
      }
    }, {
      'part': "torso",
      'a': 1601,
      'ma': 382,
      'sa': 382,
      'md': 1179,
      'sd': 1179,
      'br': 0,
      'pr': 609,
      'wt': ["Protag.", "For Computers"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 40% or more Buff EX Skill effect up 4-22%"
      }
    }, {
      'part': "arms",
      'a': 795,
      'ma': 2377,
      'sa': 382,
      'md': 1179,
      'sd': 1179,
      'br': 0,
      'pr': 0,
      'wt': ["Protag.", "For Computers"],
      'ex': {
        'type': "Part Traits",
        'name': "6-15% chance of attacks penetrating super armor"
      }
    }, {
      'part': "legs",
      'a': 795,
      'ma': 382,
      'sa': 382,
      'md': 1179,
      'sd': 1179,
      'br': 416,
      'pr': 609,
      'wt': ["Protag.", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': "When attacking with Beam Long Shot Attack raised 8-20%"
      }
    }, {
      'part': "backpack",
      'a': 795,
      'ma': 382,
      'sa': 382,
      'md': 1179,
      'sd': 1179,
      'br': 416,
      'pr': 609,
      'wt': ["Protag.", "Gundam Type"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Cougar Rush"
      }
    }, {
      'part': "melee",
      'a': 795,
      'ma': 3173,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 201,
      'pr': 609,
      'wt': ["Protag.", 'For\x20Computers'],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 40% or more Melee DMG taken reduced 8-35"
      },
      'name': "Beam Saber",
      'type': "Beam"
    }, {
      'part': "range",
      'a': 795,
      'ma': 0,
      'sa': 3173,
      'md': 0,
      'sd': 0,
      'br': 201,
      'pr': 609,
      'wt': ["Protag.", "For Computers"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Charge Shot"
      },
      'name': "Beam Rifle",
      'type': "Beam"
    }, {
      'part': 'shield',
      'a': 795,
      'ma': 0,
      'sa': 0,
      'md': 1601,
      'sd': 1601,
      'br': 211,
      'pr': 805,
      'wt': ['Protag.', "For Computers"],
      'ex': {
        'type': "Part Traits",
        'name': "Beam ranged weapon magazine boosted 9-20%"
      },
      'name': "Shield"
    }]
  }, {
    'name': "Efreet Custom",
    'attribute': "Speed",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 561,
      'ma': 294,
      'sa': 1440,
      'md': 294,
      'sd': 893,
      'br': 215,
      'pr': 215,
      'wt': ["Zeon", 'For\x20Desert'],
      'ex': {
        'type': "EX Skill",
        'name': "EXAM System"
      }
    }, {
      'part': "torso",
      'a': 893,
      'ma': 561,
      'sa': 294,
      'md': 561,
      'sd': 1147,
      'br': 215,
      'pr': 215,
      'wt': ["Zeon", "For Desert"],
      'ex': {
        'type': "Part Traits",
        'name': 'In-Fighter\x20Job\x20Buff\x20EX\x20Skill\x20effect\x20up\x201-15%'
      }
    }, {
      'part': "arms",
      'a': 561,
      'ma': 2000,
      'sa': 294,
      'md': 561,
      'sd': 893,
      'br': 0,
      'pr': 0,
      'wt': ["Zeon", "For Desert"],
      'ex': {
        'type': "EX Skill",
        'name': 'Arm\x20Grenade\x20Launcher'
      }
    }, {
      'part': 'legs',
      'a': 561,
      'ma': 294,
      'sa': 294,
      'md': 294,
      'sd': 893,
      'br': 352,
      'pr': 352,
      'wt': ["Zeon", "Close Combat"],
      'ex': {
        'type': "EX Skill",
        'name': 'Leg\x20Missile\x20Pod'
      }
    }, {
      'part': "backpack",
      'a': 561,
      'ma': 294,
      'sa': 294,
      'md': 294,
      'sd': 893,
      'br': 352,
      'pr': 352,
      'wt': ["Zeon", "Close Combat"],
      'ex': {
        'type': "EX Skill",
        'name': "Heat Rush"
      }
    }, {
      'part': "melee",
      'a': 294,
      'ma': 2601,
      'sa': 0,
      'md': 0,
      'sd': 561,
      'br': 215,
      'pr': 215,
      'wt': ["Zeon", "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': "While Zeon Strong Melee CRIT rate boosted 8-17%"
      },
      'name': "Heat Saber",
      'type': "Physical"
    }]
  }, {
    'name': "Enhanced ZZ Gundam [Ver. Ka]",
    'attribute': "Power",
    'rarity': 4,
    'sokai': 1,
    'parts': [{
      'part': "head",
      'a': 965,
      'ma': 0,
      'sa': 3306,
      'md': 551,
      'sd': 551,
      'br': 282,
      'pr': 464,
      'wt': ["Gundam Type", 'Ace\x20Excl.'],
      'ex': {
        'type': "EX Skill",
        'name': "High Mega Cannon"
      }
    }, {
      'part': "torso",
      'a': 1732,
      'ma': 551,
      'sa': 551,
      'md': 1732,
      'sd': 965,
      'br': 75,
      'pr': 670,
      'wt': ["Gundam Type", "Ace Excl."],
      'ex': {
        'type': "EX Skill",
        'name': "Biosensor"
      }
    }, {
      'part': "arms",
      'a': 1884,
      'ma': 1506,
      'sa': 551,
      'md': 4255,
      'sd': 1506,
      'br': 381,
      'pr': 947,
      'wt': ["Gundam Type", "Ace Excl."],
      'ex': {
        'type': "Part Traits",
        'name': "With Power attribute (self) Strong Melee DMG output boosted by 35"
      },
      'combo': "shield"
    }, {
      'part': "legs",
      'a': 965,
      'ma': 329,
      'sa': 551,
      'md': 1732,
      'sd': 965,
      'br': 464,
      'pr': 670,
      'wt': ["Gundam Type", "High Firepower"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "With Blade category equipped EX Skill CD reduced 20%"
      }
    }, {
      'part': 'backpack',
      'a': 965,
      'ma': 329,
      'sa': 551,
      'md': 1732,
      'sd': 965,
      'br': 464,
      'pr': 670,
      'wt': ["Gundam Type", "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': "Double Cannon & Missile Launcher"
      }
    }, {
      'part': "melee",
      'a': 551,
      'ma': 3138,
      'sa': 0,
      'md': 788,
      'sd': 153,
      'br': 282,
      'pr': 464,
      'wt': ["Protag.", "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': "Hyper Beam Saber"
      },
      'name': "Hyper Beam Saber",
      'type': "Beam"
    }]
  }, {
    'name': 'Force\x20Impulse\x20Gundam',
    'attribute': 'Power',
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': 'head',
      'a': 795,
      'ma': 382,
      'sa': 2377,
      'md': 795,
      'sd': 795,
      'br': 0,
      'pr': 416,
      'wt': ['Gundam\x20Type', 'For\x20Tundra'],
      'ex': {
        'type': "Part Traits",
        'name': 'When\x20Armor\x20is\x2040%\x20or\x20more\x20Shooting\x20CRIT\x20rate\x20boosted\x2010-30%'
      }
    }, {
      'part': "torso",
      'a': 1601,
      'ma': 382,
      'sa': 382,
      'md': 1179,
      'sd': 1179,
      'br': 0,
      'pr': 609,
      'wt': ["Gundam Type", "For Tundra"],
      'ex': {
        'type': "EX Skill",
        'name': "CIWS"
      }
    }, {
      'part': "arms",
      'a': 795,
      'ma': 2377,
      'sa': 382,
      'md': 1179,
      'sd': 1179,
      'br': 0,
      'pr': 0,
      'wt': ["Gundam Type", "Mid-Range"],
      'ex': {
        'type': "Part Traits",
        'name': "With Power attribute (self) Strong Melee CRIT rate boosted 10-30%"
      }
    }, {
      'part': "legs",
      'a': 795,
      'ma': 382,
      'sa': 382,
      'md': 1179,
      'sd': 1179,
      'br': 416,
      'pr': 609,
      'wt': ["Gundam Type", "Mid-Range"],
      'ex': {
        'type': "EX Skill",
        'name': "Rapid Thrust"
      }
    }, {
      'part': "backpack",
      'a': 795,
      'ma': 382,
      'sa': 382,
      'md': 1179,
      'sd': 1179,
      'br': 416,
      'pr': 609,
      'wt': ['Gundam\x20Type', "Mid-Range"],
      'ex': {
        'type': "EX Skill",
        'name': "Excalibur"
      }
    }, {
      'part': "melee",
      'a': 795,
      'ma': 3173,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 211,
      'pr': 609,
      'wt': ["Gundam Type", "For Tundra"],
      'ex': {
        'type': "Part Traits",
        'name': "With Rifle category equipped Initial EX Skill charge boosted 6-20%"
      },
      'name': 'Vajra\x20Beam\x20Saber',
      'type': 'Beam'
    }, {
      'part': "range",
      'a': 795,
      'ma': 0,
      'sa': 3173,
      'md': 0,
      'sd': 0,
      'br': 211,
      'pr': 609,
      'wt': ["Gundam Type", "Protag."],
      'ex': {
        'type': 'Part\x20Traits',
        'name': 'With\x20Rifle\x20category\x20equipped\x20Enemy\x20Shooting\x20power\x20reduced\x2017-30%'
      },
      'name': 'MA-BAR72\x20High-Energy\x20Beam\x20Rifle',
      'type': "Beam"
    }, {
      'part': "shield",
      'a': 795,
      'ma': 0,
      'sa': 0,
      'md': 1601,
      'sd': 1601,
      'br': 211,
      'pr': 805,
      'wt': ['Gundam\x20Type', "Protag."],
      'ex': {
        'type': "EX Skill",
        'name': "Shield Throw"
      },
      'name': "Mobile Shield"
    }]
  }, {
    'name': "Freedom Gundam",
    'attribute': "Power",
    'rarity': 4,
    'sokai': 1,
    'parts': [{
      'part': "head",
      'a': 1356,
      'ma': 553,
      'sa': 2523,
      'md': 553,
      'sd': 553,
      'br': 383,
      'pr': 383,
      'wt': ["Protag.", "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': 'Picus'
      }
    }, {
      'part': "torso",
      'a': 2133,
      'ma': 553,
      'sa': 966,
      'md': 966,
      'sd': 966,
      'br': 383,
      'pr': 383,
      'wt': ["Protag.", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': 'When\x20armor\x20is\x2040%\x20or\x20more,\x20Strong\x20Melee\x20DMG\x20output\x20boosted\x2035'
      }
    }, {
      'part': "arms",
      'a': 1356,
      'ma': 966,
      'sa': 966,
      'md': 1356,
      'sd': 1356,
      'br': 0,
      'pr': 0,
      'wt': ["Protag.", "Gundam Type"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "With Power attribute (self) Sp. Shot power boosted 30%"
      }
    }, {
      'part': "legs",
      'a': 1356,
      'ma': 553,
      'sa': 553,
      'md': 966,
      'sd': 1356,
      'br': 555,
      'pr': 555,
      'wt': ["Protag.", "High Mobility"],
      'ex': {
        'type': "EX Skill",
        'name': "Xiphias Rail Cannon"
      }
    }, {
      'part': "backpack",
      'a': 1356,
      'ma': 553,
      'sa': 553,
      'md': 966,
      'sd': 1356,
      'br': 555,
      'pr': 555,
      'wt': ["Protag.", "High Mobility"],
      'ex': {
        'type': "EX Skill",
        'name': 'Balaena\x20Plasma\x20Beam\x20Cannon'
      }
    }, {
      'part': "melee",
      'a': 1356,
      'ma': 2523,
      'sa': 0,
      'md': 0,
      'sd': 553,
      'br': 383,
      'pr': 383,
      'wt': ["Protag.", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': "Strong Melee Output boosted 35"
      },
      'name': "Lacerta Beam Saber",
      'type': "Beam"
    }, {
      'part': "range",
      'a': 1356,
      'ma': 0,
      'sa': 3312,
      'md': 0,
      'sd': 0,
      'br': 465,
      'pr': 465,
      'wt': ["Protag.", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': "With Power attribute (self) Job Gauge increase boosted 17%"
      },
      'name': "Lupus Beam Rifle",
      'type': 'Beam'
    }, {
      'part': "shield",
      'a': 1356,
      'ma': 0,
      'sa': 0,
      'md': 965,
      'sd': 1734,
      'br': 555,
      'pr': 555,
      'wt': ['Protag.', "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Shield Bash"
      },
      'name': "Laminated Anti-Beam Shield"
    }]
  }, {
    'name': "Gaia Gundam",
    'attribute': 'Speed',
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 558,
      'ma': 291,
      'sa': 1698,
      'md': 558,
      'sd': 558,
      'br': 0,
      'pr': 302,
      'wt': ['Transformer', " Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "CIWS"
      }
    }, {
      'part': "torso",
      'a': 1140,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 0,
      'pr': 428,
      'wt': ["Transformer", " Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': "Out-Fighter Job Enemy EX Skill penetration reduced 8-22%"
      }
    }, {
      'part': "arms",
      'a': 558,
      'ma': 1698,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 0,
      'pr': 0,
      'wt': ["Transformer", " Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': "While Transformer Strong Melee CRIT rate boosted 8-17%"
      }
    }, {
      'part': 'legs',
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 302,
      'pr': 428,
      'wt': ['Transformer', "For Forest"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Speed\x20attribute\x20(self)\x204-13%\x20chance\x20to\x20not\x20recoil'
      }
    }, {
      'part': "backpack",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 302,
      'pr': 428,
      'wt': ["Transformer", "For Forest"],
      'ex': {
        'type': "EX Skill",
        'name': "MA-81R Beam Assault Cannon"
      }
    }, {
      'part': 'melee',
      'a': 558,
      'ma': 2297,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 126,
      'pr': 428,
      'wt': ['Transformer', "For Forest"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "Out-Fighter Job Job Gauge increase boosted 4-13%"
      },
      'name': "Vajra Beam Saber",
      'type': "Beam"
    }, {
      'part': "range",
      'a': 558,
      'ma': 0,
      'sa': 2297,
      'md': 0,
      'sd': 0,
      'br': 126,
      'pr': 428,
      'wt': ["Transformer", 'For\x20Forest'],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "With Speed attribute (self) EX Skill power boosted 8-25%"
      },
      'name': 'High-Energy\x20Beam\x20Rifle',
      'type': "Beam"
    }, {
      'part': "shield",
      'a': 558,
      'ma': 0,
      'sa': 0,
      'md': 1140,
      'sd': 1140,
      'br': 126,
      'pr': 588,
      'wt': ["Transformer", "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Shield Throw"
      },
      'name': "Mobile Shield"
    }]
  }, {
    'name': 'Gouf\x20Custom',
    'attribute': "Power",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 558,
      'ma': 291,
      'sa': 889,
      'md': 889,
      'sd': 889,
      'br': 302,
      'pr': 0,
      'wt': ["Zeon", "For Urban Area"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 60% or less Recover 1-10 Armor gradually"
      }
    }, {
      'part': "torso",
      'a': 1140,
      'ma': 291,
      'sa': 0,
      'md': 889,
      'sd': 889,
      'br': 428,
      'pr': 0,
      'wt': ["Zeon", "For Urban Area"],
      'ex': {
        'type': "Part Traits",
        'name': "In-Fighter Job EX Skill CD reduced 4-15%"
      }
    }, {
      'part': "arms",
      'a': 558,
      'ma': 889,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 302,
      'pr': 126,
      'wt': ["Zeon", "For Urban Area"],
      'ex': {
        'type': "EX Skill",
        'name': "Head Rod"
      }
    }, {
      'part': "legs",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 1140,
      'sd': 1140,
      'br': 126,
      'pr': 302,
      'wt': ["Zeon", "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': "In-Fighter Job Close Shot Attack raised 5-14%"
      }
    }, {
      'part': "backpack",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 1140,
      'sd': 1140,
      'br': 302,
      'pr': 126,
      'wt': ["Zeon", "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Power\x20attribute\x20(self)\x20Melee\x20DMG\x20output\x20boosted\x20by\x206-20'
      }
    }, {
      'part': 'melee',
      'a': 558,
      'ma': 1140,
      'sa': 0,
      'md': 558,
      'sd': 558,
      'br': 428,
      'pr': 302,
      'wt': ["Zeon", 'For\x20Urban\x20Area'],
      'ex': {
        'type': "Part Traits",
        'name': "When attacking with Physical Strong Melee power boosted 8-20%"
      },
      'name': "Heat Sword",
      'type': "Physical"
    }, {
      'part': "melee",
      'a': 558,
      'ma': 1140,
      'sa': 0,
      'md': 558,
      'sd': 558,
      'br': 428,
      'pr': 302,
      'wt': ["Zeon", "For Urban Area"],
      'ex': {
        'type': "Part Traits",
        'name': "With Power attribute (self) Job Gauge increase boosted 4-13%"
      },
      'name': "Heat Rod",
      'type': "Physical"
    }, {
      'part': 'range',
      'a': 558,
      'ma': 0,
      'sa': 1140,
      'md': 1990,
      'sd': 1990,
      'br': 1016,
      'pr': 428,
      'wt': ["Zeon", "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': "Physical ranged weapon magazine boosted 20%"
      },
      'name': "Gatling Shield",
      'type': "Physical",
      'combo': "shield"
    }]
  }, {
    'name': "Gerbera Tetra",
    'attribute': "Speed",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 889,
      'ma': 291,
      'sa': 1701,
      'md': 291,
      'sd': 291,
      'br': 302,
      'pr': 126,
      'wt': ["Ace Excl.", "Zeon"],
      'ex': {
        'type': "Part Traits",
        'name': "With Gundam Type enemy Shooting power boosted 8-25%"
      }
    }, {
      'part': "torso",
      'a': 1433,
      'ma': 291,
      'sa': 558,
      'md': 558,
      'sd': 558,
      'br': 428,
      'pr': 0,
      'wt': ["Ace Excl.", "Zeon"],
      'ex': {
        'type': "Part Traits",
        'name': "With Gundam Type enemy EX Skill DMG output boosted 6-20"
      }
    }, {
      'part': "arms",
      'a': 889,
      'ma': 558,
      'sa': 558,
      'md': 889,
      'sd': 889,
      'br': 0,
      'pr': 0,
      'wt': ["Ace Excl.", "Mid-Range"],
      'ex': {
        'type': "EX Skill",
        'name': "110mm Autocannon"
      }
    }, {
      'part': "legs",
      'a': 889,
      'ma': 291,
      'sa': 291,
      'md': 558,
      'sd': 889,
      'br': 428,
      'pr': 302,
      'wt': ["Ace Excl.", 'Mid-Range'],
      'ex': {
        'type': "EX Skill",
        'name': 'Beam\x20Saber\x20Combo'
      }
    }, {
      'part': "backpack",
      'a': 889,
      'ma': 291,
      'sa': 291,
      'md': 558,
      'sd': 889,
      'br': 428,
      'pr': 302,
      'wt': ["Ace Excl.", 'High\x20Mobility'],
      'ex': {
        'type': "Part Traits",
        'name': 'When\x20Armor\x20is\x2060%\x20or\x20more\x20Buff\x20EX\x20Skill\x20effect\x20up\x201-15%'
      }
    }, {
      'part': "range",
      'a': 889,
      'ma': 0,
      'sa': 2300,
      'md': 0,
      'sd': 0,
      'br': 428,
      'pr': 126,
      'wt': ["Ace Excl.", "Mid-Range"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Panic Maker"
      },
      'name': "Beam Machine Gun",
      'type': 'Beam'
    }]
  }, {
    'name': "Gundam",
    'attribute': 'Technique',
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': 'head',
      'a': 796,
      'ma': 383,
      'sa': 2378,
      'md': 796,
      'sd': 796,
      'br': 212,
      'pr': 212,
      'wt': ["Protag.", 'Gundam\x20Type'],
      'ex': {
        'type': "EX Skill",
        'name': "Head-Mounted Vulcan"
      }
    }, {
      'part': "torso",
      'a': 1602,
      'ma': 383,
      'sa': 383,
      'md': 1180,
      'sd': 1180,
      'br': 288,
      'pr': 288,
      'wt': ["Protag.", "Gundam Type"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "With Saber category equipped Melee power boosted 17-30%"
      }
    }, {
      'part': "arms",
      'a': 796,
      'ma': 2378,
      'sa': 383,
      'md': 1180,
      'sd': 1180,
      'br': 0,
      'pr': 0,
      'wt': ['Protag.', "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': "With Technique attribute (self) Melee DMG taken reduced by 8-35"
      }
    }, {
      'part': "legs",
      'a': 796,
      'ma': 383,
      'sa': 383,
      'md': 1180,
      'sd': 1180,
      'br': 475,
      'pr': 502,
      'wt': ["Protag.", "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': "With Technique attribute (self) Mid Shot Attack raised 8-20%"
      }
    }, {
      'part': "backpack",
      'a': 796,
      'ma': 383,
      'sa': 383,
      'md': 1180,
      'sd': 1180,
      'br': 502,
      'pr': 475,
      'wt': ["Protag.", "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Double Saber Rush"
      }
    }, {
      'part': 'melee',
      'a': 796,
      'ma': 3176,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 417,
      'pr': 417,
      'wt': ["Protag.", "Close Combat"],
      'ex': {
        'type': "EX Skill",
        'name': 'Crimson\x20Stinger'
      },
      'name': "Beam Javelin",
      'type': "Beam"
    }, {
      'part': "melee",
      'a': 796,
      'ma': 3176,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 417,
      'pr': 417,
      'wt': ["Protag.", "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': "With Technique attribute (self) Melee Crit rate boosted 10-30%"
      },
      'name': "Beam Saber",
      'type': "Beam"
    }, {
      'part': "range",
      'a': 796,
      'ma': 0,
      'sa': 3176,
      'md': 0,
      'sd': 0,
      'br': 417,
      'pr': 417,
      'wt': ["Protag.", "Mid-Range"],
      'ex': {
        'type': "EX Skill",
        'name': "Last Shooting"
      },
      'name': "Beam Rifle",
      'type': 'Beam'
    }, {
      'part': "range",
      'a': 796,
      'ma': 0,
      'sa': 3176,
      'md': 0,
      'sd': 0,
      'br': 417,
      'pr': 417,
      'wt': ["Protag.", 'Mid-Range'],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "With Technique attribute (self) Shooting DMG output boosted by 8-35"
      },
      'name': 'Hyper\x20Bazooka',
      'type': "Physical"
    }, {
      'part': "shield",
      'a': 796,
      'ma': 0,
      'sa': 0,
      'md': 1602,
      'sd': 1602,
      'br': 417,
      'pr': 417,
      'wt': ['Protag.', 'Close\x20Combat'],
      'ex': {
        'type': "Part Traits",
        'name': "With Technique attribute (self) Buff EX Skill effect up 4-22%"
      },
      'name': "Shield"
    }]
  }, {
    'name': "Gundam AGE Normal",
    'attribute': "Power",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': 'head',
      'a': 559,
      'ma': 294,
      'sa': 893,
      'md': 559,
      'sd': 559,
      'br': 303,
      'pr': 303,
      'wt': ["Mid-Range", "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Combat Stance a"
      }
    }, {
      'part': "torso",
      'a': 559,
      'ma': 294,
      'sa': 294,
      'md': 559,
      'sd': 559,
      'br': 432,
      'pr': 432,
      'wt': ["Mid-Range", "Gundam Type"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "With 'For Computers' enemy Strong Melee ower boosted 8-25%"
      }
    }, {
      'part': 'arms',
      'a': 294,
      'ma': 893,
      'sa': 294,
      'md': 559,
      'sd': 559,
      'br': 432,
      'pr': 432,
      'wt': ["Mid-Range", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 40% or less Melee DMG output boosted 6-20"
      }
    }, {
      'part': "legs",
      'a': 294,
      'ma': 294,
      'sa': 294,
      'md': 893,
      'sd': 893,
      'br': 432,
      'pr': 432,
      'wt': ["Mid-Range", "Protag."],
      'ex': {
        'type': 'EX\x20Skill',
        'name': 'Beam\x20Dagger\x20Bites'
      }
    }, {
      'part': "backpack",
      'a': 294,
      'ma': 294,
      'sa': 294,
      'md': 893,
      'sd': 893,
      'br': 432,
      'pr': 432,
      'wt': ["Mid-Range", "Protag."],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "When Armor is 60% or more Shooting DMG output boosted 6-20"
      }
    }, {
      'part': "range",
      'a': 559,
      'ma': 0,
      'sa': 1146,
      'md': 0,
      'sd': 0,
      'br': 432,
      'pr': 432,
      'wt': ["Mid-Range", "Protag."],
      'ex': {
        'type': "Part Traits",
        'name': "With Power attribute (self) Initial EX Skill charge boosted 3-12%"
      },
      'name': "DODS Rifle",
      'type': 'Beam'
    }, {
      'part': 'shield',
      'a': 294,
      'ma': 0,
      'sa': 0,
      'md': 893,
      'sd': 893,
      'br': 594,
      'pr': 594,
      'wt': ["Mid-Range", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Power\x20attribute\x20(self)\x20Buff\x20EX\x20Skill\x20effect\x20up\x2015%'
      },
      'name': "Shield"
    }]
  }, {
    'name': 'Gundam\x20AGE\x20Titus',
    'attribute': "Power",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': 'head',
      'a': 559,
      'ma': 292,
      'sa': 891,
      'md': 891,
      'sd': 891,
      'br': 127,
      'pr': 127,
      'wt': ["High Firepower", "Gundam Type"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Protection b"
      }
    }, {
      'part': 'torso',
      'a': 1145,
      'ma': 292,
      'sa': 0,
      'md': 891,
      'sd': 891,
      'br': 214,
      'pr': 214,
      'wt': ["High Firepower", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': 'When\x20attacking\x20with\x20Physical\x20Strong\x20Melee\x20power\x20boosted\x208-25%'
      }
    }, {
      'part': 'arms',
      'a': 559,
      'ma': 891,
      'sa': 292,
      'md': 891,
      'sd': 891,
      'br': 127,
      'pr': 127,
      'wt': ["High Firepower", "Close Combat"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Beam Lariat"
      }
    }, {
      'part': "legs",
      'a': 559,
      'ma': 292,
      'sa': 292,
      'md': 1145,
      'sd': 1145,
      'br': 214,
      'pr': 214,
      'wt': ["High Firepower", "Close Combat"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Archer Hack b"
      }
    }, {
      'part': "backpack",
      'a': 559,
      'ma': 292,
      'sa': 292,
      'md': 1145,
      'sd': 1145,
      'br': 214,
      'pr': 214,
      'wt': ["High Firepower", "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': "When attacking with Physical Melee power boosted 8-25%"
      }
    }]
  }, {
    'name': 'Gundam\x20AGE-2\x20Normal',
    'attribute': "Technique",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 561,
      'ma': 294,
      'sa': 1440,
      'md': 294,
      'sd': 893,
      'br': 215,
      'pr': 215,
      'wt': ['Transformer', "For Computers"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': 'With\x20Technique\x20attribute\x20(self)\x20Shooting\x20DMG\x20taken\x20reduced\x20by\x206-20'
      }
    }, {
      'part': "torso",
      'a': 893,
      'ma': 561,
      'sa': 294,
      'md': 561,
      'sd': 1147,
      'br': 215,
      'pr': 215,
      'wt': ["Transformer", "For Computers"],
      'ex': {
        'type': "Part Traits",
        'name': "While Transformer EX Skill CD reduced 4-15%"
      }
    }, {
      'part': 'arms',
      'a': 561,
      'ma': 2000,
      'sa': 294,
      'md': 561,
      'sd': 893,
      'br': 0,
      'pr': 0,
      'wt': ["Transformer", "For Computers"],
      'ex': {
        'type': "Part Traits",
        'name': "Beam ranged weapon reload speed boosted 6-15%"
      }
    }, {
      'part': "legs",
      'a': 561,
      'ma': 294,
      'sa': 294,
      'md': 294,
      'sd': 893,
      'br': 352,
      'pr': 352,
      'wt': ['Transformer', "Protag."],
      'ex': {
        'type': "EX Skill",
        'name': "Stream Slash"
      }
    }, {
      'part': "backpack",
      'a': 561,
      'ma': 294,
      'sa': 294,
      'md': 294,
      'sd': 893,
      'br': 352,
      'pr': 352,
      'wt': ["Transformer", "Protag."],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 80% or less Close Shot Attack raised 5-14%"
      }
    }, {
      'part': "range",
      'a': 561,
      'ma': 0,
      'sa': 1440,
      'md': 0,
      'sd': 561,
      'br': 215,
      'pr': 215,
      'wt': ["Transformer", "Protag."],
      'ex': {
        'type': "Part Traits",
        'name': 'While\x20Transformer\x20Initial\x20EX\x20Skill\x20charge\x20boosted\x203-12%'
      },
      'name': "Hyper DODS Rifle",
      'type': "Beam"
    }, {
      'part': "shield",
      'a': 561,
      'ma': 0,
      'sa': 0,
      'md': 561,
      'sd': 1440,
      'br': 352,
      'pr': 352,
      'wt': ["Transformer", "Protag."],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "Middle-Shooter Job Sp. Shot CRIT rate boosted 7-21%"
      },
      'name': "Shield"
    }]
  }, {
    'name': 'Gundam\x20Artemis',
    'attribute': "Power",
    'rarity': 2,
    'sokai': 0,
    'mark': 4,
    'parts': [{
      'part': 'head',
      'a': 796,
      'ma': 383,
      'sa': 2378,
      'md': 796,
      'sd': 796,
      'br': 417,
      'pr': 0,
      'wt': ['Protag.', "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': "CIWS"
      }
    }, {
      'part': 'torso',
      'a': 1601,
      'ma': 383,
      'sa': 383,
      'md': 1180,
      'sd': 1180,
      'br': 610,
      'pr': 0,
      'wt': ['Protag.', "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': "Breast Beam Vulcan"
      }
    }, {
      'part': 'arms',
      'a': 1601,
      'ma': 2378,
      'sa': 383,
      'md': 2781,
      'sd': 2781,
      'br': 417,
      'pr': 417,
      'wt': ["Protag.", "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': 'Palma\x20Fiocina\x20Beam\x20Cannon'
      },
      'combo': "shield"
    }, {
      'part': "legs",
      'a': 796,
      'ma': 383,
      'sa': 383,
      'md': 1180,
      'sd': 1180,
      'br': 610,
      'pr': 417,
      'wt': ["Protag.", "For Computers"],
      'ex': {
        'type': "Part Traits",
        'name': "11% chance to not recoil"
      }
    }, {
      'part': "backpack",
      'a': 796,
      'ma': 383,
      'sa': 383,
      'md': 1180,
      'sd': 1180,
      'br': 610,
      'pr': 417,
      'wt': ["Protag.", "For Computers"],
      'ex': {
        'type': "Part Traits",
        'name': "Buff EX Skill effect up 12%"
      }
    }, {
      'part': "melee",
      'a': 796,
      'ma': 3175,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 610,
      'pr': 212,
      'wt': ['Protag.', "High Firepower"],
      'ex': {
        'type': "Part Traits",
        'name': "Melee DMG output boosted 15"
      },
      'name': "Arondight",
      'type': "Beam"
    }, {
      'part': "range",
      'a': 796,
      'ma': 0,
      'sa': 3175,
      'md': 0,
      'sd': 0,
      'br': 610,
      'pr': 212,
      'wt': ["Protag.", "High Firepower"],
      'ex': {
        'type': "Part Traits",
        'name': "Shooting DMG output boosted 15"
      },
      'name': "Beam Rifle",
      'type': "Beam"
    }]
  }, {
    'name': "Gundam Astaroth",
    'attribute': "Power",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 800,
      'ma': 385,
      'sa': 1985,
      'md': 385,
      'sd': 1185,
      'br': 292,
      'pr': 292,
      'wt': ["Protag.", "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': "Physical ranged weapon reload speed boosted 20%"
      }
    }, {
      'part': "torso",
      'a': 1185,
      'ma': 800,
      'sa': 385,
      'md': 800,
      'sd': 1610,
      'br': 292,
      'pr': 292,
      'wt': ["Protag.", "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Blade\x20category\x20equipped\x20EX\x20Skill\x20DMG\x20output\x20boosted\x2035'
      }
    }, {
      'part': "arms",
      'a': 1610,
      'ma': 2795,
      'sa': 385,
      'md': 1610,
      'sd': 3190,
      'br': 479,
      'pr': 479,
      'wt': ["Protag.", 'For\x20Computers'],
      'ex': {
        'type': "EX Skill",
        'name': "Sub-Knuckle"
      },
      'combo': "shield"
    }, {
      'part': 'legs',
      'a': 800,
      'ma': 385,
      'sa': 385,
      'md': 385,
      'sd': 1185,
      'br': 479,
      'pr': 479,
      'wt': ['Protag.', 'For\x20Computers'],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Knife Attack"
      }
    }, {
      'part': "backpack",
      'a': 800,
      'ma': 385,
      'sa': 385,
      'md': 385,
      'sd': 1185,
      'br': 479,
      'pr': 479,
      'wt': ["Protag.", "For Computers"],
      'ex': {
        'type': "EX Skill",
        'name': "Demolition Knife"
      }
    }, {
      'part': "melee",
      'a': 385,
      'ma': 3594,
      'sa': 0,
      'md': 0,
      'sd': 800,
      'br': 292,
      'pr': 292,
      'wt': ["Protag.", "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': "With Power attribute (self) Strong Melee CRIT rate boosted 30%"
      },
      'name': "Demolition Knife",
      'type': "Physical"
    }, {
      'part': "range",
      'a': 800,
      'ma': 0,
      'sa': 1985,
      'md': 0,
      'sd': 800,
      'br': 292,
      'pr': 292,
      'wt': ["Protag.", 'Close\x20Combat'],
      'ex': {
        'type': "Part Traits",
        'name': "With Blade category equipped Shooting DMG taken reduced by 35"
      },
      'name': "Rifle",
      'type': "Physical"
    }, {
      'part': "range",
      'a': 800,
      'ma': 0,
      'sa': 1985,
      'md': 0,
      'sd': 800,
      'br': 292,
      'pr': 292,
      'wt': ["For Computers", "High Firepower"],
      'ex': {
        'type': "Part Traits",
        'name': "When attacking with Physical Sp. Shot CRIT rate boosted 30%"
      },
      'name': "Anti-Material Rifle",
      'type': "Physical"
    }]
  }, {
    'name': "Gundam Barbatos [4th Form]",
    'attribute': 'Power',
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 799,
      'ma': 384,
      'sa': 1979,
      'md': 384,
      'sd': 1182,
      'br': 420,
      'pr': 213,
      'wt': ["Protag.", "For Forest"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': 'With\x20Power\x20attribute\x20(self)\x20Close\x20Shot\x20Attack\x20raised\x208-20%'
      }
    }, {
      'part': "torso",
      'a': 1182,
      'ma': 799,
      'sa': 384,
      'md': 799,
      'sd': 1606,
      'br': 612,
      'pr': 0,
      'wt': ["Protag.", "For Forest"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Fearless Hurl"
      }
    }, {
      'part': 'arms',
      'a': 799,
      'ma': 2786,
      'sa': 384,
      'md': 799,
      'sd': 1182,
      'br': 0,
      'pr': 0,
      'wt': ["Protag.", "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': "In-Fighter Job Melee power boosted 17-30%"
      }
    }, {
      'part': 'legs',
      'a': 799,
      'ma': 384,
      'sa': 384,
      'md': 384,
      'sd': 1182,
      'br': 612,
      'pr': 420,
      'wt': ["Protag.", "Close Combat"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Menace Shot"
      }
    }, {
      'part': "backpack",
      'a': 799,
      'ma': 384,
      'sa': 384,
      'md': 384,
      'sd': 1182,
      'br': 612,
      'pr': 420,
      'wt': ["Protag.", "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': "With Power attribute (self) Melee DMG output boosted by 8-35"
      }
    }, {
      'part': "melee",
      'a': 384,
      'ma': 3586,
      'sa': 0,
      'md': 0,
      'sd': 799,
      'br': 420,
      'pr': 213,
      'wt': ["Protag.", "For Forest"],
      'ex': {
        'type': "Part Traits",
        'name': "In-Fighter Job Melee CRIT rate boosted 10-30%"
      },
      'name': "Long Sword",
      'type': "Physical"
    }, {
      'part': 'melee',
      'a': 384,
      'ma': 3586,
      'sa': 0,
      'md': 0,
      'sd': 799,
      'br': 420,
      'pr': 213,
      'wt': ["Protag.", "For Forest"],
      'ex': {
        'type': "EX Skill",
        'name': "Iron Impact"
      },
      'name': "Mace",
      'type': 'Physical'
    }, {
      'part': "range",
      'a': 799,
      'ma': 0,
      'sa': 1979,
      'md': 0,
      'sd': 799,
      'br': 612,
      'pr': 213,
      'wt': ["Protag.", "For Forest"],
      'ex': {
        'type': "Part Traits",
        'name': "With Power attribute (self) Close Shot Attack raised 8-20%"
      },
      'name': "Smoothbore Cannon",
      'type': "Physical"
    }]
  }, {
    'name': "Gundam Barbatos [6th Form]",
    'attribute': "Speed",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 1182,
      'ma': 384,
      'sa': 799,
      'md': 1182,
      'sd': 384,
      'br': 290,
      'pr': 290,
      'wt': ["For Urban Area", "Ace Excl."],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Blade\x20category\x20equipped\x20EX\x20Skill\x20DMG\x20output\x20boosted\x208-35'
      }
    }, {
      'part': "torso",
      'a': 1606,
      'ma': 384,
      'sa': 384,
      'md': 1606,
      'sd': 799,
      'br': 290,
      'pr': 290,
      'wt': ["For Urban Area", "Ace Excl."],
      'ex': {
        'type': "Part Traits",
        'name': "Defender Job Shooting DMG taken reduced 8-35"
      }
    }, {
      'part': 'arms',
      'a': 384,
      'ma': 3181,
      'sa': 384,
      'md': 1606,
      'sd': 384,
      'br': 0,
      'pr': 0,
      'wt': ["For Urban Area", "Ace Excl."],
      'ex': {
        'type': "EX Skill",
        'name': "170mm Autocannon"
      }
    }, {
      'part': "legs",
      'a': 799,
      'ma': 384,
      'sa': 384,
      'md': 1606,
      'sd': 799,
      'br': 420,
      'pr': 290,
      'wt': ["For Urban Area", "Gundam Type"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "Defender Job EX Skill piercing boosted 10-28%"
      }
    }, {
      'part': "backpack",
      'a': 799,
      'ma': 384,
      'sa': 384,
      'md': 1606,
      'sd': 799,
      'br': 290,
      'pr': 420,
      'wt': ["For Urban Area", "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': 'Bloody\x20Wrench'
      }
    }, {
      'part': "melee",
      'a': 384,
      'ma': 4004,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 420,
      'pr': 420,
      'wt': ["For Urban Area", "Ace Excl."],
      'ex': {
        'type': "EX Skill",
        'name': "Mace Rush"
      },
      'name': "Wrench Mace",
      'type': "Physical"
    }]
  }, {
    'name': 'Gundam\x20Deathscythe',
    'attribute': 'Speed',
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 795,
      'ma': 382,
      'sa': 1179,
      'md': 1179,
      'sd': 1179,
      'br': 0,
      'pr': 416,
      'wt': ["High Mobility", "For Forest"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Head-Mounted Vulcan"
      }
    }, {
      'part': "torso",
      'a': 1601,
      'ma': 382,
      'sa': 0,
      'md': 1179,
      'sd': 1179,
      'br': 0,
      'pr': 609,
      'wt': ["High Mobility", "For Forest"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Machine Cannon"
      }
    }, {
      'part': "arms",
      'a': 795,
      'ma': 1179,
      'sa': 382,
      'md': 1179,
      'sd': 1179,
      'br': 211,
      'pr': 416,
      'wt': ['High\x20Mobility', "For Forest"],
      'ex': {
        'type': "Part Traits",
        'name': "With Axe category equipped Mid Shot Attack raised 8-20%"
      }
    }, {
      'part': "legs",
      'a': 795,
      'ma': 382,
      'sa': 382,
      'md': 1601,
      'sd': 1601,
      'br': 416,
      'pr': 211,
      'wt': ['High\x20Mobility', 'For\x20Base'],
      'ex': {
        'type': "Part Traits",
        'name': "With Axe category equipped EX Skill CD reduced 6-20%"
      }
    }, {
      'part': "backpack",
      'a': 795,
      'ma': 382,
      'sa': 382,
      'md': 1601,
      'sd': 1601,
      'br': 211,
      'pr': 416,
      'wt': ["High Mobility", "For Base"],
      'ex': {
        'type': "EX Skill",
        'name': "Hyper Jammer"
      }
    }, {
      'part': "melee",
      'a': 795,
      'ma': 1601,
      'sa': 0,
      'md': 795,
      'sd': 795,
      'br': 416,
      'pr': 609,
      'wt': ["High Mobility", "For Base"],
      'ex': {
        'type': "EX Skill",
        'name': "Deadly Circle"
      },
      'name': "Beam Scythe",
      'type': "Beam"
    }, {
      'part': "shield",
      'a': 0,
      'ma': 0,
      'sa': 0,
      'md': 1974,
      'sd': 1974,
      'br': 211,
      'pr': 805,
      'wt': ["High Mobility", 'For\x20Base'],
      'ex': {
        'type': "EX Skill",
        'name': "Buster Shield"
      },
      'name': "Buster Shield"
    }]
  }, {
    'name': "Gundam Deathscythe Hell",
    'attribute': "Speed",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 1180,
      'ma': 383,
      'sa': 796,
      'md': 1180,
      'sd': 796,
      'br': 417,
      'pr': 212,
      'wt': ['Gundam\x20Type', "Close Combat"],
      'ex': {
        'type': "EX Skill",
        'name': 'Head-Mounted\x20Vulcan'
      }
    }, {
      'part': "torso",
      'a': 1976,
      'ma': 796,
      'sa': 383,
      'md': 796,
      'sd': 796,
      'br': 610,
      'pr': 0,
      'wt': ["Gundam Type", "Close Combat"],
      'ex': {
        'type': "EX Skill",
        'name': 'Self-Destruct'
      }
    }, {
      'part': "arms",
      'a': 796,
      'ma': 2781,
      'sa': 0,
      'md': 1180,
      'sd': 1180,
      'br': 0,
      'pr': 0,
      'wt': ["Gundam Type", "High Mobility"],
      'ex': {
        'type': "EX Skill",
        'name': "Hyper Jammer"
      }
    }, {
      'part': "legs",
      'a': 1180,
      'ma': 383,
      'sa': 383,
      'md': 1180,
      'sd': 796,
      'br': 610,
      'pr': 417,
      'wt': ["Gundam Type", 'High\x20Mobility'],
      'ex': {
        'type': "Part Traits",
        'name': "With Axe category equipped Melee CRIT rate boosted 30%"
      }
    }, {
      'part': "backpack",
      'a': 1180,
      'ma': 383,
      'sa': 383,
      'md': 1180,
      'sd': 796,
      'br': 610,
      'pr': 417,
      'wt': ["Gundam Type", "High Mobility"],
      'ex': {
        'type': "Part Traits",
        'name': "In-Fighter Job EX Skill piercing boosted 28%"
      }
    }, {
      'part': "melee",
      'a': 1180,
      'ma': 3577,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 417,
      'pr': 212,
      'wt': ["Gundam Type", "Close Combat"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Deadly Circle"
      },
      'name': "Beam Scissors",
      'type': 'Beam'
    }]
  }, {
    'name': "Gundam Dynames",
    'attribute': "Technique",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': 'head',
      'a': 384,
      'ma': 384,
      'sa': 3181,
      'md': 384,
      'sd': 1182,
      'br': 0,
      'pr': 0,
      'wt': ["Long-Range", "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': 'Archer\x20Stance\x20y'
      }
    }, {
      'part': "torso",
      'a': 1606,
      'ma': 384,
      'sa': 384,
      'md': 799,
      'sd': 1606,
      'br': 290,
      'pr': 290,
      'wt': ["Long-Range", "For Desert"],
      'ex': {
        'type': "Part Traits",
        'name': 'Long-Shooter\x20Job\x20Shooting\x20Power\x20boosted\x2017-30%'
      }
    }, {
      'part': "arms",
      'a': 1182,
      'ma': 799,
      'sa': 384,
      'md': 384,
      'sd': 1606,
      'br': 290,
      'pr': 290,
      'wt': ["Long-Range", "High Firepower"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "Long-Shooter Job Shot guidance boosted 8-17%"
      }
    }, {
      'part': "legs",
      'a': 799,
      'ma': 384,
      'sa': 384,
      'md': 799,
      'sd': 1606,
      'br': 420,
      'pr': 420,
      'wt': ["Long-Range", "For Desert"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "GN Missile"
      }
    }, {
      'part': "backpack",
      'a': 799,
      'ma': 384,
      'sa': 384,
      'md': 799,
      'sd': 1606,
      'br': 420,
      'pr': 420,
      'wt': ["Long-Range", "Gundam Type"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Trans-Am"
      }
    }, {
      'part': 'range',
      'a': 384,
      'ma': 0,
      'sa': 4004,
      'md': 0,
      'sd': 0,
      'br': 290,
      'pr': 290,
      'wt': ["Long-Range", 'High\x20Firepower'],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "Beam ranged weapon reload speed boosted 8-20%"
      },
      'name': 'GN\x20Sniper\x20Rifle',
      'type': "Beam"
    }]
  }, {
    'name': "Gundam Exia",
    'attribute': "Speed",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 1181,
      'ma': 384,
      'sa': 796,
      'md': 1181,
      'sd': 384,
      'br': 213,
      'pr': 417,
      'wt': ["Gundam Type", "Close Combat"],
      'ex': {
        'type': "EX Skill",
        'name': 'Recovery\x20Tool\x20a'
      }
    }, {
      'part': 'torso',
      'a': 1602,
      'ma': 384,
      'sa': 384,
      'md': 1602,
      'sd': 796,
      'br': 0,
      'pr': 611,
      'wt': ["Gundam Type", "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': "In-Fighter Job EX Skill CD reduced 6-20%"
      }
    }, {
      'part': "arms",
      'a': 384,
      'ma': 3177,
      'sa': 384,
      'md': 1602,
      'sd': 384,
      'br': 0,
      'pr': 0,
      'wt': ["Gundam Type", "Close Combat"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Double Saber Shear"
      }
    }, {
      'part': 'legs',
      'a': 796,
      'ma': 384,
      'sa': 384,
      'md': 1602,
      'sd': 796,
      'br': 611,
      'pr': 417,
      'wt': ['Gundam\x20Type', "High Mobility"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Edge Fling"
      }
    }, {
      'part': 'backpack',
      'a': 796,
      'ma': 384,
      'sa': 384,
      'md': 1602,
      'sd': 796,
      'br': 417,
      'pr': 611,
      'wt': ["Gundam Type", "For Base"],
      'ex': {
        'type': "EX Skill",
        'name': 'Trans-Am\x20Raid'
      }
    }, {
      'part': "melee",
      'a': 1181,
      'ma': 2380,
      'sa': 0,
      'md': 0,
      'sd': 384,
      'br': 417,
      'pr': 213,
      'wt': ["Gundam Type", "Close Combat"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "With Speed attribute (self) Initial EX Skill Charge boosted 6-20%"
      },
      'name': 'GN\x20Sword',
      'type': "Physical"
    }, {
      'part': "range",
      'a': 1181,
      'ma': 0,
      'sa': 3177,
      'md': 0,
      'sd': 0,
      'br': 611,
      'pr': 213,
      'wt': ["Gundam Type", "Close Combat"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "When Armor is 40% or more Enemy Strong Melee Power Reduced 17-30%"
      },
      'name': "GN Sword Rifle Mode",
      'type': 'Beam'
    }, {
      'part': "shield",
      'a': 796,
      'ma': 0,
      'sa': 0,
      'md': 2380,
      'sd': 796,
      'br': 0,
      'pr': 1028,
      'wt': ['Gundam\x20Type', "Close Combat"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "When Armor is 40% or more EX Skill DMG output boosted by 8-35"
      },
      'name': "GN Shield"
    }]
  }, {
    'name': "Gundam F91",
    'attribute': "Technique",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 796,
      'ma': 383,
      'sa': 2378,
      'md': 796,
      'sd': 796,
      'br': 212,
      'pr': 212,
      'wt': ["Protag.", "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "MEPE Mode"
      }
    }, {
      'part': "torso",
      'a': 1602,
      'ma': 383,
      'sa': 383,
      'md': 1180,
      'sd': 1180,
      'br': 288,
      'pr': 288,
      'wt': ["Protag.", "Mid-Range"],
      'ex': {
        'type': "Part Traits",
        'name': "With Saber category equipped EX Skill DMG output boosted 35"
      }
    }, {
      'part': "arms",
      'a': 1602,
      'ma': 2378,
      'sa': 383,
      'md': 2781,
      'sd': 2781,
      'br': 417,
      'pr': 417,
      'wt': ['Protag.', "High Mobility"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Bazooka\x20category\x20equipped\x20Sp.\x20Shot\x20power\x20boosted\x2030%'
      },
      'combo': "shield"
    }, {
      'part': "legs",
      'a': 796,
      'ma': 383,
      'sa': 383,
      'md': 1180,
      'sd': 1180,
      'br': 475,
      'pr': 502,
      'wt': ["Protag.", "High Mobility"],
      'ex': {
        'type': "EX Skill",
        'name': "Spinning Saber"
      }
    }, {
      'part': 'backpack',
      'a': 796,
      'ma': 383,
      'sa': 383,
      'md': 1180,
      'sd': 1180,
      'br': 502,
      'pr': 475,
      'wt': ["Protag.", 'Gundam\x20Type'],
      'ex': {
        'type': "EX Skill",
        'name': 'V.S.B.R.'
      }
    }, {
      'part': 'melee',
      'a': 796,
      'ma': 3176,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 417,
      'pr': 417,
      'wt': ["Protag.", "High Mobility"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "With Rifle category equipped Melee DMG output boosted 35"
      },
      'name': "Beam Saber",
      'type': "Beam"
    }, {
      'part': 'range',
      'a': 796,
      'ma': 0,
      'sa': 3176,
      'md': 0,
      'sd': 0,
      'br': 417,
      'pr': 417,
      'wt': ['Protag.', "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': "With Saber category equipped EX Skill power boosted 30%"
      },
      'name': "Beam Launcher",
      'type': "Beam"
    }, {
      'part': "range",
      'a': 796,
      'ma': 0,
      'sa': 3176,
      'md': 0,
      'sd': 0,
      'br': 417,
      'pr': 417,
      'wt': ["Protag.", 'Gundam\x20Type'],
      'ex': {
        'type': "Part Traits",
        'name': "With Saber category equipped Initial EX Skill charge boosted 20%"
      },
      'name': "Beam Rifle",
      'type': "Beam"
    }]
  }, {
    'name': "Gundam Full Armor [Thunderbolt Ver.]",
    'attribute': "Speed",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 796,
      'ma': 383,
      'sa': 2378,
      'md': 796,
      'sd': 796,
      'br': 417,
      'pr': 0,
      'wt': ["Protag.", "Federation"],
      'ex': {
        'type': "EX Skill",
        'name': "Head-Mounted Vulcan"
      }
    }, {
      'part': "torso",
      'a': 1601,
      'ma': 383,
      'sa': 383,
      'md': 1180,
      'sd': 1180,
      'br': 610,
      'pr': 0,
      'wt': ["Protag.", 'Federation'],
      'ex': {
        'type': 'EX\x20Skill',
        'name': '7-Barrel\x20Missle\x20Launcher'
      }
    }, {
      'part': "arms",
      'a': 1601,
      'ma': 2378,
      'sa': 383,
      'md': 2781,
      'sd': 2781,
      'br': 417,
      'pr': 417,
      'wt': ["Protag.", "Federation"],
      'ex': {
        'type': "EX Skill",
        'name': "Twin Beam Rifle & Rocket Launcher"
      },
      'combo': 'shield'
    }, {
      'part': "legs",
      'a': 796,
      'ma': 383,
      'sa': 383,
      'md': 1180,
      'sd': 1180,
      'br': 610,
      'pr': 417,
      'wt': ['Protag.', "For Space"],
      'ex': {
        'type': "EX Skill",
        'name': "6-Barrel Missile Launcher"
      }
    }, {
      'part': "backpack",
      'a': 796,
      'ma': 383,
      'sa': 383,
      'md': 1180,
      'sd': 1180,
      'br': 610,
      'pr': 417,
      'wt': ["Protag.", 'For\x20Space'],
      'ex': {
        'type': "EX Skill",
        'name': "Free Improvisation"
      }
    }]
  }, {
    'name': "Gundam GP01 (Zephyranthes)",
    'attribute': "Technique",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': 'head',
      'a': 1605,
      'ma': 384,
      'sa': 1181,
      'md': 797,
      'sd': 797,
      'br': 418,
      'pr': 0,
      'wt': ["Protag.", "Federation"],
      'ex': {
        'type': "EX Skill",
        'name': 'Head-Mounted\x20Vulcan'
      }
    }, {
      'part': "torso",
      'a': 2382,
      'ma': 384,
      'sa': 384,
      'md': 797,
      'sd': 797,
      'br': 611,
      'pr': 0,
      'wt': ["Protag.", 'Federation'],
      'ex': {
        'type': 'EX\x20Skill',
        'name': 'Combat\x20Hack\x20b'
      }
    }, {
      'part': "arms",
      'a': 1181,
      'ma': 1181,
      'sa': 384,
      'md': 1181,
      'sd': 1181,
      'br': 213,
      'pr': 0,
      'wt': ["Protag.", "For Desert"],
      'ex': {
        'type': "Part Traits",
        'name': "Beam ranged weapon reload speed boosted 8-20%"
      }
    }, {
      'part': "legs",
      'a': 1181,
      'ma': 384,
      'sa': 384,
      'md': 1181,
      'sd': 1181,
      'br': 213,
      'pr': 611,
      'wt': ['Protag.', "For Desert"],
      'ex': {
        'type': "Part Traits",
        'name': "Defender Job EX Skill CD reduced 6-20%"
      }
    }, {
      'part': 'backpack',
      'a': 1181,
      'ma': 384,
      'sa': 384,
      'md': 1181,
      'sd': 1181,
      'br': 611,
      'pr': 213,
      'wt': ["Protag.", "For Desert"],
      'ex': {
        'type': "EX Skill",
        'name': "Battlecry"
      }
    }, {
      'part': "range",
      'a': 1181,
      'ma': 0,
      'sa': 1605,
      'md': 384,
      'sd': 384,
      'br': 611,
      'pr': 418,
      'wt': ["Protag.", "Federation"],
      'ex': {
        'type': "Part Traits",
        'name': "With Technique attribute (self) Enemy Shooting power reduced 17-30%"
      },
      'name': "Beam Rifle",
      'type': "Beam"
    }, {
      'part': "shield",
      'a': 1181,
      'ma': 0,
      'sa': 0,
      'md': 1181,
      'sd': 1181,
      'br': 1029,
      'pr': 0,
      'wt': ["Protag.", "Federation"],
      'ex': {
        'type': "EX Skill",
        'name': "Offense Up b"
      },
      'name': "Shield"
    }]
  }, {
    'name': "Gundam GP01Fb [Zephyranthes Fb]",
    'attribute': "Power",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 795,
      'ma': 382,
      'sa': 2377,
      'md': 795,
      'sd': 795,
      'br': 416,
      'pr': 0,
      'wt': ['Protag.', 'High\x20Mobility'],
      'ex': {
        'type': "EX Skill",
        'name': "Head-Mounted Vulcan"
      }
    }, {
      'part': "torso",
      'a': 1601,
      'ma': 382,
      'sa': 382,
      'md': 1179,
      'sd': 1179,
      'br': 609,
      'pr': 0,
      'wt': ["Protag.", "High Mobility"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': 'Combat\x20Stance\x20y'
      }
    }, {
      'part': 'arms',
      'a': 795,
      'ma': 2377,
      'sa': 382,
      'md': 1179,
      'sd': 1179,
      'br': 0,
      'pr': 0,
      'wt': ['Protag.', "High Mobility"],
      'ex': {
        'type': "Part Traits",
        'name': "With Power attribute (self) Enemy Melee power reduced 30%"
      }
    }, {
      'part': 'legs',
      'a': 795,
      'ma': 382,
      'sa': 382,
      'md': 1179,
      'sd': 1179,
      'br': 609,
      'pr': 416,
      'wt': ["Protag.", "Federation"],
      'ex': {
        'type': "Part Traits",
        'name': "With Power attribute (self) EX Skill CD reduced 8-20%"
      }
    }, {
      'part': "backpack",
      'a': 795,
      'ma': 382,
      'sa': 382,
      'md': 1179,
      'sd': 1179,
      'br': 609,
      'pr': 416,
      'wt': ["Protag.", "Federation"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Universal Boost Pod"
      }
    }]
  }, {
    'name': "Gundam GP02A [Physalis]",
    'attribute': "Power",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 1605,
      'ma': 384,
      'sa': 1181,
      'md': 797,
      'sd': 797,
      'br': 418,
      'pr': 0,
      'wt': ["Zeon", "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Head-Mounted Vulcan"
      }
    }, {
      'part': "torso",
      'a': 2382,
      'ma': 384,
      'sa': 384,
      'md': 797,
      'sd': 797,
      'br': 611,
      'pr': 0,
      'wt': ["Zeon", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': '2-11%\x20chance\x20to\x20survive\x20a\x20fatal\x20blow'
      }
    }, {
      'part': "arms",
      'a': 1181,
      'ma': 1181,
      'sa': 384,
      'md': 1181,
      'sd': 1181,
      'br': 213,
      'pr': 0,
      'wt': ["Zeon", "Gundam Type"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "Physical ranged weapon reload speed boosted 20%"
      }
    }, {
      'part': "legs",
      'a': 1181,
      'ma': 384,
      'sa': 384,
      'md': 1181,
      'sd': 1181,
      'br': 213,
      'pr': 611,
      'wt': ["Zeon", "For Base"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': 'Twist\x20Buster'
      }
    }, {
      'part': "backpack",
      'a': 1181,
      'ma': 384,
      'sa': 384,
      'md': 1181,
      'sd': 1181,
      'br': 611,
      'pr': 213,
      'wt': ['Zeon', "For Base"],
      'ex': {
        'type': "Part Traits",
        'name': "With Bazooka category equipped Debuff EX Skill effect up 4-22%"
      }
    }, {
      'part': 'range',
      'a': 384,
      'ma': 0,
      'sa': 3997,
      'md': 0,
      'sd': 0,
      'br': 213,
      'pr': 417,
      'wt': ["Zeon", "For Base"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Atomic Bazooka"
      },
      'name': 'Atomic\x20Bazooka',
      'type': 'Physical'
    }, {
      'part': "shield",
      'a': 1181,
      'ma': 0,
      'sa': 0,
      'md': 1181,
      'sd': 1181,
      'br': 1029,
      'pr': 0,
      'wt': ["Zeon", "For Base"],
      'ex': {
        'type': "Part Traits",
        'name': 'Physical\x20ranged\x20weapon\x20magazine\x20boosted\x209-20%'
      },
      'name': "Radiator Shield"
    }]
  }, {
    'name': "Gundam GP03 [Stamen]",
    'attribute': "Technique",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 1180,
      'ma': 383,
      'sa': 796,
      'md': 1180,
      'sd': 796,
      'br': 212,
      'pr': 417,
      'wt': ["Protag.", "Federation"],
      'ex': {
        'type': "Part Traits",
        'name': "With Technique attribute (self) EX Skill piercing boosted 10-28%"
      }
    }, {
      'part': "torso",
      'a': 1976,
      'ma': 796,
      'sa': 383,
      'md': 796,
      'sd': 796,
      'br': 0,
      'pr': 610,
      'wt': ["Protag.", "Federation"],
      'ex': {
        'type': "EX Skill",
        'name': "Mega-Beam Cannon [Dendrobium]"
      }
    }, {
      'part': "arms",
      'a': 796,
      'ma': 2781,
      'sa': 0,
      'md': 1180,
      'sd': 1180,
      'br': 0,
      'pr': 0,
      'wt': ["Protag.", "Federation"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Technique\x20attribute\x20(self)\x20Strong\x20Melee\x20CRIT\x20rate\x20boosted\x2010-30%'
      }
    }, {
      'part': "legs",
      'a': 1180,
      'ma': 383,
      'sa': 383,
      'md': 1180,
      'sd': 796,
      'br': 417,
      'pr': 610,
      'wt': ["Protag.", "Mid-Range"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Technique\x20attribute\x20(self)\x20Shooting\x20CRIT\x20rate\x20boosted\x2010-30%'
      }
    }, {
      'part': "backpack",
      'a': 1180,
      'ma': 383,
      'sa': 383,
      'md': 1180,
      'sd': 796,
      'br': 417,
      'pr': 610,
      'wt': ["Protag.", 'Mid-Range'],
      'ex': {
        'type': "EX Skill",
        'name': "Rapid Thrust"
      }
    }, {
      'part': "range",
      'a': 1181,
      'ma': 0,
      'sa': 2378,
      'md': 0,
      'sd': 0,
      'br': 212,
      'pr': 610,
      'wt': ["Protag.", 'Mid-Range'],
      'ex': {
        'type': "EX Skill",
        'name': "Dual Cascade"
      },
      'name': 'Folding\x20Bazooka',
      'type': "Physical"
    }, {
      'part': "shield",
      'a': 1181,
      'ma': 0,
      'sa': 0,
      'md': 1601,
      'sd': 796,
      'br': 212,
      'pr': 805,
      'wt': ["Protag.", "Federation"],
      'ex': {
        'type': "Part Traits",
        'name': "With Technique attribute (self) Shooting DMG taken reduced 8-35"
      },
      'name': "Folding Shield"
    }]
  }, {
    'name': "Gundam Gusion",
    'attribute': "Power",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 1144,
      'ma': 292,
      'sa': 891,
      'md': 558,
      'sd': 558,
      'br': 0,
      'pr': 302,
      'wt': ['Heavy\x20Armor', "For Space"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Head-Mounted Vulcan"
      }
    }, {
      'part': "torso",
      'a': 1702,
      'ma': 292,
      'sa': 292,
      'md': 558,
      'sd': 558,
      'br': 0,
      'pr': 430,
      'wt': ["Heavy Armor", "For Space"],
      'ex': {
        'type': "EX Skill",
        'name': "Buster Anchor"
      }
    }, {
      'part': "arms",
      'a': 891,
      'ma': 891,
      'sa': 292,
      'md': 891,
      'sd': 891,
      'br': 0,
      'pr': 127,
      'wt': ["Heavy Armor", "Mid-Range"],
      'ex': {
        'type': "EX Skill",
        'name': "Gemini Satellite"
      }
    }, {
      'part': "legs",
      'a': 891,
      'ma': 292,
      'sa': 292,
      'md': 891,
      'sd': 891,
      'br': 430,
      'pr': 127,
      'wt': ['Heavy\x20Armor', "High Firepower"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Hand Grenade"
      }
    }, {
      'part': "backpack",
      'a': 891,
      'ma': 292,
      'sa': 292,
      'md': 891,
      'sd': 891,
      'br': 127,
      'pr': 430,
      'wt': ["Heavy Armor", 'High\x20Firepower'],
      'ex': {
        'type': "EX Skill",
        'name': "Gusion Hammer"
      }
    }, {
      'part': "melee",
      'a': 891,
      'ma': 1144,
      'sa': 0,
      'md': 292,
      'sd': 292,
      'br': 302,
      'pr': 430,
      'wt': ["Heavy Armor", "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': "Spinning Rave"
      },
      'name': 'Gusion\x20Hammer',
      'type': "Physical"
    }, {
      'part': "range",
      'a': 891,
      'ma': 0,
      'sa': 1144,
      'md': 292,
      'sd': 292,
      'br': 302,
      'pr': 430,
      'wt': ["Heavy Armor", "Mid-Range"],
      'ex': {
        'type': "Part Traits",
        'name': "Defender Job Enemy Shooting power reduced 8-25%"
      },
      'name': 'Submachine\x20Gun',
      'type': "Physical"
    }]
  }, {
    'name': "Gundam Gusion Rebake",
    'attribute': 'Power',
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 795,
      'ma': 382,
      'sa': 1179,
      'md': 1179,
      'sd': 1179,
      'br': 416,
      'pr': 0,
      'wt': ["Heavy Armor", "For Desert"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "Physical ranged weapon magazine boosted 9-20%"
      }
    }, {
      'part': "torso",
      'a': 1601,
      'ma': 382,
      'sa': 0,
      'md': 1179,
      'sd': 1179,
      'br': 609,
      'pr': 0,
      'wt': ["Heavy Armor", "For Desert"],
      'ex': {
        'type': "Part Traits",
        'name': "With Axe category equipped Shooting DMG taken reduced 8-35"
      }
    }, {
      'part': "arms",
      'a': 795,
      'ma': 1179,
      'sa': 382,
      'md': 1179,
      'sd': 1179,
      'br': 416,
      'pr': 211,
      'wt': ["Heavy Armor", 'For\x20Desert'],
      'ex': {
        'type': "Part Traits",
        'name': "Defender Job Melee DMG taken reduced 8-35"
      }
    }, {
      'part': "legs",
      'a': 795,
      'ma': 382,
      'sa': 382,
      'md': 1601,
      'sd': 1601,
      'br': 211,
      'pr': 416,
      'wt': ["Heavy Armor", 'Close\x20Combat'],
      'ex': {
        'type': "EX Skill",
        'name': 'Halberd'
      }
    }, {
      'part': "backpack",
      'a': 795,
      'ma': 382,
      'sa': 382,
      'md': 1601,
      'sd': 1601,
      'br': 416,
      'pr': 211,
      'wt': ["Heavy Armor", "Close Combat"],
      'ex': {
        'type': "EX Skill",
        'name': "Four-Arm Combat"
      }
    }, {
      'part': "melee",
      'a': 795,
      'ma': 1601,
      'sa': 0,
      'md': 795,
      'sd': 795,
      'br': 609,
      'pr': 416,
      'wt': ["Heavy Armor.", "For Desert"],
      'ex': {
        'type': "Part Traits",
        'name': "Defender Job Job Gauge increase boosted 6-17%"
      },
      'name': "Halberd",
      'type': "Physical"
    }, {
      'part': "range",
      'a': 795,
      'ma': 0,
      'sa': 1601,
      'md': 795,
      'sd': 795,
      'br': 609,
      'pr': 416,
      'wt': ['Heavy\x20Armor', "For Desert."],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 40% or more Shooting DMG taken reduced 8-35"
      },
      'name': "120mm Long-Range Rifle",
      'type': "Physical"
    }, {
      'part': "shield",
      'a': 0,
      'ma': 0,
      'sa': 0,
      'md': 1974,
      'sd': 1974,
      'br': 805,
      'pr': 211,
      'wt': ["Heavy Armor", "Close Combat"],
      'ex': {
        'type': "EX Skill",
        'name': "Halberd Throw"
      },
      'name': "Shield"
    }]
  }, {
    'name': "Gundam Heavyarms",
    'attribute': "Technique",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 891,
      'ma': 292,
      'sa': 1702,
      'md': 292,
      'sd': 292,
      'br': 213,
      'pr': 213,
      'wt': ["High Firepower", "For Tundra"],
      'ex': {
        'type': "Part Traits",
        'name': "Beam ranged weapon magazine boosted 9-20%"
      }
    }, {
      'part': 'torso',
      'a': 1435,
      'ma': 292,
      'sa': 558,
      'md': 558,
      'sd': 558,
      'br': 213,
      'pr': 213,
      'wt': ["High Firepower", "For Tundra"],
      'ex': {
        'type': "EX Skill",
        'name': "Chest-Mounted Gatling & Machine Cannons"
      }
    }, {
      'part': "arms",
      'a': 891,
      'ma': 558,
      'sa': 558,
      'md': 891,
      'sd': 891,
      'br': 0,
      'pr': 0,
      'wt': ['High\x20Firepower', "For Tundra"],
      'ex': {
        'type': "EX Skill",
        'name': "Aerial Spin"
      }
    }, {
      'part': "legs",
      'a': 891,
      'ma': 292,
      'sa': 292,
      'md': 558,
      'sd': 891,
      'br': 351,
      'pr': 351,
      'wt': ["High Firepower", "For Base"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Technique\x20attribute\x20(self)\x20Long\x20Shot\x20Attack\x20raised\x205-14%'
      }
    }, {
      'part': "backpack",
      'a': 891,
      'ma': 292,
      'sa': 292,
      'md': 558,
      'sd': 891,
      'br': 351,
      'pr': 351,
      'wt': ["High Firepower", 'For\x20Base'],
      'ex': {
        'type': 'EX\x20Skill',
        'name': 'Beam\x20Gatling\x20Gun'
      }
    }, {
      'part': 'range',
      'a': 1702,
      'ma': 0,
      'sa': 2302,
      'md': 558,
      'sd': 1144,
      'br': 624,
      'pr': 624,
      'wt': ["High Firepower", "For Tundra"],
      'ex': {
        'type': "Part Traits",
        'name': "Beam ranged weapon magazine boosted 9-20%"
      },
      'name': "Beam Gatling Gun",
      'type': "Beam",
      'combo': "shield"
    }]
  }, {
    'name': "Gundam Kyrios",
    'attribute': "Technique",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 561,
      'ma': 294,
      'sa': 1440,
      'md': 294,
      'sd': 893,
      'br': 215,
      'pr': 215,
      'wt': ["Transformer", "High Mobility"],
      'ex': {
        'type': "Part Traits",
        'name': "With Machine Gun category equipped Enemy shooting power reduced 8-25%"
      }
    }, {
      'part': "torso",
      'a': 893,
      'ma': 561,
      'sa': 294,
      'md': 561,
      'sd': 1147,
      'br': 215,
      'pr': 215,
      'wt': ['Transformer', 'High\x20Mobility'],
      'ex': {
        'type': "Part Traits",
        'name': 'When\x20Armor\x20is\x2080%\x20or\x20less\x205-14%\x20chance\x20to\x20survive\x20a\x20fatal\x20blow'
      }
    }, {
      'part': "arms",
      'a': 561,
      'ma': 2000,
      'sa': 294,
      'md': 561,
      'sd': 893,
      'br': 0,
      'pr': 0,
      'wt': ['Transformer', "High Mobility"],
      'ex': {
        'type': "Part Traits",
        'name': "With Technique attribute (self) EX Skill DMG output boosted by 6-20"
      }
    }, {
      'part': "legs",
      'a': 561,
      'ma': 294,
      'sa': 294,
      'md': 294,
      'sd': 893,
      'br': 352,
      'pr': 352,
      'wt': ["Transformer", 'For\x20Tundra'],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Saber Boomerang"
      }
    }, {
      'part': "backpack",
      'a': 561,
      'ma': 294,
      'sa': 294,
      'md': 294,
      'sd': 893,
      'br': 352,
      'pr': 352,
      'wt': ["Transformer", "For Tundra"],
      'ex': {
        'type': "EX Skill",
        'name': "Trans-Am"
      }
    }, {
      'part': 'range',
      'a': 561,
      'ma': 0,
      'sa': 1440,
      'md': 0,
      'sd': 561,
      'br': 215,
      'pr': 215,
      'wt': ["Transformer", "High Mobility"],
      'ex': {
        'type': "Part Traits",
        'name': "Beam ranged weapon reload speed boosted 6-15%"
      },
      'name': 'GN\x20Beam\x20Submachine\x20Gun',
      'type': "Beam"
    }, {
      'part': "shield",
      'a': 561,
      'ma': 0,
      'sa': 0,
      'md': 561,
      'sd': 1440,
      'br': 352,
      'pr': 352,
      'wt': ["Transformer", "For Tundra"],
      'ex': {
        'type': "EX Skill",
        'name': "Claw Mode"
      },
      'name': "GN Shield"
    }]
  }, {
    'name': 'Gundam\x20Legilis',
    'attribute': "Technique",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 1181,
      'ma': 384,
      'sa': 2380,
      'md': 384,
      'sd': 384,
      'br': 213,
      'pr': 417,
      'wt': ["For Space", "Mid-Range"],
      'ex': {
        'type': "Part Traits",
        'name': "With Rifle category equipped Projectile Speed boosted 6-15%"
      }
    }, {
      'part': "torso",
      'a': 1977,
      'ma': 384,
      'sa': 796,
      'md': 796,
      'sd': 796,
      'br': 0,
      'pr': 611,
      'wt': ["For Space", "Mid-Range"],
      'ex': {
        'type': "EX Skill",
        'name': "Buster Beam"
      }
    }, {
      'part': "arms",
      'a': 1181,
      'ma': 796,
      'sa': 796,
      'md': 1181,
      'sd': 1181,
      'br': 0,
      'pr': 0,
      'wt': ["For Space", "Mid-Range"],
      'ex': {
        'type': "EX Skill",
        'name': "Beam Vulcan"
      }
    }, {
      'part': "legs",
      'a': 1181,
      'ma': 384,
      'sa': 384,
      'md': 796,
      'sd': 1181,
      'br': 417,
      'pr': 611,
      'wt': ['For\x20Space', "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': "With Saber category equipped EX Skill CD reduced 6-20%"
      }
    }, {
      'part': 'backpack',
      'a': 1181,
      'ma': 384,
      'sa': 384,
      'md': 796,
      'sd': 1181,
      'br': 417,
      'pr': 611,
      'wt': ["For Space", "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Legilis Cannon"
      }
    }, {
      'part': "range",
      'a': 1181,
      'ma': 0,
      'sa': 3177,
      'md': 0,
      'sd': 0,
      'br': 213,
      'pr': 611,
      'wt': ["For Space", "Mid-Range"],
      'ex': {
        'type': "Part Traits",
        'name': "With Technique attribute (self) Initial EX Skill charge boosted 6-20%"
      },
      'name': "Legilis Rifle",
      'type': "Beam"
    }, {
      'part': "shield",
      'a': 1181,
      'ma': 0,
      'sa': 0,
      'md': 796,
      'sd': 1602,
      'br': 213,
      'pr': 806,
      'wt': ["For Space", "Mid-Range"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Legilis Bits"
      },
      'name': "Shield"
    }]
  }, {
    'name': "Gundam Nadleeh",
    'attribute': "Speed",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 558,
      'ma': 291,
      'sa': 1698,
      'md': 558,
      'sd': 558,
      'br': 0,
      'pr': 302,
      'wt': ["For Space", 'For\x20Computers'],
      'ex': {
        'type': "Part Traits",
        'name': "Middle-Shooter Job Shooting CRIT rate boosted 8-17%"
      }
    }, {
      'part': "torso",
      'a': 1140,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 0,
      'pr': 428,
      'wt': ["For Space", "For Computers"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Trial System"
      }
    }, {
      'part': "arms",
      'a': 558,
      'ma': 1698,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 0,
      'pr': 0,
      'wt': ["For Space", 'For\x20Computers'],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Speed\x20attribute\x20(self)\x20Melee\x20power\x20boosted\x208-25%'
      }
    }, {
      'part': 'legs',
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 302,
      'pr': 428,
      'wt': ["For Space", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 40% or more Shot spread reduced 6-15%"
      }
    }, {
      'part': 'backpack',
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 302,
      'pr': 428,
      'wt': ["For Space", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Speed\x20attribute\x20(self)\x20Shooting\x20power\x20boosted\x208-25%'
      }
    }, {
      'part': "melee",
      'a': 558,
      'ma': 2297,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 126,
      'pr': 428,
      'wt': ["For Space", "For Computers"],
      'ex': {
        'type': "Part Traits",
        'name': "With Speed attribute (self) Enemy Melee power reduced 8-25%"
      },
      'name': "GN Beam Saber",
      'type': "Beam"
    }, {
      'part': "range",
      'a': 558,
      'ma': 0,
      'sa': 2297,
      'md': 0,
      'sd': 0,
      'br': 126,
      'pr': 428,
      'wt': ["For Space", "For Computers"],
      'ex': {
        'type': "Part Traits",
        'name': "Middle-Shooter Job Shooting DMG output boosted 6-20"
      },
      'name': "GN Beam Rifle",
      'type': "Beam"
    }, {
      'part': "shield",
      'a': 558,
      'ma': 0,
      'sa': 0,
      'md': 1140,
      'sd': 1140,
      'br': 126,
      'pr': 588,
      'wt': ["For Space", "For Computers"],
      'ex': {
        'type': "Part Traits",
        'name': "Middle-Shooter Job Debuff EX Skill time up 4-16%"
      },
      'name': "GN Shield"
    }]
  }, {
    'name': "Gundam NT-1",
    'attribute': "Power",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 1180,
      'ma': 383,
      'sa': 796,
      'md': 1180,
      'sd': 796,
      'br': 417,
      'pr': 212,
      'wt': ["Close Combat", 'Federation'],
      'ex': {
        'type': "EX Skill",
        'name': "Head-Mounted Vulcan"
      }
    }, {
      'part': "torso",
      'a': 1979,
      'ma': 796,
      'sa': 383,
      'md': 796,
      'sd': 796,
      'br': 610,
      'pr': 0,
      'wt': ['Close\x20Combat', 'Federation'],
      'ex': {
        'type': "EX Skill",
        'name': 'Defense\x20Up\x20b'
      }
    }, {
      'part': 'arms',
      'a': 796,
      'ma': 2781,
      'sa': 0,
      'md': 1180,
      'sd': 1180,
      'br': 0,
      'pr': 0,
      'wt': ['Close\x20Combat', "For Urban Area"],
      'ex': {
        'type': "EX Skill",
        'name': "90mm Gatling Cannon"
      }
    }, {
      'part': "legs",
      'a': 1180,
      'ma': 383,
      'sa': 383,
      'md': 1180,
      'sd': 796,
      'br': 610,
      'pr': 417,
      'wt': ["Close Combat", 'For\x20Urban\x20Area'],
      'ex': {
        'type': "Part Traits",
        'name': 'When\x20Armor\x20is\x2040%\x20or\x20more\x20Melee\x20DMG\x20taken\x20reduced\x20by\x2035'
      }
    }, {
      'part': "backpack",
      'a': 1180,
      'ma': 383,
      'sa': 383,
      'md': 1180,
      'sd': 796,
      'br': 610,
      'pr': 417,
      'wt': ["Close Combat", "For Urban Area"],
      'ex': {
        'type': "EX Skill",
        'name': "Rapid Thrust"
      }
    }, {
      'part': "range",
      'a': 1180,
      'ma': 0,
      'sa': 2378,
      'md': 0,
      'sd': 0,
      'br': 610,
      'pr': 212,
      'wt': ["Close Combat", 'Federation'],
      'ex': {
        'type': 'EX\x20Skill',
        'name': 'Seventh\x20Tr-Shot'
      },
      'name': "Beam Rifle",
      'type': 'Beam'
    }, {
      'part': "shield",
      'a': 1180,
      'ma': 0,
      'sa': 0,
      'md': 1601,
      'sd': 796,
      'br': 805,
      'pr': 212,
      'wt': ["Close Combat", 'Federation'],
      'ex': {
        'type': "EX Skill",
        'name': "Defense Up a"
      },
      'name': "Shield"
    }]
  }, {
    'name': 'Gundam\x20NT-1\x20[Chobham\x20Armor]',
    'attribute': "Technique",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': 'head',
      'a': 891,
      'ma': 292,
      'sa': 891,
      'md': 891,
      'sd': 558,
      'br': 127,
      'pr': 302,
      'wt': ["Heavy Armor", "For Base"],
      'ex': {
        'type': "EX Skill",
        'name': "Head-Mounted Vulcan"
      }
    }, {
      'part': 'torso',
      'a': 1435,
      'ma': 292,
      'sa': 292,
      'md': 558,
      'sd': 558,
      'br': 0,
      'pr': 430,
      'wt': ["Heavy Armor", 'Federation'],
      'ex': {
        'type': "EX Skill",
        'name': "Recovery Tool b"
      }
    }, {
      'part': "arms",
      'a': 558,
      'ma': 891,
      'sa': 292,
      'md': 891,
      'sd': 891,
      'br': 0,
      'pr': 127,
      'wt': ['Heavy\x20Armor', 'Federation'],
      'ex': {
        'type': "Part Traits",
        'name': "Middle-Shooter Job Enemy Sp. Shot power reduced 8-25%"
      }
    }, {
      'part': "legs",
      'a': 891,
      'ma': 292,
      'sa': 292,
      'md': 1144,
      'sd': 292,
      'br': 127,
      'pr': 430,
      'wt': ['Heavy\x20Armor', "For Base"],
      'ex': {
        'type': "Part Traits",
        'name': "With Technique attribute (self) Enemy Melee power reduced 8-25%"
      }
    }, {
      'part': "backpack",
      'a': 891,
      'ma': 292,
      'sa': 292,
      'md': 891,
      'sd': 558,
      'br': 127,
      'pr': 430,
      'wt': ["Heavy Armor", "For Base"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 60% or more 4-13% chance to not recoil"
      }
    }]
  }, {
    'name': 'Gundam\x20Rose',
    'attribute': "Power",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 559,
      'ma': 292,
      'sa': 1436,
      'md': 292,
      'sd': 891,
      'br': 303,
      'pr': 127,
      'wt': ['Mobile\x20Fighter', "For Urban Area"],
      'ex': {
        'type': "Part Traits",
        'name': "With Power attribute (self) Long Shot Attack raised 5-14%"
      }
    }, {
      'part': "torso",
      'a': 891,
      'ma': 559,
      'sa': 292,
      'md': 559,
      'sd': 1144,
      'br': 430,
      'pr': 0,
      'wt': ["Mobile Fighter", "For Urban Area"],
      'ex': {
        'type': "EX Skill",
        'name': "Hyper Mode"
      }
    }, {
      'part': "arms",
      'a': 1144,
      'ma': 1994,
      'sa': 292,
      'md': 1144,
      'sd': 2304,
      'br': 592,
      'pr': 127,
      'wt': ["Mobile Fighter", 'For\x20Urban\x20Area'],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Rose Bits"
      },
      'combo': "shield"
    }, {
      'part': 'legs',
      'a': 559,
      'ma': 292,
      'sa': 292,
      'md': 292,
      'sd': 891,
      'br': 430,
      'pr': 303,
      'wt': ["Mobile Fighter", "Long-Range"],
      'ex': {
        'type': "EX Skill",
        'name': 'Chevalier\x20Saber'
      }
    }, {
      'part': "backpack",
      'a': 559,
      'ma': 292,
      'sa': 292,
      'md': 292,
      'sd': 891,
      'br': 430,
      'pr': 303,
      'wt': ["Mobile Fighter", "Long-Range"],
      'ex': {
        'type': "Part Traits",
        'name': "With Saber category equipped Buff EX Skill time up 1-15%"
      }
    }, {
      'part': 'melee',
      'a': 292,
      'ma': 2594,
      'sa': 0,
      'md': 0,
      'sd': 559,
      'br': 303,
      'pr': 127,
      'wt': ['Mobile\x20Fighter', 'Long-Range'],
      'ex': {
        'type': "Part Traits",
        'name': "Job Gauge increase boosted 4-13%"
      },
      'name': "Chevalier Saber",
      'type': "Physical"
    }]
  }, {
    'name': 'Gundam\x20Throne\x20Drei',
    'attribute': 'Speed',
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 889,
      'ma': 291,
      'sa': 1701,
      'md': 291,
      'sd': 291,
      'br': 302,
      'pr': 126,
      'wt': ["Support Type", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Speed\x20attribute\x20(self)\x20Mid\x20Shot\x20Attack\x20raised\x2014%'
      }
    }, {
      'part': "torso",
      'a': 1433,
      'ma': 291,
      'sa': 558,
      'md': 558,
      'sd': 558,
      'br': 428,
      'pr': 0,
      'wt': ['Support\x20Type', "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': "While Support Type EX Skill DMG taken reduced by 25"
      }
    }, {
      'part': 'arms',
      'a': 1701,
      'ma': 558,
      'sa': 558,
      'md': 1433,
      'sd': 1992,
      'br': 590,
      'pr': 126,
      'wt': ['Support\x20Type', "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "GN Shield Pod"
      },
      'combo': 'shield'
    }, {
      'part': "legs",
      'a': 889,
      'ma': 291,
      'sa': 291,
      'md': 558,
      'sd': 889,
      'br': 428,
      'pr': 302,
      'wt': ['Support\x20Type', "For Urban Area"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': 'Support\x20Job\x20EX\x20Skill\x20CD\x20reduced\x2015%'
      }
    }, {
      'part': "backpack",
      'a': 889,
      'ma': 291,
      'sa': 291,
      'md': 558,
      'sd': 889,
      'br': 428,
      'pr': 302,
      'wt': ["Support Type", "For Urban Area"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "GN Stealth Field"
      }
    }, {
      'part': "melee",
      'a': 889,
      'ma': 1701,
      'sa': 0,
      'md': 0,
      'sd': 291,
      'br': 302,
      'pr': 126,
      'wt': ["Support Type", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': "Support Job Melee DMG ouput boosted by 20"
      },
      'name': "GN Beam Saber",
      'type': "Beam"
    }]
  }, {
    'name': "Gundam Tryon 3",
    'attribute': "Power",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 797,
      'ma': 384,
      'sa': 2785,
      'md': 384,
      'sd': 384,
      'br': 213,
      'pr': 418,
      'wt': ["Transformer", "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': "High Mega Cannon"
      }
    }, {
      'part': 'torso',
      'a': 1605,
      'ma': 797,
      'sa': 797,
      'md': 797,
      'sd': 797,
      'br': 0,
      'pr': 611,
      'wt': ["Transformer", "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': "Hyper Minovsky Chohouken Tryzan"
      }
    }, {
      'part': "arms",
      'a': 797,
      'ma': 2785,
      'sa': 1181,
      'md': 384,
      'sd': 384,
      'br': 0,
      'pr': 0,
      'wt': ['Transformer', "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': "Armed Boosted"
      }
    }, {
      'part': "legs",
      'a': 797,
      'ma': 797,
      'sa': 384,
      'md': 797,
      'sd': 797,
      'br': 611,
      'pr': 418,
      'wt': ['Transformer', "Heavy Armor"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': 'Raptor\x20Breaker'
      }
    }, {
      'part': 'backpack',
      'a': 797,
      'ma': 797,
      'sa': 384,
      'md': 797,
      'sd': 797,
      'br': 418,
      'pr': 611,
      'wt': ["Transformer", "Heavy Armor"],
      'ex': {
        'type': "EX Skill",
        'name': "Double Cannonade"
      }
    }, {
      'part': "melee",
      'a': 384,
      'ma': 3582,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 418,
      'pr': 611,
      'wt': ["Transformer", "Heavy Armor"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "While Transformer Initial EX Skill charge boosted 20%"
      },
      'name': "Hyper Minovsky Chohouken",
      'type': "Beam"
    }, {
      'part': "melee",
      'a': 384,
      'ma': 3582,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 418,
      'pr': 611,
      'wt': ['Transformer', "High Firepower"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Power\x20attribute\x20(self)\x20Strong\x20Melee\x20CRIT\x20rate\x20boosted\x2030%'
      },
      'name': "Hyper Beam Saber",
      'type': "Beam"
    }]
  }, {
    'name': "Gundam TR-1 [Advanced Hazel w/ Optical Sensor Unit]",
    'attribute': 'Technique',
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 1144,
      'ma': 292,
      'sa': 891,
      'md': 558,
      'sd': 558,
      'br': 302,
      'pr': 0,
      'wt': ["Long-Range", 'High\x20Mobility'],
      'ex': {
        'type': "Part Traits",
        'name': "With Technique attribute (self), Shot Spread reduced 6-15%"
      }
    }, {
      'part': "torso",
      'a': 1702,
      'ma': 292,
      'sa': 292,
      'md': 558,
      'sd': 558,
      'br': 430,
      'pr': 0,
      'wt': ['Long-Range', "High Mobility"],
      'ex': {
        'type': "EX Skill",
        'name': "Shoulder Grenade Launcher"
      }
    }, {
      'part': "arms",
      'a': 891,
      'ma': 891,
      'sa': 292,
      'md': 891,
      'sd': 891,
      'br': 127,
      'pr': 0,
      'wt': ["Long-Range", "High Mobility"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Technique\x20attribute\x20(self),\x20Melee\x20CRIT\x20rate\x20boosted\x208-17%'
      }
    }, {
      'part': "legs",
      'a': 891,
      'ma': 292,
      'sa': 292,
      'md': 891,
      'sd': 891,
      'br': 127,
      'pr': 430,
      'wt': ["Long-Range", "Federation"],
      'ex': {
        'type': "Part Traits",
        'name': 'Sub-Arm\x20Unit'
      }
    }, {
      'part': "backpack",
      'a': 891,
      'ma': 292,
      'sa': 292,
      'md': 891,
      'sd': 891,
      'br': 430,
      'pr': 127,
      'wt': ["Long-Range", "Federation"],
      'ex': {
        'type': "EX Skill",
        'name': "Shield Booster"
      }
    }, {
      'part': "range",
      'a': 891,
      'ma': 0,
      'sa': 1144,
      'md': 292,
      'sd': 292,
      'br': 430,
      'pr': 302,
      'wt': ['Long-Range', "High Mobility"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "Middle-Shooter Job, Sp. Shot DMG output boosted 6-20"
      },
      'name': "Beam Rifle",
      'type': "Beam"
    }, {
      'part': "shield",
      'a': 891,
      'ma': 0,
      'sa': 0,
      'md': 891,
      'sd': 891,
      'br': 718,
      'pr': 0,
      'wt': ["Long-Range", "High Mobility"],
      'ex': {
        'type': "EX Skill",
        'name': "Scattering Beam Cannon"
      },
      'name': "Enhanced Shield Booster"
    }, {
      'part': 'shield',
      'a': 891,
      'ma': 0,
      'sa': 0,
      'md': 891,
      'sd': 891,
      'br': 718,
      'pr': 0,
      'wt': ['Long-Range', "Federation"],
      'ex': {
        'type': "Part Traits",
        'name': "With Technique attribute (self) Buff EX Skill effect up 15%"
      },
      'name': "Shield Booster"
    }]
  }, {
    'name': "Gundam Virsago",
    'attribute': "Power",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 1181,
      'ma': 384,
      'sa': 2380,
      'md': 384,
      'sd': 384,
      'br': 213,
      'pr': 417,
      'wt': ["Federation", "High Firepower"],
      'ex': {
        'type': "Part Traits",
        'name': 'When\x20Armor\x20is\x2040%\x20or\x20less\x20Shooting\x20CRIT\x20rate\x20boosted\x2010-30%'
      }
    }, {
      'part': "torso",
      'a': 1977,
      'ma': 384,
      'sa': 796,
      'md': 796,
      'sd': 796,
      'br': 0,
      'pr': 611,
      'wt': ["Federation", "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': "Mega Sonic Cannon"
      }
    }, {
      'part': "arms",
      'a': 1181,
      'ma': 796,
      'sa': 796,
      'md': 1181,
      'sd': 1181,
      'br': 0,
      'pr': 0,
      'wt': ["Federation", 'High\x20Firepower'],
      'ex': {
        'type': "EX Skill",
        'name': 'Strike\x20Claw'
      }
    }, {
      'part': 'legs',
      'a': 1181,
      'ma': 384,
      'sa': 384,
      'md': 796,
      'sd': 1181,
      'br': 417,
      'pr': 611,
      'wt': ["Federation", "Transformer"],
      'ex': {
        'type': "EX Skill",
        'name': "Twist Buster"
      }
    }, {
      'part': "backpack",
      'a': 1181,
      'ma': 384,
      'sa': 384,
      'md': 796,
      'sd': 1181,
      'br': 417,
      'pr': 611,
      'wt': ["Federation", "Transformer"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "2-20% chance to prevent vernier consumption when stepping"
      }
    }, {
      'part': "melee",
      'a': 1181,
      'ma': 2380,
      'sa': 0,
      'md': 0,
      'sd': 384,
      'br': 213,
      'pr': 417,
      'wt': ['Federation', "Transformer"],
      'ex': {
        'type': "Part Traits",
        'name': "Middle-Shooter Job Melee DMG Output boosted 8-35"
      },
      'name': "Beam Saber",
      'type': "Beam"
    }, {
      'part': "range",
      'a': 1181,
      'ma': 0,
      'sa': 3177,
      'md': 0,
      'sd': 0,
      'br': 213,
      'pr': 611,
      'wt': ["Federation", "Transformer"],
      'ex': {
        'type': "Part Traits",
        'name': "Middle-Shooter Job Initial EX Skill charge boosted 6-20%"
      },
      'name': "Strike Shooter",
      'type': "Beam"
    }]
  }, {
    'name': 'Gundam\x20X',
    'attribute': "Speed",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 384,
      'ma': 384,
      'sa': 3181,
      'md': 384,
      'sd': 1182,
      'br': 0,
      'pr': 0,
      'wt': ["Protag.", "High Firepower"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Defence Up y"
      }
    }, {
      'part': "torso",
      'a': 1606,
      'ma': 384,
      'sa': 384,
      'md': 799,
      'sd': 1606,
      'br': 290,
      'pr': 290,
      'wt': ["Protag.", 'High\x20Firepower'],
      'ex': {
        'type': "Part Traits",
        'name': "With Speed attribute (self) Shooting power boosted 17-30%"
      }
    }, {
      'part': "arms",
      'a': 1182,
      'ma': 799,
      'sa': 384,
      'md': 384,
      'sd': 1606,
      'br': 290,
      'pr': 290,
      'wt': ["Protag.", "For Forest"],
      'ex': {
        'type': "Part Traits",
        'name': "6-15% chance of attacks penetrating super armor"
      }
    }, {
      'part': 'legs',
      'a': 799,
      'ma': 384,
      'sa': 384,
      'md': 799,
      'sd': 1606,
      'br': 420,
      'pr': 420,
      'wt': ["Protag.", 'For\x20Forest'],
      'ex': {
        'type': "Part Traits",
        'name': "8-20% chance to not recoil"
      }
    }, {
      'part': "backpack",
      'a': 799,
      'ma': 384,
      'sa': 384,
      'md': 799,
      'sd': 1606,
      'br': 420,
      'pr': 420,
      'wt': ["Protag.", "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': "Satellite Cannon"
      }
    }, {
      'part': "melee",
      'a': 1182,
      'ma': 2384,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 477,
      'pr': 477,
      'wt': ["Protag.", "High Firepower"],
      'ex': {
        'type': "Part Traits",
        'name': "With Speed attribute (self) Melee DMG taken reduced by 8-35"
      },
      'name': "Large Beam Sword",
      'type': 'Beam'
    }, {
      'part': "range",
      'a': 384,
      'ma': 0,
      'sa': 4004,
      'md': 0,
      'sd': 0,
      'br': 290,
      'pr': 290,
      'wt': ['Protag.', "High Firepower"],
      'ex': {
        'type': "Part Traits",
        'name': "With Speed attribute (self) Initial EX Skill charge boosted 6-20%"
      },
      'name': 'Shield\x20Buster\x20Rifle',
      'type': "Beam"
    }]
  }, {
    'name': "Gundam X Divider",
    'attribute': "Power",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 1181,
      'ma': 384,
      'sa': 1181,
      'md': 1181,
      'sd': 797,
      'br': 418,
      'pr': 213,
      'wt': ["Mid-Range", "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Offense Up y"
      }
    }, {
      'part': 'torso',
      'a': 1978,
      'ma': 384,
      'sa': 384,
      'md': 797,
      'sd': 797,
      'br': 611,
      'pr': 0,
      'wt': ["Mid-Range", "Gundam Type"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "With Blade category equipped Strong Melee Power boosted 17-30%"
      }
    }, {
      'part': "arms",
      'a': 797,
      'ma': 1181,
      'sa': 384,
      'md': 1181,
      'sd': 1181,
      'br': 213,
      'pr': 0,
      'wt': ["Mid-Range", "High Firepower"],
      'ex': {
        'type': "Part Traits",
        'name': 'Out-Fighter\x20Job\x20Enemy\x20Shooting\x20Power\x20reduced\x2017-30%'
      }
    }, {
      'part': 'legs',
      'a': 1181,
      'ma': 384,
      'sa': 384,
      'md': 1605,
      'sd': 384,
      'br': 611,
      'pr': 213,
      'wt': ["Mid-Range", 'For\x20Desert'],
      'ex': {
        'type': "Part Traits",
        'name': "Out-Fighter Job EX Skill CD reduced 6-20%"
      }
    }, {
      'part': "backpack",
      'a': 1181,
      'ma': 384,
      'sa': 384,
      'md': 1181,
      'sd': 797,
      'br': 611,
      'pr': 213,
      'wt': ["Mid-Range", "For Desert"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Twist Buster"
      }
    }, {
      'part': "range",
      'a': 1181,
      'ma': 0,
      'sa': 2382,
      'md': 797,
      'sd': 0,
      'br': 611,
      'pr': 213,
      'wt': ["Mid-Range", "For Desert"],
      'ex': {
        'type': "Part Traits",
        'name': 'Out-Fighter\x20Job\x20Initial\x20EX\x20Skill\x20Charge\x20boosted\x206-20%'
      },
      'name': "Beam Machine Gun",
      'type': "Beam"
    }, {
      'part': "shield",
      'a': 1181,
      'ma': 0,
      'sa': 0,
      'md': 1978,
      'sd': 797,
      'br': 809,
      'pr': 213,
      'wt': ["Mid-Range", 'High\x20Firepower'],
      'ex': {
        'type': "EX Skill",
        'name': "Harmonica Cannon"
      },
      'name': "Divider"
    }]
  }, {
    'name': "Hi-nu Gundam HWS [Ver. Ka]",
    'attribute': "Technique",
    'rarity': 4,
    'sokai': 1,
    'parts': [{
      'part': "head",
      'a': 965,
      'ma': 0,
      'sa': 3309,
      'md': 551,
      'sd': 551,
      'br': 464,
      'pr': 464,
      'wt': ["Ace Excl.", "Heavy Armor"],
      'ex': {
        'type': "EX Skill",
        'name': "Head-Mounted Vulcan"
      }
    }, {
      'part': "torso",
      'a': 1732,
      'ma': 551,
      'sa': 551,
      'md': 965,
      'sd': 1732,
      'br': 672,
      'pr': 75,
      'wt': ["Ace Excl.", "Heavy Armor"],
      'ex': {
        'type': "EX Skill",
        'name': "Chest Missile Launcher"
      }
    }, {
      'part': "arms",
      'a': 965,
      'ma': 1355,
      'sa': 551,
      'md': 551,
      'sd': 1732,
      'br': 75,
      'pr': 75,
      'wt': ["Ace Excl.", "Heavy Armor"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "When Armor is 40% or more Sp. Shot power boosted 30%"
      }
    }, {
      'part': "legs",
      'a': 965,
      'ma': 551,
      'sa': 551,
      'md': 965,
      'sd': 1732,
      'br': 672,
      'pr': 464,
      'wt': ["Ace Excl.", "High Firepower"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Hidden Arms"
      }
    }, {
      'part': "backpack",
      'a': 965,
      'ma': 551,
      'sa': 551,
      'md': 965,
      'sd': 1732,
      'br': 672,
      'pr': 464,
      'wt': ["Ace Excl.", "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': 'Fin\x20Funnels'
      }
    }, {
      'part': "range",
      'a': 551,
      'ma': 153,
      'sa': 4105,
      'md': 153,
      'sd': 0,
      'br': 672,
      'pr': 282,
      'wt': ["Ace Excl.", "High Firepower"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "With Technique attribute (self) EX Skill power boosted 30%"
      },
      'name': "Hyper Mega Rifle",
      'type': "Beam"
    }, {
      'part': "shield",
      'a': 965,
      'ma': 153,
      'sa': 0,
      'md': 965,
      'sd': 2521,
      'br': 872,
      'pr': 282,
      'wt': ["Ace Excl.", "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': "High-Caliber Mega Particle Cannon"
      },
      'name': "Hi-Mega Shield"
    }]
  }, {
    'name': "High Mobility Gelgoog [Johnny Ridden]",
    'attribute': "Technique",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 889,
      'ma': 291,
      'sa': 558,
      'md': 889,
      'sd': 291,
      'br': 302,
      'pr': 126,
      'wt': ["Ace Excl.", "High Mobility"],
      'ex': {
        'type': "Part Traits",
        'name': "With Bazooka category equipped EX Skill power boosted 8-25%"
      }
    }, {
      'part': "torso",
      'a': 1142,
      'ma': 291,
      'sa': 291,
      'md': 1142,
      'sd': 558,
      'br': 428,
      'pr': 0,
      'wt': ["Ace Excl.", "High Mobility"],
      'ex': {
        'type': "Part Traits",
        'name': "In-Fighter Job Shooting DMG taken reduced by 6-20"
      }
    }, {
      'part': "arms",
      'a': 291,
      'ma': 2300,
      'sa': 291,
      'md': 1142,
      'sd': 291,
      'br': 0,
      'pr': 0,
      'wt': ["Ace Excl.", "High Mobility"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Technique\x20attribute\x20(self)\x20Melee\x20power\x20boosted\x208-25%'
      }
    }, {
      'part': "legs",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 1142,
      'sd': 558,
      'br': 302,
      'pr': 428,
      'wt': ['Ace\x20Excl.', "Zeon"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Twin Blade Slash"
      }
    }, {
      'part': "backpack",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 1142,
      'sd': 558,
      'br': 428,
      'pr': 302,
      'wt': ["Ace Excl.", "Zeon"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 80% or less Vernier recovery rate boosted 4-16%"
      }
    }, {
      'part': 'range',
      'a': 889,
      'ma': 0,
      'sa': 1701,
      'md': 0,
      'sd': 0,
      'br': 428,
      'pr': 302,
      'wt': ["Ace Excl.", "High Mobility"],
      'ex': {
        'type': "Part Traits",
        'name': 'In-Fighter\x20Job\x20Job\x20Gauge\x20increase\x20boosted\x204-13%'
      },
      'name': "Rocket Launcher",
      'type': "Physical"
    }, {
      'part': "shield",
      'a': 558,
      'ma': 0,
      'sa': 0,
      'md': 1701,
      'sd': 558,
      'br': 716,
      'pr': 0,
      'wt': ["Ace Excl.", "Zeon"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 50% or more Enemy Shooting power reduced 8-25%"
      },
      'name': "Shield"
    }]
  }, {
    'name': "Hyaku Shiki",
    'attribute': "Speed",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 559,
      'ma': 294,
      'sa': 1999,
      'md': 559,
      'sd': 294,
      'br': 0,
      'pr': 129,
      'wt': ["Commander", "High Mobility"],
      'ex': {
        'type': "EX Skill",
        'name': "Head-Mounted Vulcan"
      }
    }, {
      'part': "torso",
      'a': 893,
      'ma': 294,
      'sa': 294,
      'md': 1146,
      'sd': 559,
      'br': 0,
      'pr': 432,
      'wt': ["Commander", "High Mobility"],
      'ex': {
        'type': "Part Traits",
        'name': "With Ace Excl. enemy Melee DMG taken reduced by 6-20"
      }
    }, {
      'part': 'arms',
      'a': 559,
      'ma': 1438,
      'sa': 294,
      'md': 893,
      'sd': 559,
      'br': 0,
      'pr': 0,
      'wt': ["Commander", "Ace Excl."],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Beam Saber Combo"
      }
    }, {
      'part': "legs",
      'a': 559,
      'ma': 294,
      'sa': 559,
      'md': 893,
      'sd': 294,
      'br': 303,
      'pr': 432,
      'wt': ["Commander", "Ace Excl."],
      'ex': {
        'type': "Part Traits",
        'name': "With Bazooka category equipped, Shot Spread reduced 15%"
      }
    }, {
      'part': 'backpack',
      'a': 559,
      'ma': 294,
      'sa': 559,
      'md': 1146,
      'sd': 294,
      'br': 303,
      'pr': 432,
      'wt': ["Commander", "For Space"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Ace\x20Excl.\x20enemy\x20Shooting\x20power\x20boosted\x208-25%'
      }
    }, {
      'part': "melee",
      'a': 559,
      'ma': 1438,
      'sa': 0,
      'md': 559,
      'sd': 0,
      'br': 129,
      'pr': 432,
      'wt': ["Commander", "For Space"],
      'ex': {
        'type': "EX Skill",
        'name': "Royal Heart"
      },
      'name': "Beam Saber",
      'type': "Beam"
    }, {
      'part': 'range',
      'a': 294,
      'ma': 0,
      'sa': 2598,
      'md': 559,
      'sd': 0,
      'br': 129,
      'pr': 303,
      'wt': ["Commander", "Mid-Range"],
      'ex': {
        'type': "EX Skill",
        'name': "Dual Wave"
      },
      'name': "Clay Bazooka",
      'type': "Physical"
    }, {
      'part': "range",
      'a': 294,
      'ma': 0,
      'sa': 2598,
      'md': 559,
      'sd': 0,
      'br': 129,
      'pr': 303,
      'wt': ["Commander", "Mid-Range"],
      'ex': {
        'type': "Part Traits",
        'name': "When attacking with Beam EX Skill power boosted 8-25%"
      },
      'name': 'Beam\x20Rifle',
      'type': "Beam"
    }]
  }, {
    'name': "Jagd Doga [Quess Custom]",
    'attribute': "Technique",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 559,
      'ma': 294,
      'sa': 2000,
      'md': 559,
      'sd': 294,
      'br': 53,
      'pr': 53,
      'wt': ['For\x20Space', 'Zeon'],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 60% or more Mid Shot Attack raised 5-14%"
      }
    }, {
      'part': "torso",
      'a': 893,
      'ma': 294,
      'sa': 294,
      'md': 1147,
      'sd': 559,
      'br': 215,
      'pr': 215,
      'wt': ["For Space", 'Zeon'],
      'ex': {
        'type': "Part Traits",
        'name': "With Technique attribute (self) Strong Melee power boosted 8-20%"
      }
    }, {
      'part': "arms",
      'a': 559,
      'ma': 1440,
      'sa': 294,
      'md': 893,
      'sd': 559,
      'br': 0,
      'pr': 0,
      'wt': ["For Space", "Zeon"],
      'ex': {
        'type': "EX Skill",
        'name': "Funnels"
      }
    }, {
      'part': "legs",
      'a': 559,
      'ma': 294,
      'sa': 559,
      'md': 893,
      'sd': 294,
      'br': 352,
      'pr': 352,
      'wt': ["For Space", 'Long-Range'],
      'ex': {
        'type': "EX Skill",
        'name': "Beam Saber Combo"
      }
    }, {
      'part': "backpack",
      'a': 559,
      'ma': 294,
      'sa': 559,
      'md': 1147,
      'sd': 294,
      'br': 352,
      'pr': 352,
      'wt': ["For Space", "Long-Range"],
      'ex': {
        'type': "Part Traits",
        'name': "With Gatling Gun category equipped Mid Shot Attack raised 14%"
      }
    }, {
      'part': 'melee',
      'a': 559,
      'ma': 1440,
      'sa': 0,
      'md': 559,
      'sd': 0,
      'br': 303,
      'pr': 303,
      'wt': ['For\x20Space', "Zeon"],
      'ex': {
        'type': "Part Traits",
        'name': "When attacking with Beam Melee DMG output boosted 6-20"
      },
      'name': 'Beam\x20Saber\x20with\x20Heat\x20Knife',
      'type': "Beam"
    }, {
      'part': 'range',
      'a': 294,
      'ma': 0,
      'sa': 2600,
      'md': 559,
      'sd': 0,
      'br': 215,
      'pr': 215,
      'wt': ["For Space", "Zeon"],
      'ex': {
        'type': "EX Skill",
        'name': "Dual Beam Shredder"
      },
      'name': "Mega Gatling Gun",
      'type': "Beam"
    }, {
      'part': "shield",
      'a': 559,
      'ma': 0,
      'sa': 0,
      'md': 1440,
      'sd': 559,
      'br': 352,
      'pr': 352,
      'wt': ["For Space", 'Zeon'],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Quadruple-Barrel Mega Particle Cannon"
      },
      'name': 'Shield'
    }]
  }, {
    'name': "Justice Gundam",
    'attribute': "Speed",
    'rarity': 4,
    'sokai': 1,
    'parts': [{
      'part': "head",
      'a': 1356,
      'ma': 553,
      'sa': 966,
      'md': 1356,
      'sd': 553,
      'br': 465,
      'pr': 284,
      'wt': ['Ace\x20Excl.', "High Mobility"],
      'ex': {
        'type': "EX Skill",
        'name': "Sagittus"
      }
    }, {
      'part': "torso",
      'a': 1734,
      'ma': 553,
      'sa': 553,
      'md': 1734,
      'sd': 966,
      'br': 673,
      'pr': 0,
      'wt': ["Ace Excl.", "High Mobility"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 40% or more Strong Melee power boosted 30%"
      }
    }, {
      'part': "arms",
      'a': 553,
      'ma': 3312,
      'sa': 553,
      'md': 1734,
      'sd': 553,
      'br': 0,
      'pr': 0,
      'wt': ["Ace Excl.", "High Mobility"],
      'ex': {
        'type': "EX Skill",
        'name': "Bassel Beam Boomerang"
      }
    }, {
      'part': 'legs',
      'a': 966,
      'ma': 553,
      'sa': 553,
      'md': 1734,
      'sd': 966,
      'br': 465,
      'pr': 673,
      'wt': ["Ace Excl.", "Close Combat"],
      'ex': {
        'type': "EX Skill",
        'name': 'Double\x20Saber\x20Shear'
      }
    }, {
      'part': "backpack",
      'a': 966,
      'ma': 553,
      'sa': 553,
      'md': 1734,
      'sd': 966,
      'br': 673,
      'pr': 465,
      'wt': ["Ace Excl.", "Close Combat"],
      'ex': {
        'type': "EX Skill",
        'name': "Fatum-00"
      }
    }, {
      'part': "shield",
      'a': 966,
      'ma': 0,
      'sa': 0,
      'md': 2523,
      'sd': 966,
      'br': 1082,
      'pr': 0,
      'wt': ["Ace Excl.", "High Mobility"],
      'ex': {
        'type': "Part Traits",
        'name': "Shield Bash"
      },
      'name': 'Laminated\x20Anti-Beam\x20Shield'
    }]
  }, {
    'name': "Kabakali",
    'attribute': "Technique",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': 'head',
      'a': 558,
      'ma': 291,
      'sa': 1698,
      'md': 558,
      'sd': 558,
      'br': 302,
      'pr': 0,
      'wt': ['Mid-Range', "For Computers"],
      'ex': {
        'type': "Part Traits",
        'name': "With Technique Attribute (self) Enemy Shooting power reduced 8-25%"
      }
    }, {
      'part': "torso",
      'a': 1140,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 428,
      'pr': 0,
      'wt': ["Mid-Range", "For Computers"],
      'ex': {
        'type': "EX Skill",
        'name': "Photon Laser Cannon"
      }
    }, {
      'part': "arms",
      'a': 558,
      'ma': 1698,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 0,
      'pr': 0,
      'wt': ["Mid-Range", "For Computers"],
      'ex': {
        'type': "EX Skill",
        'name': 'Beam\x20Saber'
      }
    }, {
      'part': "legs",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 428,
      'pr': 302,
      'wt': ["Mid-Range", 'High\x20Mobility'],
      'ex': {
        'type': "Part Traits",
        'name': "With Whip category equipped Mid Shot Attack raised 5-14%"
      }
    }, {
      'part': "backpack",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 428,
      'pr': 302,
      'wt': ['Mid-Range', "High Mobility"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Beam Ring"
      }
    }, {
      'part': "melee",
      'a': 558,
      'ma': 2297,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 428,
      'pr': 126,
      'wt': ["Mid-Range", "For Computers"],
      'ex': {
        'type': "Part Traits",
        'name': "Out-Fighter Job Strong Melee CRIT rate boosted 8-17%"
      },
      'name': "Beam Ring",
      'type': "Beam"
    }, {
      'part': "range",
      'a': 558,
      'ma': 0,
      'sa': 2297,
      'md': 0,
      'sd': 0,
      'br': 428,
      'pr': 126,
      'wt': ["Mid-Range", "High Mobility"],
      'ex': {
        'type': "Part Traits",
        'name': "Beam Shotgun"
      },
      'name': "Beam Shotgun",
      'type': 'Beam'
    }]
  }, {
    'name': "Kampfer",
    'attribute': "Technique",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 291,
      'ma': 291,
      'sa': 2300,
      'md': 291,
      'sd': 889,
      'br': 0,
      'pr': 0,
      'wt': ["High Firepower", 'Mid-Range'],
      'ex': {
        'type': "EX Skill",
        'name': "Head-Mounted Vulcan"
      }
    }, {
      'part': 'torso',
      'a': 1142,
      'ma': 291,
      'sa': 291,
      'md': 558,
      'sd': 1142,
      'br': 428,
      'pr': 0,
      'wt': ["High Firepower", 'Mid-Range'],
      'ex': {
        'type': "Part Traits",
        'name': "With Technique attribute (self) Buff EX Skill time up 1-15%"
      }
    }, {
      'part': "arms",
      'a': 889,
      'ma': 558,
      'sa': 291,
      'md': 291,
      'sd': 1142,
      'br': 302,
      'pr': 126,
      'wt': ["High Firepower", "Zeon"],
      'ex': {
        'type': "Part Traits",
        'name': "When attacking with Physical Strong Melee CRIT rate boosted 8-17%"
      }
    }, {
      'part': "legs",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 558,
      'sd': 1142,
      'br': 302,
      'pr': 428,
      'wt': ['High\x20Firepower', "For Computers"],
      'ex': {
        'type': "EX Skill",
        'name': 'Leg-Mounted\x20Sturm\x20Faust'
      }
    }, {
      'part': "backpack",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 558,
      'sd': 1142,
      'br': 428,
      'pr': 302,
      'wt': ["High Firepower", "For Computers"],
      'ex': {
        'type': "EX Skill",
        'name': "Giant Bazooka"
      }
    }]
  }, {
    'name': "Kshatriya",
    'attribute': "Power",
    'rarity': 4,
    'sokai': 1,
    'parts': [{
      'part': "head",
      'a': 0,
      'ma': 551,
      'sa': 3307,
      'md': 551,
      'sd': 965,
      'br': 670,
      'pr': 0,
      'wt': ["Zeon", "For Space"],
      'ex': {
        'type': "Part Traits",
        'name': "When attacking with Beam, Long Shot Attack raised 20%"
      }
    }, {
      'part': "torso",
      'a': 1732,
      'ma': 965,
      'sa': 965,
      'md': 0,
      'sd': 1732,
      'br': 670,
      'pr': 0,
      'wt': ["Zeon", "For Space"],
      'ex': {
        'type': "EX Skill",
        'name': "Chest Mega Particle Cannon & I-Field"
      }
    }, {
      'part': "arms",
      'a': 2302,
      'ma': 965,
      'sa': 965,
      'md': 1506,
      'sd': 4255,
      'br': 1543,
      'pr': 282,
      'wt': ['Zeon', "For Space"],
      'ex': {
        'type': "EX Skill",
        'name': "Funnels"
      },
      'combo': "shield"
    }, {
      'part': "legs",
      'a': 965,
      'ma': 551,
      'sa': 965,
      'md': 965,
      'sd': 1353,
      'br': 670,
      'pr': 282,
      'wt': ["Zeon", "Ace Excl."],
      'ex': {
        'type': "Part Traits",
        'name': 'Long-Shooter\x20Job\x20Enemy\x20Melee\x20power\x20reduced\x2030%'
      }
    }]
  }, {
    'name': "Launcher Strike Gundam",
    'attribute': 'Power',
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': 'head',
      'a': 291,
      'ma': 291,
      'sa': 2300,
      'md': 291,
      'sd': 889,
      'br': 0,
      'pr': 0,
      'wt': ['Long-Range', "High Firepower"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': 'Beam\x20Hack\x20b'
      }
    }, {
      'part': 'torso',
      'a': 1142,
      'ma': 291,
      'sa': 291,
      'md': 558,
      'sd': 1142,
      'br': 0,
      'pr': 428,
      'wt': ["Long-Range", "High Firepower"],
      'ex': {
        'type': "Part Traits",
        'name': "Against a large enemy Debuff EX Skill Effect up 1-15%"
      }
    }, {
      'part': "arms",
      'a': 889,
      'ma': 558,
      'sa': 291,
      'md': 291,
      'sd': 1142,
      'br': 126,
      'pr': 302,
      'wt': ["Long-Range", 'High\x20Firepower'],
      'ex': {
        'type': "EX Skill",
        'name': "Combo Weapon Pod"
      }
    }, {
      'part': "legs",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 558,
      'sd': 1142,
      'br': 428,
      'pr': 302,
      'wt': ["Long-Range", "For Desert"],
      'ex': {
        'type': "Part Traits",
        'name': "Against a large enemy, EX Skill CD reduced 4-15%"
      }
    }, {
      'part': "backpack",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 558,
      'sd': 1142,
      'br': 302,
      'pr': 428,
      'wt': ['Long-Range', 'For\x20Desert'],
      'ex': {
        'type': "EX Skill",
        'name': "Agni"
      }
    }]
  }, {
    'name': "Marsfour Gundam",
    'attribute': "Power",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': 'head',
      'a': 1181,
      'ma': 384,
      'sa': 796,
      'md': 1181,
      'sd': 384,
      'br': 417,
      'pr': 213,
      'wt': ["Close Combat", "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Head-Mounted Vulcan"
      }
    }, {
      'part': "torso",
      'a': 1602,
      'ma': 384,
      'sa': 384,
      'md': 1602,
      'sd': 796,
      'br': 661,
      'pr': 0,
      'wt': ["Close Combat", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': "With Power attribute (self) EX Skill CD reduced 6-20%"
      }
    }, {
      'part': "arms",
      'a': 384,
      'ma': 3177,
      'sa': 384,
      'md': 1602,
      'sd': 384,
      'br': 0,
      'pr': 0,
      'wt': ["Close Combat", 'Gundam\x20Type'],
      'ex': {
        'type': "Part Traits",
        'name': "With Power attribute (self) Enemy Melee power reduced 17-30%"
      }
    }, {
      'part': "legs",
      'a': 796,
      'ma': 384,
      'sa': 384,
      'md': 1602,
      'sd': 796,
      'br': 417,
      'pr': 611,
      'wt': ["Close Combat", "For Computers"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 40% or more EX Skill Piercing boosted 10-28%"
      }
    }, {
      'part': "backpack",
      'a': 796,
      'ma': 384,
      'sa': 384,
      'md': 1602,
      'sd': 796,
      'br': 611,
      'pr': 417,
      'wt': ["Close Combat", 'For\x20Computers'],
      'ex': {
        'type': "EX Skill",
        'name': "HEAT REV SWORD"
      }
    }, {
      'part': 'melee',
      'a': 384,
      'ma': 3997,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 417,
      'pr': 213,
      'wt': ["Close Combat", "For Computers"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Quick Smash"
      },
      'name': 'Slash\x20Blade',
      'type': "Physical"
    }, {
      'part': "melee",
      'a': 384,
      'ma': 3997,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 417,
      'pr': 213,
      'wt': ["Close Combat", "For Computers"],
      'ex': {
        'type': "Part Traits",
        'name': "With Power attribute (self) Initial EX Skill charge boosted 6-20%"
      },
      'name': "Heat Rev Sword",
      'type': "Beam"
    }]
  }, {
    'name': 'Master\x20Gundam',
    'attribute': "Power",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 1181,
      'ma': 384,
      'sa': 796,
      'md': 1181,
      'sd': 384,
      'br': 213,
      'pr': 417,
      'wt': ["Mobile Fighter", "High Firepower"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Choukyuu Haou Den'eidan"
      }
    }, {
      'part': "torso",
      'a': 1602,
      'ma': 384,
      'sa': 384,
      'md': 1602,
      'sd': 796,
      'br': 0,
      'pr': 611,
      'wt': ['Mobile\x20Fighter', "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': 'Hyper\x20Mode'
      }
    }, {
      'part': "arms",
      'a': 384,
      'ma': 3177,
      'sa': 384,
      'md': 1602,
      'sd': 384,
      'br': 0,
      'pr': 0,
      'wt': ["Mobile Fighter", "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': "Sekiha Tenkyouken"
      }
    }, {
      'part': "legs",
      'a': 796,
      'ma': 384,
      'sa': 384,
      'md': 1602,
      'sd': 796,
      'br': 611,
      'pr': 417,
      'wt': ["Mobile Fighter", "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Power\x20attribute\x20(self)\x20EX\x20Skill\x20piercing\x20boosted\x2028%'
      }
    }, {
      'part': "backpack",
      'a': 796,
      'ma': 384,
      'sa': 384,
      'md': 1602,
      'sd': 796,
      'br': 417,
      'pr': 611,
      'wt': ["Mobile Fighter", 'Close\x20Combat'],
      'ex': {
        'type': "EX Skill",
        'name': "Juuni Ouhoupai Daishahei"
      }
    }, {
      'part': "melee",
      'a': 384,
      'ma': 3997,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 213,
      'pr': 417,
      'wt': ["Mobile Fighter", "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': 'In-Fighter\x20Job\x20Strong\x20Melee\x20CRIT\x20rate\x20boosted\x2030%'
      },
      'name': 'Master\x20Cloth',
      'type': "Beam"
    }]
  }, {
    'name': "Mobile SUMO [Gold Type]",
    'attribute': "Speed",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 558,
      'ma': 292,
      'sa': 1993,
      'md': 292,
      'sd': 292,
      'br': 302,
      'pr': 127,
      'wt': ["Ace Excl.", "Heavy Armor"],
      'ex': {
        'type': "EX Skill",
        'name': "Combat Stance a"
      }
    }, {
      'part': "torso",
      'a': 1114,
      'ma': 558,
      'sa': 558,
      'md': 558,
      'sd': 558,
      'br': 460,
      'pr': 0,
      'wt': ['Ace\x20Excl.', "Heavy Armor"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 40% or less 1-10% chance to survive a fatal blow"
      }
    }, {
      'part': 'arms',
      'a': 558,
      'ma': 1993,
      'sa': 891,
      'md': 292,
      'sd': 292,
      'br': 0,
      'pr': 0,
      'wt': ['Ace\x20Excl.', "Heavy Armor"],
      'ex': {
        'type': "EX Skill",
        'name': 'IF\x20bunker'
      }
    }, {
      'part': "legs",
      'a': 558,
      'ma': 558,
      'sa': 292,
      'md': 558,
      'sd': 558,
      'br': 302,
      'pr': 430,
      'wt': ["Ace Excl.", "Mid-Range"],
      'ex': {
        'type': "EX Skill",
        'name': "Flight Unit"
      }
    }, {
      'part': "backpack",
      'a': 558,
      'ma': 558,
      'sa': 292,
      'md': 558,
      'sd': 558,
      'br': 430,
      'pr': 302,
      'wt': ["Ace Excl.", "For Urban Area"],
      'ex': {
        'type': "Part Traits",
        'name': 'When\x20Armor\x20is\x2060%\x20or\x20more\x20EX\x20Skill\x20piercing\x20boosted\x2022%'
      }
    }, {
      'part': "melee",
      'a': 292,
      'ma': 2593,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 430,
      'pr': 302,
      'wt': ["Ace Excl.", "For Urban Area"],
      'ex': {
        'type': "EX Skill",
        'name': "Storm Edge"
      },
      'name': 'Heat\x20Fan',
      'type': "Physical"
    }, {
      'part': 'range',
      'a': 292,
      'ma': 0,
      'sa': 2593,
      'md': 0,
      'sd': 0,
      'br': 302,
      'pr': 127,
      'wt': ["Ace Excl.", "Mid-Range"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 60% or more Shooting DMG output boosted by 6-20"
      },
      'name': "Hand Beam Gun",
      'type': 'Beam'
    }]
  }, {
    'name': "Noble Gundam",
    'attribute': "Technique",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': 'head',
      'a': 1182,
      'ma': 384,
      'sa': 799,
      'md': 1182,
      'sd': 384,
      'br': 290,
      'pr': 290,
      'wt': ["Mobile Fighter", "Close Combat"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': 'Head-Mounted\x20Vulcan'
      }
    }, {
      'part': 'torso',
      'a': 1606,
      'ma': 384,
      'sa': 384,
      'md': 1606,
      'sd': 799,
      'br': 290,
      'pr': 290,
      'wt': ["Mobile Fighter", "Close Combat"],
      'ex': {
        'type': "EX Skill",
        'name': "Berserker System"
      }
    }, {
      'part': "arms",
      'a': 384,
      'ma': 3181,
      'sa': 384,
      'md': 1606,
      'sd': 384,
      'br': 0,
      'pr': 0,
      'wt': ["Mobile Fighter", "Close Combat"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Burning Finger"
      }
    }, {
      'part': "legs",
      'a': 799,
      'ma': 384,
      'sa': 384,
      'md': 1606,
      'sd': 799,
      'br': 420,
      'pr': 290,
      'wt': ["Mobile Fighter", "For Urban Area"],
      'ex': {
        'type': "EX Skill",
        'name': "Beam Hoop"
      }
    }, {
      'part': 'melee',
      'a': 384,
      'ma': 4004,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 420,
      'pr': 420,
      'wt': ["Mobile Fighter", "For Urban Area"],
      'ex': {
        'type': "EX Skill",
        'name': "Beam Ribbon"
      },
      'name': 'Beam\x20Ribbon',
      'type': "Beam"
    }]
  }, {
    'name': 'Nu\x20Gundam\x20[Ver.Ka]',
    'attribute': "Speed",
    'rarity': 4,
    'sokai': 1,
    'parts': [{
      'part': "head",
      'a': 553,
      'ma': 553,
      'sa': 3312,
      'md': 553,
      'sd': 1356,
      'br': 0,
      'pr': 0,
      'wt': ["For Space", "Ace Excl."],
      'ex': {
        'type': "Part Traits",
        'name': "When attacking with Beam EX Skill power boosted 30%"
      }
    }, {
      'part': "torso",
      'a': 1734,
      'ma': 553,
      'sa': 553,
      'md': 966,
      'sd': 1734,
      'br': 0,
      'pr': 673,
      'wt': ["For Space", 'Ace\x20Excl.'],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "When attacking with Beam Shooting power boosted 30%"
      }
    }, {
      'part': "arms",
      'a': 1356,
      'ma': 966,
      'sa': 553,
      'md': 553,
      'sd': 1734,
      'br': 284,
      'pr': 465,
      'wt': ["For Space", "Ace Excl."],
      'ex': {
        'type': "EX Skill",
        'name': "Beam Saber Combo"
      }
    }, {
      'part': "legs",
      'a': 966,
      'ma': 553,
      'sa': 553,
      'md': 966,
      'sd': 1734,
      'br': 673,
      'pr': 465,
      'wt': ["For Space", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': 'When\x20Armor\x20is\x2040%\x20or\x20more\x20EX\x20Skill\x20CD\x20reduced\x2020%'
      }
    }, {
      'part': "backpack",
      'a': 966,
      'ma': 553,
      'sa': 553,
      'md': 966,
      'sd': 1734,
      'br': 465,
      'pr': 673,
      'wt': ['For\x20Space', "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Fin Funnels"
      }
    }, {
      'part': 'melee',
      'a': 1356,
      'ma': 2523,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 465,
      'pr': 673,
      'wt': ['For\x20Space', "Ace Excl."],
      'ex': {
        'type': "Part Traits",
        'name': "With Speed attribute (self) Strong Melee power boosted 30%"
      },
      'name': 'Beam\x20Saber',
      'type': "Beam"
    }, {
      'part': "range",
      'a': 553,
      'ma': 0,
      'sa': 4110,
      'md': 0,
      'sd': 0,
      'br': 284,
      'pr': 465,
      'wt': ["For Space", "Ace Excl."],
      'ex': {
        'type': "Part Traits",
        'name': 'When\x20Armor\x20is\x2040%\x20or\x20more\x20Enemy\x20Strong\x20Melee\x20power\x20reduced\x2030%'
      },
      'name': "Beam Rifle",
      'type': "Beam"
    }, {
      'part': 'range',
      'a': 553,
      'ma': 0,
      'sa': 4110,
      'md': 0,
      'sd': 0,
      'br': 284,
      'pr': 465,
      'wt': ["For Space", "Ace Excl."],
      'ex': {
        'type': "EX Skill",
        'name': "Dual Cascade"
      },
      'name': "New Hyper Bazooka",
      'type': "Physical"
    }, {
      'part': "shield",
      'a': 966,
      'ma': 0,
      'sa': 0,
      'md': 966,
      'sd': 2523,
      'br': 0,
      'pr': 1082,
      'wt': ['For\x20Space', "Ace Excl."],
      'ex': {
        'type': "Part Traits",
        'name': "With Rifle category equipped Enemy Shooting power reduced 30%"
      },
      'name': "Shield"
    }]
  }, {
    'name': "Pale Rider",
    'attribute': "Speed",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 800,
      'ma': 385,
      'sa': 1985,
      'md': 385,
      'sd': 1185,
      'br': 292,
      'pr': 292,
      'wt': ["For Urban Area", "Close Combat"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "HADES System"
      }
    }, {
      'part': "torso",
      'a': 1185,
      'ma': 800,
      'sa': 385,
      'md': 800,
      'sd': 1610,
      'br': 292,
      'pr': 292,
      'wt': ["For Urban Area", 'Close\x20Combat'],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "With Speed attribute (self) EX Skill CD reduced 6-20%"
      }
    }, {
      'part': "arms",
      'a': 800,
      'ma': 2795,
      'sa': 385,
      'md': 800,
      'sd': 1185,
      'br': 0,
      'pr': 0,
      'wt': ['For\x20Urban\x20Area', "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': "When attacking with Physical Shooting power boosted 8-25%"
      }
    }, {
      'part': "legs",
      'a': 800,
      'ma': 385,
      'sa': 385,
      'md': 385,
      'sd': 1185,
      'br': 479,
      'pr': 479,
      'wt': ["For Urban Area", "GM Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Leg-Mounted Rocket Launcher"
      }
    }, {
      'part': "backpack",
      'a': 800,
      'ma': 385,
      'sa': 385,
      'md': 385,
      'sd': 1185,
      'br': 479,
      'pr': 479,
      'wt': ["For Urban Area", "GM Type"],
      'ex': {
        'type': "EX Skill",
        'name': '180mm\x20Cannon'
      }
    }, {
      'part': "shield",
      'a': 800,
      'ma': 0,
      'sa': 0,
      'md': 800,
      'sd': 1985,
      'br': 479,
      'pr': 479,
      'wt': ["For Urban Area", 'GM\x20Type'],
      'ex': {
        'type': "EX Skill",
        'name': "Shock Bringer y"
      },
      'name': 'Shield'
    }]
  }, {
    'name': "Penelope",
    'attribute': "Speed",
    'rarity': 4,
    'sokai': 1,
    'parts': [{
      'part': 'head',
      'a': 965,
      'ma': 0,
      'sa': 3309,
      'md': 551,
      'sd': 551,
      'br': 282,
      'pr': 464,
      'wt': ['Ace\x20Excl.', "High Mobility"],
      'ex': {
        'type': "Part Traits",
        'name': "With Rifle category equipped Enemy Shooting power reduced 30%"
      }
    }, {
      'part': "torso",
      'a': 1732,
      'ma': 551,
      'sa': 551,
      'md': 1732,
      'sd': 965,
      'br': 75,
      'pr': 672,
      'wt': ['Ace\x20Excl.', "High Mobility"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "While Ace Excl. Shooting power boosted 30%"
      }
    }, {
      'part': "arms",
      'a': 965,
      'ma': 1355,
      'sa': 551,
      'md': 1732,
      'sd': 551,
      'br': 75,
      'pr': 75,
      'wt': ['Ace\x20Excl.', "High Mobility"],
      'ex': {
        'type': "EX Skill",
        'name': "Flight Unit Combo"
      }
    }, {
      'part': "legs",
      'a': 965,
      'ma': 551,
      'sa': 551,
      'md': 1732,
      'sd': 965,
      'br': 464,
      'pr': 672,
      'wt': ["Ace Excl.", "Federation"],
      'ex': {
        'type': "EX Skill",
        'name': 'Funnel\x20Missiles'
      }
    }, {
      'part': 'backpack',
      'a': 965,
      'ma': 551,
      'sa': 551,
      'md': 1732,
      'sd': 965,
      'br': 464,
      'pr': 672,
      'wt': ["Ace Excl.", 'Federation'],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "With Speed attribute (self) EX Skill piercing boosted 28%"
      }
    }]
  }, {
    'name': "Providence Gundam",
    'attribute': 'Technique',
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 1181,
      'ma': 384,
      'sa': 2380,
      'md': 384,
      'sd': 384,
      'br': 417,
      'pr': 213,
      'wt': ["Ace Excl.", "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': "Picus"
      }
    }, {
      'part': "torso",
      'a': 1977,
      'ma': 384,
      'sa': 796,
      'md': 796,
      'sd': 796,
      'br': 611,
      'pr': 0,
      'wt': ['Ace\x20Excl.', "High Firepower"],
      'ex': {
        'type': "Part Traits",
        'name': "Long-Shooter Job Enemy Strong Melee power reduced 30%"
      }
    }, {
      'part': "arms",
      'a': 2380,
      'ma': 796,
      'sa': 796,
      'md': 1977,
      'sd': 2783,
      'br': 806,
      'pr': 213,
      'wt': ["Ace Excl.", "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': 'Composite\x20Armed\x20Shield\x20System'
      },
      'combo': 'shield'
    }, {
      'part': "legs",
      'a': 1181,
      'ma': 384,
      'sa': 384,
      'md': 796,
      'sd': 1181,
      'br': 611,
      'pr': 417,
      'wt': ["Ace Excl.", "For Space"],
      'ex': {
        'type': "Part Traits",
        'name': "With Technique attribute (self) Long Shot Attack raised 20%"
      }
    }, {
      'part': "backpack",
      'a': 1181,
      'ma': 384,
      'sa': 384,
      'md': 796,
      'sd': 1181,
      'br': 611,
      'pr': 417,
      'wt': ["Ace Excl.", "For Space"],
      'ex': {
        'type': "EX Skill",
        'name': "Dragoon System"
      }
    }, {
      'part': 'range',
      'a': 1181,
      'ma': 0,
      'sa': 3177,
      'md': 0,
      'sd': 0,
      'br': 611,
      'pr': 213,
      'wt': ["Ace Excl.", 'For\x20Space'],
      'ex': {
        'type': "Part Traits",
        'name': "With Technique attribute (self) Sp. Shot power boosted 30%"
      },
      'name': "Judicium Beam Rifle",
      'type': "Beam"
    }]
  }, {
    'name': "Qubeley",
    'attribute': "Power",
    'rarity': 4,
    'sokai': 1,
    'parts': [{
      'part': 'head',
      'a': 968,
      'ma': 553,
      'sa': 2927,
      'md': 968,
      'sd': 553,
      'br': 0,
      'pr': 284,
      'wt': ['Commander', "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': "Recovery Tool y"
      }
    }, {
      'part': 'torso',
      'a': 1358,
      'ma': 553,
      'sa': 553,
      'md': 1737,
      'sd': 968,
      'br': 0,
      'pr': 675,
      'wt': ['Commander', "High Firepower"],
      'ex': {
        'type': "Part Traits",
        'name': "Middle-Shooter Job Buff EX Skill effect up 22%"
      }
    }, {
      'part': "arms",
      'a': 968,
      'ma': 2138,
      'sa': 553,
      'md': 1358,
      'sd': 968,
      'br': 0,
      'pr': 0,
      'wt': ["Commander", "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': "Beam Gun"
      }
    }, {
      'part': "legs",
      'a': 968,
      'ma': 553,
      'sa': 968,
      'md': 1358,
      'sd': 553,
      'br': 467,
      'pr': 675,
      'wt': ['Commander', "High Mobility"],
      'ex': {
        'type': "Part Traits",
        'name': "Middle-Shooter Job Mid Shot Attack raised 20%"
      }
    }, {
      'part': "backpack",
      'a': 969,
      'ma': 553,
      'sa': 553,
      'md': 1737,
      'sd': 553,
      'br': 467,
      'pr': 675,
      'wt': ["Commander", 'High\x20Mobility'],
      'ex': {
        'type': "EX Skill",
        'name': "Funnels"
      }
    }]
  }, {
    'name': 'Rebawoo',
    'attribute': 'Technique',
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 889,
      'ma': 291,
      'sa': 558,
      'md': 889,
      'sd': 291,
      'br': 126,
      'pr': 302,
      'wt': ["Zeon", "Commander"],
      'ex': {
        'type': "Part Traits",
        'name': "With Technique attribute (self) Projectile speed boosted 5-14%"
      }
    }, {
      'part': "torso",
      'a': 1142,
      'ma': 291,
      'sa': 291,
      'md': 1142,
      'sd': 558,
      'br': 0,
      'pr': 428,
      'wt': ["Zeon", "Commander"],
      'ex': {
        'type': "EX Skill",
        'name': "Beam Vulcan"
      }
    }, {
      'part': "arms",
      'a': 291,
      'ma': 2300,
      'sa': 291,
      'md': 1142,
      'sd': 291,
      'br': 0,
      'pr': 0,
      'wt': ["Zeon", "Commander"],
      'ex': {
        'type': "EX Skill",
        'name': "Arm-Mounted Grenade Launcher"
      }
    }, {
      'part': "legs",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 1142,
      'sd': 558,
      'br': 428,
      'pr': 302,
      'wt': ['Zeon', 'For\x20Computers'],
      'ex': {
        'type': "EX Skill",
        'name': 'Flexible\x20Beam\x20Gun'
      }
    }, {
      'part': "backpack",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 1142,
      'sd': 558,
      'br': 302,
      'pr': 428,
      'wt': ['Zeon', "For Computers"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "While Zeon Melee power boosted 8-25%"
      }
    }, {
      'part': 'range',
      'a': 889,
      'ma': 0,
      'sa': 1701,
      'md': 0,
      'sd': 0,
      'br': 302,
      'pr': 428,
      'wt': ["Zeon", "Commander"],
      'ex': {
        'type': "Part Traits",
        'name': "While Commander Initial EX Skill charge boosted 3-12%"
      },
      'name': "Beam Rifle",
      'type': 'Beam'
    }, {
      'part': "shield",
      'a': 558,
      'ma': 0,
      'sa': 0,
      'md': 1701,
      'sd': 558,
      'br': 0,
      'pr': 716,
      'wt': ["Zeon", 'Commander'],
      'ex': {
        'type': "EX Skill",
        'name': "Grenade Launcher"
      },
      'name': "Shield"
    }]
  }, {
    'name': "Rising Gundam",
    'attribute': "Speed",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 889,
      'ma': 291,
      'sa': 558,
      'md': 889,
      'sd': 291,
      'br': 126,
      'pr': 302,
      'wt': ["Mobile Fighter", "Long-Range"],
      'ex': {
        'type': "EX Skill",
        'name': "Head-Mounted Vulcan"
      }
    }, {
      'part': "torso",
      'a': 1142,
      'ma': 291,
      'sa': 291,
      'md': 1142,
      'sd': 558,
      'br': 0,
      'pr': 428,
      'wt': ["Mobile Fighter", "Long-Range"],
      'ex': {
        'type': "Part Traits",
        'name': "Strong Melee Power boosted 20%"
      }
    }, {
      'part': "arms",
      'a': 291,
      'ma': 2300,
      'sa': 291,
      'md': 1142,
      'sd': 291,
      'br': 0,
      'pr': 0,
      'wt': ["Mobile Fighter", "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': 'Rising\x20Arrow'
      }
    }, {
      'part': "legs",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 1142,
      'sd': 558,
      'br': 428,
      'pr': 302,
      'wt': ["Mobile Fighter", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': "Shooting CRIT Rate boosted 17%"
      }
    }, {
      'part': 'backpack',
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 1142,
      'sd': 558,
      'br': 302,
      'pr': 428,
      'wt': ["Mobile Fighter", "Long-Range"],
      'ex': {
        'type': "EX Skill",
        'name': "Defense Hack a"
      }
    }]
  }, {
    'name': "Rozen Zulu",
    'attribute': 'Technique',
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 889,
      'ma': 291,
      'sa': 558,
      'md': 889,
      'sd': 558,
      'br': 302,
      'pr': 126,
      'wt': ['Zeon', "Ace Excl."],
      'ex': {
        'type': "Part Traits",
        'name': "Out-Fighter Job Mid Shot Attack raised 5-14%"
      }
    }, {
      'part': 'torso',
      'a': 1433,
      'ma': 558,
      'sa': 291,
      'md': 558,
      'sd': 558,
      'br': 428,
      'pr': 0,
      'wt': ['Zeon', "Ace Excl."],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "With Technique attribute (self) Sp. Shot DMG taken reduced 6-20"
      }
    }, {
      'part': "arms",
      'a': 558,
      'ma': 1991,
      'sa': 0,
      'md': 889,
      'sd': 889,
      'br': 0,
      'pr': 0,
      'wt': ["Zeon", "Ace Excl."],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Mega Particle Cannon (Incom)"
      }
    }, {
      'part': "legs",
      'a': 889,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 558,
      'br': 428,
      'pr': 302,
      'wt': ["Zeon", "High Firepower"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': 'When\x20Armor\x20is\x2040%\x20or\x20less\x20Shooting\x20CRIT\x20rate\x20boosted\x208-17%'
      }
    }, {
      'part': 'backpack',
      'a': 889,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 558,
      'br': 428,
      'pr': 302,
      'wt': ['Zeon', "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': "Psyco Jammer"
      }
    }, {
      'part': "shield",
      'a': 889,
      'ma': 0,
      'sa': 0,
      'md': 1142,
      'sd': 558,
      'br': 590,
      'pr': 126,
      'wt': ["Zeon", "High Firepower"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': 'Triple-Barrel\x20Mega\x20Particle\x20Cannon'
      },
      'name': 'Shield'
    }]
  }, {
    'name': "Sanakapool",
    'attribute': "Power",
    'rarity': 3,
    'sokai': 0,
    'mark': 4,
    'parts': [{
      'part': 'torso',
      'a': 2778,
      'ma': 795,
      'sa': 1179,
      'md': 2778,
      'sd': 1974,
      'br': 211,
      'pr': 1025,
      'wt': ['Amphib.', "Support Type"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Power\x20attribute\x20(self)\x20EX\x20Skill\x20piercing\x20boosted\x2028%'
      },
      'combo': "head"
    }, {
      'part': "arms",
      'a': 382,
      'ma': 3173,
      'sa': 382,
      'md': 1601,
      'sd': 382,
      'br': 0,
      'pr': 0,
      'wt': ["Amphib.", "Support Type"],
      'ex': {
        'type': "EX Skill",
        'name': 'Sana\x27s\x20Signature\x20Rabbit\x20Spike'
      }
    }, {
      'part': 'legs',
      'a': 795,
      'ma': 382,
      'sa': 382,
      'md': 1601,
      'sd': 795,
      'br': 609,
      'pr': 416,
      'wt': ["Amphib.", 'For\x20Computers'],
      'ex': {
        'type': "EX Skill",
        'name': "Belly Beam!"
      }
    }]
  }, {
    'name': "Sengoku Astray Gundam",
    'attribute': "Technique",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 1180,
      'ma': 383,
      'sa': 796,
      'md': 1180,
      'sd': 796,
      'br': 417,
      'pr': 212,
      'wt': ["Heavy Armor", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': "In-Fighter Job EX Skill piercing boosted 10-28%"
      }
    }, {
      'part': 'torso',
      'a': 1976,
      'ma': 796,
      'sa': 383,
      'md': 796,
      'sd': 796,
      'br': 610,
      'pr': 0,
      'wt': ["Heavy Armor", "Close Combat"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': 'In-Fighter\x20Job\x20EX\x20Skill\x20CD\x20reduced\x206-20%'
      }
    }, {
      'part': "arms",
      'a': 796,
      'ma': 2781,
      'sa': 0,
      'md': 1180,
      'sd': 1180,
      'br': 0,
      'pr': 0,
      'wt': ["Heavy Armor", "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Hidden Arm & Samurai Sword"
      }
    }, {
      'part': "legs",
      'a': 1180,
      'ma': 383,
      'sa': 383,
      'md': 1180,
      'sd': 796,
      'br': 610,
      'pr': 417,
      'wt': ["Heavy Armor", "For Forest"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "With Module category equipped EX Skill piercing boosted 10-28%"
      }
    }, {
      'part': "backpack",
      'a': 1180,
      'ma': 383,
      'sa': 383,
      'md': 1180,
      'sd': 796,
      'br': 610,
      'pr': 417,
      'wt': ["Heavy Armor", "Close Combat"],
      'ex': {
        'type': "EX Skill",
        'name': "Particle Fa Jin"
      }
    }, {
      'part': 'shield',
      'a': 1180,
      'ma': 0,
      'sa': 0,
      'md': 1601,
      'sd': 796,
      'br': 805,
      'pr': 212,
      'wt': ['Heavy\x20Armor', "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': "In-Fighter Job Enemy Strong Melee power reduced 17-30%"
      },
      'name': "Oni No Tate"
    }]
  }, {
    'name': "Shenlong Gundam",
    'attribute': "Technique",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 1605,
      'ma': 384,
      'sa': 1181,
      'md': 797,
      'sd': 797,
      'br': 418,
      'pr': 0,
      'wt': ["Close Combat", "For Forest"],
      'ex': {
        'type': "EX Skill",
        'name': "Head-Mounted Vulcan"
      }
    }, {
      'part': 'torso',
      'a': 2382,
      'ma': 384,
      'sa': 384,
      'md': 797,
      'sd': 797,
      'br': 611,
      'pr': 0,
      'wt': ['Close\x20Combat', 'For\x20Forest'],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Technique\x20attribute\x20(self)\x20Strong\x20Melee\x20power\x20boosted\x2017-30%'
      }
    }, {
      'part': "arms",
      'a': 1181,
      'ma': 1181,
      'sa': 384,
      'md': 1181,
      'sd': 1181,
      'br': 213,
      'pr': 0,
      'wt': ["Close Combat", "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': "Dragon Fang"
      }
    }, {
      'part': "legs",
      'a': 1181,
      'ma': 384,
      'sa': 384,
      'md': 1181,
      'sd': 1181,
      'br': 213,
      'pr': 611,
      'wt': ["Close Combat", "High Firepower"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Technique\x20attribute\x20(self)\x208-20%\x20chance\x20to\x20not\x20recoil'
      }
    }, {
      'part': "backpack",
      'a': 1181,
      'ma': 384,
      'sa': 384,
      'md': 1181,
      'sd': 1181,
      'br': 611,
      'pr': 213,
      'wt': ["Close Combat", 'High\x20Firepower'],
      'ex': {
        'type': "EX Skill",
        'name': "Armed Aura y"
      }
    }, {
      'part': "melee",
      'a': 1181,
      'ma': 1605,
      'sa': 0,
      'md': 384,
      'sd': 384,
      'br': 611,
      'pr': 418,
      'wt': ["Close Combat", "For Forest"],
      'ex': {
        'type': "EX Skill",
        'name': "Hell Jumper"
      },
      'name': "Beam Glaive",
      'type': 'Beam'
    }, {
      'part': "shield",
      'a': 1181,
      'ma': 0,
      'sa': 0,
      'md': 1181,
      'sd': 1181,
      'br': 1029,
      'pr': 0,
      'wt': ['Close\x20Combat', "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Shield Throw"
      },
      'name': "Shenlong Shield"
    }]
  }, {
    'name': "Shining Gundam",
    'attribute': "Power",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': 'head',
      'a': 1180,
      'ma': 383,
      'sa': 796,
      'md': 1180,
      'sd': 796,
      'br': 212,
      'pr': 417,
      'wt': ['Mobile\x20Fighter', "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': "In-Fighter Job Projectile speed boosted 6-15%"
      }
    }, {
      'part': "torso",
      'a': 1976,
      'ma': 796,
      'sa': 383,
      'md': 796,
      'sd': 796,
      'br': 0,
      'pr': 610,
      'wt': ["Mobile Fighter", "For Urban Area"],
      'ex': {
        'type': "EX Skill",
        'name': 'Super\x20Mode'
      }
    }, {
      'part': 'arms',
      'a': 796,
      'ma': 2781,
      'sa': 0,
      'md': 1180,
      'sd': 1180,
      'br': 0,
      'pr': 0,
      'wt': ["Mobile Fighter", "Close Combat"],
      'ex': {
        'type': "EX Skill",
        'name': "Shining Finger Sword"
      }
    }, {
      'part': 'legs',
      'a': 1180,
      'ma': 383,
      'sa': 383,
      'md': 1180,
      'sd': 796,
      'br': 417,
      'pr': 610,
      'wt': ["Mobile Fighter", "For Urban Area"],
      'ex': {
        'type': "EX Skill",
        'name': "Rapid Thrust"
      }
    }, {
      'part': 'backpack',
      'a': 1180,
      'ma': 383,
      'sa': 383,
      'md': 1180,
      'sd': 796,
      'br': 417,
      'pr': 610,
      'wt': ["Mobile Fighter", "Close Combat"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': 'In-Fighter\x20Job\x208-20%\x20chance\x20to\x20not\x20recoil'
      }
    }]
  }, {
    'name': "Stargazer Gundam",
    'attribute': "Speed",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 558,
      'ma': 291,
      'sa': 889,
      'md': 889,
      'sd': 889,
      'br': 302,
      'pr': 0,
      'wt': ['For\x20Space', "Support Type"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': 'With\x20Speed\x20attribute\x20(self)\x20Shot\x20guidance\x20boosted\x205-14%'
      }
    }, {
      'part': "torso",
      'a': 1140,
      'ma': 291,
      'sa': 0,
      'md': 889,
      'sd': 889,
      'br': 428,
      'pr': 0,
      'wt': ['For\x20Space', 'Support\x20Type'],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Speed\x20attribute\x20(self)\x20Enemy\x20Strong\x20Melee\x20power\x20reduced\x2017-30%'
      }
    }, {
      'part': "arms",
      'a': 558,
      'ma': 889,
      'sa': 291,
      'md': 2297,
      'sd': 2297,
      'br': 874,
      'pr': 302,
      'wt': ['For\x20Space', 'Support\x20Type'],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "Beam ranged weapon reload speed boosted 6-15%"
      },
      'combo': "shield"
    }, {
      'part': "legs",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 1140,
      'sd': 1140,
      'br': 126,
      'pr': 302,
      'wt': ["For Space", "Protag."],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Speed\x20attribute\x20(self)\x20EX\x20Skill\x20DMG\x20taken\x20reduced\x208-25'
      }
    }, {
      'part': "backpack",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 1140,
      'sd': 1140,
      'br': 302,
      'pr': 126,
      'wt': ["For Space", 'Protag.'],
      'ex': {
        'type': "EX Skill",
        'name': "Voiture Lumiere"
      }
    }]
  }, {
    'name': "Strike Noir",
    'attribute': "Speed",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 291,
      'ma': 291,
      'sa': 2300,
      'md': 291,
      'sd': 889,
      'br': 0,
      'pr': 0,
      'wt': ["Gundam Type", "For Space"],
      'ex': {
        'type': "EX Skill",
        'name': "Head-Mounted Vulcan"
      }
    }, {
      'part': "torso",
      'a': 1142,
      'ma': 291,
      'sa': 291,
      'md': 558,
      'sd': 1142,
      'br': 428,
      'pr': 0,
      'wt': ["Gundam Type", 'For\x20Space'],
      'ex': {
        'type': "Part Traits",
        'name': "With Dual Sabers category equipped EX Skill DMG output boosted by 6-20"
      }
    }, {
      'part': 'arms',
      'a': 889,
      'ma': 558,
      'sa': 291,
      'md': 291,
      'sd': 1142,
      'br': 302,
      'pr': 126,
      'wt': ["Gundam Type", "For Tundra"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "With Speed attribute (self) Melee CRIT rate boosted 8-17%"
      }
    }, {
      'part': 'legs',
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 558,
      'sd': 1142,
      'br': 302,
      'pr': 428,
      'wt': ["Gundam Type", "For Tundra"],
      'ex': {
        'type': "EX Skill",
        'name': "Beam Rifle Shorty"
      }
    }, {
      'part': "backpack",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 558,
      'sd': 1142,
      'br': 428,
      'pr': 302,
      'wt': ['Gundam\x20Type', "For Tundra"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Dual Linear Guns"
      }
    }, {
      'part': "melee",
      'a': 889,
      'ma': 1701,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 428,
      'pr': 302,
      'wt': ["Gundam Type", "For Space"],
      'ex': {
        'type': "Part Traits",
        'name': '3-12%\x20chance\x20of\x20attacks\x20penetrating\x20super\x20armor'
      },
      'name': "Fragarach 3-Beam Blade",
      'type': "Beam"
    }]
  }, {
    'name': "Strike Rouge [IWSP]",
    'attribute': "Speed",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 558,
      'ma': 291,
      'sa': 1692,
      'md': 558,
      'sd': 558,
      'br': 302,
      'pr': 0,
      'wt': ["Commander", "For Base"],
      'ex': {
        'type': "EX Skill",
        'name': 'Igelstellung'
      }
    }, {
      'part': "torso",
      'a': 1140,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 428,
      'pr': 0,
      'wt': ["Commander", "For Base"],
      'ex': {
        'type': "Part Traits",
        'name': "With Speed attribute (self) Enemy EX Skill penetration reduced 8-22%"
      }
    }, {
      'part': "arms",
      'a': 558,
      'ma': 1698,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 0,
      'pr': 0,
      'wt': ["Commander", "For Base"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 60% or more Melee CRIT rate boosted 8-17%"
      }
    }, {
      'part': 'legs',
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 428,
      'pr': 302,
      'wt': ["Commander", "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': 'Rapid\x20Thrust'
      }
    }, {
      'part': "backpack",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 428,
      'pr': 302,
      'wt': ['Commander', "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Railgun & Single-Mounted Cannon"
      }
    }, {
      'part': "melee",
      'a': 558,
      'ma': 2297,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 428,
      'pr': 126,
      'wt': ['Commander', 'For\x20Base'],
      'ex': {
        'type': "Part Traits",
        'name': "With Speed attribute (Self) Melee DGM output boosted 6-20"
      },
      'name': "9.1m Experimental Anti-Ship Sword",
      'type': "Physical"
    }, {
      'part': 'range',
      'a': 1140,
      'ma': 0,
      'sa': 2297,
      'md': 1140,
      'sd': 1140,
      'br': 1016,
      'pr': 302,
      'wt': ["Commander", "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Dual Shredder"
      },
      'name': 'Combined\x20Shield',
      'type': "Physical",
      'combo': "shield"
    }, {
      'part': 'shield',
      'a': 558,
      'ma': 0,
      'sa': 0,
      'md': 1140,
      'sd': 1140,
      'br': 558,
      'pr': 126,
      'wt': ['Commander', "For Base"],
      'ex': {
        'type': "Part Traits",
        'name': 'Out-Fighter\x20Job\x20Shooting\x20DMG\x20taken\x20reduced\x20by\x206-20'
      },
      'name': 'Anti-Beam\x20Shield'
    }]
  }, {
    'name': "Susanowo",
    'attribute': "Power",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': 'head',
      'a': 889,
      'ma': 291,
      'sa': 558,
      'md': 889,
      'sd': 291,
      'br': 126,
      'pr': 302,
      'wt': ["Close Combat", "For Space"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Beam Chakram"
      }
    }, {
      'part': "torso",
      'a': 1142,
      'ma': 291,
      'sa': 291,
      'md': 1142,
      'sd': 558,
      'br': 0,
      'pr': 428,
      'wt': ["Close Combat", "For Space"],
      'ex': {
        'type': "EX Skill",
        'name': 'GN\x20Vulcan'
      }
    }, {
      'part': "arms",
      'a': 291,
      'ma': 2300,
      'sa': 291,
      'md': 1142,
      'sd': 291,
      'br': 0,
      'pr': 0,
      'wt': ["Close Combat", "For Space"],
      'ex': {
        'type': "Part Traits",
        'name': "With Dual Sabers category equipped Melee power boosted 8-25%"
      }
    }, {
      'part': "legs",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 1142,
      'sd': 558,
      'br': 428,
      'pr': 302,
      'wt': ['Close\x20Combat', "For Computers"],
      'ex': {
        'type': "EX Skill",
        'name': "Trans-Am Raid"
      }
    }, {
      'part': "backpack",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 1142,
      'sd': 558,
      'br': 302,
      'pr': 428,
      'wt': ["Close Combat", 'For\x20Computers'],
      'ex': {
        'type': "Part Traits",
        'name': "1-15% chance to prevent vernier consumption when stepping"
      }
    }, {
      'part': "melee",
      'a': 291,
      'ma': 2867,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 126,
      'pr': 302,
      'wt': ["Close Combat", "For Computers"],
      'ex': {
        'type': "Part Traits",
        'name': "In-Fighter Job Initial EX Skill charge boosted 3-12%"
      },
      'name': "Shiranui/Unryu",
      'type': "Physical"
    }]
  }, {
    'name': "Sword Strike Gundam",
    'attribute': "Technique",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 558,
      'ma': 292,
      'sa': 1993,
      'md': 292,
      'sd': 292,
      'br': 302,
      'pr': 127,
      'wt': ["High Firepower", 'Close\x20Combat'],
      'ex': {
        'type': "EX Skill",
        'name': "Protection Hack b"
      }
    }, {
      'part': 'torso',
      'a': 1144,
      'ma': 558,
      'sa': 558,
      'md': 558,
      'sd': 558,
      'br': 430,
      'pr': 0,
      'wt': ["High Firepower", "Close Combat"],
      'ex': {
        'type': "Part Traits",
        'name': "Against a large enemy Enemy Strong Melee power reduced 8-25%"
      }
    }, {
      'part': "arms",
      'a': 1144,
      'ma': 2593,
      'sa': 1144,
      'md': 891,
      'sd': 891,
      'br': 718,
      'pr': 0,
      'wt': ['High\x20Firepower', "Close Combat"],
      'ex': {
        'type': "EX Skill",
        'name': "Block Stance y"
      },
      'combo': "shield"
    }, {
      'part': "legs",
      'a': 558,
      'ma': 558,
      'sa': 292,
      'md': 558,
      'sd': 558,
      'br': 302,
      'pr': 430,
      'wt': ["High Firepower", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': "Against a large enemy Melee CRIT rate boosted 8-17%"
      }
    }, {
      'part': "backpack",
      'a': 558,
      'ma': 558,
      'sa': 292,
      'md': 558,
      'sd': 558,
      'br': 430,
      'pr': 302,
      'wt': ["High Firepower", "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Schwert Gewehr"
      }
    }, {
      'part': "melee",
      'a': 292,
      'ma': 2593,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 430,
      'pr': 302,
      'wt': ['High\x20Firepower', 'Close\x20Combat'],
      'ex': {
        'type': "EX Skill",
        'name': 'Maelstrom'
      },
      'name': "Schwert Gewehr",
      'type': "Beam"
    }]
  }, {
    'name': 'Tallgeese\x20[Endless\x20Waltz\x20Ver.]',
    'attribute': "Speed",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 799,
      'ma': 384,
      'sa': 2789,
      'md': 384,
      'sd': 384,
      'br': 213,
      'pr': 213,
      'wt': ["High Mobility", "Long-Range"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 40% or more EX Skill DMG output boosted 8-35"
      }
    }, {
      'part': "torso",
      'a': 1606,
      'ma': 799,
      'sa': 799,
      'md': 799,
      'sd': 799,
      'br': 290,
      'pr': 290,
      'wt': ["High Mobility", 'Long-Range'],
      'ex': {
        'type': "Part Traits",
        'name': 'In-Fighter\x20Job\x20EX\x20Skill\x20DMG\x20Taken\x20reduced\x208-35'
      }
    }, {
      'part': "arms",
      'a': 1606,
      'ma': 3587,
      'sa': 1606,
      'md': 1182,
      'sd': 1182,
      'br': 477,
      'pr': 477,
      'wt': ['High\x20Mobility', "Close Combat"],
      'ex': {
        'type': "EX Skill",
        'name': 'Dober\x20Gun'
      },
      'combo': "shield"
    }, {
      'part': "legs",
      'a': 799,
      'ma': 799,
      'sa': 384,
      'md': 799,
      'sd': 799,
      'br': 477,
      'pr': 477,
      'wt': ["High Mobility", 'Close\x20Combat'],
      'ex': {
        'type': "Part Traits",
        'name': "In-Fighter Job EX Skill DMG taken reduced 8-35"
      }
    }, {
      'part': "backpack",
      'a': 799,
      'ma': 799,
      'sa': 384,
      'md': 799,
      'sd': 799,
      'br': 477,
      'pr': 477,
      'wt': ["High Mobility", "Close Combat"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': 'With\x20Speed\x20attribute\x20(self)\x20Buff\x20EX\x20Skill\x20time\x20up\x204-22%'
      }
    }, {
      'part': 'range',
      'a': 384,
      'ma': 0,
      'sa': 3587,
      'md': 0,
      'sd': 0,
      'br': 420,
      'pr': 420,
      'wt': ["High Mobility", "Long-Range"],
      'ex': {
        'type': "Part Traits",
        'name': 'Beam\x20ranged\x20weapon\x20magazine\x20boosted\x209-20%'
      },
      'name': "Dober Gun",
      'type': "Beam"
    }]
  }, {
    'name': "Tallgeese II",
    'attribute': "Technique",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 558,
      'ma': 291,
      'sa': 1700,
      'md': 558,
      'sd': 558,
      'br': 126,
      'pr': 126,
      'wt': ["Commander", "Long-Range"],
      'ex': {
        'type': "EX Skill",
        'name': "Offense Up a"
      }
    }, {
      'part': "torso",
      'a': 1142,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 213,
      'pr': 213,
      'wt': ["Commander", "Long-Range"],
      'ex': {
        'type': "Part Traits",
        'name': "With For Space enemy EX Skill piercing boosted 8-22%"
      }
    }, {
      'part': "arms",
      'a': 1142,
      'ma': 1700,
      'sa': 291,
      'md': 1991,
      'sd': 1991,
      'br': 302,
      'pr': 302,
      'wt': ["Commander", 'Long-Range'],
      'ex': {
        'type': "EX Skill",
        'name': "Dober Gun"
      },
      'combo': "shield"
    }, {
      'part': 'legs',
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 349,
      'pr': 375,
      'wt': ["Commander", "High Mobility"],
      'ex': {
        'type': "Part Traits",
        'name': "With For Space enemy, Mid Shot Attack raised 14%"
      }
    }, {
      'part': "backpack",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 375,
      'pr': 349,
      'wt': ["Commander", "High Mobility"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': 'With\x20For\x20Space\x20enemy\x20Shooting\x20power\x20boosted\x2025%'
      }
    }]
  }, {
    'name': "The O",
    'attribute': "Technique",
    'rarity': 4,
    'sokai': 4,
    'parts': [{
      'part': "head",
      'a': 1352,
      'ma': 551,
      'sa': 964,
      'md': 1352,
      'sd': 964,
      'br': 463,
      'pr': 282,
      'wt': ["High Mobility", "Commander"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Technique\x20attribute\x20(self)\x20Close\x20Shot\x20Attack\x20raised\x2020%'
      }
    }, {
      'part': "torso",
      'a': 2128,
      'ma': 964,
      'sa': 551,
      'md': 964,
      'sd': 964,
      'br': 669,
      'pr': 0,
      'wt': ["High Mobility", "Commander"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "Out-Fighter Job EX Skill piercing boosted 28%"
      }
    }, {
      'part': "arms",
      'a': 964,
      'ma': 2913,
      'sa': 0,
      'md': 1352,
      'sd': 1352,
      'br': 0,
      'pr': 0,
      'wt': ["High Mobility", 'Commander'],
      'ex': {
        'type': "Part Traits",
        'name': "While High Mobility Melee power boosted 30%"
      }
    }, {
      'part': "legs",
      'a': 1352,
      'ma': 551,
      'sa': 551,
      'md': 1352,
      'sd': 964,
      'br': 669,
      'pr': 463,
      'wt': ['High\x20Mobility', "Ace Excl."],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Heaven's Judgment"
      }
    }, {
      'part': "backpack",
      'a': 1352,
      'ma': 964,
      'sa': 551,
      'md': 964,
      'sd': 964,
      'br': 669,
      'pr': 463,
      'wt': ["High Mobility", "Ace Excl."],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Beam Saber Combo"
      }
    }, {
      'part': "range",
      'a': 1352,
      'ma': 0,
      'sa': 3135,
      'md': 0,
      'sd': 0,
      'br': 669,
      'pr': 282,
      'wt': ["High Mobility", 'Ace\x20Excl.'],
      'ex': {
        'type': "Part Traits",
        'name': "Beam ranged weapon reload speed boosted 20%"
      },
      'name': "Large Beam Rifle",
      'type': "Beam"
    }]
  }, {
    'name': "Turn A Gundam",
    'attribute': "Technique",
    'rarity': 4,
    'sokai': 1,
    'parts': [{
      'part': "head",
      'a': 969,
      'ma': 553,
      'sa': 2138,
      'md': 553,
      'sd': 1359,
      'br': 384,
      'pr': 384,
      'wt': ["Protag.", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Technique\x20attribute\x20(self)\x20Close\x20Shot\x20Attack\x20raised\x2020%'
      }
    }, {
      'part': "torso",
      'a': 1359,
      'ma': 969,
      'sa': 553,
      'md': 969,
      'sd': 1738,
      'br': 384,
      'pr': 384,
      'wt': ["Protag.", "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Moonbeam Butterfly"
      }
    }, {
      'part': "arms",
      'a': 969,
      'ma': 2929,
      'sa': 553,
      'md': 969,
      'sd': 1359,
      'br': 0,
      'pr': 0,
      'wt': ["Protag.", "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Flip Jump Saber"
      }
    }, {
      'part': "legs",
      'a': 969,
      'ma': 553,
      'sa': 553,
      'md': 553,
      'sd': 1359,
      'br': 558,
      'pr': 558,
      'wt': ["Protag.", "High Firepower"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "With Rifle category equipped Enemy Melee power reduced 30%"
      }
    }, {
      'part': "melee",
      'a': 553,
      'ma': 3698,
      'sa': 0,
      'md': 0,
      'sd': 969,
      'br': 384,
      'pr': 384,
      'wt': ["Protag.", "For Forest"],
      'ex': {
        'type': "Part Traits",
        'name': "Out-Fighter Job Strong Melee CRIT rate boosted 30%"
      },
      'name': 'Beam\x20Saber',
      'type': "Beam"
    }, {
      'part': "melee",
      'a': 553,
      'ma': 3698,
      'sa': 0,
      'md': 0,
      'sd': 969,
      'br': 384,
      'pr': 384,
      'wt': ["Protag.", "For Forest"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Flexible Smash"
      },
      'name': "Gundam Hammer",
      'type': "Physical"
    }, {
      'part': "range",
      'a': 969,
      'ma': 0,
      'sa': 2138,
      'md': 0,
      'sd': 969,
      'br': 384,
      'pr': 384,
      'wt': ['Protag.', "High Firepower"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "Out-Fighter Job EX Skill power boosted 30%"
      },
      'name': "Beam Rifle",
      'type': "Beam"
    }, {
      'part': "shield",
      'a': 969,
      'ma': 0,
      'sa': 0,
      'md': 969,
      'sd': 2138,
      'br': 558,
      'pr': 558,
      'wt': ["Protag.", "For Forest"],
      'ex': {
        'type': "Part Traits",
        'name': "With Technique attribute (self) Buff EX Skill effect up 22%"
      },
      'name': "Shield"
    }]
  }, {
    'name': "Turn X",
    'attribute': "Power",
    'rarity': 4,
    'sokai': 1,
    'parts': [{
      'part': "head",
      'a': 965,
      'ma': 553,
      'sa': 2922,
      'md': 553,
      'sd': 553,
      'br': 284,
      'pr': 464,
      'wt': ['Close\x20Combat', "Transformer"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "With Power attribute (self) EX Skill Power boosted 30%"
      }
    }, {
      'part': "torso",
      'a': 1734,
      'ma': 965,
      'sa': 965,
      'md': 965,
      'sd': 965,
      'br': 0,
      'pr': 673,
      'wt': ["Close Combat", "Transformer"],
      'ex': {
        'type': "EX Skill",
        'name': "Moonbeam Butterfly"
      }
    }, {
      'part': "arms",
      'a': 965,
      'ma': 2922,
      'sa': 1356,
      'md': 553,
      'sd': 553,
      'br': 0,
      'pr': 0,
      'wt': ['Close\x20Combat', "Transformer"],
      'ex': {
        'type': "EX Skill",
        'name': 'Fusion\x20Destruction\x20Manipulator'
      }
    }, {
      'part': "legs",
      'a': 965,
      'ma': 965,
      'sa': 553,
      'md': 965,
      'sd': 965,
      'br': 673,
      'pr': 464,
      'wt': ['Close\x20Combat', "High Mobility"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 60% or more Melee CRIT rate boosted 30%"
      }
    }, {
      'part': "backpack",
      'a': 965,
      'ma': 965,
      'sa': 553,
      'md': 965,
      'sd': 965,
      'br': 464,
      'pr': 673,
      'wt': ["Close Combat", "High Mobility"],
      'ex': {
        'type': "EX Skill",
        'name': "Carapace"
      }
    }]
  }, {
    'name': "Unicorn Gundam",
    'attribute': "Speed",
    'rarity': 4,
    'sokai': 1,
    'parts': [{
      'part': "head",
      'a': 965,
      'ma': 553,
      'sa': 2922,
      'md': 553,
      'sd': 553,
      'br': 284,
      'pr': 464,
      'wt': ["For Space", "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Head-Mounted Vulcan"
      }
    }, {
      'part': "torso",
      'a': 1734,
      'ma': 965,
      'sa': 965,
      'md': 965,
      'sd': 965,
      'br': 0,
      'pr': 673,
      'wt': ["For Space", "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "NT-D"
      }
    }, {
      'part': "arms",
      'a': 965,
      'ma': 2922,
      'sa': 1356,
      'md': 553,
      'sd': 553,
      'br': 0,
      'pr': 0,
      'wt': ["For Space", "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Beam Tonfa"
      }
    }, {
      'part': "legs",
      'a': 965,
      'ma': 965,
      'sa': 553,
      'md': 965,
      'sd': 965,
      'br': 673,
      'pr': 464,
      'wt': ['For\x20Space', "High Firepower"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': 'With\x20Speed\x20attribute\x20(self)\x20Sp.\x20Shot\x20power\x20boosted\x2030%'
      }
    }, {
      'part': "backpack",
      'a': 965,
      'ma': 965,
      'sa': 553,
      'md': 965,
      'sd': 965,
      'br': 464,
      'pr': 673,
      'wt': ['For\x20Space', "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': 'Double\x20Saber\x20Rush'
      }
    }, {
      'part': "melee",
      'a': 553,
      'ma': 3690,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 464,
      'pr': 673,
      'wt': ["For Space", 'High\x20Firepower'],
      'ex': {
        'type': "Part Traits",
        'name': "With Speed attribute (self) Initial EX Skill charge boosted 20%"
      },
      'name': "Beam Saber",
      'type': "Beam"
    }, {
      'part': "range",
      'a': 553,
      'ma': 154,
      'sa': 3690,
      'md': 0,
      'sd': 0,
      'br': 284,
      'pr': 464,
      'wt': ["For Space", "High Firepower"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 40% or more Sp. Shot power boosted 30%"
      },
      'name': "Beam Magnum",
      'type': 'Beam'
    }, {
      'part': "range",
      'a': 553,
      'ma': 154,
      'sa': 3690,
      'md': 0,
      'sd': 0,
      'br': 284,
      'pr': 464,
      'wt': ["For Space", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Speed\x20attribute\x20(self)\x20Enemy\x20Shooting\x20power\x20reduced\x2030%'
      },
      'name': "Hyper Bazooka",
      'type': "Physical"
    }, {
      'part': "shield",
      'a': 965,
      'ma': 965,
      'sa': 553,
      'md': 965,
      'sd': 965,
      'br': 0,
      'pr': 1082,
      'wt': ["For Space", "Gundam Type"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': 'When\x20Armor\x20is\x2040%\x20or\x20more\x20EX\x20Skill\x20DMG\x20output\x20boosted\x20by\x208-35'
      },
      'name': 'Shield'
    }]
  }, {
    'name': "Veetwo Gundam",
    'attribute': "Technique",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 799,
      'ma': 384,
      'sa': 2791,
      'md': 799,
      'sd': 384,
      'br': 213,
      'pr': 0,
      'wt': ["Ace Excl.", 'High\x20Firepower'],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Technique\x20attribute\x20(self)\x20Shooting\x20power\x20boosted\x2030%'
      }
    }, {
      'part': 'torso',
      'a': 1184,
      'ma': 384,
      'sa': 384,
      'md': 1608,
      'sd': 799,
      'br': 614,
      'pr': 0,
      'wt': ["Ace Excl.", "High Firepower"],
      'ex': {
        'type': "Part Traits",
        'name': "Long-Shooter Job EX Skill CD reduced 20%"
      }
    }, {
      'part': "arms",
      'a': 799,
      'ma': 1982,
      'sa': 384,
      'md': 1184,
      'sd': 799,
      'br': 0,
      'pr': 0,
      'wt': ["Ace Excl.", 'High\x20Firepower'],
      'ex': {
        'type': "EX Skill",
        'name': "Hand Missile Pod"
      }
    }, {
      'part': "legs",
      'a': 799,
      'ma': 384,
      'sa': 799,
      'md': 1184,
      'sd': 384,
      'br': 614,
      'pr': 420,
      'wt': ["Ace Excl.", "For Computers"],
      'ex': {
        'type': "Part Traits",
        'name': "With Bazooka category equipped Projectile speed boosted 15%"
      }
    }, {
      'part': "backpack",
      'a': 799,
      'ma': 384,
      'sa': 384,
      'md': 1608,
      'sd': 384,
      'br': 614,
      'pr': 420,
      'wt': ["Ace Excl.", "For Computers"],
      'ex': {
        'type': "EX Skill",
        'name': "Missile Pod & Beam Cannon"
      }
    }, {
      'part': "range",
      'a': 384,
      'ma': 0,
      'sa': 3590,
      'md': 799,
      'sd': 0,
      'br': 420,
      'pr': 213,
      'wt': ['Ace\x20Excl.', "For Computers"],
      'ex': {
        'type': "EX Skill",
        'name': "Big Beam Bazooka"
      },
      'name': "Big Beam Bazooka",
      'type': "Beam"
    }]
  }, {
    'name': "Victory Gundam",
    'attribute': "Technique",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 1181,
      'ma': 384,
      'sa': 796,
      'md': 1181,
      'sd': 384,
      'br': 213,
      'pr': 417,
      'wt': ["For Forest", 'Protag.'],
      'ex': {
        'type': "EX Skill",
        'name': "Head-Mounted Vulcan"
      }
    }, {
      'part': "torso",
      'a': 1602,
      'ma': 384,
      'sa': 384,
      'md': 1602,
      'sd': 796,
      'br': 0,
      'pr': 611,
      'wt': ["For Forest", "Protag."],
      'ex': {
        'type': "Part Traits",
        'name': "With Rifle category equipped EX Skill piercing boosted 10-28%"
      }
    }, {
      'part': 'arms',
      'a': 1181,
      'ma': 3177,
      'sa': 384,
      'md': 3997,
      'sd': 1181,
      'br': 0,
      'pr': 1028,
      'wt': ["For Forest", "Protag."],
      'ex': {
        'type': "EX Skill",
        'name': "Vertical Saber Spin"
      },
      'combo': "shield"
    }, {
      'part': "legs",
      'a': 796,
      'ma': 384,
      'sa': 384,
      'md': 1602,
      'sd': 796,
      'br': 611,
      'pr': 417,
      'wt': ['For\x20Forest', "Mass P."],
      'ex': {
        'type': "Part Traits",
        'name': "With Rifle category equipped Close Shot Attack raised 8-20%"
      }
    }, {
      'part': "backpack",
      'a': 796,
      'ma': 384,
      'sa': 384,
      'md': 1602,
      'sd': 796,
      'br': 417,
      'pr': 611,
      'wt': ["For Forest", "Mass P."],
      'ex': {
        'type': "Part Traits",
        'name': "With Technique attribute (self) Debuff EX Skill time up 4-22%"
      }
    }, {
      'part': "melee",
      'a': 384,
      'ma': 3997,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 213,
      'pr': 417,
      'wt': ["For Forest.", "Mass P."],
      'ex': {
        'type': "Part Traits",
        'name': "With Technique attribute (self) Strong Melee CRIT rate boosted 10-30%"
      },
      'name': "Beam Saber",
      'type': "Beam"
    }, {
      'part': "range",
      'a': 1181,
      'ma': 0,
      'sa': 2380,
      'md': 0,
      'sd': 0,
      'br': 417,
      'pr': 611,
      'wt': ["For Forest", "Mass P."],
      'ex': {
        'type': "Part Traits",
        'name': "Beam ranged weapon reload speed boosted 8-20%"
      },
      'name': "Beam Rifle",
      'type': "Beam"
    }]
  }, {
    'name': "Wing Gundam",
    'attribute': 'Speed',
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 797,
      'ma': 384,
      'sa': 2785,
      'md': 384,
      'sd': 384,
      'br': 418,
      'pr': 213,
      'wt': ["Transformer", "Long-Range"],
      'ex': {
        'type': "EX Skill",
        'name': "Head-Mounted Vulcan"
      }
    }, {
      'part': "torso",
      'a': 1605,
      'ma': 797,
      'sa': 797,
      'md': 797,
      'sd': 797,
      'br': 611,
      'pr': 0,
      'wt': ['Transformer', 'Protag.'],
      'ex': {
        'type': "EX Skill",
        'name': "Self-Destruct"
      }
    }, {
      'part': 'arms',
      'a': 797,
      'ma': 2785,
      'sa': 1181,
      'md': 384,
      'sd': 384,
      'br': 0,
      'pr': 0,
      'wt': ["Transformer", "Long-Range"],
      'ex': {
        'type': "Part Traits",
        'name': "When armor is 70% or less Enemy Melee Power reduced 17-30%"
      }
    }, {
      'part': 'legs',
      'a': 797,
      'ma': 797,
      'sa': 384,
      'md': 797,
      'sd': 797,
      'br': 418,
      'pr': 611,
      'wt': ["Transformer", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': "When armor is 70% Long Shot Attack raised 8-20%"
      }
    }, {
      'part': "backpack",
      'a': 797,
      'ma': 797,
      'sa': 384,
      'md': 797,
      'sd': 797,
      'br': 611,
      'pr': 418,
      'wt': ["Transformer", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': "When armor is 70% Long Shot Attack raised 8-20%"
      }
    }, {
      'part': 'melee',
      'a': 384,
      'ma': 3582,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 611,
      'pr': 418,
      'wt': ["Transformer", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': "Long Shooter Job Job Gauge increase boosted 6-17%"
      },
      'name': "Beam Saber",
      'type': "Beam"
    }, {
      'part': "range",
      'a': 384,
      'ma': 0,
      'sa': 3582,
      'md': 0,
      'sd': 0,
      'br': 418,
      'pr': 213,
      'wt': ["Transformer", "Long-Range"],
      'ex': {
        'type': "EX Skill",
        'name': 'Max\x20Output\x20Buster\x20Rifle'
      },
      'name': "Buster Rifle",
      'type': 'Beam'
    }, {
      'part': "shield",
      'a': 797,
      'ma': 797,
      'sa': 384,
      'md': 797,
      'sd': 797,
      'br': 1029,
      'pr': 0,
      'wt': ["Transformer", "Long-Range"],
      'ex': {
        'type': "EX Skill",
        'name': 'Shield\x20Bash'
      },
      'name': "Shield"
    }]
  }, {
    'name': "Wing Gundam 0 [Endless Waltz Ver.]",
    'attribute': "Speed",
    'rarity': 4,
    'sokai': 1,
    'parts': [{
      'part': "head",
      'a': 0,
      'ma': 378,
      'sa': 3538,
      'md': 551,
      'sd': 965,
      'br': 409,
      'pr': 0,
      'wt': ["Protag.", "High Firepower"],
      'ex': {
        'type': "Part Traits",
        'name': "When attacking with Beam EX Skill power boosted 30%"
      }
    }, {
      'part': "torso",
      'a': 1732,
      'ma': 719,
      'sa': 1422,
      'md': 0,
      'sd': 1354,
      'br': 671,
      'pr': 0,
      'wt': ["Protag.", "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': 'Zero\x20System'
      }
    }, {
      'part': "arms",
      'a': 1884,
      'ma': 719,
      'sa': 1165,
      'md': 551,
      'sd': 965,
      'br': 409,
      'pr': 282,
      'wt': ["Protag.", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Speed\x20attribute\x20(self)\x20Projectile\x20speed\x20boosted\x2015%'
      }
    }, {
      'part': "legs",
      'a': 965,
      'ma': 551,
      'sa': 965,
      'md': 965,
      'sd': 1354,
      'br': 282,
      'pr': 671,
      'wt': ["Protag.", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 70% or less Melee CRIT rate boosted 30%"
      }
    }, {
      'part': 'backpack',
      'a': 378,
      'ma': 551,
      'sa': 1422,
      'md': 965,
      'sd': 1354,
      'br': 671,
      'pr': 464,
      'wt': ['Protag.', "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Feather Dive"
      }
    }, {
      'part': "range",
      'a': 551,
      'ma': 0,
      'sa': 3951,
      'md': 0,
      'sd': 965,
      'br': 464,
      'pr': 282,
      'wt': ["Protag.", "High Firepower"],
      'ex': {
        'type': "EX Skill",
        'name': 'Rolling\x20Buster\x20Rifle'
      },
      'name': "Twin Buster Rifle (Coupled)",
      'type': "Beam"
    }]
  }, {
    'name': "Zaku II (Char Aznable)",
    'attribute': "Speed",
    'rarity': 3,
    'sokai': 0,
    'parts': [{
      'part': "head",
      'a': 558,
      'ma': 291,
      'sa': 1698,
      'md': 558,
      'sd': 558,
      'br': 0,
      'pr': 302,
      'wt': ["Ace Excl.", "For Space"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': 'Beam\x20Coat\x20b'
      }
    }, {
      'part': "torso",
      'a': 1140,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 0,
      'pr': 428,
      'wt': ['Ace\x20Excl.', "For Space"],
      'ex': {
        'type': "Part Traits",
        'name': "When Armor is 60% or more Debuff EX Skill effect up 1-15%"
      }
    }, {
      'part': "arms",
      'a': 558,
      'ma': 1698,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 0,
      'pr': 0,
      'wt': ['Ace\x20Excl.', "Zaku Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Fearless Charge"
      }
    }, {
      'part': "legs",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 302,
      'pr': 428,
      'wt': ["Ace Excl.", "High Mobility"],
      'ex': {
        'type': "Part Traits",
        'name': 'With\x20Speed\x20attribute\x20(self)\x20Sp.\x20Shot\x20power\x20boosted\x208-25%'
      }
    }, {
      'part': "backpack",
      'a': 558,
      'ma': 291,
      'sa': 291,
      'md': 889,
      'sd': 889,
      'br': 302,
      'pr': 428,
      'wt': ["Ace Excl.", "High Mobility"],
      'ex': {
        'type': "Part Traits",
        'name': "With Speed attribute (self) EX Skill Piercing boosted 8-22%"
      }
    }]
  }, {
    'name': "Zeong",
    'attribute': "Speed",
    'rarity': 4,
    'sokai': 0,
    'parts': [{
      'part': 'head',
      'a': 384,
      'ma': 384,
      'sa': 3181,
      'md': 382,
      'sd': 1182,
      'br': 0,
      'pr': 0,
      'wt': ["Zeon", "For Space"],
      'ex': {
        'type': "EX Skill",
        'name': "Point-Blank Shot"
      }
    }, {
      'part': 'torso',
      'a': 1606,
      'ma': 384,
      'sa': 384,
      'md': 799,
      'sd': 1606,
      'br': 290,
      'pr': 290,
      'wt': ["Zeon", 'For\x20Space'],
      'ex': {
        'type': "Part Traits",
        'name': "With Speed attribute (self) EX Skill CD reduced 20%"
      }
    }, {
      'part': "arms",
      'a': 1182,
      'ma': 799,
      'sa': 384,
      'md': 384,
      'sd': 1606,
      'br': 290,
      'pr': 290,
      'wt': ["Zeon", "For Space"],
      'ex': {
        'type': "EX Skill",
        'name': "5-Barrel Mega Particle Cannon"
      }
    }, {
      'part': "legs",
      'a': 799,
      'ma': 384,
      'sa': 384,
      'md': 799,
      'sd': 1606,
      'br': 420,
      'pr': 420,
      'wt': ["Zeon", "Long-Range"],
      'ex': {
        'type': "EX Skill",
        'name': 'Torso\x20Mega\x20Particle\x20Cannon'
      }
    }]
  }, {
    'name': "Zeta Gundam",
    'attribute': "Speed",
    'rarity': 4,
    'sokai': 1,
    'parts': [{
      'part': "head",
      'a': 969,
      'ma': 379,
      'sa': 2391,
      'md': 791,
      'sd': 791,
      'br': 468,
      'pr': 0,
      'wt': ['Transformer', "Gundam Type"],
      'ex': {
        'type': "EX Skill",
        'name': "Head-Mounted Vulcan"
      }
    }, {
      'part': "torso",
      'a': 1738,
      'ma': 379,
      'sa': 379,
      'md': 1358,
      'sd': 1358,
      'br': 675,
      'pr': 0,
      'wt': ['Transformer', "Ace Excl."],
      'ex': {
        'type': "EX Skill",
        'name': "Hyper Beam Saber"
      }
    }, {
      'part': "arms",
      'a': 969,
      'ma': 2528,
      'sa': 379,
      'md': 1358,
      'sd': 1358,
      'br': 0,
      'pr': 0,
      'wt': ["Transformer", "Gundam Type"],
      'ex': {
        'type': 'EX\x20Skill',
        'name': "Arm-Mounted Grenade Launcher"
      }
    }, {
      'part': "legs",
      'a': 969,
      'ma': 379,
      'sa': 379,
      'md': 1358,
      'sd': 1358,
      'br': 675,
      'pr': 468,
      'wt': ["Transformer", "Ace Excl."],
      'ex': {
        'type': "EX Skill",
        'name': "Saber Boomerang"
      }
    }, {
      'part': "backpack",
      'a': 969,
      'ma': 379,
      'sa': 379,
      'md': 1358,
      'sd': 1358,
      'br': 675,
      'pr': 468,
      'wt': ["Transformer", "Gundam Type"],
      'ex': {
        'type': "Part Traits",
        'name': "When attacking with Beam Shooting Power boosted 30%"
      }
    }, {
      'part': 'melee',
      'a': 969,
      'ma': 3318,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 675,
      'pr': 208,
      'wt': ["Transformer", "Close Combat"],
      'ex': {
        'type': "EX Skill",
        'name': "Cross Wave"
      },
      'name': "Beam Saber",
      'type': 'Beam'
    }, {
      'part': 'melee',
      'a': 969,
      'ma': 3318,
      'sa': 0,
      'md': 0,
      'sd': 0,
      'br': 675,
      'pr': 208,
      'wt': ["Transformer", "Long-Range"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': "With Speed attribute (self) Melee DMG Output boosted 35"
      },
      'name': "Long Beam Saber",
      'type': "Beam"
    }, {
      'part': "range",
      'a': 969,
      'ma': 0,
      'sa': 3318,
      'md': 0,
      'sd': 0,
      'br': 675,
      'pr': 208,
      'wt': ["Transformer", "Gundam Type"],
      'ex': {
        'type': 'Part\x20Traits',
        'name': 'Sp.\x20Shot\x20DMG\x20Output\x20boosted\x2035'
      },
      'name': "Beam Rifle",
      'type': "Beam"
    }, {
      'part': "range",
      'a': 969,
      'ma': 0,
      'sa': 3318,
      'md': 0,
      'sd': 0,
      'br': 675,
      'pr': 208,
      'wt': ['Transformer', "High Firepower"],
      'ex': {
        'type': "Part Traits",
        'name': "With Speed attribute (self) Enemy Shooting power reduced 30%"
      },
      'name': "Hyper Mega Launcher",
      'type': 'Beam'
    }, {
      'part': "shield",
      'a': 969,
      'ma': 0,
      'sa': 0,
      'md': 1738,
      'sd': 1738,
      'br': 878,
      'pr': 208,
      'wt': ["Transformer", "Close Combat"],
      'ex': {
        'type': "EX Skill",
        'name': "Missile Launcher"
      },
      'name': "Zeta Shield"
    }]
  }];
  const _0x4fb277 = [{
    'name': "Aina Sahalin",
    'jl': "Long-Shooter",
    'attribute': "Technique",
    'rarity': 3,
    'a': 559,
    'ma': 292,
    'sa': 1144,
    'md': 559,
    'sd': 559,
    'br': 303,
    'pr': 303,
    'wt': ['Long-Range', "Zaku Type"],
    'ex': {
      'type': "Part Traits",
      'name': "With Technique Attibute (self) Buff EX Skill effect up 15%"
    }
  }, {
    'name': "Amuro Ray",
    'jl': "Long-Shooter",
    'attribute': 'Technique',
    'rarity': 4,
    'a': 796,
    'ma': 384,
    'sa': 1602,
    'md': 796,
    'sd': 796,
    'br': 213,
    'pr': 417,
    'wt': ['Gundam\x20Type', "Federation"],
    'ex': {
      'type': "Part Traits",
      'name': "Beam ranged weapon reload speed boosted 20%"
    }
  }, {
    'name': 'Auel\x20Neider',
    'jl': "Defender",
    'attribute': "Technique",
    'rarity': 3,
    'a': 889,
    'ma': 291,
    'sa': 889,
    'md': 558,
    'sd': 558,
    'br': 126,
    'pr': 428,
    'wt': ['Amphib.', 'Mid-Range'],
    'ex': {
      'type': 'Part\x20Traits',
      'name': 'With\x20Technique\x20attribute\x20(self)\x20Debuff\x20EX\x20Skill\x20effect\x20up\x2015%'
    }
  }, {
    'name': 'Anavel\x20Gato',
    'jl': "Defender",
    'attribute': "Power",
    'rarity': 4,
    'a': 1180,
    'ma': 1180,
    'sa': 383,
    'md': 796,
    'sd': 796,
    'br': 212,
    'pr': 610,
    'wt': ["Ace Excl.", 'Zeon'],
    'ex': {
      'type': 'Part\x20Traits',
      'name': "With Power Attribute (self) All DMG ouput boosted by 35"
    }
  }, {
    'name': "Athrun Zala",
    'jl': "In-Fighter",
    'attribute': 'Speed',
    'rarity': 4,
    'a': 799,
    'ma': 1182,
    'sa': 384,
    'md': 799,
    'sd': 1182,
    'br': 612,
    'pr': 213,
    'wt': ["Transformer", "Mid-Range"],
    'ex': {
      'type': "Part Traits",
      'name': "20% chance to prevent vernier consumption when stepping"
    }
  }, {
    'name': "Bernard Wiseman",
    'jl': "In-Fighter",
    'attribute': "Technique",
    'rarity': 4,
    'a': 795,
    'ma': 795,
    'sa': 795,
    'md': 795,
    'sd': 795,
    'br': 211,
    'pr': 609,
    'wt': ["High Mobility", "Zaku Type"],
    'ex': {
      'type': "Part Traits",
      'name': 'When\x20Armor\x20is\x2060%\x20or\x20less\x20Recover\x2010\x20Armor\x20gradually'
    }
  }, {
    'name': "Cagalli Yula Athha",
    'jl': "Middle-Shooter",
    'attribute': "Speed",
    'rarity': 3,
    'a': 559,
    'ma': 294,
    'sa': 893,
    'md': 893,
    'sd': 559,
    'br': 432,
    'pr': 129,
    'wt': ["For Base", "Mid-Range"],
    'ex': {
      'type': "Part Traits",
      'name': "With Speed attribute (self) Projectile speed boosted 5-14%"
    }
  }, {
    'name': "Carozzo Ronah",
    'jl': "Defender",
    'attribute': "Power",
    'rarity': 4,
    'a': 799,
    'ma': 384,
    'sa': 384,
    'md': 799,
    'sd': 799,
    'br': 614,
    'pr': 614,
    'wt': ['High\x20Firepower', 'For\x20Computers'],
    'ex': {
      'type': "Part Traits",
      'name': "With Power attribute (self) Debuff EX Skill effect up 15%"
    }
  }, {
    'name': "Chang Wufei",
    'jl': "In-Fighter",
    'attribute': "Technique",
    'rarity': 4,
    'a': 1181,
    'ma': 1181,
    'sa': 384,
    'md': 796,
    'sd': 796,
    'br': 417,
    'pr': 417,
    'wt': ["Close Combat", 'Ace\x20Excl.'],
    'ex': {
      'type': 'Part\x20Traits',
      'name': "With Technique attribute (self) Strong Melee DMG output boosted by 8-35"
    }
  }, {
    'name': "Char Aznable",
    'jl': "Out-Fighter",
    'attribute': "Speed",
    'rarity': 4,
    'a': 795,
    'ma': 795,
    'sa': 795,
    'md': 795,
    'sd': 795,
    'br': 609,
    'pr': 211,
    'wt': ['Ace\x20Excl.', "Commander"],
    'ex': {
      'type': 'Part\x20Traits',
      'name': "With Speed attribute (self) All DMG taken reduced by 20"
    }
  }, {
    'name': "Chloe Croce",
    'jl': "Out-Fighter",
    'attribute': "Speed",
    'rarity': 3,
    'a': 559,
    'ma': 1144,
    'sa': 292,
    'md': 559,
    'sd': 559,
    'br': 303,
    'pr': 303,
    'wt': ["High Mobility", "For Forest"],
    'ex': {
      'type': "Part Traits",
      'name': 'With\x20Speed\x20attribute\x20(self)\x20Vernier\x20consumption\x20reduced\x2015%'
    }
  }, {
    'name': "Christina Mackenzie",
    'jl': 'Middle-Shooter',
    'attribute': 'Power',
    'rarity': 4,
    'a': 795,
    'ma': 382,
    'sa': 382,
    'md': 1179,
    'sd': 1179,
    'br': 609,
    'pr': 211,
    'wt': ["Close Combat", 'For\x20Urban\x20Area'],
    'ex': {
      'type': "Part Traits",
      'name': "With Power attribute (self) EX Skill piercing boosted 28%"
    }
  }, {
    'name': "Dearka Elsman",
    'jl': 'Long-Shooter',
    'attribute': 'Power',
    'rarity': 3,
    'a': 558,
    'ma': 291,
    'sa': 1142,
    'md': 558,
    'sd': 558,
    'br': 302,
    'pr': 126,
    'wt': ["Long-Range", "Support Type"],
    'ex': {
      'type': "Part Traits",
      'name': "With Power attribute (self) Shot guidance boosted 5-14%"
    }
  }, {
    'name': "Domon Kasshu",
    'jl': "In-Fighter",
    'attribute': "Power",
    'rarity': 4,
    'a': 796,
    'ma': 1753,
    'sa': 155,
    'md': 977,
    'sd': 643,
    'br': 417,
    'pr': 213,
    'wt': ['Mobile\x20Fighter', "For Urban Area"],
    'ex': {
      'type': 'Part\x20Traits',
      'name': "With Power attribute (self) All CRIT rate boosted 14%"
    }
  }, {
    'name': "Duo Maxwell",
    'jl': "In-Fighter",
    'attribute': "Speed",
    'rarity': 4,
    'a': 796,
    'ma': 1602,
    'sa': 384,
    'md': 796,
    'sd': 796,
    'br': 213,
    'pr': 417,
    'wt': ["Close Combat", "For Forest"],
    'ex': {
      'type': "Part Traits",
      'name': "With Speed attribute (self) 8-20% chance to not recoil"
    }
  }, {
    'name': "Fa Yuiry",
    'jl': "Supporter",
    'attribute': "Technique",
    'rarity': 3,
    'a': 891,
    'ma': 292,
    'sa': 891,
    'md': 558,
    'sd': 558,
    'br': 302,
    'pr': 302,
    'wt': ["Transformer", "Support Type"],
    'ex': {
      'type': "Part Traits",
      'name': "Support Job EX Skill recovery boosted 16%"
    }
  }, {
    'name': "Full Frontal",
    'jl': "Out-Fighter",
    'attribute': 'Power',
    'rarity': 4,
    'a': 384,
    'ma': 1182,
    'sa': 1182,
    'md': 799,
    'sd': 799,
    'br': 420,
    'pr': 420,
    'wt': ["Commander", "Zeon"],
    'ex': {
      'type': "Part Traits",
      'name': "While Zeon Initial EX Skill charge boosted 20%"
    }
  }, {
    'name': "Gaelio Bauduin",
    'jl': "Defender",
    'attribute': "Technique",
    'rarity': 4,
    'a': 796,
    'ma': 1602,
    'sa': 384,
    'md': 796,
    'sd': 796,
    'br': 417,
    'pr': 213,
    'wt': ['Heavy\x20Armor', "For Space"],
    'ex': {
      'type': "Part Traits",
      'name': 'When\x20Armor\x20is\x2060%\x20or\x20more\x20All\x20power\x20boosted\x2030%'
    }
  }, {
    'name': 'Gai\x20Murakumo',
    'jl': "Middle-Shooter",
    'attribute': 'Speed',
    'rarity': 4,
    'a': 796,
    'ma': 384,
    'sa': 1602,
    'md': 796,
    'sd': 796,
    'br': 417,
    'pr': 213,
    'wt': ["For Forest", "Gundam Type"],
    'ex': {
      'type': "Part Traits",
      'name': 'With\x20Speed\x20Power\x20attribute\x20(self)\x20EX\x20Skill\x20recovery\x20boosted\x2028%'
    }
  }, {
    'name': "Garrod Ran",
    'jl': "Out-Fighter",
    'attribute': "Speed",
    'rarity': 4,
    'a': 797,
    'ma': 1181,
    'sa': 1181,
    'md': 797,
    'sd': 797,
    'br': 213,
    'pr': 418,
    'wt': ["Protag.", 'Close\x20Combat'],
    'ex': {
      'type': "Part Traits",
      'name': "When Armor is 80% or less All power boosted 17-30%"
    }
  }, {
    'name': "George de Sand",
    'jl': 'Out-Fighter',
    'attribute': "Technique",
    'rarity': 4,
    'a': 795,
    'ma': 382,
    'sa': 382,
    'md': 1179,
    'sd': 1179,
    'br': 609,
    'pr': 211,
    'wt': ["Mobile Fighter", "Long-Range"],
    'ex': {
      'type': "Part Traits",
      'name': "With Technique attribute (self) EX Skill CD reduced 20%"
    }
  }, {
    'name': "Haman Karn",
    'jl': "Long-Shooter",
    'attribute': "Power",
    'rarity': 4,
    'a': 796,
    'ma': 384,
    'sa': 1602,
    'md': 796,
    'sd': 796,
    'br': 417,
    'pr': 213,
    'wt': ["Commander", 'Zeon'],
    'ex': {
      'type': "Part Traits",
      'name': 'With\x20Power\x20attribute\x20(self)\x20Job\x20Gauge\x20increase\x20boosted\x2017%'
    }
  }, {
    'name': 'Harry\x20Ord',
    'jl': 'Defender',
    'attribute': 'Speed',
    'rarity': 3,
    'a': 558,
    'ma': 1142,
    'sa': 291,
    'md': 558,
    'sd': 558,
    'br': 302,
    'pr': 126,
    'wt': ["Ace Excl.", "Close Combat"],
    'ex': {
      'type': 'Part\x20Traits',
      'name': "Beam ranged weapon magazine boosted 9-20%"
    }
  }, {
    'name': "Heine Westenfluss",
    'jl': "Defender",
    'attribute': 'Speed',
    'rarity': 3,
    'a': 561,
    'ma': 893,
    'sa': 294,
    'md': 561,
    'sd': 893,
    'br': 215,
    'pr': 215,
    'wt': ["Close Combat", "Commander"],
    'ex': {
      'type': "Part Traits",
      'name': "With Speed attribute (self) Debuff EX Skill effect up 15%"
    }
  }, {
    'name': "Johnny Ridden",
    'jl': "In-Fighter",
    'attribute': "Technique",
    'rarity': 3,
    'a': 558,
    'ma': 1142,
    'sa': 291,
    'md': 558,
    'sd': 558,
    'br': 126,
    'pr': 302,
    'wt': ["Zeon", "For Space"],
    'ex': {
      'type': "Part Traits",
      'name': "With Technique attribute (self) Buff EX Skill effect up 1-15%"
    }
  }, {
    'name': 'Judua\x20Ashta',
    'jl': "Middle-Shooter",
    'attribute': "Power",
    'rarity': 4,
    'a': 796,
    'ma': 384,
    'sa': 1602,
    'md': 796,
    'sd': 796,
    'br': 417,
    'pr': 213,
    'wt': ['Protag.', "Transformer"],
    'ex': {
      'type': "Part Traits",
      'name': "With Power attribute (self) Buff EX Skill time up 22%"
    }
  }, {
    'name': 'Jean-Luc\x20Duval',
    'jl': 'Defender',
    'attribute': "Speed",
    'rarity': 3,
    'a': 891,
    'ma': 558,
    'sa': 292,
    'md': 891,
    'sd': 558,
    'br': 430,
    'pr': 127,
    'wt': ["Zeon", "High Mobility"],
    'ex': {
      'type': "Part Traits",
      'name': "With Speed Attribute (self) Vernier Consumption reduced 15%"
    }
  }, {
    'name': "Kamille Bidan",
    'jl': "Middle-Shooter",
    'attribute': 'Speed',
    'rarity': 4,
    'a': 796,
    'ma': 796,
    'sa': 796,
    'md': 796,
    'sd': 796,
    'br': 417,
    'pr': 417,
    'wt': ["Protag.", "Close Combat"],
    'ex': {
      'type': "Part Traits",
      'name': "With Speed attribute (self) EX Skill piercing boosted 28%"
    }
  }, {
    'name': "Kayra Su",
    'jl': "Defender",
    'attribute': "Technique",
    'rarity': 3,
    'a': 889,
    'ma': 558,
    'sa': 291,
    'md': 558,
    'sd': 889,
    'br': 126,
    'pr': 428,
    'wt': ["Mid-Range", "Federation"],
    'ex': {
      'type': "Part Traits",
      'name': "With Technique attribute (self) Shot guidance boosted 14%"
    }
  }, {
    'name': 'Kira\x20Yamato',
    'jl': "Middle-Shooter",
    'attribute': "Speed",
    'rarity': 4,
    'a': 799,
    'ma': 384,
    'sa': 1184,
    'md': 1184,
    'sd': 799,
    'br': 614,
    'pr': 213,
    'wt': ['Protag.', "For Base"],
    'ex': {
      'type': "Part Traits",
      'name': 'With\x20Speed\x20attribute\x20(self)\x20EX\x20Skill\x20recovery\x20boosted\x20by\x20140'
    }
  }, {
    'name': "Kou Uraki",
    'jl': "Defender",
    'attribute': "Power",
    'rarity': 4,
    'a': 1606,
    'ma': 384,
    'sa': 384,
    'md': 799,
    'sd': 799,
    'br': 612,
    'pr': 612,
    'wt': ["Protag.", "Federation"],
    'ex': {
      'type': "Part Traits",
      'name': "With Power attribute (self) 14% chance to survive a fatal blow"
    }
  }, {
    'name': "Lacus Clyne",
    'jl': "Support",
    'attribute': "Technique",
    'rarity': 4,
    'a': 795,
    'ma': 795,
    'sa': 795,
    'md': 795,
    'sd': 795,
    'br': 211,
    'pr': 609,
    'wt': ["Commander", "For Space"],
    'ex': {
      'type': "Part Traits",
      'name': "With Technique attribute (self) EX Skill recovery boosted by 140"
    }
  }, {
    'name': "Lalah Sune",
    'jl': "Support",
    'attribute': "Technique",
    'rarity': 4,
    'a': 799,
    'ma': 384,
    'sa': 1184,
    'md': 1184,
    'sd': 799,
    'br': 614,
    'pr': 213,
    'wt': ["Long-Range", "Ace Excl."],
    'ex': {
      'type': "Part Traits",
      'name': "With Technique attribute (self) Debuff EX Skill effect up 22%"
    }
  }, {
    'name': "Lila Milla Rira",
    'jl': "Middle-Shooter",
    'attribute': "Power",
    'rarity': 3,
    'a': 292,
    'ma': 891,
    'sa': 891,
    'md': 559,
    'sd': 559,
    'br': 303,
    'pr': 303,
    'wt': ["Federation", "For Space"],
    'ex': {
      'type': "Part Traits",
      'name': 'With\x20Power\x20attribute\x20(self)\x20Projectile\x20speed\x20boosted\x2014%'
    }
  }, {
    'name': "Lockon Stratos",
    'jl': "Long-Shooter",
    'attribute': "Technique",
    'rarity': 4,
    'a': 799,
    'ma': 384,
    'sa': 1606,
    'md': 799,
    'sd': 799,
    'br': 420,
    'pr': 420,
    'wt': ['High\x20Firepower', "Long-Range"],
    'ex': {
      'type': 'Part\x20Traits',
      'name': "With Technique attribute (self) Long Shot Attack raised 20%"
    }
  }, {
    'name': "Louise Halevy",
    'jl': "Defender",
    'attribute': "Power",
    'rarity': 3,
    'a': 1144,
    'ma': 292,
    'sa': 292,
    'md': 558,
    'sd': 558,
    'br': 430,
    'pr': 127,
    'wt': ['Support\x20Type', "For Space"],
    'ex': {
      'type': "Part Traits",
      'name': "With Power attribute (self) Enemy All power reduced 13%"
    }
  }, {
    'name': 'Lowe\x20Guele',
    'jl': "In-Fighter",
    'attribute': "Speed",
    'rarity': 4,
    'a': 1180,
    'ma': 1180,
    'sa': 383,
    'md': 796,
    'sd': 796,
    'br': 212,
    'pr': 610,
    'wt': ["Protag.", "High Firepower"],
    'ex': {
      'type': "Part Traits",
      'name': "With Speed attribute (self) All CRIT Rate boosted 14%"
    }
  }, {
    'name': "Lunamaria Hawke",
    'jl': "Long-Shooter",
    'attribute': "Technique",
    'rarity': 3,
    'a': 558,
    'ma': 291,
    'sa': 1142,
    'md': 558,
    'sd': 558,
    'br': 302,
    'pr': 125,
    'wt': ["Zeon", "Zaku Type"],
    'ex': {
      'type': "Part Traits",
      'name': "With Technique attribute (self) Long Shot Attack raised 14%"
    }
  }, {
    'name': "Mikazuki Augus",
    'jl': "Defender",
    'attribute': "Power",
    'rarity': 4,
    'a': 384,
    'ma': 1182,
    'sa': 1182,
    'md': 799,
    'sd': 799,
    'br': 420,
    'pr': 420,
    'wt': ["Protag.", 'For\x20Desert'],
    'ex': {
      'type': "Part Traits",
      'name': "With Power attribute (self) Initial EX Skill charge boosted 20%"
    }
  }, {
    'name': "Mr. Bushido",
    'jl': 'In-Fighter',
    'attribute': "Power",
    'rarity': 3,
    'a': 558,
    'ma': 1142,
    'sa': 291,
    'md': 558,
    'sd': 558,
    'br': 126,
    'pr': 302,
    'wt': ['Close\x20Combat', "High Mobility"],
    'ex': {
      'type': "Part Traits",
      'name': "With Power attribute (self) EX Skill CD reduced 4-15%"
    }
  }, {
    'name': 'Nena\x20Trinity',
    'jl': 'Supporter',
    'attribute': "Speed",
    'rarity': 3,
    'a': 891,
    'ma': 558,
    'sa': 292,
    'md': 891,
    'sd': 558,
    'br': 127,
    'pr': 430,
    'wt': ["Support Type", 'Gundam\x20Type'],
    'ex': {
      'type': "Part Traits",
      'name': 'With\x20Speed\x20attribute\x20(self)\x20EX\x20Skill\x20recovery\x20boosted\x2016%'
    }
  }, {
    'name': "Neo Roanoke",
    'jl': "Middle-Shooter",
    'attribute': "Speed",
    'rarity': 4,
    'a': 797,
    'ma': 1181,
    'sa': 1181,
    'md': 797,
    'sd': 797,
    'br': 418,
    'pr': 213,
    'wt': ["Commander", "For Space"],
    'ex': {
      'type': "Part Traits",
      'name': "With Speed attribute (self) 14% chance to survive a fatal blow"
    }
  }, {
    'name': "Paptimus Scirocco",
    'jl': "Out-Fighter",
    'attribute': "Technique",
    'rarity': 4,
    'a': 1180,
    'ma': 1180,
    'sa': 383,
    'md': 796,
    'sd': 796,
    'br': 212,
    'pr': 610,
    'wt': ["Transformer", "Commander"],
    'ex': {
      'type': "Part Traits",
      'name': "With Technique attribute (self) Shot guidance boosted 14%"
    }
  }, {
    'name': "Quatre Raberba Winner",
    'jl': "Support",
    'attribute': "Speed",
    'rarity': 3,
    'a': 558,
    'ma': 291,
    'sa': 291,
    'md': 889,
    'sd': 889,
    'br': 126,
    'pr': 428,
    'wt': ["For Base", "For Desert"],
    'ex': {
      'type': "Part Traits",
      'name': 'With\x20Speed\x20Attribute\x20(self)\x20Enemy\x20All\x20power\x20reduced\x2013%'
    }
  }, {
    'name': "Quattro Bajeena",
    'jl': "Middle-Shooter",
    'attribute': "Speed",
    'rarity': 4,
    'a': 797,
    'ma': 1181,
    'sa': 1181,
    'md': 797,
    'sd': 797,
    'br': 213,
    'pr': 418,
    'wt': ["Commander", "Ace Excl."],
    'ex': {
      'type': "Part Traits",
      'name': 'With\x20Speed\x20attribute\x20(self)\x20All\x20DMG\x20output\x20boosted\x20by\x2035'
    }
  }, {
    'name': "Rau Le Creuset",
    'jl': "Long-Shooter",
    'attribute': "Technique",
    'rarity': 4,
    'a': 1181,
    'ma': 384,
    'sa': 1181,
    'md': 796,
    'sd': 796,
    'br': 611,
    'pr': 213,
    'wt': ["Commander", "Ace Excl."],
    'ex': {
      'type': "Part Traits",
      'name': "With Technique attribute (self) Buff EX Skill time up 22%"
    }
  }, {
    'name': "Rey Za Burrel",
    'jl': 'Middle-Shooter',
    'attribute': "Speed",
    'rarity': 3,
    'a': 559,
    'ma': 294,
    'sa': 893,
    'md': 893,
    'sd': 559,
    'br': 303,
    'pr': 303,
    'wt': ["Ace Excl.", "Mid-Range"],
    'ex': {
      'type': "Part Traits",
      'name': "All ranged weapon magazine boosted 14%"
    }
  }, {
    'name': 'Sai\x20Saici',
    'jl': "Out-Fighter",
    'attribute': "Technique",
    'rarity': 4,
    'a': 796,
    'ma': 1602,
    'sa': 384,
    'md': 796,
    'sd': 796,
    'br': 417,
    'pr': 213,
    'wt': ['Mobile\x20Fighter', "High Mobility"],
    'ex': {
      'type': "Part Traits",
      'name': "Out-Fighter Job EX Skill CD reduced 20%"
    }
  }, {
    'name': "Sarah Zabiarov",
    'jl': 'Supporter',
    'attribute': "Speed",
    'rarity': 3,
    'a': 558,
    'ma': 291,
    'sa': 291,
    'md': 889,
    'sd': 889,
    'br': 428,
    'pr': 126,
    'wt': ["Mid-Range", "Support Type"],
    'ex': {
      'type': "Part Traits",
      'name': "With Speed attribute (self) Debuff EX Skill effect up 15%"
    }
  }, {
    'name': 'Setsuna\x20F.\x20Seiei',
    'jl': "In-Fighter",
    'attribute': "Speed",
    'rarity': 4,
    'a': 796,
    'ma': 1602,
    'sa': 384,
    'md': 796,
    'sd': 796,
    'br': 417,
    'pr': 213,
    'wt': ["Protag.", "Gundam Type"],
    'ex': {
      'type': "Part Traits",
      'name': 'While\x20Gundam\x20Type\x20Buff\x20EX\x20Skill\x20effect\x20up\x2022%'
    }
  }, {
    'name': "Seabook Arno",
    'jl': "Middle-Shooter",
    'attribute': 'Technique',
    'rarity': 4,
    'a': 796,
    'ma': 384,
    'sa': 1602,
    'md': 796,
    'sd': 796,
    'br': 417,
    'pr': 213,
    'wt': ["Protag.", "For Urban Area"],
    'ex': {
      'type': 'Part\x20Traits',
      'name': "With Technique attribute (self) Enemy All power reduced 18%"
    }
  }, {
    'name': "Shiho Hahnenfuss",
    'jl': "Long-Shooter",
    'attribute': 'Speed',
    'rarity': 3,
    'a': 558,
    'ma': 291,
    'sa': 1142,
    'md': 558,
    'sd': 558,
    'br': 302,
    'pr': 126,
    'wt': ["Long-Range", 'Ace\x20Excl.'],
    'ex': {
      'type': "Part Traits",
      'name': "All range weapon magazine boosted 14%"
    }
  }, {
    'name': 'Shin\x20Asuka',
    'jl': "Out-Fighter",
    'attribute': "Power",
    'rarity': 4,
    'a': 797,
    'ma': 1181,
    'sa': 1181,
    'md': 797,
    'sd': 797,
    'br': 418,
    'pr': 213,
    'wt': ["High Mobility", "Protag."],
    'ex': {
      'type': "Part Traits",
      'name': "Initial EX Skill charge boosted 15%"
    }
  }, {
    'name': 'Shiro\x20Amada',
    'jl': "Out-Fighter",
    'attribute': "Power",
    'rarity': 4,
    'a': 1180,
    'ma': 1180,
    'sa': 383,
    'md': 796,
    'sd': 796,
    'br': 610,
    'pr': 212,
    'wt': ["For Forest", "For Desert"],
    'ex': {
      'type': "Part Traits",
      'name': "With Power attribute (self) Enemy Shooting power reduced 30%"
    }
  }, {
    'name': 'Stella\x20Loussier',
    'jl': "Out-Fighter",
    'attribute': "Speed",
    'rarity': 3,
    'a': 558,
    'ma': 891,
    'sa': 891,
    'md': 558,
    'sd': 558,
    'br': 127,
    'pr': 302,
    'wt': ["Transformer", "Close Combat"],
    'ex': {
      'type': "Part Traits",
      'name': "With Speed attribute (self) Job Gauge increase boosted 13%"
    }
  }, {
    'name': "Sven Cal Bayang",
    'jl': "Out-Fighter",
    'attribute': 'Speed',
    'rarity': 3,
    'a': 889,
    'ma': 889,
    'sa': 291,
    'md': 558,
    'sd': 558,
    'br': 302,
    'pr': 302,
    'wt': ["High Mobility", "For Space"],
    'ex': {
      'type': 'Part\x20Traits',
      'name': "With Speed attribute (self) Initial EX Skill charge boosted 3-12%"
    }
  }, {
    'name': 'Trowa\x20Barton',
    'jl': "Middle-Shooter",
    'attribute': 'Technique',
    'rarity': 3,
    'a': 891,
    'ma': 292,
    'sa': 891,
    'md': 558,
    'sd': 558,
    'br': 302,
    'pr': 302,
    'wt': ["For Base", "High Firepower"],
    'ex': {
      'type': "Part Traits",
      'name': "All ranged weapon magazine boosted 5-14%"
    }
  }, {
    'name': "Uso Ewin",
    'jl': "Out-Fighter",
    'attribute': "Technique",
    'rarity': 4,
    'a': 795,
    'ma': 795,
    'sa': 795,
    'md': 795,
    'sd': 795,
    'br': 609,
    'pr': 211,
    'wt': ["Protag.", 'For\x20Forest'],
    'ex': {
      'type': 'Part\x20Traits',
      'name': "With Technique Attribute (self) Buff EX Skill time up 22%"
    }
  }, {
    'name': "Zechs Marquise",
    'jl': "In-Fighter",
    'attribute': "Speed",
    'rarity': 4,
    'a': 795,
    'ma': 795,
    'sa': 795,
    'md': 795,
    'sd': 795,
    'br': 211,
    'pr': 609,
    'wt': ["High Mobility", "Commander"],
    'ex': {
      'type': "Part Traits",
      'name': "With Speed attribute (self) Vernier recovery rate boosted 20%"
    }
  }];
  const _0x2a8c21 = [{
    'name': "Armor[+500]",
    'a': 500
  }, {
    'name': "Armor[+1000]",
    'a': 1000
  }, {
    'name': "Armor[+1500]",
    'a': 1500
  }, {
    'name': "MeleeAtk[+500]",
    'ma': 500
  }, {
    'name': "MeleeAtk[+1000]",
    'ma': 1000
  }, {
    'name': "MeleeAtk[+1500]",
    'ma': 1500
  }, {
    'name': "ShotAtk[+500]",
    'sa': 500
  }, {
    'name': "ShotAtk[+1000]",
    'sa': 1000
  }, {
    'name': "ShotAtk[+1500]",
    'sa': 1500
  }, {
    'name': "MeleeDef[+500]",
    'md': 500
  }, {
    'name': 'MeleeDef[+1000]',
    'md': 1000
  }, {
    'name': "MeleeDef[+1500]",
    'md': 1500
  }, {
    'name': 'ShotDef[+500]',
    'sd': 500
  }, {
    'name': "ShotDef[+1000]",
    'sd': 1000
  }, {
    'name': "ShotDef[+1500]",
    'sd': 1500
  }, {
    'name': "BeamRes[+500]",
    'br': 500
  }, {
    'name': "BeamRes[+1000]",
    'br': 1000
  }, {
    'name': "BeamRes[+1500]",
    'br': 1500
  }, {
    'name': 'PhysRes[+500]',
    'pr': 500
  }, {
    'name': "PhysRes[+1000]",
    'pr': 1000
  }, {
    'name': "PhysRes[+1500]",
    'pr': 1500
  }, {
    'name': "DualAtk[+300]",
    'ma': 300,
    'sa': 300
  }, {
    'name': "DualAtk[+650]",
    'ma': 650,
    'sa': 650
  }, {
    'name': "DualAtk[+1000]",
    'ma': 1000,
    'sa': 1000
  }];
  const _0x37a31d = _0x1295f8 => {
    return _0x1295f8.replace(/([A-Z])/g, _0x3e9748 => '-' + _0x3e9748[0].toLowerCase());
  };
  const _0x413fab = _0x3e210b => {
    if (_0x3e210b.dataset) {
      for (let _0xe82f2e in _0x3e210b.dataset) {
        _0x3e210b.removeAttribute("data-" + _0x37a31d(_0xe82f2e));
      }
    }
  };
  const _0x2726e4 = _0x5e36eb => {
    return Math.round(_0x5e36eb * 1000000000000) / 1000000000000;
  };
  const _0x3a7ca7 = ["gbgwcalculator", '.', "github", '.', 'io'];

  class _0x56ad8d {
    constructor() {
      this.container = document.querySelector(".js-container");
      if (this.container) {
        this._generateHTML();
      }
    }

    _generateHTML() {
      this._generate();
    }

    _createElement(_0x29ce9c, _0x76d216) {
      const _0x184486 = document.createElement(_0x29ce9c.el);
      if ("class" in _0x29ce9c) {
        if (Array.isArray(_0x29ce9c.class)) {
          _0x29ce9c.class.forEach(_0x3fa985 => _0x184486.classList.add(_0x3fa985));
        } else if (typeof _0x29ce9c.class === "string") {
          _0x184486.classList.add(_0x29ce9c.class);
        }
      }
      if ('text' in _0x29ce9c) {
        _0x184486.textContent = _0x29ce9c.text;
      }
      if ("type" in _0x29ce9c) {
        _0x184486.type = _0x29ce9c.type;
      }
      if ("readOnly" in _0x29ce9c) {
        _0x184486.readOnly = _0x29ce9c.readOnly;
      }
      if ("placeholder" in _0x29ce9c) {
        _0x184486.placeholder = _0x29ce9c.placeholder;
      }
      if ('data' in _0x29ce9c && Array.isArray(_0x29ce9c.data)) {
        _0x29ce9c.data.forEach(_0x567e60 => {
          _0x184486.dataset[_0x567e60.name] = _0x567e60.value;
        });
      }
      if ("children" in _0x29ce9c && Array.isArray(_0x29ce9c.children)) {
        _0x29ce9c.children.forEach(_0x47bc6e => {
          this._createElement(_0x47bc6e, _0x184486);
        });
      }
      if (_0x76d216 && _0x76d216.append) {
        _0x76d216.append(_0x184486);
      }
    }

    _generate() {
      const _0x3f63b0 = [this._wordTags(), this._partTrait(), this._info(), this._parts(), this._partList()];
      _0x3f63b0.forEach(_0x398ed6 => {
        this._createElement(_0x398ed6, this.container);
      });
    }

    _info() {
      return {
        'el': 'div',
        'class': "info",
        'children': [{
          'el': 'h3',
          'text': "Parameters"
        }, ...this._paramChildren(), {
          'el': 'h3',
          'text': 'Active\x20Word\x20Tag'
        }, {
          'el': "div",
          'class': ["row", "active-word-tag-list", "js-active-wt"]
        }, {
          'el': 'h3',
          'class': ["part-name", "js-part-name"]
        }, {
          'el': 'h3',
          'text': "Parameters",
          'class': "bg-red"
        }, ...this._paramChildren("part"), {
          'el': 'h3',
          'text': "Word Tag",
          'class': 'bg-red'
        }, {
          'el': "div",
          'class': ["row", "part-word-tag-list", "js-part-wt"]
        }, {
          'el': 'h3',
          'text': "Traits / EX Skill",
          'class': "bg-red"
        }, {
          'el': 'div',
          'class': ['row', 'part-skill-trait', "js-part-skill-trait"]
        }]
      };
    }

    _paramChildren(_0x5d5fe9) {
      if (Array.isArray(_0x53b439)) {
        let _0x589536 = "js-total-",
            _0x8985e3 = "alt-bg--blue";
        if (_0x5d5fe9 && _0x5d5fe9 == "part") {
          _0x589536 = 'js-part-total-';
          _0x8985e3 = "alt-bg--red";
        }
        return _0x53b439.map(_0x4480ea => {
          return {
            'el': 'div',
            'class': ["row", _0x8985e3],
            'children': [{
              'el': 'div',
              'children': [{
                'el': "label",
                'text': _0x4480ea.name
              }, {
                'el': "span",
                'class': ['info__total', 'float-right', _0x589536 + _0x4480ea.slug],
                'text': 0
              }]
            }]
          };
        });
      }
    }

    _wordTags() {
      return {
        'el': "div",
        'class': "word-tags",
        'children': [{
          'el': 'h3',
          'text': "Word Tags"
        }, ..._0x904226.map(_0x489d45 => {
          return {
            'el': "div",
            'class': ["row", "height-50", "alt-bg"],
            'children': [{
              'el': "span",
              'class': "js-wt-" + _0x489d45
            }]
          };
        })]
      };
    }

    _partTrait() {
      return {
        'el': "div",
        'class': "part-trait-ex-skill",
        'children': [{
          'el': 'h3',
          'text': "Part Traits / EX Skill"
        }, ..._0x904226.map(_0x144775 => {
          return {
            'el': "div",
            'class': ["row", 'height-50', "alt-bg"],
            'children': [{
              'el': "span",
              'class': ["part-trait-ex-skill__text", 'js-skill-trait-' + _0x144775]
            }]
          };
        })]
      };
    }

    _parts() {
      return {
        'el': "div",
        'class': "parts",
        'children': [{
          'el': 'h3',
          'text': "Parts"
        }, ...this._partsChildren(), {
          'el': 'h3',
          'text': 'Gears'
        }, ...this._gearsChildren(), this._attributeTally()]
      };
    }

    _partsChildren() {
      if (Array.isArray(_0x904226)) {
        return _0x904226.map(_0x10be5c => {
          return {
            'el': "div",
            'class': ['row', 'alt-bg', "height-50", 'js-part-cont'],
            'children': [{
              'el': "div",
              'children': [{
                'el': "label",
                'text': _0x10be5c != "backpack" ? _0x10be5c : "back"
              }, {
                'el': 'input',
                'type': 'text',
                'class': 'js-input-' + _0x10be5c,
                'readOnly': !![]
              }]
            }, {
              'el': "div",
              'children': [{
                'el': 'div',
                'class': ["parts-marks", "js-marks-" + _0x10be5c]
              }]
            }]
          };
        });
      }
    }

    _gearsChildren() {
      if (Array.isArray(_0x31ba3e)) {
        return _0x31ba3e.map((_0x41e29f, _0x2f8294) => {
          return {
            'el': 'div',
            'class': ["row", "height-50", "js-part-cont"],
            'children': [{
              'el': "div",
              'children': [{
                'el': 'label',
                'text': "Slot " + (_0x2f8294 + 1)
              }, {
                'el': "input",
                'type': "text",
                'class': "js-input-" + _0x41e29f,
                'readOnly': !![]
              }]
            }]
          };
        });
      }
    }

    _attributeTally() {
      return {
        'el': "div",
        'class': "attribute-tally",
        'children': _0x41368a.map(_0x5c93f7 => {
          return {
            'el': "label",
            'text': '[' + _0x5c93f7.charAt(0) + ']\x20',
            'children': [{
              'el': "span",
              'class': "js-tally-" + _0x5c93f7.charAt(0).toLowerCase(),
              'text': 0
            }]
          };
        })
      };
    }

    _partList() {
      return {
        'el': "div",
        'class': "part-list",
        'children': [{
          'el': "input",
          'type': "text",
          'placeholder': 'Search\x20Part/Pilot',
          'class': ['part-list__search', "js-search-part"]
        }, {
          'el': 'h3',
          'text': "Part List",
          'children': [{
            'el': "span",
            'text': "Remove",
            'class': ["part-list__remove", "js-remove-part"]
          }]
        }, {
          'el': "div",
          'class': ["part-list__list", "js-part-list"]
        }]
      };
    }
  }

  const _0x2fc6b6 = window.location.hostname;

  class _0x5c08c4 {
    constructor() {
      this.wordTagsTally = {};
      this.parametersTotal = {};
      this.attributesTally = {
        'p': 0,
        't': 0,
        's': 0
      };
      this.inputs = {};
      this.comboParts = [];
      this.parts = {};
      this.partList = document.querySelector(".js-part-list");
      this.partNameCont = document.querySelector('.js-part-name');
      this.partParamCont = {};
      this.partWTCont = document.querySelector(".js-part-wt");
      this.partSkillTraitCont = document.querySelector(".js-part-skill-trait");
      this.partCont = {};
      this.filters = {
        'attr': '',
        'wt1': '',
        'wt2': '',
        'pt': ''
      };
      this.applyMapBonus = ![];
      this.searchPart = '';
      this.sort = '';
      this.currentPart = '';
    }

    init() {
      _0x53b439.forEach(_0x5b3bf9 => {
        this.partParamCont[_0x5b3bf9.slug] = document.querySelector(".js-part-total-" + _0x5b3bf9.slug);
      });
      _0x3bb2a7.forEach(_0x4cb9e6 => {
        this.inputs[_0x4cb9e6] = document.querySelector(".js-input-" + _0x4cb9e6);
        this.parts[_0x4cb9e6] = [];
        this.partCont[_0x4cb9e6] = this.inputs[_0x4cb9e6].closest(".js-part-cont");
      });
      this._parseParts();
      this._initInputClick();
      this._initFilters();
      this._initSort();
      this._initApplyMapBonus();
      this._initSearchPart();
      this._initRemove();
    }

    _parseParts() {
      if (_0x3bb2a7 && Array.isArray(_0x3bb2a7)) {
        if (_0x1801fd && Array.isArray(_0x1801fd)) {
          _0x1801fd.forEach(_0x38941c => {
            if (_0x38941c.parts && Array.isArray(_0x38941c.parts)) {
              const _0xf9646f = {
                'ms': _0x38941c.name
              };
              for (let _0x27b8ee in _0x38941c) {
                if (_0x38941c.hasOwnProperty(_0x27b8ee) && _0x27b8ee !== 'parts' && _0x27b8ee !== 'name') {
                  _0xf9646f[_0x27b8ee] = _0x38941c[_0x27b8ee];
                }
              }
              _0x38941c.parts.forEach(_0x5ea905 => {
                const _0x70365c = {
                  ..._0xf9646f
                };
                for (let _0xc74031 in _0x5ea905) {
                  if (_0x5ea905.hasOwnProperty(_0xc74031)) {
                    _0x70365c[_0xc74031] = _0x5ea905[_0xc74031];
                  }
                }
                if (_0x5ea905.part) {
                  this.parts[_0x5ea905.part].push(_0x70365c);
                }
              });
            }
          });
        }
        if (_0x4fb277 && Array.isArray(_0x4fb277)) {
          _0x4fb277.forEach(_0x3dac64 => {
            const _0x246f90 = {
              'part': "pilot"
            };
            for (let _0x4812e5 in _0x3dac64) {
              if (_0x3dac64.hasOwnProperty(_0x4812e5)) {
                _0x246f90[_0x4812e5] = _0x3dac64[_0x4812e5];
              }
            }
            this.parts.pilot.push(_0x246f90);
          });
        }
        if (_0x2a8c21 && Array.isArray(_0x2a8c21)) {
          _0x2a8c21.forEach(_0x58b1a4 => {
            const _0x4e73da = {
              'part': 'gear-s1ot1'
            };
            for (let _0x1e8dc9 in _0x58b1a4) {
              if (_0x58b1a4.hasOwnProperty(_0x1e8dc9)) {
                _0x4e73da[_0x1e8dc9] = _0x58b1a4[_0x1e8dc9];
              }
            }
            this.parts['gear-s1ot1'].push(_0x4e73da);
          });
        }
      }
    }

    _initInputClick() {
      const _0x1069d7 = this.inputs;
      for (let _0x502079 in _0x1069d7) {
        if (_0x1069d7.hasOwnProperty(_0x502079) && _0x1069d7[_0x502079]) {
          _0x1069d7[_0x502079].addEventListener("click", _0x4a2fc8 => {
            this.currentPart = _0x502079;
            this._setSelectedPart(_0x502079);
            this._showPartList(_0x502079);
            this._displayPartInfo(_0x4a2fc8.currentTarget);
          });
        }
      }
    }

    _checkFilter(_0x4851f6) {
      const _0xb703b4 = this.filters;
      if (this.filters.attr && _0x4851f6.attribute && _0x4851f6.attribute != this.filters.attr) {
        return ![];
      }
      if (this.filters.wt1 && _0x4851f6.wt && _0x4851f6.wt.indexOf(this.filters.wt1) < 0) {
        return ![];
      }
      if (this.filters.wt2 && _0x4851f6.wt && _0x4851f6.wt.indexOf(this.filters.wt2) < 0) {
        return ![];
      }
      if (this.filters.pt && _0x4851f6.ex && _0x4851f6.ex.name && !new RegExp(this.filters.pt, 'i').test(_0x4851f6.ex.name)) {
        return ![];
      }
      if (this.searchPart.trim().length > 0) {
        const _0xa8a391 = (_0x4851f6.ms ? _0x4851f6.ms : '') + '\x20' + (_0x4851f6.name ? _0x4851f6.name : '');
        if (!new RegExp(this.searchPart.trim(), 'i').test(_0xa8a391)) {
          return ![];
        }
      }
      return !![];
    }

    _showPartList(_0x1d2ca4) {
      if (this.partList && _0x1801fd && Array.isArray(_0x1801fd)) {
        this.partList.innerHTML = '';
        if (this.parts && this.parts[_0x1d2ca4] && Array.isArray(this.parts[_0x1d2ca4])) {
          const _0x215a6e = [...this.parts[_0x1d2ca4]],
              _0x1830c9 = this.sort;
          if (_0x1830c9 && _0x31ba3e.indexOf(_0x1d2ca4) < 0) {
            _0x215a6e.sort((_0x27c4a9, _0x2236f6) => {
              return _0x27c4a9[_0x1830c9] > _0x2236f6[_0x1830c9] ? -1 : 1;
            });
          }
          _0x215a6e.forEach(_0x50575c => {
            if (!this._checkFilter(_0x50575c)) {
              return;
            }
            const _0x4904b0 = document.createElement("div");
            _0x4904b0.textContent = _0x4904b0.dataset.partname = (_0x50575c.attribute ? '[' + _0x50575c.attribute.charAt(0) + ']' : '') + '\x20' + (_0x50575c.ms ? _0x50575c.ms + (_0x50575c.name ? '\x20(' + _0x50575c.name + ')' : '') : _0x50575c.name) + (_0x50575c.jl ? '\x20(' + _0x50575c.jl + ')' : '');
            _0x4904b0.classList.add("part-list__item");
            for (let _0x18f24a in _0x50575c) {
              _0x4904b0.dataset[_0x18f24a] = _0x50575c[_0x18f24a] instanceof Object ? JSON.stringify(_0x50575c[_0x18f24a]) : _0x50575c[_0x18f24a];
            }
            _0x4904b0.addEventListener("click", _0x3ea38a => {
              const _0x527eed = _0x3ea38a.currentTarget;
              let _0x2c9ba9, _0x35cb48;
              if (_0x527eed.dataset.part && this.inputs[_0x527eed.dataset.part]) {
                _0x35cb48 = _0x527eed.dataset.part;
                _0x2c9ba9 = this.inputs[_0x35cb48];
                _0x2c9ba9.value = _0x2c9ba9.title = _0x527eed.dataset.partname;
                _0x413fab(_0x2c9ba9);
                Object.assign(_0x2c9ba9.dataset, _0x527eed.dataset);
                this._deleteMarks(_0x35cb48);
                if (["pilot", "gear-s1ot1"].indexOf(_0x35cb48) === -1) {
                  this._addMarks();
                }
                this._displayPartInfo(_0x527eed);
              }
              this._calculate(_0x35cb48);
            });
            if (screen.width >= 992) {
              _0x4904b0.addEventListener("mouseover", _0x4867b5 => {
                this._displayPartInfo(_0x4867b5.currentTarget);
              });
            }
            this.partList.appendChild(_0x4904b0);
          });
        }
      }
    }

    _setSelectedPart(_0x58b69c) {
      const _0x3daabe = "selected-part";
      Array.prototype.slice.call(document.querySelectorAll(".selected-part")).forEach(_0x5ae2c5 => {
        _0x5ae2c5.classList.remove(_0x3daabe);
      });
      if (this.partCont[_0x58b69c]) {
        this.partCont[_0x58b69c].classList.add(_0x3daabe);
      }
    }

    _calculate(_0xc4448b) {
      this._toggleComboPart(_0xc4448b);
      this._displaySkillTraits(_0xc4448b);
      this._loopThroughInput();
      this._displayPartsWordTags();
    }

    _toggleComboPart(_0x116310) {
      if (this.inputs[_0x116310]) {
        const _0x361c79 = this.inputs[_0x116310];
        if (Array.isArray(this.comboParts)) {
          for (let _0x251fce = 0; _0x251fce < this.comboParts.length; _0x251fce++) {
            const _0x3defe6 = this.comboParts[_0x251fce];
            if (_0x3defe6.part && _0x3defe6.combo && _0x361c79.dataset.part) {
              if (_0x3defe6.part == _0x361c79.dataset.part) {
                document.querySelector('.js-input-' + _0x3defe6.combo).disabled = ![];
                this.comboParts.splice(_0x251fce, 1);
                break;
              } else if (_0x361c79.dataset.combo && _0x361c79.dataset.combo == _0x3defe6.combo) {
                this._clearParts(_0x3defe6.part);
                document.querySelector(".js-input-" + _0x3defe6.combo).disabled = ![];
                this.comboParts.splice(_0x251fce, 1);
                break;
              }
            }
          }
        }
        if (_0x361c79.dataset.combo && _0x361c79.dataset.part) {
          this._clearParts(_0x361c79.dataset.combo);
          this.comboParts.push({
            'part': _0x361c79.dataset.part,
            'combo': _0x361c79.dataset.combo
          });
          document.querySelector(".js-input-" + _0x361c79.dataset.combo).disabled = !![];
        }
      }
    }

    _displaySkillTraits(_0x1df906) {
      if (this.inputs[_0x1df906]) {
        const _0x361ba6 = this.inputs[_0x1df906];
        let _0x5b7b96, _0x36e125;
        if (_0x361ba6 && _0x361ba6.dataset.part && _0x361ba6.dataset.ex) {
          _0x36e125 = document.querySelector(".js-skill-trait-" + _0x361ba6.dataset.part), _0x5b7b96 = JSON.parse(_0x361ba6.dataset.ex);
          if (_0x5b7b96.type && _0x5b7b96.name && _0x36e125) {
            _0x36e125.textContent = _0x5b7b96.name;
          }
        } else {
          this._clearSkillTrait(_0x1df906);
        }
      }
    }

    _clearSkillTrait(_0x527252) {
      if (_0x527252 && document.querySelector(".js-skill-trait-" + _0x527252)) {
        document.querySelector('.js-skill-trait-' + _0x527252).textContent = '';
      }
    }

    _loopThroughInput() {
      const _0x56a217 = this.inputs;
      this._resetWordTagTally();
      this._resetParameters();
      this._resetAttributesTally();
      console.log("--------------------");
      for (let _0x5397a8 in _0x56a217) {
        if (_0x56a217.hasOwnProperty(_0x5397a8) && this.inputs[_0x5397a8]) {
          const _0x42fd10 = this.inputs[_0x5397a8];
          if (_0x42fd10) {
            this._tallyWordTags(_0x42fd10);
            this._calculateParameters(_0x42fd10);
            this._tallyAttributes(_0x42fd10);
          }
        }
      }
      this._displayWordTagsTally();
      this._displayParametersTotal();
      this._displayAttributesTally();
    }

    _resetWordTagTally() {
      this.wordTagsTally = {};
    }

    _tallyWordTags(_0xe1b79d) {
      if (_0xe1b79d && _0xe1b79d.dataset.wt) {
        const _0xefb0db = JSON.parse(_0xe1b79d.dataset.wt),
            _0x4b1bfa = _0xe1b79d.dataset.combo ? 2 : 1;
        if (Array.isArray(_0xefb0db)) {
          _0xefb0db.forEach(_0x2b7116 => {
            this.wordTagsTally[_0x2b7116] = _0x2b7116 in this.wordTagsTally ? this.wordTagsTally[_0x2b7116] + _0x4b1bfa : _0x4b1bfa;
          });
        }
      }
    }

    _displayWordTagsTally() {
      const _0x15ee90 = document.querySelector('.js-active-wt');
      _0x15ee90.innerHTML = '';
      for (let _0x46b5d7 in this.wordTagsTally) {
        if (this.wordTagsTally[_0x46b5d7] >= _0x74a807) {
          const _0x5c274e = document.createElement("div");
          _0x5c274e.textContent = _0x46b5d7;
          _0x15ee90.appendChild(_0x5c274e);
        }
      }
      console.log("this.wordTagsTally", this.wordTagsTally);
    }

    _resetParameters() {
      this.parametersTotal = {};
      _0x53b439.forEach(_0xcf7926 => {
        if ("slug" in _0xcf7926) {
          this.parametersTotal[_0xcf7926.slug] = 0;
        }
      });
    }

    _calculateParameters(_0x5012d6) {
      if (_0x5012d6 && _0x5012d6.dataset.part) {
        const _0x359b68 = this._getMarkMultiplier(_0x5012d6.dataset.part);
        _0x53b439.forEach(_0x4005a5 => {
          const _0x187adb = _0x4005a5.slug;
          let _0x261131;
          if (_0x187adb && _0x5012d6.dataset[_0x187adb] && _0x187adb in this.parametersTotal) {
            _0x261131 = +_0x5012d6.dataset[_0x187adb];
            this.parametersTotal[_0x187adb] += _0x359b68 ? _0x261131 + Math.floor(_0x261131 * _0x359b68) : _0x261131;
          }
        });
      }
    }

    _displayParametersTotal() {
      this._applyWordTagBonus();
      this._applyJobLicenseBonus();
      for (let _0x667929 in this.parametersTotal) {
        document.querySelector('.js-total-' + _0x667929).textContent = this.parametersTotal[_0x667929];
      }
    }

    _resetAttributesTally() {
      this.attributesTally = {
        'p': 0,
        't': 0,
        's': 0
      };
    }

    _tallyAttributes(_0x557077) {
      if (_0x557077 && _0x557077.dataset.attribute && _0x557077.dataset.attribute.charAt(0).toLowerCase() in this.attributesTally) {
        const _0x9e1351 = _0x557077.dataset.combo ? 2 : 1;
        this.attributesTally[_0x557077.dataset.attribute.charAt(0).toLowerCase()] += _0x9e1351;
      }
    }

    _displayAttributesTally() {
      for (let _0x15448c in this.attributesTally) {
        document.querySelector(".js-tally-" + _0x15448c).textContent = this.attributesTally[_0x15448c];
      }
    }

    _applyWordTagBonus() {
      const _0x18f53d = {};
      console.log("Total Raw Attributes:", this.parametersTotal);
      let _0x2a685f = 0;
      for (let _0x3e81ea in this.wordTagsTally) {
        if (this.wordTagsTally[_0x3e81ea] >= _0x74a807) {
          const _0x29c98e = this._getWordTag(_0x3e81ea);
          if (_0x1ca4e1.indexOf(_0x3e81ea) > -1) {
            _0x2a685f++;
          }
          if (_0x29c98e && _0x29c98e.multiplier && _0x29c98e.parameters && Array.isArray(_0x29c98e.parameters)) {
            _0x29c98e.parameters.forEach(_0x3e301e => {
              _0x18f53d[_0x3e301e] = _0x3e301e in _0x18f53d ? _0x2726e4(_0x18f53d[_0x3e301e] + _0x29c98e.multiplier) : _0x29c98e.multiplier;
            });
          }
        }
      }
      if (_0x2a685f && this.applyMapBonus && Array.isArray(_0x53b439)) {
        _0x53b439.forEach(_0x36d738 => {
          _0x18f53d[_0x36d738.slug] = _0x18f53d[_0x36d738.slug] ? _0x2726e4(_0x18f53d[_0x36d738.slug] + _0x24da92) : _0x24da92;
        });
      }
      console.log("Word Tag Multipliers", _0x18f53d);
      for (let _0xf4593 in _0x18f53d) {
        if (_0xf4593 in this.parametersTotal) {
          this.parametersTotal[_0xf4593] = Math.round(this.parametersTotal[_0xf4593] + this.parametersTotal[_0xf4593] * _0x18f53d[_0xf4593]);
        }
      }
      console.log("Total Attributes With WT Bonus:", this.parametersTotal);
    }

    _getWordTag(_0x15474e) {
      return _0x1d757e.find(_0x222769 => _0x15474e === _0x222769.name);
    }

    _applyJobLicenseBonus() {
      const _0x2f64e0 = document.querySelector(".js-select-pilot"),
          _0x5992fb = this.inputs.pilot;
      if (_0x5992fb && _0x5992fb.dataset.jl) {
        const _0x4db8f5 = this._getJobLicense(_0x5992fb.dataset.jl);
        if (_0x4db8f5 && _0x4db8f5.multiplier && _0x4db8f5.parameters && Array.isArray(_0x4db8f5.parameters)) {
          _0x4db8f5.parameters.forEach(_0x440f50 => {
            if (_0x440f50 in this.parametersTotal) {
              this.parametersTotal[_0x440f50] = Math.round(this.parametersTotal[_0x440f50] + this.parametersTotal[_0x440f50] * _0x4db8f5.multiplier);
            }
          });
        }
      }
      console.log("Total Attributes With WT Bonus and Job Bonus:", this.parametersTotal);
    }

    _getJobLicense(_0x4d6d3b) {
      return _0x240928.find(_0x141803 => _0x4d6d3b === _0x141803.name);
    }

    _displayPartsWordTags() {
      const _0x44abe2 = this.inputs;
      for (let _0x4f2f88 in _0x44abe2) {
        if (_0x44abe2.hasOwnProperty(_0x4f2f88)) {
          const _0x222518 = this.inputs[_0x4f2f88];
          if (_0x222518) {
            if (!this._displayWordTags(_0x222518) && _0x44abe2[_0x4f2f88].disabled == ![]) {
              this._clearWordTag(_0x4f2f88);
            }
          }
        }
      }
    }

    _clearWordTag(_0x5ab937) {
      if (document.querySelector(".js-wt-" + _0x5ab937)) {
        document.querySelector(".js-wt-" + _0x5ab937).innerHTML = '';
      }
    }

    _clearParts(_0x28f333) {
      if (_0x28f333 && _0x28f333 in this.inputs) {
        const _0x9d86a = this.inputs[_0x28f333];
        _0x9d86a.value = '';
        _0x9d86a.title = '';
        _0x413fab(_0x9d86a);
        Object.assign(_0x9d86a.dataset, document.createElement("input").dataset);
        this._clearSkillTrait(_0x28f333);
        this._clearWordTag(_0x28f333);
        this._deleteMarks(_0x28f333);
      }
    }

    _initFilters() {
      const _0x19ab42 = document.querySelector('.js-filter-attr'),
          _0x35ca9d = document.querySelector(".js-filter-wt1"),
          _0x269b6b = document.querySelector(".js-filter-wt2"),
          _0x146c07 = document.querySelector(".js-filter-pt");
      if (Array.isArray(_0x41368a)) {
        _0x41368a.forEach(_0x437aaa => {
          const _0x45c8cd = document.createElement("option");
          _0x45c8cd.value = _0x437aaa;
          _0x45c8cd.text = _0x437aaa;
          _0x19ab42.appendChild(_0x45c8cd);
        });
      }
      if (Array.isArray(_0x2f75f1)) {
        _0x2f75f1.sort();
        _0x2f75f1.forEach(_0x102672 => {
          const _0x1ff2be = document.createElement('option');
          _0x1ff2be.value = _0x102672;
          _0x1ff2be.text = _0x102672;
          _0x269b6b.appendChild(_0x1ff2be.cloneNode(!![]));
          _0x35ca9d.appendChild(_0x1ff2be);
        });
      }
      if (Array.isArray(_0x28b132)) {
        _0x28b132.forEach(_0x5b01e4 => {
          const _0x425e75 = document.createElement("option");
          _0x425e75.value = _0x5b01e4;
          _0x425e75.text = _0x5b01e4;
          _0x146c07.appendChild(_0x425e75);
        });
      }
      for (let _0x2e0d6b in this.filters) {
        if (this.filters.hasOwnProperty(_0x2e0d6b)) {
          document.querySelector(".js-filter-" + _0x2e0d6b).addEventListener("change", _0x202b22 => {
            this.filters[_0x2e0d6b] = _0x202b22.currentTarget.value;
            if (this.currentPart) {
              this._showPartList(this.currentPart);
            }
          });
        }
      }
    }

    _initSort() {
      const _0xddf51f = document.querySelector('.js-sort-param');
      if (Array.isArray(_0x53b439)) {
        _0x53b439.forEach(_0x1195fa => {
          const _0x2d2e37 = document.createElement("option");
          _0x2d2e37.value = _0x1195fa.slug;
          _0x2d2e37.text = _0x1195fa.name;
          _0xddf51f.appendChild(_0x2d2e37);
        });
        _0xddf51f.addEventListener("change", _0x3cbdd4 => {
          this.sort = _0x3cbdd4.currentTarget.value;
          if (this.currentPart) {
            this._showPartList(this.currentPart);
          }
        });
      }
    }

    _initApplyMapBonus() {
      const _0x2b625c = document.querySelector(".js-apply-map-bonus");
      _0x2b625c.checked = ![];
      _0x2b625c.addEventListener("change", _0x1e241f => {
        this.applyMapBonus = _0x1e241f.currentTarget.checked;
        this._loopThroughInput();
      });
    }

    _initSearchPart() {
      const _0x80bd30 = document.querySelector(".js-search-part");
      let _0x4d4c9c;
      _0x80bd30.addEventListener("keyup", _0x13f458 => {
        this.searchPart = _0x13f458.currentTarget.value;
        clearTimeout(_0x4d4c9c);
        _0x4d4c9c = setTimeout(() => {
          if (this.currentPart) {
            this._showPartList(this.currentPart);
          }
        }, 500);
      });
    }

    _initRemove() {
      const _0x1eb663 = document.querySelector('.js-remove-part');
      _0x1eb663.addEventListener("click", _0x518721 => {
        const _0x460378 = this.currentPart;
        if (_0x460378 && Array.isArray(_0x3bb2a7) && _0x3bb2a7.indexOf(_0x460378) > -1) {
          const _0x42784b = document.querySelector('.js-input-' + _0x460378);
          if (_0x42784b && _0x42784b.dataset.combo) {
            document.querySelector(".js-input-" + _0x42784b.dataset.combo).disabled = ![];
            for (let _0x8c41c8 = 0; _0x8c41c8 < this.comboParts.length; _0x8c41c8++) {
              if (this.comboParts[_0x8c41c8].part == _0x460378) {
                this.comboParts.splice(_0x8c41c8, 1);
                break;
              }
            }
          }
          this._clearParts(_0x460378);
          this._loopThroughInput();
          this._displayPartsWordTags();
        }
      });
    }

    _displayPartInfo(_0x3a434c) {
      if (_0x3a434c && _0x3a434c.dataset.part && _0x904226.indexOf(_0x3a434c.dataset.part) > -1) {
        const _0x19868b = JSON.parse(_0x3a434c.dataset.wt),
            _0x2709b8 = JSON.parse(_0x3a434c.dataset.ex);
        let _0x3b1964 = 0;
        this.partNameCont.textContent = _0x3a434c.dataset.partname ? _0x3a434c.dataset.partname : '';
        if (_0x3a434c.nodeName.toLowerCase() === 'input') {
          _0x3b1964 = this._getMarkMultiplier(_0x3a434c.dataset.part);
        }
        _0x53b439.forEach(_0x4718c5 => {
          let _0x5a9461 = +_0x3a434c.dataset[_0x4718c5.slug];
          this.partParamCont[_0x4718c5.slug].textContent = 0;
          if (_0x5a9461) {
            this.partParamCont[_0x4718c5.slug].textContent = _0x3b1964 ? _0x5a9461 + Math.floor(_0x5a9461 * _0x3b1964) : _0x5a9461;
          }
        });
        if (Array.isArray(_0x19868b)) {
          this.partWTCont.innerHTML = _0x19868b.reduce((_0x57e9a1, _0x48eb12) => {
            return _0x57e9a1 + "<div>" + _0x48eb12 + "</div>";
          }, '');
        } else {
          this.partWTCont.innerHTML = '';
        }
        this.partSkillTraitCont.textContent = _0x2709b8.type && _0x2709b8.name ? _0x2709b8.name : '';
      }
    }

    _createMark(_0x5889a8, _0x1fe7a4) {
      if (_0x5889a8 && _0x5889a8.append && _0x1fe7a4) {
        const _0x449c8d = document.createElement("div"),
            _0x2d568b = document.querySelector(".js-input-" + _0x1fe7a4);
        _0x449c8d.classList.add('parts-marks__item');
        _0x449c8d.classList.add("js-mark-item");
        _0x449c8d.dataset.value = 0;
        _0x449c8d.addEventListener("click", _0x1afbb4 => {
          const _0x2a73d4 = _0x1afbb4.currentTarget,
              _0xb7b2d1 = +_0x2a73d4.dataset.value;
          _0x2a73d4.dataset.value = _0xb7b2d1 == 0 ? 5 : _0xb7b2d1 - 1;
          this._setSelectedPart(_0x1fe7a4);
          this._displayPartInfo(_0x2d568b);
          this._loopThroughInput();
        });
        _0x5889a8.append(_0x449c8d);
      }
    }

    _deleteMarks(_0x53889b) {
      const _0x1d1501 = document.querySelector(".js-marks-" + _0x53889b);
      if (_0x1d1501 && _0x1d1501.innerHTML) {
        _0x1d1501.innerHTML = '';
      }
    }

    _addMarks() {
      const _0x39c6e2 = this.currentPart,
          _0x3254be = document.querySelector(".js-marks-" + _0x39c6e2),
          _0x501e84 = _0x3254be ? document.querySelector(".js-input-" + _0x39c6e2) : null,
          _0x466916 = _0x501e84.dataset.mark ? _0x501e84.dataset.mark : _0x501e84.dataset.rarity;
      if (_0x466916) {
        for (let _0x3214cd = 5; _0x3214cd > _0x466916; _0x3214cd--) {
          this._createMark(_0x3254be, _0x39c6e2);
        }
      }
    }

    _getMarkMultiplier(_0x1b3452) {
      let _0x4645f6 = 0;
      Array.prototype.slice.call(document.querySelectorAll(".js-marks-" + _0x1b3452 + " .js-mark-item")).forEach(_0x31e12b => {
        if (_0x31e12b.dataset.value) {
          _0x4645f6 = _0x2726e4(_0x4645f6 + _0x4eaec4[_0x31e12b.dataset.value]);
        }
      });
      return _0x4645f6 && this._hasComboParts(_0x1b3452) ? _0x4645f6 / 2 : _0x4645f6;
    }

    _hasComboParts(_0x5d15dc) {
      const _0x106769 = document.querySelector(".js-input-" + _0x5d15dc);
      return !!(_0x106769 && _0x106769.dataset.combo);
    }

    _hasSelectedPart(_0x3d141b) {
      const _0x5b4bd5 = document.querySelector(".js-input-" + _0x3d141b);
      return !!(_0x5b4bd5 && _0x5b4bd5.value.length > 0);
    }

    _displayWordTags(_0x156312) {
      if (!(_0x156312 && _0x156312.dataset.part && _0x156312.dataset.wt)) {
        return ![];
      }
      const _0x322900 = document.querySelector('.js-wt-' + _0x156312.dataset.part),
          _0x5e8129 = JSON.parse(_0x156312.dataset.wt);
      if (Array.isArray(_0x5e8129) && _0x322900) {
        _0x322900.innerHTML = _0x5e8129.reduce((_0x45bbe9, _0x1c1fb1) => {
          const _0x155ae0 = this.wordTagsTally[_0x1c1fb1];
          return _0x45bbe9 + ((_0x45bbe9 == '' ? '' : "<br />") + "<span class=\"" + (_0x155ae0 >= _0x74a807 ? "activatedWT" : '') + "\">(" + _0x155ae0 + ')\x20' + _0x1c1fb1 + "</span>");
        }, '');
        if (_0x156312.dataset.combo) {
          document.querySelector('.js-wt-' + _0x156312.dataset.combo).innerHTML = _0x322900.innerHTML;
        }
      }
      return !![];
    }
  }

  //if (_0x2fc6b6 === _0x3a7ca7.join('')) {
  new _0x56ad8d();
  new _0x5c08c4().init();
  //}
})();