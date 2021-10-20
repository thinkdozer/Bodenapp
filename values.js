function getvalues(){
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
    }
  };
return x;
}
