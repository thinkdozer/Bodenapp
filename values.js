function getvalues(set){
const x = {
    "boden": {
      "type": "radio",
      "fallback": "10",
      "calculation": "overwrite",
      "assigns":{
        "boden::Sand": "10",
        "boden::lehmSand": "12",
        "boden::Schluff": "14",
        "boden::schluffLehm": "15",
        "boden::Lehm": "15",
        "boden::liteTon": "13",
        "boden::Ton": "12",
      }
    },
    "standort": {
      "type": "radio",
      "fallback": "0",
      "calculation": "addition",
      "assigns": {
        "Standort::Naß": "2",
        "Standort::Trocken": "-2",
      }
    },
    "lebewesen": {
      "type": "checkbox",
      "fallback": "0",
      "calculation": "addition",
      "assigns": {
        "Lebewesen::Haufen": "1",
        "Lebewesen::Gaenge": "1",
      }
    },
    "rückstände":{
      "type": "radio",
      "fallback": "0",
      "calculation": "addition",
      "assigns": {
        "Rückstände::vermodert": "2",
        "Rückstände::ganz": "-1",
      }
    },
    "humuszehrer":{
      "type": "radio",
      "fallback": 0,
      "calculation": "addition",
      "assigns": {
        "Fruchtfolge::humuszehrer": "-2",
        "Fruchtfolge::humusgeber": "4",
      }
    },
    "fruchtfolge":{
      "type": "checkbox",
      "fallback": "0",
      "calculation": "addition",
      "assigns":{
        "Fruchtfolge::nebenprodukte": "-2",
        "Fruchtfolge::zwischenfrüchte": "3",
        "Fruchtfolge::pfluglos": "2",
        "Fruchtfolge::organik": "4",
        "Fruchtfolge::legominosen": "5"
      }
    },
    "nährstoffe":{
      "type": "radio",
      "fallback": "0",
      "calculation": "addition",
      "assigns":{
        "Nährstoffe::dünger_gut": "2",
        "Nährstoffe::dünger_schlecht": "-1"
      }
    },
    "nährstoffe::vergleichbar":{
      "type": "checkbox",
      "fallback": "0",
      "calculation": "addition",
      "assigns":{
        "Nährstoffe::vergleichbar": "2",
      }
    },
    "wasser":{
      "type": "radio",
      "fallback": "0",
      "calculation": "addition",
      "assigns":{
        "Wasserspeicherfähigkeit::schnell": "-2",
        "Wasserspeicherfähigkeit::langsam": "3",
      }
    },
    "wasser::trockenperioden":{
      "type": "checkbox",
      "fallback": "0",
      "calculation": "addition",
      "assigns":{
        "Wasserspeicherfähigkeit::trockenperioden": "2",
      }
    }
  };
const y = {
    "geruch":{
      "type": "radio",
      "assigns":{
        "Geruch::modrich": "Moderhumus",
        "Geruch::moorig": "Rohhumus",
        "Geruch::nichts": "Mullhumus"
      }
    }
  };
  if (set == "amount") {
    return x;
  } else if (set == "type") {
    return y;
  } else if (set == "all"){
    let z = Object.assign(x, y);
    return z;
  } else {
    console.log(" Err: no type given")
  }
}
