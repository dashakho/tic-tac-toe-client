curl --include --request PATCH "https://tic-tac-toe-wdi.herokuapp.com/games/${ID} (https://tic-tac-toe-wdi.herokuapp.com/games/$%7BID%7D)" \
     --header "Content-Type: application/json" \
     --header "Authorization: Token token=${TOKEN}" \
     --data '{
 "game": {
   "cell": {
     "index": 1,
     "value": "x"
   },
   "over": false
 }
}'
echo
