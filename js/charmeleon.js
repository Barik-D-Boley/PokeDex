let input = `{
    "abilities": [
      {
        "name": "blaze"
      },
      {
        "name": "solar-power"
      }
    ],
    "base_experience": 142,
    "height": 11,
    "id": 5,
    "is_default": true,
    "name": "charmeleon",
    "order": 6,
    "stats": [
      {
        "base_stat": 58,
        "effort": 0,
        "stat": {
          "name": "hp"
        }
      },
      {
        "base_stat": 64,
        "effort": 0,
        "stat": {
          "name": "attack"
        }
      },
      {
        "base_stat": 58,
        "effort": 0,
        "stat": {
          "name": "defense"
        }
      },
      {
        "base_stat": 80,
        "effort": 1,
        "stat": {
          "name": "special-attack"
        }
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": {
          "name": "special-defense"
        }
      },
      {
        "base_stat": 80,
        "effort": 1,
        "stat": {
          "name": "speed"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire"
        }
      }
    ],
    "weight": 190
  }`

let parse = JSON.parse(input);

/* Title */
document.getElementById("name").innerHTML = parse.name;

/* Abilities */
document.getElementById("abilitiesName").innerHTML = Object.keys(parse)[0];
document.getElementById("ability1").innerHTML = parse.abilities[0].name;
document.getElementById("ability2").innerHTML = parse.abilities[1].name;

/* Characteristics */
document.getElementById("characteristicsName").innerHTML = "Characteristics";
document.getElementById("characteristicList1").innerHTML = Object.keys(parse)[1] + ": " + parse.base_experience;
document.getElementById("characteristicList2").innerHTML = Object.keys(parse)[2] + ": " + parse.height;
document.getElementById("characteristicList3").innerHTML = Object.keys(parse)[3] + ": " + parse.id;
document.getElementById("characteristicList4").innerHTML = Object.keys(parse)[4] + ": " + parse.is_default;
document.getElementById("characteristicList5").innerHTML = Object.keys(parse)[6] + ": " + parse.order;
document.getElementById("characteristicList6").innerHTML = Object.keys(parse)[9] + ": " + parse.weight;

/* Stats */
document.getElementById("statsTitle").innerHTML = Object.keys(parse)[7];

/* Row 1 */
    //Box 1
    document.getElementById("statName1").innerHTML = parse.stats[0].stat.name;
    document.getElementById("baseStat1").innerHTML = Object.keys(parse.stats[0])[0] + ": " + parse.stats[0].base_stat;
    document.getElementById("effort1").innerHTML = Object.keys(parse.stats[0])[1] + ": " + parse.stats[0].effort;

    //Box 2
    document.getElementById("statName2").innerHTML = parse.stats[1].stat.name;
    document.getElementById("baseStat2").innerHTML = Object.keys(parse.stats[0])[0] + ": " + parse.stats[1].base_stat;
    document.getElementById("effort2").innerHTML = Object.keys(parse.stats[0])[1] + ": " + parse.stats[1].effort;

    //Box 3
    document.getElementById("statName3").innerHTML = parse.stats[2].stat.name;
    document.getElementById("baseStat3").innerHTML = Object.keys(parse.stats[0])[0] + ": " + parse.stats[2].base_stat;
    document.getElementById("effort3").innerHTML = Object.keys(parse.stats[0])[1] + ": " + parse.stats[2].effort;

/* Row 2 */
    //Box 4
    document.getElementById("statName4").innerHTML = parse.stats[3].stat.name;
    document.getElementById("baseStat4").innerHTML = Object.keys(parse.stats[0])[0] + ": " + parse.stats[3].base_stat;
    document.getElementById("effort4").innerHTML = Object.keys(parse.stats[0])[1] + ": " + parse.stats[3].effort;

    //Box 5
    document.getElementById("statName5").innerHTML = parse.stats[4].stat.name;
    document.getElementById("baseStat5").innerHTML = Object.keys(parse.stats[0])[0] + ": " + parse.stats[4].base_stat;
    document.getElementById("effort5").innerHTML = Object.keys(parse.stats[0])[1] + ": " + parse.stats[4].effort;

    //Box 6
    document.getElementById("statName6").innerHTML = parse.stats[5].stat.name;
    document.getElementById("baseStat6").innerHTML = Object.keys(parse.stats[0])[0] + ": " + parse.stats[5].base_stat;
    document.getElementById("effort6").innerHTML = Object.keys(parse.stats[0])[1] + ": " + parse.stats[5].effort;

/* Types */
document.getElementById("typesTitle").innerHTML = Object.keys(parse)[8];

    //Box 1
    document.getElementById("type1").innerHTML = Object.keys(parse.types[0])[1] + ": " + parse.types[0].type.name;
    document.getElementById("slot1").innerHTML = Object.keys(parse.types[0])[0] + ": " + parse.types[0].slot;

    //Box 2
    document.getElementById("type2").innerHTML = Object.keys(parse.types[0])[1] + ": " + parse.types[1].type.name;
    document.getElementById("slot2").innerHTML = Object.keys(parse.types[0])[0] + ": " + parse.types[1].slot;

    document.body.innerHTML = document.body.innerHTML.replace(/_/g, " ");