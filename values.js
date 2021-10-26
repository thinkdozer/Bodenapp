function getvalues(set){
let x = {
    "boden": {
      "type": "radio",
      "fallback": "10",
      "calculation": "overwrite",
      "assigns":{
        "boden::Sand": "20",
        "boden::lehmSand": "21",
        "boden::Schluff": "22",
        "boden::schluffLehm": "23",
        "boden::Lehm": "24",
        "boden::liteTon": "25",
        "boden::Ton": "26",
      }
    },
    "standort": {
      "type": "radio",
      "fallback": "0",
      "calculation": "addition",
      "assigns": {
        "Standort::Naß": "5",
        "Standort::Trocken": "-3",
      }
    },
    "lebewesen": {
      "type": "checkbox",
      "fallback": "0",
      "calculation": "addition",
      "assigns": {
        "Lebewesen::Haufen": "3",
        "Lebewesen::Gaenge": "3",
      }
    },
    "rückstände":{
      "type": "radio",
      "fallback": "0",
      "calculation": "addition",
      "assigns": {
        "Rückstände::vermodert": "5",
        "Rückstände::ganz": "-5",
      }
    },
    "humuszehrer":{
      "type": "radio",
      "fallback": 0,
      "calculation": "addition",
      "assigns": {
        "Fruchtfolge::humuszehrer": "-8",
        "Fruchtfolge::humusgeber": "8",
      }
    },
    "fruchtfolge":{
      "type": "checkbox",
      "fallback": "0",
      "calculation": "addition",
      "assigns":{
        "Fruchtfolge::nebenprodukte": "-3",
        "Fruchtfolge::zwischenfrüchte": "4",
        "Fruchtfolge::pfluglos": "3",
        "Fruchtfolge::organik": "3",
        "Fruchtfolge::legominosen": "5"
      }
    },
    "nährstoffe":{
      "type": "radio",
      "fallback": "0",
      "calculation": "addition",
      "assigns":{
        "Nährstoffe::dünger_gut": "3",
        "Nährstoffe::dünger_schlecht": "-3"
      }
    },
    "nährstoffe::vergleichbar":{
      "type": "checkbox",
      "fallback": "0",
      "calculation": "addition",
      "assigns":{
        "Nährstoffe::vergleichbar": "3",
      }
    },
    "wasser":{
      "type": "radio",
      "fallback": "0",
      "calculation": "addition",
      "assigns":{
        "Wasserspeicherfähigkeit::schnell": "-3",
        "Wasserspeicherfähigkeit::langsam": "3",
      }
    },
    "wasser::trockenperioden":{
      "type": "checkbox",
      "fallback": "0",
      "calculation": "addition",
      "assigns":{
        "Wasserspeicherfähigkeit::trockenperioden": "3",
      }
    }
  };
  if (set == "amount") {
    return x;
  }
}
