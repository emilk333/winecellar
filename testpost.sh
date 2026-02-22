#!/bin/bash

curl -X POST -i http://localhost:3000/wine/ \
    -H "Content-type: application/json" \
    -d '{
        "name": "22",
        "description": "bla bla bla" 
    }'