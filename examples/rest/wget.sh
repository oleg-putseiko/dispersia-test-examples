wget -q -O - --method POST \
  --header 'Authorization: Bearer sk_live_XXXXXXXXX' \
  --header 'Content-Type: application/json' \
  --body-data '{
    "template_id": "tg_XXXXXXXXX",
    "data": {
      "name": "Jane Doe"
    }
  }' \
  'https://api.dispersia.io/messages'