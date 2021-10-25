#!/usr/bin/env bash

if [[ $# > 0 ]]; then
  if [[ $1 = "json" ]]; then
    type="json"
  fi
  if [[ $1 = "serviceworker.js" ]]; then
    type="serviceworker.js"
  fi
else
  type="text"
fi


normpath=($(ls))
directories=($(ls -d */| rev | cut -c 2- | rev))
dirs=($(ls -d */))
exeption=("README.md" "paths.sh" "docs/" "readme/")
RED='\033[0;31m'
NC='\033[0m'
# echo $normpath
unddir=""
#output="test"


for i in "${normpath[@]}"
do
  status="true"
  #echo "i: $i"
  for y in "${exeption[@]}"
  do
    #echo "  i: $i  y: $y"
    if [[ $i = $y ]]; then
      status="false"
      #echo -e "${RED}status: $status${NC}"
    fi
  done
  for dir in "${directories[@]}"
  do
    #echo "i: $i  dir: $dir"
    if [[ $i = $dir ]]; then
      status="false"
    fi
  done
  #echo "status: $status"
  if [[ $status != "false" ]]; then
    #echo "---output: $i"
    output+=($(echo $i))
  fi
  #echo ""
done


for i in "${dirs[@]}"
do
  status="true"
  for z in "${exeption[@]}"
  do
    #echo "i: $i  z: $z"
    if [[ $i = $z ]]; then
      status="false"
    fi
  done
  #echo "gleich if [ $status = hallo]"
  if [ $status = "true" ]
  then
    #echo "if = true"
    #echo "status: $status"
    part=($(ls $i))
    for y in "${part[@]}"
    do
      output+=($(echo "$i$y"))
      #echo "test"
    done
  fi

done

for i in "${output[@]}"
do
  if [[ $type = "json" ]]; then
    echo \"$i\",
  elif [[ $type = "serviceworker.js" ]]; then
    echo \"./$i\",
  else
    echo $i
  fi
done
